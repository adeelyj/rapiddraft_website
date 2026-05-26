// Animated mockup of "Design for Manufacturing Review".
// Reuses the same iso CAD part as Collaborate. Cool-blue app aesthetic.
// Step 0: part loaded, DFM rail idle ("Run DFM" button highlighted).
// Step 1: Run starts — first 3 rules tick through with green pass markers.
// Step 2: Pocket-radius FAIL appears; highlight pulses on the part.
// Step 3: Wall-thickness WARN + tool-access FAIL — two more highlights.
// Step 4: Summary chip: 3 pass · 2 warn · 2 fail. "Attach to part" lights up.

import { Play, Check, AlertTriangle, AlertOctagon, CircleCheck, Paperclip, Cpu } from 'lucide-react'
import type { AnimationProps } from './types'
import { MockCadPart } from './MockCadPart'

type RuleStatus = 'pending' | 'pass' | 'warn' | 'fail'

type Rule = {
  id: string
  name: string
  detail: string
  // status by step: idx is step number, value is the status at that step
  status: RuleStatus[]
  // optional highlight on the part: % coordinates of viewport
  highlight?: { x: number; y: number }
}

const RULES: Rule[] = [
  {
    id: 'R-01',
    name: 'Draft angle ≥ 1°',
    detail: 'All vertical walls cleared with 1.5° draft.',
    status: ['pending', 'pass', 'pass', 'pass', 'pass'],
  },
  {
    id: 'R-02',
    name: 'Mold split compatibility',
    detail: 'Parting line lies on the flange — no undercuts.',
    status: ['pending', 'pass', 'pass', 'pass', 'pass'],
  },
  {
    id: 'R-03',
    name: 'Fastener spacing ≥ 20 mm',
    detail: '4 mounting holes evenly spaced at 32 mm.',
    status: ['pending', 'pass', 'pass', 'pass', 'pass'],
  },
  {
    id: 'R-04',
    name: 'Pocket internal radius ≥ 1.5 mm',
    detail: 'Inner pocket corners modeled with R0.4. Below minimum tool radius for fiber-reinforced PP.',
    status: ['pending', 'pending', 'fail', 'fail', 'fail'],
    highlight: { x: 30, y: 32 },
  },
  {
    id: 'R-05',
    name: 'Wall thickness uniformity (±20%)',
    detail: 'Walls vary 1.2–2.4 mm. Risk of warpage and uneven shrinkage.',
    status: ['pending', 'pending', 'pending', 'warn', 'warn'],
    highlight: { x: 50, y: 55 },
  },
  {
    id: 'R-06',
    name: 'Tool reach (depth / diameter ≤ 6)',
    detail: 'Center bore depth/diameter = 7.2. Will require gun drill or step boring.',
    status: ['pending', 'pending', 'pending', 'fail', 'fail'],
    highlight: { x: 60, y: 50 },
  },
  {
    id: 'R-07',
    name: 'Boss-to-wall thickness ≤ 60%',
    detail: 'Corner bosses at 75% of adjacent wall. Sink marks expected.',
    status: ['pending', 'pending', 'pending', 'warn', 'warn'],
  },
]

const STATUS_STYLE: Record<RuleStatus, { color: string; bg: string; label: string; icon: typeof Check }> = {
  pending: { color: '#94a3b8', bg: '#f3f4f6', label: '—', icon: Cpu },
  pass: { color: '#0f8f5e', bg: 'rgba(15, 143, 94, 0.12)', label: 'PASS', icon: Check },
  warn: { color: '#d97706', bg: 'rgba(217, 119, 6, 0.12)', label: 'WARN', icon: AlertTriangle },
  fail: { color: '#dc2626', bg: 'rgba(220, 38, 38, 0.12)', label: 'FAIL', icon: AlertOctagon },
}

export function DfmAnimation({ step }: AnimationProps) {
  const counts = RULES.reduce(
    (acc, r) => {
      const s = r.status[Math.min(step, r.status.length - 1)]
      acc[s] = (acc[s] ?? 0) + 1
      return acc
    },
    { pending: 0, pass: 0, warn: 0, fail: 0 } as Record<RuleStatus, number>,
  )

  const running = step >= 1 && step < 4
  const finalized = step >= 4

  return (
    <div className="app-look flex h-full w-full flex-col">
      {/* Top bar */}
      <div
        className="flex items-center justify-between gap-3 px-5 py-3"
        style={{ borderBottom: '1px solid var(--app-border-1)', background: 'var(--app-surface-1)' }}
      >
        <div className="flex items-center gap-2.5">
          <span
            className="inline-flex h-6 w-6 items-center justify-center rounded-md text-white"
            style={{ background: 'var(--app-accent-1)' }}
          >
            <Cpu size={13} />
          </span>
          <div>
            <div className="text-[12px] font-semibold leading-tight" style={{ color: 'var(--app-text-1)' }}>
              enclosure_lid_v04.step · DFM Review
            </div>
            <div className="text-[10px] leading-tight" style={{ color: 'var(--app-text-3)' }}>
              Material: PP-LGF40 · process: injection molding
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {step === 0 && (
            <button
              type="button"
              className="app-fade-in inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-[11px] font-semibold text-white app-pulse"
              style={{ background: 'var(--app-accent-1)' }}
            >
              <Play size={11} />
              Run DFM
            </button>
          )}
          {running && (
            <span className="app-chip app-fade-in" style={{ color: 'var(--app-accent-1)' }}>
              <Cpu size={11} />
              Checking {RULES.length} rules…
            </span>
          )}
          {finalized && (
            <span className="app-chip app-fade-in" style={{ background: 'var(--app-surface-2)' }}>
              <CircleCheck size={11} style={{ color: 'var(--app-success-1)' }} />
              <span style={{ color: 'var(--app-text-2)' }}>
                {counts.pass} pass · {counts.warn} warn · {counts.fail} fail
              </span>
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Part viewport */}
        <div className="relative flex-1 overflow-hidden">
          <MockCadPart />

          {/* Issue highlights */}
          {RULES.map((r) => {
            const status = r.status[Math.min(step, r.status.length - 1)]
            if (!r.highlight || (status !== 'fail' && status !== 'warn')) return null
            const sev = STATUS_STYLE[status]
            return (
              <div
                key={r.id}
                className="absolute -translate-x-1/2 -translate-y-1/2 app-fade-in"
                style={{ left: `${r.highlight.x}%`, top: `${r.highlight.y}%` }}
              >
                <span
                  className="app-pulse flex h-7 w-7 items-center justify-center rounded-full font-mono text-[10px] font-bold text-white"
                  style={{ background: sev.color }}
                >
                  {r.id.slice(-2)}
                </span>
              </div>
            )
          })}
        </div>

        {/* Rule rail */}
        <aside
          className="flex w-80 shrink-0 flex-col overflow-y-auto"
          style={{
            borderLeft: '1px solid var(--app-border-1)',
            background: 'var(--app-surface-1)',
          }}
        >
          <div className="px-4 py-3" style={{ borderBottom: '1px solid var(--app-border-1)' }}>
            <div className="text-[10px] font-bold uppercase tracking-wider" style={{ color: 'var(--app-text-3)' }}>
              DFM rules
            </div>
            <div className="mt-0.5 flex items-baseline gap-3">
              <span className="font-mono text-[20px] font-semibold" style={{ color: 'var(--app-text-1)' }}>
                {counts.pass + counts.warn + counts.fail}
                <span className="ml-1 text-[12px] font-normal" style={{ color: 'var(--app-text-3)' }}>
                  / {RULES.length}
                </span>
              </span>
              {finalized && (
                <span className="font-mono text-[10px] font-bold" style={{ color: 'var(--app-danger-1)' }}>
                  {counts.fail} blocker{counts.fail === 1 ? '' : 's'}
                </span>
              )}
            </div>
          </div>

          <ul className="flex-1 overflow-y-auto">
            {RULES.map((r) => {
              const status = r.status[Math.min(step, r.status.length - 1)]
              const sev = STATUS_STYLE[status]
              const Icon = sev.icon
              const surfaced = status !== 'pending'
              return (
                <li
                  key={r.id}
                  className={surfaced ? 'app-fade-in px-4 py-3' : 'px-4 py-3 opacity-50'}
                  style={{ borderBottom: '1px solid var(--app-border-1)' }}
                >
                  <div className="flex items-start gap-2.5">
                    <span
                      className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md"
                      style={{ background: sev.bg, color: sev.color }}
                    >
                      <Icon size={11} />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-baseline justify-between gap-2">
                        <div className="flex items-baseline gap-1.5">
                          <span
                            className="font-mono text-[10px] font-bold"
                            style={{ color: 'var(--app-text-3)' }}
                          >
                            {r.id}
                          </span>
                        </div>
                        <span
                          className="font-mono text-[9.5px] font-bold uppercase tracking-wide"
                          style={{ color: sev.color }}
                        >
                          {sev.label}
                        </span>
                      </div>
                      <div className="mt-0.5 text-[12.5px] font-semibold leading-snug" style={{ color: 'var(--app-text-1)' }}>
                        {r.name}
                      </div>
                      {surfaced && (
                        <div className="mt-1 text-[11.5px] leading-snug" style={{ color: 'var(--app-text-2)' }}>
                          {r.detail}
                        </div>
                      )}
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>

          {finalized && (
            <div
              className="app-fade-in px-4 py-3"
              style={{
                borderTop: '1px solid var(--app-border-1)',
                background: 'var(--app-surface-2)',
              }}
            >
              <button
                type="button"
                className="inline-flex w-full items-center justify-center gap-1.5 rounded-md px-3 py-2 text-[12px] font-semibold text-white"
                style={{ background: 'var(--app-accent-1)' }}
              >
                <Paperclip size={12} />
                Attach findings to part
              </button>
              <p className="mt-2 text-[10.5px] text-center" style={{ color: 'var(--app-text-3)' }}>
                Travels with the part. Supplier and reviewers read the same evidence.
              </p>
            </div>
          )}
        </aside>
      </div>
    </div>
  )
}
