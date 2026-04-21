import { ArrowLeft, ArrowRight, ChevronRight } from 'lucide-react';
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import PageMeta from '../components/PageMeta';
import Reveal from '../components/home/Reveal';
import type { CompanyDemoConfig, StoryChapter } from '../companyDemos/types';

type CompanyDemoPageProps = {
    config: CompanyDemoConfig;
    isHostMode?: boolean;
};

function DemoHeader({ config, isHostMode }: { config: CompanyDemoConfig; isHostMode: boolean }) {
    return (
        <header className="sticky top-0 z-50 border-b border-stone-200/70 bg-white/90 backdrop-blur-xl">
            <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-4 px-5 py-4 sm:px-6 lg:px-8 xl:px-10">
                <div className="flex items-center gap-4">
                    <img src="/media/rd_logo.png" alt="RapidDraft" className="h-8 w-auto" />
                    <span className="inline-flex items-center rounded-full border border-orange-200/80 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary shadow-[0_14px_30px_-24px_rgba(234,88,12,0.55)]">
                        {config.accessLabel}
                    </span>
                </div>

                {!isHostMode ? (
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition hover:text-gray-950"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to RapidDraft
                    </Link>
                ) : (
                    <span className="hidden text-sm text-gray-500 sm:inline">
                        {config.narrative.hostModeNote}
                    </span>
                )}
            </div>
        </header>
    );
}

function HeroStoryboard({ config }: { config: CompanyDemoConfig }) {
    return (
        <div className="warm-panel relative overflow-hidden p-4 sm:p-5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,237,213,0.7),transparent_54%)]" />
            <div className="relative overflow-hidden rounded-[1.9rem] border border-[#262d3f] bg-[linear-gradient(145deg,#141b28_0%,#1b2432_52%,#261f2f_100%)] p-5 text-white shadow-[0_42px_120px_-48px_rgba(17,24,39,0.6)] sm:p-6">
                <div className="surface-grid rounded-[1.55rem] border border-white/10 bg-white/5 p-4 sm:p-5">
                    <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-4">
                        <div>
                            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-orange-200">
                                {config.heroStoryboard.eyebrow}
                            </p>
                            <h3 className="mt-2 text-lg font-semibold tracking-tight sm:text-xl">
                                {config.heroStoryboard.title}
                            </h3>
                        </div>
                        <div className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium text-white/80">
                            {config.heroStoryboard.revisionLabel}
                        </div>
                    </div>

                    <div className="mt-5 space-y-4">
                        {config.heroStoryboard.steps.map((item, index) => (
                            <div key={item.label} className="flex items-start gap-4">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-sm font-semibold text-orange-100 ring-1 ring-white/10">
                                    0{index + 1}
                                </div>
                                <div className="flex min-w-0 items-start gap-3 rounded-[1.35rem] border border-white/10 bg-white/6 px-4 py-3">
                                    <div className="min-w-0">
                                        <p className="text-sm font-semibold text-white">{item.label}</p>
                                        <p className="mt-1 text-sm leading-6 text-white/72">{item.text}</p>
                                    </div>
                                    {index < config.heroStoryboard.steps.length - 1 ? (
                                        <ArrowRight className="mt-1 hidden h-4 w-4 shrink-0 text-white/40 sm:block" />
                                    ) : null}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

function ChapterRail({ chapters }: { chapters: StoryChapter[] }) {
    return (
        <aside className="hidden lg:block">
            <div className="sticky top-28 rounded-[1.9rem] border border-stone-200/80 bg-white/92 p-5 shadow-[0_28px_80px_-46px_rgba(17,24,39,0.18)]">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-primary/70">Storyline</p>
                <div className="mt-5 space-y-2">
                    {chapters.map((chapter) => (
                        <a
                            key={chapter.id}
                            href={`#${chapter.id}`}
                            className="group flex items-start gap-3 rounded-[1.2rem] border border-transparent px-3 py-3 transition hover:border-orange-200 hover:bg-orange-50/70"
                        >
                            <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-50 text-xs font-semibold text-primary">
                                {chapter.stepNumber}
                            </span>
                            <div className="min-w-0">
                                <p className="text-sm font-semibold text-gray-900">{chapter.title}</p>
                                <p className="mt-1 text-sm leading-6 text-gray-500 group-hover:text-gray-600">
                                    {chapter.video.durationLabel}
                                </p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </aside>
    );
}

function ArtifactFlow({ inputs, outputs }: { inputs?: string[]; outputs?: string[] }) {
    if (!inputs?.length && !outputs?.length) return null;
    return (
        <div className="flex flex-wrap items-center gap-2 pt-1 text-[13px]">
            {inputs?.map((item) => (
                <span key={`in-${item}`} className="rounded-full border border-stone-200 bg-white px-3 py-1 text-gray-600">
                    {item}
                </span>
            ))}
            {inputs?.length && outputs?.length ? <ArrowRight className="h-3.5 w-3.5 text-gray-400" /> : null}
            {outputs?.map((item) => (
                <span key={`out-${item}`} className="rounded-full bg-orange-50 px-3 py-1 font-medium text-primary">
                    {item}
                </span>
            ))}
        </div>
    );
}

function VideoPanel({ chapter, companyName }: { chapter: StoryChapter; companyName: string }) {
    const sharedFrameClass =
        'overflow-hidden rounded-[1.7rem] border border-stone-200/80 bg-[linear-gradient(180deg,rgba(255,250,247,0.94),rgba(255,255,255,0.98))] shadow-[0_24px_70px_-42px_rgba(17,24,39,0.18)]';

    if (chapter.video.src) {
        return (
            <div className="overflow-hidden rounded-[1.4rem] border border-stone-900/10 bg-stone-950 shadow-[0_28px_80px_-46px_rgba(17,24,39,0.45)]">
                <div className="aspect-video bg-stone-950">
                    <video
                        className="h-full w-full object-contain"
                        controls
                        preload="metadata"
                        playsInline
                    >
                        <source src={chapter.video.src} type="video/mp4" />
                        Your browser does not support embedded video playback.
                    </video>
                </div>
                <div className="flex items-center justify-between gap-3 border-t border-white/10 bg-stone-950/95 px-4 py-3">
                    <p className="text-sm font-medium text-white/85">{chapter.video.placeholderTitle}</p>
                    <span className="rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-orange-200">
                        {chapter.video.durationLabel}
                    </span>
                </div>
            </div>
        );
    }

    if (chapter.video.youtubeId) {
        return (
            <div className={sharedFrameClass}>
                <div className="aspect-[16/10] bg-stone-100 sm:aspect-video">
                    <iframe
                        className="h-full w-full"
                        src={`https://www.youtube-nocookie.com/embed/${chapter.video.youtubeId}`}
                        title={`${companyName} demo chapter ${chapter.stepNumber}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    />
                </div>
                <div className="border-t border-stone-200/80 px-5 py-4">
                    <div className="flex items-center justify-between gap-3">
                        <p className="text-sm font-semibold text-gray-900">{chapter.video.placeholderTitle}</p>
                        <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-primary">
                            {chapter.video.durationLabel}
                        </span>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={sharedFrameClass}>
            <div className="aspect-[16/10] bg-[linear-gradient(145deg,#fffaf7_0%,#ffffff_55%,#fff7ed_100%)] p-5 sm:aspect-video sm:p-6">
                <div className="flex h-full flex-col justify-between rounded-[1.4rem] border border-dashed border-orange-200 bg-white/78 p-5">
                    <div className="flex items-center justify-between gap-3">
                        <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary/70">
                            Video {chapter.stepNumber}
                        </span>
                        <span className="rounded-full border border-stone-200 bg-white px-3 py-1 text-xs font-medium text-gray-600">
                            {chapter.video.durationLabel}
                        </span>
                    </div>

                    <div>
                        <h4 className="text-xl font-semibold tracking-tight text-gray-950">{chapter.video.placeholderTitle}</h4>
                        <p className="mt-3 text-sm leading-7 text-gray-600">{chapter.video.recordingBrief}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function DemoCtaLink({ config, className, children }: { config: CompanyDemoConfig; className: string; children: ReactNode }) {
    const isExternal = /^https?:\/\//i.test(config.cta.buttonHref);

    if (isExternal || config.cta.buttonNewTab) {
        return (
            <a
                href={config.cta.buttonHref}
                target={config.cta.buttonNewTab ? '_blank' : undefined}
                rel={config.cta.buttonNewTab ? 'noreferrer' : undefined}
                className={className}
            >
                {children}
            </a>
        );
    }

    return (
        <Link to={config.cta.buttonHref} className={className}>
            {children}
        </Link>
    );
}

export default function CompanyDemoPage({ config, isHostMode = false }: CompanyDemoPageProps) {
    const metaPath = isHostMode ? '/' : `/pilots/${config.slug}`;

    return (
        <div className="min-h-screen bg-white text-gray-900">
            <PageMeta
                title={`${config.companyName} pilot demo | RapidDraft`}
                description={config.summary}
                path={metaPath}
                robots="noindex, nofollow"
            />

            <DemoHeader config={config} isHostMode={isHostMode} />

            <main>
                <section className="hero-mesh relative overflow-hidden border-b border-stone-200/70">
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-[radial-gradient(circle_at_top,rgba(17,24,39,0.08),transparent_65%)]" />
                    <div className="mx-auto max-w-[1180px] px-5 py-14 sm:px-6 lg:px-8 lg:py-20 xl:px-10">
                        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.52fr)_minmax(0,0.48fr)] lg:items-center">
                            <Reveal className="max-w-3xl">
                                <span className="site-kicker">{config.hero.badge}</span>
                                <h1 className="hero-title mt-6 max-w-[13ch]">{config.hero.title}</h1>
                                <p className="hero-copy mt-6 max-w-2xl">{config.hero.description}</p>

                                <div className="mt-8 flex flex-wrap gap-3">
                                    {config.hero.proofChips.map((chip) => (
                                        <span
                                            key={chip}
                                            className="inline-flex items-center rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-[0_18px_40px_-34px_rgba(17,24,39,0.18)]"
                                        >
                                            {chip}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                                    <a href="#storyline" className="btn-primary w-full sm:w-auto">
                                        See the storyline
                                    </a>
                                    <DemoCtaLink config={config} className="btn-secondary w-full sm:w-auto">
                                        {config.cta.buttonLabel}
                                    </DemoCtaLink>
                                </div>

                                <div className="mt-8 rounded-[1.7rem] border border-stone-200/80 bg-white/90 p-5 shadow-[0_20px_50px_-38px_rgba(17,24,39,0.14)]">
                                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-primary/70">{config.hero.scenarioTitle}</p>
                                    <p className="mt-3 text-base leading-7 text-gray-600">{config.hero.scenarioBody}</p>
                                </div>
                            </Reveal>

                            <Reveal delay={0.08}>
                                {config.hero.image ? (
                                    <div className="overflow-hidden rounded-[1.9rem] border border-stone-200/80 bg-stone-100 shadow-[0_42px_120px_-48px_rgba(17,24,39,0.35)]">
                                        <img
                                            src={config.hero.image.src}
                                            alt={config.hero.image.alt}
                                            className="aspect-[16/10] w-full object-cover object-center lg:aspect-[4/5]"
                                            loading="eager"
                                        />
                                    </div>
                                ) : (
                                    <HeroStoryboard config={config} />
                                )}
                            </Reveal>
                        </div>
                    </div>
                </section>

                <section id="storyline" className="bg-[#fff8f3] py-16 md:py-20">
                    <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8 xl:px-10">
                        <Reveal className="mx-auto max-w-3xl text-center">
                            <p className="site-kicker">{config.narrative.storylineKicker}</p>
                            <h2 className="section-title mt-6">{config.narrative.storylineTitle}</h2>
                            <p className="section-copy mt-5">{config.narrative.storylineBody}</p>
                        </Reveal>

                        <div className="mt-12 grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)] xl:grid-cols-[300px_minmax(0,1fr)]">
                            <ChapterRail chapters={config.chapters} />

                            <div className="space-y-6">
                                {config.chapters.map((chapter, index) => (
                                    <Reveal key={chapter.id} delay={0.03 * index}>
                                        <article
                                            id={chapter.id}
                                            className="surface-card scroll-mt-28 overflow-hidden p-6 sm:p-8"
                                        >
                                            <div className="flex items-baseline gap-3">
                                                <span className="text-sm font-semibold text-primary">Step {chapter.stepNumber}</span>
                                                <h3 className="text-[1.6rem] font-semibold leading-tight tracking-tight text-gray-950 sm:text-[1.85rem]">
                                                    {chapter.title}
                                                </h3>
                                            </div>

                                            <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,0.46fr)_minmax(0,0.54fr)] lg:items-center xl:grid-cols-[minmax(0,0.44fr)_minmax(420px,0.56fr)]">
                                                <div className="space-y-4 text-[15px] leading-7 text-gray-700">
                                                    <p>{chapter.engineerAction}</p>
                                                    <p>
                                                        <span className="font-semibold text-gray-900">RapidDraft</span>{' '}
                                                        {chapter.rapiddraftReturn.replace(/^RapidDraft\s+/, '')}
                                                    </p>
                                                    <p className="border-l-2 border-primary/40 pl-4 italic text-gray-600">
                                                        {chapter.managementValue}
                                                    </p>
                                                    <ArtifactFlow inputs={chapter.artifactsIn} outputs={chapter.artifactsOut} />
                                                </div>

                                                <VideoPanel chapter={chapter} companyName={config.companyName} />
                                            </div>
                                        </article>
                                    </Reveal>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {config.slug !== 'somic' ? (
                    <section className="hero-mesh py-16 md:py-20">
                        <div className="mx-auto max-w-[1180px] px-5 sm:px-6 lg:px-8 xl:px-10">
                            <div className="grid gap-6 lg:grid-cols-[minmax(0,0.56fr)_minmax(0,0.44fr)]">
                                <Reveal>
                                    <div className="surface-card h-full p-7 sm:p-8">
                                        <p className="site-kicker">{config.narrative.finalCtaKicker}</p>
                                        <h2 className="section-title mt-6 max-w-[12ch]">{config.narrative.finalCtaTitle}</h2>
                                        <p className="section-copy mt-5 max-w-2xl">{config.narrative.finalCtaBody}</p>
                                        <div className="mt-8">
                                            <DemoCtaLink config={config} className="btn-primary">
                                                {config.cta.buttonLabel}
                                                <ArrowRight className="ml-2 h-4 w-4" />
                                            </DemoCtaLink>
                                        </div>
                                    </div>
                                </Reveal>

                                <Reveal delay={0.06}>
                                    <div className="rounded-[2rem] border border-[#262d3f] bg-[linear-gradient(140deg,#171d2b_0%,#1d2435_52%,#2a2331_100%)] p-7 text-white shadow-[0_42px_120px_-48px_rgba(17,24,39,0.58)] sm:p-8">
                                        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-orange-200">
                                            {config.cta.panelTitle}
                                        </p>
                                        <ul className="mt-6 space-y-4">
                                            {config.cta.needs.map((item) => (
                                                <li key={item} className="flex items-start gap-3 text-sm leading-7 text-white/84">
                                                    <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-orange-200" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        {config.cta.note ? (
                                            <div className="mt-6 rounded-[1.35rem] border border-white/10 bg-white/6 px-4 py-4 text-sm leading-7 text-white/72">
                                                {config.cta.note}
                                            </div>
                                        ) : null}
                                    </div>
                                </Reveal>
                            </div>
                        </div>
                    </section>
                ) : null}
            </main>

            <Footer />
        </div>
    );
}
