// Animated mockup of "Preprocessing (Model Setup)" — Forward-specific module.
// 5-step timeline:
//  Step 0: geometry imported, no solver picked.
//  Step 1: solver + analysis type chosen (LS-DYNA explicit crash); profile auto-fills.
//  Step 2: mesh generated; quality histogram + stats appear.
//  Step 3: material + property cards built from library.
//  Step 4: BCs, contacts, load case applied; deck written; trade-space vs OptiStruct.

import { useEffect, useState } from 'react'
import { AlertCircle, Box, CheckCircle2, Grid3x3, Layers, Lock, Sigma } from 'lucide-react'
import type { AnimationProps } from './types'

type SolverProfile = {
  id: string
  vendor: string // 'HyperMesh + OptiStruct' or 'LS-DYNA'
  shortLabel: string // 'OS · linear', 'LSD · crash'
  analysis: string
  elementType: string
  meshTargetMm: number
  materialCard: string
  contactCard: string
  deckExtension: string
  // Illustrative metrics for the trade-space comparison.
  elements: number
  deckMB: number
  solveLabel: string
}

const SOLVERS: SolverProfile[] = [
  {
    id: 'os-linear',
    vendor: 'HyperMesh + OptiStruct',
    shortLabel: 'OS · linear',
    analysis: 'Implicit linear static',
    elementType: 'CQUAD4 / CHEXA8',
    meshTargetMm: 4.0,
    materialCard: 'MAT1 (linear elastic)',
    contactCard: '(none)',
    deckExtension: '.fem',
    elements: 92_000,
    deckMB: 48,
    solveLabel: '~4 min · 8 cores',
  },
  {
    id: 'os-nl',
    vendor: 'HyperMesh + OptiStruct',
    shortLabel: 'OS · nonlinear',
    analysis: 'Implicit nonlinear (NLSTAT, hardening)',
    elementType: 'CQUAD4 / CHEXA8 + R-elements',
    meshTargetMm: 3.0,
    materialCard: 'MATS1 (plastic, hardening)',
    contactCard: 'CGAP friction',
    deckExtension: '.fem',
    elements: 162_000,
    deckMB: 124,
    solveLabel: '~6 h · 16 cores',
  },
  {
    id: 'lsd-crash',
    vendor: 'LS-DYNA',
    shortLabel: 'LSD · crash',
    analysis: 'Explicit dynamics (crash)',
    elementType: 'BT shells / 1-pt brick',
    meshTargetMm: 5.0,
    materialCard: '*MAT_024 piecewise-linear plasticity',
    contactCard: '*CONTACT_AUTOMATIC_SINGLE_SURFACE',
    deckExtension: '.key',
    elements: 184_000,
    deckMB: 280,
    solveLabel: '~12 h · 32 cores',
  },
]

// The solver the demo storyline picks at step 1.
const ACTIVE_ID = 'lsd-crash'
const ACTIVE = SOLVERS.find((s) => s.id === ACTIVE_ID)!

// Element-quality histogram for the LS-DYNA crash mesh. Percentages sum to 100.
// Colors: green = good (≥0.7), amber = marginal (0.5–0.7), red = fail (<0.5).
const QUALITY_BINS = [
  { label: '> 0.9', pct: 38, color: '#0f8f5e' },
  { label: '0.8–0.9', pct: 34, color: '#0f8f5e' },
  { label: '0.7–0.8', pct: 18, color: '#d97706' },
  { label: '0.6–0.7', pct: 7, color: '#d97706' },
  { label: '0.5–0.6', pct: 2.4, color: '#dc2626' },
  { label: '< 0.5', pct: 0.6, color: '#dc2626' },
]

const MESH_STATS = {
  elements: 184_000,
  avgQuality: 0.84,
  failingPct: 0.6,
  warpageMaxDeg: 6.2,
  jacobianMin: 0.41,
}

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

export function PreprocessingAnimation({ step }: AnimationProps) {
  const showSolver = step >= 1
  const showMesh = step >= 2
  const showMaterial = step >= 3
  const showBcs = step >= 4

  const elementCountAnim = useCountUp(MESH_STATS.elements, showMesh, 900)

  const checklist = [
    {
      label: 'Solver & analysis',
      detail: showSolver ? ACTIVE.shortLabel : 'not selected',
      done: showSolver,
    },
    {
      label: 'Mesh generated',
      detail: showMesh ? `${(elementCountAnim / 1000).toFixed(0)}k elements` : '—',
      done: showMesh,
    },
    {
      label: 'Materials & properties',
      detail: showMaterial ? ACTIVE.materialCard.split(' ')[0] : '—',
      done: showMaterial,
    },
    {
      label: 'BCs, contacts, loads',
      detail: showBcs ? '3 items' : '—',
      done: showBcs,
    },
  ]

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
            <Grid3x3 size={13} />
          </span>
          <div>
            <div className="text-[12px] font-semibold leading-tight" style={{ color: 'var(--app-text-1)' }}>
              enclosure_lid_v05.step · Preprocessing
            </div>
            <div className="text-[10px] leading-tight" style={{ color: 'var(--app-text-3)' }}>
              Mesh · materials · BCs · deck write-out
            </div>
          </div>
        </div>
        <span className="app-chip" style={{ background: 'var(--app-surface-2)' }}>
          <Box size={11} />
          {showSolver ? ACTIVE.vendor : 'Solver not selected'}
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
          <Section label="Geometry">
            <Field label="Part" value="enclosure_lid_v05" />
            <Field label="Surfaces" value="312" />
            <Field label="Internal holes" value="3" />
          </Section>

          <Section label="Solver / analysis">
            <div className="flex flex-wrap gap-1.5">
              {SOLVERS.map((s) => (
                <Chip key={s.id} label={s.shortLabel} active={showSolver && s.id === ACTIVE_ID} />
              ))}
            </div>
            {showSolver && (
              <p className="app-fade-in mt-2 text-[11px]" style={{ color: 'var(--app-text-2)' }}>
                {ACTIVE.analysis}
              </p>
            )}
          </Section>

          <Section label="Mesh target">
            <Field label="Element size" value={showSolver ? `${ACTIVE.meshTargetMm} mm` : '—'} />
            <Field label="Formulation" value={showSolver ? ACTIVE.elementType : '—'} />
          </Section>

          <Section label="Materials">
            <div className="flex flex-wrap gap-1.5">
              <Chip label="Steel S355" active={showMaterial} />
              <Chip label="Al 6061-T6" active={false} />
              <Chip label="PP-LGF40" active={false} />
            </div>
          </Section>

          <Section label="Contacts">
            <p className="text-[11px]" style={{ color: 'var(--app-text-2)' }}>
              {showBcs ? ACTIVE.contactCard : '—'}
            </p>
          </Section>
        </aside>

        {/* Results */}
        <div
          className="flex flex-1 flex-col gap-4 overflow-y-auto p-5"
          style={{ background: 'var(--app-surface-0)' }}
        >
          {/* Hero readiness checklist */}
          <div
            className="rounded-2xl p-5"
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #f3f7fb 100%)',
              border: '1px solid var(--app-border-1)',
            }}
          >
            <div className="flex items-center justify-between">
              <div>
                <div
                  className="text-[10.5px] font-bold uppercase tracking-wider"
                  style={{ color: 'var(--app-text-3)' }}
                >
                  Setup progress
                </div>
                <div className="mt-1 flex items-baseline gap-2">
                  <span
                    className="font-display text-[40px] font-semibold tabular-nums leading-none"
                    style={{ color: 'var(--app-text-1)' }}
                  >
                    {checklist.filter((c) => c.done).length}
                  </span>
                  <span className="font-mono text-[12px]" style={{ color: 'var(--app-text-3)' }}>
                    / {checklist.length} stages
                  </span>
                </div>
              </div>
              <span className="app-chip" style={{ color: 'var(--app-text-2)' }}>
                <Sigma size={11} />
                {showSolver ? ACTIVE.shortLabel : 'no solver'}
              </span>
            </div>

            <ul className="mt-5 space-y-2.5">
              {checklist.map((item) => (
                <li key={item.label} className="flex items-center gap-3">
                  {item.done ? (
                    <CheckCircle2 size={16} style={{ color: 'var(--app-success-1)' }} />
                  ) : (
                    <span
                      className="h-4 w-4 rounded-full border-2"
                      style={{ borderColor: 'var(--app-border-2)' }}
                    />
                  )}
                  <span
                    className="text-[12px] font-semibold"
                    style={{ color: item.done ? 'var(--app-text-1)' : 'var(--app-text-3)' }}
                  >
                    {item.label}
                  </span>
                  <span className="ml-auto font-mono text-[11px]" style={{ color: 'var(--app-text-2)' }}>
                    {item.detail}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Mesh quality */}
          {showMesh && (
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
                    Mesh quality
                  </div>
                  <p className="mt-1 text-[12px]" style={{ color: 'var(--app-text-2)' }}>
                    Element quality histogram. {MESH_STATS.failingPct}% fail Jacobian threshold.
                  </p>
                </div>
                <div
                  className="flex items-center gap-1.5 text-[11px] font-semibold"
                  style={{ color: 'var(--app-warning-1)' }}
                >
                  <AlertCircle size={12} />
                  {MESH_STATS.failingPct}% flagged
                </div>
              </div>

              {/* Histogram */}
              <div className="mt-4 flex h-20 items-end gap-1.5">
                {QUALITY_BINS.map((b, i) => (
                  <div key={i} className="flex flex-1 flex-col items-center gap-1">
                    <div
                      className="w-full rounded-t-sm"
                      style={{
                        height: `${(b.pct / 40) * 100}%`,
                        background: b.color,
                        transition: 'height 600ms cubic-bezier(0.22, 1, 0.36, 1)',
                      }}
                    />
                    <span className="text-[9px]" style={{ color: 'var(--app-text-3)' }}>
                      {b.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                <Stat label="Elements" value={`${(elementCountAnim / 1000).toFixed(0)}k`} />
                <Stat label="Avg quality" value={MESH_STATS.avgQuality.toFixed(2)} />
                <Stat label="Warpage max" value={`${MESH_STATS.warpageMaxDeg}°`} />
                <Stat label="Jacobian min" value={MESH_STATS.jacobianMin.toFixed(2)} />
              </div>
            </div>
          )}

          {/* Material card */}
          {showMaterial && (
            <div
              className="app-fade-in rounded-2xl p-5"
              style={{ background: 'white', border: '1px solid var(--app-border-1)' }}
            >
              <div className="flex items-center gap-3">
                <Layers size={16} style={{ color: 'var(--app-accent-1)' }} />
                <div className="flex-1">
                  <div
                    className="text-[10.5px] font-bold uppercase tracking-wider"
                    style={{ color: 'var(--app-text-3)' }}
                  >
                    Material & property cards
                  </div>
                  <p
                    className="mt-0.5 font-mono text-[13px] font-semibold"
                    style={{ color: 'var(--app-text-1)' }}
                  >
                    {ACTIVE.materialCard}
                  </p>
                </div>
                <span
                  className="app-chip"
                  style={{ background: 'rgba(15, 143, 94, 0.12)', color: 'var(--app-success-1)' }}
                >
                  From library
                </span>
              </div>
              <div className="mt-3 grid grid-cols-3 gap-3">
                <Stat label="Yield" value="355 MPa" />
                <Stat label="UTS" value="490 MPa" />
                <Stat label="Mass" value="1.24 kg" />
              </div>
            </div>
          )}

          {/* Trade-space — same part, three solver decks */}
          {showBcs && (
            <div
              className="app-fade-in rounded-2xl p-5"
              style={{ background: 'white', border: '1px solid var(--app-border-1)' }}
            >
              <div
                className="text-[10.5px] font-bold uppercase tracking-wider"
                style={{ color: 'var(--app-text-3)' }}
              >
                Solver trade-space — same part
              </div>
              <p className="mt-1 text-[12px]" style={{ color: 'var(--app-text-2)' }}>
                Decks written for the three target solvers. Element count, deck size, and solve cost on one row.
              </p>

              <ul className="mt-4 space-y-3">
                {SOLVERS.map((s) => {
                  const isActive = s.id === ACTIVE_ID
                  const maxMB = Math.max(...SOLVERS.map((x) => x.deckMB))
                  const widthPct = (s.deckMB / maxMB) * 100
                  return (
                    <li key={s.id} className="grid grid-cols-[160px_1fr_130px] items-center gap-3">
                      <div>
                        <p
                          className="text-[11.5px]"
                          style={{
                            color: isActive ? 'var(--app-accent-1)' : 'var(--app-text-2)',
                            fontWeight: isActive ? 700 : 500,
                          }}
                        >
                          {s.shortLabel}
                        </p>
                        <p className="text-[10px]" style={{ color: 'var(--app-text-3)' }}>
                          {(s.elements / 1000).toFixed(0)}k elements
                        </p>
                      </div>
                      <div
                        className="h-3 w-full overflow-hidden rounded-full"
                        style={{ background: 'var(--app-surface-2)' }}
                      >
                        <div
                          style={{
                            width: `${widthPct}%`,
                            background: isActive ? 'var(--app-accent-1)' : 'var(--app-border-2)',
                            height: '100%',
                            transition: 'width 600ms cubic-bezier(0.22, 1, 0.36, 1)',
                          }}
                        />
                      </div>
                      <div className="text-right">
                        <p
                          className="font-mono text-[11.5px] font-semibold tabular-nums"
                          style={{ color: 'var(--app-text-1)' }}
                        >
                          {s.deckMB} MB {s.deckExtension}
                        </p>
                        <p className="text-[10px]" style={{ color: 'var(--app-text-3)' }}>
                          {s.solveLabel}
                        </p>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>
          )}

          {/* End-state strip */}
          {showBcs && (
            <div
              className="app-fade-in flex items-center gap-3 rounded-2xl p-4"
              style={{
                background:
                  'linear-gradient(135deg, rgba(37, 99, 235, 0.10), rgba(37, 99, 235, 0.04))',
                border: '1px solid rgba(37, 99, 235, 0.25)',
              }}
            >
              <Lock size={20} style={{ color: 'var(--app-accent-1)' }} />
              <div className="flex-1">
                <div
                  className="font-display text-[14px] font-semibold"
                  style={{ color: 'var(--app-text-1)' }}
                >
                  enclosure_lid_v05{ACTIVE.deckExtension} written · {ACTIVE.deckMB} MB
                </div>
                <p className="text-[11.5px]" style={{ color: 'var(--app-text-2)' }}>
                  Ready for solver submission. BCs, contacts, and load case attached to the part.
                </p>
              </div>
              <span
                className="app-chip"
                style={{
                  background: 'rgba(37, 99, 235, 0.15)',
                  color: 'var(--app-accent-1)',
                  borderColor: 'rgba(37, 99, 235, 0.3)',
                }}
              >
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

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div
        className="text-[10px] uppercase tracking-wide"
        style={{ color: 'var(--app-text-3)' }}
      >
        {label}
      </div>
      <div
        className="font-mono text-[12px] font-semibold"
        style={{ color: 'var(--app-text-1)' }}
      >
        {value}
      </div>
    </div>
  )
}
