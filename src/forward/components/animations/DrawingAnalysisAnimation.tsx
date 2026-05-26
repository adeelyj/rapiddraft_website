// Animated mockup of RapidDraft's Drawing Analysis (DraftLint).
// Cool-blue app aesthetic, scripted timeline driven by `step` prop.
// Step 0: drawing sheet loads; status pill says "Ready".
// Step 1: scanning indicator runs; finding #1 + #2 pop in, pinned to the sheet.
// Step 2: finding #3 + #4 appear; conflict highlight on the drawing.
// Step 3: summary pill: "4 findings · 2 critical".

import type { AnimationProps } from './types'
import { Search, AlertTriangle, Info, CircleCheck, FileText } from 'lucide-react'
import { MockEngineeringDrawing } from './MockEngineeringDrawing'

type Finding = {
  id: string
  severity: 'critical' | 'warn' | 'info'
  title: string
  detail: string
  pin: { x: number; y: number } // % coordinates on the sheet
  showFrom: number // first step at which this finding is visible
}

const FINDINGS: Finding[] = [
  {
    id: 'GD-01',
    severity: 'critical',
    title: 'Missing datum reference on Ø42 H7 bore',
    detail: 'Datum frame A|B|— is incomplete. Manufacturing reads ambiguous origin.',
    pin: { x: 20, y: 25 }, // TOP VIEW center bore
    showFrom: 1,
  },
  {
    id: 'GD-02',
    severity: 'warn',
    title: 'Tolerance conflicts with stackup target',
    detail: '±0.05 on this rib clashes with the 0.3 mm assembly window declared in note 4.',
    pin: { x: 57.5, y: 24 }, // FRONT VIEW vertical rib
    showFrom: 1,
  },
  {
    id: 'GD-03',
    severity: 'critical',
    title: 'Conflicting GD&T frames — perpendicularity vs. position',
    detail: 'Two frames target the same feature with incompatible interpretations.',
    pin: { x: 15, y: 72 }, // SIDE VIEW GD&T control frames
    showFrom: 2,
  },
  {
    id: 'GD-04',
    severity: 'info',
    title: 'Surface finish symbol present, value missing',
    detail: 'Ra symbol on the seal face has no numeric value next to it.',
    pin: { x: 68.75, y: 18 }, // FRONT VIEW surface finish symbol
    showFrom: 2,
  },
]

const SEV_STYLE: Record<Finding['severity'], { dot: string; label: string; icon: typeof AlertTriangle }> = {
  critical: { dot: '#dc2626', label: 'Critical', icon: AlertTriangle },
  warn: { dot: '#d97706', label: 'Warning', icon: Info },
  info: { dot: '#2563eb', label: 'Info', icon: Info },
}

export function DrawingAnalysisAnimation({ step }: AnimationProps) {
  const visible = FINDINGS.filter((f) => f.showFrom <= step)
  const scanning = step === 1
  const totalCritical = visible.filter((f) => f.severity === 'critical').length

  return (
    <div className="app-look flex h-full w-full flex-col">
      {/* App-style top bar */}
      <div
        className="flex items-center justify-between gap-3 px-5 py-3"
        style={{ borderBottom: '1px solid var(--app-border-1)', background: 'var(--app-surface-1)' }}
      >
        <div className="flex items-center gap-2.5">
          <span
            className="inline-flex h-6 w-6 items-center justify-center rounded-md"
            style={{ background: 'var(--app-accent-1)', color: 'white' }}
          >
            <FileText size={13} />
          </span>
          <div>
            <div className="text-[12px] font-semibold leading-tight" style={{ color: 'var(--app-text-1)' }}>
              enclosure_lid_v04.pdf
            </div>
            <div className="text-[10px] leading-tight" style={{ color: 'var(--app-text-3)' }}>
              Drawing Analysis · sheet 1 of 1
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {step === 0 && (
            <span className="app-chip app-fade-in">
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: 'var(--app-success-1)' }} />
              Ready
            </span>
          )}
          {scanning && (
            <span className="app-chip app-fade-in" style={{ color: 'var(--app-accent-1)' }}>
              <Search size={11} />
              Scanning sheet…
            </span>
          )}
          {step >= 2 && (
            <span
              className="app-chip app-fade-in"
              style={{
                background: 'rgba(220, 38, 38, 0.08)',
                borderColor: 'rgba(220, 38, 38, 0.3)',
                color: '#b91c1c',
              }}
            >
              <AlertTriangle size={11} />
              {visible.length} findings · {totalCritical} critical
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sheet area */}
        <div
          className="relative flex-1 overflow-hidden"
          style={{ background: 'var(--app-surface-0)' }}
        >
          {/* Mock drawing sheet — pure SVG so pins land on real features */}
          <div className="absolute inset-4 overflow-hidden rounded-lg" style={{ background: 'var(--app-surface-1)', border: '1px solid var(--app-border-1)', boxShadow: '0 2px 8px rgba(9, 26, 51, 0.04)' }}>
            <MockEngineeringDrawing />

            {/* Scanning sweep line */}
            {scanning && (
              <div
                className="pointer-events-none absolute inset-y-0 w-0.5"
                style={{
                  background: 'linear-gradient(to bottom, transparent, var(--app-accent-1), transparent)',
                  animation: 'scan-sweep 1.4s ease-in-out infinite',
                  boxShadow: '0 0 16px rgba(37, 99, 235, 0.5)',
                }}
              />
            )}

            {/* Pinned findings */}
            {visible.map((f) => {
              const sev = SEV_STYLE[f.severity]
              return (
                <div
                  key={f.id}
                  className="absolute -translate-x-1/2 -translate-y-1/2 app-fade-in"
                  style={{ left: `${f.pin.x}%`, top: `${f.pin.y}%` }}
                >
                  <span
                    className="app-pulse flex h-6 w-6 items-center justify-center rounded-full font-mono text-[10px] font-bold text-white"
                    style={{ background: sev.dot }}
                  >
                    {f.id.slice(-1)}
                  </span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Findings rail */}
        <aside
          className="flex w-72 shrink-0 flex-col overflow-y-auto"
          style={{
            borderLeft: '1px solid var(--app-border-1)',
            background: 'var(--app-surface-1)',
          }}
        >
          <div className="px-4 py-3" style={{ borderBottom: '1px solid var(--app-border-1)' }}>
            <div className="text-[10px] font-bold uppercase tracking-wider" style={{ color: 'var(--app-text-3)' }}>
              Findings
            </div>
            <div className="mt-0.5 font-mono text-[20px] font-semibold" style={{ color: 'var(--app-text-1)' }}>
              {visible.length}
              <span className="ml-1 text-[12px] font-normal" style={{ color: 'var(--app-text-3)' }}>
                / 4
              </span>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto">
            {visible.length === 0 ? (
              <p className="px-4 py-8 text-center text-[12px]" style={{ color: 'var(--app-text-3)' }}>
                {scanning ? 'Scanning…' : 'Load a drawing to begin.'}
              </p>
            ) : (
              <ul>
                {visible.map((f) => {
                  const sev = SEV_STYLE[f.severity]
                  const Icon = sev.icon
                  return (
                    <li
                      key={f.id}
                      className="app-fade-in px-4 py-3"
                      style={{ borderBottom: '1px solid var(--app-border-1)' }}
                    >
                      <div className="flex items-start gap-2.5">
                        <span
                          className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md text-white"
                          style={{ background: sev.dot }}
                        >
                          <Icon size={11} />
                        </span>
                        <div className="min-w-0">
                          <div className="flex items-baseline gap-1.5">
                            <span
                              className="font-mono text-[10px] font-bold"
                              style={{ color: 'var(--app-text-3)' }}
                            >
                              {f.id}
                            </span>
                            <span
                              className="text-[10px] font-semibold uppercase tracking-wide"
                              style={{ color: sev.dot }}
                            >
                              {sev.label}
                            </span>
                          </div>
                          <div className="mt-0.5 text-[12.5px] font-semibold leading-snug" style={{ color: 'var(--app-text-1)' }}>
                            {f.title}
                          </div>
                          <div className="mt-1 text-[11.5px] leading-snug" style={{ color: 'var(--app-text-2)' }}>
                            {f.detail}
                          </div>
                        </div>
                      </div>
                    </li>
                  )
                })}
              </ul>
            )}
          </div>

          {step >= 3 && (
            <div
              className="app-fade-in px-4 py-3"
              style={{ borderTop: '1px solid var(--app-border-1)', background: 'var(--app-surface-2)' }}
            >
              <div className="flex items-center gap-2 text-[11.5px]" style={{ color: 'var(--app-text-2)' }}>
                <CircleCheck size={13} style={{ color: 'var(--app-success-1)' }} />
                <span>Review package exported · attached to part</span>
              </div>
            </div>
          )}
        </aside>
      </div>

      {/* keyframe for the scan sweep */}
      <style>{`@keyframes scan-sweep { 0% { left: 0%; } 100% { left: 100%; } }`}</style>
    </div>
  )
}
