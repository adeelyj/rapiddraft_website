import nodemailer from 'nodemailer';
import PDFDocument from 'pdfkit';
import path from 'node:path';
import { LOI_TEMPLATE, NDA_TEMPLATE, RAPIDDRAFT_EMAIL, RAPIDDRAFT_FOUNDERS } from './lib/legalTemplates.js';

const DEFAULT_RECIPIENT = 'info@rapiddraft.ai';
const FUNCTION_DATA_DIR = path.join(process.cwd(), 'netlify', 'functions', 'data');
const SIGNATURE_ASSETS = [
    {
        name: 'Adeel Yawar Jamil',
        imagePath: path.join(FUNCTION_DATA_DIR, 'signature-adeel-trim.png'),
        maxWidth: 108,
        maxHeight: 72,
    },
    {
        name: 'Dr. Hasan Raza',
        imagePath: path.join(FUNCTION_DATA_DIR, 'signature-hasan-trim.png'),
        maxWidth: 78,
        maxHeight: 44,
    },
    {
        name: 'Sreekar Reddy Sajjala',
        imagePath: path.join(FUNCTION_DATA_DIR, 'signature-sreekar-trim.png'),
        maxWidth: 118,
        maxHeight: 48,
    },
];

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

function validatePayload(payload) {
    const missing = REQUIRED_FIELDS.filter((field) => !String(payload[field] ?? '').trim());

    if (missing.length > 0) {
        throw new Error(`Missing required fields: ${missing.join(', ')}`);
    }
}

export function buildPlaceholderMap(payload, effectiveDate) {
    return {
        '{{EFFECTIVE_DATE}}': effectiveDate,
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

function fillTemplateText(value, placeholders) {
    let result = value;

    Object.entries(placeholders).forEach(([placeholder, replacement]) => {
        result = result.replaceAll(placeholder, replacement);
    });

    return result;
}

function renderParagraph(doc, text, { indent = 0, paragraphGap = 10 } = {}) {
    doc
        .font('Times-Roman')
        .fontSize(11)
        .text(text, {
            align: 'left',
            indent,
            paragraphGap,
        });
}

function renderFounderSignatureBlock(doc, founder, effectiveDate) {
    const signatureAsset = SIGNATURE_ASSETS.find((asset) => asset.name === founder);

    doc.font('Times-Bold').fontSize(11).text(founder);

    if (signatureAsset) {
        const startX = doc.x;
        const startY = doc.y + 2;

        doc.image(signatureAsset.imagePath, startX, startY, {
            fit: [signatureAsset.maxWidth, signatureAsset.maxHeight],
            align: 'left',
            valign: 'top',
        });

        doc.y = startY + signatureAsset.maxHeight + 4;
    } else {
        doc.moveDown(0.5);
    }

    doc.font('Times-Roman').fontSize(11).text('Signature: ______________________________');
    doc.font('Times-Roman').fontSize(11).text(`Date: ${effectiveDate}`, {
        paragraphGap: 12,
    });
}

function renderSection(doc, section, placeholders) {
    doc
        .font('Times-Bold')
        .fontSize(12)
        .text(section.heading, {
            paragraphGap: 8,
        });

    (section.paragraphs ?? []).forEach((paragraph) => {
        renderParagraph(doc, fillTemplateText(paragraph, placeholders));
    });

    (section.bullets ?? []).forEach((bullet) => {
        renderParagraph(doc, `- ${fillTemplateText(bullet, placeholders)}`, {
            indent: 18,
            paragraphGap: 6,
        });
    });

    (section.lettered ?? []).forEach((item, index) => {
        const label = String.fromCharCode('a'.charCodeAt(0) + index);
        renderParagraph(doc, `${label}. ${fillTemplateText(item, placeholders)}`, {
            indent: 18,
            paragraphGap: 6,
        });
    });

    (section.paragraphsAfterList ?? []).forEach((paragraph) => {
        renderParagraph(doc, fillTemplateText(paragraph, placeholders));
    });
}

function renderSignatureSection(doc, placeholders) {
    const effectiveDate = fillTemplateText('{{EFFECTIVE_DATE}}', placeholders);

    doc.moveDown(0.6);
    doc
        .font('Times-Bold')
        .fontSize(12)
        .text('For the RapidDraft Founders', {
            paragraphGap: 10,
        });

    RAPIDDRAFT_FOUNDERS.forEach((founder) => {
        renderFounderSignatureBlock(doc, founder, effectiveDate);
    });

    doc
        .font('Times-Bold')
        .fontSize(12)
        .text(`For ${fillTemplateText('{{CUSTOMER_LEGAL_NAME}}', placeholders)}`, {
            paragraphGap: 10,
        });

    doc.font('Times-Roman').fontSize(11).text(`Name: ${fillTemplateText('{{CUSTOMER_SIGNER_NAME}}', placeholders)}`);
    doc.font('Times-Roman').fontSize(11).text(`Title: ${fillTemplateText('{{CUSTOMER_SIGNER_TITLE}}', placeholders)}`);
    doc.font('Times-Roman').fontSize(11).text('Signature: ______________________________');
    doc.font('Times-Roman').fontSize(11).text('Date: ______________________________');
}

export function renderDocumentPdf(template, placeholders) {
    return new Promise((resolve, reject) => {
        const doc = new PDFDocument({
            size: 'A4',
            margin: 54,
            info: {
                Title: fillTemplateText(template.title, placeholders),
                Author: 'RapidDraft',
            },
        });
        const chunks = [];

        doc.on('data', (chunk) => chunks.push(chunk));
        doc.on('end', () => resolve(Buffer.concat(chunks)));
        doc.on('error', reject);

        doc
            .font('Times-Bold')
            .fontSize(15)
            .text(template.title, {
                align: 'center',
                paragraphGap: 16,
            });

        template.intro.forEach((paragraph) => {
            renderParagraph(doc, fillTemplateText(paragraph, placeholders));
        });

        template.sections.forEach((section) => {
            renderSection(doc, section, placeholders);
        });

        renderSignatureSection(doc, placeholders);
        doc.end();
    });
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
        'Mit freundlichen Gruessen',
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

async function sendDocumentsByEmail({ transporter, payload, ndaResult, loiResult }) {
    const mailOptions = await buildOutgoingEmail({ payload, ndaResult, loiResult });

    await transporter.sendMail(mailOptions);

    return {
        sentCopy: {
            attempted: false,
            appended: false,
            skipped: true,
            reason: 'Sent-folder archival is not configured in the SMTP-only workflow.',
        },
        warnings: [],
    };
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
        const placeholders = buildPlaceholderMap(payload, effectiveDate);
        const companyStem = sanitizeFileStem(payload.company);
        const formCapture = {
            captured: isTrueish(payload.__form_captured),
        };

        const ndaResult = {
            pdfName: `NDA_${companyStem}.pdf`,
            pdfBuffer: await renderDocumentPdf(NDA_TEMPLATE, placeholders),
        };
        const loiResult = {
            pdfName: `LOI_${companyStem}.pdf`,
            pdfBuffer: await renderDocumentPdf(LOI_TEMPLATE, placeholders),
        };

        const warnings = [];
        let sentCopy = {
            attempted: false,
            appended: false,
            skipped: true,
            reason: testMode ? 'Skipped in test mode.' : 'Sent-folder archival is not configured in the SMTP-only workflow.',
        };

        if (!testMode) {
            const transporter = await createTransporter();
            const emailDelivery = await sendDocumentsByEmail({
                transporter,
                payload,
                ndaResult,
                loiResult,
            });
            sentCopy = emailDelivery.sentCopy;
            warnings.push(...emailDelivery.warnings);
        }

        return json(200, {
            ok: true,
            formCapture,
            delivery: {
                emailSent: !testMode,
                testMode,
                recipient: payload.email,
                sentCopy,
            },
            warnings,
            nda: {
                pdfName: ndaResult.pdfName,
            },
            loi: {
                pdfName: loiResult.pdfName,
            },
        });
    } catch (error) {
        return json(500, {
            error: error instanceof Error ? error.message : 'Failed to generate the NDA and LOI.',
        });
    }
}
