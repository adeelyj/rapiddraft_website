// Pure-SVG mock CAD viewer with a battery-enclosure-cover part.
// Reused by collaboration / DFM / bulk-review animations. Pins can be
// placed on % coordinates of the 800×500 viewBox.

export function MockCadPart() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 800 500"
      className="h-full w-full"
      style={{ background: 'linear-gradient(180deg, #f7f9fc 0%, #eef3f8 100%)' }}
    >
      <defs>
        <linearGradient id="topFace" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#e8eef6" />
          <stop offset="1" stopColor="#d4dde8" />
        </linearGradient>
        <linearGradient id="frontFace" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f6f8fb" />
          <stop offset="1" stopColor="#cad4e0" />
        </linearGradient>
        <linearGradient id="rightFace" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#bcc8d8" />
          <stop offset="1" stopColor="#94a3b8" />
        </linearGradient>
        <pattern id="viewportGrid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#dde4ee" strokeWidth="0.4" />
        </pattern>
      </defs>

      {/* Viewport grid */}
      <rect width="800" height="500" fill="url(#viewportGrid)" />

      {/* Origin gizmo */}
      <g transform="translate(50, 440)">
        <line x1="0" y1="0" x2="34" y2="0" stroke="#dc2626" strokeWidth="1.5" />
        <line x1="0" y1="0" x2="0" y2="-34" stroke="#0f8f5e" strokeWidth="1.5" />
        <line x1="0" y1="0" x2="-18" y2="14" stroke="#2563eb" strokeWidth="1.5" />
        <text x={38} y={4} fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#dc2626">X</text>
        <text x={4} y={-38} fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#0f8f5e">Y</text>
        <text x={-32} y={20} fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#2563eb">Z</text>
      </g>

      {/* The cover part — large iso projection */}
      <g transform="translate(180, 120)">
        {/* Cabinet projection — coordinates of the box corners */}
        {/* Box dims: w=420, h=180, d=120, skew dx=80, dy=50 */}
        {/* Top face (parallelogram) */}
        <polygon points="0,0 420,0 500,-50 80,-50" fill="url(#topFace)" stroke="#475569" strokeWidth="1.2" />
        {/* Right face (parallelogram) */}
        <polygon points="420,0 500,-50 500,130 420,180" fill="url(#rightFace)" stroke="#475569" strokeWidth="1.2" />
        {/* Front face (rectangle) */}
        <rect x="0" y="0" width="420" height="180" fill="url(#frontFace)" stroke="#475569" strokeWidth="1.4" />

        {/* Front face — internal pocket outline */}
        <rect x="20" y="20" width="380" height="140" fill="none" stroke="#475569" strokeWidth="0.7" strokeDasharray="4,2" opacity="0.7" />

        {/* Front face — ribs */}
        <line x1="20" y1="60" x2="400" y2="60" stroke="#475569" strokeWidth="0.5" />
        <line x1="20" y1="100" x2="400" y2="100" stroke="#475569" strokeWidth="0.5" />
        <line x1="20" y1="140" x2="400" y2="140" stroke="#475569" strokeWidth="0.5" />
        <line x1="120" y1="20" x2="120" y2="160" stroke="#475569" strokeWidth="0.5" />
        <line x1="220" y1="20" x2="220" y2="160" stroke="#475569" strokeWidth="0.5" />
        <line x1="320" y1="20" x2="320" y2="160" stroke="#475569" strokeWidth="0.5" />

        {/* Front face — center bore */}
        <ellipse cx="210" cy="90" rx="32" ry="18" fill="white" stroke="#1f2937" strokeWidth="1.1" />
        <ellipse cx="210" cy="90" rx="20" ry="10" fill="#e8eef6" stroke="#1f2937" strokeWidth="0.7" />

        {/* Mounting holes — 4 corners */}
        <ellipse cx="36" cy="20" rx="6" ry="4" fill="white" stroke="#1f2937" strokeWidth="0.8" />
        <ellipse cx="384" cy="20" rx="6" ry="4" fill="white" stroke="#1f2937" strokeWidth="0.8" />
        <ellipse cx="36" cy="160" rx="6" ry="4" fill="white" stroke="#1f2937" strokeWidth="0.8" />
        <ellipse cx="384" cy="160" rx="6" ry="4" fill="white" stroke="#1f2937" strokeWidth="0.8" />

        {/* Top edge fillet hint */}
        <path d="M 0,0 Q 0,-8 8,-8 L 412,-8 Q 420,-8 420,0" fill="none" stroke="#94a3b8" strokeWidth="0.5" />
      </g>

      {/* Part label */}
      <g transform="translate(20, 30)">
        <rect width="200" height="42" rx="6" fill="white" stroke="#d9e1ea" strokeWidth="0.8" />
        <text x={12} y={18} fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#7c8aa1">PART</text>
        <text x={12} y={34} fontFamily="Segoe UI, sans-serif" fontSize="12" fontWeight="600" fill="#122033">enclosure_lid_v05.step</text>
      </g>

      {/* Viewport controls cluster — top-right */}
      <g transform="translate(700, 30)">
        <rect width="80" height="32" rx="6" fill="white" stroke="#d9e1ea" strokeWidth="0.8" />
        <text x={12} y={20} fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#4d617c">ISO ⌄</text>
        <line x1={48} y1={6} x2={48} y2={26} stroke="#d9e1ea" strokeWidth="0.8" />
        <circle cx={60} cy={16} r={3.5} fill="none" stroke="#4d617c" strokeWidth="1" />
        <circle cx={70} cy={16} r={5} fill="none" stroke="#4d617c" strokeWidth="1" />
      </g>
    </svg>
  )
}
