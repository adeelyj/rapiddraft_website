import { ArrowLeft, ShieldCheck } from 'lucide-react';
import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import PageMeta from '../components/PageMeta';
import { useLang } from '../i18n/LanguageContext';
import {
    Section,
    Container,
    Eyebrow,
    H1,
    H2,
    Subhead,
    Intro,
    Body,
    Button,
} from '../components/ui/primitives';

type SubmissionState = 'idle' | 'submitting' | 'success' | 'follow-up' | 'error';

type GeneratedDocument = {
    documentUrl?: string | null;
    pdfUrl?: string | null;
    pdfName?: string | null;
};

type SubmissionResult = {
    formCapture?: {
        captured?: boolean;
    };
    delivery?: {
        emailSent?: boolean;
        testMode?: boolean;
        recipient?: string;
        sentCopy?: {
            attempted?: boolean;
            appended?: boolean;
            skipped?: boolean;
            reason?: string | null;
        };
    };
    warnings?: string[];
    nda?: GeneratedDocument;
    loi?: GeneratedDocument;
};

/* Netlify form contract — do NOT change these. The form name and every input
   name= must stay in sync with the hidden static form in index.html and the
   generate-nda-loi function payload, or submissions stop working. */
const FORM_NAME = 'nda-request';
const INTERNAL_RECIPIENT = 'info@rapiddraft.ai';

const CONTENT = {
    en: {
        meta: {
            title: 'NDA + LOI Request | RapidDraft',
            description:
                'Share the company and workflow details RapidDraft needs to prepare and send the NDA and LOI together.',
        },
        backLink: 'Back to Deal Room',
        hero: {
            eyebrow: 'NDA + LOI Request',
            heading: 'Share the details to prepare the NDA and LOI.',
            subhead:
                'We use these to prepare both documents and send them together. Once they are signed, we set up the discussion. Your drawings and workflow details stay covered by the NDA from the start.',
            checklist: [
                'We use these details to prepare and send the NDA and LOI together.',
                'Once both are signed, we set up the discussion.',
            ],
        },
        form: {
            title: 'NDA + LOI details',
            intro:
                'Company, jurisdiction, and the workflow you want to test. The more specific the detail, the cleaner the documents we can prepare.',
            fullName: { label: 'Full name', placeholder: 'Jane Doe' },
            jobTitle: { label: 'Title', placeholder: 'Director of Engineering' },
            email: { label: 'Email', placeholder: 'jane@company.com' },
            company: { label: 'Company', placeholder: 'Company GmbH' },
            jurisdiction: { label: 'Jurisdiction', placeholder: 'Delaware, Germany, England & Wales' },
            address: { label: 'Address', placeholder: 'Street, city, postal code, country' },
            businessUnit: { label: 'Business unit / site', placeholder: 'Customer entity / site / team' },
            systems: { label: 'Systems / environment', placeholder: 'Siemens NX / Teamcenter / internal standards' },
            useCase: { label: 'Use case / workflow', placeholder: 'Drawing checks / manufacturability review / selected release workflow' },
            required: 'required',
            submit: 'Send NDA + LOI Request',
            submitting: 'Sending NDA + LOI Request...',
        },
        success: {
            followUpTitle: 'Request received.',
            thankYouTitle: 'Thank you.',
            followUpBody:
                'Your request was received and saved. The automated NDA and LOI send needs a manual follow-up, and RapidDraft will take it from here.',
            testModeBody: 'Thank you for the details. The NDA and LOI were generated.',
            sentBody: 'Thank you for the details. The NDA and LOI have been sent to your email.',
            documentsTitle: 'Generated documents',
            ndaDoc: 'Open NDA working document',
            ndaPdf: 'Open NDA PDF',
            loiDoc: 'Open LOI working document',
            loiPdf: 'Open LOI PDF',
            returnCta: 'Return to Deal Room',
            emailCta: 'Email RapidDraft',
        },
        errors: {
            capture:
                'The request could not be saved. Please try again or email info@rapiddraft.ai directly.',
        },
    },
    de: {
        meta: {
            title: 'NDA + LOI anfragen | RapidDraft',
            description:
                'Teilen Sie die Angaben zu Unternehmen und Workflow, die RapidDraft braucht, um NDA und LOI gemeinsam vorzubereiten und zu senden.',
        },
        backLink: 'Zurück zum Deal Room',
        hero: {
            eyebrow: 'NDA + LOI anfragen',
            heading: 'Teilen Sie die Angaben zur Vorbereitung von NDA und LOI.',
            subhead:
                'Wir nutzen sie, um beide Dokumente vorzubereiten und gemeinsam zu senden. Sind sie unterschrieben, vereinbaren wir das Gespräch. Ihre Zeichnungen und Workflow-Details sind vom Start an durch das NDA abgedeckt.',
            checklist: [
                'Wir nutzen diese Angaben, um NDA und LOI gemeinsam vorzubereiten und zu senden.',
                'Sind beide unterschrieben, vereinbaren wir das Gespräch.',
            ],
        },
        form: {
            title: 'NDA + LOI Angaben',
            intro:
                'Unternehmen, Gerichtsstand und der Workflow, den Sie testen wollen. Je konkreter die Angabe, desto sauberer die Dokumente, die wir vorbereiten können.',
            fullName: { label: 'Vollständiger Name', placeholder: 'Erika Mustermann' },
            jobTitle: { label: 'Funktion', placeholder: 'Leitung Konstruktion' },
            email: { label: 'E-Mail', placeholder: 'erika@unternehmen.de' },
            company: { label: 'Unternehmen', placeholder: 'Unternehmen GmbH' },
            jurisdiction: { label: 'Gerichtsstand', placeholder: 'Deutschland, Österreich, Delaware' },
            address: { label: 'Adresse', placeholder: 'Straße, Ort, Postleitzahl, Land' },
            businessUnit: { label: 'Geschäftsbereich / Standort', placeholder: 'Gesellschaft / Standort / Team' },
            systems: { label: 'Systeme / Umgebung', placeholder: 'Siemens NX / Teamcenter / interne Normen' },
            useCase: { label: 'Anwendungsfall / Workflow', placeholder: 'Zeichnungsprüfung / Fertigbarkeits-Review / gewählter Freigabe-Workflow' },
            required: 'erforderlich',
            submit: 'NDA + LOI Anfrage senden',
            submitting: 'NDA + LOI Anfrage wird gesendet...',
        },
        success: {
            followUpTitle: 'Anfrage erhalten.',
            thankYouTitle: 'Vielen Dank.',
            followUpBody:
                'Ihre Anfrage wurde erhalten und gespeichert. Der automatische Versand von NDA und LOI braucht eine manuelle Nachverfolgung, und RapidDraft übernimmt ab hier.',
            testModeBody: 'Danke für die Angaben. NDA und LOI wurden erstellt.',
            sentBody: 'Danke für die Angaben. NDA und LOI wurden an Ihre E-Mail-Adresse gesendet.',
            documentsTitle: 'Erstellte Dokumente',
            ndaDoc: 'NDA-Arbeitsdokument öffnen',
            ndaPdf: 'NDA-PDF öffnen',
            loiDoc: 'LOI-Arbeitsdokument öffnen',
            loiPdf: 'LOI-PDF öffnen',
            returnCta: 'Zurück zum Deal Room',
            emailCta: 'RapidDraft kontaktieren',
        },
        errors: {
            capture:
                'Die Anfrage konnte nicht gespeichert werden. Bitte versuchen Sie es erneut oder schreiben Sie direkt an info@rapiddraft.ai.',
        },
    },
} as const;

function encodeSubmission(payload: Record<string, string>) {
    const params = new URLSearchParams();

    Object.entries(payload).forEach(([key, value]) => {
        params.append(key, value);
    });

    return params.toString();
}

async function captureNetlifySubmission(payload: Record<string, string>) {
    const response = await fetch('/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: encodeSubmission({
            'form-name': FORM_NAME,
            ...payload,
        }),
    });

    if (!response.ok) {
        throw new Error('capture-failed');
    }
}

export default function NdaRequest() {
    const { lang } = useLang();
    const t = CONTENT[lang];

    const [status, setStatus] = useState<SubmissionState>('idle');
    const [errorMessage, setErrorMessage] = useState('');
    const [submissionResult, setSubmissionResult] = useState<SubmissionResult | null>(null);

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);
        const payload = Object.fromEntries(formData.entries()) as Record<string, string>;

        setStatus('submitting');
        setErrorMessage('');
        setSubmissionResult(null);

        try {
            await captureNetlifySubmission(payload);
        } catch {
            setStatus('error');
            setErrorMessage(t.errors.capture);

            return;
        }

        try {
            const response = await fetch('/.netlify/functions/generate-nda-loi', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...payload,
                    __form_captured: 'true',
                }),
            });

            if (!response.ok) {
                const data = (await response.json().catch(() => null)) as { error?: string } | null;
                throw new Error(data?.error || 'Request failed');
            }

            const data = (await response.json()) as SubmissionResult;
            form.reset();
            setSubmissionResult(data);
            setStatus('success');
        } catch {
            form.reset();
            setStatus('follow-up');
            setErrorMessage('');
            setSubmissionResult({
                formCapture: {
                    captured: true,
                },
            });
        }
    };

    const isComplete = status === 'success' || status === 'follow-up';
    const required = <span className="text-[var(--rd-accent)]">*</span>;

    return (
        <div className="rd2 rd-page">
            <PageMeta
                title={t.meta.title}
                description={t.meta.description}
                path="/deal-room/nda-request"
            />

            {/* ── Hero ─────────────────────────────────────────── */}
            <header className="relative overflow-hidden">
                <div
                    className="pointer-events-none absolute inset-0"
                    aria-hidden="true"
                    style={{ background: 'radial-gradient(48% 50% at 50% -6%, var(--rd-accent-soft), transparent 62%)' }}
                />
                <Container className="relative w-full pt-28 pb-16 sm:pt-32 sm:pb-20">
                    <div className="mx-auto max-w-[820px] text-center">
                        <Link
                            to="/deal-room"
                            className="inline-flex items-center gap-2 text-[14px] text-[var(--rd-fg-3)] transition hover:text-[var(--rd-accent)]"
                        >
                            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                            {t.backLink}
                        </Link>
                        <Eyebrow className="mt-5">{t.hero.eyebrow}</Eyebrow>
                        <H1 className="mt-5">{t.hero.heading}</H1>
                        <Subhead className="mx-auto mt-5 max-w-[760px]">{t.hero.subhead}</Subhead>
                        <ul className="mx-auto mt-8 flex max-w-[560px] flex-col gap-2.5 text-left">
                            {t.hero.checklist.map((item) => (
                                <li key={item} className="flex gap-2.5">
                                    <span
                                        aria-hidden="true"
                                        className="mt-2 h-1 w-1 flex-none rounded-full bg-[var(--rd-accent)]"
                                    />
                                    <Body soft sm>
                                        {item}
                                    </Body>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Container>
            </header>

            {/* ── Request form ─────────────────────────────────── */}
            <Section>
                <div className="mx-auto max-w-[860px] text-center">
                    <H2>{t.form.title}</H2>
                    <Intro className="mx-auto mt-5 max-w-[760px]">{t.form.intro}</Intro>
                </div>

                <div className="mx-auto mt-10 w-full max-w-[680px] rd-tile rd-tile--left">
                    {isComplete ? (
                        <div className="py-2">
                            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--rd-accent-soft)] text-[var(--rd-accent)]">
                                <ShieldCheck className="h-6 w-6" aria-hidden="true" />
                            </span>
                            <H2 className="mt-6">
                                {status === 'follow-up' ? t.success.followUpTitle : t.success.thankYouTitle}
                            </H2>
                            <Body soft className="mt-4">
                                {status === 'follow-up'
                                    ? t.success.followUpBody
                                    : submissionResult?.delivery?.testMode
                                        ? t.success.testModeBody
                                        : t.success.sentBody}
                            </Body>

                            {submissionResult?.delivery?.testMode && submissionResult?.warnings?.length ? (
                                <div className="mt-5 rounded-[var(--rd-r-md)] border border-[var(--rd-hair)] bg-[var(--rd-bg)] px-4 py-3 text-[14px] text-[var(--rd-fg-2)]">
                                    {submissionResult.warnings.map((warning) => (
                                        <p key={warning}>{warning}</p>
                                    ))}
                                </div>
                            ) : null}

                            {submissionResult?.delivery?.testMode ? (
                                <div className="mt-5 rounded-[var(--rd-r-md)] border border-[var(--rd-hair)] bg-[var(--rd-surface)] px-5 py-4 text-[14px]">
                                    <p className="font-medium text-[var(--rd-fg)]">{t.success.documentsTitle}</p>
                                    <div className="mt-3 flex flex-col gap-2">
                                        {submissionResult.nda?.documentUrl ? (
                                            <a href={submissionResult.nda.documentUrl} className="text-[var(--rd-accent)] hover:underline">
                                                {t.success.ndaDoc}
                                            </a>
                                        ) : null}
                                        {submissionResult.nda?.pdfUrl ? (
                                            <a href={submissionResult.nda.pdfUrl} className="text-[var(--rd-accent)] hover:underline">
                                                {t.success.ndaPdf}
                                            </a>
                                        ) : null}
                                        {submissionResult.loi?.documentUrl ? (
                                            <a href={submissionResult.loi.documentUrl} className="text-[var(--rd-accent)] hover:underline">
                                                {t.success.loiDoc}
                                            </a>
                                        ) : null}
                                        {submissionResult.loi?.pdfUrl ? (
                                            <a href={submissionResult.loi.pdfUrl} className="text-[var(--rd-accent)] hover:underline">
                                                {t.success.loiPdf}
                                            </a>
                                        ) : null}
                                    </div>
                                </div>
                            ) : null}

                            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                                <Button to="/deal-room" variant="primary">
                                    {t.success.returnCta}
                                </Button>
                                <Button href={`mailto:${INTERNAL_RECIPIENT}`} variant="secondary">
                                    {t.success.emailCta}
                                </Button>
                            </div>
                        </div>
                    ) : (
                        <form
                            name={FORM_NAME}
                            method="POST"
                            data-netlify="true"
                            netlify-honeypot="bot-field"
                            className="flex flex-col gap-5 text-left"
                            onSubmit={handleSubmit}
                        >
                            <input type="hidden" name="form-name" value={FORM_NAME} />
                            <input type="hidden" name="bot-field" />
                            <input type="hidden" name="submission_recipient" value={INTERNAL_RECIPIENT} />

                            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="nda-full-name" className="rd-label">
                                        {t.form.fullName.label} {required}
                                    </label>
                                    <input
                                        type="text"
                                        name="full-name"
                                        id="nda-full-name"
                                        required
                                        placeholder={t.form.fullName.placeholder}
                                        className="rd-input"
                                        autoComplete="name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="nda-title" className="rd-label">
                                        {t.form.jobTitle.label} {required}
                                    </label>
                                    <input
                                        type="text"
                                        name="title"
                                        id="nda-title"
                                        required
                                        placeholder={t.form.jobTitle.placeholder}
                                        className="rd-input"
                                        autoComplete="organization-title"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="nda-email" className="rd-label">
                                        {t.form.email.label} {required}
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="nda-email"
                                        required
                                        placeholder={t.form.email.placeholder}
                                        className="rd-input"
                                        autoComplete="email"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="nda-company" className="rd-label">
                                        {t.form.company.label} {required}
                                    </label>
                                    <input
                                        type="text"
                                        name="company"
                                        id="nda-company"
                                        required
                                        placeholder={t.form.company.placeholder}
                                        className="rd-input"
                                        autoComplete="organization"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="nda-jurisdiction" className="rd-label">
                                        {t.form.jurisdiction.label} {required}
                                    </label>
                                    <input
                                        type="text"
                                        name="jurisdiction"
                                        id="nda-jurisdiction"
                                        required
                                        placeholder={t.form.jurisdiction.placeholder}
                                        className="rd-input"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="nda-business-unit" className="rd-label">
                                        {t.form.businessUnit.label} {required}
                                    </label>
                                    <input
                                        type="text"
                                        name="business-unit-site"
                                        id="nda-business-unit"
                                        required
                                        placeholder={t.form.businessUnit.placeholder}
                                        className="rd-input"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="nda-address" className="rd-label">
                                    {t.form.address.label} {required}
                                </label>
                                <textarea
                                    name="address"
                                    id="nda-address"
                                    required
                                    rows={3}
                                    placeholder={t.form.address.placeholder}
                                    className="rd-textarea"
                                />
                            </div>

                            <div>
                                <label htmlFor="nda-systems" className="rd-label">
                                    {t.form.systems.label} {required}
                                </label>
                                <input
                                    type="text"
                                    name="systems-environment"
                                    id="nda-systems"
                                    required
                                    placeholder={t.form.systems.placeholder}
                                    className="rd-input"
                                />
                            </div>

                            <div>
                                <label htmlFor="nda-use-case" className="rd-label">
                                    {t.form.useCase.label} {required}
                                </label>
                                <textarea
                                    name="use-case-workflow"
                                    id="nda-use-case"
                                    required
                                    rows={4}
                                    placeholder={t.form.useCase.placeholder}
                                    className="rd-textarea"
                                />
                            </div>

                            {status === 'error' ? (
                                <p className="rounded-[var(--rd-r-md)] border border-[var(--rd-accent-hair)] bg-[var(--rd-accent-soft)] px-4 py-3 text-[14px] text-[var(--rd-fg)]">
                                    {errorMessage}
                                </p>
                            ) : null}

                            <button
                                type="submit"
                                disabled={status === 'submitting'}
                                className="rd-btn rd-btn--primary mt-1 w-full disabled:cursor-not-allowed disabled:opacity-70"
                            >
                                {status === 'submitting' ? t.form.submitting : t.form.submit}
                            </button>
                        </form>
                    )}
                </div>
            </Section>
        </div>
    );
}
