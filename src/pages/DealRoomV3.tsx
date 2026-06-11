import { Mail } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageMeta from '../components/PageMeta';
import FaqAccordion from '../components/FaqAccordion';
import { useLang } from '../i18n/LanguageContext';
import {
    Section,
    Container,
    Eyebrow,
    H1,
    H2,
    H3,
    Subhead,
    Intro,
    Body,
    Button,
    Tag,
} from '../components/ui/primitives';
import { dealRoomV3Content, type OnboardingOffer, type OnboardingStep } from '../data/dealRoomV3Content';

/* Page-chrome strings (the navigator + hero CTAs). All translated body copy
   lives in src/data/dealRoomV3Content.ts. */
const UI = {
    en: {
        meta: {
            title: 'Deal Room | RapidDraft',
            description:
                'The path from the first documents to a running pilot: NDA and LOI, a discussion of one drawing-release workflow, the pilot scope, and the agreement. Scoped, traceable, and on your infrastructure.',
        },
        eyebrow: 'Deal Room',
        navHint: 'Each step at a glance. Click any step to jump to the section below.',
        startNda: 'Start NDA + LOI',
        viewOffers: 'View pilot offers',
    },
    de: {
        meta: {
            title: 'Deal Room | RapidDraft',
            description:
                'Der Weg von den ersten Dokumenten zum laufenden Pilot: NDA und LOI, ein Gespräch über einen Zeichnungs-Freigabe-Workflow, der Pilotumfang und die Vereinbarung. Eng gefasst, rückverfolgbar und auf Ihrer Infrastruktur.',
        },
        eyebrow: 'Deal Room',
        navHint: 'Jeder Schritt auf einen Blick. Klicken Sie einen Schritt an, um zum Abschnitt darunter zu springen.',
        startNda: 'NDA + LOI starten',
        viewOffers: 'Pilot-Angebote ansehen',
    },
} as const;

/* Centered section header — H2 + intro (matches the site-wide SectionHeader). */
function StepHeader({ title, body }: { title: string; body: string }) {
    return (
        <div className="mx-auto max-w-[860px] text-center">
            <H2>{title}</H2>
            <Intro className="mx-auto mt-5 max-w-[760px]">{body}</Intro>
        </div>
    );
}

/* Left-aligned bullet list inside a tile. */
function BulletList({ items }: { items: readonly string[] }) {
    return (
        <ul className="flex flex-col gap-2.5">
            {items.map((item) => (
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
    );
}

function OfferCard({ offer }: { offer: OnboardingOffer }) {
    return (
        <div
            className="flex h-full flex-col rd-tile rd-tile--left"
            style={offer.recommended ? { borderColor: 'var(--rd-accent)' } : undefined}
        >
            <div className="flex items-start justify-between gap-3">
                <H3>{offer.title}</H3>
                {offer.badge ? <Tag accent>{offer.badge}</Tag> : null}
            </div>
            <Body sm className="mt-3">
                {offer.subtext}
            </Body>
            <Body soft sm className="mt-2">
                {offer.description}
            </Body>
            <ul className="mt-5 flex flex-col gap-2.5">
                {offer.details.map((item) => (
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
            <div className="mt-auto pt-6">
                <Tag>{offer.footer}</Tag>
            </div>
        </div>
    );
}

function StepSection({
    step,
    onStartNda,
}: {
    step: OnboardingStep;
    onStartNda: () => void;
}) {
    return (
        <Section id={step.id}>
            <StepHeader title={step.detailTitle} body={step.detailBody} />

            {step.kind === 'offers' ? (
                <>
                    <div className="mx-auto mt-10 grid max-w-[1120px] gap-4 lg:grid-cols-3">
                        {step.offers?.map((offer) => (
                            <OfferCard key={offer.title} offer={offer} />
                        ))}
                    </div>

                    {step.scopeTitle && step.scopeBody && step.scopeItems?.length ? (
                        <div className="mt-14">
                            <div className="mx-auto max-w-[760px] text-center">
                                <H3>{step.scopeTitle}</H3>
                                <Body soft className="mx-auto mt-4 max-w-[640px]">
                                    {step.scopeBody}
                                </Body>
                            </div>
                            <div className="mx-auto mt-8 grid max-w-[1120px] gap-4 text-left sm:grid-cols-2 lg:grid-cols-5">
                                {step.scopeItems.map((scope) => (
                                    <div key={scope.title} className="rd-tile rd-tile--static rd-tile--left">
                                        <H3>{scope.title}</H3>
                                        <Body soft sm className="mt-2">
                                            {scope.description}
                                        </Body>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : null}

                    {step.scopeNote ? (
                        <Body soft sm className="mx-auto mt-5 max-w-[760px] text-center">
                            {step.scopeNote}
                        </Body>
                    ) : null}

                    {step.finalCtaCopy && step.finalCtaLabel ? (
                        <div className="mx-auto mt-8 max-w-[640px] text-center">
                            <Intro>{step.finalCtaCopy}</Intro>
                            <div className="mt-5">
                                <Button to="/book-demo" variant="primary">
                                    {step.finalCtaLabel}
                                </Button>
                            </div>
                        </div>
                    ) : null}
                </>
            ) : step.bullets?.length ? (
                <div className="mx-auto mt-10 w-full max-w-[640px] rd-tile rd-tile--static rd-tile--left">
                    <BulletList items={step.bullets} />
                </div>
            ) : step.actions?.length ? (
                <div className="mx-auto mt-8 flex max-w-[520px] flex-col items-center gap-3 text-center">
                    {step.actions.map((action) => (
                        <div key={action.label} className="w-full">
                            <Button
                                variant={action.variant ?? 'primary'}
                                onClick={step.id === 'nda' ? onStartNda : undefined}
                                className="w-full sm:w-auto"
                            >
                                {action.label}
                            </Button>
                            {action.helper ? (
                                <Body soft sm className="mt-3">
                                    {action.helper}
                                </Body>
                            ) : null}
                        </div>
                    ))}
                </div>
            ) : null}
        </Section>
    );
}

export default function DealRoomV3() {
    const { lang, localizePath } = useLang();
    const content = dealRoomV3Content[lang];
    const ui = UI[lang];
    const navigate = useNavigate();

    const [activeStepId, setActiveStepId] = useState(content.primaryStepId);

    const scrollToStep = (stepId: string) => {
        setActiveStepId(stepId);
        requestAnimationFrame(() => {
            document.getElementById(stepId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    };

    const handleStartNda = () => {
        navigate(localizePath('/deal-room/nda-request'));
    };

    return (
        <div className="rd2 rd-page">
            <PageMeta title={ui.meta.title} description={ui.meta.description} path="/deal-room" />

            {/* ── Hero + step navigator ────────────────────────── */}
            <header className="relative overflow-hidden">
                <div
                    className="pointer-events-none absolute inset-0"
                    aria-hidden="true"
                    style={{ background: 'radial-gradient(48% 50% at 50% -6%, var(--rd-accent-soft), transparent 62%)' }}
                />
                <Container className="relative w-full pt-28 pb-16 sm:pt-32 sm:pb-20">
                    <div className="mx-auto max-w-[820px] text-center">
                        <Eyebrow>{ui.eyebrow}</Eyebrow>
                        <H1 className="mt-5">{content.heroTitle}</H1>
                        <Subhead className="mx-auto mt-5 max-w-[760px]">{content.heroBody}</Subhead>
                    </div>

                    <div className="mx-auto mt-10 max-w-[1120px]">
                        <Body soft sm className="text-center">
                            {ui.navHint}
                        </Body>
                        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
                            {content.onboardingSteps.map((step, index) => {
                                const isActive = step.id === activeStepId;
                                return (
                                    <button
                                        key={step.id}
                                        type="button"
                                        onClick={() => scrollToStep(step.id)}
                                        aria-pressed={isActive}
                                        className="rd-tile rd-tile--left flex flex-col text-left focus-visible:outline-none"
                                        style={isActive ? { borderColor: 'var(--rd-accent)' } : undefined}
                                    >
                                        <div className="rd-index">0{index + 1}</div>
                                        <H3 className="mt-3">{step.title}</H3>
                                        <Body soft sm className="mt-2">
                                            {step.summary}
                                        </Body>
                                    </button>
                                );
                            })}
                        </div>
                        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                            <Button variant="primary" onClick={handleStartNda}>
                                {ui.startNda}
                            </Button>
                            <Button variant="secondary" arrow onClick={() => scrollToStep(content.secondaryStepId)}>
                                {ui.viewOffers}
                            </Button>
                        </div>
                    </div>
                </Container>
            </header>

            {/* ── Onboarding steps ─────────────────────────────── */}
            {content.onboardingSteps.map((step) => (
                <StepSection key={step.id} step={step} onStartNda={handleStartNda} />
            ))}

            {/* ── Overview ─────────────────────────────────────── */}
            <Section id="why-rapiddraft">
                <div className="mx-auto max-w-[820px] text-center">
                    <H2>{content.overview.title}</H2>
                    <Intro className="mx-auto mt-5 max-w-[760px]">{content.overview.body}</Intro>
                </div>
            </Section>

            {/* ── FAQ ──────────────────────────────────────────── */}
            <Section id="faq">
                <div className="mx-auto max-w-[860px] text-center">
                    <H2>{content.faqTitle}</H2>
                    <Intro className="mx-auto mt-5 max-w-[760px]">{content.faqIntro}</Intro>
                </div>
                <FaqAccordion items={content.faqs.map(({ question, answer }) => ({ q: question, a: answer }))} />
            </Section>

            {/* ── Contact ──────────────────────────────────────── */}
            <Section id="contact-person">
                <div className="mx-auto max-w-[860px] text-center">
                    <H2>{content.contactIntroTitle}</H2>
                    <Intro className="mx-auto mt-5 max-w-[760px]">{content.contactIntroBody}</Intro>
                </div>
                <div className="mx-auto mt-10 w-full max-w-[820px] rd-tile rd-tile--left">
                    <div className="grid gap-6 sm:grid-cols-[120px_minmax(0,1fr)] sm:items-start">
                        <div className="h-28 w-28 overflow-hidden rounded-[var(--rd-r-lg)] border border-[var(--rd-hair)] bg-[var(--rd-bg)]">
                            {content.contact.image ? (
                                <img
                                    src={content.contact.image}
                                    alt={content.contact.name}
                                    className="h-full w-full object-cover"
                                />
                            ) : (
                                <div className="flex h-full w-full items-center justify-center text-[var(--rd-accent)]">
                                    <Mail className="h-8 w-8" aria-hidden="true" />
                                </div>
                            )}
                        </div>
                        <div>
                            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                                <div>
                                    <H3>{content.contact.name}</H3>
                                    <p
                                        className="mt-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--rd-accent)]"
                                        style={{ fontFamily: 'var(--rd-meta)' }}
                                    >
                                        {content.contact.title}
                                    </p>
                                </div>
                                <Button href={`mailto:${content.contact.email}`} variant="secondary" arrow>
                                    {content.contactCtaLabel ?? content.contact.email}
                                </Button>
                            </div>
                            <Body soft className="mt-4">
                                {content.contact.message}
                            </Body>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
}
