import clsx from 'clsx';
import {
    ArrowRight,
    CalendarRange,
    ChevronDown,
    CircleCheckBig,
    FileBadge2,
    Handshake,
    Mail,
    ShieldCheck,
    UserRound,
} from 'lucide-react';
import { type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import PageMeta from '../components/PageMeta';
import Section from '../components/Section';
import Reveal from '../components/home/Reveal';
import {
    defaultDealRoomContent,
    type DealRoomContent,
    type DisclosureItem,
} from '../data/dealRoomContent';

function SmartLink({ href, children, className }: { href: string; children: ReactNode; className: string }) {
    const isRouteLink = href.startsWith('/');

    if (isRouteLink) {
        return (
            <Link to={href} className={className}>
                {children}
            </Link>
        );
    }

    return (
        <a href={href} className={className}>
            {children}
        </a>
    );
}

function SectionHeader({
    kicker,
    title,
    copy,
    align = 'left',
}: {
    kicker: string;
    title: string;
    copy: string;
    align?: 'left' | 'center';
}) {
    return (
        <div className={clsx('max-w-3xl', align === 'center' && 'mx-auto text-center')}>
            <div className="site-kicker">{kicker}</div>
            <h2 className="section-title mt-5 text-balance">{title}</h2>
            <p className="section-copy mt-5">{copy}</p>
        </div>
    );
}

function DisclosureCard({ item, defaultOpen = false }: { item: DisclosureItem; defaultOpen?: boolean }) {
    return (
        <details
            open={defaultOpen}
            className="group surface-card rounded-[1.8rem] p-5 sm:p-6"
        >
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                <div>
                    <h3 className="text-lg font-semibold tracking-tight text-gray-950 sm:text-xl">{item.question}</h3>
                </div>
                <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-stone-200 bg-stone-50 text-gray-500 transition group-open:border-orange-200 group-open:bg-orange-50 group-open:text-primary">
                    <ChevronDown className="h-4 w-4 transition duration-300 group-open:rotate-180" />
                </span>
            </summary>
            <p className="card-copy pt-4">{item.answer}</p>
        </details>
    );
}

export default function DealRoom({ content = defaultDealRoomContent }: { content?: DealRoomContent }) {
    return (
        <>
            <PageMeta
                title="RapidDraft Deal Room | Pilot evaluation workspace"
                description="A structured RapidDraft deal room for evaluating a pilot, aligning stakeholders, and selecting the right engagement model."
                path="/deal-room"
            />

            <section className="hero-mesh relative overflow-hidden border-b border-stone-200/70 py-16 md:py-24">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-[radial-gradient(circle_at_top,rgba(17,24,39,0.08),transparent_60%)]" />
                <div className="mx-auto grid max-w-[1180px] gap-10 px-5 sm:px-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-end lg:px-8 xl:px-10">
                    <Reveal className="max-w-2xl">
                        <div className="site-kicker">Deal Room</div>
                        <h1 className="hero-title mt-6 md:text-[4rem] lg:text-6xl">RapidDraft Deal Room</h1>
                        <p className="hero-copy mt-6">{content.subtitle}</p>
                        <p className="mt-5 text-sm leading-7 text-gray-500 sm:text-base">{content.heroNote}</p>

                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <SmartLink href={content.heroPrimaryCta.href} className="btn-primary w-full sm:w-auto">
                                {content.heroPrimaryCta.label}
                            </SmartLink>
                            <SmartLink href={content.heroSecondaryCta.href} className="btn-secondary w-full sm:w-auto">
                                {content.heroSecondaryCta.label}
                            </SmartLink>
                        </div>
                    </Reveal>

                    <Reveal delay={0.08}>
                        <div className="warm-panel p-6 sm:p-8">
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary/70">
                                        Prepared for
                                    </div>
                                    <h2 className="mt-3 text-[1.75rem] font-semibold tracking-tight text-gray-950 sm:text-[2rem]">
                                        {content.customerName}
                                    </h2>
                                </div>
                                <span className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                                    Pilot Evaluation
                                </span>
                            </div>

                            <div className="mt-8 grid gap-4 sm:grid-cols-2">
                                <div className="rounded-[1.45rem] border border-stone-200 bg-white p-5">
                                    <div className="card-index">Primary workflow</div>
                                    <p className="mt-3 text-base font-semibold leading-7 text-gray-900">
                                        {content.snapshot[0]?.value}
                                    </p>
                                </div>
                                <div className="rounded-[1.45rem] border border-stone-200 bg-white p-5">
                                    <div className="card-index">Indicative timeline</div>
                                    <p className="mt-3 text-base font-semibold leading-7 text-gray-900">
                                        {content.snapshot[3]?.value}
                                    </p>
                                </div>
                                <div className="rounded-[1.45rem] border border-stone-200 bg-white p-5 sm:col-span-2">
                                    <div className="card-index">Next action</div>
                                    <p className="mt-3 text-base leading-7 text-gray-700">
                                        Align on confidentiality, confirm the selected workflow, and choose the pilot structure that best fits the scope.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            <Section id="deal-snapshot" background="light" className="pb-14 pt-14 md:pb-20 md:pt-16">
                <Reveal className="max-w-3xl">
                    <SectionHeader
                        kicker="Deal Snapshot"
                        title="One shared summary for the current opportunity"
                        copy="Use this section to align around the selected workflow, pilot objective, expected value, timing, and point of contact before moving into detailed evaluation."
                    />
                </Reveal>
                <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
                    {content.snapshot.map((item, index) => (
                        <Reveal key={item.label} delay={index * 0.04}>
                            <div className="surface-card h-full p-5 sm:p-6">
                                <div className="flex items-center gap-3">
                                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-50 text-primary">
                                        <item.icon className="h-5 w-5" />
                                    </span>
                                    <div className="card-index">{item.label}</div>
                                </div>
                                <p className="mt-5 text-sm leading-7 text-gray-700 sm:text-base">{item.value}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </Section>

            <Section id="overview" className="pb-16 pt-16 md:pb-20 md:pt-20">
                <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
                    <Reveal className="max-w-xl">
                        <SectionHeader
                            kicker="RapidDraft Overview"
                            title={content.overview.title}
                            copy="A shorter commercial summary of the product, tailored for pilot evaluation rather than a full marketing walkthrough."
                        />
                    </Reveal>

                    <Reveal delay={0.08}>
                        <div className="warm-panel p-6 sm:p-8">
                            <div className="space-y-5">
                                {content.overview.paragraphs.map((paragraph) => (
                                    <p key={paragraph} className="section-copy text-base sm:text-lg">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>

                            <div className="mt-8 rounded-[1.7rem] border border-stone-200 bg-white p-5 sm:p-6">
                                <div className="card-index">Why it matters</div>
                                <ul className="mt-4 space-y-3">
                                    {content.overview.highlights.map((highlight) => (
                                        <li key={highlight} className="flex items-start gap-3 text-sm leading-7 text-gray-700 sm:text-base">
                                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                            <span>{highlight}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </Section>

            <Section id="relevant-use-cases" background="light" className="pb-16 pt-16 md:pb-20 md:pt-20">
                <Reveal className="max-w-3xl">
                    <SectionHeader
                        kicker="Relevant Use Cases"
                        title="Use cases most likely to create measurable value first"
                        copy="These modules draw from the current website use-case framing and can be reordered or swapped later for a specific prospect."
                    />
                </Reveal>

                <div className="mt-12 grid gap-6 lg:grid-cols-3">
                    {content.useCases.map((useCase, index) => (
                        <Reveal key={useCase.title} delay={index * 0.05}>
                            <div className="surface-card flex h-full flex-col p-6 sm:p-7">
                                {useCase.tag ? (
                                    <div className="mb-5 inline-flex w-fit items-center rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                                        {useCase.tag}
                                    </div>
                                ) : null}
                                <h3 className="card-title">{useCase.title}</h3>
                                <p className="card-copy mt-4">{useCase.description}</p>
                                <div className="mt-6 rounded-[1.35rem] border border-stone-200 bg-stone-50/70 p-4">
                                    <div className="card-index">Expected business impact</div>
                                    <p className="mt-3 text-sm leading-7 text-gray-700 sm:text-base">{useCase.impact}</p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </Section>

            <Section id="pilot-process" className="pb-16 pt-16 md:pb-20 md:pt-20">
                <Reveal className="max-w-3xl">
                    <SectionHeader
                        kicker="Pilot Process"
                        title="A structured path from first discussion to pilot launch"
                        copy="The process is designed to make commercial and operational steps easy to understand for every stakeholder involved in the evaluation."
                    />
                </Reveal>

                <div className="mt-12 grid gap-5 lg:grid-cols-2">
                    {content.process.map((step, index) => (
                        <Reveal key={step.title} delay={index * 0.04}>
                            <div className="surface-card h-full p-5 sm:p-6">
                                <div className="flex items-start gap-4">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-orange-50 text-sm font-semibold text-primary">
                                        {index + 1}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold tracking-tight text-gray-950">{step.title}</h3>
                                        <p className="card-copy mt-3">{step.description}</p>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </Section>

            <Section id="pilot-offers" background="light" className="pb-16 pt-16 md:pb-20 md:pt-20">
                <Reveal className="max-w-3xl">
                    <SectionHeader
                        kicker="Pilot Offer Options"
                        title="Three clear ways to engage, depending on how far you want to go"
                        copy="Each offer keeps scope, timing, and commercial expectations explicit. The middle option is positioned as the default path when a customer is ready to validate value on a defined workflow."
                    />
                </Reveal>

                <div className="mt-12 grid gap-6 xl:grid-cols-3">
                    {content.offers.map((offer, index) => (
                        <Reveal key={offer.title} delay={index * 0.05}>
                            <div
                                className={clsx(
                                    'flex h-full flex-col rounded-[2rem] border p-6 shadow-[0_20px_50px_-38px_rgba(17,24,39,0.2)] sm:p-7',
                                    offer.recommended
                                        ? 'border-orange-300 bg-[linear-gradient(180deg,rgba(255,247,237,0.92),rgba(255,255,255,0.98))] shadow-[0_28px_70px_-38px_rgba(234,88,12,0.35)]'
                                        : 'border-stone-200/90 bg-white'
                                )}
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <div className="card-index">Offer 0{index + 1}</div>
                                    {offer.badge ? (
                                        <span className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                                            {offer.badge}
                                        </span>
                                    ) : null}
                                </div>

                                <h3 className="mt-4 text-[1.55rem] font-semibold leading-[1.2] tracking-tight text-gray-950">
                                    {offer.title}
                                </h3>
                                <p className="mt-4 text-sm leading-7 text-gray-700 sm:text-base">
                                    <span className="font-semibold text-gray-950">Best for:</span> {offer.bestFor}
                                </p>

                                <div className="mt-6 rounded-[1.5rem] border border-stone-200/90 bg-white/80 p-4">
                                    <div className="card-index">Includes</div>
                                    <ul className="mt-4 space-y-3">
                                        {offer.includes.map((item) => (
                                            <li key={item} className="flex items-start gap-3 text-sm leading-7 text-gray-700">
                                                <CircleCheckBig className="mt-1 h-4 w-4 shrink-0 text-primary" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                                    <div className="rounded-[1.35rem] border border-stone-200 bg-white/80 p-4">
                                        <div className="card-index">Timeline</div>
                                        <p className="mt-3 text-sm font-semibold leading-7 text-gray-900 sm:text-base">{offer.timeline}</p>
                                    </div>
                                    <div className="rounded-[1.35rem] border border-stone-200 bg-white/80 p-4">
                                        <div className="card-index">Commercial model</div>
                                        <p className="mt-3 text-sm font-semibold leading-7 text-gray-900 sm:text-base">{offer.commercialModel}</p>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </Section>

            <Section id="indicative-timeline" className="pb-16 pt-16 md:pb-20 md:pt-20">
                <Reveal className="max-w-3xl">
                    <SectionHeader
                        kicker="Indicative Timeline"
                        title="A realistic sequence for a narrow, structured pilot"
                        copy="This timeline keeps expectations explicit while leaving room to adapt to data readiness and stakeholder access."
                    />
                </Reveal>

                <Reveal delay={0.08} className="mt-12">
                    <div className="warm-panel p-6 sm:p-8">
                        <div className="grid gap-5 lg:grid-cols-4">
                            {content.timeline.map((item, index) => (
                                <div key={item.phase} className="relative">
                                    <div className="surface-card h-full p-5">
                                        <div className="flex items-center gap-3">
                                            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-orange-50 text-primary">
                                                <CalendarRange className="h-4 w-4" />
                                            </span>
                                            <div className="card-index">{item.phase}</div>
                                        </div>
                                        <h3 className="mt-5 text-lg font-semibold tracking-tight text-gray-950">{item.title}</h3>
                                        <p className="mt-3 text-sm leading-7 text-gray-700">{item.description}</p>
                                    </div>
                                    {index < content.timeline.length - 1 ? (
                                        <div className="pointer-events-none absolute left-[calc(100%-0.5rem)] top-1/2 hidden h-px w-5 bg-orange-200 lg:block" />
                                    ) : null}
                                </div>
                            ))}
                        </div>
                        <p className="mt-6 text-sm leading-7 text-gray-500">{content.timelineNote}</p>
                    </div>
                </Reveal>
            </Section>

            <Section id="legal-process" background="light" className="pb-16 pt-16 md:pb-20 md:pt-20">
                <Reveal className="max-w-3xl">
                    <SectionHeader
                        kicker="Legal & Process"
                        title="The key documents, explained in plain business terms"
                        copy="These items exist to let both sides exchange information safely, align internally, and move into a clear commercial pilot scope."
                    />
                </Reveal>

                <div className="mt-12 space-y-4">
                    {content.legal.map((item, index) => (
                        <Reveal key={item.question} delay={index * 0.04}>
                            <DisclosureCard item={item} defaultOpen={index === 0} />
                        </Reveal>
                    ))}
                </div>
            </Section>

            <Section id="faq" className="pb-16 pt-16 md:pb-20 md:pt-20">
                <Reveal className="max-w-3xl">
                    <SectionHeader
                        kicker="FAQ"
                        title="Questions that usually come up before a pilot is approved"
                        copy="The answers below are designed to help technical, commercial, and management stakeholders evaluate the engagement with less back-and-forth."
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

            <Section id="contact-person" background="light" className="pb-16 pt-16 md:pb-20 md:pt-20">
                <Reveal className="max-w-3xl">
                    <SectionHeader
                        kicker="Contact Person"
                        title="A single owner for pilot setup and next steps"
                        copy="Keep questions, document flow, and scoping discussions routed through one point of contact during the evaluation."
                    />
                </Reveal>

                <Reveal delay={0.08} className="mt-12">
                    <div className="surface-card grid gap-6 p-6 md:grid-cols-[128px_minmax(0,1fr)] sm:p-8">
                        <div className="relative h-28 w-28 overflow-hidden rounded-[1.75rem] border border-stone-200 bg-white">
                            {content.contact.image ? (
                                <img src={content.contact.image} alt={content.contact.name} className="h-full w-full object-cover" />
                            ) : (
                                <div className="flex h-full w-full items-center justify-center bg-stone-100 text-gray-400">
                                    <UserRound className="h-8 w-8" />
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
                        </div>
                    </div>
                </Reveal>
            </Section>

            <section className="hero-mesh relative overflow-hidden border-t border-stone-200/70 py-16 md:py-24">
                <div className="surface-grid pointer-events-none absolute inset-0 opacity-[0.08]" />
                <div className="mx-auto max-w-[1180px] px-5 sm:px-6 lg:px-8 xl:px-10">
                    <Reveal className="warm-panel mx-auto max-w-[1100px] px-5 py-12 text-center sm:px-10 sm:py-14">
                        <div className="site-kicker">Next Step</div>
                        <h2 className="section-title mt-6 text-balance">
                            Move from review to a structured pilot decision
                        </h2>
                        <p className="section-copy mx-auto mt-5 max-w-3xl">
                            {content.finalCtas.supportingLine}
                        </p>
                        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                            <SmartLink href={content.finalCtas.primary.href} className="btn-primary w-full sm:w-auto">
                                {content.finalCtas.primary.label}
                            </SmartLink>
                            <SmartLink href={content.finalCtas.secondary.href} className="btn-secondary w-full sm:w-auto">
                                {content.finalCtas.secondary.label}
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </SmartLink>
                        </div>

                        <div className="mt-10 grid gap-4 text-left md:grid-cols-3">
                            <div className="rounded-[1.4rem] border border-stone-200/80 bg-white/85 p-4">
                                <div className="flex items-center gap-3">
                                    <ShieldCheck className="h-4 w-4 text-primary" />
                                    <span className="text-sm font-semibold text-gray-900">Confidentiality first</span>
                                </div>
                                <p className="mt-3 text-sm leading-7 text-gray-600">
                                    NDA before sensitive workflow or standards sharing.
                                </p>
                            </div>
                            <div className="rounded-[1.4rem] border border-stone-200/80 bg-white/85 p-4">
                                <div className="flex items-center gap-3">
                                    <Handshake className="h-4 w-4 text-primary" />
                                    <span className="text-sm font-semibold text-gray-900">Commercial clarity</span>
                                </div>
                                <p className="mt-3 text-sm leading-7 text-gray-600">
                                    Offer structure, scope, and responsibilities are explicit before launch.
                                </p>
                            </div>
                            <div className="rounded-[1.4rem] border border-stone-200/80 bg-white/85 p-4">
                                <div className="flex items-center gap-3">
                                    <FileBadge2 className="h-4 w-4 text-primary" />
                                    <span className="text-sm font-semibold text-gray-900">Measured outcome</span>
                                </div>
                                <p className="mt-3 text-sm leading-7 text-gray-600">
                                    Success criteria and rollout recommendation are built into the pilot path.
                                </p>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>
        </>
    );
}
