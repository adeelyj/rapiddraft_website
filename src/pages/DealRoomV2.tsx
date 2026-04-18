import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Check, ChevronDown, Mail } from 'lucide-react';
import { useMemo, useState } from 'react';
import PageMeta from '../components/PageMeta';
import Section from '../components/Section';
import Reveal from '../components/home/Reveal';
import {
    defaultDealRoomV2Content,
    type DealRoomV2Content,
    type OnboardingStep,
} from '../data/dealRoomV2Content';
import { type DisclosureItem, type Offer } from '../data/dealRoomContent';

function SectionHeader({
    kicker,
    title,
    copy,
}: {
    kicker: string;
    title: string;
    copy: string;
}) {
    return (
        <div className="max-w-3xl">
            <div className="site-kicker">{kicker}</div>
            <h2 className="section-title mt-5 text-balance">{title}</h2>
            <p className="section-copy mt-5">{copy}</p>
        </div>
    );
}

function DisclosureCard({ item, defaultOpen = false }: { item: DisclosureItem; defaultOpen?: boolean }) {
    return (
        <details open={defaultOpen} className="group surface-card rounded-[1.8rem] p-5 sm:p-6">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                <h3 className="text-lg font-semibold tracking-tight text-gray-950 sm:text-xl">{item.question}</h3>
                <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-stone-200 bg-stone-50 text-gray-500 transition group-open:border-orange-200 group-open:bg-orange-50 group-open:text-primary">
                    <ChevronDown className="h-4 w-4 transition duration-300 group-open:rotate-180" />
                </span>
            </summary>
            <p className="card-copy pt-4">{item.answer}</p>
        </details>
    );
}

function OfferPanel({ offer }: { offer: Offer }) {
    return (
        <div
            className={clsx(
                'rounded-[1.55rem] border p-5 shadow-[0_20px_50px_-38px_rgba(17,24,39,0.14)]',
                offer.recommended
                    ? 'border-orange-300 bg-[linear-gradient(180deg,rgba(255,247,237,0.95),rgba(255,255,255,0.98))]'
                    : 'border-stone-200/90 bg-white'
            )}
        >
            <div className="flex items-start justify-between gap-3">
                <h4 className="text-lg font-semibold tracking-tight text-gray-950">{offer.title}</h4>
                {offer.badge ? (
                    <span className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                        {offer.badge}
                    </span>
                ) : null}
            </div>
            <p className="mt-3 text-sm leading-7 text-gray-700">
                <span className="font-semibold text-gray-950">Best for:</span> {offer.bestFor}
            </p>
            <ul className="mt-4 space-y-2">
                {offer.includes.map((item) => (
                    <li key={item} className="bullet-row">
                        <span className="bullet-icon">
                            <Check className="h-3 w-3 text-primary" />
                        </span>
                        <span className="bullet-copy">{item}</span>
                    </li>
                ))}
            </ul>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-[1.1rem] border border-stone-200 bg-stone-50/80 p-3">
                    <div className="card-index">Timeline</div>
                    <p className="mt-2 text-sm font-semibold leading-6 text-gray-900">{offer.timeline}</p>
                </div>
                <div className="rounded-[1.1rem] border border-stone-200 bg-stone-50/80 p-3">
                    <div className="card-index">Commercial model</div>
                    <p className="mt-2 text-sm font-semibold leading-6 text-gray-900">{offer.commercialModel}</p>
                </div>
            </div>
        </div>
    );
}

function OnboardingPreviewCards({
    steps,
    activeStepId,
    onActivate,
}: {
    steps: OnboardingStep[];
    activeStepId: string;
    onActivate: (stepId: string) => void;
}) {
    return (
        <section className="hero-mesh relative overflow-hidden border-b border-stone-200/70 py-10 md:py-14">
            <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8 xl:px-10">
                <Reveal className="max-w-3xl">
                    <div className="site-kicker">Onboarding Steps</div>
                    <h2 className="section-title mt-5 text-balance">
                        The onboarding path, before the detail view
                    </h2>
                    <p className="section-copy mt-5">
                        Scan the full sequence first. Hover or click a card to expand it, then continue into the main onboarding hero below.
                    </p>
                </Reveal>

                <Reveal delay={0.08} className="mt-8">
                    <div className="flex flex-col gap-3 md:h-[360px] md:flex-row">
                        {steps.map((step, index) => {
                            const isActive = step.id === activeStepId;

                            return (
                                <motion.button
                                    key={step.id}
                                    type="button"
                                    onMouseEnter={() => onActivate(step.id)}
                                    onFocus={() => onActivate(step.id)}
                                    onClick={() => onActivate(step.id)}
                                    animate={{
                                        flexGrow: isActive ? 2.4 : 1,
                                    }}
                                    transition={{ type: 'spring', stiffness: 220, damping: 28 }}
                                    className={clsx(
                                        'group relative min-h-[180px] overflow-hidden rounded-[1.9rem] border text-left shadow-[0_28px_70px_-42px_rgba(17,24,39,0.26)] md:min-w-0',
                                        isActive
                                            ? 'border-[#deac49]/40'
                                            : 'border-stone-200/80'
                                    )}
                                >
                                    <div
                                        className={clsx(
                                            'absolute inset-0 transition duration-500',
                                            isActive
                                                ? 'bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(234,88,12,0.16),transparent_40%),linear-gradient(140deg,#171d2b_0%,#1d2435_52%,#2a2331_100%)]'
                                                : 'bg-[linear-gradient(180deg,rgba(255,250,247,0.95),rgba(255,255,255,0.98))]'
                                        )}
                                    />

                                    <div className="relative flex h-full flex-col justify-between p-5 sm:p-6">
                                        <div className="flex items-start justify-between gap-4">
                                            <div>
                                                <div
                                                    className={clsx(
                                                        'text-[11px] font-semibold uppercase tracking-[0.22em]',
                                                        isActive ? 'text-white/55' : 'text-primary/70'
                                                    )}
                                                >
                                                    Step 0{index + 1}
                                                </div>
                                                <h3
                                                    className={clsx(
                                                        'mt-3 text-[1.55rem] font-semibold leading-[1.1] tracking-tight',
                                                        isActive ? 'text-white' : 'text-gray-950'
                                                    )}
                                                >
                                                    {step.title}
                                                </h3>
                                            </div>
                                            <span
                                                className={clsx(
                                                    'inline-flex h-11 w-11 items-center justify-center rounded-2xl border',
                                                    isActive
                                                        ? 'border-white/10 bg-white/8 text-white'
                                                        : 'border-orange-200 bg-orange-50 text-primary'
                                                )}
                                            >
                                                <step.icon className="h-4 w-4" />
                                            </span>
                                        </div>

                                        <div className="mt-8">
                                            <motion.p
                                                animate={{
                                                    opacity: isActive ? 1 : 0.82,
                                                    y: isActive ? 0 : 6,
                                                }}
                                                transition={{ duration: 0.22 }}
                                                className={clsx(
                                                    'max-w-[30ch] text-sm leading-7',
                                                    isActive ? 'text-white/78' : 'text-gray-600'
                                                )}
                                            >
                                                {step.summary}
                                            </motion.p>
                                        </div>
                                    </div>
                                </motion.button>
                            );
                        })}
                    </div>
                </Reveal>
            </div>
        </section>
    );
}

export default function DealRoomV2({ content = defaultDealRoomV2Content }: { content?: DealRoomV2Content }) {
    const [activeStepId, setActiveStepId] = useState(content.primaryStepId);
    const activeStep = useMemo(
        () => content.onboardingSteps.find((step) => step.id === activeStepId) ?? content.onboardingSteps[0],
        [activeStepId, content.onboardingSteps]
    );

    return (
        <>
            <PageMeta
                title="RapidDraft Deal Room V2 | Onboarding-first pilot workspace"
                description="An onboarding-first RapidDraft deal room that guides the pilot from NDA through offer selection, launch, implementation, and handover."
                path="/deal-room_v2"
            />

            <OnboardingPreviewCards
                steps={content.onboardingSteps}
                activeStepId={activeStepId}
                onActivate={setActiveStepId}
            />

            <section className="hero-mesh relative overflow-hidden border-b border-stone-200/70 py-14 md:py-20">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-[radial-gradient(circle_at_top,rgba(17,24,39,0.08),transparent_60%)]" />
                <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8 xl:px-10">
                    <Reveal className="mx-auto max-w-[900px] text-center">
                        <div className="site-kicker">Deal Room V2</div>
                        <h1 className="hero-title mt-6 md:text-[4rem] lg:text-6xl">RapidDraft Deal Room</h1>
                        <p className="hero-copy mx-auto mt-6 max-w-4xl">{content.subtitle}</p>
                        <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-gray-500 sm:text-base">
                            {content.heroNote}
                        </p>
                        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                            <button
                                type="button"
                                onClick={() => setActiveStepId(content.primaryStepId)}
                                className="btn-primary w-full sm:w-auto"
                            >
                                Start with NDA
                            </button>
                            <button
                                type="button"
                                onClick={() => setActiveStepId(content.secondaryStepId)}
                                className="btn-secondary w-full sm:w-auto"
                            >
                                Review Pilot Options
                            </button>
                        </div>
                    </Reveal>

                    <Reveal delay={0.08} className="mx-auto mt-10 max-w-[1180px] sm:mt-12">
                        <div className="overflow-hidden rounded-[2rem] border border-[#262d3f] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(234,88,12,0.16),transparent_36%),linear-gradient(140deg,#171d2b_0%,#1d2435_52%,#2a2331_100%)] p-4 text-white shadow-[0_42px_120px_-48px_rgba(17,24,39,0.58)] sm:rounded-[2.25rem] sm:p-5 md:p-6">
                            <div className="grid gap-5 xl:grid-cols-[340px_minmax(0,1fr)]">
                                <div className="rounded-[1.7rem] border border-white/10 bg-white/[0.04] p-4 sm:p-5">
                                    <div className="cad-mono text-[11px] uppercase tracking-[0.24em] text-[#deba93]">
                                        {content.onboardingTitle}
                                    </div>
                                    <p className="mt-3 text-sm leading-7 text-white/72">
                                        {content.onboardingIntro}
                                    </p>

                                    <div className="mt-5 grid gap-3">
                                        {content.onboardingSteps.map((step, index) => {
                                            const isActive = step.id === activeStep.id;

                                            return (
                                                <button
                                                    key={step.id}
                                                    type="button"
                                                    onClick={() => setActiveStepId(step.id)}
                                                    className={clsx(
                                                        'relative overflow-hidden rounded-[1.35rem] border px-4 py-4 text-left transition duration-300',
                                                        isActive
                                                            ? 'border-[#deac49]/45 bg-white/10 text-white'
                                                            : 'border-white/10 bg-white/[0.03] text-white/75 hover:border-white/20 hover:bg-white/[0.05]'
                                                    )}
                                                >
                                                    {isActive ? (
                                                        <motion.span
                                                            layoutId="deal-room-v2-active-step"
                                                            className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(234,88,12,0.09))]"
                                                            transition={{ type: 'spring', stiffness: 320, damping: 28 }}
                                                        />
                                                    ) : null}
                                                    <span className="relative block">
                                                        <span className="flex items-center gap-3">
                                                            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/8">
                                                                <step.icon className="h-4 w-4" />
                                                            </span>
                                                            <span>
                                                                <span className="block text-[11px] font-semibold uppercase tracking-[0.22em] text-white/50">
                                                                    Step 0{index + 1}
                                                                </span>
                                                                <span className="mt-1 block text-sm font-semibold tracking-tight sm:text-[15px]">
                                                                    {step.title}
                                                                </span>
                                                            </span>
                                                        </span>
                                                        <span className="mt-3 block text-sm leading-6 text-white/68">
                                                            {step.summary}
                                                        </span>
                                                    </span>
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>

                                <div className="rounded-[1.7rem] border border-white/10 bg-white p-5 shadow-[0_24px_70px_-42px_rgba(17,24,39,0.3)] sm:p-6 lg:p-7">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={activeStep.id}
                                            initial={{ opacity: 0, y: 16 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -16 }}
                                            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                                        >
                                            <div className="flex flex-col gap-5 border-b border-stone-200/80 pb-6 sm:flex-row sm:items-start sm:justify-between">
                                                <div className="max-w-3xl">
                                                    <div className="card-index">Active onboarding step</div>
                                                    <h2 className="mt-3 text-[2rem] font-semibold tracking-tight text-gray-950 sm:text-[2.5rem]">
                                                        {activeStep.title}
                                                    </h2>
                                                    <p className="mt-4 text-lg leading-8 text-gray-600">
                                                        {activeStep.summary}
                                                    </p>
                                                </div>
                                                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-50 text-primary">
                                                    <activeStep.icon className="h-5 w-5" />
                                                </span>
                                            </div>

                                            <div className="mt-6 grid gap-6 xl:grid-cols-[minmax(0,0.62fr)_minmax(280px,0.38fr)]">
                                                <div>
                                                    <p className="section-copy text-base sm:text-lg">{activeStep.description}</p>

                                                    {activeStep.kind === 'offers' && activeStep.offers ? (
                                                        <div className="mt-6 grid gap-4 xl:grid-cols-3">
                                                            {activeStep.offers.map((offer) => (
                                                                <OfferPanel key={offer.title} offer={offer} />
                                                            ))}
                                                        </div>
                                                    ) : null}
                                                </div>

                                                <div className="rounded-[1.5rem] border border-stone-200 bg-[#fff8f3] p-5">
                                                    <div className="card-index">Step actions</div>

                                                    {activeStep.actions?.length ? (
                                                        <div className="mt-4 space-y-3">
                                                            {activeStep.actions.map((action) => (
                                                                <div
                                                                    key={action.label}
                                                                    className="rounded-[1.15rem] border border-stone-200 bg-white p-3"
                                                                >
                                                                    <button
                                                                        type="button"
                                                                        className={clsx(
                                                                            'w-full',
                                                                            action.variant === 'primary' ? 'btn-primary' : 'btn-secondary'
                                                                        )}
                                                                    >
                                                                        {action.label}
                                                                    </button>
                                                                    {action.helper ? (
                                                                        <p className="mt-2 text-xs leading-6 text-gray-500">{action.helper}</p>
                                                                    ) : null}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    ) : (
                                                        <div className="mt-4 rounded-[1.15rem] border border-stone-200 bg-white p-4">
                                                            <p className="text-sm leading-7 text-gray-600">
                                                                No separate document action is required at this step. The output is alignment and readiness for the next onboarding stage.
                                                            </p>
                                                        </div>
                                                    )}

                                                    <div className="mt-4 rounded-[1.15rem] border border-stone-200 bg-white p-4">
                                                        <div className="card-index">What unlocks next</div>
                                                        <p className="mt-2 text-sm leading-7 text-gray-600">
                                                            Complete this step cleanly so the next stage can proceed without commercial or operational ambiguity.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            <Section id="why-rapiddraft" className="pb-16 pt-16 md:pb-20 md:pt-20">
                <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
                    <Reveal className="max-w-xl">
                        <SectionHeader
                            kicker="Why RapidDraft"
                            title={content.overview.title}
                            copy="A compact product view for stakeholders who need the rationale without a full marketing walkthrough."
                        />
                    </Reveal>

                    <Reveal delay={0.08}>
                        <div className="space-y-8">
                            <div className="space-y-5">
                                {content.overview.paragraphs.map((paragraph) => (
                                    <p key={paragraph} className="section-copy text-base sm:text-lg">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>

                            <div className="rounded-[1.9rem] border border-stone-200/80 bg-[#fff8f3] p-6 sm:p-7">
                                <div className="card-index">Why it matters</div>
                                <ul className="mt-4 space-y-3">
                                    {content.overview.highlights.map((highlight) => (
                                        <li key={highlight} className="bullet-row">
                                            <span className="bullet-icon">
                                                <Check className="h-3 w-3 text-primary" />
                                            </span>
                                            <span className="bullet-copy">{highlight}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </Section>

            <Section id="faq" background="light" className="pb-16 pt-16 md:pb-20 md:pt-20">
                <Reveal className="max-w-3xl">
                    <SectionHeader
                        kicker="FAQ"
                        title="Questions that usually come up during onboarding"
                        copy="These answers remain available for engineering, procurement, and management stakeholders who need quick clarification without leaving the flow."
                    />
                </Reveal>

                <div className="mt-12 space-y-4">
                    {content.faqs.map((item, index) => (
                        <Reveal key={item.question} delay={index * 0.03}>
                            <DisclosureCard item={item} defaultOpen={index === 0} />
                        </Reveal>
                    ))}
                </div>
            </Section>

            <Section id="contact-person" className="pb-16 pt-16 md:pb-20 md:pt-20">
                <Reveal className="max-w-3xl">
                    <SectionHeader
                        kicker="Contact Person"
                        title="A single owner for pilot setup and next steps"
                        copy="Questions, document flow, and pilot coordination should route through one contact during the onboarding process."
                    />
                </Reveal>

                <Reveal delay={0.08} className="mt-12">
                    <div className="warm-panel grid gap-6 p-6 md:grid-cols-[128px_minmax(0,1fr)] sm:p-8">
                        <div className="relative h-28 w-28 overflow-hidden rounded-[1.75rem] border border-stone-200 bg-white">
                            {content.contact.image ? (
                                <img src={content.contact.image} alt={content.contact.name} className="h-full w-full object-cover" />
                            ) : (
                                <div className="flex h-full w-full items-center justify-center bg-stone-100 text-gray-400">
                                    <Mail className="h-8 w-8" />
                                </div>
                            )}
                        </div>

                        <div>
                            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                                <div>
                                    <h3 className="card-title text-[1.45rem] md:text-2xl">{content.contact.name}</h3>
                                    <p className="mt-1 text-sm font-medium uppercase tracking-[0.16em] text-primary">
                                        {content.contact.title}
                                    </p>
                                </div>
                                <a
                                    href={`mailto:${content.contact.email}`}
                                    className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition hover:border-primary hover:text-primary"
                                >
                                    <Mail className="h-4 w-4" />
                                    {content.contact.email}
                                </a>
                            </div>
                            <p className="card-copy mt-4 max-w-3xl">{content.contact.message}</p>
                            <button type="button" className="btn-secondary mt-6">
                                Discuss Pilot Scope
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </button>
                        </div>
                    </div>
                </Reveal>
            </Section>
        </>
    );
}
