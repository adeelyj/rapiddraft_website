// Stylized 16:10 SVG posters — one per module — that visually represent what
// each workflow does. Replaces the leftover screenshots from older videos that
// no longer match the current set of scenarios.
//
// All posters draw inside a 320×200 viewBox and stretch to fill the parent.
// Two visual families share the page palette:
//   - Dark (app-look feel): #1a2941 → #0a1320. Used for in-app scenarios.
//   - Light (Forward-landing feel): #fffaf7 / tinted cream. Used for output-
//     review scenarios.

import type { ComponentType } from 'react'

const SVG_PROPS = {
  viewBox: '0 0 320 200',
  preserveAspectRatio: 'xMidYMid slice' as const,
  className: 'h-full w-full',
} as const

// ============================================================================
// 1. Comments (collaboration) — iso part with numbered comment pins + replies
// ============================================================================

function CommentsPoster() {
  return (
    <svg {...SVG_PROPS}>
      <defs>
        <linearGradient id="comments-bg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#1a2941" />
          <stop offset="100%" stopColor="#0a1320" />
        </linearGradient>
      </defs>
      <rect width="320" height="200" fill="url(#comments-bg)" />

      {/* Stepped iso part */}
      <g stroke="#3b4a64" strokeWidth="1">
        <path d="M 95 75 L 175 75 L 220 55 L 140 55 Z" fill="#2c3e58" />
        <path d="M 95 75 L 95 145 L 175 145 L 175 75 Z" fill="#1c2a3e" />
        <path d="M 175 75 L 220 55 L 220 125 L 175 145 Z" fill="#162234" />
        {/* hole hints */}
        <ellipse cx="125" cy="100" rx="6" ry="6" fill="#0a1320" stroke="#3b4a64" />
        <ellipse cx="155" cy="125" rx="5" ry="5" fill="#0a1320" stroke="#3b4a64" />
      </g>

      {/* Pin lines */}
      <g stroke="#ea580c" strokeWidth="1" strokeDasharray="2 2" opacity="0.7">
        <line x1="125" y1="100" x2="55" y2="55" />
        <line x1="200" y1="95" x2="265" y2="65" />
        <line x1="155" y1="125" x2="220" y2="165" />
      </g>

      {/* Numbered pins */}
      <g fontFamily="ui-sans-serif, system-ui" fontWeight="700" fontSize="12">
        <circle cx="55" cy="55" r="14" fill="#ea580c" />
        <text x="55" y="59" fill="white" textAnchor="middle">1</text>
        <circle cx="265" cy="65" r="14" fill="#ea580c" />
        <text x="265" y="69" fill="white" textAnchor="middle">2</text>
        <circle cx="220" cy="165" r="14" fill="#ea580c" />
        <text x="220" y="169" fill="white" textAnchor="middle">3</text>
      </g>

      {/* Reply dots under each pin */}
      <g fill="#94a3b8">
        <circle cx="46" cy="78" r="2" />
        <circle cx="55" cy="78" r="2" />
        <circle cx="64" cy="78" r="2" />
      </g>

      {/* Label */}
      <text x="20" y="190" fontFamily="ui-monospace" fontSize="9" fill="#94a3b8" letterSpacing="1.5">
        3 THREADS · 2 REVIEWERS
      </text>
    </svg>
  )
}

// ============================================================================
// 2. CO₂ — big number + stacked stage bar
// ============================================================================

function Co2Poster() {
  return (
    <svg {...SVG_PROPS}>
      <defs>
        <linearGradient id="co2-bg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#ecfdf5" />
          <stop offset="100%" stopColor="#d1fae5" />
        </linearGradient>
      </defs>
      <rect width="320" height="200" fill="url(#co2-bg)" />

      <text x="22" y="38" fontFamily="ui-monospace" fontSize="9" fill="#0f8f5e" letterSpacing="1.8" fontWeight="700">
        PER-PART FOOTPRINT
      </text>

      <text x="22" y="105" fontFamily="ui-sans-serif, system-ui" fontSize="64" fontWeight="600" fill="#0f8f5e" letterSpacing="-2.5">
        3.7
      </text>
      <text x="160" y="105" fontFamily="ui-monospace" fontSize="13" fill="#0f8f5e" opacity="0.7">
        kg CO₂eq
      </text>

      <text x="22" y="125" fontFamily="ui-sans-serif, system-ui" fontSize="11" fill="#065f46">
        30% recycled → 1.1 kg saved
      </text>

      {/* Stacked stage bar */}
      <g>
        <rect x="22" y="150" width="135" height="16" rx="8" fill="#0f8f5e" />
        <rect x="157" y="150" width="68" height="16" fill="#2563eb" />
        <rect x="225" y="150" width="14" height="16" fill="#d97706" />
        <rect x="239" y="150" width="59" height="16" fill="#7c8aa1" />
        <rect x="22" y="150" width="276" height="16" rx="8" fill="none" />
        {/* Round the right end with a mask */}
        <rect x="280" y="150" width="18" height="16" rx="8" fill="#7c8aa1" />
      </g>

      <g fontFamily="ui-monospace" fontSize="8" fill="#475569" letterSpacing="1">
        <text x="22" y="180">RAW · 1.8</text>
        <text x="157" y="180">PROC · 1.4</text>
        <text x="222" y="180">TX</text>
        <text x="245" y="180">EoL · 0.3</text>
      </g>
    </svg>
  )
}

// ============================================================================
// 3. DFM — part outline + check/warn/fail pins, footer counts
// ============================================================================

function DfmPoster() {
  return (
    <svg {...SVG_PROPS}>
      <rect width="320" height="200" fill="#fff7f0" />
      <text x="20" y="34" fontFamily="ui-monospace" fontSize="9" fill="#ea580c" letterSpacing="1.5" fontWeight="700">
        DFM · MANUFACTURABILITY
      </text>

      {/* Stylized part top-view: a rectangular plate with cutouts, ribs */}
      <g stroke="#374151" strokeWidth="1.4" fill="#ffffff">
        <rect x="40" y="60" width="240" height="90" rx="4" />
        {/* Internal cutouts */}
        <rect x="60" y="78" width="60" height="34" rx="3" fill="#fde9d4" />
        <rect x="140" y="78" width="44" height="22" rx="3" fill="#fde9d4" />
        <rect x="200" y="78" width="60" height="34" rx="3" fill="#fde9d4" />
        <circle cx="90" cy="135" r="6" fill="#fde9d4" />
        <circle cx="230" cy="135" r="6" fill="#fde9d4" />
      </g>

      {/* Check pins on features */}
      <g>
        {/* Pass — green */}
        <circle cx="90" cy="95" r="9" fill="#0f8f5e" />
        <path d="M 85 95 L 89 99 L 96 91" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="230" cy="95" r="9" fill="#0f8f5e" />
        <path d="M 225 95 L 229 99 L 236 91" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="230" cy="135" r="9" fill="#0f8f5e" />
        <path d="M 225 135 L 229 139 L 236 131" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />

        {/* Warn — amber */}
        <circle cx="162" cy="89" r="9" fill="#d97706" />
        <text x="162" y="93" fontFamily="ui-sans-serif" fontSize="12" fontWeight="800" fill="white" textAnchor="middle">!</text>
        <circle cx="90" cy="135" r="9" fill="#d97706" />
        <text x="90" y="139" fontFamily="ui-sans-serif" fontSize="12" fontWeight="800" fill="white" textAnchor="middle">!</text>

        {/* Fail — red */}
        <circle cx="120" cy="105" r="9" fill="#b91c1c" />
        <path d="M 116 101 L 124 109 M 124 101 L 116 109" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <circle cx="260" cy="100" r="9" fill="#b91c1c" />
        <path d="M 256 96 L 264 104 M 264 96 L 256 104" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </g>

      {/* Footer summary */}
      <g fontFamily="ui-monospace" fontSize="11" fontWeight="700">
        <text x="20" y="184" fill="#0f8f5e">3 pass</text>
        <text x="78" y="184" fill="#7c8aa1">·</text>
        <text x="88" y="184" fill="#d97706">2 warn</text>
        <text x="148" y="184" fill="#7c8aa1">·</text>
        <text x="158" y="184" fill="#b91c1c">2 fail</text>
      </g>
    </svg>
  )
}

// ============================================================================
// 4. Drawings — drawing sheet corner with GD&T frame, datums, dim line
// ============================================================================

function DrawingsPoster() {
  return (
    <svg {...SVG_PROPS}>
      <rect width="320" height="200" fill="#fafaf7" />
      {/* Paper grid hint */}
      <g stroke="#e5e5e0" strokeWidth="0.5">
        <line x1="0" y1="40" x2="320" y2="40" />
        <line x1="0" y1="80" x2="320" y2="80" />
        <line x1="0" y1="120" x2="320" y2="120" />
        <line x1="0" y1="160" x2="320" y2="160" />
        <line x1="40" y1="0" x2="40" y2="200" />
        <line x1="120" y1="0" x2="120" y2="200" />
        <line x1="200" y1="0" x2="200" y2="200" />
        <line x1="280" y1="0" x2="280" y2="200" />
      </g>

      <text x="20" y="30" fontFamily="ui-monospace" fontSize="9" fill="#374151" letterSpacing="1.5" fontWeight="700">
        DWG · GD&amp;T · STACKUPS
      </text>

      {/* Drawing sheet border */}
      <rect x="18" y="42" width="284" height="120" fill="none" stroke="#374151" strokeWidth="1.2" />
      {/* Title block */}
      <rect x="200" y="125" width="102" height="37" fill="none" stroke="#374151" strokeWidth="1.2" />
      <line x1="200" y1="140" x2="302" y2="140" stroke="#374151" strokeWidth="0.6" />
      <text x="205" y="135" fontFamily="ui-monospace" fontSize="6.5" fill="#6b7280">DWG NO · 2453-04</text>
      <text x="205" y="151" fontFamily="ui-monospace" fontSize="6.5" fill="#6b7280">REV A · SHT 1/1</text>

      {/* Part view — a stylized profile */}
      <g stroke="#0f172a" strokeWidth="1.2" fill="none">
        <path d="M 45 110 L 45 70 L 95 70 L 95 60 L 175 60 L 175 70 L 195 70 L 195 110 Z" />
        <circle cx="120" cy="85" r="6" />
        <circle cx="148" cy="85" r="6" />
      </g>

      {/* Datum feature symbols */}
      <g stroke="#0f172a" strokeWidth="1" fill="white">
        <rect x="40" y="118" width="11" height="11" />
        <text x="45.5" y="127" fontFamily="ui-monospace" fontSize="8" fill="#0f172a" textAnchor="middle" fontWeight="700">A</text>
        <rect x="98" y="118" width="11" height="11" />
        <text x="103.5" y="127" fontFamily="ui-monospace" fontSize="8" fill="#0f172a" textAnchor="middle" fontWeight="700">B</text>
      </g>

      {/* GD&T frame */}
      <g stroke="#0f172a" strokeWidth="1" fill="white">
        <rect x="56" y="135" width="64" height="14" />
        <line x1="73" y1="135" x2="73" y2="149" />
        <line x1="96" y1="135" x2="96" y2="149" />
        <line x1="106" y1="135" x2="106" y2="149" />
        <text x="64.5" y="145" fontFamily="ui-monospace" fontSize="9" fill="#0f172a" textAnchor="middle" fontWeight="700">⊥</text>
        <text x="84.5" y="145" fontFamily="ui-monospace" fontSize="8" fill="#0f172a" textAnchor="middle">0.05</text>
        <text x="101" y="145" fontFamily="ui-monospace" fontSize="8" fill="#0f172a" textAnchor="middle" fontWeight="700">A</text>
        <text x="113" y="145" fontFamily="ui-monospace" fontSize="8" fill="#0f172a" textAnchor="middle" fontWeight="700">B</text>
      </g>

      {/* Dim line */}
      <g stroke="#ea580c" strokeWidth="0.8">
        <line x1="45" y1="178" x2="195" y2="178" />
        <line x1="45" y1="174" x2="45" y2="182" />
        <line x1="195" y1="174" x2="195" y2="182" />
      </g>
      <text x="120" y="194" fontFamily="ui-monospace" fontSize="9" fill="#ea580c" textAnchor="middle" fontWeight="700">⌀ 150 ±0.05</text>
    </svg>
  )
}

// ============================================================================
// 5. Batches — mini table with parts + statuses
// ============================================================================

function BatchesPoster() {
  const rows = [
    { name: 'bracket_l_v07', status: 'done', findings: 3, color: '#0f8f5e' },
    { name: 'bracket_r_v04', status: 'done', findings: 1, color: '#0f8f5e' },
    { name: 'enclosure_lid_v05', status: 'done', findings: 5, color: '#d97706' },
    { name: 'rail_outer_v02', status: 'run', findings: null, color: '#2563eb' },
    { name: 'rail_inner_v02', status: 'queue', findings: null, color: '#94a3b8' },
  ]
  return (
    <svg {...SVG_PROPS}>
      <rect width="320" height="200" fill="#fff7f0" />
      <text x="20" y="34" fontFamily="ui-monospace" fontSize="9" fill="#ea580c" letterSpacing="1.5" fontWeight="700">
        BULK REVIEW · 12 PARTS
      </text>

      {/* Table header */}
      <rect x="18" y="48" width="284" height="16" rx="3" fill="#fde9d4" />
      <text x="78" y="59" fontFamily="ui-monospace" fontSize="9" fill="#7c2d12" letterSpacing="0.5" fontWeight="700">PART</text>
      <text x="200" y="59" fontFamily="ui-monospace" fontSize="9" fill="#7c2d12" letterSpacing="0.5" fontWeight="700">STATUS</text>
      <text x="260" y="59" fontFamily="ui-monospace" fontSize="9" fill="#7c2d12" letterSpacing="0.5" fontWeight="700">FIND.</text>

      {/* Rows */}
      {rows.map((row, i) => {
        const y = 70 + i * 22
        return (
          <g key={i}>
            <rect x="18" y={y} width="284" height="20" fill={i % 2 === 0 ? 'white' : '#fffaf7'} stroke="#fde9d4" strokeWidth="0.5" />
            {/* Thumbnail */}
            <rect x="26" y={y + 4} width="22" height="12" rx="2" fill="#ffffff" stroke="#94a3b8" strokeWidth="0.6" />
            <path d={`M 28 ${y + 13} L 33 ${y + 8} L 38 ${y + 11} L 46 ${y + 8} L 46 ${y + 14} L 28 ${y + 14} Z`} fill="#fed7aa" />
            <text x="58" y={y + 13} fontFamily="ui-monospace" fontSize="9" fill="#1c1917">{row.name}</text>
            {/* Status pill */}
            <rect x="195" y={y + 4} width="42" height="12" rx="6" fill={row.color} opacity="0.18" />
            <circle cx="202" cy={y + 10} r="2.5" fill={row.color} />
            <text x="209" y={y + 14} fontFamily="ui-monospace" fontSize="8" fill={row.color} fontWeight="700">{row.status}</text>
            {/* Findings */}
            {row.findings != null && (
              <text x="270" y={y + 13} fontFamily="ui-monospace" fontSize="9" fontWeight="700" fill={row.findings >= 5 ? '#b91c1c' : '#374151'}>
                {row.findings}
              </text>
            )}
            {row.findings == null && (
              <text x="270" y={y + 13} fontFamily="ui-monospace" fontSize="9" fill="#94a3b8">—</text>
            )}
          </g>
        )
      })}

      {/* Progress hint */}
      <rect x="18" y="184" width="284" height="4" rx="2" fill="#fde9d4" />
      <rect x="18" y="184" width="180" height="4" rx="2" fill="#ea580c" />
    </svg>
  )
}

// ============================================================================
// 6. Preprocessing — meshed part + element-quality bars
// ============================================================================

function PreprocessingPoster() {
  return (
    <svg {...SVG_PROPS}>
      <defs>
        <linearGradient id="prep-bg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#162234" />
          <stop offset="100%" stopColor="#0a1320" />
        </linearGradient>
      </defs>
      <rect width="320" height="200" fill="url(#prep-bg)" />

      <text x="20" y="30" fontFamily="ui-monospace" fontSize="9" fill="#60a5fa" letterSpacing="1.5" fontWeight="700">
        LS-DYNA · 184K ELEMENTS
      </text>

      {/* Triangular mesh on a rectangular part */}
      <g stroke="#3b82f6" strokeWidth="0.6" fill="#1e3a5f" opacity="0.85">
        {/* Generate a tessellated grid of triangles */}
        {Array.from({ length: 6 }).flatMap((_, row) =>
          Array.from({ length: 12 }).flatMap((_, col) => {
            const x = 40 + col * 20
            const y = 50 + row * 14
            return [
              <polygon key={`a-${row}-${col}`} points={`${x},${y} ${x + 20},${y} ${x + 10},${y + 14}`} />,
              <polygon key={`b-${row}-${col}`} points={`${x + 20},${y} ${x + 30},${y + 14} ${x + 10},${y + 14}`} />,
            ]
          }),
        )}
      </g>

      {/* Highlight a few elements as flagged (red tint) */}
      <g fill="#dc2626" opacity="0.85" stroke="#b91c1c" strokeWidth="0.6">
        <polygon points="120,78 140,78 130,92" />
        <polygon points="180,92 200,92 190,106" />
        <polygon points="240,64 260,64 250,78" />
      </g>

      {/* Quality histogram strip */}
      <g>
        {[
          { w: 38, color: '#0f8f5e' },
          { w: 34, color: '#0f8f5e' },
          { w: 18, color: '#d97706' },
          { w: 7, color: '#d97706' },
          { w: 2.4, color: '#dc2626' },
          { w: 0.6, color: '#dc2626' },
        ].map((b, i) => (
          <rect
            key={i}
            x={20 + i * 47}
            y={170 - b.w * 1.2}
            width="40"
            height={b.w * 1.2 + 4}
            fill={b.color}
            opacity="0.85"
          />
        ))}
      </g>
      <text x="20" y="190" fontFamily="ui-monospace" fontSize="8" fill="#94a3b8" letterSpacing="0.8">
        QUALITY · 0.84 AVG · 0.6% FLAG
      </text>
    </svg>
  )
}

// ============================================================================
// 7. Model check — findings rows with severity icons
// ============================================================================

function ModelCheckPoster() {
  const findings = [
    { severity: 'fail', title: 'PCOMP 1042 · CORDM missing', color: '#b91c1c' },
    { severity: 'fail', title: 'MAT8 on 24× CHEXA8', color: '#b91c1c' },
    { severity: 'warn', title: 'Jacobian < 0.45 (1,104 elem)', color: '#d97706' },
    { severity: 'warn', title: 'Sub-laminate unbalanced', color: '#d97706' },
  ]
  return (
    <svg {...SVG_PROPS}>
      <rect width="320" height="200" fill="#fffaf7" />
      <text x="20" y="30" fontFamily="ui-monospace" fontSize="9" fill="#ea580c" letterSpacing="1.5" fontWeight="700">
        OPTISTRUCT · 28 CHECKS
      </text>

      {/* Hero number */}
      <text x="20" y="62" fontFamily="ui-sans-serif, system-ui" fontSize="28" fontWeight="600" fill="#1c1917">
        23
      </text>
      <text x="56" y="62" fontFamily="ui-monospace" fontSize="11" fill="#7c8aa1">/ 28 pass</text>

      {/* Severity bar */}
      <g>
        <rect x="160" y="48" width="138" height="14" rx="7" fill="#f3f4f6" />
        <rect x="160" y="48" width="113" height="14" fill="#0f8f5e" />
        <rect x="273" y="48" width="15" height="14" fill="#d97706" />
        <rect x="288" y="48" width="10" height="14" fill="#b91c1c" />
        <rect x="160" y="48" width="138" height="14" rx="7" fill="none" />
      </g>
      <g fontFamily="ui-monospace" fontSize="8" fill="#475569" letterSpacing="0.5">
        <text x="160" y="76">23 PASS</text>
        <text x="220" y="76">3 WARN</text>
        <text x="270" y="76">2 FAIL</text>
      </g>

      {/* Findings list */}
      {findings.map((f, i) => {
        const y = 96 + i * 22
        return (
          <g key={i}>
            <rect x="18" y={y} width="284" height="18" rx="4" fill="white" stroke={f.color} strokeWidth="0.6" opacity="0.6" />
            <circle cx="32" cy={y + 9} r="6" fill={f.color} />
            {f.severity === 'fail' ? (
              <path d={`M 29 ${y + 6} L 35 ${y + 12} M 35 ${y + 6} L 29 ${y + 12}`} stroke="white" strokeWidth="1.4" strokeLinecap="round" />
            ) : (
              <text x="32" y={y + 12} fontFamily="ui-sans-serif" fontSize="10" fontWeight="800" fill="white" textAnchor="middle">!</text>
            )}
            <text x="46" y={y + 13} fontFamily="ui-monospace" fontSize="9" fill="#1c1917">{f.title}</text>
            <text x="280" y={y + 13} fontFamily="ui-monospace" fontSize="8" fill={f.color} fontWeight="700" textAnchor="end" letterSpacing="0.8">
              {f.severity.toUpperCase()}
            </text>
          </g>
        )
      })}
    </svg>
  )
}

// ============================================================================
// 8. Postprocessing — through-thickness ply stack, Puck critical highlighted
// ============================================================================

function PostprocessingPoster() {
  // 16 plies, FI per ply (matches the animation), color by mode.
  const plies = [
    { angle: 0, fi: 0.32, color: '#ea580c' },
    { angle: 45, fi: 0.51, color: '#d97706' },
    { angle: -45, fi: 0.55, color: '#d97706' },
    { angle: 90, fi: 0.72, color: '#ea580c' },
    { angle: 0, fi: 0.38, color: '#ea580c' },
    { angle: 45, fi: 0.61, color: '#d97706' },
    { angle: -45, fi: 0.64, color: '#d97706' },
    { angle: 90, fi: 0.92, color: '#b91c1c' }, // critical
    { angle: 90, fi: 0.84, color: '#ea580c' },
    { angle: -45, fi: 0.62, color: '#d97706' },
    { angle: 45, fi: 0.59, color: '#d97706' },
    { angle: 0, fi: 0.36, color: '#ea580c' },
    { angle: 90, fi: 0.69, color: '#ea580c' },
    { angle: -45, fi: 0.52, color: '#d97706' },
    { angle: 45, fi: 0.49, color: '#d97706' },
    { angle: 0, fi: 0.30, color: '#ea580c' },
  ]
  const rowHeight = 7.5
  const xStart = 100
  const barW = 170

  return (
    <svg {...SVG_PROPS}>
      <rect width="320" height="200" fill="#fffaf7" />
      <text x="20" y="30" fontFamily="ui-monospace" fontSize="9" fill="#ea580c" letterSpacing="1.5" fontWeight="700">
        PUCK · COMPOSITE FI
      </text>
      <text x="20" y="58" fontFamily="ui-sans-serif, system-ui" fontSize="28" fontWeight="600" fill="#b91c1c">0.92</text>
      <text x="68" y="58" fontFamily="ui-monospace" fontSize="11" fill="#7c8aa1">FI</text>
      <text x="20" y="74" fontFamily="ui-monospace" fontSize="9" fill="#374151" letterSpacing="0.5">PLY 8 · 90° · IFF-A</text>
      <text x="20" y="88" fontFamily="ui-monospace" fontSize="8" fill="#b91c1c" letterSpacing="0.5">MoS = 0.09</text>

      {/* Through-thickness stack */}
      {plies.map((p, i) => {
        const y = 50 + i * (rowHeight + 1)
        const isCritical = i === 7
        const w = p.fi * barW
        return (
          <g key={i}>
            {isCritical && <rect x={xStart - 6} y={y - 1} width={barW + 10} height={rowHeight + 2} fill="#fef3c7" />}
            <rect x={xStart} y={y} width={barW} height={rowHeight} fill="#f1f5f9" rx="1" />
            <rect x={xStart} y={y} width={w} height={rowHeight} fill={p.color} rx="1" />
            <text x={xStart - 8} y={y + rowHeight - 1} fontFamily="ui-monospace" fontSize="6.5" fill="#475569" textAnchor="end">
              {p.angle === 0 ? '0°' : p.angle > 0 ? `+${p.angle}` : p.angle}
            </text>
          </g>
        )
      })}

      {/* Right side mode legend */}
      <g fontFamily="ui-monospace" fontSize="7" letterSpacing="0.5">
        <rect x="285" y="52" width="6" height="6" fill="#b91c1c" />
        <text x="295" y="58" fill="#475569">IFF crit</text>
        <rect x="285" y="64" width="6" height="6" fill="#ea580c" />
        <text x="295" y="70" fill="#475569">IFF-A</text>
        <rect x="285" y="76" width="6" height="6" fill="#d97706" />
        <text x="295" y="82" fill="#475569">IFF-B</text>
      </g>
    </svg>
  )
}

// ============================================================================
// Registry
// ============================================================================

export const MODULE_POSTERS: Record<string, ComponentType> = {
  collaboration: CommentsPoster,
  co2: Co2Poster,
  dfm: DfmPoster,
  drawing: DrawingsPoster,
  batch: BatchesPoster,
  'simulation-preprocessing': PreprocessingPoster,
  'simulation-check': ModelCheckPoster,
  'simulation-postprocessing': PostprocessingPoster,
}
