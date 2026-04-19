import { useState } from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageMeta from '../components/PageMeta';
import Section from '../components/Section';
import HeroCapabilityRail, { type HeroCapabilityItem } from '../components/home/HeroCapabilityRail';
import ProblemSolutionStory from '../components/home/ProblemSolutionStory';
import ProofStrip from '../components/home/ProofStrip';
import Reveal from '../components/home/Reveal';

const heroCapabilities: HeroCapabilityItem[] = [
    {
        key: 'drawing-analysis',
        label: 'AI Drawing Analysis',
        title: 'AI Drawing Analysis',
        description:
            'RapidDraft generates manufacturing-ready drawings from the current geometry, then preserves the decisions that matter when the design changes.',
        media: '/media/pitch/optimized/drawing-analysis.mp4',
        poster: '/media/pitch/pitch-drawing-memory.png',
        alt: 'RapidDraft drawing analysis workflow with model-linked drawing context.',
        durationMs: 9030,
    },
    {
        key: 'design-review',
        label: 'Rules/AI Design Reviews',
        title: 'Rules/AI Design Reviews',
        description:
            'RapidDraft surfaces manufacturability and completeness issues early, while engineers stay in control of the final decisions.',
        media: '/media/pitch/optimized/design-review-expert-mode.mp4',
        poster: '/media/pitch/pitch-dfm-checks.png',
        alt: 'RapidDraft design review and manufacturability workspace with issue panels.',
        durationMs: 15364,
    },
    {
        key: 'collaboration',
        label: 'AI/Human Collaboration',
        title: 'AI/Human Collaboration',
        description:
            'RapidDraft is an AI collaboration layer on top of CAD. It keeps design, analysis, and manufacturing aligned around a single source of truth: the 3D model.',
        media: '/media/pitch/optimized/collaboration.mp4',
        poster: '/media/pitch/pitch-collaboration.png',
        alt: 'RapidDraft collaboration workflow showing geometry-linked review discussion.',
        durationMs: 5940,
    },
    {
        key: 'bulk-review',
        label: 'Bulk Reviews and Analysis',
        title: 'Bulk Reviews and Analysis',
        description:
            'RapidDraft lets teams run repeated review passes across drawings, revisions, and part families in one workflow, so engineers spend less time reopening files one by one.',
        media: '/media/pitch/optimized/bulk-design-review.mp4',
        poster: '/media/pitch/pitch-release-approval.png',
        alt: 'RapidDraft bulk review workspace showing multiple review items and issue summaries.',
        durationMs: 11100,
    },
];

const proofItems = [
    {
        metric: '30%',
        title: 'Fewer change cycles',
        description: 'Catch issues before tooling and release work have to restart.',
    },
    {
        metric: '10x',
        title: 'Faster feedback',
        description: 'Surface review signals while the model is still active.',
    },
    {
        metric: '50%',
        title: 'Less checking time',
        description: 'Automate repetitive standards and manufacturability validation.',
    },
];

const problemCards = [
    {
        title: 'Drawings restart on every revision',
        description:
            'Documentation work gets rebuilt whenever geometry changes, even when the underlying intent stays the same.',
    },
    {
        title: 'Manufacturing constraints live outside CAD',
        description:
            'DFM notes, supplier feedback, and release caveats often remain buried in PDFs, emails, and follow-up threads.',
    },
    {
        title: 'Review decisions lose their model context',
        description:
            'Comments and approvals are hard to trace back to the exact change in geometry that triggered them.',
    },
    {
        title: 'Lessons learned rarely reach the next cycle',
        description:
            'Teams keep rediscovering the same issues because past decisions are not preserved with the model.',
    },
];

const solutionBlocks = [
    {
        title: 'AI Drawing Analysis',
        description:
            'Generate manufacturing-ready drawings from current geometry and preserve drafting intent as designs evolve.',
        bullets: [
            'Preserves dimensions, notes, and checks across revisions.',
            'Keeps redraw effort from starting at zero after each change.',
            'Turns review effort into reusable drafting intent.',
        ],
    },
    {
        title: 'Rules/AI Design Reviews',
        description:
            'Surface manufacturability and completeness issues earlier while engineers stay in control of the final decisions.',
        bullets: [
            'Flags repeated DFM risks before formal review starts.',
            'Highlights missing or inconsistent release information.',
            'Keeps automation transparent and reviewable when decisions affect downstream teams.',
        ],
    },
    {
        title: 'AI/Human Collaboration',
        description:
            'Keep model-linked discussion, AI feedback, and human review in one shared workspace around the 3D model.',
        bullets: [
            'Feedback stays attached to geometry instead of scattered screenshots.',
            'Different reviewers work from the same model state and revision.',
            'Lessons learned stay connected to the part for future iterations.',
        ],
    },
    {
        title: 'Bulk Reviews and Analysis',
        description:
            'Run repeated checks across drawings, revisions, and part families without reopening work one file at a time.',
        bullets: [
            'Applies the same review logic across large drawing sets and revision queues.',
            'Surfaces common failure patterns, missing information, and high-priority outliers fast.',
            'Helps engineers triage exceptions instead of manually repeating the same checks.',
        ],
    },
];

const integrations = ['Siemens NX', 'SolidWorks', 'CATIA'];

export default function Product() {
    const [activeCapability, setActiveCapability] = useState(heroCapabilities[0].key);

    return (
        <>
            <PageMeta
                title="RapidDraft | AI for CAD reviews and manufacturing drawings"
                description="RapidDraft helps engineering teams accelerate design reviews, generate manufacturing-ready drawings, and retain engineering decision logic across CAD workflows."
                path="/"
            />

            <section className="hero-mesh relative overflow-hidden border-b border-stone-200/70">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-[radial-gradient(circle_at_top,rgba(17,24,39,0.08),transparent_60%)]" />
                <div className="mx-auto max-w-[1280px] px-5 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-20 xl:px-10">
                    <Reveal className="mx-auto max-w-[980px] pt-2 text-center sm:pt-4 lg:pt-8">
                        <div className="site-kicker">AI for CAD reviews and manufacturing drawings</div>
                        <h1 className="hero-title mt-6">
                            Accelerate engineering decisions and drawing release
                        </h1>
                        <p className="hero-copy mx-auto mt-5 max-w-4xl sm:mt-6">
                            RapidDraft helps engineering teams catch review issues earlier, generate manufacturing-ready drawings faster, and retain decision context that usually gets lost across emails, PDFs, and meetings.
                        </p>
                    </Reveal>

                    <Reveal delay={0.08} className="mx-auto mt-8 w-full max-w-[980px] sm:mt-10">
                        <HeroCapabilityRail
                            items={heroCapabilities}
                            activeKey={activeCapability}
                            onSelect={setActiveCapability}
                        />
                    </Reveal>

                    <Reveal delay={0.12} className="mx-auto mt-6 w-full max-w-[980px] sm:mt-8">
                        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                            <Link to="/book-demo" className="btn-primary w-full sm:w-auto">
                                Book a Demo
                            </Link>
                            <Link to="/deal-room" className="btn-secondary w-full sm:w-auto">
                                Explore Deal Room
                            </Link>
                        </div>
                    </Reveal>
                </div>
            </section>

            <Section className="pb-12 pt-10 md:pb-14 md:pt-16" background="light">
                <Reveal className="mx-auto mb-10 max-w-3xl text-center">
                    <h2 className="section-title text-balance">
                        Reduce repeated work before it delays release
                    </h2>
                    <p className="section-copy mx-auto mt-5 max-w-2xl">
                        RapidDraft brings faster feedback, fewer iterations, and less manual checking into the workflows where drawings, reviews, and release readiness still slow teams down.
                    </p>
                </Reveal>
                <ProofStrip
                    items={proofItems}
                    microcopy="Reduce manual checking, redrafting, and review bottlenecks before release."
                />
            </Section>

            <Section className="pb-14 pt-8 md:pb-20 md:pt-10">
                <ProblemSolutionStory
                    intro="Engineering documentation consumes a large share of engineering time, and too much of that effort gets recreated on every revision."
                    bodyParagraphs={[
                        'Drawings, review comments, manufacturing constraints, and lessons learned drift into disconnected tools instead of staying attached to the 3D model.',
                        'The result: teams redo checks, recreate documentation, and revisit decisions that should have stayed with the design.',
                    ]}
                    fragments={problemCards}
                    launcher={{
                        src: '/media/pitch/launcher.mp4',
                        poster: '/media/pitch/launcher-poster.png',
                        alt: 'RapidDraft launcher workflow showing workspace selection before entering the full toolset.',
                    }}
                    launcherTitle="Turn fragmented review work into a connected release workflow"
                    launcherBody="RapidDraft keeps drafting intent, review decisions, and manufacturing feedback attached to the design so teams can move faster from geometry change to drawing release."
                    capabilities={solutionBlocks}
                />
            </Section>

            <section className="relative overflow-hidden border-y border-stone-200/70 bg-[#fff8f3] py-16 md:py-24">
                <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8 xl:px-10">
                    <div className="grid gap-10 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.45fr)] lg:items-center">
                        <Reveal className="max-w-2xl">
                            <h2 className="section-title text-balance">
                                Works with the CAD and PLM systems your team already uses
                            </h2>
                            <p className="section-copy mt-5">
                                RapidDraft integrates into existing engineering workflows so teams can improve reviews, drawing release, and manufacturing feedback without disrupting established tools and processes.
                            </p>
                        </Reveal>

                        <Reveal delay={0.08}>
                            <div className="grid gap-5">
                                <div className="grid gap-3 sm:grid-cols-3">
                                    {integrations.map((item) => (
                                        <div
                                            key={item}
                                            className="rounded-[1.25rem] border border-stone-300 bg-white px-4 py-4 text-center text-sm font-semibold text-gray-900 shadow-[0_18px_40px_-34px_rgba(17,24,39,0.16)]"
                                        >
                                            {item}
                                        </div>
                                    ))}
                                </div>
                                <div className="flex items-start gap-3 rounded-[1.5rem] border border-stone-200/90 bg-white px-5 py-5 shadow-[0_20px_50px_-38px_rgba(17,24,39,0.16)]">
                                    <div className="rounded-full bg-orange-50 p-2 text-primary">
                                        <ShieldCheck className="h-4 w-4" />
                                    </div>
                                    <p className="text-sm leading-7 text-gray-600">
                                        Designed for review-heavy engineering environments where CAD, PDM, and PLM context needs to stay connected from first check to final release.
                                    </p>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            <section className="hero-mesh relative overflow-hidden border-t border-stone-200/70 py-16 md:py-24">
                <div className="mx-auto max-w-[1180px] px-5 sm:px-6 lg:px-8 xl:px-10">
                    <Reveal className="mx-auto max-w-[880px] text-center">
                        <h2 className="section-title text-balance">
                            Bring speed and traceability to drawing release
                        </h2>
                        <p className="section-copy mx-auto mt-5 max-w-3xl">
                            See how RapidDraft helps your team reduce review effort, generate manufacturing-ready drawings faster, and retain decision context across revisions.
                        </p>
                        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                            <Link to="/book-demo" className="btn-primary w-full sm:w-auto">
                                Book a Demo
                            </Link>
                            <Link to="/use-cases" className="btn-secondary w-full sm:w-auto">
                                See Use Cases
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </div>
                    </Reveal>
                </div>
            </section>
        </>
    );
}
