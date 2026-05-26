// Pure-SVG mock engineering drawing of a battery enclosure cover.
// Stays sharp at any size, scales with the container. Used as the underlay
// for the Drawing Analysis animation so finding pins land on real features
// (bore, rib, GD&T frames, surface-finish symbols).
//
// The viewBox is 0 0 800 500. Feature pin coordinates referenced from
// DrawingAnalysisAnimation should be expressed as % of this box.

export function MockEngineeringDrawing() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 800 500"
      className="h-full w-full"
      style={{ background: 'white' }}
    >
      {/* Page border */}
      <rect x="10" y="10" width="780" height="480" fill="none" stroke="#111827" strokeWidth="2" />
      <rect x="16" y="16" width="768" height="468" fill="none" stroke="#9ca3af" strokeWidth="0.5" />

      {/* View labels */}
      <Label x={30} y={32} text="TOP VIEW" />
      <Label x={330} y={32} text="FRONT VIEW (SECTION A-A)" />
      <Label x={30} y={232} text="SIDE VIEW" />
      <Label x={330} y={232} text="ISOMETRIC" />

      {/* ============ TOP VIEW ============ */}
      <g transform="translate(40, 50)">
        {/* Cover outline (rectangular with rounded corners) */}
        <rect x="0" y="0" width="240" height="150" rx="8" fill="#fafafa" stroke="#111827" strokeWidth="1.2" />
        {/* Internal pocket */}
        <rect x="20" y="20" width="200" height="110" rx="4" fill="none" stroke="#111827" strokeWidth="0.8" />
        {/* Ribs (horizontal) */}
        <line x1="20" y1="50" x2="220" y2="50" stroke="#111827" strokeWidth="0.6" />
        <line x1="20" y1="80" x2="220" y2="80" stroke="#111827" strokeWidth="0.6" />
        <line x1="20" y1="110" x2="220" y2="110" stroke="#111827" strokeWidth="0.6" />
        {/* Center bore Ø42 H7 — pin GD-01 lands here */}
        <CenterMark cx={120} cy={75} r={22} />
        <circle cx="120" cy="75" r="22" fill="#fff" stroke="#111827" strokeWidth="1" />
        <DimLabel x={120} y={75} dx={28} dy={-30} text="∅42 H7" />
        {/* Mounting holes */}
        <Hole cx={32} cy={20} r={5} />
        <Hole cx={208} cy={20} r={5} />
        <Hole cx={32} cy={130} r={5} />
        <Hole cx={208} cy={130} r={5} />

        {/* Top dimensions */}
        <Dim from={[0, -10]} to={[240, -10]} label="240" />
        {/* Right side dimension */}
        <Dim from={[250, 0]} to={[250, 150]} label="150" vertical />
      </g>

      {/* ============ FRONT VIEW ============ */}
      <g transform="translate(340, 50)">
        {/* Side profile rectangle */}
        <rect x="0" y="40" width="240" height="60" fill="#fafafa" stroke="#111827" strokeWidth="1.2" />
        {/* Top flange */}
        <rect x="0" y="30" width="240" height="10" fill="#fafafa" stroke="#111827" strokeWidth="1" />
        {/* Rib (vertical) — pin GD-02 lands here */}
        <line x1="120" y1="40" x2="120" y2="100" stroke="#111827" strokeWidth="0.6" strokeDasharray="3,2" />
        <DimLabel x={132} y={56} text="rib ±0.05" />

        {/* Hidden lines representing internal pocket */}
        <line x1="20" y1="60" x2="220" y2="60" stroke="#111827" strokeWidth="0.5" strokeDasharray="2,2" />
        <line x1="20" y1="90" x2="220" y2="90" stroke="#111827" strokeWidth="0.5" strokeDasharray="2,2" />
        {/* Center line for bore */}
        <line x1="120" y1="25" x2="120" y2="115" stroke="#dc2626" strokeWidth="0.4" strokeDasharray="6,2,2,2" opacity="0.6" />

        {/* Surface finish symbol — pin GD-04 lands here */}
        <SurfaceFinish x={210} y={40} />

        {/* Dimensions */}
        <Dim from={[0, 120]} to={[240, 120]} label="240" />
        <Dim from={[260, 40]} to={[260, 100]} label="60" vertical />
        <Dim from={[260, 30]} to={[260, 40]} label="10" vertical />
      </g>

      {/* ============ SIDE VIEW ============ */}
      <g transform="translate(40, 250)">
        <rect x="0" y="20" width="150" height="60" fill="#fafafa" stroke="#111827" strokeWidth="1.2" />
        <rect x="0" y="10" width="150" height="10" fill="#fafafa" stroke="#111827" strokeWidth="1" />
        {/* Hidden lines */}
        <line x1="20" y1="35" x2="130" y2="35" stroke="#111827" strokeWidth="0.5" strokeDasharray="2,2" />
        <line x1="20" y1="65" x2="130" y2="65" stroke="#111827" strokeWidth="0.5" strokeDasharray="2,2" />

        {/* GD&T feature control frames — pin GD-03 lands here */}
        <GDTFrame x={50} y={100} symbol="⊥" tol="0.1" datum="A" />
        <GDTFrame x={50} y={118} symbol="⌖" tol="0.05" datum="A|B|C" />

        {/* Datum target */}
        <DatumTarget x={150} y={50} label="A" />

        {/* Dimensions */}
        <Dim from={[0, 95]} to={[150, 95]} label="150" />
      </g>

      {/* ============ ISO VIEW ============ */}
      <g transform="translate(340, 250)">
        <IsoBox x={0} y={20} w={180} h={80} d={40} />
        <Label x={0} y={130} text="Material: PP-LGF40 — Body" small />
      </g>

      {/* ============ NOTES COLUMN ============ */}
      <g transform="translate(600, 30)">
        <rect x="0" y="0" width="180" height="340" fill="none" stroke="#111827" strokeWidth="0.8" />
        <rect x="0" y="0" width="180" height="20" fill="#f3f4f6" stroke="#111827" strokeWidth="0.8" />
        <Label x={6} y={14} text="NOTES" small bold />
        {[
          '1. MATERIAL: PP-LGF40, FIBER 40%',
          '2. SURFACE FINISH: Ra 1.6',
          '3. GENERAL TOL: ISO 2768-mK',
          '4. ASSEMBLY WINDOW: 0.3 mm',
          '5. SEAL FACE: SEE FRAME ⌖',
          '6. CTRL DRAWING: DR-04211',
          '7. NO BURRS / SHARP EDGES',
          '8. RECYCLED CONTENT ≥ 30%',
          '9. ROHS / REACH COMPLIANT',
          '10. SEE SHT 2 FOR PRE-MOLD',
        ].map((n, i) => (
          <text
            key={i}
            x={6}
            y={32 + i * 16}
            fontFamily="IBM Plex Mono, monospace"
            fontSize="8.5"
            fill="#1f2937"
          >
            {n}
          </text>
        ))}
      </g>

      {/* ============ TITLE BLOCK ============ */}
      <g transform="translate(20, 400)">
        <rect x="0" y="0" width="560" height="80" fill="none" stroke="#111827" strokeWidth="1.2" />
        {/* Vertical splits */}
        <line x1="200" y1="0" x2="200" y2="80" stroke="#111827" strokeWidth="0.6" />
        <line x1="380" y1="0" x2="380" y2="80" stroke="#111827" strokeWidth="0.6" />
        {/* Horizontal split in right two columns */}
        <line x1="200" y1="40" x2="560" y2="40" stroke="#111827" strokeWidth="0.6" />

        {/* Left cell — RapidDraft mark */}
        <text x={12} y={22} fontFamily="Space Grotesk, sans-serif" fontSize="14" fontWeight="700" fill="#111827">
          RapidDraft
        </text>
        <text x={12} y={40} fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#4b5563">
          ENCLOSURE — LID
        </text>
        <text x={12} y={56} fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#6b7280">
          PROGRAM: FE-EVA-204
        </text>
        <text x={12} y={70} fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#6b7280">
          DESIGNER: A. Y. Jamil
        </text>

        {/* Middle cell */}
        <text x={212} y={16} fontFamily="IBM Plex Mono, monospace" fontSize="7.5" fill="#6b7280">
          DRAWING NO.
        </text>
        <text x={212} y={32} fontFamily="IBM Plex Mono, monospace" fontSize="11" fontWeight="600" fill="#111827">
          DR-04211-LID-04
        </text>
        <text x={212} y={56} fontFamily="IBM Plex Mono, monospace" fontSize="7.5" fill="#6b7280">
          REV · DATE
        </text>
        <text x={212} y={72} fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#111827">
          04 · 2026-05-12
        </text>

        {/* Right cell */}
        <text x={392} y={16} fontFamily="IBM Plex Mono, monospace" fontSize="7.5" fill="#6b7280">
          SCALE
        </text>
        <text x={392} y={32} fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#111827">
          1 : 2
        </text>
        <text x={392} y={56} fontFamily="IBM Plex Mono, monospace" fontSize="7.5" fill="#6b7280">
          SHT · OF
        </text>
        <text x={392} y={72} fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#111827">
          1 of 1
        </text>

        {/* Third-angle projection symbol */}
        <g transform="translate(480, 18)">
          <circle cx={10} cy={10} r={6} fill="none" stroke="#111827" strokeWidth="0.7" />
          <ellipse cx={26} cy={10} rx={10} ry={6} fill="none" stroke="#111827" strokeWidth="0.7" />
          <line x1={2} y1={10} x2={18} y2={10} stroke="#111827" strokeWidth="0.6" />
          <line x1={20} y1={10} x2={38} y2={10} stroke="#111827" strokeWidth="0.6" />
        </g>
      </g>
    </svg>
  )
}

// ============ Sub-components ============

function Label({
  x,
  y,
  text,
  small,
  bold,
}: {
  x: number
  y: number
  text: string
  small?: boolean
  bold?: boolean
}) {
  return (
    <text
      x={x}
      y={y}
      fontFamily="IBM Plex Mono, monospace"
      fontSize={small ? 8 : 10}
      fontWeight={bold ? 700 : 600}
      fill="#1f2937"
      letterSpacing="0.5"
    >
      {text}
    </text>
  )
}

function CenterMark({ cx, cy, r }: { cx: number; cy: number; r: number }) {
  return (
    <g stroke="#dc2626" strokeWidth="0.5" opacity="0.7">
      <line x1={cx - r - 6} y1={cy} x2={cx + r + 6} y2={cy} strokeDasharray="6,2,2,2" />
      <line x1={cx} y1={cy - r - 6} x2={cx} y2={cy + r + 6} strokeDasharray="6,2,2,2" />
    </g>
  )
}

function Hole({ cx, cy, r }: { cx: number; cy: number; r: number }) {
  return (
    <g>
      <circle cx={cx} cy={cy} r={r} fill="#fff" stroke="#111827" strokeWidth="0.8" />
      <CenterMark cx={cx} cy={cy} r={r + 2} />
    </g>
  )
}

function Dim({
  from,
  to,
  label,
  vertical,
}: {
  from: [number, number]
  to: [number, number]
  label: string
  vertical?: boolean
}) {
  const [x1, y1] = from
  const [x2, y2] = to
  const mx = (x1 + x2) / 2
  const my = (y1 + y2) / 2
  return (
    <g stroke="#4b5563" strokeWidth="0.6" fill="#4b5563">
      <line x1={x1} y1={y1} x2={x2} y2={y2} />
      {/* Arrows */}
      <polygon
        points={
          vertical
            ? `${x1},${y1} ${x1 - 3},${y1 + 6} ${x1 + 3},${y1 + 6}`
            : `${x1},${y1} ${x1 + 6},${y1 - 3} ${x1 + 6},${y1 + 3}`
        }
      />
      <polygon
        points={
          vertical
            ? `${x2},${y2} ${x2 - 3},${y2 - 6} ${x2 + 3},${y2 - 6}`
            : `${x2},${y2} ${x2 - 6},${y2 - 3} ${x2 - 6},${y2 + 3}`
        }
      />
      <text
        x={vertical ? mx + 8 : mx}
        y={vertical ? my : my - 4}
        textAnchor={vertical ? 'start' : 'middle'}
        fontFamily="IBM Plex Mono, monospace"
        fontSize="9"
        fill="#1f2937"
        stroke="none"
      >
        {label}
      </text>
    </g>
  )
}

function DimLabel({ x, y, dx, dy, text }: { x: number; y: number; dx?: number; dy?: number; text: string }) {
  return (
    <text
      x={x + (dx ?? 0)}
      y={y + (dy ?? 0)}
      fontFamily="IBM Plex Mono, monospace"
      fontSize="9"
      fill="#1f2937"
    >
      {text}
    </text>
  )
}

function SurfaceFinish({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      {/* the triangle */}
      <polygon points="0,0 4,8 -4,8" fill="none" stroke="#111827" strokeWidth="0.7" />
      {/* missing Ra value — note "?" to make it clearly incomplete */}
      <text x={6} y={6} fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#dc2626">
        Ra ?
      </text>
    </g>
  )
}

function GDTFrame({
  x,
  y,
  symbol,
  tol,
  datum,
}: {
  x: number
  y: number
  symbol: string
  tol: string
  datum?: string
}) {
  // Three-cell control frame: symbol | tolerance | datum
  const cellH = 14
  const cells = [symbol, tol, ...(datum ? [datum] : [])]
  const widths = cells.map((c) => Math.max(18, c.length * 6 + 4))
  let cursor = 0
  return (
    <g>
      {cells.map((c, i) => {
        const w = widths[i]
        const cx = x + cursor
        cursor += w
        return (
          <g key={i}>
            <rect x={cx} y={y} width={w} height={cellH} fill="white" stroke="#111827" strokeWidth="0.7" />
            <text
              x={cx + w / 2}
              y={y + cellH - 4}
              textAnchor="middle"
              fontFamily="IBM Plex Mono, monospace"
              fontSize="9"
              fill="#1f2937"
            >
              {c}
            </text>
          </g>
        )
      })}
    </g>
  )
}

function DatumTarget({ x, y, label }: { x: number; y: number; label: string }) {
  return (
    <g>
      <line x1={x} y1={y} x2={x + 14} y2={y - 8} stroke="#111827" strokeWidth="0.6" />
      <rect x={x + 14} y={y - 14} width="14" height="14" fill="white" stroke="#111827" strokeWidth="0.8" />
      <text
        x={x + 21}
        y={y - 3}
        textAnchor="middle"
        fontFamily="IBM Plex Mono, monospace"
        fontSize="9"
        fontWeight="600"
        fill="#111827"
      >
        {label}
      </text>
    </g>
  )
}

function IsoBox({
  x,
  y,
  w,
  h,
  d,
}: {
  x: number
  y: number
  w: number
  h: number
  d: number
}) {
  // Simple cabinet projection of a thin rectangular cover with a central bore.
  const skew = 0.5 // depth direction angle factor
  const dx = d * skew
  const dy = d * skew * 0.6
  // Corners
  const f = (px: number, py: number): [number, number] => [x + px, y + py]
  const b = (px: number, py: number): [number, number] => [x + px + dx, y + py - dy]

  const fTL = f(0, 0)
  const fTR = f(w, 0)
  const fBR = f(w, h)
  const bTL = b(0, 0)
  const bTR = b(w, 0)
  const bBR = b(w, h)

  return (
    <g stroke="#111827" strokeWidth="0.9" fill="#fafafa">
      {/* Back face hidden */}
      {/* Top face */}
      <polygon points={`${fTL.join(',')} ${fTR.join(',')} ${bTR.join(',')} ${bTL.join(',')}`} fill="#f3f4f6" />
      {/* Right face */}
      <polygon points={`${fTR.join(',')} ${fBR.join(',')} ${bBR.join(',')} ${bTR.join(',')}`} fill="#e5e7eb" />
      {/* Front face */}
      <rect x={fTL[0]} y={fTL[1]} width={w} height={h} />
      {/* Front-face bore */}
      <ellipse cx={fTL[0] + w / 2} cy={fTL[1] + h / 2} rx={16} ry={6} fill="white" stroke="#111827" strokeWidth="0.8" />
      <ellipse cx={fTL[0] + w / 2} cy={fTL[1] + h / 2} rx={8} ry={3} fill="#f3f4f6" stroke="#111827" strokeWidth="0.6" />
    </g>
  )
}
