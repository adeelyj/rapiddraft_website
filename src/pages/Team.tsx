import { ArrowRight, Linkedin } from 'lucide-react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PageMeta from '../components/PageMeta';
import Section from '../components/Section';
import Reveal from '../components/home/Reveal';

const leadershipTeam = [
    {
        name: 'Adeel Yawar Jamil',
        title: 'Founder & Mechanical Engineering Lead',
        bio: 'Adeel brings 15+ years across CAD, simulation, and technical documentation in aerospace, automotive, and process industries. RapidDraft grew from his repeated experience of good designs slowing down in drawing and review chaos.',
        image: '/media/adeel.jpg',
        linkedin: 'https://www.linkedin.com/in/adeelyawarjamil/',
    },
    {
        name: 'Dr. Hasan Raza',
        title: 'Founder & Operations Lead',
        bio: 'Hasan has spent 15+ years scaling engineering and manufacturing operations globally. He brings the operating discipline required to make RapidDraft useful inside real industrial release workflows.',
        image: '/media/hasan.jpg',
        linkedin: 'https://www.linkedin.com/in/shasanrr/',
    },
    {
        name: 'Sreekar Reddy Sajjala',
        title: 'Founder & AI Lead',
        bio: 'Sreekar builds production AI systems and engineering software with a background spanning FEM, CFD, topology optimization, and data-driven tooling. He connects engineering-grade reasoning with reliable software delivery.',
        image: '/media/sreekar.jpg',
        linkedin: 'https://www.linkedin.com/in/sreekar2858/',
    },
];

const advisors = [
    {
        name: 'Shehjar Kaul',
        role: 'Machine Learning and Business Expert, Siemens',
        image: '/media/shehjar.jpg',
        linkedin: 'https://www.linkedin.com/in/shehjarkaul/',
    },
    {
        name: 'Julio Saucedo',
        role: 'Battery Design and Manufacturing Lead, Volocopter',
        image: '/media/julio.jpg',
        linkedin: 'https://www.linkedin.com/in/julio-saucedo/',
    },
    {
        name: 'Muneeb Ahmed',
        role: 'Program Manager, Amazon',
        image: '/media/muneeb.jpg',
        linkedin: 'https://www.linkedin.com/in/muneebdotahmed/',
    },
];

const roles = [
    {
        category: 'Full-stack',
        title: 'Full Stack Web Developer',
        description:
            'Build and scale the user-facing platform that turns complex CAD intelligence into fast, intuitive, and reliable engineering workflows.',
        tags: ['Node.js/Python', 'React', 'CAD API exp', 'Cloud (AWS/GCP)', 'Git'],
    },
    {
        category: 'ML / Comp. Geom',
        title: 'AI & ML Expert',
        description:
            'Build intelligent systems that understand 3D geometry and drawings to automate DFM checks, feature recognition, and engineering decisions.',
        tags: ['Python', 'PyTorch', 'OpenCascade', 'Graph Algorithms', '3D Vision'],
    },
    {
        category: 'Mechanical Background',
        title: 'CAD Automation Engineer',
        description:
            'Develop the core CAD automation logic that extracts geometry, relationships, and engineering intent from NX/SolidWorks/CATIA models.',
        tags: ['GD&T Logic', 'NX/SolidWorks', 'Geometry Processing'],
    },
];

export default function Team() {
    const location = useLocation();

    useEffect(() => {
        if (!location.hash) return;

        const id = location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (!element) return;

        window.requestAnimationFrame(() => {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    }, [location.hash]);

    return (
        <>
            <PageMeta
                title="RapidDraft Team | Engineers building drawing intelligence"
                description="Meet the RapidDraft team, advisors, and open roles behind a more structured approach to drawing release and design review."
                path="/team"
            />

            <section className="hero-mesh relative overflow-hidden border-b border-stone-200/70 py-16 md:py-24">
                <div className="mx-auto max-w-[1180px] px-5 sm:px-6 lg:px-8 xl:px-10">
                    <Reveal className="mx-auto max-w-4xl text-center">
                        <h1 className="hero-title md:text-[4rem] lg:text-6xl">
                            Built by engineers who have felt the release bottleneck firsthand.
                        </h1>
                        <p className="hero-copy mx-auto mt-6 max-w-3xl">
                            RapidDraft exists because technical drawings and design reviews still slow down real hardware programs. We are building the software we wished existed: tooling that reduces repeated effort, tightens review cycles, and makes release workflows easier to govern.
                        </p>
                    </Reveal>
                </div>
            </section>

            <Section className="pb-14 pt-14 md:pb-16 md:pt-20">
                <Reveal className="mx-auto max-w-4xl text-center">
                    <div className="site-kicker">Where release workflows still break down</div>
                    <h2 className="section-title mt-5 text-balance">
                        Our mission is to turn engineering release workflows from manual bottlenecks into structured, reliable systems.
                    </h2>
                    <p className="section-copy mx-auto mt-5 max-w-3xl">
                        RapidDraft was shaped by experience across mechanical design, simulation, technical documentation, and industrial execution. We are building AI-powered tooling that reduces repeated drafting and review effort, improves consistency, and helps engineering teams move from design intent to release-ready output with greater speed and control.
                    </p>
                </Reveal>
            </Section>

            <Section background="light" className="pb-16 pt-16 md:pb-20 md:pt-20">
                <Reveal className="mx-auto max-w-3xl text-center">
                    <h2 className="section-title mt-1 text-balance">
                        Engineering depth, AI capability, and industrial execution in one founding team.
                    </h2>
                    <p className="section-copy mx-auto mt-5 max-w-3xl">
                        The founding team brings together the technical understanding to see where the bottleneck lives, the product capability to build around it, and the operational discipline to make it useful inside real programs.
                    </p>
                </Reveal>

                <div className="mx-auto mt-12 grid max-w-6xl gap-6 lg:grid-cols-3">
                    {leadershipTeam.map((leader, index) => (
                        <Reveal
                            key={leader.name}
                            delay={index * 0.05}
                            className="surface-card flex h-full flex-col p-6 sm:p-7"
                        >
                            <div className="flex items-start justify-end">
                                <a
                                    href={leader.linkedin}
                                    className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-stone-200 bg-white text-gray-700 transition hover:border-primary hover:text-primary"
                                    aria-label={`LinkedIn profile of ${leader.name}`}
                                >
                                    <Linkedin className="h-4 w-4" />
                                </a>
                            </div>
                            <div className="mt-3 overflow-hidden rounded-[2rem] border border-stone-200/80 bg-stone-100">
                                <div className="aspect-[4/4.6]">
                                    <img src={leader.image} alt={leader.name} className="h-full w-full object-cover" />
                                </div>
                            </div>
                            <div className="mt-6 flex flex-1 flex-col">
                                <h3 className="card-title text-[1.55rem] md:text-[1.75rem]">{leader.name}</h3>
                                <p className="mt-2 text-sm font-medium uppercase tracking-[0.16em] text-primary">
                                    {leader.title}
                                </p>
                                <p className="card-copy mt-5">{leader.bio}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </Section>

            <Section className="pb-16 pt-16 md:pb-20 md:pt-20">
                <Reveal className="mx-auto max-w-3xl text-center">
                    <div className="site-kicker">Shaped by real program experience</div>
                    <h2 className="section-title mt-5 text-balance">
                        An advisory network grounded in engineering reality.
                    </h2>
                    <p className="section-copy mx-auto mt-5 max-w-3xl">
                        RapidDraft is informed by operators and technical leaders who understand how engineering software needs to perform inside real industrial environments — not just in demos.
                    </p>
                </Reveal>

                <div className="mx-auto mt-12 grid max-w-6xl gap-5 md:grid-cols-3 md:items-stretch">
                    {advisors.map((member, index) => (
                        <Reveal key={member.name} delay={index * 0.05} className="h-full">
                            <div className="flex h-full rounded-[1.6rem] border border-stone-200/90 bg-white p-5 shadow-[0_18px_42px_-34px_rgba(17,24,39,0.16)] sm:p-6">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex min-w-0 items-center gap-4">
                                        <div className="h-16 w-16 shrink-0 overflow-hidden rounded-[1.35rem] border border-stone-200 bg-stone-100">
                                            <img src={member.image} alt={member.name} className="h-full w-full object-cover" />
                                        </div>
                                        <div className="min-w-0">
                                            <h3 className="text-lg font-semibold tracking-tight text-gray-950">{member.name}</h3>
                                            <p className="mt-1 text-sm leading-6 text-gray-600">{member.role}</p>
                                        </div>
                                    </div>
                                    <a
                                        href={member.linkedin}
                                        className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-stone-200 bg-white text-gray-700 transition hover:border-primary hover:text-primary"
                                        aria-label={`LinkedIn profile of ${member.name}`}
                                    >
                                        <Linkedin className="h-4 w-4" />
                                    </a>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </Section>

            <section className="border-y border-stone-200/70 bg-[#fff8f3] py-8 md:py-10">
                <div className="mx-auto max-w-[1180px] px-5 text-center sm:px-6 lg:px-8 xl:px-10">
                    <Reveal>
                        <p className="text-lg leading-8 text-gray-600 md:text-[1.35rem] md:leading-9">
                            If this is the kind of problem space you care about, we would love to build with you.
                        </p>
                    </Reveal>
                </div>
            </section>

            <section className="hero-mesh relative overflow-hidden py-16 md:py-24">
                <div className="mx-auto max-w-[1180px] px-5 sm:px-6 lg:px-8 xl:px-10">
                    <Reveal className="warm-panel mx-auto max-w-[980px] px-5 py-12 text-center sm:px-10 sm:py-14">
                        <h2 className="section-title text-balance">
                            Help build better tools for how engineering release actually works.
                        </h2>
                        <p className="section-copy mx-auto mt-5 max-w-3xl">
                            We are looking for people who want to work on hard, useful problems at the intersection of software, geometry, AI, and industrial execution. The work is practical, technically serious, and close to the workflows that still need better software.
                        </p>
                        <a href="#open-roles" className="btn-primary mt-8 w-full sm:w-auto">
                            See Open Roles
                        </a>
                    </Reveal>
                </div>
            </section>

            <Section id="open-roles" className="scroll-mt-24 pb-16 pt-16 md:pb-20 md:pt-20">
                <Reveal className="mx-auto max-w-3xl text-center">
                    <h2 className="section-title text-balance">
                        Work that spans software, geometry, and engineering judgment.
                    </h2>
                    <p className="section-copy mx-auto mt-5 max-w-3xl">
                        Each role is designed around product ownership and technical depth. You will work across disciplines and help shape how RapidDraft evolves.
                    </p>
                </Reveal>

                <div className="mx-auto mt-12 max-w-5xl space-y-6">
                    {roles.map((job, index) => (
                        <Reveal key={job.title} delay={index * 0.05}>
                            <div className="surface-card grid gap-5 p-5 sm:p-6 md:grid-cols-[220px_minmax(0,1fr)]">
                                <div>
                                    <div className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                                        {job.category}
                                    </div>
                                    <h3 className="card-title mt-2 text-[1.45rem] md:text-2xl">{job.title}</h3>
                                </div>
                                <div>
                                    <p className="card-copy">{job.description}</p>
                                    <div className="mt-5 flex flex-wrap gap-2">
                                        {job.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-xs font-medium text-gray-600"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </Section>

            <Section background="light" className="pb-16 pt-16 md:pb-24 md:pt-20">
                <Reveal className="mx-auto max-w-3xl text-center">
                    <h2 className="section-title text-balance">Send a short note about what you have built.</h2>
                    <p className="section-copy mx-auto mt-5 max-w-3xl">
                        We care more about good judgment, execution quality, and technical depth than a polished application package. Tell us what you have worked on, what you are proud of, and why this feels like the right problem for you.
                    </p>
                </Reveal>

                <Reveal className="warm-panel mx-auto mt-10 max-w-2xl p-5 sm:mt-12 sm:p-8">
                    <form name="job-application" method="POST" data-netlify="true" netlify-honeypot="bot-field" action="/" className="space-y-5">
                        <input type="hidden" name="form-name" value="job-application" />
                        <input type="hidden" name="bot-field" />
                        <div>
                            <label htmlFor="job-name" className="mb-2 block text-sm font-medium text-gray-700">Name</label>
                            <input type="text" name="name" id="job-name" required className="block w-full rounded-2xl border border-stone-300 bg-stone-50 px-4 py-3 text-gray-900 outline-none transition focus:border-primary focus:bg-white" />
                        </div>
                        <div>
                            <label htmlFor="job-email" className="mb-2 block text-sm font-medium text-gray-700">Email</label>
                            <input type="email" name="email" id="job-email" required className="block w-full rounded-2xl border border-stone-300 bg-stone-50 px-4 py-3 text-gray-900 outline-none transition focus:border-primary focus:bg-white" />
                        </div>
                        <div>
                            <label htmlFor="job-msg" className="mb-2 block text-sm font-medium text-gray-700">What have you built / Why RapidDraft?</label>
                            <textarea name="message" id="job-msg" rows={5} className="block w-full rounded-[1.5rem] border border-stone-300 bg-stone-50 px-4 py-3 text-gray-900 outline-none transition focus:border-primary focus:bg-white" />
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
