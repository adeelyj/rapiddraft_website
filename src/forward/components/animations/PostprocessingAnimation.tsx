// Animated mockup of "Postprocessing (Visualization)" — Forward-specific module.
// Focus: composite failure post-processing with Puck 2D action-plane criterion.
//
// 5-step timeline:
//  Step 0: solver results loaded, no criterion picked.
//  Step 1: Puck 2D action-plane chosen; strength + inclination card auto-fills.
//  Step 2: failure indices computed; hero FI + mode breakdown appear.
//  Step 3: through-thickness ply profile animates in.
//  Step 4: comparison vs Hashin / Tsai-Wu / Max-stress; MoS verdict.

import { useEffect, useState } from 'react'
import { AlertTriangle, FileBarChart, Layers, Lock, Sigma, TrendingDown } from 'lucide-react'
import type { AnimationProps } from './types'

// Puck failure modes for fiber-reinforced composites:
//   FF      = fiber failure (tension or compression along fibers)
//   IFF-A   = inter-fiber failure, mode A — matrix tension (sigma_2 > 0)
//   IFF-B   = inter-fiber failure, mode B — shear with moderate transverse compression
//   IFF-C   = inter-fiber failure, mode C — transverse compression dominated, inclined failure plane
type PuckMode = 'FF' | 'IFF-A' | 'IFF-B' | 'IFF-C'

const MODE_META: Record<PuckMode, { label: string; color: string; description: string }> = {
  FF: { label: 'FF', color: '#b91c1c', description: 'Fiber failure' },
  'IFF-A': { label: 'IFF-A', color: '#ea580c', description: 'Matrix tension' },
  'IFF-B': { label: 'IFF-B', color: '#d97706', description: 'Shear-dominated' },
  'IFF-C': { label: 'IFF-C', color: '#ca8a04', description: 'Transverse compression' },
}

// Layup [0/45/-45/90]₂s — 16 UD CFRP plies, symmetric.
// FI values are illustrative but ordered as you'd expect for a battery-housing
// lid under a side-pole crash load case: 90° plies see the most matrix tension,
// ±45° see the most in-plane shear, 0° plies are fiber-aligned and safe.
type Ply = { idx: number; angle: number; fi: number; mode: PuckMode }
const LAYUP: Ply[] = [
  { idx: 1, angle: 0, fi: 0.32, mode: 'IFF-A' },
  { idx: 2, angle: 45, fi: 0.51, mode: 'IFF-B' },
  { idx: 3, angle: -45, fi: 0.55, mode: 'IFF-B' },
  { idx: 4, angle: 90, fi: 0.72, mode: 'IFF-A' },
  { idx: 5, angle: 0, fi: 0.38, mode: 'IFF-A' },
  { idx: 6, angle: 45, fi: 0.61, mode: 'IFF-B' },
  { idx: 7, angle: -45, fi: 0.64, mode: 'IFF-B' },
  { idx: 8, angle: 90, fi: 0.92, mode: 'IFF-A' }, // critical
  { idx: 9, angle: 90, fi: 0.84, mode: 'IFF-A' },
  { idx: 10, angle: -45, fi: 0.62, mode: 'IFF-B' },
  { idx: 11, angle: 45, fi: 0.59, mode: 'IFF-B' },
  { idx: 12, angle: 0, fi: 0.36, mode: 'IFF-A' },
  { idx: 13, angle: 90, fi: 0.69, mode: 'IFF-A' },
  { idx: 14, angle: -45, fi: 0.52, mode: 'IFF-B' },
  { idx: 15, angle: 45, fi: 0.49, mode: 'IFF-B' },
  { idx: 16, angle: 0, fi: 0.30, mode: 'IFF-A' },
]

const CRITICAL = LAYUP.reduce((a, b) => (b.fi > a.fi ? b : a))
const MAX_FI = CRITICAL.fi
const MOS = +(1 / MAX_FI - 1).toFixed(2) // Margin of Safety
const TARGET_MOS = 0.15

// Failure-mode breakdown across all 16 plies (percent of plies flagged in each
// mode as their dominant mechanism).
const MODE_BREAKDOWN: { mode: PuckMode; pct: number }[] = [
  { mode: 'FF', pct: 0 },
  { mode: 'IFF-A', pct: 50 }, // 8/16 plies
  { mode: 'IFF-B', pct: 50 }, // 8/16 plies
  { mode: 'IFF-C', pct: 0 },
]

type CriterionRow = {
  id: string
  label: string
  fi: number
  criticalMode: string
  verdict: 'pass' | 'marginal' | 'fail'
}

// Same critical element, four different 2D plane-stress criteria.
// Puck tends to be the most conservative for matrix-tension dominated layups —
// that's the engineering story this view tells.
const CRITERIA: CriterionRow[] = [
  { id: 'puck', label: 'Puck 2D (action-plane)', fi: 0.92, criticalMode: 'IFF-A', verdict: 'fail' },
  { id: 'hashin', label: 'Hashin 2D', fi: 0.83, criticalMode: 'matrix tension', verdict: 'marginal' },
  { id: 'tsai-wu', label: 'Tsai-Wu', fi: 0.85, criticalMode: 'quadratic interaction', verdict: 'marginal' },
  { id: 'max-stress', label: 'Max stress', fi: 0.74, criticalMode: 'σ₂ tension', verdict: 'pass' },
]
const ACTIVE_CRITERION_ID = 'puck'

const CRITERIA_CHIPS = CRITERIA.map((c) => ({ id: c.id, label: c.label.split(' ')[0] }))

function useCountUp(target: number, active: boolean, ms = 700) {
  const [v, setV] = useState(0)
  useEffect(() => {
    if (!active) {
      setV(0)
      return
    }
    const start = performance.now()
    let raf: number
    const tick = (t: number) => {
      const k = Math.min(1, (t - start) / ms)
      const eased = 1 - Math.pow(1 - k, 3)
      setV(target * eased)
      if (k < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target, active, ms])
  return v
}

export function PostprocessingAnimation({ step }: AnimationProps) {
  const showCriterion = step >= 1
  const showResults = step >= 2
  const showLayup = step >= 3
  const showCompare = step >= 4

  const fiAnim = useCountUp(showResults ? MAX_FI : 0, showResults, 900)

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
            <FileBarChart size={13} />
          </span>
          <div>
            <div className="text-[12px] font-semibold leading-tight" style={{ color: 'var(--app-text-1)' }}>
              enclosure_lid_v05.d3plot · Postprocessing
            </div>
            <div className="text-[10px] leading-tight" style={{ color: 'var(--app-text-3)' }}>
              Composite failure · per-ply · Puck action-plane
            </div>
          </div>
        </div>
        <span className="app-chip" style={{ background: 'var(--app-surface-2)' }}>
          <Sigma size={11} />
          {showCriterion ? 'Puck 2D' : 'Criterion not selected'}
        </span>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Inputs */}
        <aside
          className="flex w-72 shrink-0 flex-col gap-4 overflow-y-auto p-5"
          style={{
            borderRight: '1px solid var(--app-border-1)',
            background: 'var(--app-surface-1)',
          }}
        >
          <Section label="Results source">
            <Field label="Solver" value="LS-DYNA" />
            <Field label="File" value="d3plot · state 24" />
            <Field label="Load case" value="side-pole 32 kph" />
          </Section>

          <Section label="Material (UD prepreg)">
            <Field label="System" value="T700 / M21" />
            <Field label="Plies" value={`${LAYUP.length}`} />
            <Field label="Layup" value="[0/45/-45/90]₂s" />
          </Section>

          <Section label="Failure criterion">
            <div className="flex flex-wrap gap-1.5">
              {CRITERIA_CHIPS.map((c) => (
                <Chip key={c.id} label={c.label} active={showCriterion && c.id === ACTIVE_CRITERION_ID} />
              ))}
            </div>
            {showCriterion && (
              <p className="app-fade-in mt-2 text-[11px]" style={{ color: 'var(--app-text-2)' }}>
                Action-plane (Puck 1996), 2D plane stress, FF + IFF modes A/B/C.
              </p>
            )}
          </Section>

          <Section label="Strength card">
            <Field label="XT" value={showCriterion ? '2280 MPa' : '—'} />
            <Field label="XC" value={showCriterion ? '1531 MPa' : '—'} />
            <Field label="YT" value={showCriterion ? '56 MPa' : '—'} />
            <Field label="YC" value={showCriterion ? '200 MPa' : '—'} />
            <Field label="S12" value={showCriterion ? '89 MPa' : '—'} />
          </Section>

          <Section label="Puck inclinations">
            <Field label="p⁺ ⊥∥" value={showCriterion ? '0.30' : '—'} />
            <Field label="p⁻ ⊥∥" value={showCriterion ? '0.20' : '—'} />
          </Section>
        </aside>

        {/* Results */}
        <div
          className="flex flex-1 flex-col gap-4 overflow-y-auto p-5"
          style={{ background: 'var(--app-surface-0)' }}
        >
          {/* Hero — max FI + mode breakdown */}
          <div
            className="rounded-2xl p-5"
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #f3f7fb 100%)',
              border: '1px solid var(--app-border-1)',
            }}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <div
                  className="text-[10.5px] font-bold uppercase tracking-wider"
                  style={{ color: 'var(--app-text-3)' }}
                >
                  Max failure index
                </div>
                <div className="mt-1 flex items-baseline gap-2">
                  <span
                    className="font-display text-[40px] font-semibold tabular-nums leading-none"
                    style={{
                      color: showResults
                        ? MAX_FI >= 1
                          ? 'var(--app-danger-1)'
                          : MAX_FI >= 0.85
                          ? 'var(--app-warning-1)'
                          : 'var(--app-text-1)'
                        : 'var(--app-text-3)',
                    }}
                  >
                    {showResults ? fiAnim.toFixed(2) : '—'}
                  </span>
                  <span className="font-mono text-[12px]" style={{ color: 'var(--app-text-3)' }}>
                    FI · {showResults ? `ply ${CRITICAL.idx} (${CRITICAL.angle}°)` : 'no element flagged'}
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-end gap-1">
                <span className="app-chip" style={{ color: 'var(--app-text-2)' }}>
                  <Layers size={11} />
                  {LAYUP.length} plies
                </span>
                {showResults && (
                  <span
                    className="app-chip app-fade-in"
                    style={{
                      color: MODE_META[CRITICAL.mode].color,
                      borderColor: MODE_META[CRITICAL.mode].color,
                    }}
                  >
                    Critical mode · {MODE_META[CRITICAL.mode].label}
                  </span>
                )}
              </div>
            </div>

            {/* Stacked breakdown bar by failure mode */}
            {showResults && (
              <div className="app-fade-in mt-5">
                <div
                  className="flex h-4 w-full overflow-hidden rounded-full"
                  style={{ background: 'var(--app-surface-3)' }}
                >
                  {MODE_BREAKDOWN.map((b) => (
                    <div
                      key={b.mode}
                      style={{
                        width: `${b.pct}%`,
                        background: MODE_META[b.mode].color,
                        transition: 'width 600ms cubic-bezier(0.22, 1, 0.36, 1)',
                      }}
                    />
                  ))}
                </div>
                <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 sm:grid-cols-4">
                  {MODE_BREAKDOWN.map((b) => (
                    <div key={b.mode} className="flex items-center gap-2">
                      <span
                        className="h-2 w-2 shrink-0 rounded-full"
                        style={{ background: MODE_META[b.mode].color }}
                      />
                      <div className="min-w-0">
                        <div
                          className="text-[10px] uppercase tracking-wide"
                          style={{ color: 'var(--app-text-3)' }}
                        >
                          {MODE_META[b.mode].label}
                        </div>
                        <div
                          className="font-mono text-[12px] font-semibold"
                          style={{ color: 'var(--app-text-1)' }}
                        >
                          {b.pct}%
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Through-thickness ply profile */}
          {showLayup && (
            <div
              className="app-fade-in rounded-2xl p-5"
              style={{ background: 'white', border: '1px solid var(--app-border-1)' }}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div
                    className="text-[10.5px] font-bold uppercase tracking-wider"
                    style={{ color: 'var(--app-text-3)' }}
                  >
                    Through-thickness profile · critical element
                  </div>
                  <p className="mt-1 text-[12px]" style={{ color: 'var(--app-text-2)' }}>
                    FI per ply. Bar colored by dominant failure mode. Critical ply highlighted.
                  </p>
                </div>
              </div>

              <ul className="mt-4 space-y-1">
                {LAYUP.map((p) => {
                  const isCritical = p.idx === CRITICAL.idx
                  const widthPct = (p.fi / 1.0) * 100
                  return (
                    <li
                      key={p.idx}
                      className="grid grid-cols-[42px_42px_1fr_60px_56px] items-center gap-2 rounded px-1.5 py-0.5"
                      style={{
                        background: isCritical ? 'rgba(234, 88, 12, 0.08)' : 'transparent',
                      }}
                    >
                      <span
                        className="font-mono text-[10px] tabular-nums"
                        style={{ color: 'var(--app-text-3)' }}
                      >
                        ply {p.idx.toString().padStart(2, '0')}
                      </span>
                      <span
                        className="font-mono text-[10px] tabular-nums"
                        style={{ color: 'var(--app-text-2)' }}
                      >
                        {p.angle === 0 ? '0°' : p.angle > 0 ? `+${p.angle}°` : `${p.angle}°`}
                      </span>
                      <div
                        className="h-2.5 w-full overflow-hidden rounded-full"
                        style={{ background: 'var(--app-surface-2)' }}
                      >
                        <div
                          style={{
                            width: `${widthPct}%`,
                            background: MODE_META[p.mode].color,
                            height: '100%',
                            transition: 'width 600ms cubic-bezier(0.22, 1, 0.36, 1)',
                          }}
                        />
                      </div>
                      <span
                        className="text-right font-mono text-[10.5px] font-semibold tabular-nums"
                        style={{
                          color: isCritical ? MODE_META[p.mode].color : 'var(--app-text-1)',
                        }}
                      >
                        {p.fi.toFixed(2)}
                      </span>
                      <span
                        className="text-right font-mono text-[9.5px] font-semibold"
                        style={{ color: MODE_META[p.mode].color }}
                      >
                        {MODE_META[p.mode].label}
                      </span>
                    </li>
                  )
                })}
              </ul>
            </div>
          )}

          {/* Criterion comparison */}
          {showCompare && (
            <div
              className="app-fade-in rounded-2xl p-5"
              style={{ background: 'white', border: '1px solid var(--app-border-1)' }}
            >
              <div
                className="text-[10.5px] font-bold uppercase tracking-wider"
                style={{ color: 'var(--app-text-3)' }}
              >
                Same element · four criteria
              </div>
              <p className="mt-1 text-[12px]" style={{ color: 'var(--app-text-2)' }}>
                Puck flags this; the others under-predict matrix-tension failure. Below 1.0 = no failure predicted.
              </p>

              <ul className="mt-4 space-y-2">
                {CRITERIA.map((c) => {
                  const isActive = c.id === ACTIVE_CRITERION_ID
                  const max = Math.max(...CRITERIA.map((x) => x.fi))
                  const widthPct = (c.fi / max) * 100
                  const tone =
                    c.verdict === 'fail'
                      ? 'var(--app-danger-1)'
                      : c.verdict === 'marginal'
                      ? 'var(--app-warning-1)'
                      : 'var(--app-success-1)'
                  return (
                    <li key={c.id} className="grid grid-cols-[170px_1fr_64px] items-center gap-3">
                      <div>
                        <p
                          className="text-[11.5px]"
                          style={{
                            color: isActive ? 'var(--app-accent-1)' : 'var(--app-text-2)',
                            fontWeight: isActive ? 700 : 500,
                          }}
                        >
                          {c.label}
                        </p>
                        <p className="text-[10px]" style={{ color: 'var(--app-text-3)' }}>
                          {c.criticalMode}
                        </p>
                      </div>
                      <div
                        className="h-3 w-full overflow-hidden rounded-full"
                        style={{ background: 'var(--app-surface-2)' }}
                      >
                        <div
                          style={{
                            width: `${widthPct}%`,
                            background: isActive ? 'var(--app-accent-1)' : tone,
                            height: '100%',
                            transition: 'width 600ms cubic-bezier(0.22, 1, 0.36, 1)',
                          }}
                        />
                      </div>
                      <span
                        className="text-right font-mono text-[11.5px] font-semibold tabular-nums"
                        style={{ color: tone }}
                      >
                        {c.fi.toFixed(2)}
                      </span>
                    </li>
                  )
                })}
              </ul>
            </div>
          )}

          {/* End-state strip */}
          {showCompare && (
            <div
              className="app-fade-in flex items-center gap-3 rounded-2xl p-4"
              style={{
                background:
                  'linear-gradient(135deg, rgba(234, 88, 12, 0.10), rgba(234, 88, 12, 0.04))',
                border: '1px solid rgba(234, 88, 12, 0.25)',
              }}
            >
              <AlertTriangle size={20} style={{ color: 'var(--app-warning-1)' }} />
              <div className="flex-1">
                <div
                  className="font-display text-[14px] font-semibold"
                  style={{ color: 'var(--app-text-1)' }}
                >
                  Critical · ply {CRITICAL.idx} ({CRITICAL.angle}°) · {MODE_META[CRITICAL.mode].label} · MoS ={' '}
                  {MOS.toFixed(2)}
                </div>
                <p className="text-[11.5px]" style={{ color: 'var(--app-text-2)' }}>
                  Below the {TARGET_MOS.toFixed(2)} target. Hashin and Tsai-Wu would have passed it — Puck catches the matrix-tension case.
                </p>
              </div>
              <span
                className="app-chip inline-flex items-center gap-1"
                style={{
                  background: 'rgba(234, 88, 12, 0.15)',
                  color: 'var(--app-warning-1)',
                  borderColor: 'rgba(234, 88, 12, 0.3)',
                }}
              >
                <TrendingDown size={11} />
                <Lock size={11} />
                Attached to part
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// ============ Sub-components ============

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div
        className="text-[10px] font-bold uppercase tracking-wider"
        style={{ color: 'var(--app-text-3)' }}
      >
        {label}
      </div>
      <div className="mt-2">{children}</div>
    </div>
  )
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div
      className="flex items-center justify-between border-b py-1.5"
      style={{ borderColor: 'var(--app-border-1)' }}
    >
      <span className="text-[11px]" style={{ color: 'var(--app-text-3)' }}>
        {label}
      </span>
      <span
        className="font-mono text-[11.5px] font-semibold"
        style={{ color: 'var(--app-text-1)' }}
      >
        {value}
      </span>
    </div>
  )
}

function Chip({ label, active }: { label: string; active: boolean }) {
  return (
    <span
      className="inline-flex items-center rounded-full border px-2.5 py-1 text-[10.5px] font-semibold"
      style={
        active
          ? {
              borderColor: 'var(--app-accent-1)',
              background: 'rgba(37, 99, 235, 0.10)',
              color: 'var(--app-accent-1)',
            }
          : {
              borderColor: 'var(--app-border-1)',
              background: 'white',
              color: 'var(--app-text-2)',
            }
      }
    >
      {label}
    </span>
  )
}
