import clsx from 'clsx';
import { ArrowRight, Box, Battery, Truck, RefreshCw, FileWarning } from 'lucide-react';
import { Link } from 'react-router-dom';
import Section from '../components/Section';

export default function UseCases() {
    const cases = [
        {
            title: "New Product Development",
            icon: Box,
            description: "Drawings often lag behind 3D models, causing gate reviews to slip. RapidDraft ensures your documentation evolves continuously with the design.",
            bullets: [
                "Continuous drawing generation as designs evolve.",
                "Built-in DFM checks early in the cycle.",
                "Review status visibility for program leads."
            ],
            color: "bg-blue-100 text-blue-600",
            image: "/media/usecase-new-product-development.jpg"
        },
        {
            title: "Battery Packs & Structural Components",
            icon: Battery,
            description: "Complex weldments and safety-critical features require strict tolerance management. We specialize in high-complexity structural workflows.",
            bullets: [
                "Detects critical structural features automatically.",
                "Highlights DFM risks for machining and welding.",
                "Ensures consistent GD&T across similar components."
            ],
            color: "bg-green-100 text-green-600",
            image: "/media/usecase-battery-structural.png"
        },
        {
            title: "Supplier Drawing Packages",
            icon: Truck,
            description: "Sending consistency-checked packages reduces back-and-forth loops with suppliers and avoids manufacturing delays.",
            bullets: [
                "Generate standardized drawing templates and notes.",
                "Check for missing information before release.",
                "Provide review-ready PDFs or CAD-native drawings."
            ],
            color: "bg-orange-100 text-orange-600",
            image: "/media/usecase-supplier-packages.png"
        },
        {
            title: "Change-driven Updates (ECR/ECO)",
            icon: RefreshCw,
            description: "Geometry changes often leave drawings broken. RapidDraft identifies impacted views and helps engineers validate updates quickly.",
            bullets: [
                "Identifies affected views, dimensions, and notes.",
                "Suggests updated dimensioning where geometry shifted.",
                "Helps engineers validate everything before sign-off."
            ],
            color: "bg-purple-100 text-purple-600",
            image: "/media/usecase-change-driven.png"
        },
        {
            title: "Legacy Drawing Cleanup",
            icon: FileWarning,
            description: "Modernize old drawing archives that don't match current standards, reducing confusion for manufacturing.",
            bullets: [
                "Scan for outdated tolerances and missing GD&T.",
                "Suggest clean-up list and priority.",
                "Support migrations to company-standard templates."
            ],
            color: "bg-gray-100 text-gray-600",
            image: "/media/usecase-legacy-cleanup.png"
        }
    ];

    return (
        <>
            <Section className="bg-gray-50 pt-16 pb-12">
                <div className="max-w-3xl">
                    <h1 className="text-4xl font-bold text-gray-900 leading-tight">
                        Where RapidDraft fits in your <span className="text-primary">engineering workflow</span>.
                    </h1>
                    <p className="mt-6 text-xl text-gray-600">
                        From new product introduction to sustaining engineering, RapidDraft eliminates the manual bottlenecks in creating and reviewing technical drawings.
                    </p>
                </div>
            </Section>

            <Section>
                <div className="space-y-24">
                    {cases.map((item, idx) => (
                        <div key={idx} className={clsx("flex flex-col gap-12 items-center", idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row')}>
                            <div className="flex-1 space-y-6">
                                <div className={clsx("w-14 h-14 rounded-2xl flex items-center justify-center mb-6", item.color)}>
                                    <item.icon className="w-7 h-7" />
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900">{item.title}</h2>
                                <p className="text-lg text-gray-600 leading-relaxed">{item.description}</p>
                                <ul className="space-y-3 mt-4">
                                    {item.bullets.map((bullet, bIdx) => (
                                        <li key={bIdx} className="flex items-start gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                                            <span className="text-gray-700 font-medium">{bullet}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Illustration / Image */}
                            <div className="flex-1 w-full">
                                <div className="aspect-[4/3] bg-white rounded-2xl border border-gray-100 shadow-xl overflow-hidden relative p-6 flex items-center justify-center">
                                    {item.image ? (
                                        <img
                                            src={item.image}
                                            alt={`${item.title} illustration`}
                                            className="w-full h-full object-contain max-h-full"
                                        />
                                    ) : (
                                        <>
                                            <div className="absolute inset-0 bg-gray-50 pattern-grid-lg opacity-20"></div>
                                            <div className="relative text-center">
                                                <div className={clsx("inline-flex p-6 rounded-full bg-opacity-20 mb-4", item.color)}>
                                                    <item.icon className="w-16 h-16 opacity-80" />
                                                </div>
                                                <div className="text-sm font-bold text-gray-400 uppercase tracking-widest">Workflow Step {idx + 1}</div>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            <section className="bg-gray-900 py-16 mt-12">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">Not sure if your workflow fits?</h2>
                    <Link
                        to="/book-demo"
                        className="inline-flex justify-center items-center px-8 py-3.5 border border-transparent text-lg font-medium rounded-full text-white bg-primary hover:bg-primary-hover shadow-lg transition-transform hover:scale-105"
                    >
                        Talk to us
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                </div>
            </section>
        </>
    );
}
