/* Anatomy of a finding: a stylized manufacturing drawing with one flagged
   feature, connected to a finding card that traces the issue back to the rule
   and standard it came from, with the engineer keeping the sign-off. Makes the
   "shows its work, not a black box" promise literal. Flat, hairline, single
   accent, theme-aware via --rd-* tokens, all Inter. Labels passed in for EN/DE. */

const FONT = "'Inter',sans-serif";

type Labels = {
  sheet: string; // title-block part line
  finding: string; // eyebrow
  issue: string; // the finding headline
  tracedTo: string; // "Traced to"
  rule: string; // company rule pill
  standard: string; // standard pill
  decision: string; // engineer decision line
};

const DEFAULTS: Labels = {
  sheet: 'BRACKET 4471-A · REV C',
  finding: 'FINDING',
  issue: 'Missing datum on the Ø22 bore',
  tracedTo: 'TRACED TO',
  rule: 'GD&T policy §4.2',
  standard: 'ISO 5459',
  decision: 'Engineer reviews and keeps the sign-off',
};

export default function FindingAnatomyFigure({ labels }: { labels?: Partial<Labels> } = {}) {
  const t = { ...DEFAULTS, ...labels };
  const alt =
    'A manufacturing drawing with one bore flagged by RapidDraft, connected to a finding card: ' +
    t.issue + ', traced to ' + t.rule + ' and ' + t.standard + ', with the engineer keeping the sign-off.';

  return (
    <div className="w-full" role="img" aria-label={alt}>
      <svg viewBox="0 0 1180 540" className="block h-auto w-full" aria-hidden="true">
        <style>{`
          .fa-frame { fill: var(--rd-bg); stroke: var(--rd-hair); stroke-width: 1; }
          .fa-inner { fill: none; stroke: var(--rd-hair); stroke-width: 1; }
          .fa-part { fill: none; stroke: var(--rd-fg-2); stroke-width: 1.8; }
          .fa-hole { fill: var(--rd-bg); stroke: var(--rd-fg-2); stroke-width: 1.6; }
          .fa-dim { stroke: var(--rd-fg-3); stroke-width: 1; }
          .fa-center { stroke: var(--rd-fg-3); stroke-width: 0.8; stroke-dasharray: 5 3; }
          .fa-dim-text { fill: var(--rd-fg-2); font-family: ${FONT}; font-size: 16px; }
          .fa-micro { fill: var(--rd-fg-3); font-family: ${FONT}; font-size: 12px; font-weight: 600; letter-spacing: 1.6px; }
          .fa-micro-accent { fill: var(--rd-accent); font-family: ${FONT}; font-size: 12px; font-weight: 600; letter-spacing: 1.6px; }
          .fa-flag { fill: none; stroke: var(--rd-accent); stroke-width: 2; }
          .fa-flag-soft { fill: var(--rd-accent-soft); }
          .fa-lead { fill: none; stroke: var(--rd-accent); stroke-width: 1.6; stroke-linecap: round; stroke-dasharray: 1 8; opacity: 0.65; animation: fa-flow 3s linear infinite; }
          .fa-card { fill: var(--rd-surface); stroke: var(--rd-accent-hair); stroke-width: 1.3; }
          .fa-title { fill: var(--rd-fg-strong); font-family: ${FONT}; font-size: 23px; font-weight: 600; }
          .fa-body { fill: var(--rd-fg-2); font-family: ${FONT}; font-size: 16px; }
          .fa-pill { fill: var(--rd-bg); stroke: var(--rd-hair); stroke-width: 1; }
          .fa-pill-text { fill: var(--rd-fg); font-family: ${FONT}; font-size: 14.5px; font-weight: 500; }
          .fa-divider { stroke: var(--rd-hair); stroke-width: 1; }
          @keyframes fa-flow { to { stroke-dashoffset: -72; } }
          @media (prefers-reduced-motion: reduce) { .fa-lead { animation: none; } }
          @media (max-width: 720px) {
            .fa-dim-text { font-size: 22px; } .fa-micro, .fa-micro-accent { font-size: 17px; }
            .fa-title { font-size: 31px; } .fa-body { font-size: 22px; } .fa-pill-text { font-size: 20px; }
          }
        `}</style>

        {/* ── LEFT: the drawing sheet ─────────────────────────── */}
        <rect x="40" y="56" width="520" height="428" rx="14" className="fa-frame" />
        <rect x="60" y="76" width="480" height="388" className="fa-inner" />
        {/* title block */}
        <line x1="60" y1="420" x2="540" y2="420" className="fa-divider" />
        <line x1="300" y1="420" x2="300" y2="464" className="fa-divider" />
        <text x="76" y="438" className="fa-micro">{t.sheet}</text>
        <text x="76" y="456" className="fa-micro">RAPIDDRAFT REVIEW</text>
        <text x="316" y="438" className="fa-micro">SCALE 1:2</text>
        <text x="316" y="456" className="fa-micro">SHEET 1/1</text>

        {/* part: an L-bracket with two bores */}
        <path d="M130 140 H430 V220 H230 V340 H130 Z" className="fa-part" />
        {/* top-arm bore — the flagged one */}
        <line x1="332" y1="180" x2="412" y2="180" className="fa-center" />
        <line x1="372" y1="142" x2="372" y2="222" className="fa-center" />
        <circle cx="372" cy="180" r="24" className="fa-hole" />
        {/* lower bore */}
        <line x1="148" y1="288" x2="212" y2="288" className="fa-center" />
        <line x1="180" y1="256" x2="180" y2="320" className="fa-center" />
        <circle cx="180" cy="288" r="18" className="fa-hole" />

        {/* horizontal dimension */}
        <line x1="130" y1="340" x2="130" y2="382" className="fa-dim" />
        <line x1="430" y1="220" x2="430" y2="382" className="fa-dim" />
        <line x1="130" y1="372" x2="430" y2="372" className="fa-dim" />
        <path d="M130 372 l10 -4 v8 Z" fill="var(--rd-fg-3)" />
        <path d="M430 372 l-10 -4 v8 Z" fill="var(--rd-fg-3)" />
        <rect x="254" y="361" width="52" height="22" fill="var(--rd-bg)" />
        <text x="280" y="377" textAnchor="middle" className="fa-dim-text">300</text>

        {/* flag the top-arm bore */}
        <circle cx="372" cy="180" r="37" className="fa-flag-soft" />
        <circle cx="372" cy="180" r="37" className="fa-flag" />

        {/* ── connector: flagged bore -> finding card ─────────── */}
        <path d="M409 180 C 490 180, 540 198, 600 200" className="fa-lead" />

        {/* ── RIGHT: the finding card ─────────────────────────── */}
        <rect x="612" y="108" width="528" height="320" rx="18" className="fa-card" />
        {/* eyebrow */}
        <circle cx="648" cy="153" r="4" className="fa-flag-soft" />
        <circle cx="648" cy="153" r="4" fill="var(--rd-accent)" />
        <text x="664" y="158" className="fa-micro-accent">{t.finding}</text>
        <text x="648" y="204" className="fa-title">{t.issue}</text>
        <line x1="648" y1="230" x2="1104" y2="230" className="fa-divider" />

        {/* traced to */}
        <text x="648" y="266" className="fa-micro">{t.tracedTo}</text>
        <FindingPill x={648} y={282} w={ruleW(t.rule)} label={t.rule} />
        <FindingPill x={648 + ruleW(t.rule) + 12} y={282} w={150} label={t.standard} />
        <line x1="648" y1="350" x2="1104" y2="350" className="fa-divider" />

        {/* decision */}
        <g transform="translate(648, 372)">
          <rect width="26" height="26" rx="8" className="fa-flag-soft" />
          <path d="M7 13.5 l4 4 9 -10" stroke="var(--rd-accent)" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <text x="686" y="390" className="fa-body">{t.decision}</text>
      </svg>
    </div>
  );
}

// rough width estimate so the two trace pills lay out left-to-right
function ruleW(label: string) {
  return Math.max(120, Math.round(label.length * 9.2) + 28);
}

function FindingPill({ x, y, w, label }: { x: number; y: number; w: number; label: string }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={34} rx={9} className="fa-pill" />
      <text x={x + w / 2} y={y + 22} textAnchor="middle" className="fa-pill-text">
        {label}
      </text>
    </g>
  );
}
