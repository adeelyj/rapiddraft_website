import { Check } from 'lucide-react';
import PageMeta from '../components/PageMeta';
import Section from '../components/Section';
import Reveal from '../components/home/Reveal';

const conversationPoints = [
    'Walk through the workflow creating the most review or drawing effort.',
    'See where RapidDraft fits into your current CAD and release environment.',
    'Decide whether the workflow is a strong candidate for a narrow pilot.',
];

const bestFit = [
    'Mechanical design teams with frequent CAD revisions and drawing-heavy release workflows.',
    'Supplier-facing programs where quality, certification, or manufacturing teams still depend on 2D documentation.',
    'Teams that want measurable reduction in redraw and review effort before broader rollout.',
];

const pilotSteps = [
    'Start with one or two part families and one review-heavy workflow.',
    'Measure review effort, repeated issues, and time to release.',
    'Expand team by team once the workflow proves itself.',
];

export default function BookDemo() {
    return (
        <>
            <PageMeta
                title="Book a Demo | RapidDraft"
                description="Book a RapidDraft demo to walk through your drawing release and design review workflow."
                path="/book-demo"
            />

            <Section className="hero-mesh py-14 md:py-20">
                <div className="grid gap-12 lg:grid-cols-[minmax(0,0.45fr)_minmax(0,0.55fr)] lg:items-start lg:gap-16 xl:gap-20">
                    <Reveal className="lg:self-start lg:pt-8">
                        <div className="site-kicker">Book a Demo</div>
                        <h1 className="hero-title mt-6 md:text-[4rem] lg:text-6xl">
                            Bring the workflow that is slowing your team down the most.
                        </h1>
                        <p className="hero-copy mt-6 max-w-[32rem]">
                            The best demo starts with a real release workflow, not a generic product tour. Tell us where drawings, reviews, or manufacturability checks create the most friction, and we will focus the conversation there.
                        </p>

                        <div className="mt-8 max-w-[31rem] space-y-4">
                            {conversationPoints.map((point) => (
                                <div key={point} className="flex items-start gap-3 text-gray-700">
                                    <Check className="mt-1 h-4 w-4 shrink-0 text-primary" />
                                    <span className="card-copy text-gray-700">{point}</span>
                                </div>
                            ))}
                        </div>

                        <p className="mt-8 text-sm text-gray-500">We typically respond within 1–2 business days.</p>
                    </Reveal>

                    <Reveal delay={0.08} className="warm-panel lg:self-start p-5 sm:p-8" id="demo-form">
                        <div className="max-w-lg">
                            <div className="site-kicker">Request</div>
                            <h2 className="section-title mt-5 text-[2rem] md:text-[2.35rem]">
                                Share the workflow you want to walk through.
                            </h2>
                            <p className="card-copy mt-4">
                                A focused request helps us make the demo specific and useful.
                            </p>
                        </div>

                        <form
                            name="bookdemo"
                            method="POST"
                            data-netlify="true"
                            netlify-honeypot="bot-field"
                            action="/"
                            className="mt-8 space-y-6"
                        >
                            <input type="hidden" name="form-name" value="bookdemo" />
                            <input type="hidden" name="bot-field" />

                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                <div>
                                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">
                                        Name <span className="text-primary">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        required
                                        placeholder="Jane Doe"
                                        className="block w-full rounded-2xl border border-stone-300 bg-stone-50 px-4 py-3 text-gray-900 outline-none transition focus:border-primary focus:bg-white"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
                                        Work Email <span className="text-primary">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        required
                                        placeholder="jane@company.com"
                                        className="block w-full rounded-2xl border border-stone-300 bg-stone-50 px-4 py-3 text-gray-900 outline-none transition focus:border-primary focus:bg-white"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                <div>
                                    <label htmlFor="company" className="mb-2 block text-sm font-medium text-gray-700">
                                        Company
                                    </label>
                                    <input
                                        type="text"
                                        name="company"
                                        id="company"
                                        className="block w-full rounded-2xl border border-stone-300 bg-stone-50 px-4 py-3 text-gray-900 outline-none transition focus:border-primary focus:bg-white"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="role" className="mb-2 block text-sm font-medium text-gray-700">
                                        Role
                                    </label>
                                    <input
                                        type="text"
                                        name="role"
                                        id="role"
                                        className="block w-full rounded-2xl border border-stone-300 bg-stone-50 px-4 py-3 text-gray-900 outline-none transition focus:border-primary focus:bg-white"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="cad-tools" className="mb-2 block text-sm font-medium text-gray-700">
                                    CAD Tools Used
                                </label>
                                <input
                                    type="text"
                                    name="cad-tools"
                                    id="cad-tools"
                                    placeholder="e.g. NX, SolidWorks, CATIA V5"
                                    className="block w-full rounded-2xl border border-stone-300 bg-stone-50 px-4 py-3 text-gray-900 outline-none transition focus:border-primary focus:bg-white"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700">
                                    What should we focus on?
                                </label>
                                <textarea
                                    name="message"
                                    id="message"
                                    rows={5}
                                    placeholder="Describe the workflow, release step, or review bottleneck you want to explore."
                                    className="block w-full rounded-[1.5rem] border border-stone-300 bg-stone-50 px-4 py-3 text-gray-900 outline-none transition focus:border-primary focus:bg-white"
                                />
                            </div>

                            <button type="submit" className="btn-primary w-full">
                                Request Demo
                            </button>
                        </form>
                    </Reveal>
                </div>
            </Section>

            <Section className="pb-16 pt-24 md:pb-24 md:pt-28">
                <div className="grid gap-12 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.45fr)] lg:items-start lg:gap-16 xl:gap-20">
                    <Reveal className="lg:self-start">
                        <div className="site-kicker">Strong fit</div>
                        <h2 className="section-title mt-5 text-balance">
                            RapidDraft is strongest where drawings still carry the workflow.
                        </h2>
                        <p className="section-copy mt-5 max-w-2xl">
                            The best first deployment starts in teams where drawing release, review, or supplier documentation still creates visible friction.
                        </p>

                        <div className="mt-8 divide-y divide-stone-200/80 rounded-[2rem] border border-stone-200/90 bg-white shadow-[0_20px_50px_-38px_rgba(17,24,39,0.14)]">
                            {bestFit.map((item) => (
                                <div key={item} className="flex items-start gap-4 px-5 py-5 sm:px-6">
                                    <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-50">
                                        <Check className="h-4 w-4 text-primary" />
                                    </div>
                                    <p className="card-copy text-gray-700">{item}</p>
                                </div>
                            ))}
                        </div>
                    </Reveal>

                    <Reveal delay={0.08} className="lg:self-start">
                        <div className="rounded-[2.25rem] border border-stone-900/80 bg-[#151b29] p-7 text-white shadow-[0_32px_100px_-44px_rgba(17,24,39,0.75)] sm:p-8 lg:min-h-[100%]">
                            <div className="site-kicker border-orange-200/20 bg-white/5 text-orange-200 shadow-none">
                                Suggested pilot shape
                            </div>
                            <h3 className="mt-5 text-[2rem] font-semibold tracking-tight text-white">
                                Keep the first rollout narrow and measurable.
                            </h3>
                            <p className="mt-4 text-base leading-8 text-gray-300">
                                Start where review friction is already obvious. Prove value in one workflow, then expand deliberately.
                            </p>

                            <div className="mt-8 space-y-4">
                                {pilotSteps.map((item, index) => (
                                    <div key={item} className="flex items-start gap-4 rounded-[1.5rem] border border-white/10 bg-white/5 px-4 py-4">
                                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-500/20 text-sm font-bold text-orange-200">
                                            {index + 1}
                                        </div>
                                        <p className="text-sm leading-7 text-gray-200">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Reveal>
                </div>
            </Section>
        </>
    );
}
