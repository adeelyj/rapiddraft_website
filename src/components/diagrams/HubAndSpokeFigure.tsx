/* Figure 2 — Hub and spoke (Home, Solution section).
   Horizontal hub: engineering inputs on the left, RapidDraft at the center,
   release-ready outputs on the right. Flat, hairline, single accent,
   theme-aware via --rd-* tokens. All text Inter. Content per docs/website-spec.md. */

const INPUTS = ['SOLIDWORKS', 'EPLAN', '2D Drawings', 'CIM Database', 'Release Package', 'Supplier QA'];
const OUTPUTS = ['DFM Findings', 'Inspection Readiness', 'BOM Consistency', 'Release Gates', 'Audit Trail'];

const ALT =
  'Engineering inputs (SOLIDWORKS, EPLAN, 2D drawings, CIM Database, release package, supplier QA) ' +
  'feed into RapidDraft at the center, which produces DFM findings, inspection readiness, ' +
  'BOM consistency, release gates, and an audit trail.';

// layout (viewBox 1200 x 560)
const PILL_W = 236;
const PILL_H = 60;
const L_X = 36;
const R_X = 1200 - 36 - PILL_W; // 928
const HUB_CX = 600;
const HUB_CY = 295;
const HUB_R = 108;
const COL_TOP = 100; // center of the first pill in each column
const COL_BOT = 490; // center of the last pill in each column

const yAt = (count: number, i: number) =>
  count === 1 ? (COL_TOP + COL_BOT) / 2 : COL_TOP + ((COL_BOT - COL_TOP) * i) / (count - 1);

const inY = (i: number) => yAt(INPUTS.length, i);
const outY = (i: number) => yAt(OUTPUTS.length, i);

export default function HubAndSpokeFigure() {
  return (
    <div className="w-full" role="img" aria-label={ALT}>
      <svg viewBox="0 0 1200 560" className="block h-auto w-full overflow-visible" aria-hidden="true">
        <style>{`
          .hs-pill { fill: var(--rd-surface); stroke: var(--rd-edge); stroke-width: 1; }
          .hs-label { fill: var(--rd-head); font-family: 'Inter',sans-serif; font-size: 22px; font-weight: 500; }
          .hs-cap { fill: var(--rd-fg-3); font-family: 'Inter',sans-serif; font-size: 16px; font-weight: 600; letter-spacing: 0.1em; }
          .hs-flow { fill: none; stroke: var(--rd-accent); stroke-width: 1.7; stroke-linecap: round; stroke-dasharray: 1 9; opacity: 0.5; animation: hs-flow 3s linear infinite; }
          .hs-hub-ring { fill: none; stroke: var(--rd-accent); stroke-width: 1.5; }
          .hs-hub-disk { fill: var(--rd-surface); stroke: var(--rd-edge); stroke-width: 1; }
          .hs-hub-name { fill: var(--rd-fg-strong); font-family: 'Inter',sans-serif; font-weight: 600; font-size: 30px; }
          .hs-hub-sub { fill: var(--rd-fg-3); font-family: 'Inter',sans-serif; font-weight: 600; font-size: 15px; letter-spacing: 0.1em; }
          /* inputs are drawn pill->hub, outputs hub->pill, so one negative-offset
             flow makes inputs drift toward the center and outputs drift outward. */
          @keyframes hs-flow { to { stroke-dashoffset: -90; } }
          @media (prefers-reduced-motion: reduce) { .hs-flow { animation: none; } }
          /* The whole SVG scales down with the container, so bump viewBox type on
             narrow screens to keep labels legible after the scale-down. */
          @media (max-width: 700px) {
            .hs-label { font-size: 32px; }
            .hs-cap { font-size: 24px; }
            .hs-hub-name { font-size: 42px; }
            .hs-hub-sub { font-size: 22px; }
          }
        `}</style>

        {/* connectors */}
        <g>
          {INPUTS.map((label, i) => {
            const y = inY(i);
            const d = `M ${L_X + PILL_W} ${y} C ${L_X + PILL_W + 130} ${y}, ${HUB_CX - HUB_R - 70} ${HUB_CY}, ${HUB_CX - HUB_R} ${HUB_CY}`;
            return <path key={`il-${label}`} d={d} className="hs-flow" />;
          })}
          {OUTPUTS.map((label, i) => {
            const y = outY(i);
            const d = `M ${HUB_CX + HUB_R} ${HUB_CY} C ${HUB_CX + HUB_R + 70} ${HUB_CY}, ${R_X - 130} ${y}, ${R_X} ${y}`;
            return <path key={`ol-${label}`} d={d} className="hs-flow" />;
          })}
        </g>

        {/* column captions — aligned (same y), clear of the first pill */}
        <text x={L_X + PILL_W / 2} y={48} textAnchor="middle" className="hs-cap">ENGINEERING INPUTS</text>
        <text x={R_X + PILL_W / 2} y={48} textAnchor="middle" className="hs-cap">RELEASE-READY OUTPUTS</text>

        {/* input pills */}
        {INPUTS.map((label, i) => {
          const y = inY(i);
          return (
            <g key={`i-${label}`}>
              <rect x={L_X} y={y - PILL_H / 2} width={PILL_W} height={PILL_H} rx={10} className="hs-pill" />
              <text x={L_X + PILL_W / 2} y={y} textAnchor="middle" dominantBaseline="central" className="hs-label">
                {label}
              </text>
            </g>
          );
        })}

        {/* output pills */}
        {OUTPUTS.map((label, i) => {
          const y = outY(i);
          return (
            <g key={`o-${label}`}>
              <rect x={R_X} y={y - PILL_H / 2} width={PILL_W} height={PILL_H} rx={10} className="hs-pill" />
              <text x={R_X + PILL_W / 2} y={y} textAnchor="middle" dominantBaseline="central" className="hs-label">
                {label}
              </text>
            </g>
          );
        })}

        {/* center hub */}
        <circle cx={HUB_CX} cy={HUB_CY} r={HUB_R + 16} className="hs-hub-ring" opacity={0.5} />
        <circle cx={HUB_CX} cy={HUB_CY} r={HUB_R} className="hs-hub-disk" />
        <g transform={`translate(${HUB_CX - 18}, ${HUB_CY - 52})`}>
          <rect width="36" height="36" rx="10" fill="var(--rd-accent)" />
          <rect x="9.5" y="11" width="17" height="3.6" rx="1.8" fill="#fff" />
          <rect x="9.5" y="17.5" width="12" height="3.6" rx="1.8" fill="#fff" opacity="0.8" />
          <rect x="9.5" y="24" width="17" height="3.6" rx="1.8" fill="#fff" />
        </g>
        <text x={HUB_CX} y={HUB_CY + 16} textAnchor="middle" className="hs-hub-name">RapidDraft</text>
        <text x={HUB_CX} y={HUB_CY + 42} textAnchor="middle" className="hs-hub-sub">HUMAN-IN-THE-LOOP</text>
      </svg>
    </div>
  );
}
