import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageMeta from '../components/PageMeta';
import Section from '../components/Section';
import Reveal from '../components/home/Reveal';

const overviewPoints = [
    'Drawings stay aligned with evolving CAD geometry.',
    'Manufacturability review starts before release friction compounds.',
    'Supplier-facing documentation leaves with fewer gaps and handoff surprises.',
];

const useCases = [
    {
        number: '01',
        title: 'New Product Development',
        description:
            'When 3D geometry moves faster than documentation, drawing release becomes the hidden bottleneck. RapidDraft keeps design, review, and drawing updates moving in the same direction.',
        bullets: [
            'Generate drawing updates continuously as geometry evolves.',
            'Screen early manufacturability questions before formal release reviews.',
            'Give program leads a clearer view of what is ready and what still needs attention.',
        ],
        image: '/media/usecase-new-product-development.jpg',
        chips: ['Drawing-led release', 'Early DFM review', 'Design intent preserved'],
    },
    {
        number: '02',
        title: 'Battery Packs and Structural Components',
        description:
            'High-complexity parts carry tighter tolerances, more manufacturing sensitivity, and less room for avoidable review drift. RapidDraft helps teams review structural components with more consistency before downstream work compounds.',
        bullets: [
            'Highlight manufacturing-sensitive features while the model is still active.',
            'Keep GD&T, geometry checks, and drawing completeness in one review flow.',
            'Reduce rework on components where late surprises are expensive.',
        ],
        image: '/media/usecase-battery-structural.png',
        chips: ['High-complexity parts', 'Tolerance-heavy review', 'Release discipline'],
    },
    {
        number: '03',
        title: 'Supplier Drawing Packages',
        description:
            'Supplier packages are strongest when drawings, release notes, and review decisions leave together. RapidDraft helps teams send cleaner documentation with fewer avoidable clarification loops.',
        bullets: [
            'Check for missing release information before the package leaves engineering.',
            'Standardize drawing outputs and review expectations across suppliers.',
            'Reduce back-and-forth on manufacturability, quality, and missing detail.',
        ],
        image: '/media/usecase-supplier-packages.png',
        chips: ['Supplier handoff', 'Cleaner documentation', 'Fewer feedback loops'],
    },
    {
        number: '04',
        title: 'Change-driven Updates (ECR / ECO)',
        description:
            'Geometry changes often trigger drawing churn long after the design decision is made. RapidDraft helps teams identify what changed, what needs review, and what should be updated before sign-off.',
        bullets: [
            'See which views, dimensions, and notes need attention after a change.',
            'Avoid restarting drawing work from zero after each revision.',
            'Keep the release path tighter when engineering change is already in motion.',
        ],
        image: '/media/usecase-change-driven.png',
        chips: ['Revision-driven workflows', 'Update validation', 'Faster sign-off'],
    },
    {
        number: '05',
        title: 'Legacy Drawing Cleanup',
        description:
            'Old drawing archives often carry outdated tolerances, missing standards context, and inconsistent release practices. RapidDraft helps teams modernize documentation without losing track of what matters.',
        bullets: [
            'Surface missing GD&T, outdated notes, and standards inconsistencies.',
            'Prioritize cleanup where release or manufacturing confusion is highest.',
            'Support migration toward cleaner drawing standards across older programs.',
        ],
        image: '/media/usecase-legacy-cleanup.png',
        chips: ['Archive modernization', 'Standards cleanup', 'Manufacturing clarity'],
    },
];

export default function UseCases() {
    return (
        <>
            <PageMeta
                title="Use Cases | RapidDraft"
                description="See where RapidDraft fits into drawing-heavy engineering release workflows, supplier packages, and change-driven review cycles."
                path="/use-cases"
            />

            <section className="hero-mesh relative overflow-hidden border-b border-stone-200/70">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-[radial-gradient(circle_at_top,rgba(17,24,39,0.08),transparent_60%)]" />
                <div className="mx-auto grid max-w-[1280px] gap-12 px-5 py-12 sm:px-6 md:py-16 lg:grid-cols-[minmax(0,0.45fr)_minmax(0,0.55fr)] lg:items-center lg:px-8 lg:py-20 xl:px-10">
                    <Reveal className="max-w-2xl">
                        <div className="site-kicker">Use Cases</div>
                        <h1 className="hero-title mt-6">
                            Where RapidDraft fits in real release workflows
                        </h1>
                        <p className="hero-copy mt-6 max-w-[34rem]">
                            From new product introduction to supplier drawing packages, RapidDraft is strongest where drawings, reviews, and manufacturability checks still create expensive loops.
                        </p>

                        <div className="mt-8 space-y-4">
                            {overviewPoints.map((point) => (
                                <div key={point} className="flex items-start gap-3 text-gray-700">
                                    <Check className="mt-1 h-4 w-4 shrink-0 text-primary" />
                                    <span className="card-copy text-gray-700">{point}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                            <Link to="/book-demo" className="btn-primary w-full sm:w-auto">
                                Book a Demo
                            </Link>
                            <a href="#workflow-examples" className="btn-secondary w-full sm:w-auto">
                                See Workflow Examples
                            </a>
                        </div>
                    </Reveal>

                    <Reveal delay={0.08} className="relative">
                        <div className="relative ml-auto max-w-[720px]">
                            <div className="surface-card overflow-hidden p-3 sm:p-4">
                                <img
                                    src="/media/usecase-battery-structural.png"
                                    alt="RapidDraft workflow for battery and structural components"
                                    className="aspect-[16/10] w-full rounded-[1.5rem] object-cover"
                                />
                            </div>

                            <div className="warm-panel absolute -bottom-6 left-4 w-[48%] p-2 shadow-[0_28px_80px_-46px_rgba(17,24,39,0.28)] sm:left-6 sm:p-3">
                                <img
                                    src="/media/usecase-supplier-packages.png"
                                    alt="RapidDraft workflow for supplier drawing packages"
                                    className="aspect-[4/3] w-full rounded-[1.25rem] object-cover"
                                />
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            <Section background="light" className="pb-12 pt-12 md:pb-16 md:pt-16">
                <Reveal className="mx-auto max-w-3xl text-center">
                    <h2 className="section-title text-balance">
                        Built for drawing-heavy release work, not abstract CAD demos
                    </h2>
                    <p className="section-copy mx-auto mt-5 max-w-2xl">
                        RapidDraft adds structure where review logic, manufacturability questions, and drawing updates are still handled manually across release-critical workflows.
                    </p>
                </Reveal>
            </Section>

            <Section id="workflow-examples" className="scroll-mt-24 pb-16 pt-14 md:pb-20 md:pt-20">
                <div className="space-y-16 md:space-y-24">
                    {useCases.map((item, index) => {
                        const reversed = index % 2 === 1;

                        return (
                            <div
                                key={item.title}
                                className={`grid gap-10 lg:grid-cols-[minmax(0,0.46fr)_minmax(0,0.54fr)] lg:items-center lg:gap-16 ${
                                    reversed ? 'lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1' : ''
                                }`}
                            >
                                <Reveal className="max-w-xl">
                                    <div className="card-index">Use Case {item.number}</div>
                                    <h2 className="section-title mt-4 text-balance">
                                        {item.title}
                                    </h2>
                                    <p className="section-copy mt-5">
                                        {item.description}
                                    </p>

                                    <div className="mt-7 flex flex-wrap gap-2">
                                        {item.chips.map((chip) => (
                                            <span
                                                key={chip}
                                                className="rounded-full border border-orange-200/70 bg-orange-50/70 px-3 py-1 text-xs font-medium text-primary"
                                            >
                                                {chip}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="mt-8 space-y-4">
                                        {item.bullets.map((bullet) => (
                                            <div key={bullet} className="flex items-start gap-3">
                                                <Check className="mt-1 h-4 w-4 shrink-0 text-primary" />
                                                <p className="card-copy text-gray-700">{bullet}</p>
                                            </div>
                                        ))}
                                    </div>
                                </Reveal>

                                <Reveal delay={0.08}>
                                    <div className="warm-panel overflow-hidden p-3 sm:p-4">
                                        <img
                                            src={item.image}
                                            alt={`${item.title} workflow illustration`}
                                            className="aspect-[16/10] w-full rounded-[1.55rem] object-cover"
                                        />
                                    </div>
                                </Reveal>
                            </div>
                        );
                    })}
                </div>
            </Section>

            <section className="hero-mesh relative overflow-hidden border-t border-stone-200/70 py-16 md:py-24">
                <div className="mx-auto max-w-[1180px] px-5 sm:px-6 lg:px-8 xl:px-10">
                    <Reveal className="warm-panel mx-auto max-w-[980px] px-6 py-12 text-center sm:px-10 sm:py-14">
                        <h2 className="section-title text-balance">
                            Bring a real workflow into the conversation
                        </h2>
                        <p className="section-copy mx-auto mt-5 max-w-3xl">
                            If one of these workflows looks familiar, we can start there and show where RapidDraft fits into your current review and drawing release path.
                        </p>
                        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                            <Link to="/book-demo" className="btn-primary w-full sm:w-auto">
                                Book a Demo
                            </Link>
                            <Link to="/" className="btn-secondary w-full sm:w-auto">
                                Product
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </div>
                    </Reveal>
                </div>
            </section>
        </>
    );
}
