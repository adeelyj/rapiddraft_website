import { Link } from 'react-router-dom';
import { Linkedin } from 'lucide-react';
import Section from '../components/Section';

export default function Team() {
    const leadershipTeam = [
        {
            name: "Adeel Yawar Jamil",
            title: "Founder & Mechanical Engineering Lead",
            bio: "Adeel brings more than 15 years of experience in CAD, simulation, and technical documentation across aerospace, automotive, and process industries. Having repeatedly watched great designs stall in drawing and review chaos, he started RapidDraft to build the tooling he wished he'd had on every project.",
            image: "/media/adeel.jpg",
            linkedin: "https://www.linkedin.com/in/adeelyawarjamil/"
        },
        {
            name: "Dr. Hasan Raza",
            title: "Founder & Operations / Transformation Lead",
            bio: "Hasan is a senior leader with 15+ years' experience scaling engineering and manufacturing operations and delivering strong financial performance globally. He specializes in digital and organizational transformation, building high-performance teams, and aligning execution with strategic business goals, bringing the operational rigor RapidDraft needs to grow.",
            image: "/media/hasan.jpg",
            linkedin: "https://www.linkedin.com/in/shasanrr/"
        },
        {
            name: "Sreekar Reddy Sajjala",
            title: "Founder & AI Lead",
            bio: "Sreekar Reddy Sajjala is RapidDraft's Founder and AI Lead, bringing 3+ years of experience building production AI systems, data pipelines, and full-stack engineering tools deployed on Azure and GCP with measurable impact. With a strong background in FEM, CFD, topology optimization, and generative design across aerospace and energy, he bridges physics-informed modeling with data-driven AI. He brings the technical depth RapidDraft needs to deliver reliable, engineering-grade automation.",
            image: "/media/sreekar.jpg",
            linkedin: ""
        }
    ];

    const engineeringAdvisory = [
        {
            name: "Shehjar Kaul",
            role: "Machine Learning and Business Expert, Siemens",
            image: "/media/shehjar.jpg",
            linkedin: "https://www.linkedin.com/in/shehjarkaul/"
        },
        {
            name: "Julio Saucedo",
            role: "Battery Design and Manufacturing Lead, Volocopter",
            image: "/media/julio.jpg",
            linkedin: "https://www.linkedin.com/in/julio-saucedo/"
        },
        {
            name: "Muneeb Ahmed",
            role: "Program Manager, Amazon",
            image: "/media/muneeb.jpg",
            linkedin: "https://www.linkedin.com/in/muneebdotahmed/"
        }
    ];

    const storyImage = "/media/story-engineers.png";

    return (
        <>
            <Section className="pt-0">
                <div className="text-center max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our mission</h2>
                    <p className="mt-4 text-lg text-gray-900">
                        To transform technical drawings and design reviews from a painful bottleneck into a reliable, intelligent partner for every engineering team.
                    </p>
                </div>
            </Section>

            <Section className="pt-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-gray-900">Our story</h2>
                        <p className="text-gray-900 leading-relaxed">
                            RapidDraft was born out of years spent in the trenches of mechanical design, simulation, and technical documentation. After working on aircraft and automotive battery packs, complex structures, and safety-critical components, we kept hitting the same wall: drawings and reviews were always the slowest, most painful part of getting real hardware out the door.
                        </p>
                        <p className="text-gray-900 leading-relaxed">
                            Instead of accepting drawings as an unavoidable bottleneck, we decided to treat them as a system problem. RapidDraft combines deep CAD and FEM experience with modern AI and automation to turn drawing creation, checking, and manufacturability reviews into a governed, repeatable workflow. Our goal is simple: give engineers back their time, reduce program risk, and make manufacturing teams trust the drawings they receive.
                        </p>
                    </div>
                    <div className="relative">
                        <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-gray-200 shadow-2xl">
                            <img src={storyImage} alt="RapidDraft workflow" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </Section>

            <Section className="pt-0">
                <div className="text-center max-w-4xl mx-auto mb-12">
                    <h2 className="text-3xl font-bold text-gray-900">Leadership team</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {leadershipTeam.map((leader) => (
                        <div
                            key={leader.name}
                            className="relative bg-white border border-gray-100 rounded-3xl p-8 shadow-xl shadow-gray-200/70"
                        >
                            {leader.linkedin && (
                                <a
                                    href={leader.linkedin}
                                    className="absolute top-4 right-4 inline-flex items-center justify-center w-9 h-9 rounded-full bg-primary/10 border border-orange-100 text-primary hover:bg-primary/20 transition-colors"
                                    aria-label={`LinkedIn profile of ${leader.name}`}
                                >
                                    <Linkedin className="w-4 h-4" />
                                </a>
                            )}
                            <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-100 mx-auto mb-6 border border-gray-200">
                                <img src={leader.image} alt={leader.name} className="w-full h-full object-cover" />
                            </div>
                            <h3 className="text-2xl font-bold text-center text-gray-900">{leader.name}</h3>
                            <div className="text-center text-primary font-medium mt-1 mb-4">{leader.title}</div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                                {leader.bio}
                            </p>
                        </div>
                    ))}
                </div>
            </Section>

            <Section className="pt-0">
                <div className="text-center max-w-4xl mx-auto mb-10">
                    <h2 className="text-3xl font-bold text-gray-900">Engineering & Advisory Team</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {engineeringAdvisory.map((member) => (
                        <div
                            key={member.name}
                            className="relative bg-white border border-gray-100 rounded-2xl p-6 shadow-xl shadow-gray-200/60 flex items-center gap-4"
                        >
                            <a
                                href={member.linkedin}
                                className="absolute top-4 right-4 inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 border border-orange-100 text-primary hover:bg-primary/20 transition-colors"
                                aria-label={`LinkedIn profile of ${member.name}`}
                            >
                                <Linkedin className="w-4 h-4" />
                            </a>
                            <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-100 border border-gray-200 shrink-0">
                                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <div className="font-bold text-gray-900">{member.name}</div>
                                <div className="text-sm text-gray-900">{member.role}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            <Section background="light" className="text-center py-16">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Want to build the future of engineering tooling with us?</h2>
                <Link
                    to="/join-us"
                    className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-primary hover:bg-primary-hover transition-colors"
                >
                    View Open Roles
                </Link>
            </Section>
        </>
    );
}
