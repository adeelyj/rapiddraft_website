import { google } from 'googleapis';
import nodemailer from 'nodemailer';
import { Readable } from 'node:stream';
import MailComposer from 'nodemailer/lib/mail-composer/index.js';
import { ImapFlow } from 'imapflow';

const DEFAULT_NDA_TEMPLATE_ID = '1ru1iVhcOonH0BXJn55KU40shAIqoX4NpssL0IVX0aho';
const DEFAULT_LOI_TEMPLATE_ID = '14i9s8J3FQWAiZKH-JyOpm6LqGmr1qe5SajDqEcBZLoI';
const DEFAULT_RECIPIENT = 'info@rapiddraft.ai';
const RAPIDDRAFT_EMAIL = 'info@rapiddraft.ai';

const REQUIRED_FIELDS = [
    'full-name',
    'title',
    'email',
    'company',
    'jurisdiction',
    'address',
    'business-unit-site',
    'systems-environment',
    'use-case-workflow',
];

function json(statusCode, body) {
    return {
        statusCode,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    };
}

function readEnv(name, { required = false, fallback } = {}) {
    const rawValue = process.env[name];
    const normalizedValue = typeof rawValue === 'string' && rawValue.trim() === '' ? undefined : rawValue;
    const value = normalizedValue ?? fallback;

    if (required && !value) {
        throw new Error(`Missing required environment variable: ${name}`);
    }

    return value;
}

function isTrueish(value) {
    return ['1', 'true', 'yes', 'on'].includes(String(value ?? '').trim().toLowerCase());
}

function normalizePrivateKey(value) {
    return value.replace(/\\n/g, '\n');
}

function hasOAuthCredentials() {
    return Boolean(
        process.env.GOOGLE_OAUTH_CLIENT_ID &&
        process.env.GOOGLE_OAUTH_CLIENT_SECRET &&
        process.env.GOOGLE_OAUTH_REFRESH_TOKEN
    );
}

function sanitizeFileStem(value) {
    return value
        .trim()
        .replace(/[^a-zA-Z0-9._-]+/g, '_')
        .replace(/^_+|_+$/g, '') || 'Customer';
}

function formatEffectiveDate(date, timeZone) {
    return new Intl.DateTimeFormat('de-DE', {
        timeZone,
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    }).format(date);
}

function buildPlaceholderMap(payload, effectiveDate) {
    return {
        '{{EFFECTIVE_DATE}}': effectiveDate,
        '{{RAPIDDRAFT_ADDRESS}}': readEnv('RAPIDDRAFT_LEGAL_ADDRESS', { required: true }),
        '{{RAPIDDRAFT_EMAIL}}': RAPIDDRAFT_EMAIL,
        '{{CUSTOMER_LEGAL_NAME}}': payload.company,
        '{{CUSTOMER_JURISDICTION}}': payload.jurisdiction,
        '{{CUSTOMER_ADDRESS}}': payload.address,
        '{{CUSTOMER_SIGNER_NAME}}': payload['full-name'],
        '{{CUSTOMER_SIGNER_TITLE}}': payload.title,
        '{{USE_CASE_WORKFLOW}}': payload['use-case-workflow'],
        '{{BUSINESS_UNIT_SITE}}': payload['business-unit-site'],
        '{{SYSTEMS_ENVIRONMENT}}': payload['systems-environment'],
    };
}

function describeGoogleAccessError(error) {
    const status = error?.code ?? error?.response?.status;
    const message = error?.response?.data?.error?.message || error?.message || 'Google Drive request failed';

    if (status === 404 && /File not found:/i.test(message)) {
        if (hasOAuthCredentials()) {
            return 'Google Drive access failed for the configured OAuth account. Confirm that the NDA template, LOI template, and output folder all exist in that Google account or are shared with it.';
        }

        const serviceAccountEmail = readEnv('GOOGLE_SERVICE_ACCOUNT_EMAIL', { fallback: 'your Google service account' });
        return `Google Drive access failed. Share the NDA template, LOI template, and output folder with ${serviceAccountEmail}, then try again.`;
    }

    return message;
}

function validatePayload(payload) {
    const missing = REQUIRED_FIELDS.filter((field) => !String(payload[field] ?? '').trim());

    if (missing.length > 0) {
        throw new Error(`Missing required fields: ${missing.join(', ')}`);
    }
}

async function createGoogleClients() {
    const scopes = [
        'https://www.googleapis.com/auth/documents',
        'https://www.googleapis.com/auth/drive',
    ];

    let auth;

    if (hasOAuthCredentials()) {
        auth = new google.auth.OAuth2(
            readEnv('GOOGLE_OAUTH_CLIENT_ID', { required: true }),
            readEnv('GOOGLE_OAUTH_CLIENT_SECRET', { required: true }),
            readEnv('GOOGLE_OAUTH_REDIRECT_URI', { fallback: 'http://localhost' })
        );

        auth.setCredentials({
            refresh_token: readEnv('GOOGLE_OAUTH_REFRESH_TOKEN', { required: true }),
        });
    } else {
        const clientEmail = readEnv('GOOGLE_SERVICE_ACCOUNT_EMAIL', { required: true });
        const privateKey = normalizePrivateKey(readEnv('GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY', { required: true }));

        auth = new google.auth.JWT({
            email: clientEmail,
            key: privateKey,
            scopes,
        });
    }

    return {
        docs: google.docs({ version: 'v1', auth }),
        drive: google.drive({ version: 'v3', auth }),
    };
}

async function createTransporter() {
    const host = readEnv('SMTP_HOST', { required: true });
    const port = Number(readEnv('SMTP_PORT', { required: true }));
    const secure = String(process.env.SMTP_SECURE ?? '').toLowerCase() === 'true' || port === 465;
    const user = readEnv('SMTP_USER', { required: true });
    const pass = readEnv('SMTP_PASS', { required: true });

    return nodemailer.createTransport({
        host,
        port,
        secure,
        auth: {
            user,
            pass,
        },
    });
}

async function createImapClient() {
    const host = readEnv('IMAP_HOST', { required: true });
    const port = Number(readEnv('IMAP_PORT', { required: true }));
    const secure = String(process.env.IMAP_SECURE ?? '').toLowerCase() !== 'false';
    const user = readEnv('IMAP_USER', { fallback: readEnv('SMTP_USER', { required: true }) });
    const pass = readEnv('IMAP_PASS', { fallback: readEnv('SMTP_PASS', { required: true }) });

    const client = new ImapFlow({
        host,
        port,
        secure,
        auth: {
            user,
            pass,
        },
    });

    await client.connect();
    return client;
}

async function applyPlaceholders(docs, documentId, placeholders) {
    const requests = Object.entries(placeholders).map(([placeholder, value]) => ({
        replaceAllText: {
            containsText: {
                text: placeholder,
                matchCase: true,
            },
            replaceText: value,
        },
    }));

    await docs.documents.batchUpdate({
        documentId,
        requestBody: { requests },
    });
}

async function exportPdf(drive, fileId) {
    const response = await drive.files.export(
        {
            fileId,
            mimeType: 'application/pdf',
        },
        {
            responseType: 'arraybuffer',
        }
    );

    return Buffer.from(response.data);
}

async function createFilledDocument({
    drive,
    docs,
    templateId,
    outputFolderId,
    fileStem,
    placeholders,
}) {
    const copyResponse = await drive.files.copy({
        fileId: templateId,
        requestBody: {
            name: fileStem,
            ...(outputFolderId ? { parents: [outputFolderId] } : {}),
        },
        fields: 'id,name,webViewLink',
    });

    const documentId = copyResponse.data.id;

    if (!documentId) {
        throw new Error(`Failed to create working copy for ${fileStem}`);
    }

    await applyPlaceholders(docs, documentId, placeholders);

    const pdfBuffer = await exportPdf(drive, documentId);
    const pdfName = `${fileStem}.pdf`;

    const pdfResponse = await drive.files.create({
        requestBody: {
            name: pdfName,
            mimeType: 'application/pdf',
            ...(outputFolderId ? { parents: [outputFolderId] } : {}),
        },
        media: {
            mimeType: 'application/pdf',
            body: Readable.from(pdfBuffer),
        },
        fields: 'id,name,webViewLink',
    });

    return {
        documentId,
        documentName: copyResponse.data.name,
        documentUrl: copyResponse.data.webViewLink ?? null,
        pdfId: pdfResponse.data.id ?? null,
        pdfName,
        pdfUrl: pdfResponse.data.webViewLink ?? null,
        pdfBuffer,
    };
}

async function buildOutgoingEmail({ payload, ndaResult, loiResult }) {
    const from = readEnv('SMTP_FROM', { required: true });
    const recipient = payload.email;
    const internalRecipient = readEnv('AUTOMATION_INTERNAL_RECIPIENT', { fallback: DEFAULT_RECIPIENT });
    const subject = `RapidDraft NDA and LOI - ${payload.company}`;

    const lines = [
        'Sehr geehrte Damen und Herren,',
        '',
        'vielen Dank fuer die Bereitstellung der Informationen.',
        '',
        'Anbei uebersenden wir Ihnen die Non-Disclosure Agreement (NDA) sowie die Letter of Intent (LOI). Wir bitten Sie, beide Dokumente zu unterzeichnen und anschliessend an info@rapiddraft.ai zurueckzusenden.',
        '',
        'Nach Erhalt werden wir uns zeitnah mit den naechsten Schritten bei Ihnen melden.',
        '',
        'Mit freundlichen Grüßen',
        'RapidDraft Team',
        '',
        '--',
        '',
        'Dear Sir or Madam,',
        '',
        'Thank you for providing us with the information.',
        '',
        'Please find attached the NDA and LOI. Kindly sign both documents and send them back to info@rapiddraft.ai.',
        '',
        'Once received, we will get in touch with you shortly regarding the next steps.',
        '',
        'Best regards,',
        'RapidDraft Team',
        '',
    ];

    return {
        from,
        to: recipient,
        cc: internalRecipient,
        replyTo: internalRecipient,
        subject,
        text: lines.join('\n'),
        attachments: [
            {
                filename: ndaResult.pdfName,
                content: ndaResult.pdfBuffer,
                contentType: 'application/pdf',
            },
            {
                filename: loiResult.pdfName,
                content: loiResult.pdfBuffer,
                contentType: 'application/pdf',
            },
        ],
    };
}

async function appendToSentMailbox(rawMessage) {
    const sentFolder = readEnv('IMAP_SENT_FOLDER', { fallback: 'Sent' });
    const client = await createImapClient();

    try {
        await client.append(sentFolder, rawMessage, ['\\Seen'], new Date());
    } finally {
        await client.logout().catch(() => {});
    }
}

async function sendDocumentsByEmail({ transporter, payload, ndaResult, loiResult }) {
    const mailOptions = await buildOutgoingEmail({ payload, ndaResult, loiResult });
    const rawMessage = await new MailComposer(mailOptions).compile().build();

    await transporter.sendMail({
        envelope: {
            from: mailOptions.from,
            to: [mailOptions.to].concat(mailOptions.cc ? [mailOptions.cc] : []),
        },
        raw: rawMessage,
    });

    await appendToSentMailbox(rawMessage);
}

export async function handler(event) {
    if (event.httpMethod !== 'POST') {
        return json(405, { error: 'Method not allowed' });
    }

    try {
        const payload = JSON.parse(event.body ?? '{}');
        validatePayload(payload);
        const testMode = isTrueish(process.env.AUTOMATION_TEST_MODE);
        const submissionTime = new Date();
        const effectiveDate = formatEffectiveDate(
            submissionTime,
            readEnv('RAPIDDRAFT_EFFECTIVE_DATE_TIMEZONE', { fallback: 'Europe/Berlin' })
        );

        const { docs, drive } = await createGoogleClients();
        const transporter = testMode ? null : await createTransporter();
        const placeholders = buildPlaceholderMap(payload, effectiveDate);
        const outputFolderId = readEnv('GOOGLE_OUTPUT_FOLDER_ID');
        const companyStem = sanitizeFileStem(payload.company);

        const ndaTemplateId = readEnv('GOOGLE_NDA_TEMPLATE_ID', { fallback: DEFAULT_NDA_TEMPLATE_ID });
        const loiTemplateId = readEnv('GOOGLE_LOI_TEMPLATE_ID', { fallback: DEFAULT_LOI_TEMPLATE_ID });

        const ndaResult = await createFilledDocument({
            drive,
            docs,
            templateId: ndaTemplateId,
            outputFolderId,
            fileStem: `NDA_${companyStem}`,
            placeholders,
        });

        const loiResult = await createFilledDocument({
            drive,
            docs,
            templateId: loiTemplateId,
            outputFolderId,
            fileStem: `LOI_${companyStem}`,
            placeholders,
        });

        if (transporter) {
            await sendDocumentsByEmail({
                transporter,
                payload,
                ndaResult,
                loiResult,
            });
        }

        return json(200, {
            ok: true,
            delivery: {
                emailSent: !testMode,
                testMode,
                recipient: payload.email,
            },
            nda: {
                documentUrl: ndaResult.documentUrl,
                pdfUrl: ndaResult.pdfUrl,
                pdfName: ndaResult.pdfName,
            },
            loi: {
                documentUrl: loiResult.documentUrl,
                pdfUrl: loiResult.pdfUrl,
                pdfName: loiResult.pdfName,
            },
        });
    } catch (error) {
        return json(500, {
            error: describeGoogleAccessError(error),
        });
    }
}
