// Animated mockup of "Model check" — Forward-specific module.
// Focus: OptiStruct deck validation with composite PCOMP/PCOMPP layups.
//
// 5-step timeline:
//  Step 0: deck loaded, no checks run yet.
//  Step 1: all 28 checks run; hero counts up + per-category severity bars.
//  Step 2: findings list animates in (fails and warnings only, sorted).
//  Step 3: proposed-fix preview panel expands inline for each finding.
//  Step 4: end-state strip — "Apply all → 0 blockers. Deck ready to submit."

import { useEffect, useState } from 'react'
import {
  AlertTriangle,
  CheckCircle2,
  ListChecks,
  Lock,
  Sigma,
  Wrench,
  XCircle,
} from 'lucide-react'
import type { AnimationProps } from './types'

type Severity = 'pass' | 'warn' | 'fail'

const SEVERITY_META: Record<Severity, { color: string; label: string }> = {
  pass: { color: '#0f8f5e', label: 'Pass' },
  warn: { color: '#d97706', label: 'Warn' },
  fail: { color: '#b91c1c', label: 'Fail' },
}

type Category = {
  id: string
  label: string
  pass: number
  warn: number
  fail: number
}

// Coverage matches what HyperWorks Verifier / OptiStruct's own model-check pass
// surfaces for a composite-heavy deck. Counts are illustrative but in line with
// what a real PCOMP/optimization setup produces.
const CATEGORIES: Category[] = [
  { id: 'mesh', label: 'Mesh & geometry', pass: 7, warn: 1, fail: 0 },
  { id: 'composite', label: 'Composite layup (PCOMP)', pass: 5, warn: 1, fail: 1 },
  { id: 'solver', label: 'Solver setup', pass: 7, warn: 0, fail: 1 },
  { id: 'opt', label: 'Optimization setup', pass: 4, warn: 1, fail: 0 },
]

const TOTALS = CATEGORIES.reduce(
  (a, c) => ({ pass: a.pass + c.pass, warn: a.warn + c.warn, fail: a.fail + c.fail }),
  { pass: 0, warn: 0, fail: 0 },
)
const TOTAL_CHECKS = TOTALS.pass + TOTALS.warn + TOTALS.fail

type Finding = {
  id: string
  severity: Severity
  categoryId: string
  title: string
  detail: string
  location: string
  fix: string
}

// Sorted: fails first, then warns. Each finding maps to a category above.
const FINDINGS: Finding[] = [
  {
    id: 'f1',
    severity: 'fail',
    categoryId: 'composite',
    title: 'Material orientation undefined',
    detail:
      'PCOMP 1042 plies 8 and 12 reference no CORDM. Ply angles fall back to the element coordinate system — fiber direction is element-dependent, not part-fixed.',
    location: 'PCOMP 1042 · plies 8, 12',
    fix: 'Add CORDM = 102 (existing rectangular system) to PCOMP card.',
  },
  {
    id: 'f2',
    severity: 'fail',
    categoryId: 'solver',
    title: 'Wrong material card for element type',
    detail:
      'MAT8 (2D orthotropic) referenced by 24 solid elements. OptiStruct needs MAT9 (3D anisotropic) for CHEXA8 with composite anisotropy.',
    location: '24× CHEXA8 · ids 12450–12473',
    fix: 'Switch to MAT9 and supply the 21-term Cij stiffness matrix (or use MATORT + CORDM).',
  },
  {
    id: 'f3',
    severity: 'warn',
    categoryId: 'mesh',
    title: 'Elements below Jacobian threshold',
    detail:
      '0.6% of elements fail the 0.45 minimum Jacobian. Concentrated near the boss-mount transitions.',
    location: '1,104 elements · boss-mount region',
    fix: 'Local remesh or smooth + collapse around the fillet transitions.',
  },
  {
    id: 'f4',
    severity: 'warn',
    categoryId: 'composite',
    title: 'Layup symmetric but unbalanced in sub-laminate',
    detail:
      '[0/45/-45/90]₂s is globally balanced (+45 count = −45 count). Sub-laminate is not — ±45 imbalance over the first 8 plies. May couple bending and twisting.',
    location: 'PCOMP 1042 · plies 1–8',
    fix: 'Reorder to [0/45/90/-45]₂s, or confirm intent.',
  },
  {
    id: 'f5',
    severity: 'warn',
    categoryId: 'opt',
    title: 'Failure criterion not set on response',
    detail:
      'DRESP1 id 9001 (FAILUREINDEX) falls back to TSAI. For matrix-tension dominated layups, PUCK or HASHIN is the preferred criterion.',
    location: 'DRESP1 · 9001',
    fix: 'Set FT = PUCK on MAT8 (or specify on DRESP1).',
  },
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

export function ModelCheckAnimation({ step }: AnimationProps) {
  const showResults = step >= 1
  const showFindings = step >= 2
  const showFixes = step >= 3
  const showEndStrip = step >= 4

  const passAnim = useCountUp(TOTALS.pass, showResults, 800)
  const totalAnim = useCountUp(TOTAL_CHECKS, showResults, 800)

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
            <ListChecks size={13} />
          </span>
          <div>
            <div className="text-[12px] font-semibold leading-tight" style={{ color: 'var(--app-text-1)' }}>
              enclosure_lid_v05.fem · Model check
            </div>
            <div className="text-[10px] leading-tight" style={{ color: 'var(--app-text-3)' }}>
              OptiStruct · composite layup · solver readiness
            </div>
          </div>
        </div>
        <span className="app-chip" style={{ background: 'var(--app-surface-2)' }}>
          <Sigma size={11} />
          OptiStruct · PCOMP
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
          <Section label="Deck source">
            <Field label="Solver" value="OptiStruct" />
            <Field label="Deck" value="enclosure_lid_v05.fem" />
            <Field label="Subcase" value="NLSTAT · sizing" />
          </Section>

          <Section label="Composite setup">
            <Field label="Layup" value="[0/45/-45/90]₂s" />
            <Field label="Plies" value="16" />
            <Field label="Property card" value="PCOMP 1042" />
            <Field label="Material" value="MAT8 · T700/M21" />
          </Section>

          <Section label="Check sets">
            <div className="flex flex-wrap gap-1.5">
              <Chip label="Mesh" active />
              <Chip label="Composite" active />
              <Chip label="Solver" active />
              <Chip label="Optimization" active />
              <Chip label="Manufacturing" active={false} />
            </div>
          </Section>

          <Section label="Auto-fix policy">
            <Field label="Apply on accept" value="side branch" />
            <Field label="Original deck" value="untouched" />
          </Section>
        </aside>

        {/* Results */}
        <div
          className="flex flex-1 flex-col gap-4 overflow-y-auto p-5"
          style={{ background: 'var(--app-surface-0)' }}
        >
          {/* Hero — readiness */}
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
                  Solver readiness
                </div>
                <div className="mt-1 flex items-baseline gap-2">
                  <span
                    className="font-display text-[40px] font-semibold tabular-nums leading-none"
                    style={{
                      color: showResults
                        ? TOTALS.fail > 0
                          ? 'var(--app-warning-1)'
                          : 'var(--app-success-1)'
                        : 'var(--app-text-3)',
                    }}
                  >
                    {showResults ? Math.round(passAnim) : '—'}
                  </span>
                  <span className="font-mono text-[12px]" style={{ color: 'var(--app-text-3)' }}>
                    / {showResults ? Math.round(totalAnim) : TOTAL_CHECKS} checks pass
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-end gap-1">
                <span className="app-chip" style={{ color: 'var(--app-text-2)' }}>
                  <Sigma size={11} />
                  {CATEGORIES.length} categories
                </span>
                {showResults && (
                  <span
                    className="app-chip app-fade-in inline-flex items-center gap-1"
                    style={{
                      color:
                        TOTALS.fail > 0
                          ? 'var(--app-danger-1)'
                          : TOTALS.warn > 0
                          ? 'var(--app-warning-1)'
                          : 'var(--app-success-1)',
                      borderColor:
                        TOTALS.fail > 0
                          ? 'var(--app-danger-1)'
                          : TOTALS.warn > 0
                          ? 'var(--app-warning-1)'
                          : 'var(--app-success-1)',
                    }}
                  >
                    {TOTALS.fail} fail · {TOTALS.warn} warn
                  </span>
                )}
              </div>
            </div>

            {/* Overall severity bar */}
            {showResults && (
              <div className="app-fade-in mt-5">
                <div
                  className="flex h-4 w-full overflow-hidden rounded-full"
                  style={{ background: 'var(--app-surface-3)' }}
                >
                  <div
                    style={{
                      width: `${(TOTALS.pass / TOTAL_CHECKS) * 100}%`,
                      background: SEVERITY_META.pass.color,
                      transition: 'width 600ms cubic-bezier(0.22, 1, 0.36, 1)',
                    }}
                  />
                  <div
                    style={{
                      width: `${(TOTALS.warn / TOTAL_CHECKS) * 100}%`,
                      background: SEVERITY_META.warn.color,
                      transition: 'width 600ms cubic-bezier(0.22, 1, 0.36, 1)',
                    }}
                  />
                  <div
                    style={{
                      width: `${(TOTALS.fail / TOTAL_CHECKS) * 100}%`,
                      background: SEVERITY_META.fail.color,
                      transition: 'width 600ms cubic-bezier(0.22, 1, 0.36, 1)',
                    }}
                  />
                </div>

                {/* Per-category breakdown */}
                <ul className="mt-4 space-y-2">
                  {CATEGORIES.map((c) => {
                    const total = c.pass + c.warn + c.fail
                    return (
                      <li
                        key={c.id}
                        className="grid grid-cols-[170px_1fr_100px] items-center gap-3"
                      >
                        <span className="text-[11.5px] font-semibold" style={{ color: 'var(--app-text-2)' }}>
                          {c.label}
                        </span>
                        <div
                          className="flex h-2.5 w-full overflow-hidden rounded-full"
                          style={{ background: 'var(--app-surface-2)' }}
                        >
                          <div
                            style={{
                              width: `${(c.pass / total) * 100}%`,
                              background: SEVERITY_META.pass.color,
                              transition: 'width 600ms cubic-bezier(0.22, 1, 0.36, 1)',
                            }}
                          />
                          <div
                            style={{
                              width: `${(c.warn / total) * 100}%`,
                              background: SEVERITY_META.warn.color,
                              transition: 'width 600ms cubic-bezier(0.22, 1, 0.36, 1)',
                            }}
                          />
                          <div
                            style={{
                              width: `${(c.fail / total) * 100}%`,
                              background: SEVERITY_META.fail.color,
                              transition: 'width 600ms cubic-bezier(0.22, 1, 0.36, 1)',
                            }}
                          />
                        </div>
                        <span
                          className="text-right font-mono text-[10.5px] tabular-nums"
                          style={{ color: 'var(--app-text-2)' }}
                        >
                          {c.pass} / {c.warn} / {c.fail}
                        </span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )}
          </div>

          {/* Findings list */}
          {showFindings && (
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
                    Findings · sorted by severity
                  </div>
                  <p className="mt-1 text-[12px]" style={{ color: 'var(--app-text-2)' }}>
                    Each finding pins a deck location and a one-line proposed fix.
                  </p>
                </div>
              </div>

              <ul className="mt-4 space-y-3">
                {FINDINGS.map((f) => (
                  <FindingRow key={f.id} finding={f} showFix={showFixes} />
                ))}
              </ul>
            </div>
          )}

          {/* End-state strip */}
          {showEndStrip && (
            <div
              className="app-fade-in flex items-center gap-3 rounded-2xl p-4"
              style={{
                background:
                  'linear-gradient(135deg, rgba(15, 143, 94, 0.10), rgba(15, 143, 94, 0.04))',
                border: '1px solid rgba(15, 143, 94, 0.25)',
              }}
            >
              <CheckCircle2 size={20} style={{ color: 'var(--app-success-1)' }} />
              <div className="flex-1">
                <div
                  className="font-display text-[14px] font-semibold"
                  style={{ color: 'var(--app-text-1)' }}
                >
                  Apply all {FINDINGS.length} → 0 blockers · 0 warnings
                </div>
                <p className="text-[11.5px]" style={{ color: 'var(--app-text-2)' }}>
                  Fixes pre-applied in a side branch. Original deck untouched. Findings package attached to the part.
                </p>
              </div>
              <span
                className="app-chip inline-flex items-center gap-1"
                style={{
                  background: 'rgba(15, 143, 94, 0.15)',
                  color: 'var(--app-success-1)',
                  borderColor: 'rgba(15, 143, 94, 0.3)',
                }}
              >
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

function FindingRow({ finding, showFix }: { finding: Finding; showFix: boolean }) {
  const meta = SEVERITY_META[finding.severity]
  const Icon = finding.severity === 'fail' ? XCircle : AlertTriangle
  return (
    <li
      className="rounded-xl border p-3"
      style={{
        borderColor:
          finding.severity === 'fail' ? 'rgba(185, 28, 28, 0.30)' : 'rgba(217, 119, 6, 0.30)',
        background:
          finding.severity === 'fail' ? 'rgba(185, 28, 28, 0.04)' : 'rgba(217, 119, 6, 0.04)',
      }}
    >
      <div className="flex items-start gap-2.5">
        <Icon size={14} style={{ color: meta.color, marginTop: 2 }} className="shrink-0" />
        <div className="min-w-0 flex-1">
          <div className="flex items-baseline justify-between gap-3">
            <p className="text-[12px] font-semibold" style={{ color: 'var(--app-text-1)' }}>
              {finding.title}
            </p>
            <span
              className="shrink-0 font-mono text-[9.5px] font-bold uppercase tracking-[0.12em]"
              style={{ color: meta.color }}
            >
              {meta.label}
            </span>
          </div>
          <p className="mt-1 text-[11px] leading-[1.45]" style={{ color: 'var(--app-text-2)' }}>
            {finding.detail}
          </p>
          <p className="mt-1 font-mono text-[10px]" style={{ color: 'var(--app-text-3)' }}>
            {finding.location}
          </p>
          {showFix && (
            <div
              className="app-fade-in mt-2 flex items-start gap-1.5 rounded-md px-2 py-1.5"
              style={{ background: 'rgba(37, 99, 235, 0.06)' }}
            >
              <Wrench size={11} style={{ color: 'var(--app-accent-1)', marginTop: 2 }} className="shrink-0" />
              <p className="text-[11px]" style={{ color: 'var(--app-text-1)' }}>
                <span className="font-semibold" style={{ color: 'var(--app-accent-1)' }}>
                  Proposed fix:
                </span>{' '}
                {finding.fix}
              </p>
            </div>
          )}
        </div>
      </div>
    </li>
  )
}

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
