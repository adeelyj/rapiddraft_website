import { useState } from 'react'
import type { Module } from '../data/modules'
import { GuidedDemo } from './GuidedDemo'

type Props = {
  module: Module
  variant?: 'compact' | 'wide'
}

// Minimalist tile: 16:10 poster, single-word title + one-clause blurb.
// No status pills, no badges, no per-tile color, no corner glyph.
// All 5 tiles render identically. Click opens the guided demo.
export function ModuleTile({ module, variant = 'compact' }: Props) {
  const [open, setOpen] = useState(false)
  const title = variant === 'compact' && module.shortTitle ? module.shortTitle : module.title

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Open guided demo: ${module.title}`}
        className="group flex w-full flex-col text-left transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
      >
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-md border border-stone-200/80 bg-stone-50 transition group-hover:border-stone-400">
          <img
            src={module.poster}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="mt-3">
          <h3 className="text-meta font-semibold tracking-tight text-ink">{title}</h3>
          {/* Fixed 3-line space so all tiles' text blocks occupy the same
              vertical room regardless of how the blurb wraps. */}
          <p className="mt-0.5 line-clamp-3 min-h-[3.9rem] text-meta leading-[1.3] text-ink-60">
            {module.blurb}
          </p>
        </div>
      </button>

      {open && <GuidedDemo module={module} onClose={() => setOpen(false)} />}
    </>
  )
}
