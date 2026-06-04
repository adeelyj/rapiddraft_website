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
        card: 'rgba(255,255,255,0.84)',
        orange: '#EA580C',
        orangeText: '#C2410C',
        orangeBorder: '#FDBA74',
        orangeFill: 'rgba(255,247,237,0.9)',
    };

    const tools = [
        { label: 'BOM', x: 442, y: 206, w: 46 },
        { label: 'DFM', x: 494, y: 206, w: 46 },
        { label: 'Model / Canvas', x: 546, y: 206, w: 112 },
        { label: 'Knowledge', x: 442, y: 242, w: 84 },
        { label: 'Artifacts', x: 532, y: 242, w: 72 },
    ];

    return (
        <div
            className="relative w-full"
            aria-label="Local-AI deployment architecture from Theegarten release package to engineer-approved CIM Database release"
        >
            <svg
                viewBox="0 0 1200 420"
                role="img"
                aria-labelledby="rd3-title"
                className="block h-auto w-full overflow-visible"
            >
                <title id="rd3-title">Local-AI deployment architecture for RapidDraft at Theegarten-Pactec</title>
                <defs>
                    <radialGradient id="rd3-core-glow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#FB923C" stopOpacity="0.18" />
                        <stop offset="60%" stopColor="#FB923C" stopOpacity="0.05" />
                        <stop offset="100%" stopColor="#FB923C" stopOpacity="0" />
                    </radialGradient>
                    <linearGradient id="rd3-logo" x1="0" y1="0" x2="1" y2="1">
                        <stop stopColor="#F97316" />
                        <stop offset="1" stopColor="#C2410C" />
                    </linearGradient>
                    <filter id="rd3-soft" x="-40%" y="-40%" width="180%" height="180%">
                        <feDropShadow dx="0" dy="10" stdDeviation="16" floodColor="#111827" floodOpacity="0.07" />
                    </filter>
                    <filter id="rd3-orange-soft" x="-50%" y="-50%" width="200%" height="200%">
                        <feDropShadow dx="0" dy="12" stdDeviation="20" floodColor="#EA580C" floodOpacity="0.14" />
                    </filter>
                    <style>
                        {`
                            .rd3-flow-base {
                                stroke: rgba(75,85,99,0.28);
                                stroke-width: 1.4;
                                stroke-linecap: round;
                                stroke-dasharray: 2 8;
                            }
                            .rd3-flow {
                                stroke: rgba(75,85,99,0.48);
                                stroke-width: 1.55;
                                stroke-linecap: round;
                                stroke-dasharray: 2 11;
                                animation: rd3-dash 2.8s linear infinite;
                            }
                            .rd3-flow-d { animation-delay: 0.9s; }
                            @keyframes rd3-dash { to { stroke-dashoffset: -84; } }
                            .rd3-pip { animation: rd3-pip 2.8s ease-in-out infinite; }
                            @keyframes rd3-pip { 0%,100%{opacity:.45} 50%{opacity:1} }
                            @media (prefers-reduced-motion:reduce) { .rd3-flow,.rd3-pip { animation:none; } }
                        `}
                    </style>
                </defs>

                {/* ambient glow behind agent column */}
                <ellipse cx="580" cy="210" rx="280" ry="210" fill="url(#rd3-core-glow)" />

                {/* ── COL 1: INPUT ─────────────────────────────────────── */}

                <g filter="url(#rd3-soft)">
                    <rect x="20" y="40" width="300" height="104" rx="16" fill={C.card} stroke={C.border} strokeWidth="1.1" />
                </g>
                <text x="42" y="66" fontFamily={MONO} fontSize="12" letterSpacing="2.2" fill={C.faint}>THEEGARTEN-PACTEC DATA</text>
                <text x="42" y="96" fontFamily={DISPLAY} fontSize="21" fontWeight="600" fill={C.ink}>Release Package</text>
                <text x="42" y="120" fontFamily={MONO} fontSize="13" fill={C.gray}>CAD · Drawing · BOM · EPLAN</text>

                <g filter="url(#rd3-soft)">
                    <rect x="20" y="160" width="300" height="242" rx="16" fill={C.card} stroke={C.border} strokeWidth="1.1" />
                </g>
                <text x="42" y="184" fontFamily={MONO} fontSize="12" letterSpacing="2.2" fill={C.faint}>ON-PREM HARDWARE</text>
                <image href="/media/NVIDIA-DGX-SPARK.png" x="100" y="196" width="140" height="140" preserveAspectRatio="xMidYMid meet" />
                <text x="42" y="362" fontFamily={DISPLAY} fontSize="21" fontWeight="600" fill={C.ink}>NVIDIA DGX Spark</text>
                <text x="42" y="386" fontFamily={MONO} fontSize="13" fill={C.gray}>Runs on-site · company network</text>

                {/* boundary gate — sits between the two col-1 cards */}
                <g filter="url(#rd3-soft)">
                    <rect x="346" y="128" width="50" height="50" rx="14" fill="rgba(255,255,255,0.92)" stroke={C.orangeBorder} strokeWidth="1.2" />
                </g>
                <g stroke={C.orange} strokeWidth="1.6" fill="none" strokeLinecap="round">
                    <rect x="363" y="152" width="18" height="13" rx="2.5" />
                    <path d="M365 152 V147 a6.5 6.5 0 0 1 13 0 V152" />
                </g>
                <circle cx="372" cy="159" r="1.8" fill={C.orange} />

                {/* ── COL 2: AGENT ─────────────────────────────────────── */}

                <g filter="url(#rd3-orange-soft)">
                    <rect x="420" y="40" width="320" height="362" rx="18" fill={C.orangeFill} stroke={C.orangeBorder} strokeWidth="1.3" />
                </g>
                <g transform="translate(442,54)">
                    <rect width="30" height="30" rx="9" fill="url(#rd3-logo)" />
                    <rect x="8" y="9.5" width="14" height="3" rx="1.5" fill="#ffffff" opacity="0.95" />
                    <rect x="8" y="14.8" width="10" height="3" rx="1.5" fill="#ffffff" opacity="0.78" />
                    <rect x="8" y="20.1" width="14" height="3" rx="1.5" fill="#ffffff" opacity="0.95" />
                </g>
                <text x="484" y="74" fontFamily={MONO} fontSize="12" letterSpacing="2.2" fill={C.orangeText}>RAPIDDRAFT WORKSPACE</text>
                <text x="442" y="112" fontFamily={DISPLAY} fontSize="21" fontWeight="600" fill={C.ink}>Agent inside the product</text>
                <text x="442" y="138" fontFamily={MONO} fontSize="13" fill={C.gray}>Orchestrates tools, not a chatbot</text>
                <text x="442" y="188" fontFamily={MONO} fontSize="12" letterSpacing="2.6" fill={C.faint}>AGENT TOOL LAYER</text>
                {tools.map((t) => (
                    <g key={t.label}>
                        <rect x={t.x} y={t.y} width={t.w} height="26" rx="8" fill="rgba(249,115,22,0.1)" stroke="rgba(249,115,22,0.32)" />
                        <text x={t.x + t.w / 2} y={t.y + 17} textAnchor="middle" fontFamily={MONO} fontSize="11" fill={C.orangeText}>
                            {t.label}
                        </text>
                    </g>
                ))}
                <circle cx="446" cy="346" r="4.5" fill={C.orange} className="rd3-pip" />
                <text x="462" y="350" fontFamily={MONO} fontSize="11" fill={C.gray}>Reasoning · orchestration · evidence</text>

                {/* ── COL 3: OUTPUT (animated) ─────────────────────────── */}

                {/* Card 1 — fades out at step 1 */}
                <g>
                    <animate attributeName="opacity"
                        values="1;1;0;0;1;1"
                        keyTimes="0;0.18;0.22;0.78;0.82;1"
                        dur="10s" repeatCount="indefinite" />
                    <g filter="url(#rd3-soft)">
                        <rect x="848" y="40" width="332" height="108" rx="16" fill={C.card} stroke={C.border} strokeWidth="1.1" />
                    </g>
                    <text x="870" y="66" fontFamily={MONO} fontSize="12" letterSpacing="2.2" fill={C.faint}>AGENT OUTPUT</text>
                    <text x="870" y="96" fontFamily={DISPLAY} fontSize="21" fontWeight="600" fill={C.ink}>Evidence-linked results</text>
                    <text x="870" y="122" fontFamily={MONO} fontSize="13" fill={C.gray}>BOM · DFM · citations · release notes</text>
                </g>

                {/* Card 2 — slides up 124px then fades */}
                <g>
                    {/* @ts-ignore */}
                    <animateTransform attributeName="transform" type="translate"
                        values="0,0;0,0;0,-124;0,-124;0,0;0,0"
                        keyTimes="0;0.18;0.22;0.42;0.43;1"
                        dur="10s" repeatCount="indefinite" calcMode="linear" />
                    <animate attributeName="opacity"
                        values="1;1;0;0;0;1;1"
                        keyTimes="0;0.38;0.42;0.62;0.78;0.82;1"
                        dur="10s" repeatCount="indefinite" />
                    <g filter="url(#rd3-soft)">
                        <rect x="848" y="164" width="332" height="116" rx="16" fill={C.card} stroke={C.border} strokeWidth="1.1" />
                    </g>
                    <text x="870" y="190" fontFamily={MONO} fontSize="12" letterSpacing="2.2" fill={C.orangeText}>HUMAN IN THE LOOP</text>
                    <g transform="translate(1120,170)">
                        <rect width="28" height="28" rx="8" fill="none" stroke={C.orangeBorder} />
                        <g stroke={C.orange} strokeWidth="1.6" fill="none">
                            <circle cx="14" cy="11" r="4" />
                            <path d="M6 25 c0-4.5 3.8-7 8-7 s8 2.5 8 7" strokeLinecap="round" />
                        </g>
                    </g>
                    <text x="870" y="224" fontFamily={DISPLAY} fontSize="21" fontWeight="600" fill={C.ink}>Engineer approval</text>
                    <text x="870" y="250" fontFamily={MONO} fontSize="13" fill={C.gray}>Reviews &amp; approves before release</text>
                </g>

                {/* Card 3 — slides up 256px total then fades */}
                <g>
                    {/* @ts-ignore */}
                    <animateTransform attributeName="transform" type="translate"
                        values="0,0;0,0;0,-124;0,-124;0,-256;0,-256;0,0;0,0"
                        keyTimes="0;0.18;0.22;0.38;0.42;0.62;0.63;1"
                        dur="10s" repeatCount="indefinite" calcMode="linear" />
                    <animate attributeName="opacity"
                        values="1;1;0;0;1;1"
                        keyTimes="0;0.58;0.62;0.78;0.82;1"
                        dur="10s" repeatCount="indefinite" />
                    <g filter="url(#rd3-soft)">
                        <rect x="848" y="296" width="332" height="108" rx="16" fill={C.card} stroke={C.border} strokeWidth="1.1" />
                    </g>
                    <text x="870" y="322" fontFamily={MONO} fontSize="12" letterSpacing="2.2" fill={C.faint}>PLM INTEGRATION</text>
                    <text x="870" y="350" fontFamily={DISPLAY} fontSize="21" fontWeight="600" fill={C.ink}>Release → CIM Database</text>
                    <text x="870" y="374" fontFamily={MONO} fontSize="13" fill={C.gray}>Written back to PLM</text>
                </g>

                {/* ── CONNECTORS ───────────────────────────────────────── */}
                <g fill="none">
                    <path d="M320 92 H420" className="rd3-flow-base" />
                    <path d="M320 92 H420" className="rd3-flow" />
                    <path d="M320 281 H420" className="rd3-flow-base" />
                    <path d="M320 281 H420" className="rd3-flow rd3-flow-d" />
                    <path d="M740 94 H848" className="rd3-flow-base" />
                    <path d="M740 94 H848" className="rd3-flow rd3-flow-d" />
                </g>
                <g fill="rgba(75,85,99,0.55)">
                    <path d="M420 92 l-7 -3.5 l0 7 z" />
                    <path d="M420 281 l-7 -3.5 l0 7 z" />
                    <path d="M848 94 l-7 -3.5 l0 7 z" />
                </g>
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

            <section className="hero-mesh relative overflow-hidden border-y border-stone-200/70 py-16 md:py-24">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_68%_38%,rgba(255,237,213,0.55),transparent_44%)]" />
                <div className="relative mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8 xl:px-10">
                    <Reveal>
                        <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                            <div className="max-w-lg">
                                <div className="site-kicker">Security First</div>
                                <h2 className="section-title mt-5 text-balance">
                                    Data security and transparency come first
                                </h2>
                            </div>
                            <p className="section-copy max-w-sm">
                                Runs locally on-prem, optimized for AI hardware like NVIDIA DGX Spark. No data leaves your infrastructure.
                            </p>
                        </div>
                    </Reveal>
                    <Reveal delay={0.08}>
                        <LocalAiDeploymentDiagram />
                    </Reveal>
                </div>
            </section>

            <Section className="!py-16 md:!py-24" background="light">
                <div className="grid gap-9 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] lg:items-stretch">
                    <Reveal className="lg:flex lg:h-full lg:flex-col">
                        <div className="site-kicker">Live Demo</div>
                        <h2 className="section-title mt-5 text-balance">Release check for a real module-change workflow</h2>
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

            <section className="hero-mesh relative overflow-hidden border-t border-stone-200/70 py-16 md:py-24">
                <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8 xl:px-10">
                    <Reveal className="mx-auto max-w-3xl text-center">
                        <div className="site-kicker mx-auto w-fit">Pilot Programme</div>
                        <h2 className="section-title mt-5 text-balance">Proof of value before production deployment</h2>
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
                                    <div className="site-kicker">The team behind RapidDraft</div>
                                    <h2 className="section-title mt-5 text-balance">
                                        Engineering depth, AI capability, and industrial execution.
                                    </h2>
                                    <p className="section-copy mt-5">
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
