import clsx from 'clsx';
import { ArrowRight, Check, FileText, Layers, ListChecks, Search, type LucideIcon } from 'lucide-react';
import { useEffect, type SyntheticEvent } from 'react';
import { Link } from 'react-router-dom';
import Section from '../components/Section';

const MAIN_SITE_ORIGIN = 'https://rapiddraft.ai';
const BOOK_DEMO_URL = `${MAIN_SITE_ORIGIN}/book-demo`;

type StoryBlock = {
    eyebrow: string;
    title: string;
    description: string;
    bullets: string[];
    icon: LucideIcon;
    image: string;
    imageFallback?: string;
    imageAlt: string;
    color: string;
};

const storyBlocks: StoryBlock[] = [
    {
        eyebrow: 'Drawing Memory',
        title: 'Drawing Analysis with AI',
        description:
            'RapidDraft generates manufacturing-ready drawings from the current geometry, then preserves the decisions that matter when the design changes.',
        bullets: [
            'Preserves dimensions, notes, and checks across revisions.',
            'Keeps redraw effort from starting at zero after each change.',
            'Turns review effort into reusable drafting intent.',
        ],
        icon: FileText,
        image: '/media/pitch/drawing analysis.gif',
        imageFallback: '/media/pitch/pitch-drawing-memory.png',
        imageAlt: 'RapidDraft drawing analysis view with highlighted drawing regions and release checks.',
        color: 'bg-orange-100 text-primary',
    },
    {
        eyebrow: 'Shared Model Context',
        title: 'Collaborate with real and AI colleagues',
        description:
            'RapidDraft is an AI collaboration layer on top of CAD. It keeps design, analysis, and manufacturing aligned around a single source of truth: the 3D model.',
        bullets: [
            'Feedback stays attached to geometry instead of scattered screenshots.',
            'Different reviewers work from the same model state and revision.',
            'Lessons learned stay connected to the part for future iterations.',
        ],
        icon: Layers,
        image: '/media/pitch/collaboration.gif',
        imageFallback: '/media/pitch/pitch-collaboration.png',
        imageAlt: 'RapidDraft collaboration modal attached to a CAD model review screen.',
        color: 'bg-blue-100 text-blue-600',
    },
    {
        eyebrow: 'Human-In-The-Loop',
        title: 'DFM with Rules and Vision AI',
        description:
            'RapidDraft surfaces manufacturability and completeness issues early, while engineers stay in control of the final decisions.',
        bullets: [
            'Flags repeated DFM risks before formal review starts.',
            'Highlights missing or inconsistent release information.',
            'Keeps automation transparent and reviewable when decisions affect downstream teams.',
        ],
        icon: Search,
        image: '/media/pitch/design-review-expert-mode.mp4',
        imageFallback: '/media/pitch/pitch-dfm-checks.png',
        imageAlt: 'RapidDraft manufacturability review interface with issue panels and model annotations.',
        color: 'bg-green-100 text-green-600',
    },
    {
        eyebrow: 'Review At Scale',
        title: 'Bulk reviews and analyses',
        description:
            'RapidDraft lets teams run repeated review passes across drawings, revisions, and part families in one workflow, so engineers spend less time reopening files one by one.',
        bullets: [
            'Applies the same review logic across large drawing sets and revision queues.',
            'Surfaces common failure patterns, missing information, and high-priority outliers fast.',
            'Helps engineers triage exceptions instead of manually repeating the same checks.',
        ],
        icon: ListChecks,
        image: '/media/pitch/bulk-design-review.gif',
        imageFallback: '/media/pitch/pitch-release-approval.png',
        imageAlt: 'RapidDraft bulk design review workspace showing multiple review items, geometry comparisons, and issue panels.',
        color: 'bg-orange-100 text-orange-600',
    },
];

const fitItems = [
    'Mechanical design teams with frequent CAD revisions and drawing-heavy release workflows.',
    'Supplier-facing programs where quality, certification, or manufacturing teams still depend on 2D documentation.',
    'Pilot teams that want measurable reduction in repeated redraw and review effort before broader rollout.',
];

const whyNow = [
    'AI is now good enough to assist repetitive engineering checks without pretending to replace engineering judgment.',
    'Drawings remain the carrier of intent for suppliers, quality teams, and certifying bodies across real industrial programs.',
    'A focused pilot can start narrow, stay human-in-the-loop, and prove value before deeper CAD and PLM rollout.',
];

const pilotSteps = [
    'Start with 1-2 part families and one review-heavy workflow.',
    'Measure redraw effort, repeated review items, and time to release.',
    'Expand team by team once the workflow proves itself.',
];

function ScreenshotFrame({
    src,
    alt,
    fallbackSrc,
    aspectClassName,
    imageClassName,
}: {
    src: string;
    alt: string;
    fallbackSrc?: string;
    aspectClassName?: string;
    imageClassName?: string;
}) {
    const isVideo = src.toLowerCase().endsWith('.mp4');

    const handleImageError = (event: SyntheticEvent<HTMLImageElement>) => {
        if (!fallbackSrc || event.currentTarget.dataset.fallbackApplied === 'true') {
            return;
        }

        event.currentTarget.dataset.fallbackApplied = 'true';
        event.currentTarget.src = fallbackSrc;
    };

    return (
        <div className="relative overflow-hidden rounded-[28px] border border-gray-200 bg-white shadow-[0_24px_80px_-32px_rgba(17,24,39,0.45)]">
            <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/70 to-transparent pointer-events-none" />
            <div className={clsx('bg-gray-100', aspectClassName ?? 'aspect-[4/3]')}>
                {isVideo ? (
                    <video
                        src={src}
                        aria-label={alt}
                        poster={fallbackSrc}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className={clsx('h-full w-full object-cover', imageClassName)}
                    />
                ) : (
                    <img
                        src={src}
                        alt={alt}
                        onError={handleImageError}
                        className={clsx('h-full w-full object-cover', imageClassName)}
                    />
                )}
            </div>
        </div>
    );
}

export default function Pitch() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white text-gray-900">
            <header className="sticky top-0 z-50 border-b border-orange-100 bg-white/90 backdrop-blur">
                <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-4">
                        <Link to="/" className="flex items-center gap-3">
                            <img src="/media/rd_logo.png" alt="RapidDraft" className="h-8 w-auto" />
                        </Link>
                    </div>
                    <div className="flex items-center gap-3">
                        <a
                            href={MAIN_SITE_ORIGIN}
                            className="hidden rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-gray-300 hover:text-gray-900 sm:inline-flex"
                        >
                            Main Site
                        </a>
                        <a
                            href={BOOK_DEMO_URL}
                            className="inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 transition-transform hover:scale-[1.02] hover:bg-primary-hover"
                        >
                            Book a demo
                        </a>
                    </div>
                </div>
            </header>

            <Section id="story" className="bg-gray-50 pt-16 pb-12">
                <div className="max-w-5xl">
                    <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-gray-900 md:text-6xl">
                        Between design iterations, <span className="text-primary">engineering decisions get lost.</span>
                    </h1>
                    <p className="mt-6 max-w-4xl text-xl leading-9 text-gray-600">
                        Engineering documentation can take a large share of an engineer&apos;s time, and too much of that effort repeats on
                        every revision. Drawings, review comments, manufacturing constraints, and lessons learned still live across PLM tools,
                        emails, PDFs, and meeting minutes instead of staying with the 3D model.
                    </p>
                    <p className="mt-5 max-w-4xl text-xl leading-9 text-gray-600">
                        RapidDraft closes that gap. It preserves drafting intent, structures review decisions, and gives teams a tighter path
                        from CAD change to drawing release without restarting the workflow from scratch.
                    </p>
                </div>
            </Section>

            <Section className="pt-4 pb-4">
                <div className="rounded-[36px] border border-orange-100 bg-[radial-gradient(circle_at_top,rgba(255,237,213,0.65),transparent_54%),linear-gradient(180deg,#ffffff_0%,#fff8f1_100%)] px-6 py-8 shadow-[0_28px_90px_-42px_rgba(234,88,12,0.32)] sm:px-8 lg:px-10">
                    <div className="mx-auto max-w-3xl text-center">
                        <div className="inline-flex items-center rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-primary shadow-sm">
                            Mode Launcher
                        </div>
                        <h2 className="mt-5 text-3xl font-bold tracking-tight text-gray-900 md:text-5xl">
                            Start in the right RapidDraft workflow
                        </h2>
                        <p className="mt-5 text-lg leading-8 text-gray-600">
                            RapidDraft opens with a launcher that helps engineers choose the right workspace before they dive into the full
                            toolset.
                        </p>
                        <p className="mt-3 text-lg leading-8 text-gray-600">
                            Teams can jump straight into batch processing, drawing analysis, design review, collaboration, or the expert suite,
                            then switch modes later as the job evolves.
                        </p>
                    </div>
                    <div className="mt-10">
                        <ScreenshotFrame
                            src="/media/pitch/launcherUI.gif"
                            alt="RapidDraft launcher screen showing mode cards for batch processing, drawing analysis, design review, collaboration, and the expert workspace."
                            aspectClassName="aspect-[16/9]"
                            imageClassName="object-contain bg-white p-1 sm:p-2"
                        />
                    </div>
                </div>
            </Section>

            <Section className="pt-10">
                <div className="space-y-24">
                    {storyBlocks.map((item, index) => (
                        <div
                            key={item.title}
                            className={clsx(
                                'grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16',
                                index % 2 === 1 && 'lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1'
                            )}
                        >
                            <div>
                                <div className={clsx('inline-flex h-14 w-14 items-center justify-center rounded-2xl', item.color)}>
                                    <item.icon className="h-7 w-7" />
                                </div>
                                <div className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">{item.eyebrow}</div>
                                <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 md:text-[2rem]">{item.title}</h2>
                                <p className="mt-5 text-lg leading-8 text-gray-600">{item.description}</p>
                                <ul className="mt-6 space-y-3">
                                    {item.bullets.map((bullet) => (
                                        <li key={bullet} className="flex items-start gap-3">
                                            <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-50">
                                                <Check className="h-3.5 w-3.5 text-primary" />
                                            </div>
                                            <span className="text-base text-gray-700">{bullet}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <ScreenshotFrame src={item.image} fallbackSrc={item.imageFallback} alt={item.imageAlt} />
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            <Section background="light">
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-start">
                    <div>
                        <div className="inline-flex items-center rounded-full bg-white px-3 py-1 text-sm font-semibold text-primary shadow-sm">
                            Built for pilot conversations
                        </div>
                        <h2 className="mt-5 text-4xl font-bold tracking-tight text-gray-900">
                            Built for teams that still live in drawings.
                        </h2>
                        <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-600">
                            This page is aimed at pilot prospects, not abstract market slides. The best first deployment is narrow, measurable,
                            and close to a real release workflow.
                        </p>

                        <div className="mt-8 grid gap-4">
                            {fitItems.map((item) => (
                                <div key={item} className="rounded-2xl border border-gray-200 bg-white px-5 py-4">
                                    <div className="flex items-start gap-3">
                                        <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-50">
                                            <Check className="h-4 w-4 text-primary" />
                                        </div>
                                        <p className="text-base leading-7 text-gray-700">{item}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-10">
                            <h3 className="text-lg font-bold text-gray-900">Why now</h3>
                            <div className="mt-4 grid gap-4">
                                {whyNow.map((item) => (
                                    <div key={item} className="rounded-2xl border border-orange-100 bg-orange-50/60 px-5 py-4">
                                        <p className="text-base leading-7 text-gray-700">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="rounded-[32px] bg-gray-900 p-8 text-white shadow-[0_28px_90px_-38px_rgba(17,24,39,0.8)]">
                        <div className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-200">Suggested pilot shape</div>
                        <h3 className="mt-4 text-3xl font-bold tracking-tight">Keep the first rollout narrow and measurable.</h3>
                        <p className="mt-4 text-base leading-7 text-gray-300">
                            Start where repeated redraw and review effort is obvious. Prove value in one workflow, then expand team by team.
                        </p>
                        <div className="mt-8 space-y-4">
                            {pilotSteps.map((step, index) => (
                                <div key={step} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-500/20 text-sm font-bold text-orange-200">
                                        {index + 1}
                                    </div>
                                    <p className="text-sm leading-6 text-gray-200">{step}</p>
                                </div>
                            ))}
                        </div>
                        <a
                            href={BOOK_DEMO_URL}
                            className="mt-8 inline-flex items-center rounded-full bg-primary px-6 py-3.5 text-base font-semibold text-white transition-transform hover:scale-[1.02] hover:bg-primary-hover"
                        >
                            Start a pilot conversation
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </a>
                    </div>
                </div>
            </Section>

            <section className="bg-gray-900 py-20">
                <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
                    <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-orange-200">
                        Final CTA
                    </div>
                    <h2 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-5xl">
                        If drawings and reviews keep restarting, start with one pilot workflow.
                    </h2>
                    <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-300">
                        RapidDraft is designed to reduce repeated redraw and review effort without forcing teams to abandon how engineering
                        release actually works.
                    </p>
                    <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <a
                            href={BOOK_DEMO_URL}
                            className="inline-flex items-center rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-white transition-transform hover:scale-[1.02] hover:bg-primary-hover"
                        >
                            Book a demo
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </a>
                        <a
                            href={MAIN_SITE_ORIGIN}
                            className="inline-flex items-center rounded-full border border-white/15 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:border-white/30 hover:bg-white/5"
                        >
                            View the full site
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
