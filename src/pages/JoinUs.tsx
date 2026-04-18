import { ArrowRight, Brain, Check, Heart, Rocket } from 'lucide-react';
import PageMeta from '../components/PageMeta';
import Section from '../components/Section';
import Reveal from '../components/home/Reveal';

const reasons = [
    { text: 'High impact on product direction and the workflows we choose to solve first.', icon: Rocket },
    { text: 'Deep technical problems spanning CAD, geometry, AI systems, and product design.', icon: Brain },
    { text: 'Ownership from concept to delivery in a small, execution-focused team.', icon: Check },
    { text: 'Low ego, high trust, and a preference for practical engineering over theater.', icon: Heart },
];

const roles = [
    {
        role: 'Full Stack Web Developer',
        focus: 'Full-stack',
        desc: 'Build the user-facing product surfaces that turn complex CAD intelligence into clear, fast engineering workflows.',
        stack: ['React', 'Node.js / Python', 'Cloud platforms', 'Strong product sense'],
    },
    {
        role: 'AI & ML Expert',
        focus: 'ML / Computational Geometry',
        desc: 'Develop systems that understand 3D geometry and drawings well enough to support DFM checks, feature recognition, and engineering review workflows.',
        stack: ['Python', 'PyTorch', '3D vision', 'Geometry processing'],
    },
    {
        role: 'CAD Automation Engineer',
        focus: 'Mechanical / CAD',
        desc: 'Work on the logic that extracts geometry, relationships, and release-relevant context from NX, SolidWorks, and CATIA environments.',
        stack: ['CAD APIs', 'GD&T logic', 'Geometry kernels', 'Mechanical design'],
    },
];

export default function JoinUs() {
    return (
        <>
            <PageMeta
                title="Join RapidDraft | Engineering and product roles"
                description="Explore open roles at RapidDraft across product engineering, AI, and CAD automation."
                path="/join-us"
            />

            <section className="hero-mesh relative overflow-hidden border-b border-stone-200/70 py-16 md:py-24">
                <div className="mx-auto grid max-w-[1180px] gap-10 px-5 sm:px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start lg:px-8 xl:px-10">
                    <Reveal className="max-w-xl">
                        <div className="site-kicker">Join RapidDraft</div>
                        <h1 className="hero-title mt-6 md:text-[4rem] lg:text-6xl">
                            Help build better tools for how engineering release actually works.
                        </h1>
                        <p className="hero-copy mt-6">
                            We are interested in people who want to work on the practical edge of CAD, AI, manufacturing context, and product design rather than shipping generic automation.
                        </p>
                    </Reveal>

                    <Reveal delay={0.08} className="warm-panel p-6 sm:p-8 shadow-[0_30px_90px_-42px_rgba(17,24,39,0.18)]">
                        <div className="card-index">
                            Team environment
                        </div>
                        <h2 className="card-title md:text-[1.9rem]">Why join?</h2>
                        <p className="card-copy mt-4">
                            Work close to the product, close to customers, and close to the engineering workflows that still need better software.
                        </p>
                        <div className="mt-8 space-y-5">
                            {reasons.map((item) => (
                                <div key={item.text} className="flex items-start gap-4">
                                    <div className="rounded-2xl bg-orange-50 p-2.5">
                                        <item.icon className="h-5 w-5 text-primary" />
                                    </div>
                                    <p className="text-sm leading-6 text-gray-700">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </Reveal>
                </div>
            </section>

            <Section className="pb-14 pt-14 md:pb-20 md:pt-20">
                <Reveal className="max-w-3xl">
                    <div className="site-kicker">Open Roles</div>
                    <h2 className="section-title mt-5">Work that spans software, geometry, and engineering judgment.</h2>
                    <p className="section-copy mt-5">
                        Each role is designed around product ownership and technical depth, not narrow execution against a fixed backlog.
                    </p>
                </Reveal>

                <div className="mt-12 space-y-6">
                    {roles.map((job, index) => (
                        <Reveal key={job.role} delay={index * 0.05}>
                            <div className="surface-card grid gap-5 p-5 sm:p-6 md:grid-cols-[220px_minmax(0,1fr)]">
                            <div>
                                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">{job.focus}</div>
                                <h3 className="card-title mt-2 text-[1.4rem] md:text-2xl">{job.role}</h3>
                            </div>
                            <div>
                                <p className="card-copy">{job.desc}</p>
                                <div className="mt-5 flex flex-wrap gap-2">
                                    {job.stack.map((tech) => (
                                        <span key={tech} className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-xs font-medium text-gray-600">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </Section>

            <Section background="light" className="pb-14 pt-14 md:pb-20 md:pt-20">
                <Reveal className="mx-auto max-w-3xl text-center">
                    <div className="site-kicker">Apply</div>
                    <h2 className="section-title mt-5">Send a short note about what you have built.</h2>
                    <p className="section-copy mt-5">
                        We care more about good judgment, execution quality, and technical depth than a polished application packet.
                    </p>
                </Reveal>

                <Reveal className="warm-panel mx-auto mt-10 max-w-2xl p-5 sm:mt-12 sm:p-8">
                    <form name="job-application" method="POST" data-netlify="true" netlify-honeypot="bot-field" action="/" className="space-y-5">
                        <input type="hidden" name="form-name" value="job-application" />
                        <input type="hidden" name="bot-field" />
                        <div>
                            <label htmlFor="job-name" className="form-label">Name</label>
                            <input type="text" name="name" id="job-name" required className="form-input" />
                        </div>
                        <div>
                            <label htmlFor="job-email" className="form-label">Email</label>
                            <input type="email" name="email" id="job-email" required className="form-input" />
                        </div>
                        <div>
                            <label htmlFor="job-msg" className="form-label">Motivation / Links</label>
                            <textarea name="message" id="job-msg" rows={4} className="form-textarea" />
                        </div>
                        <button type="submit" className="btn-primary w-full">
                            Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                        </button>
                    </form>
                </Reveal>
            </Section>
        </>
    );
}
