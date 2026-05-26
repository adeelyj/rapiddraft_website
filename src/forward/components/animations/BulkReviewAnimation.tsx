// Animated mockup of "Bulk review of parts".
// Step 0: drop zone visible — empty workspace.
// Step 1: 12 STEP files drop in; queued list populates.
// Step 2: Processing — first 6 turn "Running", rest still queued.
// Step 3: All complete; sortable findings table with critical / warn breakdown.
// Step 4: Selection chip + "Export review package" CTA.

import { Upload, Loader2, AlertOctagon, AlertTriangle, Package, Check, Filter } from 'lucide-react'
import type { AnimationProps } from './types'

type PartStatus = 'queued' | 'running' | 'complete'

type Part = {
  id: string
  name: string
  // Findings only visible once status === 'complete'
  critical: number
  warn: number
  info: number
}

const PARTS: Part[] = [
  { id: '01', name: 'FE-LID-001.step', critical: 2, warn: 3, info: 1 },
  { id: '02', name: 'FE-LID-002.step', critical: 0, warn: 2, info: 2 },
  { id: '03', name: 'FE-TRAY-101.step', critical: 1, warn: 4, info: 2 },
  { id: '04', name: 'FE-BRACKET-014.step', critical: 0, warn: 1, info: 3 },
  { id: '05', name: 'FE-LID-003.step', critical: 3, warn: 2, info: 0 },
  { id: '06', name: 'FE-COVER-220.step', critical: 0, warn: 0, info: 4 },
  { id: '07', name: 'FE-SHIELD-301.step', critical: 1, warn: 3, info: 1 },
  { id: '08', name: 'FE-LID-004.step', critical: 0, warn: 2, info: 3 },
  { id: '09', name: 'FE-BRACKET-015.step', critical: 1, warn: 1, info: 2 },
  { id: '10', name: 'FE-TRAY-102.step', critical: 0, warn: 4, info: 1 },
  { id: '11', name: 'FE-BUSBAR-880.step', critical: 0, warn: 1, info: 2 },
  { id: '12', name: 'FE-LID-005.step', critical: 0, warn: 2, info: 2 },
]

function statusAt(step: number, idx: number): PartStatus {
  if (step <= 0) return 'queued'
  if (step === 1) return 'queued'
  if (step === 2) {
    // First 6 running, rest queued
    return idx < 6 ? 'running' : 'queued'
  }
  return 'complete'
}

const STATUS_STYLE: Record<PartStatus, { color: string; bg: string; label: string }> = {
  queued: { color: '#7c8aa1', bg: '#f3f4f6', label: 'Queued' },
  running: { color: '#2563eb', bg: 'rgba(37, 99, 235, 0.12)', label: 'Running' },
  complete: { color: '#0f8f5e', bg: 'rgba(15, 143, 94, 0.12)', label: 'Complete' },
}

export function BulkReviewAnimation({ step }: AnimationProps) {
  const filesDropped = step >= 1
  const allComplete = step >= 3
  const selecting = step >= 4

  // Compute summary numbers based on the parts that have completed.
  const completed = PARTS.filter((_, idx) => statusAt(step, idx) === 'complete')
  const totalCritical = completed.reduce((a, p) => a + p.critical, 0)
  const totalWarn = completed.reduce((a, p) => a + p.warn, 0)
  const totalInfo = completed.reduce((a, p) => a + p.info, 0)
  const totalFindings = totalCritical + totalWarn + totalInfo

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
            <Package size={13} />
          </span>
          <div>
            <div className="text-[12px] font-semibold leading-tight" style={{ color: 'var(--app-text-1)' }}>
              Batch Mode · Forward teardown · 2026-Q2
            </div>
            <div className="text-[10px] leading-tight" style={{ color: 'var(--app-text-3)' }}>
              {filesDropped ? `${PARTS.length} parts · auto-DFM applied` : 'Drop STEP files to begin'}
            </div>
          </div>
        </div>
        {selecting && (
          <div className="flex items-center gap-2 app-fade-in">
            <span className="app-chip" style={{ background: 'rgba(37, 99, 235, 0.1)', color: 'var(--app-accent-1)', borderColor: 'rgba(37, 99, 235, 0.3)' }}>
              <Check size={11} />
              {PARTS.length} selected
            </span>
            <button
              type="button"
              className="inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-[11.5px] font-semibold text-white"
              style={{ background: 'var(--app-accent-1)' }}
            >
              <Package size={11} />
              Export review package
            </button>
          </div>
        )}
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Table side */}
        <div className="relative flex-1 overflow-hidden" style={{ background: 'var(--app-surface-0)' }}>
          {/* Empty state / drop zone */}
          {!filesDropped && (
            <div className="absolute inset-6 flex flex-col items-center justify-center rounded-lg border-2 border-dashed app-fade-in"
              style={{ borderColor: 'var(--app-border-2)', background: 'rgba(37, 99, 235, 0.04)' }}
            >
              <span
                className="inline-flex h-12 w-12 items-center justify-center rounded-2xl"
                style={{ background: 'rgba(37, 99, 235, 0.12)', color: 'var(--app-accent-1)' }}
              >
                <Upload size={20} />
              </span>
              <p className="mt-4 font-display text-[18px] font-semibold" style={{ color: 'var(--app-text-1)' }}>
                Drop STEP files here
              </p>
              <p className="mt-1 text-[13px]" style={{ color: 'var(--app-text-3)' }}>
                Or pick a folder. DFM context applied automatically.
              </p>
            </div>
          )}

          {/* Parts table */}
          {filesDropped && (
            <div className="absolute inset-0 flex flex-col">
              {/* Table controls */}
              <div className="flex items-center justify-between gap-3 px-5 py-2.5" style={{ borderBottom: '1px solid var(--app-border-1)', background: 'var(--app-surface-1)' }}>
                <div className="flex items-center gap-2">
                  <span className="app-chip" style={{ background: 'var(--app-surface-2)' }}>
                    <Filter size={11} />
                    All parts
                  </span>
                  {allComplete && (
                    <>
                      <span className="app-chip app-fade-in" style={{ color: '#dc2626', borderColor: 'rgba(220, 38, 38, 0.3)' }}>
                        <AlertOctagon size={11} />
                        Critical only
                      </span>
                      <span className="app-chip app-fade-in" style={{ color: '#d97706', borderColor: 'rgba(217, 119, 6, 0.3)' }}>
                        <AlertTriangle size={11} />
                        Warnings
                      </span>
                    </>
                  )}
                </div>
                <span className="font-mono text-[10px]" style={{ color: 'var(--app-text-3)' }}>
                  sorted by · part name ↑
                </span>
              </div>

              {/* Table body */}
              <div className="flex-1 overflow-y-auto">
                <table className="w-full text-[12px]">
                  <thead>
                    <tr style={{ background: 'var(--app-surface-1)' }}>
                      <th className="w-8 px-3 py-2 text-left" style={{ color: 'var(--app-text-3)', fontWeight: 600 }}>
                        {selecting && (
                          <span
                            className="inline-flex h-3.5 w-3.5 items-center justify-center rounded-sm"
                            style={{ background: 'var(--app-accent-1)' }}
                          >
                            <Check size={9} color="white" />
                          </span>
                        )}
                      </th>
                      <th className="px-3 py-2 text-left" style={{ color: 'var(--app-text-3)', fontWeight: 600 }}>Part</th>
                      <th className="px-3 py-2 text-left" style={{ color: 'var(--app-text-3)', fontWeight: 600 }}>Status</th>
                      <th className="px-3 py-2 text-right" style={{ color: 'var(--app-text-3)', fontWeight: 600 }}>Findings</th>
                    </tr>
                  </thead>
                  <tbody>
                    {PARTS.map((p, idx) => {
                      const status = statusAt(step, idx)
                      const sev = STATUS_STYLE[status]
                      const isComplete = status === 'complete'
                      const isRunning = status === 'running'
                      return (
                        <tr
                          key={p.id}
                          className="app-fade-in"
                          style={{ borderTop: '1px solid var(--app-border-1)' }}
                        >
                          <td className="px-3 py-2">
                            {selecting ? (
                              <span
                                className="inline-flex h-3.5 w-3.5 items-center justify-center rounded-sm"
                                style={{ background: 'var(--app-accent-1)' }}
                              >
                                <Check size={9} color="white" />
                              </span>
                            ) : (
                              <span
                                className="inline-block h-3.5 w-3.5 rounded-sm"
                                style={{ border: '1px solid var(--app-border-2)' }}
                              />
                            )}
                          </td>
                          <td className="px-3 py-2">
                            <div className="flex items-center gap-2">
                              <PartThumb seed={idx} />
                              <span className="font-mono text-[11.5px]" style={{ color: 'var(--app-text-1)' }}>
                                {p.name}
                              </span>
                            </div>
                          </td>
                          <td className="px-3 py-2">
                            <span
                              className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10.5px] font-semibold"
                              style={{ background: sev.bg, color: sev.color }}
                            >
                              {isRunning && <Loader2 size={10} className="animate-spin" />}
                              {sev.label}
                            </span>
                          </td>
                          <td className="px-3 py-2 text-right">
                            {!isComplete ? (
                              <span className="font-mono text-[11px]" style={{ color: 'var(--app-text-3)' }}>
                                —
                              </span>
                            ) : (
                              <div className="inline-flex items-center gap-2">
                                {p.critical > 0 && (
                                  <span className="inline-flex items-center gap-0.5 font-mono text-[11px]" style={{ color: '#dc2626' }}>
                                    <AlertOctagon size={10} />
                                    {p.critical}
                                  </span>
                                )}
                                {p.warn > 0 && (
                                  <span className="inline-flex items-center gap-0.5 font-mono text-[11px]" style={{ color: '#d97706' }}>
                                    <AlertTriangle size={10} />
                                    {p.warn}
                                  </span>
                                )}
                                {p.info > 0 && (
                                  <span className="font-mono text-[11px]" style={{ color: 'var(--app-text-3)' }}>
                                    {p.info} info
                                  </span>
                                )}
                              </div>
                            )}
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>

        {/* Summary rail */}
        <aside
          className="flex w-72 shrink-0 flex-col"
          style={{
            borderLeft: '1px solid var(--app-border-1)',
            background: 'var(--app-surface-1)',
          }}
        >
          <div className="px-4 py-3" style={{ borderBottom: '1px solid var(--app-border-1)' }}>
            <div className="text-[10px] font-bold uppercase tracking-wider" style={{ color: 'var(--app-text-3)' }}>
              Batch summary
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            <div className="rounded-lg p-3" style={{ background: 'var(--app-surface-2)' }}>
              <div className="text-[10px] font-semibold uppercase tracking-wide" style={{ color: 'var(--app-text-3)' }}>
                Parts
              </div>
              <div className="mt-1 font-mono text-[24px] font-semibold" style={{ color: 'var(--app-text-1)' }}>
                {completed.length}
                <span className="ml-1 text-[12px] font-normal" style={{ color: 'var(--app-text-3)' }}>
                  / {PARTS.length}
                </span>
              </div>
            </div>

            <div className="rounded-lg p-3" style={{ background: 'var(--app-surface-2)' }}>
              <div className="text-[10px] font-semibold uppercase tracking-wide" style={{ color: 'var(--app-text-3)' }}>
                Findings
              </div>
              <div className="mt-1 font-mono text-[24px] font-semibold" style={{ color: 'var(--app-text-1)' }}>
                {totalFindings}
              </div>
              <div className="mt-2 flex flex-wrap gap-1.5">
                <span className="inline-flex items-center gap-1 rounded px-1.5 py-0.5 text-[10.5px] font-mono" style={{ background: 'rgba(220, 38, 38, 0.1)', color: '#dc2626' }}>
                  <AlertOctagon size={10} />
                  {totalCritical} critical
                </span>
                <span className="inline-flex items-center gap-1 rounded px-1.5 py-0.5 text-[10.5px] font-mono" style={{ background: 'rgba(217, 119, 6, 0.1)', color: '#d97706' }}>
                  <AlertTriangle size={10} />
                  {totalWarn} warn
                </span>
                <span className="rounded px-1.5 py-0.5 text-[10.5px] font-mono" style={{ background: 'var(--app-surface-3)', color: 'var(--app-text-3)' }}>
                  {totalInfo} info
                </span>
              </div>
            </div>

            {allComplete && (
              <div className="app-fade-in rounded-lg p-3" style={{ background: 'linear-gradient(180deg, rgba(15, 143, 94, 0.10), rgba(15, 143, 94, 0.04))', border: '1px solid rgba(15, 143, 94, 0.25)' }}>
                <div className="text-[10px] font-semibold uppercase tracking-wide" style={{ color: '#0f8f5e' }}>
                  Time saved · illustrative
                </div>
                <div className="mt-1 font-display text-[18px] font-semibold leading-tight" style={{ color: 'var(--app-text-1)' }}>
                  ~17 engineer-hours
                </div>
                <p className="mt-1 text-[11px]" style={{ color: 'var(--app-text-2)' }}>
                  vs. manual per-part review at ~85 min/part.
                </p>
              </div>
            )}
          </div>
        </aside>
      </div>
    </div>
  )
}

// Small thumbnail variants — each "part" gets a slightly different SVG.
function PartThumb({ seed }: { seed: number }) {
  const variants = [
    // rectangular cover
    <rect key="r" x="2" y="4" width="18" height="13" rx="1.5" fill="#cbd5e1" stroke="#475569" strokeWidth="0.8" />,
    // long bar
    <rect key="b" x="1" y="8" width="20" height="5" fill="#cbd5e1" stroke="#475569" strokeWidth="0.8" />,
    // tray w/ ribs
    <g key="t">
      <rect x="2" y="3" width="18" height="14" fill="#cbd5e1" stroke="#475569" strokeWidth="0.8" />
      <line x1="2" y1="8" x2="20" y2="8" stroke="#475569" strokeWidth="0.4" />
      <line x1="2" y1="12" x2="20" y2="12" stroke="#475569" strokeWidth="0.4" />
    </g>,
    // bracket
    <g key="k">
      <polyline points="3,17 3,5 12,5 12,12 19,12" fill="none" stroke="#475569" strokeWidth="1.2" />
    </g>,
  ]
  return (
    <svg width="22" height="20" viewBox="0 0 22 20" className="shrink-0">
      {variants[seed % variants.length]}
    </svg>
  )
}
