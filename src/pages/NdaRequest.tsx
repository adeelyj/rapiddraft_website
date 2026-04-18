import { ArrowLeft, Check, ShieldCheck } from 'lucide-react';
import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import PageMeta from '../components/PageMeta';
import Section from '../components/Section';
import Reveal from '../components/home/Reveal';

type SubmissionState = 'idle' | 'submitting' | 'success' | 'error';

type GeneratedDocument = {
    documentUrl?: string | null;
    pdfUrl?: string | null;
    pdfName?: string | null;
};

type SubmissionResult = {
    delivery?: {
        emailSent?: boolean;
        testMode?: boolean;
        recipient?: string;
    };
    nda?: GeneratedDocument;
    loi?: GeneratedDocument;
};

const ndaChecklist = [
    'We use these details to prepare and send the NDA and LOI together.',
    'Once both documents are signed, we will set up the Discussion meeting.',
];

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
            const response = await fetch('/.netlify/functions/generate-nda-loi', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
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
            setStatus('error');
            setErrorMessage(
                error instanceof Error
                    ? error.message
                    : 'The request did not send. Please try again or email info@rapiddraft.ai directly.'
            );
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
                            {status === 'success' ? (
                                <div className="mx-auto max-w-lg py-6">
                                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-orange-50 text-primary">
                                        <ShieldCheck className="h-6 w-6" />
                                    </div>
                                    <h2 className="section-title mt-6 text-[2rem] md:text-[2.35rem]">
                                        Thank you.
                                    </h2>
                                    <p className="card-copy mt-4">
                                        {submissionResult?.delivery?.testMode
                                            ? 'Thank you for sending the information. The NDA and LOI were generated successfully.'
                                            : 'Thank you for sending the information. The NDA and LOI have been sent to your email address.'}
                                    </p>
                                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                                        <Link to="/deal-room_v3" className="btn-primary w-full sm:w-auto">
                                        <Link to="/deal-room" className="btn-primary w-full sm:w-auto">
                                            Return to Deal Room
                                        </Link>
                                        <a href="mailto:info@rapiddraft.ai" className="btn-secondary w-full sm:w-auto">
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
                                        name="nda-request"
                                        method="POST"
                                        data-netlify="true"
                                        netlify-honeypot="bot-field"
                                        className="mt-8 space-y-6"
                                        onSubmit={handleSubmit}
                                    >
                                        <input type="hidden" name="form-name" value="nda-request" />
                                        <input type="hidden" name="bot-field" />
                                        <input type="hidden" name="submission_recipient" value="info@rapiddraft.ai" />

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
