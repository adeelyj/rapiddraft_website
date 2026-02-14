import { Link } from 'react-router-dom';
import { ArrowRight, Check, AlertTriangle, FileText, Layers, Zap, Search } from 'lucide-react';
import Section from '../components/Section';

export default function Product() {
    return (
        <>
            {/* HERO SECTION */}
            <Section className="pt-20 pb-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
                            Manufacturing-ready drawings and design reviews — <span className="text-primary">automated.</span>
                        </h1>
                        <p className="mt-6 text-xl text-gray-600 leading-relaxed">
                            RapidDraft connects directly to NX, SolidWorks, and CATIA to generate compliant drawings, flag manufacturing risks, and streamline engineering reviews.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row gap-4">
                            <Link
                                to="/book-demo"
                                className="inline-flex justify-center items-center px-8 py-3.5 border border-transparent text-lg font-medium rounded-2xl text-white bg-primary hover:bg-primary-hover shadow-lg shadow-orange-500/20 transition-all"
                            >
                                Book a Demo
                            </Link>
                            <a
                                href="#how-it-works"
                                className="inline-flex justify-center items-center px-8 py-3.5 border border-gray-200 text-lg font-medium rounded-2xl text-gray-700 bg-white hover:bg-gray-50 hover:border-gray-300 transition-all"
                            >
                                See How It Works
                            </a>
                        </div>
                        <p className="mt-6 text-sm text-gray-500 font-medium">
                            Trusted by OEMs, Tier-1 suppliers, and high-mix manufacturers.
                        </p>
                    </div>

                    {/* Hero Mockup */}
                    <div className="relative">
                        <div className="absolute -inset-4 bg-orange-100 rounded-[2.5rem] transform rotate-2 opacity-50 blur-xl"></div>
                        <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-100 p-6 overflow-hidden">
                            {/* Faint Grid Background */}
                            <div className="absolute inset-0 opacity-[0.03]"
                                style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
                            </div>

                            {/* Mock Drawing Interface */}
                            <div className="relative z-10">
                                <div className="flex justify-between items-center mb-6 border-b border-gray-100 pb-4">
                                    <div className="flex space-x-2">
                                        <div className="h-3 w-3 rounded-full bg-red-400"></div>
                                        <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                                        <div className="h-3 w-3 rounded-full bg-green-400"></div>
                                    </div>
                                    <div className="text-xs font-mono text-gray-400">PART-104-REV-C.prt</div>
                                </div>

                                <div className="flex gap-6">
                                    {/* Main View */}
                                    <div className="flex-grow aspect-video bg-gray-50 rounded-xl border border-gray-200 relative p-4 flex items-center justify-center">
                                        {/* Abstract Part SVG */}
                                        <svg viewBox="0 0 200 120" className="w-full h-full drop-shadow-sm">
                                            <path d="M40,30 L160,30 L160,90 L40,90 Z" fill="white" stroke="#374151" strokeWidth="2" />
                                            <circle cx="70" cy="60" r="10" fill="white" stroke="#374151" strokeWidth="2" />
                                            <rect x="110" y="50" width="30" height="20" fill="white" stroke="#374151" strokeWidth="2" />

                                            {/* Dimensions */}
                                            <line x1="40" y1="20" x2="160" y2="20" stroke="#9CA3AF" strokeWidth="1" markerEnd="url(#arrow)" markerStart="url(#arrow)" />
                                            <text x="100" y="15" fontSize="8" fill="#4B5563" textAnchor="middle">120.00 ±0.1</text>

                                            {/* DFM Alert */}
                                            <g transform="translate(150, 20)">
                                                <circle cx="0" cy="0" r="8" fill="#FEF3C7" stroke="#F59E0B" />
                                                <text x="0" y="3" fontSize="10" textAnchor="middle" fill="#B45309">!</text>
                                            </g>
                                        </svg>

                                        {/* Floating DFM Card */}
                                        <div className="absolute -right-4 top-10 bg-white p-3 rounded-xl shadow-xl border border-orange-100 w-48 animate-pulse-slow">
                                            <div className="flex items-start gap-3">
                                                <AlertTriangle className="w-5 h-5 text-orange-500 shrink-0" />
                                                <div>
                                                    <p className="text-xs font-bold text-gray-900">Thin Wall Detected</p>
                                                    <p className="text-[10px] text-gray-500 mt-1">Wall thickness 0.8mm &lt; Min 1.2mm for generic alum milling.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Sidebar */}
                                    <div className="w-24 flex flex-col gap-3">
                                        <div className="h-8 bg-gray-100 rounded-lg w-full"></div>
                                        <div className="h-8 bg-gray-100 rounded-lg w-full"></div>
                                        <div className="h-8 bg-gray-100 rounded-lg w-full"></div>
                                        <div className="mt-auto h-20 bg-orange-50 rounded-lg w-full border border-orange-100 flex flex-col items-center justify-center p-2 text-center">
                                            <span className="text-xs font-bold text-primary">Score</span>
                                            <span className="text-2xl font-bold text-gray-900">85%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* INTEGRATIONS SECTION */}
            <Section background="light" id="how-it-works">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-gray-900">CAD integrations</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        RapidDraft plugs directly into your existing CAD ecosystem. No new modeling tools to learn, no model duplication.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { name: "NX", desc: "Native integration with Siemens NX via Check-Mate automation." },
                        { name: "SolidWorks", desc: "Add-in for seamless drawing validation inside PDM workflows." },
                        { name: "CATIA", desc: "Direct manufacturing analysis for V5/3DEXPERIENCE parts." }
                    ].map((tool) => (
                        <div key={tool.name} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                            <div className="h-10 w-fit px-4 flex items-center justify-center bg-gray-900 text-white font-bold rounded-lg mb-6">
                                {tool.name}
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                {tool.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* DFM ENGINE */}
            <Section>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-orange-700 text-sm font-semibold mb-6">
                            <Search className="w-4 h-4" /> DFM Analysis
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Design-for-Manufacturing,<br />built into your drawings.
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Reviews shouldn't happen after the drawing is done. RapidDraft analyzes geometry and annotations in real-time to highlight risks before you release.
                        </p>

                        <ul className="space-y-4">
                            {[
                                "Detects thin walls, deep pockets, and un-machinable features.",
                                "Flags tight tolerance stacks driving unnecessary costs.",
                                "Highlights missing datums or ambiguous GD&T.",
                                "Standardizes notes across all program drawings."
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <div className="mt-1 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                                        <Check className="w-3 h-3 text-green-600" />
                                    </div>
                                    <span className="text-gray-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-4">
                        {/* DFM Card Mockups */}
                        {[
                            { title: "Deep Pocket Detected", type: "error", msg: "L/D ratio > 10. Recommend split." },
                            { title: "Missing Datum Reference", type: "warning", msg: "Feature control frame missing datum A." },
                            { title: "Non-standard Tolerance", type: "info", msg: "Converted +/- 0.005 to standard +/- 0.010." }
                        ].map((card, idx) => (
                            <div key={idx} className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex gap-4 items-start">
                                <div className={`p-2 rounded-lg shrink-0 ${card.type === 'error' ? 'bg-red-50 text-red-600' : card.type === 'warning' ? 'bg-yellow-50 text-yellow-600' : 'bg-blue-50 text-blue-600'}`}>
                                    <Layers className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">{card.title}</h4>
                                    <p className="text-sm text-gray-500 mt-1">{card.msg}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* STRUCTURED REVIEWS */}
            <Section background="light">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900">Structured engineering reviews without extra meetings.</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        Stop emailing PDFs. Manage drawing lifecycle statuses directly in a centralized dashboard.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {[
                        { title: "Automated Checks", text: "100+ rules run automatically on every save.", icon: Zap },
                        { title: "Review Board", text: "Track 'In Progress', 'For Review', and 'Released'.", icon: FileText },
                        { title: "Version Control", text: "Syncs with your PDM to keep revisions clear.", icon: Layers }
                    ].map((feat, i) => (
                        <div key={i} className="bg-white p-6 rounded-2xl border border-gray-200">
                            <feat.icon className="w-8 h-8 text-primary mb-4" />
                            <h3 className="text-xl font-bold text-gray-900">{feat.title}</h3>
                            <p className="mt-2 text-gray-600">{feat.text}</p>
                        </div>
                    ))}
                </div>

                {/* Status Board Mockup */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 overflow-x-auto">
                    <div className="flex gap-6 min-w-max">
                        {/* Column 1 */}
                        <div className="w-64 bg-gray-50 rounded-xl p-4">
                            <div className="flex justify-between items-center mb-4">
                                <span className="font-bold text-gray-700 text-sm">Open Issues</span>
                                <span className="bg-gray-200 text-gray-600 text-xs py-0.5 px-2 rounded-full">3</span>
                            </div>
                            <div className="space-y-3">
                                <div className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm text-sm">
                                    <div className="font-medium text-gray-900">Bracket-Upper.prt</div>
                                    <div className="text-xs text-red-500 mt-1">2 Critical Errors</div>
                                </div>
                                <div className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm text-sm">
                                    <div className="font-medium text-gray-900">Housing-Main.asm</div>
                                    <div className="text-xs text-orange-500 mt-1">GD&T Review</div>
                                </div>
                            </div>
                        </div>
                        {/* Column 2 */}
                        <div className="w-64 bg-gray-50 rounded-xl p-4">
                            <div className="flex justify-between items-center mb-4">
                                <span className="font-bold text-gray-700 text-sm">Ready for Check</span>
                                <span className="bg-gray-200 text-gray-600 text-xs py-0.5 px-2 rounded-full">1</span>
                            </div>
                            <div className="space-y-3">
                                <div className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm text-sm">
                                    <div className="font-medium text-gray-900">Shaft-Drive.prt</div>
                                    <div className="text-xs text-blue-500 mt-1">Awaiting Lead</div>
                                </div>
                            </div>
                        </div>
                        {/* Column 3 */}
                        <div className="w-64 bg-gray-50 rounded-xl p-4">
                            <div className="flex justify-between items-center mb-4">
                                <span className="font-bold text-gray-700 text-sm">Released</span>
                                <span className="bg-green-100 text-green-700 text-xs py-0.5 px-2 rounded-full">84</span>
                            </div>
                            <div className="space-y-3 opacity-75">
                                <div className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm text-sm">
                                    <div className="font-medium text-gray-900">Mount-Plate.prt</div>
                                    <div className="text-xs text-gray-500 mt-1">Rev B • Yesterday</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* BENEFITS SUMMARY */}
            <Section>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-100">
                    <div className="px-4 py-4">
                        <div className="text-4xl font-bold text-primary mb-2">30%</div>
                        <h3 className="text-lg font-bold text-gray-900">Fewer Change Cycles</h3>
                        <p className="text-gray-500 text-sm mt-2">Catch errors before tooling release.</p>
                    </div>
                    <div className="px-4 py-4">
                        <div className="text-4xl font-bold text-primary mb-2">10x</div>
                        <h3 className="text-lg font-bold text-gray-900">Faster Feedback</h3>
                        <p className="text-gray-500 text-sm mt-2">Instant DFM checks on save.</p>
                    </div>
                    <div className="px-4 py-4">
                        <div className="text-4xl font-bold text-primary mb-2">50%</div>
                        <h3 className="text-lg font-bold text-gray-900">Less Checking Time</h3>
                        <p className="text-gray-500 text-sm mt-2">Automate the boring standards validation.</p>
                    </div>
                </div>
            </Section>

            {/* BOTTOM CTA */}
            <section className="bg-gray-900 py-16">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">See how RapidDraft handles your parts.</h2>
                    <Link
                        to="/book-demo"
                        className="inline-flex justify-center items-center px-8 py-3.5 border border-transparent text-lg font-medium rounded-full text-white bg-primary hover:bg-primary-hover shadow-lg transition-transform hover:scale-105"
                    >
                        Book a Demo
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                </div>
            </section>
        </>
    );
}
