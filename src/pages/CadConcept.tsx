import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Gauge, MessageSquareMore, ScanSearch, ShieldCheck, Workflow } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageMeta from '../components/PageMeta';
import Reveal from '../components/home/Reveal';
import KineticGridBackground from '../components/home/KineticGridBackground';

type CapabilityItem = {
    key: string;
    label: string;
    title: string;
    signal: string;
    description: string;
    bullets: string[];
    media: string;
    poster?: string;
    alt: string;
};

type CapabilityStoryItem = {
    eyebrow: string;
    title: string;
    description: string;
    media: string;
    poster?: string;
    alt: string;
};

const capabilityModules: CapabilityItem[] = [
    {
        key: 'drawing-memory',
        label: 'Drawing Memory',
        title: 'Drawing intent that survives geometry change',
        signal: 'Active module // drawing-analysis',
        description:
            'RapidDraft regenerates manufacturing-ready drawings from live geometry while preserving dimensions, annotations, and engineering decisions across revisions.',
        bullets: [
            'Carry drafting logic from one revision to the next instead of restarting from zero.',
            'Keep documentation aligned with the model that is actually being released.',
            'Convert review time into reusable drawing knowledge.',
        ],
        media: '/media/pitch/optimized/drawing-analysis.mp4',
        poster: '/media/pitch/pitch-drawing-memory.png',
        alt: 'RapidDraft drawing analysis workflow with model-linked drawing context.',
    },
    {
        key: 'review-automation',
        label: 'Review Automation',
        title: 'Surface manufacturability signals before release work stalls',
        signal: 'Active module // rules-ai-review',
        description:
            'Rules and AI checks flag manufacturability, completeness, and release readiness issues early while engineers stay in control of the final call.',
        bullets: [
            'Catch repeated DFM risks before they become supplier blockers.',
            'Expose missing drawing details before review meetings absorb the delay.',
            'Keep automation transparent enough for engineering teams to trust it.',
        ],
        media: '/media/pitch/optimized/design-review-expert-mode.mp4',
        poster: '/media/pitch/pitch-dfm-checks.png',
        alt: 'RapidDraft design review and manufacturability workspace with issue panels.',
    },
    {
        key: 'model-linked-collaboration',
        label: 'Model-Linked Collaboration',
        title: 'Keep review discussion attached to the exact geometry that changed',
        signal: 'Active module // collaboration-layer',
        description:
            'Comments, AI suggestions, and expert review stay connected to the 3D model so teams do not lose context between CAD, screenshots, and follow-up threads.',
        bullets: [
            'Review feedback stays anchored to the part state under discussion.',
            'Human and AI reviewers work from one connected context surface.',
            'Lessons learned remain searchable when the next revision arrives.',
        ],
        media: '/media/pitch/optimized/collaboration.mp4',
        poster: '/media/pitch/pitch-collaboration.png',
        alt: 'RapidDraft collaboration workflow showing geometry-linked review discussion.',
    },
    {
        key: 'fleet-analysis',
        label: 'Fleet Analysis',
        title: 'Run repeatable review logic across drawings, revisions, and part families',
        signal: 'Active module // bulk-analysis',
        description:
            'RapidDraft applies repeated review logic at scale so engineers can focus on exceptions and release decisions instead of reopening similar files one by one.',
        bullets: [
            'Scan revision queues faster without dropping important edge cases.',
            'Spot common failure patterns across large drawing sets.',
            'Prioritize the parts that need expert attention first.',
        ],
        media: '/media/pitch/optimized/bulk-design-review.mp4',
        poster: '/media/pitch/pitch-release-approval.png',
        alt: 'RapidDraft bulk review workspace showing multiple review items and issue summaries.',
    },
];

const readoutMetrics = [
    {
        label: 'Release loops avoided',
        value: '30%',
        description: 'Catch manufacturing and documentation issues before tooling and sign-off have to restart.',
    },
    {
        label: 'Feedback velocity',
        value: '10x',
        description: 'Bring review signals forward while the model and the engineer are still in the loop.',
    },
    {
        label: 'Manual checking removed',
        value: '50%',
        description: 'Automate repeated standards and completeness checks without hiding the reasoning.',
    },
];

const failureModes = [
    {
        title: 'Revision work resets too often',
        description: 'Drawings and release notes get rebuilt after geometry changes even when the engineering intent stayed intact.',
    },
    {
        title: 'Manufacturing feedback fragments across tools',
        description: 'Supplier notes, DFM risks, and release caveats drift into PDFs, email threads, and side conversations.',
    },
    {
        title: 'Review decisions lose model context',
        description: 'Teams struggle to trace why a decision was made and which geometry state actually triggered it.',
    },
];

const workflowSteps = [
    {
        title: 'Interrogate the current part state',
        description: 'Read the model, the drawing context, and the latest release signals as one working surface.',
    },
    {
        title: 'Preserve engineering decisions',
        description: 'Carry annotations, review logic, and release knowledge forward instead of recreating them.',
    },
    {
        title: 'Escalate only the exceptions',
        description: 'Let engineers spend time on risky geometry changes and unresolved issues, not repeated checks.',
    },
];

const capabilityStories: CapabilityStoryItem[] = [
    {
        eyebrow: 'AI drawing analysis',
        title: 'Manufacturing-ready drawings without losing revision memory',
        description:
            'Generate current-state drawings while holding onto the dimensions, notes, and drafting decisions that still matter on the next revision.',
        media: '/media/pitch/optimized/drawing-analysis.mp4',
        poster: '/media/pitch/pitch-drawing-memory.png',
        alt: 'RapidDraft drawing analysis workflow.',
    },
    {
        eyebrow: 'Rules and AI reviews',
        title: 'Review bottlenecks become a monitored control loop',
        description:
            'Identify manufacturability and completeness issues earlier, then route only the exceptions that need expert judgment.',
        media: '/media/pitch/optimized/design-review-expert-mode.mp4',
        poster: '/media/pitch/pitch-dfm-checks.png',
        alt: 'RapidDraft design review expert mode.',
    },
    {
        eyebrow: 'Connected release workflow',
        title: 'Discussion, AI feedback, and geometry stay in the same frame',
        description:
            'Keep human review, AI suggestions, and release reasoning tied to the model instead of scattered screenshots and disconnected threads.',
        media: '/media/pitch/optimized/collaboration.mp4',
        poster: '/media/pitch/pitch-collaboration.png',
        alt: 'RapidDraft collaboration workflow.',
    },
];

const integrationSystems = ['Siemens NX', 'SolidWorks', 'CATIA', 'PDM / PLM ready'];

function CapabilityConsole({ items }: { items: CapabilityItem[] }) {
    const [activeKey, setActiveKey] = useState(items[0].key);
    const activeItem = items.find((item) => item.key === activeKey) ?? items[0];

    return (
        <Reveal delay={0.08} className="cad-panel p-4 sm:p-5 lg:p-6">
            <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                    <button
                        key={item.key}
                        type="button"
                        onClick={() => setActiveKey(item.key)}
                        className={clsx(
                            'cad-mono rounded-full border px-3 py-2 text-left text-[11px] uppercase tracking-[0.22em] transition sm:px-4',
                            activeKey === item.key
                                ? 'border-[#deac49]/40 bg-[#deac49]/10 text-[#f7efe3]'
                                : 'border-white/10 bg-white/[0.02] text-[#d8d3cb] hover:border-white/20 hover:bg-white/[0.05] hover:text-white'
                        )}
                    >
                        {item.label}
                    </button>
                ))}
            </div>

            <div className="mt-5 grid gap-5 xl:grid-cols-[minmax(0,1fr)_minmax(260px,0.56fr)] xl:items-stretch">
                <div className="cad-viewport">
                    <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                        <span className="h-2.5 w-2.5 rounded-full bg-[#ea580c]" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[#deac49]" />
                        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                        <span className="cad-mono ml-auto text-[10px] uppercase tracking-[0.24em] text-[#d8d3cb]">
                            Geometry-linked command surface
                        </span>
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeItem.key}
                            initial={{ opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -14 }}
                            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                            className="aspect-[16/11] bg-black/20"
                        >
                            <video
                                src={activeItem.media}
                                poster={activeItem.poster}
                                autoPlay
                                loop
                                muted
                                playsInline
                                aria-label={activeItem.alt}
                                className="h-full w-full object-cover"
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={`${activeItem.key}-copy`}
                        initial={{ opacity: 0, x: 14 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -14 }}
                        transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                        className="cad-panel-soft flex h-full flex-col justify-between p-5"
                    >
                        <div>
                            <div className="cad-mono text-[11px] uppercase tracking-[0.24em] text-[#deba93]">
                                {activeItem.signal}
                            </div>
                            <h2 className="cad-display-font mt-3 text-[1.85rem] font-medium leading-[1.05] tracking-[-0.04em] text-[#fbf7f0]">
                                {activeItem.title}
                            </h2>
                            <p className="mt-4 text-[15px] leading-7 text-[#d8d3cb]">
                                {activeItem.description}
                            </p>
                        </div>

                        <ul className="mt-5 space-y-3">
                            {activeItem.bullets.map((bullet) => (
                                <li key={bullet} className="flex items-start gap-3 text-sm leading-6 text-[#f0e6d6]">
                                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#deac49]/25 bg-[#deac49]/10 text-[#deac49]">
                                        <CheckCircle2 className="h-3 w-3" />
                                    </span>
                                    <span>{bullet}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </AnimatePresence>
            </div>
        </Reveal>
    );
}

function StoryViewport({ item, delay }: { item: CapabilityStoryItem; delay: number }) {
    return (
        <Reveal delay={delay}>
            <article className="cad-panel p-4 sm:p-5">
                <div className="cad-mono text-[11px] uppercase tracking-[0.24em] text-[#deba93]">
                    {item.eyebrow}
                </div>
                <h3 className="cad-display-font mt-4 text-[1.7rem] font-medium leading-[1.06] tracking-[-0.04em] text-[#fbf7f0]">
                    {item.title}
                </h3>
                <p className="mt-4 text-[15px] leading-7 text-[#d8d3cb]">
                    {item.description}
                </p>

                <div className="cad-viewport mt-6">
                    <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                        <span className="h-2.5 w-2.5 rounded-full bg-[#ea580c]" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[#deac49]" />
                        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    </div>
                    <div className="aspect-[16/11] bg-black/20">
                        <video
                            src={item.media}
                            poster={item.poster}
                            autoPlay
                            loop
                            muted
                            playsInline
                            aria-label={item.alt}
                            className="h-full w-full object-cover"
                        />
                    </div>
                </div>
            </article>
        </Reveal>
    );
}

export default function CadConcept() {
    return (
        <>
            <PageMeta
                title="RapidDraft CAD Concept | Engineering review control surface"
                description="A concept homepage for RapidDraft with a CAD-inspired design language, kinetic precision-grid visuals, and a modern mechanical engineering presentation."
                path="/cad-concept"
            />

            <div className="cad-concept-shell">
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    <KineticGridBackground className="absolute inset-0" />
                </div>

                <section className="relative overflow-hidden border-b border-white/10">
                    <div className="mx-auto max-w-[1320px] px-5 pb-14 pt-10 sm:px-6 lg:px-8 lg:pb-20 lg:pt-16 xl:px-10">
                        <div className="grid gap-12 xl:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] xl:items-end">
                            <Reveal className="max-w-[34rem]">
                                <div className="cad-kicker">CAD Review Operating Layer</div>
                                <h1 className="cad-title mt-6">
                                    Engineering review, drawing memory, and release logic in one control surface
                                </h1>
                                <p className="cad-copy mt-6 max-w-[33rem]">
                                    RapidDraft gives mechanical engineering teams a faster way to interrogate geometry changes, preserve drawing intent, and route manufacturability issues before release work stalls.
                                </p>

                                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                                    <Link to="/book-demo" className="cad-button-primary gap-2">
                                        Book a Demo
                                        <ArrowRight className="h-4 w-4" />
                                    </Link>
                                    <Link to="/use-cases" className="cad-button-secondary">
                                        See Use Cases
                                    </Link>
                                </div>

                                <div className="mt-8 flex flex-wrap gap-2">
                                    <div className="cad-chip">drawing memory</div>
                                    <div className="cad-chip">review automation</div>
                                    <div className="cad-chip">geometry-linked context</div>
                                </div>

                                <div className="mt-10 cad-panel-soft p-5">
                                    <div className="grid gap-5 sm:grid-cols-3">
                                        <div>
                                            <div className="cad-mono text-[11px] uppercase tracking-[0.22em] text-[#deba93]">
                                                Signal
                                            </div>
                                            <div className="mt-3 flex items-center gap-2 text-sm text-[#f7efe3]">
                                                <ScanSearch className="h-4 w-4 text-[#deac49]" />
                                                Model-aware review
                                            </div>
                                        </div>
                                        <div>
                                            <div className="cad-mono text-[11px] uppercase tracking-[0.22em] text-[#deba93]">
                                                State
                                            </div>
                                            <div className="mt-3 flex items-center gap-2 text-sm text-[#f7efe3]">
                                                <Workflow className="h-4 w-4 text-[#deac49]" />
                                                Release workflow aligned
                                            </div>
                                        </div>
                                        <div>
                                            <div className="cad-mono text-[11px] uppercase tracking-[0.22em] text-[#deba93]">
                                                Outcome
                                            </div>
                                            <div className="mt-3 flex items-center gap-2 text-sm text-[#f7efe3]">
                                                <ShieldCheck className="h-4 w-4 text-[#deac49]" />
                                                Fewer late-stage surprises
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Reveal>

                            <CapabilityConsole items={capabilityModules} />
                        </div>

                        <div className="mt-10 cad-rule" />

                        <div className="mt-8 grid gap-4 lg:grid-cols-3">
                            {readoutMetrics.map((item, index) => (
                                <Reveal key={item.label} delay={0.06 + index * 0.04}>
                                    <div className="cad-panel-soft h-full p-5 sm:p-6">
                                        <div className="cad-mono text-[11px] uppercase tracking-[0.22em] text-[#deba93]">
                                            {item.label}
                                        </div>
                                        <div className="cad-display-font mt-4 text-[3.1rem] font-medium leading-none tracking-[-0.05em] text-white">
                                            {item.value}
                                        </div>
                                        <p className="mt-4 text-sm leading-7 text-[#d8d3cb]">
                                            {item.description}
                                        </p>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="relative">
                    <div className="mx-auto max-w-[1320px] px-5 py-16 sm:px-6 lg:px-8 lg:py-24 xl:px-10">
                        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.44fr)_minmax(0,0.56fr)] lg:items-start">
                            <Reveal className="max-w-[30rem] lg:sticky lg:top-24">
                                <div className="cad-kicker">Why teams lose engineering context</div>
                                <h2 className="cad-section-title mt-6">
                                    Mechanical release work still breaks when context falls out of the loop
                                </h2>
                                <p className="cad-copy mt-6">
                                    Drawings, review comments, supplier notes, and release logic often live outside CAD. The next revision arrives, and teams rebuild knowledge they already paid for once.
                                </p>

                                <div className="mt-8 cad-panel-soft p-5">
                                    <div className="cad-mono text-[11px] uppercase tracking-[0.24em] text-[#deba93]">
                                        Systems in frame
                                    </div>
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {integrationSystems.map((item) => (
                                            <span key={item} className="cad-chip">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </Reveal>

                            <div className="space-y-6">
                                <Reveal delay={0.05}>
                                    <div className="cad-panel p-5 sm:p-6">
                                        <div className="flex items-center gap-3">
                                            <MessageSquareMore className="h-5 w-5 text-[#deac49]" />
                                            <div className="cad-mono text-[11px] uppercase tracking-[0.24em] text-[#deba93]">
                                                Failure modes in the current workflow
                                            </div>
                                        </div>

                                        <div className="mt-6 space-y-4">
                                            {failureModes.map((item, index) => (
                                                <div
                                                    key={item.title}
                                                    className="rounded-[1.35rem] border border-white/8 bg-white/[0.02] p-4 sm:p-5"
                                                >
                                                    <div className="cad-mono text-[11px] uppercase tracking-[0.2em] text-[#deac49]">
                                                        0{index + 1}
                                                    </div>
                                                    <h3 className="cad-display-font mt-3 text-[1.4rem] font-medium leading-tight tracking-[-0.03em] text-[#fbf7f0]">
                                                        {item.title}
                                                    </h3>
                                                    <p className="mt-3 text-sm leading-7 text-[#d8d3cb]">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </Reveal>

                                <Reveal delay={0.09}>
                                    <div className="cad-panel p-5 sm:p-6">
                                        <div className="flex items-center gap-3">
                                            <Gauge className="h-5 w-5 text-[#deac49]" />
                                            <div className="cad-mono text-[11px] uppercase tracking-[0.24em] text-[#deba93]">
                                                Closed-loop release workflow
                                            </div>
                                        </div>

                                        <div className="mt-6 grid gap-4">
                                            {workflowSteps.map((item, index) => (
                                                <div
                                                    key={item.title}
                                                    className="rounded-[1.35rem] border border-[#deba93]/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-4 sm:p-5"
                                                >
                                                    <div className="flex items-start justify-between gap-4">
                                                        <div>
                                                            <div className="cad-mono text-[11px] uppercase tracking-[0.2em] text-[#deac49]">
                                                                Step 0{index + 1}
                                                            </div>
                                                            <h3 className="cad-display-font mt-3 text-[1.35rem] font-medium leading-tight tracking-[-0.03em] text-[#fbf7f0]">
                                                                {item.title}
                                                            </h3>
                                                        </div>
                                                        <div className="rounded-full border border-[#deac49]/20 bg-[#deac49]/10 p-2 text-[#deac49]">
                                                            <Workflow className="h-4 w-4" />
                                                        </div>
                                                    </div>
                                                    <p className="mt-3 text-sm leading-7 text-[#d8d3cb]">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </Reveal>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="relative border-y border-white/10 bg-white/[0.02]">
                    <div className="mx-auto max-w-[1320px] px-5 py-16 sm:px-6 lg:px-8 lg:py-24 xl:px-10">
                        <Reveal className="mx-auto max-w-[44rem] text-center">
                            <div className="cad-kicker justify-center">What the product feels like in use</div>
                            <h2 className="cad-section-title mt-6">
                                A sharper visual system for CAD, reviews, and manufacturing handoff
                            </h2>
                            <p className="cad-copy mx-auto mt-6 max-w-[40rem]">
                                The concept keeps the current RapidDraft story, but presents it like an engineered workspace: precise, instrumented, and built around the model as the source of truth.
                            </p>
                        </Reveal>

                        <div className="mt-10 grid gap-6 xl:grid-cols-3">
                            {capabilityStories.map((item, index) => (
                                <StoryViewport key={item.title} item={item} delay={0.05 + index * 0.05} />
                            ))}
                        </div>
                    </div>
                </section>

                <section className="relative">
                    <div className="mx-auto max-w-[1120px] px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
                        <Reveal>
                            <div className="cad-panel p-6 sm:p-8 lg:p-10">
                                <div className="grid gap-8 lg:grid-cols-[minmax(0,0.64fr)_minmax(0,0.36fr)] lg:items-end">
                                    <div>
                                        <div className="cad-kicker">Final checkpoint</div>
                                        <h2 className="cad-section-title mt-6">
                                            Move from geometry change to drawing release with fewer blind spots
                                        </h2>
                                        <p className="cad-copy mt-6 max-w-[36rem]">
                                            RapidDraft helps mechanical teams keep drawing memory, review logic, and release context connected to the part that is actually moving through CAD.
                                        </p>
                                    </div>

                                    <div className="cad-panel-soft p-5">
                                        <div className="cad-mono text-[11px] uppercase tracking-[0.24em] text-[#deba93]">
                                            Next actions
                                        </div>
                                        <div className="mt-4 space-y-3">
                                            <Link to="/book-demo" className="cad-button-primary w-full gap-2">
                                                Book a Demo
                                                <ArrowRight className="h-4 w-4" />
                                            </Link>
                                            <Link to="/use-cases" className="cad-button-secondary w-full">
                                                Explore Use Cases
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </section>
            </div>
        </>
    );
}
