/* Figure 2 — Hub and spoke (Home, Solution section).
   Horizontal hub: engineering inputs on the left, RapidDraft at the center,
   release-ready outputs on the right. Built original in the RapidDraft v2
   design language (flat, hairline, single accent), theme-aware via --rd-* tokens.
   Content per docs/website-spec.md (Home, Figure / Caption / Alt). */

const INPUTS = ['SOLIDWORKS', 'EPLAN', '2D Drawings', 'CIM Database', 'Release Package', 'Supplier QA'];
const OUTPUTS = ['DFM Findings', 'Inspection Readiness', 'BOM Consistency', 'Release Gates', 'Audit Trail'];

const ALT =
  'Engineering inputs (SOLIDWORKS, EPLAN, 2D drawings, CIM Database, release package, supplier QA) ' +
  'feed into RapidDraft at the center, which produces DFM findings, inspection readiness, ' +
  'BOM consistency, release gates, and an audit trail.';

// layout constants (viewBox 1200 x 520)
const PILL_W = 232;
const PILL_H = 54;
const L_X = 36;
const R_X = 1200 - 36 - PILL_W; // 932
const HUB_CX = 600;
const HUB_CY = 260;
const HUB_R = 92;

const yFor = (count: number, i: number, top: number, bottom: number) =>
  count === 1 ? (top + bottom) / 2 : top + ((bottom - top) * i) / (count - 1);

const inY = (i: number) => yFor(INPUTS.length, i, 56, 464);
const outY = (i: number) => yFor(OUTPUTS.length, i, 80, 440);

export default function HubAndSpokeFigure() {
  return (
    <div className="w-full" role="img" aria-label={ALT}>
      <svg viewBox="0 0 1200 520" className="block h-auto w-full overflow-visible" aria-hidden="true">
        <style>{`
          .hs-pill { fill: var(--rd-surface); stroke: var(--rd-edge); stroke-width: 1; }
          .hs-label { fill: var(--rd-head); font-family: 'Inter',sans-serif; font-size: 14px; font-weight: 500; }
          .hs-cap { fill: var(--rd-fg-3); font-family: 'Inter',sans-serif; font-size: 11px; font-weight: 500; letter-spacing: 0.12em; }
          .hs-flow { stroke: var(--rd-edge); stroke-width: 1; fill: none; }
          .hs-flow-live { stroke: var(--rd-accent); stroke-width: 1.2; fill: none; stroke-dasharray: 2 9; opacity: 0.7; animation: hs-dash 3s linear infinite; }
          .hs-hub-ring { fill: none; stroke: var(--rd-accent); stroke-width: 1.4; }
          .hs-hub-disk { fill: var(--rd-surface); stroke: var(--rd-edge); stroke-width: 1; }
          .hs-hub-name { fill: var(--rd-fg-strong); font-family: 'Inter',sans-serif; font-weight: 600; font-size: 19px; }
          .hs-hub-sub { fill: var(--rd-fg-3); font-family: 'Inter',sans-serif; font-weight: 500; font-size: 11px; letter-spacing: 0.12em; }
          @keyframes hs-dash { to { stroke-dashoffset: -88; } }
          @media (prefers-reduced-motion: reduce) { .hs-flow-live { animation: none; } }
        `}</style>

        {/* connectors: inputs -> hub */}
        <g>
          {INPUTS.map((label, i) => {
            const y = inY(i);
            const d = `M ${L_X + PILL_W} ${y} C ${L_X + PILL_W + 120} ${y}, ${HUB_CX - HUB_R - 60} ${HUB_CY}, ${HUB_CX - HUB_R} ${HUB_CY}`;
            return <path key={`il-${label}`} d={d} className="hs-flow" />;
          })}
          {OUTPUTS.map((label, i) => {
            const y = outY(i);
            const d = `M ${HUB_CX + HUB_R} ${HUB_CY} C ${HUB_CX + HUB_R + 60} ${HUB_CY}, ${R_X - 120} ${y}, ${R_X} ${y}`;
            return <path key={`ol-${label}`} d={d} className="hs-flow" />;
          })}
          {/* a couple of live accent flows */}
          <path
            d={`M ${L_X + PILL_W} ${inY(2)} C ${L_X + PILL_W + 120} ${inY(2)}, ${HUB_CX - HUB_R - 60} ${HUB_CY}, ${HUB_CX - HUB_R} ${HUB_CY}`}
            className="hs-flow-live"
          />
          <path
            d={`M ${HUB_CX + HUB_R} ${HUB_CY} C ${HUB_CX + HUB_R + 60} ${HUB_CY}, ${R_X - 120} ${outY(2)}, ${R_X} ${outY(2)}`}
            className="hs-flow-live"
          />
        </g>

        {/* input pills */}
        <text x={L_X + PILL_W / 2} y={28} textAnchor="middle" className="hs-cap">ENGINEERING INPUTS</text>
        {INPUTS.map((label, i) => {
          const y = inY(i);
          return (
            <g key={`i-${label}`}>
              <rect x={L_X} y={y - PILL_H / 2} width={PILL_W} height={PILL_H} rx={8} className="hs-pill" />
              <text x={L_X + PILL_W / 2} y={y} textAnchor="middle" dominantBaseline="central" className="hs-label">
                {label}
              </text>
            </g>
          );
        })}

        {/* output pills */}
        <text x={R_X + PILL_W / 2} y={28} textAnchor="middle" className="hs-cap">RELEASE-READY OUTPUTS</text>
        {OUTPUTS.map((label, i) => {
          const y = outY(i);
          return (
            <g key={`o-${label}`}>
              <rect x={R_X} y={y - PILL_H / 2} width={PILL_W} height={PILL_H} rx={8} className="hs-pill" />
              <text x={R_X + PILL_W / 2} y={y} textAnchor="middle" dominantBaseline="central" className="hs-label">
                {label}
              </text>
            </g>
          );
        })}

        {/* center hub */}
        <circle cx={HUB_CX} cy={HUB_CY} r={HUB_R + 14} className="hs-hub-ring" opacity={0.45} />
        <circle cx={HUB_CX} cy={HUB_CY} r={HUB_R} className="hs-hub-disk" />
        {/* small brand mark */}
        <g transform={`translate(${HUB_CX - 15}, ${HUB_CY - 40})`}>
          <rect width="30" height="30" rx="8" fill="var(--rd-accent)" />
          <rect x="8" y="9" width="14" height="3" rx="1.5" fill="#fff" />
          <rect x="8" y="14.5" width="10" height="3" rx="1.5" fill="#fff" opacity="0.8" />
          <rect x="8" y="20" width="14" height="3" rx="1.5" fill="#fff" />
        </g>
        <text x={HUB_CX} y={HUB_CY + 12} textAnchor="middle" className="hs-hub-name">RapidDraft</text>
        <text x={HUB_CX} y={HUB_CY + 34} textAnchor="middle" className="hs-hub-sub">HUMAN-IN-THE-LOOP</text>
      </svg>
    </div>
  );
}
