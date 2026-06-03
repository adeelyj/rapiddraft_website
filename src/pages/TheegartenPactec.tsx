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
    const trustChips = [
        { label: 'No auto-release', x: 112, width: 134 },
        { label: 'No silent training', x: 262, width: 148 },
        { label: 'No direct browser model calls', x: 426, width: 190 },
        { label: 'Evidence-first', x: 632, width: 132 },
        { label: 'Customer-controlled in pilot', x: 780, width: 188 },
    ];

    return (
        <div
            className="relative mx-auto w-full max-w-[980px] lg:w-full lg:max-w-none"
            aria-label="Local-AI deployment architecture from Theegarten release package to engineer-approved CIM Database release"
        >
            <svg
                viewBox="0 0 1120 610"
                role="img"
                aria-labelledby="local-ai-architecture-title"
                className="block h-auto w-full overflow-visible"
            >
                <title id="local-ai-architecture-title">
                    Local-AI deployment architecture for RapidDraft at Theegarten-Pactec
                </title>
                <defs>
                    <radialGradient id="security-ambient" cx="48%" cy="44%" r="64%">
                        <stop offset="0%" stopColor="#EA580C" stopOpacity="0.16" />
                        <stop offset="48%" stopColor="#111827" stopOpacity="0.52" />
                        <stop offset="100%" stopColor="#020617" stopOpacity="0" />
                    </radialGradient>
                    <linearGradient id="security-panel" x1="0" y1="0" x2="1" y2="1">
                        <stop stopColor="#111827" stopOpacity="0.88" />
                        <stop offset="1" stopColor="#020617" stopOpacity="0.68" />
                    </linearGradient>
                    <linearGradient id="security-agent" x1="0" y1="0" x2="1" y2="1">
                        <stop stopColor="#1F2937" stopOpacity="0.94" />
                        <stop offset="1" stopColor="#0F172A" stopOpacity="0.78" />
                    </linearGradient>
                    <filter id="security-card-shadow" x="-30%" y="-30%" width="160%" height="160%">
                        <feDropShadow dx="0" dy="18" stdDeviation="24" floodColor="#000000" floodOpacity="0.32" />
                    </filter>
                    <filter id="security-agent-glow" x="-80%" y="-80%" width="260%" height="260%">
                        <feGaussianBlur stdDeviation="18" result="blur" />
                        <feFlood floodColor="#EA580C" floodOpacity="0.3" result="color" />
                        <feComposite in="color" in2="blur" operator="in" result="glow" />
                        <feMerge><feMergeNode in="glow" /><feMergeNode in="SourceGraphic" /></feMerge>
                    </filter>
                    <style>
                        {`
                            .security-flow {
                                stroke-dasharray: 3 11;
                                animation: security-flow 3s linear infinite;
                            }

                            .security-flow-delay {
                                animation-delay: 0.85s;
                            }

                            @keyframes security-flow {
                                to {
                                    stroke-dashoffset: -84;
                                }
                            }

                            @media (prefers-reduced-motion: reduce) {
                                .security-flow {
                                    animation: none;
                                }
                            }
                        `}
                    </style>
                </defs>

                <rect width="1120" height="610" rx="34" fill="#030712" />
                <rect width="1120" height="610" rx="34" fill="url(#security-ambient)" />
                <rect x="30" y="28" width="1060" height="554" rx="28" fill="rgba(15,23,42,0.24)" stroke="rgba(255,255,255,0.08)" />

                <g>
                    <text x="58" y="58" fill="#F8FAFC" fontSize="18" fontWeight="800">
                        Rapid<tspan fill="#EA580C">Draft</tspan>
                    </text>
                    <text x="58" y="80" fill="#64748B" fontSize="10" fontWeight="700" letterSpacing="5.5">
                        REFERENCE ARCHITECTURE
                    </text>
                    <rect x="910" y="42" width="174" height="30" rx="15" fill="rgba(255,255,255,0.035)" stroke="rgba(255,255,255,0.16)" />
                    <text x="997" y="62" textAnchor="middle" fill="#E5E7EB" fontSize="10" fontWeight="700" letterSpacing="2.5">
                        PILOT · THEEGARTEN
                    </text>
                    <text x="997" y="84" textAnchor="middle" fill="#64748B" fontSize="8" fontWeight="700" letterSpacing="3">
                        CONFIDENTIAL
                    </text>
                </g>

                <g textAnchor="middle">
                    <text x="612" y="86" fill="#FED7AA" fontSize="11" fontWeight="700" letterSpacing="6">
                        INPUT  →  AGENT  →  RELEASE
                    </text>
                    <text x="612" y="118" fill="#F8FAFC" fontSize="28" fontWeight="800">
                        Local-AI deployment architecture
                    </text>
                    <text x="612" y="143" fill="#94A3B8" fontSize="13" fontWeight="500">
                        From engineering data to an engineer-approved CIM Database release.
                    </text>
                </g>

                <g>
                    <rect x="56" y="192" width="306" height="344" rx="24" fill="rgba(15,23,42,0.44)" stroke="rgba(255,255,255,0.12)" />
                    <text x="82" y="188" fill="#E5E7EB" fontSize="11" fontWeight="800" letterSpacing="2.5">
                        01  INPUT · DATA & HARDWARE
                    </text>

                    <rect x="86" y="238" width="246" height="86" rx="18" fill="url(#security-panel)" stroke="rgba(234,88,12,0.34)" filter="url(#security-card-shadow)" />
                    <text x="108" y="272" fill="#94A3B8" fontSize="10" fontWeight="700" letterSpacing="3">
                        INPUT · DATA
                    </text>
                    <text x="108" y="296" fill="#F8FAFC" fontSize="19" fontWeight="800">
                        Release package
                    </text>
                    <text x="108" y="318" fill="#94A3B8" fontSize="12" fontWeight="600" letterSpacing="1.3">
                        CAD · Drawing · BOM · EPLAN
                    </text>

                    <rect x="86" y="374" width="246" height="128" rx="18" fill="url(#security-panel)" stroke="rgba(255,255,255,0.12)" filter="url(#security-card-shadow)" />
                    <text x="108" y="413" fill="#94A3B8" fontSize="10" fontWeight="700" letterSpacing="3">
                        LOCAL RUNTIME
                    </text>
                    <rect x="108" y="430" width="88" height="28" rx="7" fill="rgba(255,255,255,0.06)" stroke="rgba(251,146,60,0.32)" />
                    <rect x="117" y="437" width="15" height="14" rx="3" fill="rgba(251,146,60,0.34)" />
                    <rect x="139" y="437" width="46" height="14" rx="3" fill="rgba(255,255,255,0.12)" />
                    <text x="108" y="476" fill="#F8FAFC" fontSize="19" fontWeight="800">
                        Local-AI runtime
                    </text>
                    <text x="108" y="497" fill="#94A3B8" fontSize="12" fontWeight="600" letterSpacing="1.3">
                        Runs on-site · private network · pilot controls
                    </text>
                </g>

                <g>
                    <rect x="412" y="192" width="298" height="344" rx="24" fill="rgba(15,23,42,0.48)" stroke="rgba(255,255,255,0.12)" />
                    <text x="436" y="188" fill="#E5E7EB" fontSize="11" fontWeight="800" letterSpacing="2.5">
                        02  RAPIDDRAFT AGENT
                    </text>

                    <rect x="442" y="244" width="238" height="254" rx="20" fill="url(#security-agent)" stroke="rgba(234,88,12,0.52)" filter="url(#security-card-shadow)" />
                    <path d="M456 270 V258 H468" stroke="#F8FAFC" strokeWidth="1.2" opacity="0.72" />
                    <path d="M666 270 V258 H654" stroke="#F8FAFC" strokeWidth="1.2" opacity="0.72" />
                    <path d="M456 472 V484 H468" stroke="#F8FAFC" strokeWidth="1.2" opacity="0.72" />
                    <path d="M666 472 V484 H654" stroke="#F8FAFC" strokeWidth="1.2" opacity="0.72" />
                    <text x="474" y="286" fill="#64748B" fontSize="10" fontWeight="700" letterSpacing="4">
                        RAPIDDRAFT WORKSPACE
                    </text>
                    <text x="474" y="318" fill="#F8FAFC" fontSize="21" fontWeight="800">
                        Agent inside the product
                    </text>
                    <text x="474" y="342" fill="#94A3B8" fontSize="12" fontWeight="600" letterSpacing="1.2">
                        Orchestrates approved tools, not a chatbot
                    </text>

                    <text x="474" y="396" fill="#64748B" fontSize="10" fontWeight="700" letterSpacing="4">
                        AGENT TOOL LAYER
                    </text>
                    {['BOM', 'DFM', 'Model / Canvas', 'Knowledge', 'Artifacts'].map((tool, index) => {
                        const positions = [
                            [474, 414, 40],
                            [520, 414, 42],
                            [568, 414, 82],
                            [474, 448, 68],
                            [546, 448, 58],
                        ];
                        const [x, y, width] = positions[index];

                        return (
                            <g key={tool}>
                                <rect x={x} y={y} width={width} height="24" rx="8" fill="rgba(234,88,12,0.12)" stroke="rgba(234,88,12,0.34)" />
                                <text x={x + width / 2} y={y + 16} textAnchor="middle" fill="#E5E7EB" fontSize="10" fontWeight="700">
                                    {tool}
                                </text>
                            </g>
                        );
                    })}
                    <circle cx="474" cy="486" r="4" fill="#FB923C" filter="url(#security-agent-glow)" />
                    <text x="490" y="491" fill="#64748B" fontSize="10" fontWeight="600">
                        Reasoning · tool orchestration · evidence assembly
                    </text>
                </g>

                <g>
                    <rect x="764" y="192" width="306" height="344" rx="24" fill="rgba(15,23,42,0.44)" stroke="rgba(255,255,255,0.12)" />
                    <text x="790" y="188" fill="#E5E7EB" fontSize="11" fontWeight="800" letterSpacing="2.5">
                        03  ENGINEER & RELEASE
                    </text>

                    <rect x="794" y="238" width="246" height="82" rx="18" fill="url(#security-panel)" stroke="rgba(234,88,12,0.34)" filter="url(#security-card-shadow)" />
                    <text x="816" y="271" fill="#94A3B8" fontSize="10" fontWeight="700" letterSpacing="3">
                        OUTPUT
                    </text>
                    <text x="816" y="295" fill="#F8FAFC" fontSize="19" fontWeight="800">
                        Evidence-linked results
                    </text>
                    <text x="816" y="316" fill="#94A3B8" fontSize="12" fontWeight="600" letterSpacing="1.3">
                        BOM · DFM · citations · release notes
                    </text>

                    <rect x="794" y="356" width="246" height="90" rx="18" fill="rgba(234,88,12,0.08)" stroke="rgba(251,146,60,0.38)" filter="url(#security-card-shadow)" />
                    <text x="816" y="389" fill="#FED7AA" fontSize="10" fontWeight="700" letterSpacing="3">
                        HUMAN IN THE LOOP
                    </text>
                    <text x="816" y="413" fill="#F8FAFC" fontSize="19" fontWeight="800">
                        Engineer approval
                    </text>
                    <text x="816" y="433" fill="#94A3B8" fontSize="12" fontWeight="600">
                        Reviews and approves before release
                    </text>

                    <rect x="794" y="474" width="246" height="76" rx="18" fill="url(#security-panel)" stroke="rgba(234,88,12,0.34)" filter="url(#security-card-shadow)" />
                    <text x="816" y="506" fill="#94A3B8" fontSize="10" fontWeight="700" letterSpacing="3">
                        SYSTEM OF RECORD
                    </text>
                    <text x="816" y="530" fill="#F8FAFC" fontSize="19" fontWeight="800">
                        Release → CIM Database
                    </text>
                    <text x="816" y="548" fill="#94A3B8" fontSize="11" fontWeight="600">
                        Approved release written back to PLM
                    </text>
                </g>

                <g fill="none">
                    <path d="M332 281 H442" stroke="rgba(251,146,60,0.74)" strokeWidth="1.45" className="security-flow" />
                    <path d="M332 438 H388 H442" stroke="rgba(251,146,60,0.48)" strokeWidth="1.45" className="security-flow" />
                    <path d="M680 279 H794" stroke="rgba(251,146,60,0.74)" strokeWidth="1.45" className="security-flow security-flow-delay" />
                    <path d="M917 320 V356" stroke="rgba(251,146,60,0.58)" strokeWidth="1.45" className="security-flow security-flow-delay" />
                    <path d="M917 446 V474" stroke="rgba(251,146,60,0.58)" strokeWidth="1.45" className="security-flow security-flow-delay" />
                </g>

                <g>
                    <rect x="366" y="397" width="52" height="60" rx="16" fill="rgba(234,88,12,0.08)" stroke="rgba(251,146,60,0.38)" />
                    <text x="392" y="430" textAnchor="middle" fill="#FB923C" fontSize="22" fontWeight="800">
                        ↯
                    </text>
                    <text x="392" y="477" textAnchor="middle" fill="#E5E7EB" fontSize="9" fontWeight="800" letterSpacing="2">
                        PROTECTED
                    </text>
                    <text x="392" y="492" textAnchor="middle" fill="#94A3B8" fontSize="8" fontWeight="700" letterSpacing="1.1">
                        CLOUDFLARE · BEARER KEYS
                    </text>
                    <text x="392" y="508" textAnchor="middle" fill="#FB923C" fontSize="9" fontWeight="800" letterSpacing="2">
                        SECURED
                    </text>
                </g>

                <g>
                    {trustChips.map((chip) => (
                        <g key={chip.label}>
                            <rect x={chip.x} y="562" width={chip.width} height="24" rx="12" fill="rgba(255,255,255,0.025)" stroke="rgba(255,255,255,0.09)" />
                            <text x={chip.x + 14} y="578" fill="#FED7AA" fontSize="9" fontWeight="800">
                                ✓
                            </text>
                            <text x={chip.x + 32} y="578" fill="#94A3B8" fontSize="9" fontWeight="700">
                                {chip.label}
                            </text>
                        </g>
                    ))}
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

            <section className="relative overflow-hidden bg-[#111827] py-14 text-white md:py-20">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(234,88,12,0.18),transparent_30%)]" />
                <div className="relative mx-auto grid max-w-[1440px] gap-10 px-5 sm:px-6 lg:grid-cols-[minmax(0,0.32fr)_minmax(0,0.68fr)] lg:items-center lg:px-8 xl:px-10">
                    <Reveal>
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                            Security First
                        </p>
                        <h2 className="mt-5 text-balance text-[2rem] font-semibold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
                            Data security and transparency come first
                        </h2>
                        <p className="mt-5 max-w-xl text-base leading-8 text-white/70 sm:text-lg">
                            RapidDraft agent runs locally on-prem and is optimized for AI-specialized hardware like NVIDIA DGX Spark.
                        </p>
                        <div className="mt-7 flex flex-wrap gap-2.5">
                            {['Local-AI pilot', 'No silent training', 'Engineer-approved release'].map((chip) => (
                                <span
                                    key={chip}
                                    className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs font-semibold text-white/72"
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
