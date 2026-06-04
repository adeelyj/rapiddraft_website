import { Link } from 'react-router-dom';
import PageMeta from '../components/PageMeta';
import Section from '../components/Section';
import Reveal from '../components/home/Reveal';

const demoSteps = [
    {
        title: 'Quality Documents',
        body: ['Drawing to Inspection Report'],
    },
    {
        title: 'Design errors',
        body: ['Step file DFM review', 'Drawing issues'],
    },
    {
        title: 'Naming standardization',
        body: ['Solidworks file renamed'],
    },
    {
        title: 'Knowledge management',
        body: ['E-plan files query with AI agent'],
    },
    {
        title: 'Collaboration',
        body: ['Commenting', 'Shared environment between supplier/client'],
    },
];

const foundingTeam = [
    {
        name: 'Adeel Yawar Jamil',
        title: 'Founder & Mechanical Engineering Lead',
        bio: '15+ years across CAD, simulation, and technical documentation in aerospace, automotive, and process industries.',
        image: '/media/adeel.jpg',
    },
    {
        name: 'Dr. Hasan Raza',
        title: 'Founder & Operations Lead',
        bio: '15+ years scaling engineering and manufacturing operations, with focus on controlled deployment inside industrial workflows.',
        image: '/media/hasan.jpg',
    },
    {
        name: 'Sreekar Reddy Sajjala',
        title: 'Founder & AI Lead',
        bio: 'Builds production AI systems and engineering software across FEM, CFD, topology optimization, and data-driven tooling.',
        image: '/media/sreekar.jpg',
    },
];

const pilotPhases = [
    {
        title: 'Phase 1 — Feasibility',
        note: '',
        duration: '1 week',
        body: 'Visit Theegarten-Pactec and interview 2–3 engineers to map one release workflow, pain points, data boundaries, and success criteria.',
        deliverable: 'Deliverable: feasibility report, scope, security concept.',
    },
    {
        title: 'Phase 2 — Kick-off',
        note: '',
        duration: '1 week',
        body: 'Confirm scope, sample packages, access constraints, demo workflow, open questions, and team responsibilities.',
        deliverable: 'Deliverable: signed LOI, kick-off deck, roles, timeline.',
    },
    {
        title: 'Phase 3 — Review',
        note: '',
        duration: '2 weeks',
        body: 'Review implementation status with engineers and test whether findings are useful, traceable, and relevant to release decisions.',
        deliverable: 'Deliverable: value report, use cases, findings quality.',
    },
    {
        title: 'Phase 4 — Deployment',
        note: '(optional)',
        duration: 'optional',
        body: 'Move to production only if the value case, security requirements, and rollout approach are confirmed.',
        deliverable: 'Deliverable: deployment plan, training, support model.',
    },
];

function LocalAiDeploymentDiagram() {
    const MONO = "'IBM Plex Mono', monospace";
    const DISPLAY = "'Space Grotesk', 'Manrope', sans-serif";
    const C = {
        ink: '#111827',
        gray: '#6B7280',
        faint: '#9CA3AF',
        border: '#D1D5DB',
        borderSoft: '#E5E7EB',
        card: 'rgba(255,255,255,0.74)',
        orange: '#EA580C',
        orangeText: '#C2410C',
        orangeBorder: '#FDBA74',
        orangeFill: 'rgba(255,247,237,0.85)',
    };

    const zones = [
        { x: 46, n: '01', t: 'INPUT · DATA & HARDWARE' },
        { x: 416, n: '02', t: 'RAPIDDRAFT AGENT' },
        { x: 786, n: '03', t: 'ENGINEER & RELEASE' },
    ];

    const tools = [
        { label: 'BOM', x: 454, y: 238, w: 42 },
        { label: 'DFM', x: 502, y: 238, w: 42 },
        { label: 'Model / Canvas', x: 550, y: 238, w: 104 },
        { label: 'Knowledge', x: 454, y: 270, w: 78 },
        { label: 'Artifacts', x: 538, y: 270, w: 66 },
    ];

    return (
        <div
            className="relative mx-auto w-full max-w-[980px] lg:w-full lg:max-w-none"
            aria-label="Local-AI deployment architecture from Theegarten release package to engineer-approved CIM Database release"
        >
            <svg
                viewBox="0 0 1120 430"
                role="img"
                aria-label="Local-AI deployment architecture for RapidDraft at Theegarten-Pactec"
                className="block h-auto w-full overflow-visible"
            >
                <defs>
                    <radialGradient id="rd3-core-glow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#FB923C" stopOpacity="0.22" />
                        <stop offset="60%" stopColor="#FB923C" stopOpacity="0.06" />
                        <stop offset="100%" stopColor="#FB923C" stopOpacity="0" />
                    </radialGradient>
                    <linearGradient id="rd3-logo" x1="0" y1="0" x2="1" y2="1">
                        <stop stopColor="#F97316" />
                        <stop offset="1" stopColor="#C2410C" />
                    </linearGradient>
                    <filter id="rd3-soft" x="-40%" y="-40%" width="180%" height="180%">
                        <feDropShadow dx="0" dy="14" stdDeviation="18" floodColor="#111827" floodOpacity="0.08" />
                    </filter>
                    <filter id="rd3-orange-soft" x="-50%" y="-50%" width="200%" height="200%">
                        <feDropShadow dx="0" dy="16" stdDeviation="22" floodColor="#EA580C" floodOpacity="0.18" />
                    </filter>
                    <style>
                        {`
                            .rd3-flow-base {
                                stroke: rgba(75, 85, 99, 0.32);
                                stroke-width: 1.45;
                                stroke-linecap: round;
                                stroke-dasharray: 2 8;
                            }

                            .rd3-flow {
                                stroke: rgba(75, 85, 99, 0.5);
                                stroke-width: 1.6;
                                stroke-linecap: round;
                                stroke-dasharray: 2 11;
                                animation: rd3-dash 2.6s linear infinite;
                            }

                            .rd3-flow-d {
                                animation-delay: 0.9s;
                            }

                            @keyframes rd3-dash {
                                to {
                                    stroke-dashoffset: -84;
                                }
                            }

                            .rd3-pip {
                                animation: rd3-pip 2.8s ease-in-out infinite;
                            }

                            @keyframes rd3-pip {
                                0%, 100% { opacity: 0.5; }
                                50% { opacity: 1; }
                            }

                            @media (prefers-reduced-motion: reduce) {
                                .rd3-flow,
                                .rd3-pip {
                                    animation: none;
                                }
                            }
                        `}
                    </style>
                </defs>

                {/* core glow behind agent */}
                <ellipse cx="561" cy="220" rx="240" ry="180" fill="url(#rd3-core-glow)" />

                {/* zones */}
                {zones.map((z) => (
                    <g key={z.n}>
                        <rect x={z.x} y="58" width="290" height="360" rx="22" fill="rgba(255,255,255,0.42)" stroke={C.borderSoft} />
                        <text x={z.x + 6} y="46" fontFamily={MONO} fontSize="10.5" letterSpacing="2.4">
                            <tspan fill={C.ink} fontWeight="600">{z.n}</tspan>
                            <tspan fill={C.faint}>{'  ' + z.t}</tspan>
                        </text>
                    </g>
                ))}

                {/* col 1 — input */}
                <g filter="url(#rd3-soft)">
                    <rect x="62" y="92" width="258" height="92" rx="16" fill={C.card} stroke={C.border} strokeWidth="1.1" />
                </g>
                <text x="84" y="120" fontFamily={MONO} fontSize="9.5" letterSpacing="2.4" fill={C.faint}>THEEGARTEN-PACTEC DATA</text>
                <text x="84" y="146" fontFamily={DISPLAY} fontSize="17" fontWeight="600" fill={C.ink}>Release Package</text>
                <text x="84" y="168" fontFamily={MONO} fontSize="11" fill={C.gray}>CAD · Drawing · BOM · EPLAN</text>

                <g filter="url(#rd3-soft)">
                    <rect x="62" y="200" width="258" height="195" rx="16" fill={C.card} stroke={C.border} strokeWidth="1.1" />
                </g>
                <text x="84" y="224" fontFamily={MONO} fontSize="9.5" letterSpacing="2.4" fill={C.faint}>ON-PREM HARDWARE</text>
                <image href="/media/NVIDIA-DGX-SPARK.png" x="132" y="232" width="118" height="118" preserveAspectRatio="xMidYMid meet" />
                <text x="84" y="370" fontFamily={DISPLAY} fontSize="17" fontWeight="600" fill={C.ink}>NVIDIA DGX Spark</text>
                <text x="84" y="388" fontFamily={MONO} fontSize="11" fill={C.gray}>Runs on-site · company network</text>

                {/* col 2 — agent (orange core) */}
                <g filter="url(#rd3-orange-soft)">
                    <rect x="432" y="92" width="258" height="272" rx="18" fill={C.orangeFill} stroke={C.orangeBorder} strokeWidth="1.3" />
                </g>
                <g transform="translate(454,104)">
                    <rect width="26" height="26" rx="8" fill="url(#rd3-logo)" />
                    <rect x="7" y="8.4" width="12" height="2.6" rx="1.3" fill="#ffffff" opacity="0.95" />
                    <rect x="7" y="12.9" width="8.5" height="2.6" rx="1.3" fill="#ffffff" opacity="0.78" />
                    <rect x="7" y="17.4" width="12" height="2.6" rx="1.3" fill="#ffffff" opacity="0.95" />
                </g>
                <text x="490" y="122" fontFamily={MONO} fontSize="9.5" letterSpacing="2.2" fill={C.orangeText}>RAPIDDRAFT WORKSPACE</text>
                <text x="454" y="158" fontFamily={DISPLAY} fontSize="17" fontWeight="600" fill={C.ink}>Agent inside the product</text>
                <text x="454" y="180" fontFamily={MONO} fontSize="10.5" fill={C.gray}>Orchestrates tools, not a chatbot</text>
                <text x="454" y="226" fontFamily={MONO} fontSize="9.5" letterSpacing="2.6" fill={C.faint}>AGENT TOOL LAYER</text>
                {tools.map((t) => (
                    <g key={t.label}>
                        <rect x={t.x} y={t.y} width={t.w} height="24" rx="8" fill="rgba(249,115,22,0.1)" stroke="rgba(249,115,22,0.32)" />
                        <text x={t.x + t.w / 2} y={t.y + 16} textAnchor="middle" fontFamily={MONO} fontSize="10" fill={C.orangeText}>
                            {t.label}
                        </text>
                    </g>
                ))}
                <circle cx="458" cy="324" r="4" fill={C.orange} className="rd3-pip" />
                <text x="472" y="328" fontFamily={MONO} fontSize="8" fill={C.gray}>Reasoning · orchestration · evidence</text>

                {/* col 3 — engineer & release */}
                <g filter="url(#rd3-soft)">
                    <rect x="802" y="92" width="258" height="80" rx="16" fill={C.card} stroke={C.border} strokeWidth="1.1" />
                </g>
                <text x="824" y="118" fontFamily={MONO} fontSize="9.5" letterSpacing="2.4" fill={C.faint}>AGENT OUTPUT</text>
                <text x="824" y="142" fontFamily={DISPLAY} fontSize="17" fontWeight="600" fill={C.ink}>Evidence-linked results</text>
                <text x="824" y="161" fontFamily={MONO} fontSize="9.5" fill={C.gray}>BOM · DFM · citations · release notes</text>

                <g filter="url(#rd3-soft)">
                    <rect x="802" y="198" width="258" height="88" rx="16" fill={C.card} stroke={C.border} strokeWidth="1.1" />
                </g>
                <text x="824" y="226" fontFamily={MONO} fontSize="9.5" letterSpacing="2.4" fill={C.orangeText}>HUMAN IN THE LOOP</text>
                <g transform="translate(1016,206)">
                    <rect x="0" y="0" width="26" height="26" rx="8" fill="none" stroke={C.orangeBorder} />
                    <g stroke={C.orange} strokeWidth="1.5" fill="none">
                        <circle cx="13" cy="10" r="3.6" />
                        <path d="M6 22 c0-4 3.5-6.5 7-6.5 s7 2.5 7 6.5" strokeLinecap="round" />
                    </g>
                </g>
                <text x="824" y="252" fontFamily={DISPLAY} fontSize="17" fontWeight="600" fill={C.ink}>Engineer approval</text>
                <text x="824" y="272" fontFamily={MONO} fontSize="9.5" fill={C.gray}>Reviews &amp; approves before release</text>

                <g filter="url(#rd3-soft)">
                    <rect x="802" y="312" width="258" height="72" rx="16" fill={C.card} stroke={C.border} strokeWidth="1.1" />
                </g>
                <text x="824" y="338" fontFamily={MONO} fontSize="9.5" letterSpacing="2.4" fill={C.faint}>PLM INTEGRATION</text>
                <text x="824" y="360" fontFamily={DISPLAY} fontSize="16" fontWeight="600" fill={C.ink}>Release → CIM Database</text>
                <text x="824" y="377" fontFamily={MONO} fontSize="9" fill={C.gray}>Written back to PLM</text>

                {/* connectors */}
                <g fill="none">
                    <path d="M320 138 H432" className="rd3-flow-base" />
                    <path d="M320 138 H432" className="rd3-flow" />
                    <path d="M320 297 H432" className="rd3-flow-base" />
                    <path d="M320 297 H432" className="rd3-flow rd3-flow-d" />
                    <path d="M690 132 H802" className="rd3-flow-base" />
                    <path d="M690 132 H802" className="rd3-flow rd3-flow-d" />
                    <path d="M931 172 V198" className="rd3-flow-base" />
                    <path d="M931 172 V198" className="rd3-flow" />
                    <path d="M931 286 V312" className="rd3-flow-base" />
                    <path d="M931 286 V312" className="rd3-flow rd3-flow-d" />
                </g>
                <g fill="rgba(75,85,99,0.62)">
                    <path d="M432 138 l-7 -3.5 l0 7 z" />
                    <path d="M432 297 l-7 -3.5 l0 7 z" />
                    <path d="M802 132 l-7 -3.5 l0 7 z" />
                    <path d="M931 198 l-3.5 -7 l7 0 z" />
                    <path d="M931 312 l-3.5 -7 l7 0 z" />
                </g>

                {/* boundary gate */}
                <g filter="url(#rd3-soft)">
                    <rect x="352" y="168" width="48" height="48" rx="14" fill="rgba(255,255,255,0.92)" stroke={C.orangeBorder} strokeWidth="1.2" />
                </g>
                <g stroke={C.orange} strokeWidth="1.6" fill="none" strokeLinecap="round">
                    <rect x="368" y="191" width="16" height="11" rx="2.5" />
                    <path d="M370 191 V187 a6 6 0 0 1 12 0 V191" />
                </g>
                <circle cx="376" cy="196" r="1.5" fill={C.orange} />
            </svg>
        </div>
    );
}

function EngineeringStackDiagram() {
    const inputPillX = 20;
    const outputPillX = 800;
    const pillWidth = 300;
    const pillHeight = 52;

    const inputs = [
        {
            label: ['SOLIDWORKS', 'EPLAN'],
            y: 84,
            path: 'M320 84 C388 88 432 184 478 280',
        },
        {
            label: ['2D Drawings'],
            y: 180,
            path: 'M320 180 C388 184 432 226 478 280',
        },
        {
            label: ['CIM Database'],
            y: 280,
            path: 'M320 280 H478',
            active: true,
        },
        {
            label: ['Release Package'],
            y: 380,
            path: 'M320 380 C388 376 432 334 478 280',
        },
        {
            label: ['Supplier QA'],
            y: 476,
            path: 'M320 476 C388 472 432 376 478 280',
        },
    ];
    const outputs = [
        {
            label: 'DFM Findings',
            y: 84,
            path: 'M642 280 C688 184 732 88 800 84',
        },
        {
            label: 'Inspection Readiness',
            y: 180,
            path: 'M642 280 C688 226 732 184 800 180',
        },
        {
            label: 'BOM Consistency',
            y: 280,
            path: 'M642 280 H800',
            active: true,
        },
        {
            label: 'Release Gates',
            y: 380,
            path: 'M642 280 C688 334 732 376 800 380',
        },
        {
            label: 'Audit Trail',
            y: 476,
            path: 'M642 280 C688 376 732 472 800 476',
        },
    ];

    return (
        <div
            className="relative mx-auto w-full max-w-[880px] lg:-ml-2 lg:-mr-16 lg:w-[120%] lg:max-w-none"
            aria-label="RapidDraft layer connecting Theegarten engineering inputs to controlled release outputs"
        >
            <svg
                viewBox="0 0 1120 560"
                role="img"
                aria-labelledby="theegarten-stack-title"
                className="block h-auto w-full overflow-visible"
            >
                <title id="theegarten-stack-title">
                    RapidDraft connects engineering inputs to controlled release outputs
                </title>
                <defs>
                    <radialGradient id="rd-core-glow-gradient" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#FB923C" stopOpacity="0.28" />
                        <stop offset="58%" stopColor="#FB923C" stopOpacity="0.1" />
                        <stop offset="100%" stopColor="#FB923C" stopOpacity="0" />
                    </radialGradient>
                    <linearGradient id="rd-icon-gradient" x1="505" y1="220" x2="617" y2="338" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#F97316" />
                        <stop offset="1" stopColor="#C2410C" />
                    </linearGradient>
                    <filter id="rd-icon-shadow" x="-70%" y="-70%" width="240%" height="240%">
                        <feDropShadow dx="0" dy="16" stdDeviation="18" floodColor="#EA580C" floodOpacity="0.26" />
                        <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#7C2D12" floodOpacity="0.22" />
                    </filter>
                    <filter id="rd-soft-shadow" x="-40%" y="-40%" width="180%" height="180%">
                        <feDropShadow dx="0" dy="14" stdDeviation="18" floodColor="#111827" floodOpacity="0.08" />
                    </filter>
                    <style>
                        {`
                            .rd-flow-base {
                                stroke: rgba(75, 85, 99, 0.34);
                                stroke-width: 1.45;
                                stroke-linecap: round;
                                stroke-dasharray: 2 8;
                            }

                            .rd-flow-active {
                                stroke: rgba(75, 85, 99, 0.5);
                                stroke-width: 1.65;
                                stroke-linecap: round;
                                stroke-dasharray: 2 12;
                                animation: rd-dash-flow 2.4s linear infinite;
                            }

                            .rd-output-flow {
                                animation-delay: 0.9s;
                            }

                            .rd-core-glow {
                                animation: rd-core-breathe 3.8s ease-in-out infinite;
                                transform-box: fill-box;
                                transform-origin: center;
                            }

                            @keyframes rd-dash-flow {
                                to {
                                    stroke-dashoffset: -84;
                                }
                            }

                            @keyframes rd-core-breathe {
                                0%, 100% {
                                    opacity: 0.78;
                                    transform: scale(0.98);
                                }
                                50% {
                                    opacity: 1;
                                    transform: scale(1.04);
                                }
                            }

                            @media (prefers-reduced-motion: reduce) {
                                .rd-flow-active,
                                .rd-core-glow {
                                    animation: none;
                                }
                            }
                        `}
                    </style>
                </defs>

                <rect width="1120" height="560" fill="url(#rd-core-glow-gradient)" opacity="0.18" />

                <g fill="none">
                    {inputs.map((input) => (
                        <path key={`${input.label.join('-')}-base`} d={input.path} className="rd-flow-base" />
                    ))}
                    {outputs.map((output) => (
                        <path key={`${output.label}-base`} d={output.path} className="rd-flow-base" />
                    ))}
                    {inputs.map((input) => (
                        <path key={`${input.label.join('-')}-flow`} d={input.path} className="rd-flow-active" />
                    ))}
                    {outputs.map((output) => (
                        <path key={`${output.label}-flow`} d={output.path} className="rd-flow-active rd-output-flow" />
                    ))}
                </g>

                <g>
                    {inputs.map((input) => (
                        <g key={input.label.join('-')} filter="url(#rd-soft-shadow)">
                            <rect
                                x={inputPillX}
                                y={input.y - pillHeight / 2}
                                width={pillWidth}
                                height={pillHeight}
                                rx={pillHeight / 2}
                                fill="rgba(255,255,255,0.68)"
                                stroke="#8B8B8B"
                                strokeWidth="1.2"
                            />
                            <text
                                x={inputPillX + pillWidth / 2}
                                y={input.y}
                                textAnchor="middle"
                                dominantBaseline="middle"
                                fill="#111827"
                                fontSize="16"
                                fontWeight="700"
                                letterSpacing="0.35"
                            >
                                {input.label.length === 1 ? (
                                    input.label[0]
                                ) : (
                                    <>
                                        <tspan x={inputPillX + pillWidth / 2} dy="-0.58em">
                                            {input.label[0]}
                                        </tspan>
                                        <tspan x={inputPillX + pillWidth / 2} dy="1.18em">
                                            {input.label[1]}
                                        </tspan>
                                    </>
                                )}
                            </text>
                        </g>
                    ))}
                </g>

                <g>
                    {outputs.map((output) => (
                        <g key={output.label} filter="url(#rd-soft-shadow)">
                            <rect
                                x={outputPillX}
                                y={output.y - pillHeight / 2}
                                width={pillWidth}
                                height={pillHeight}
                                rx={pillHeight / 2}
                                fill="rgba(255,255,255,0.68)"
                                stroke="#8B8B8B"
                                strokeWidth="1.2"
                            />
                            <text
                                x={outputPillX + pillWidth / 2}
                                y={output.y}
                                textAnchor="middle"
                                dominantBaseline="middle"
                                fill="#111827"
                                fontSize="16"
                                fontWeight="700"
                                letterSpacing="0.35"
                            >
                                {output.label}
                            </text>
                        </g>
                    ))}
                </g>

                <g transform="translate(560 280)">
                    <circle className="rd-core-glow" r="122" fill="url(#rd-core-glow-gradient)" />
                    <circle r="90" fill="rgba(255,255,255,0.72)" stroke="#9CA3AF" strokeWidth="1.4" />
                    <circle r="64" fill="rgba(255,255,255,0.9)" stroke="#EA580C" strokeWidth="1.7" />
                    <g filter="url(#rd-icon-shadow)" transform="translate(-36 -36)">
                        <rect x="0" y="0" width="72" height="72" rx="18" fill="url(#rd-icon-gradient)" />
                        <rect x="20" y="19" width="35" height="9" rx="3" fill="#FED7AA" />
                        <rect x="20" y="33" width="35" height="9" rx="3" fill="#FED7AA" />
                        <rect x="32" y="47" width="23" height="9" rx="3" fill="#FED7AA" />
                    </g>
                    <text
                        y="120"
                        textAnchor="middle"
                        fill="#111827"
                        fontSize="15"
                        fontWeight="800"
                        letterSpacing="0.8"
                    >
                        RapidDraft
                    </text>
                    <text
                        y="143"
                        textAnchor="middle"
                        fill="#6B7280"
                        fontSize="11"
                        fontWeight="700"
                        letterSpacing="1.2"
                    >
                        HUMAN-IN-THE-LOOP REVIEW
                    </text>
                </g>
            </svg>
        </div>
    );
}

export default function TheegartenPactec() {
    return (
        <>
            <PageMeta
                title="RapidDraft for Theegarten-Pactec | AI-assisted release checks"
                description="A tailored RapidDraft pitch for Theegarten-Pactec: AI-assisted drawing, BOM, and CIM Database release checks with source-linked findings, engineer approval, and controlled deployment."
                path="/theegarten-pactec"
            />

            <section className="hero-mesh relative overflow-hidden border-b border-stone-200/70">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top_left,rgba(255,237,213,0.62),transparent_32%)]" />
                <div className="mx-auto grid max-w-[1280px] gap-10 px-5 py-14 sm:px-6 md:py-16 lg:grid-cols-[minmax(0,0.47fr)_minmax(0,0.53fr)] lg:items-center lg:px-8 lg:py-20 xl:px-10">
                    <Reveal className="lg:max-w-[610px]">
                        <div className="site-kicker">For Theegarten-Pactec Engineering</div>
                        <h1 className="hero-title mt-6 max-w-4xl text-balance lg:text-[3.25rem] xl:text-[3.55rem]">
                            Agentic drawing release and design review for engineering teams
                        </h1>
                        <p className="hero-copy mt-6 max-w-2xl">
                            RapidDraft helps hardware teams catch design and drawing issues earlier, automate repetitive review checks, and preserve decision context across CAD models, manufacturing drawings, and release workflows.
                        </p>
                        <div className="mt-8">
                            <Link to="/book-demo" className="btn-primary w-full sm:w-auto">
                                Book a Demo
                            </Link>
                        </div>
                        <div className="mt-6 flex max-w-3xl flex-wrap gap-2.5">
                            {['GDPR Compliant', 'On-prem AI', 'Local/EU Cloud', 'SSO'].map((chip) => (
                                <span
                                    key={chip}
                                    className="rounded-full border border-orange-200/80 bg-orange-50/70 px-3.5 py-1.5 text-xs font-semibold text-primary shadow-[0_10px_26px_-24px_rgba(234,88,12,0.5)]"
                                >
                                    {chip}
                                </span>
                            ))}
                        </div>
                    </Reveal>

                    <Reveal delay={0.08}>
                        <EngineeringStackDiagram />
                    </Reveal>
                </div>
            </section>

            <section className="hero-mesh relative overflow-hidden border-y border-stone-200/70 py-14 md:py-20">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_42%,rgba(255,237,213,0.5),transparent_42%)]" />
                <div className="relative mx-auto grid max-w-[1440px] gap-10 px-5 sm:px-6 lg:grid-cols-[minmax(0,0.32fr)_minmax(0,0.68fr)] lg:items-center lg:px-8 xl:px-10">
                    <Reveal>
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                            Security First
                        </p>
                        <h2 className="mt-5 text-balance text-[2rem] font-semibold leading-tight tracking-tight text-gray-950 sm:text-4xl md:text-5xl">
                            Data security and transparency come first
                        </h2>
                        <p className="mt-5 max-w-xl text-base leading-8 text-gray-600 sm:text-lg">
                            RapidDraft agent runs locally on-prem and is optimized for AI-specialized hardware like NVIDIA DGX Spark.
                        </p>
                        <div className="mt-7 flex flex-wrap gap-2.5">
                            {['Local-AI pilot', 'No silent training', 'Engineer-approved release'].map((chip) => (
                                <span
                                    key={chip}
                                    className="rounded-full border border-orange-200/80 bg-orange-50/70 px-3.5 py-1.5 text-xs font-semibold text-primary shadow-[0_10px_26px_-24px_rgba(234,88,12,0.5)]"
                                >
                                    {chip}
                                </span>
                            ))}
                        </div>
                    </Reveal>

                    <Reveal delay={0.08}>
                        <LocalAiDeploymentDiagram />
                    </Reveal>
                </div>
            </section>

            <Section className="!py-14 md:!py-20" background="light">
                <div className="grid gap-9 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] lg:items-stretch">
                    <Reveal className="lg:flex lg:h-full lg:flex-col">
                        <h2 className="section-title text-balance">Live demo: release check for a real module-change workflow</h2>
                        <p className="section-copy mt-5">
                            We will demonstrate the release logic on a representative Theegarten workflow: drawing update, BOM impact, optional EPLAN context, and CIM Database release review.
                        </p>
                        <div className="mt-7 lg:mt-auto lg:pt-8">
                            <Link to="/book-demo" className="btn-primary w-full sm:w-auto">
                                Book a Demo
                            </Link>
                        </div>
                    </Reveal>

                    <div className="grid gap-3 sm:grid-cols-2 lg:h-full lg:auto-rows-fr">
                        {demoSteps.map((step, index) => (
                            <Reveal key={step.title} delay={index * 0.04}>
                                <article
                                    className={`surface-card flex h-full flex-col p-5 ${
                                        index === demoSteps.length - 1 ? 'sm:col-span-2' : ''
                                    }`}
                                >
                                    <span className="card-index">{String(index + 1).padStart(2, '0')}</span>
                                    <h3 className="mt-3 text-lg font-semibold leading-tight tracking-tight text-gray-950">
                                        {step.title}
                                    </h3>
                                    <div className="mt-2 space-y-1 text-sm leading-6 text-gray-600">
                                        {step.body.map((line) => (
                                            <p key={line}>{line}</p>
                                        ))}
                                    </div>
                                </article>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </Section>

            <section className="hero-mesh relative overflow-hidden border-t border-stone-200/70 py-14 md:py-20">
                <div className="mx-auto max-w-[1680px] px-5 sm:px-6 lg:px-8 xl:px-10">
                    <Reveal className="mx-auto max-w-3xl text-center">
                        <h2 className="section-title text-balance">Proof of value before production deployment</h2>
                        <p className="section-copy mx-auto mt-5">
                            Validate RapidDraft on one representative release workflow, prove findings quality with Theegarten engineers, and decide on production only after the value and security fit are clear.
                        </p>
                    </Reveal>

                    <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-[repeat(4,minmax(0,1fr))]">
                        {pilotPhases.map((phase, index) => (
                            <Reveal key={phase.title} delay={index * 0.05}>
                                <article className="surface-card flex h-full flex-col p-5 xl:p-6">
                                    <div className="flex items-start justify-between gap-4">
                                        <h3 className="min-w-0 flex-1 text-lg font-semibold leading-tight tracking-tight text-gray-950">
                                            {phase.title}
                                            {phase.note ? <span className="block">{phase.note}</span> : null}
                                        </h3>
                                        <span className="ml-auto shrink-0 rounded-full border border-orange-200 bg-orange-50/80 px-3 py-1 text-xs font-semibold text-primary">
                                            {phase.duration}
                                        </span>
                                    </div>
                                    <p className="mt-4 text-sm leading-6 text-gray-600">{phase.body}</p>
                                    <p className="mt-5 rounded-[1rem] border border-orange-200/80 bg-orange-50/80 px-3 py-2.5 text-sm font-semibold leading-6 text-primary xl:mt-auto">
                                        {phase.deliverable}
                                    </p>
                                </article>
                            </Reveal>
                        ))}
                    </div>

                    <Reveal delay={0.08} className="mx-auto mt-10 max-w-[1180px]">
                        <div className="warm-panel overflow-hidden p-5 sm:p-7 lg:p-8">
                            <div className="grid gap-8 lg:grid-cols-[minmax(0,0.35fr)_minmax(0,0.65fr)] lg:items-center">
                                <div>
                                    <p className="site-kicker">The team behind RapidDraft</p>
                                    <h2 className="mt-5 text-balance text-[2rem] font-semibold leading-tight tracking-tight text-gray-950 sm:text-4xl">
                                        Engineering depth, AI capability, and industrial execution.
                                    </h2>
                                    <p className="mt-5 text-base leading-8 text-gray-600">
                                        Theegarten-Pactec would work directly with founders who understand mechanical release workflows, controlled deployment, and production AI systems.
                                    </p>
                                    <div className="mt-7">
                                        <Link to="/book-demo" className="btn-primary w-full sm:w-auto">
                                            Book a Demo
                                        </Link>
                                    </div>
                                </div>

                                <div className="grid gap-4 sm:grid-cols-3">
                                    {foundingTeam.map((leader) => (
                                        <article
                                            key={leader.name}
                                            className="rounded-[1.45rem] border border-stone-200/85 bg-white/82 p-4 shadow-[0_18px_44px_-36px_rgba(17,24,39,0.2)]"
                                        >
                                            <div className="overflow-hidden rounded-[1.2rem] border border-stone-200/80 bg-stone-100">
                                                <div className="aspect-[4/4.35]">
                                                    <img src={leader.image} alt={leader.name} className="h-full w-full object-cover" />
                                                </div>
                                            </div>
                                            <h3 className="mt-4 text-lg font-semibold leading-tight tracking-tight text-gray-950">
                                                {leader.name}
                                            </h3>
                                            <p className="mt-2 text-[0.7rem] font-semibold uppercase leading-5 tracking-[0.14em] text-primary">
                                                {leader.title}
                                            </p>
                                            <p className="mt-3 text-sm leading-6 text-gray-600">{leader.bio}</p>
                                        </article>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>
        </>
    );
}
