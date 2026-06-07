/* Engineering stack (Platform, AI review layer section).
   Vertical layout: engineering inputs across the top, the full-width RapidDraft
   review layer in the middle, release-ready outputs across the bottom.
   Flat, hairline, single accent, theme-aware via --rd-* tokens, all-Inter text.
   Content per docs/website-spec.md (Platform, Figure / Caption / Alt). */

const INPUTS = ['NX / CATIA / SW', '2D Drawings', 'PDM / PLM', 'Release Package', 'Supplier QA'];
const OUTPUTS = ['DFM Findings', 'First Article Inspection Report', 'BOM', 'Release Gate', 'Audit (VDA, EMPB) Trail'];

// labels too long for one line at the larger font, pre-wrapped to two lines
const LINES: Record<string, string[]> = {
  'First Article Inspection Report': ['First Article', 'Inspection Report'],
  'Audit (VDA, EMPB) Trail': ['Audit (VDA, EMPB)', 'Trail'],
};

const ALT =
  'The engineering stack (NX/CATIA/SW, 2D drawings, PDM/PLM, release package, supplier QA) ' +
  'sits above the RapidDraft review layer; outputs (DFM findings, first-article inspection report, ' +
  'BOM, release gate, audit trail) sit below.';

const VB_W = 1200;
const PAD_X = 30;
const PILL_W = 216;
const PILL_H = 66;
const GAP = (VB_W - PAD_X * 2 - PILL_W * INPUTS.length) / (INPUTS.length - 1);

const IN_Y = 70; // top of input pills
const OUT_Y = 484; // top of output pills
const BAR_Y = 264; // top of the review-layer bar
const BAR_H = 76;
const BAR_W = VB_W - PAD_X * 2;

const pillX = (i: number) => PAD_X + i * (PILL_W + GAP);
const pillCx = (i: number) => pillX(i) + PILL_W / 2;

function Label({ label, cx, cy }: { label: string; cx: number; cy: number }) {
  const lines = LINES[label] ?? [label];
  if (lines.length === 1) {
    return (
      <text x={cx} y={cy} textAnchor="middle" dominantBaseline="central" className="es-label">
        {label}
      </text>
    );
  }
  return (
    <text x={cx} y={cy} textAnchor="middle" className="es-label">
      <tspan x={cx} dy="-0.55em">{lines[0]}</tspan>
      <tspan x={cx} dy="1.2em">{lines[1]}</tspan>
    </text>
  );
}

export default function EngineeringStackFigure() {
  return (
    <div className="w-full" role="img" aria-label={ALT}>
      <svg viewBox="0 0 1200 560" className="block h-auto w-full overflow-visible" aria-hidden="true">
        <style>{`
          .es-pill { fill: var(--rd-surface); stroke: var(--rd-edge); stroke-width: 1; }
          .es-label { fill: var(--rd-head); font-family: 'Inter',sans-serif; font-size: 18px; font-weight: 500; }
          .es-cap { fill: var(--rd-fg-3); font-family: 'Inter',sans-serif; font-size: 16px; font-weight: 600; letter-spacing: 0.1em; }
          .es-flow { stroke: var(--rd-edge); stroke-width: 1.2; fill: none; }
          .es-flow-live { stroke: var(--rd-accent); stroke-width: 1.4; fill: none; stroke-dasharray: 2 9; opacity: 0.75; animation: es-dash 3s linear infinite; }
          .es-flow-live-up { animation-direction: reverse; }
          .es-bar { fill: var(--rd-accent-soft); stroke: var(--rd-accent-hair); stroke-width: 1.2; }
          .es-bar-label { fill: var(--rd-head); font-family: 'Inter',sans-serif; font-weight: 600; font-size: 22px; }
          @keyframes es-dash { to { stroke-dashoffset: -88; } }
          @media (prefers-reduced-motion: reduce) { .es-flow-live { animation: none; } }
        `}</style>

        {/* connectors: inputs -> bar, bar -> outputs */}
        <g>
          {INPUTS.map((label, i) => {
            const cx = pillCx(i);
            const d = `M ${cx} ${IN_Y + PILL_H} C ${cx} ${IN_Y + PILL_H + 60}, ${cx} ${BAR_Y - 60}, ${cx} ${BAR_Y}`;
            return <path key={`in-${label}`} d={d} className="es-flow" />;
          })}
          {OUTPUTS.map((label, i) => {
            const cx = pillCx(i);
            const d = `M ${cx} ${BAR_Y + BAR_H} C ${cx} ${BAR_Y + BAR_H + 60}, ${cx} ${OUT_Y - 60}, ${cx} ${OUT_Y}`;
            return <path key={`out-${label}`} d={d} className="es-flow" />;
          })}
          <path
            d={`M ${pillCx(2)} ${IN_Y + PILL_H} C ${pillCx(2)} ${IN_Y + PILL_H + 60}, ${pillCx(2)} ${BAR_Y - 60}, ${pillCx(2)} ${BAR_Y}`}
            className="es-flow-live es-flow-live-up"
          />
          <path
            d={`M ${pillCx(1)} ${BAR_Y + BAR_H} C ${pillCx(1)} ${BAR_Y + BAR_H + 60}, ${pillCx(1)} ${OUT_Y - 60}, ${pillCx(1)} ${OUT_Y}`}
            className="es-flow-live"
          />
        </g>

        {/* input pills (top) */}
        <text x={VB_W / 2} y={32} textAnchor="middle" className="es-cap">ENGINEERING INPUTS</text>
        {INPUTS.map((label, i) => (
          <g key={`pi-${label}`}>
            <rect x={pillX(i)} y={IN_Y} width={PILL_W} height={PILL_H} rx={12} className="es-pill" />
            <Label label={label} cx={pillCx(i)} cy={IN_Y + PILL_H / 2} />
          </g>
        ))}

        {/* center review-layer bar */}
        <rect x={PAD_X} y={BAR_Y} width={BAR_W} height={BAR_H} rx={14} className="es-bar" />
        <text x={VB_W / 2} y={BAR_Y + BAR_H / 2} textAnchor="middle" dominantBaseline="central" className="es-bar-label">
          RapidDraft: human-in-the-loop AI, grounded in your rules
        </text>

        {/* output pills (bottom) */}
        {OUTPUTS.map((label, i) => (
          <g key={`po-${label}`}>
            <rect x={pillX(i)} y={OUT_Y} width={PILL_W} height={PILL_H} rx={12} className="es-pill" />
            <Label label={label} cx={pillCx(i)} cy={OUT_Y + PILL_H / 2} />
          </g>
        ))}
        <text x={VB_W / 2} y={OUT_Y + PILL_H + 32} textAnchor="middle" className="es-cap">RELEASE-READY OUTPUTS</text>
      </svg>
    </div>
  );
}
