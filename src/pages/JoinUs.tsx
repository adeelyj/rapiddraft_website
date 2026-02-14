import { ArrowRight, Check, Rocket, Heart, Brain } from 'lucide-react';
import Section from '../components/Section';

export default function JoinUs() {
    return (
        <>
            <Section className="bg-gray-50 pt-20 pb-16">
                <div className="max-w-3xl">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                        Join RapidDraft.
                    </h1>
                    <p className="text-xl text-gray-600 mb-4">
                        Help us build the next generation of engineering tools for designers and manufacturers.
                    </p>
                </div>
            </Section>

            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            Engineering drawings are the "contract" between design and manufacturing, but the process of creating and reviewing them is stuck in the 1990s.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            RapidDraft combines CAD kernels with modern AI to automate the boring parts of documentation—dimensioning, standard checks, and DFM reviews—so engineers can focus on designing better products, from electric vehicles to aerospace components.
                        </p>
                        <p className="text-lg font-bold text-gray-900">
                            We are removing the single biggest bottleneck in hardware development.
                        </p>
                    </div>

                    <div className="bg-gray-900 rounded-3xl p-8 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                        <h3 className="text-xl font-bold mb-6">Why Join Us?</h3>
                        <ul className="space-y-4">
                            {[
                                { text: "High Impact: Direct influence on product direction.", icon: Rocket },
                                { text: "Deep Tech: Work with CAD kernels and Geometry AI.", icon: Brain },
                                { text: "Ownership: Concept to deployment responsibility.", icon: Check },
                                { text: "Culture: Low ego, high trust, flat hierarchy.", icon: Heart }
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <div className="p-2 bg-white/10 rounded-lg shrink-0">
                                        <item.icon className="w-5 h-5 text-primary" />
                                    </div>
                                    <span className="text-gray-200">{item.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Section>

            <Section background="light">
                <h2 className="text-3xl font-bold text-gray-900 mb-12">Open Roles</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        {
                            role: "Full Stack Web Developer",
                            focus: "Full-stack",
                            desc: "Build and scale the user-facing platform that turns complex CAD intelligence into fast, intuitive, and reliable engineering workflows.",
                            stack: ["Node.js/Python", "React", "CAD API exp", "Cloud (AWS/GCP)", "Git"]
                        },
                        {
                            role: "AI & ML Expert",
                            focus: "ML / Comp. Geom",
                            desc: "Build intelligent systems that understand 3D geometry and drawings to automate DFM checks, feature recognition, and engineering decisions.",
                            stack: ["Python", "PyTorch", "OpenCascade", "Graph Algorithms", "3D Vision"]
                        },
                        {
                            role: "CAD Automation Engineer",
                            focus: "Mechanical Background",
                            desc: "Develop the core CAD automation logic that extracts geometry, relationships, and engineering intent from NX/SolidWorks/CATIA models.",
                            stack: ["GD&T Logic", "NX/SolidWorks", "Geometry Processing"]
                        }
                    ].map((job, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-primary/50 transition-colors group cursor-pointer flex flex-col h-full">
                            <div className="mb-4">
                                <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">{job.role}</h3>
                                <div className="text-sm font-medium text-gray-500 mt-1">{job.focus}</div>
                            </div>
                            <p className="text-gray-600 text-sm mb-6 flex-grow">{job.desc}</p>
                            <div className="flex flex-wrap gap-2 mt-auto">
                                {job.stack.map(tech => (
                                    <span key={tech} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md font-medium">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            <Section className="py-20 text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Interested?</h2>
                <p className="text-gray-600 mb-8">Send us a short note about what you've built and where you want to go next.</p>

                <div className="max-w-lg mx-auto bg-white p-8 rounded-3xl shadow-lg border border-gray-100 text-left">
                    <form name="job-application" method="POST" data-netlify="true" netlify-honeypot="bot-field" action="/" className="space-y-4">
                        <input type="hidden" name="form-name" value="job-application" />
                        <input type="hidden" name="bot-field" />
                        <div>
                            <label htmlFor="job-name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                            <input type="text" name="name" id="job-name" required className="block w-full rounded-lg border-gray-300 py-2 border px-3" />
                        </div>
                        <div>
                            <label htmlFor="job-email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input type="email" name="email" id="job-email" required className="block w-full rounded-lg border-gray-300 py-2 border px-3" />
                        </div>
                        <div>
                            <label htmlFor="job-msg" className="block text-sm font-medium text-gray-700 mb-1">Motivation / Links</label>
                            <textarea name="message" id="job-msg" rows={3} className="block w-full rounded-lg border-gray-300 py-2 border px-3"></textarea>
                        </div>
                        <button type="submit" className="w-full bg-gray-900 text-white font-bold py-3 rounded-xl hover:bg-black transition-colors flex justify-center items-center">
                            Apply Now <ArrowRight className="ml-2 w-4 h-4" />
                        </button>
                    </form>
                </div>
            </Section>
        </>
    );
}
