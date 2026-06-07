/* OnPremFigure — the on-prem agentic architecture diagram for the Security page.
   Extracted and restyled from TheegartenPactec's LocalAiDeploymentDiagram. Static
   (no sliding cards) and theme-aware: every color comes from var(--rd-*) tokens, so
   it reads correctly on the Security page's dark band. Flat hairline, no shadows. */

const FONT = "'Inter', sans-serif";

const TOOLS = [
  { label: 'BOM', x: 442, y: 206, w: 46 },
  { label: 'DFM', x: 494, y: 206, w: 46 },
  { label: 'Model / Canvas', x: 546, y: 206, w: 112 },
  { label: 'Knowledge', x: 442, y: 242, w: 84 },
  { label: 'Artifacts', x: 532, y: 242, w: 72 },
];

const ALT =
  'On-prem hardware (NVIDIA DGX Spark) and your release package on the left, behind a security boundary; the RapidDraft agent workspace orchestrating BOM, DFM, model/canvas, knowledge, and artifacts tools in the center; evidence-linked results, engineer approval, and writeback to the CIM Database (PLM) on the right.';

export default function OnPremFigure({
  inputLabel = 'Your release package',
}: {
  inputLabel?: string;
}) {
  return (
    <svg
      viewBox="0 0 1200 420"
      role="img"
      aria-label={ALT}
      className="block h-auto w-full overflow-visible"
    >
      <style>
        {`
          .op-card { fill: var(--rd-surface); stroke: var(--rd-edge); stroke-width: 1.1; }
          .op-agent { fill: var(--rd-accent-soft); stroke: var(--rd-accent-hair); stroke-width: 1.3; }
          .op-gate { fill: var(--rd-surface); stroke: var(--rd-accent-hair); stroke-width: 1.2; }
          .op-tool { fill: var(--rd-accent-soft); stroke: var(--rd-accent-hair); }
          .op-micro { font-family: ${FONT}; font-size: 13px; font-weight: 600; letter-spacing: 1.8px; fill: var(--rd-fg-3); }
          .op-micro-accent { font-family: ${FONT}; font-size: 13px; font-weight: 600; letter-spacing: 1.8px; fill: var(--rd-accent); }
          .op-title { font-family: ${FONT}; font-size: 22px; font-weight: 600; fill: var(--rd-head); }
          .op-sub { font-family: ${FONT}; font-size: 14.5px; fill: var(--rd-fg-2); }
          .op-tool-label { font-family: ${FONT}; font-size: 12px; fill: var(--rd-accent); }
          .op-flow { stroke: var(--rd-edge); stroke-width: 1.5; stroke-linecap: round; stroke-dasharray: 2 9; fill: none; }
          .op-arrow { fill: var(--rd-edge); }
          .op-accent-stroke { stroke: var(--rd-accent); stroke-width: 1.6; fill: none; stroke-linecap: round; }
          .op-accent-fill { fill: var(--rd-accent); }
        `}
      </style>

      {/* ── COL 1: INPUT ─────────────────────────────────────── */}

      {/* Top input card — label driven by the inputLabel prop */}
      <rect className="op-card" x="20" y="40" width="300" height="104" rx="16" />
      <text className="op-micro" x="42" y="66">YOUR DATA</text>
      <text className="op-title" x="42" y="96">{inputLabel}</text>
      <text className="op-sub" x="42" y="120">CAD · Drawing · BOM · EPLAN</text>

      {/* On-prem hardware card */}
      <rect className="op-card" x="20" y="160" width="300" height="242" rx="16" />
      <text className="op-micro" x="42" y="184">ON-PREM HARDWARE</text>
      <image
        href="/media/NVIDIA-DGX-SPARK.png"
        x="100"
        y="196"
        width="140"
        height="140"
        preserveAspectRatio="xMidYMid meet"
      />
      <text className="op-title" x="42" y="362">NVIDIA DGX Spark</text>
      <text className="op-sub" x="42" y="386">Runs on-site · company network</text>

      {/* Security boundary gate — between the two input cards */}
      <rect className="op-gate" x="346" y="128" width="50" height="50" rx="14" />
      <g className="op-accent-stroke">
        <rect x="363" y="152" width="18" height="13" rx="2.5" />
        <path d="M365 152 V147 a6.5 6.5 0 0 1 13 0 V152" />
      </g>
      <circle className="op-accent-fill" cx="372" cy="159" r="1.8" />
      <text className="op-micro-accent" x="371" y="196" textAnchor="middle">SECURITY BOUNDARY</text>

      {/* ── COL 2: AGENT WORKSPACE ───────────────────────────── */}

      <rect className="op-agent" x="420" y="40" width="320" height="362" rx="18" />

      {/* RapidDraft mark */}
      <g transform="translate(442,54)">
        <rect width="30" height="30" rx="9" className="op-accent-fill" />
        <rect x="8" y="9.5" width="14" height="3" rx="1.5" fill="var(--rd-surface)" />
        <rect x="8" y="14.8" width="10" height="3" rx="1.5" fill="var(--rd-surface)" opacity="0.8" />
        <rect x="8" y="20.1" width="14" height="3" rx="1.5" fill="var(--rd-surface)" />
      </g>
      <text className="op-micro-accent" x="484" y="74">RAPIDDRAFT WORKSPACE</text>
      <text className="op-title" x="442" y="112">Agent inside the product</text>
      <text className="op-sub" x="442" y="138">Orchestrates tools, not a chatbot</text>

      <text className="op-micro" x="442" y="188" letterSpacing="2.6">AGENT TOOL LAYER</text>
      {TOOLS.map((t) => (
        <g key={t.label}>
          <rect className="op-tool" x={t.x} y={t.y} width={t.w} height="26" rx="8" />
          <text
            className="op-tool-label"
            x={t.x + t.w / 2}
            y={t.y + 17}
            textAnchor="middle"
          >
            {t.label}
          </text>
        </g>
      ))}
      <circle className="op-accent-fill" cx="446" cy="346" r="4.5" />
      <text className="op-sub" x="462" y="350">Reasoning · orchestration · evidence</text>

      {/* ── COL 3: OUTPUTS (static stack) ────────────────────── */}

      {/* Evidence-linked results */}
      <rect className="op-card" x="848" y="40" width="332" height="104" rx="16" />
      <text className="op-micro" x="870" y="66">AGENT OUTPUT</text>
      <text className="op-title" x="870" y="96">Evidence-linked results</text>
      <text className="op-sub" x="870" y="120">BOM · DFM · citations · release notes</text>

      {/* Engineer approval */}
      <rect className="op-card" x="848" y="158" width="332" height="104" rx="16" />
      <text className="op-micro-accent" x="870" y="184">HUMAN IN THE LOOP</text>
      <g transform="translate(1122,166)">
        <rect width="28" height="28" rx="8" className="op-gate" />
        <g className="op-accent-stroke" transform="translate(0,1)">
          <circle cx="14" cy="11" r="4" />
          <path d="M6 25 c0-4.5 3.8-7 8-7 s8 2.5 8 7" />
        </g>
      </g>
      <text className="op-title" x="870" y="214">Engineer approval</text>
      <text className="op-sub" x="870" y="238">Reviews &amp; approves before release</text>

      {/* Release → CIM Database (PLM) */}
      <rect className="op-card" x="848" y="276" width="332" height="104" rx="16" />
      <text className="op-micro" x="870" y="302">PLM INTEGRATION</text>
      <text className="op-title" x="870" y="332">Release → CIM Database</text>
      <text className="op-sub" x="870" y="356">Written back to PLM</text>

      {/* ── CONNECTORS (left → center → right) ────────────────── */}
      <path className="op-flow" d="M320 92 H420" />
      <path className="op-flow" d="M320 281 H420" />
      <path className="op-flow" d="M740 92 H848" />
      <path className="op-flow" d="M740 210 H848" />
      <path className="op-flow" d="M740 328 H848" />
      <g className="op-arrow">
        <path d="M420 92 l-7 -3.5 l0 7 z" />
        <path d="M420 281 l-7 -3.5 l0 7 z" />
        <path d="M848 92 l-7 -3.5 l0 7 z" />
        <path d="M848 210 l-7 -3.5 l0 7 z" />
        <path d="M848 328 l-7 -3.5 l0 7 z" />
      </g>
    </svg>
  );
}
