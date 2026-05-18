// Guided-demo overlay. Plays either:
//  (a) a ported app animation component synced to the captioned steps, or
//  (b) the mp4/gif fallback if the module has no animation yet.
// Step auto-advances every ~3.2s; user can click a step to jump or use ← →.

import { useCallback, useEffect, useState } from 'react'
import { ArrowUpRight, ChevronLeft, ChevronRight, Pause, Play, X } from 'lucide-react'
import type { Module } from '../data/modules'
import { DrawingAnalysisAnimation } from './animations/DrawingAnalysisAnimation'
import { CollaborateAnimation } from './animations/CollaborateAnimation'
import { DfmAnimation } from './animations/DfmAnimation'
import { BulkReviewAnimation } from './animations/BulkReviewAnimation'
import { Co2Animation } from './animations/Co2Animation'
import type { AnimationProps } from './animations/types'

type Props = {
  module: Module
  onClose: () => void
}

const ANIMATIONS: Partial<Record<string, (p: AnimationProps) => React.ReactNode>> = {
  drawing: DrawingAnalysisAnimation,
  collaboration: CollaborateAnimation,
  dfm: DfmAnimation,
  batch: BulkReviewAnimation,
  co2: Co2Animation,
}

const AUTO_ADVANCE_MS = 3200

export function GuidedDemo({ module, onClose }: Props) {
  const totalSteps = module.steps?.length ?? 1
  const [step, setStep] = useState(0)
  const [paused, setPaused] = useState(false)

  const Animation = ANIMATIONS[module.id]
  const isVideo = !Animation && module.loop?.endsWith('.mp4')

  // Body scroll lock + ESC
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') setStep((s) => Math.min(totalSteps - 1, s + 1))
      if (e.key === 'ArrowLeft') setStep((s) => Math.max(0, s - 1))
      if (e.key === ' ') {
        e.preventDefault()
        setPaused((p) => !p)
      }
    }
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [onClose, totalSteps])

  // Auto-advance
  useEffect(() => {
    if (paused) return
    const t = window.setTimeout(() => {
      setStep((s) => (s + 1 >= totalSteps ? totalSteps - 1 : s + 1))
    }, AUTO_ADVANCE_MS)
    return () => window.clearTimeout(t)
  }, [step, paused, totalSteps])

  const restart = useCallback(() => setStep(0), [])
  const atEnd = step === totalSteps - 1

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={module.title}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm sm:p-8"
      onClick={onClose}
    >
      <div
        className="relative grid max-h-[92vh] w-full max-w-6xl gap-0 overflow-hidden rounded-3xl bg-white shadow-2xl lg:grid-cols-[1.6fr_1fr]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Media / animation side */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-900 lg:aspect-auto">
          {Animation ? (
            <Animation step={step} totalSteps={totalSteps} />
          ) : isVideo ? (
            <video
              src={module.loop}
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 h-full w-full object-cover"
            />
          ) : (
            <img
              src={module.loop ?? module.poster}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
          )}

          {/* Timeline controls — bottom-left over media */}
          <div className="absolute bottom-3 left-3 flex items-center gap-2">
            <button
              type="button"
              onClick={() => setStep((s) => Math.max(0, s - 1))}
              disabled={step === 0}
              aria-label="Previous step"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-gray-700 shadow-md backdrop-blur transition hover:bg-white disabled:opacity-40"
            >
              <ChevronLeft size={14} />
            </button>
            <button
              type="button"
              onClick={atEnd ? restart : () => setPaused((p) => !p)}
              aria-label={atEnd ? 'Replay' : paused ? 'Play' : 'Pause'}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-gray-700 shadow-md backdrop-blur transition hover:bg-white"
            >
              {atEnd ? <Play size={14} /> : paused ? <Play size={14} /> : <Pause size={14} />}
            </button>
            <button
              type="button"
              onClick={() => setStep((s) => Math.min(totalSteps - 1, s + 1))}
              disabled={atEnd}
              aria-label="Next step"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-gray-700 shadow-md backdrop-blur transition hover:bg-white disabled:opacity-40"
            >
              <ChevronRight size={14} />
            </button>
            <div className="ml-1 rounded-full bg-black/50 px-2.5 py-1 font-mono text-[10px] font-semibold text-white backdrop-blur">
              {step + 1} / {totalSteps}
            </div>
          </div>
        </div>

        {/* Steps side */}
        <div className="relative flex flex-col bg-white p-6 sm:p-7 lg:max-h-[92vh] lg:overflow-y-auto">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full text-gray-400 transition hover:bg-stone-100 hover:text-gray-900"
          >
            <X size={18} />
          </button>

          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">
            {Animation ? 'Live demo' : 'Guided demo'}
          </p>
          <h3 className="mt-2 font-display text-2xl font-semibold leading-tight tracking-tight text-gray-950 sm:text-[1.7rem]">
            {module.title}
          </h3>

          {module.pitch && (
            <p className="mt-3 text-[15px] leading-6 text-gray-600">{module.pitch}</p>
          )}

          <ol className="mt-6 space-y-2.5">
            {(module.steps ?? []).map((s, i) => {
              const isActive = i === step
              const isDone = i < step
              return (
                <li key={i}>
                  <button
                    type="button"
                    onClick={() => {
                      setStep(i)
                      setPaused(true)
                    }}
                    className={`group flex w-full items-start gap-3 rounded-xl border p-3 text-left transition ${
                      isActive
                        ? 'border-primary/40 bg-orange-50/60'
                        : 'border-transparent hover:bg-stone-50'
                    }`}
                  >
                    <span
                      className={`mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full font-mono text-[11px] font-semibold transition ${
                        isActive
                          ? 'bg-primary text-white'
                          : isDone
                          ? 'bg-stone-300 text-white'
                          : 'bg-orange-50 text-primary'
                      }`}
                    >
                      {i + 1}
                    </span>
                    <p
                      className={`text-[14px] leading-6 transition ${
                        isActive ? 'text-gray-900' : 'text-gray-600'
                      }`}
                    >
                      {s}
                    </p>
                  </button>
                </li>
              )
            })}
          </ol>

          <div className="mt-auto pt-6">
            <a
              href={module.href}
              target="_blank"
              rel="noreferrer"
              className="btn-primary w-full sm:w-auto"
            >
              Open in the live workspace
              <ArrowUpRight size={16} className="ml-2" />
            </a>
            <p className="mt-3 text-[11px] text-gray-400">
              {Animation
                ? 'Self-contained — no login needed for this demo. Click a step to jump · space to pause · ←/→ to step.'
                : 'Opens app.rapiddraft.ai in a new tab. Demo above is self-contained — no login needed.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
