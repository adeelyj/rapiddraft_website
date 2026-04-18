import clsx from 'clsx';
import { motion } from 'framer-motion';
import { Check, ChevronDown, Mail } from 'lucide-react';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageMeta from '../components/PageMeta';
import Section from '../components/Section';
import Reveal from '../components/home/Reveal';
import {
    defaultDealRoomV3Content,
    type DealRoomV3Content,
    type OnboardingOffer,
    type OnboardingStep,
} from '../data/dealRoomV3Content';
import { type DisclosureItem } from '../data/dealRoomContent';

function SectionHeader({
    kicker,
    title,
    copy,
}: {
    kicker?: string;
    title: string;
    copy: string;
}) {
    return (
        <div className="mx-auto max-w-3xl">
            {kicker ? <div className="site-kicker">{kicker}</div> : null}
            <h2 className={clsx('section-title text-balance', kicker ? 'mt-5' : '')}>{title}</h2>
            <p className="section-copy mt-5">{copy}</p>
        </div>
    );
}

function DisclosureCard({ item, defaultOpen = false }: { item: DisclosureItem; defaultOpen?: boolean }) {
    return (
        <details
            open={defaultOpen}
            className="group rounded-[1.8rem] border border-stone-200/90 bg-[linear-gradient(180deg,rgba(255,250,247,0.98),rgba(255,255,255,0.98))] p-5 shadow-[0_22px_58px_-42px_rgba(17,24,39,0.18)] transition duration-300 hover:-translate-y-1 sm:p-6"
        >
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

function OfferPanel({ offer }: { offer: OnboardingOffer }) {
    return (
        <motion.article
            whileHover={{ y: -5 }}
            transition={{ type: 'spring', stiffness: 260, damping: 24 }}
            className={clsx(
                'rounded-[1.55rem] border p-5 shadow-[0_24px_56px_-40px_rgba(17,24,39,0.16)] sm:p-6',
                offer.recommended
                    ? 'border-orange-300 bg-[linear-gradient(180deg,rgba(255,244,235,0.98),rgba(255,250,247,0.98))]'
                    : 'border-stone-200/90 bg-[linear-gradient(180deg,rgba(255,250,247,0.96),rgba(255,255,255,0.98))]'
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
            <p className="mt-3 text-sm font-medium leading-7 text-primary">{offer.subtext}</p>
            <p className="mt-3 text-sm leading-7 text-gray-700">{offer.description}</p>
            <ul className="mt-4 space-y-2">
                {offer.details.map((item) => (
                    <li key={item} className="bullet-row">
                        <span className="bullet-icon">
                            <Check className="h-3 w-3 text-primary" />
                        </span>
                        <span className="bullet-copy">{item}</span>
                    </li>
                ))}
            </ul>
            <div className="mt-5 rounded-[1.1rem] border border-stone-200/90 bg-[#fff8f3] p-3">
                <p className="text-sm font-semibold leading-6 text-gray-900">{offer.footer}</p>
            </div>
        </motion.article>
    );
}

function StepSection({
    step,
    index,
    sectionRef,
    onStartNda,
}: {
    step: OnboardingStep;
    index: number;
    sectionRef: (element: HTMLDivElement | null) => void;
    onStartNda: () => void;
}) {
    const stepNumber = `0${index + 1}`;
    const background = index % 2 === 1 ? 'light' : 'white';
    const isOffers = step.kind === 'offers';
    const isNda = step.id === 'nda';
    const isAgreement = step.id === 'agreement';

    return (
        <Section
            id={step.id}
            className="pb-16 pt-16 md:pb-24 md:pt-20"
            background={background}
        >
            <div ref={sectionRef} className="scroll-mt-24">
                {isOffers ? (
                    <>
                        <Reveal className="mx-auto max-w-3xl text-center">
                            <div className="card-index">{stepNumber}</div>
                            <h2 className="section-title mt-4 text-balance">{step.detailTitle}</h2>
                            <p className="section-copy mt-5">{step.detailBody}</p>
                        </Reveal>

                        <Reveal delay={0.08} className="mx-auto mt-10 max-w-[1120px]">
                            <>
                                <div className="grid gap-4 xl:grid-cols-3">
                                    {step.offers?.map((offer) => (
                                        <OfferPanel key={offer.title} offer={offer} />
                                    ))}
                                </div>
                                {step.note ? (
                                    <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-7 text-gray-500">
                                        {step.note}
                                    </p>
                                ) : null}
                            </>
                        </Reveal>
                    </>
                ) : isNda || isAgreement ? (
                    <>
                        <Reveal className="mx-auto max-w-3xl text-center">
                            <div className="card-index">{stepNumber}</div>
                            <h2 className="section-title mt-4 text-balance">{step.detailTitle}</h2>
                            <p className="section-copy mt-5">{step.detailBody}</p>
                        </Reveal>

                        {step.actions?.length ? (
                            <Reveal delay={0.08} className="mx-auto mt-10 max-w-[860px]">
                                <div className="warm-panel p-6 sm:p-7">
                                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
                                        {step.actions.map((action) => (
                                            <div key={action.label} className="w-full max-w-[340px] flex-1">
                                                <button
                                                    type="button"
                                                    onClick={step.id === 'nda' ? onStartNda : undefined}
                                                    className={clsx(
                                                        'w-full',
                                                        action.variant === 'primary' ? 'btn-primary' : 'btn-secondary'
                                                    )}
                                                >
                                                    {action.label}
                                                </button>
                                                {action.helper ? (
                                                    <p className="mt-3 text-center text-xs leading-6 text-gray-500">{action.helper}</p>
                                                ) : null}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </Reveal>
                        ) : null}
                    </>
                ) : (
                    <div className="mx-auto max-w-[1080px]">
                        <Reveal>
                            <div className="card-index">{stepNumber}</div>
                        </Reveal>

                        <div className="mt-4 grid gap-10 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] lg:items-stretch lg:gap-14">
                            <Reveal className="max-w-[34rem] lg:h-full">
                                <div className="flex h-full flex-col">
                                    <h2 className="section-title text-balance lg:max-w-[11ch]">{step.detailTitle}</h2>
                                    <p className="section-copy mt-6">{step.detailBody}</p>
                                    {step.microcopy ? (
                                        <p className="mt-5 max-w-3xl text-sm leading-7 text-gray-500 sm:text-base">{step.microcopy}</p>
                                    ) : null}
                                </div>
                            </Reveal>

                            <Reveal delay={0.08} className="lg:h-full">
                                <ul className="flex h-full flex-col">
                                    {step.bullets?.map((bullet, bulletIndex) => (
                                        <motion.li
                                            key={bullet}
                                            whileHover={{ x: 4 }}
                                            transition={{ type: 'spring', stiffness: 260, damping: 24 }}
                                            className={clsx(
                                                'flex items-start gap-4',
                                                bulletIndex === 0 ? 'pt-0' : 'border-t border-stone-200/80 pt-6',
                                                bulletIndex === (step.bullets?.length ?? 1) - 1 ? 'pb-0' : 'pb-6',
                                                'flex-1'
                                            )}
                                        >
                                            <span className="bullet-icon mt-0.5">
                                                <Check className="h-3 w-3 text-primary" />
                                            </span>
                                            <div className="bullet-copy min-w-0">
                                                {bullet}
                                            </div>
                                        </motion.li>
                                    ))}
                                </ul>
                            </Reveal>
                        </div>
                    </div>
                )}
            </div>
        </Section>
    );
}

function DealRoomOnboardingHero({
    content,
    activeStepId,
    hoveredStepId,
    onHoverStep,
    onLeaveSteps,
    onSelectStep,
    onStartNda,
}: {
    content: DealRoomV3Content;
    activeStepId: string;
    hoveredStepId: string | null;
    onHoverStep: (stepId: string) => void;
    onLeaveSteps: () => void;
    onSelectStep: (stepId: string) => void;
    onStartNda: () => void;
}) {
    return (
        <section className="hero-mesh relative overflow-hidden border-b border-stone-200/70 py-12 md:py-16">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-[radial-gradient(circle_at_top,rgba(17,24,39,0.08),transparent_60%)]" />
            <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8 xl:px-10">
                <Reveal className="mx-auto max-w-[980px] pt-2 text-center sm:pt-4 lg:pt-8">
                    <div className="mx-auto max-w-[940px]">
                        <h1 className="hero-title text-balance">{content.heroTitle}</h1>
                        <p className="hero-copy mx-auto mt-5 max-w-4xl sm:mt-6">{content.heroBody}</p>
                    </div>
                </Reveal>

                <Reveal delay={0.08} className="mx-auto mt-8 max-w-[980px] sm:mt-10">
                    <div className="overflow-hidden rounded-[2rem] border border-[#262d3f] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(234,88,12,0.18),transparent_36%),linear-gradient(140deg,#171d2b_0%,#1d2435_52%,#2a2331_100%)] p-4 text-white shadow-[0_42px_120px_-48px_rgba(17,24,39,0.58)] sm:rounded-[2.25rem] sm:p-5 md:p-6">
                        <div>
                            <p className="mx-auto max-w-3xl text-center text-sm leading-7 text-white/68">
                                Hover to preview the path. Click any step to jump directly into the relevant section below.
                            </p>
                            <div
                                className="mt-5 flex flex-col gap-3 md:flex-row"
                                onMouseLeave={onLeaveSteps}
                            >
                                {content.onboardingSteps.map((step, index) => {
                                    const isPreviewed = step.id === hoveredStepId;
                                    const isSelected = step.id === activeStepId;

                                    return (
                                        <motion.button
                                            key={step.id}
                                            type="button"
                                            onMouseEnter={() => onHoverStep(step.id)}
                                            onFocus={() => onHoverStep(step.id)}
                                            onBlur={onLeaveSteps}
                                            onClick={() => onSelectStep(step.id)}
                                            layout
                                            whileHover={{ y: -2 }}
                                            animate={{ flexGrow: isPreviewed ? 2.2 : 1 }}
                                            transition={{ type: 'spring', stiffness: 200, damping: 26 }}
                                            className={clsx(
                                                'group relative min-h-[148px] basis-0 overflow-hidden rounded-[1.75rem] border text-left shadow-[0_24px_60px_-42px_rgba(17,24,39,0.26)] transition hover:border-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-200/70 md:min-w-0 md:min-h-[156px]',
                                                isPreviewed
                                                    ? 'border-[#deac49]/40'
                                                    : isSelected
                                                        ? 'border-white/24'
                                                        : 'border-white/12'
                                            )}
                                            aria-pressed={isSelected}
                                        >
                                            <div
                                                className={clsx(
                                                    'absolute inset-0 transition duration-500',
                                                    isPreviewed
                                                        ? 'bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(234,88,12,0.16),transparent_40%),linear-gradient(140deg,#171d2b_0%,#1d2435_52%,#2a2331_100%)]'
                                                        : isSelected
                                                            ? 'bg-[radial-gradient(circle_at_bottom_right,rgba(234,88,12,0.08),transparent_48%),rgba(255,255,255,0.025)]'
                                                            : 'bg-[rgba(255,255,255,0.02)]'
                                                )}
                                            />
                                            <div className="relative flex h-full flex-col justify-between p-5 sm:p-6">
                                                <div>
                                                    <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/55">
                                                        Step 0{index + 1}
                                                    </div>
                                                    <h3 className="mt-3 max-w-[12ch] text-[1.28rem] font-semibold leading-[1.08] tracking-tight text-white">
                                                        {step.title}
                                                    </h3>
                                                </div>
                                                <motion.p
                                                    animate={{
                                                        opacity: isPreviewed ? 1 : 0,
                                                        y: isPreviewed ? 0 : 10,
                                                        height: isPreviewed ? 'auto' : 0,
                                                        marginTop: isPreviewed ? 24 : 0,
                                                    }}
                                                    transition={{ duration: 0.22 }}
                                                    className="hidden max-w-[26ch] overflow-hidden text-sm leading-7 text-white/78 md:block"
                                                >
                                                    {step.summary}
                                                </motion.p>
                                            </div>
                                        </motion.button>
                                    );
                                })}
                            </div>
                            <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
                                <button
                                    type="button"
                                    onClick={onStartNda}
                                    className="btn-primary w-full sm:w-auto"
                                >
                                    Start NDA + LOI
                                </button>
                                <button
                                    type="button"
                                    onClick={() => onSelectStep(content.secondaryStepId)}
                                    className="btn-secondary w-full sm:w-auto border-white/20 bg-white/5 text-white hover:border-white/35 hover:bg-white/10"
                                >
                                    View Pilot Offers
                                </button>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}

export default function DealRoomV3({ content = defaultDealRoomV3Content }: { content?: DealRoomV3Content }) {
    const [activeStepId, setActiveStepId] = useState(content.primaryStepId);
    const [hoveredStepId, setHoveredStepId] = useState<string | null>(null);
    const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
    const navigate = useNavigate();

    const handleStartNda = () => {
        navigate('/deal-room/nda-request');
    };

    const handleSelectStep = (stepId: string) => {
        setActiveStepId(stepId);
        requestAnimationFrame(() => {
            sectionRefs.current[stepId]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    };

    return (
        <>
            <PageMeta
                title="RapidDraft Deal Room v3 | Onboarding-first workspace"
                description="A streamlined, onboarding-first deal room for guiding the RapidDraft pilot setup journey."
                path="/deal-room"
            />

            <DealRoomOnboardingHero
                content={content}
                activeStepId={activeStepId}
                hoveredStepId={hoveredStepId}
                onHoverStep={setHoveredStepId}
                onLeaveSteps={() => setHoveredStepId(null)}
                onSelectStep={handleSelectStep}
                onStartNda={handleStartNda}
            />

            {content.onboardingSteps.map((step, index) => (
                <StepSection
                    key={step.id}
                    step={step}
                    index={index}
                    onStartNda={handleStartNda}
                    sectionRef={(element) => {
                        sectionRefs.current[step.id] = element;
                    }}
                />
            ))}

            <Section id="why-rapiddraft" className="pb-16 pt-14 md:pb-20 md:pt-16">
                <Reveal className="mx-auto max-w-4xl text-center">
                    <SectionHeader title={content.overview.title} copy={content.overview.body} />
                </Reveal>
            </Section>

            <Section id="faq" background="light" className="pb-16 pt-16 md:pb-20 md:pt-20">
                <Reveal className="mx-auto max-w-3xl text-center">
                    <SectionHeader
                        title="Questions that usually come up at this stage."
                        copy="A few practical answers on process, scope, and what to expect from the pilot setup journey."
                    />
                </Reveal>

                <div className="mx-auto mt-12 max-w-4xl space-y-4">
                    {content.faqs.map((item, index) => (
                        <Reveal key={item.question} delay={index * 0.03}>
                            <DisclosureCard item={item} defaultOpen={index === 0} />
                        </Reveal>
                    ))}
                </div>
            </Section>

            <Section id="contact-person" className="pb-16 pt-16 md:pb-20 md:pt-20">
                <Reveal className="mx-auto max-w-3xl text-center">
                    <SectionHeader
                        title={content.contactIntroTitle}
                        copy={content.contactIntroBody}
                    />
                </Reveal>

                <Reveal delay={0.08} className="mx-auto mt-12 max-w-4xl">
                    <div className="warm-panel grid gap-6 p-6 md:grid-cols-[128px_minmax(0,1fr)] sm:p-8">
                        <div className="relative h-28 w-28 overflow-hidden rounded-[1.75rem] border border-stone-200 bg-[#fff8f3]">
                            {content.contact.image ? (
                                <img src={content.contact.image} alt={content.contact.name} className="h-full w-full object-cover" />
                            ) : (
                                <div className="flex h-full w-full items-center justify-center bg-[#fff8f3] text-primary/50">
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
                                    className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-[#fff8f3] px-4 py-2 text-sm font-semibold text-gray-700 transition hover:border-primary hover:text-primary"
                                >
                                    <Mail className="h-4 w-4" />
                                    {content.contactCtaLabel ?? content.contact.email}
                                </a>
                            </div>
                            <p className="card-copy mt-4 max-w-3xl">{content.contact.message}</p>
                        </div>
                    </div>
                </Reveal>
            </Section>
        </>
    );
}
