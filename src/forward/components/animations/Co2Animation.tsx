// Animated mockup of "CO₂ / LCA per part" — Forward-specific module.
// 5-step timeline:
//  Step 0: inputs visible (part mass auto-pulled), no material selected yet.
//  Step 1: PP-LGF40 + injection molding selected; per-stage breakdown anim in.
//  Step 2: total result locked: 4.8 kg CO₂eq with stacked breakdown.
//  Step 3: comparison bar chart appears (vs Al / SMC / virgin PP / steel).
//  Step 4: recycled-content slider pushed to 30%; saved 1.1 kg callout.

import { useEffect, useState } from 'react'
import { Leaf, Sigma, Recycle, TrendingDown, Factory } from 'lucide-react'
import type { AnimationProps } from './types'

type Stage = { id: string; label: string; value: number; color: string }

// Lifecycle-stage breakdown for the baseline result (PP-LGF40, 0% recycled).
const STAGES_BASE: Stage[] = [
  { id: 'mat', label: 'Raw material',   value: 2.8, color: '#0f8f5e' },
  { id: 'proc', label: 'Processing',    value: 1.4, color: '#2563eb' },
  { id: 'tx', label: 'Transport',       value: 0.3, color: '#d97706' },
  { id: 'eol', label: 'End of life',    value: 0.3, color: '#7c8aa1' },
]

// Stages at 30% recycled content (matches the 1.1 kg savings callout).
const STAGES_RECYCLED: Stage[] = [
  { id: 'mat', label: 'Raw material',   value: 1.8, color: '#0f8f5e' },
  { id: 'proc', label: 'Processing',    value: 1.4, color: '#2563eb' },
  { id: 'tx', label: 'Transport',       value: 0.2, color: '#d97706' },
  { id: 'eol', label: 'End of life',    value: 0.3, color: '#7c8aa1' },
]

const COMPARISONS = [
  { id: 'pplgf40',   label: 'PP-LGF40',         baseline: 4.8,  isSelected: true,  fillRule: 'recycle' },
  { id: 'smc',       label: 'SMC (carbon)',     baseline: 7.1 },
  { id: 'pp',        label: 'PP virgin',        baseline: 3.6 },
  { id: 'al',        label: 'Aluminum 6061',    baseline: 18.2 },
  { id: 'steel',     label: 'Steel (mild)',     baseline: 22.0 },
]

const MATERIAL_CHIPS = [
  { id: 'pplgf40',   label: 'PP-LGF40',         default: true },
  { id: 'smc',       label: 'SMC' },
  { id: 'al',        label: 'Aluminum' },
  { id: 'steel',     label: 'Steel' },
  { id: 'pp',        label: 'PP virgin' },
]

const PROCESS_CHIPS = [
  { id: 'im',  label: 'Injection mold', default: true },
  { id: 'cm',  label: 'Compression mold' },
  { id: 'st',  label: 'Stamping' },
]

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

export function Co2Animation({ step }: AnimationProps) {
  const stages = step >= 4 ? STAGES_RECYCLED : STAGES_BASE
  const total = step >= 1 ? stages.reduce((a, s) => a + s.value, 0) : 0
  const showBreakdown = step >= 1
  const showComparison = step >= 3
  const recycledPct = step >= 4 ? 30 : 0
  const savedKg = step >= 4 ? +(4.8 - total).toFixed(1) : 0

  const animTotal = useCountUp(total, showBreakdown)

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
            style={{ background: 'var(--app-success-1)' }}
          >
            <Leaf size={13} />
          </span>
          <div>
            <div className="text-[12px] font-semibold leading-tight" style={{ color: 'var(--app-text-1)' }}>
              enclosure_lid_v05.step · CO₂ / LCA
            </div>
            <div className="text-[10px] leading-tight" style={{ color: 'var(--app-text-3)' }}>
              Per-part impact · cradle-to-gate + transport + EoL
            </div>
          </div>
        </div>
        <span className="app-chip" style={{ background: 'var(--app-surface-2)' }}>
          <Sigma size={11} />
          PCR · battery housing
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
          <Section label="Part">
            <Field label="Mass (auto)" value="1.24 kg" />
            <Field label="Volume" value="1 250 cm³" />
          </Section>

          <Section label="Material">
            <div className="flex flex-wrap gap-1.5">
              {MATERIAL_CHIPS.map((m) => (
                <Chip key={m.id} label={m.label} active={!!m.default && step >= 1} />
              ))}
            </div>
          </Section>

          <Section label="Process">
            <div className="flex flex-wrap gap-1.5">
              {PROCESS_CHIPS.map((p) => (
                <Chip key={p.id} label={p.label} active={!!p.default && step >= 1} />
              ))}
            </div>
          </Section>

          <Section label="Recycled content">
            <div className="flex items-center justify-between gap-3">
              <RecycledSlider value={recycledPct} />
              <span className="font-mono text-[11.5px] font-semibold" style={{ color: 'var(--app-text-1)' }}>
                {recycledPct}%
              </span>
            </div>
            {step >= 4 && (
              <div
                className="app-fade-in mt-2 inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-[10.5px] font-semibold"
                style={{
                  background: 'rgba(15, 143, 94, 0.12)',
                  color: 'var(--app-success-1)',
                }}
              >
                <TrendingDown size={11} />
                Saved {savedKg} kg CO₂eq
              </div>
            )}
          </Section>
        </aside>

        {/* Results */}
        <div className="flex flex-1 flex-col gap-4 overflow-y-auto p-5" style={{ background: 'var(--app-surface-0)' }}>
          {/* Hero result */}
          <div
            className="rounded-2xl p-5"
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #f3f7fb 100%)',
              border: '1px solid var(--app-border-1)',
            }}
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[10.5px] font-bold uppercase tracking-wider" style={{ color: 'var(--app-text-3)' }}>
                  Per-part footprint
                </div>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="font-display text-[40px] font-semibold tabular-nums leading-none" style={{ color: showBreakdown ? 'var(--app-text-1)' : 'var(--app-text-3)' }}>
                    {showBreakdown ? animTotal.toFixed(1) : '—'}
                  </span>
                  <span className="font-mono text-[12px]" style={{ color: 'var(--app-text-3)' }}>
                    kg CO₂eq
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-end gap-1">
                <span className="app-chip" style={{ color: 'var(--app-text-2)' }}>
                  <Factory size={11} />
                  PP-LGF40 · injection
                </span>
                {step >= 2 && (
                  <span className="app-chip app-fade-in" style={{ color: 'var(--app-text-2)' }}>
                    1.24 kg part
                  </span>
                )}
              </div>
            </div>

            {/* Stacked breakdown bar */}
            {showBreakdown && (
              <div className="app-fade-in mt-5">
                <div className="flex h-4 w-full overflow-hidden rounded-full" style={{ background: 'var(--app-surface-3)' }}>
                  {stages.map((s) => (
                    <div
                      key={s.id}
                      style={{
                        width: `${(s.value / total) * 100}%`,
                        background: s.color,
                        transition: 'width 600ms cubic-bezier(0.22, 1, 0.36, 1)',
                      }}
                    />
                  ))}
                </div>
                <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 sm:grid-cols-4">
                  {stages.map((s) => (
                    <div key={s.id} className="flex items-center gap-2">
                      <span className="h-2 w-2 shrink-0 rounded-full" style={{ background: s.color }} />
                      <div className="min-w-0">
                        <div className="text-[10px] uppercase tracking-wide" style={{ color: 'var(--app-text-3)' }}>
                          {s.label}
                        </div>
                        <div className="font-mono text-[12px] font-semibold" style={{ color: 'var(--app-text-1)' }}>
                          {s.value.toFixed(1)}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Comparison */}
          {showComparison && (
            <div
              className="app-fade-in rounded-2xl p-5"
              style={{ background: 'white', border: '1px solid var(--app-border-1)' }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[10.5px] font-bold uppercase tracking-wider" style={{ color: 'var(--app-text-3)' }}>
                    Trade space — same part, different material
                  </div>
                  <p className="mt-1 text-[12px]" style={{ color: 'var(--app-text-2)' }}>
                    kg CO₂eq per 1.24 kg part. Selected row is highlighted.
                  </p>
                </div>
              </div>
              <ul className="mt-4 space-y-2">
                {COMPARISONS.map((c) => {
                  const displayed =
                    c.fillRule === 'recycle' && step >= 4 ? total : c.baseline
                  const max = Math.max(...COMPARISONS.map((x) => x.baseline))
                  const widthPct = (displayed / max) * 100
                  return (
                    <li key={c.id} className="grid grid-cols-[120px_1fr_64px] items-center gap-3">
                      <span
                        className="text-[11.5px]"
                        style={{
                          color: c.isSelected ? 'var(--app-accent-1)' : 'var(--app-text-2)',
                          fontWeight: c.isSelected ? 700 : 500,
                        }}
                      >
                        {c.label}
                      </span>
                      <div className="h-3 w-full overflow-hidden rounded-full" style={{ background: 'var(--app-surface-2)' }}>
                        <div
                          style={{
                            width: `${widthPct}%`,
                            background: c.isSelected ? 'var(--app-accent-1)' : 'var(--app-border-2)',
                            height: '100%',
                            transition: 'width 600ms cubic-bezier(0.22, 1, 0.36, 1)',
                          }}
                        />
                      </div>
                      <span className="text-right font-mono text-[11.5px] font-semibold tabular-nums" style={{ color: 'var(--app-text-1)' }}>
                        {displayed.toFixed(1)}
                      </span>
                    </li>
                  )
                })}
              </ul>
            </div>
          )}

          {/* End-state strip */}
          {step >= 4 && (
            <div
              className="app-fade-in flex items-center gap-3 rounded-2xl p-4"
              style={{
                background: 'linear-gradient(135deg, rgba(15, 143, 94, 0.10), rgba(15, 143, 94, 0.04))',
                border: '1px solid rgba(15, 143, 94, 0.25)',
              }}
            >
              <Recycle size={20} style={{ color: 'var(--app-success-1)' }} />
              <div className="flex-1">
                <div className="font-display text-[14px] font-semibold" style={{ color: 'var(--app-text-1)' }}>
                  30% recycled content → −1.1 kg CO₂eq per part
                </div>
                <p className="text-[11.5px]" style={{ color: 'var(--app-text-2)' }}>
                  Same architecture. Just a sourcing decision that's now visible at design time.
                </p>
              </div>
              <span className="app-chip" style={{ background: 'rgba(15, 143, 94, 0.15)', color: 'var(--app-success-1)', borderColor: 'rgba(15, 143, 94, 0.3)' }}>
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
      <div className="text-[10px] font-bold uppercase tracking-wider" style={{ color: 'var(--app-text-3)' }}>
        {label}
      </div>
      <div className="mt-2">{children}</div>
    </div>
  )
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between border-b py-1.5" style={{ borderColor: 'var(--app-border-1)' }}>
      <span className="text-[11px]" style={{ color: 'var(--app-text-3)' }}>
        {label}
      </span>
      <span className="font-mono text-[11.5px] font-semibold" style={{ color: 'var(--app-text-1)' }}>
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

function RecycledSlider({ value }: { value: number }) {
  return (
    <div className="relative h-2 flex-1 rounded-full" style={{ background: 'var(--app-surface-3)' }}>
      <div
        className="absolute inset-y-0 left-0 rounded-full"
        style={{
          width: `${value}%`,
          background: 'var(--app-success-1)',
          transition: 'width 600ms cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      />
      <div
        className="absolute top-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white shadow"
        style={{
          left: `${value}%`,
          background: 'var(--app-success-1)',
          transition: 'left 600ms cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      />
    </div>
  )
}
