import { ArrowLeft, Check, ShieldCheck } from 'lucide-react';
import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import PageMeta from '../components/PageMeta';
import Section from '../components/Section';
import Reveal from '../components/home/Reveal';

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

const FORM_NAME = 'nda-request';
const INTERNAL_RECIPIENT = 'info@rapiddraft.ai';

const ndaChecklist = [
    'We use these details to prepare and send the NDA and LOI together.',
    'Once both documents are signed, we will set up the Discussion meeting.',
];

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
        throw new Error('The request could not be captured. Please try again or email info@rapiddraft.ai directly.');
    }
}

export default function NdaRequest() {
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
        } catch (error) {
            setStatus('error');
            setErrorMessage(
                error instanceof Error
                    ? error.message
                    : 'The request could not be captured. Please try again or email info@rapiddraft.ai directly.'
            );

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
        } catch (error) {
            form.reset();
            setStatus('follow-up');
            setErrorMessage(
                error instanceof Error
                    ? error.message
                    : 'Your request was received, but the automated NDA/LOI send needs follow-up.'
            );
            setSubmissionResult({
                formCapture: {
                    captured: true,
                },
                warnings: [
                    error instanceof Error
                        ? error.message
                        : 'The request was saved, but automation needs follow-up.',
                ],
            });
        }
    };

    return (
        <>
            <PageMeta
                title="NDA + LOI Request | RapidDraft"
                description="Share the company and workflow details needed for RapidDraft to send the NDA and LOI together."
                path="/deal-room/nda-request"
            />

            <Section className="hero-mesh py-14 md:py-20">
                <div className="mx-auto max-w-[1180px]">
                    <Reveal className="max-w-[720px]">
                        <Link
                            to="/deal-room"
                            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 transition hover:text-primary"
                        >
                            <ArrowLeft className="h-4 w-4" />
                            Back to Deal Room
                        </Link>
                    </Reveal>

                    <div className="mt-8 grid gap-12 lg:grid-cols-[minmax(0,0.43fr)_minmax(0,0.57fr)] lg:items-start lg:gap-16 xl:gap-20">
                        <Reveal className="lg:self-start">
                            <div className="site-kicker">NDA + LOI Request</div>
                            <h1 className="hero-title mt-6 max-w-[9ch] md:text-[4rem] lg:text-[4.6rem]">
                                Share the details needed to prepare the NDA and LOI.
                            </h1>
                            <p className="hero-copy mt-6 max-w-[30rem]">
                                Provide the company and workflow details needed for us to send the NDA and LOI together. Once both are signed, we will set up the next step: Discussion.
                            </p>

                            <div className="mt-10 max-w-[31rem] divide-y divide-stone-200/80">
                                {ndaChecklist.map((item) => (
                                    <div key={item} className="bullet-row py-4 first:pt-0 last:pb-0">
                                        <span className="bullet-icon">
                                            <Check className="h-3 w-3 text-primary" />
                                        </span>
                                        <span className="bullet-copy">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </Reveal>

                        <Reveal delay={0.08} className="warm-panel lg:self-start p-5 sm:p-8">
                            {status === 'success' || status === 'follow-up' ? (
                                <div className="mx-auto max-w-lg py-6">
                                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-orange-50 text-primary">
                                        <ShieldCheck className="h-6 w-6" />
                                    </div>
                                    <h2 className="section-title mt-6 text-[2rem] md:text-[2.35rem]">
                                        {status === 'follow-up' ? 'Request received.' : 'Thank you.'}
                                    </h2>
                                    <p className="card-copy mt-4">
                                        {status === 'follow-up'
                                            ? 'Your request was received and saved. The automated NDA and LOI send needs manual follow-up, and RapidDraft will continue from here.'
                                            : submissionResult?.delivery?.testMode
                                                ? 'Thank you for sending the information. The NDA and LOI were generated successfully.'
                                                : 'Thank you for sending the information. The NDA and LOI have been sent to your email address.'}
                                    </p>
                                    {errorMessage ? (
                                        <p className="mt-4 rounded-2xl border border-orange-200 bg-orange-50 px-4 py-3 text-sm text-orange-900">
                                            {errorMessage}
                                        </p>
                                    ) : null}
                                    {submissionResult?.warnings?.length ? (
                                        <div className="mt-4 rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm text-gray-700">
                                            {submissionResult.warnings.map((warning) => (
                                                <p key={warning}>{warning}</p>
                                            ))}
                                        </div>
                                    ) : null}
                                    {submissionResult?.delivery?.testMode ? (
                                        <div className="mt-6 rounded-[1.5rem] border border-stone-200 bg-white px-5 py-4 text-sm text-gray-700">
                                            <p className="font-semibold text-gray-900">Generated documents</p>
                                            <div className="mt-3 flex flex-col gap-2">
                                                {submissionResult.nda?.documentUrl ? (
                                                    <a href={submissionResult.nda.documentUrl} className="text-primary hover:underline">
                                                        Open NDA working document
                                                    </a>
                                                ) : null}
                                                {submissionResult.nda?.pdfUrl ? (
                                                    <a href={submissionResult.nda.pdfUrl} className="text-primary hover:underline">
                                                        Open NDA PDF
                                                    </a>
                                                ) : null}
                                                {submissionResult.loi?.documentUrl ? (
                                                    <a href={submissionResult.loi.documentUrl} className="text-primary hover:underline">
                                                        Open LOI working document
                                                    </a>
                                                ) : null}
                                                {submissionResult.loi?.pdfUrl ? (
                                                    <a href={submissionResult.loi.pdfUrl} className="text-primary hover:underline">
                                                        Open LOI PDF
                                                    </a>
                                                ) : null}
                                            </div>
                                        </div>
                                    ) : null}
                                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                                        <Link to="/deal-room" className="btn-primary w-full sm:w-auto">
                                            Return to Deal Room
                                        </Link>
                                        <a href={`mailto:${INTERNAL_RECIPIENT}`} className="btn-secondary w-full sm:w-auto">
                                            Email RapidDraft
                                        </a>
                                    </div>
                                </div>
                            ) : (
                                <>
                                    <div className="max-w-[34rem]">
                                        <div className="site-kicker">Request</div>
                                        <h2 className="section-title mt-5 text-[2rem] md:text-[2.35rem]">
                                            NDA + LOI details
                                        </h2>
                                        <p className="card-copy mt-4">
                                            Share the company and workflow details needed for us to send the NDA and LOI together. Once both are signed, we will set up the Discussion meeting.
                                        </p>
                                    </div>

                                    <form
                                        name={FORM_NAME}
                                        method="POST"
                                        data-netlify="true"
                                        netlify-honeypot="bot-field"
                                        className="mt-8 space-y-6"
                                        onSubmit={handleSubmit}
                                    >
                                        <input type="hidden" name="form-name" value={FORM_NAME} />
                                        <input type="hidden" name="bot-field" />
                                        <input type="hidden" name="submission_recipient" value={INTERNAL_RECIPIENT} />

                                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                            <div>
                                                <label htmlFor="nda-full-name" className="form-label">
                                                    Full Name <span className="text-primary">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    name="full-name"
                                                    id="nda-full-name"
                                                    required
                                                    placeholder="Jane Doe"
                                                    className="form-input"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="nda-title" className="form-label">
                                                    Title <span className="text-primary">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    name="title"
                                                    id="nda-title"
                                                    required
                                                    placeholder="Director of Engineering"
                                                    className="form-input"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                            <div>
                                                <label htmlFor="nda-email" className="form-label">
                                                    Email <span className="text-primary">*</span>
                                                </label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    id="nda-email"
                                                    required
                                                    placeholder="jane@company.com"
                                                    className="form-input"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="nda-company" className="form-label">
                                                    Company <span className="text-primary">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    name="company"
                                                    id="nda-company"
                                                    required
                                                    placeholder="Company GmbH"
                                                    className="form-input"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                            <div>
                                                <label htmlFor="nda-jurisdiction" className="form-label">
                                                    Jurisdiction <span className="text-primary">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    name="jurisdiction"
                                                    id="nda-jurisdiction"
                                                    required
                                                    placeholder="Delaware, Germany, England & Wales"
                                                    className="form-input"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="nda-address" className="form-label">
                                                    Address <span className="text-primary">*</span>
                                                </label>
                                                <textarea
                                                    name="address"
                                                    id="nda-address"
                                                    required
                                                    rows={4}
                                                    placeholder="Street, city, postal code, country"
                                                    className="form-textarea"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                            <div>
                                                <label htmlFor="nda-business-unit" className="form-label">
                                                    Business unit / site <span className="text-primary">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    name="business-unit-site"
                                                    id="nda-business-unit"
                                                    required
                                                    placeholder="Customer entity / site / team"
                                                    className="form-input"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="nda-systems" className="form-label">
                                                    Systems / environment <span className="text-primary">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    name="systems-environment"
                                                    id="nda-systems"
                                                    required
                                                    placeholder="Siemens NX / Teamcenter / internal standards"
                                                    className="form-input"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="nda-use-case" className="form-label">
                                                Use case / workflow <span className="text-primary">*</span>
                                            </label>
                                            <textarea
                                                name="use-case-workflow"
                                                id="nda-use-case"
                                                required
                                                rows={4}
                                                placeholder="drawing validation / manufacturability review / selected release workflow"
                                                className="form-textarea"
                                            />
                                        </div>

                                        {status === 'error' ? (
                                            <p className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                                                {errorMessage}
                                            </p>
                                        ) : null}

                                        <button
                                            type="submit"
                                            disabled={status === 'submitting'}
                                            className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70"
                                        >
                                            {status === 'submitting' ? 'Submitting NDA + LOI Request...' : 'Send NDA + LOI Request'}
                                        </button>
                                    </form>
                                </>
                            )}
                        </Reveal>
                    </div>
                </div>
            </Section>
        </>
    );
}
