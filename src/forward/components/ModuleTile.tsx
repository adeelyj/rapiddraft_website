import { useState } from 'react'
import type { Module } from '../data/modules'
import { GuidedDemo } from './GuidedDemo'
import { MODULE_POSTERS } from './posters/ModulePosters'

type Props = {
  module: Module
  variant?: 'compact' | 'wide'
}

// Visual preview area for a tile: registered SVG poster if the module has one,
// otherwise the legacy <img> fallback.
function PosterArea({ module }: { module: Module }) {
  const Poster = MODULE_POSTERS[module.id]
  if (Poster) {
    return (
      <div className="absolute inset-0 h-full w-full">
        <Poster />
      </div>
    )
  }
  return (
    <img
      src={module.poster}
      alt=""
      className="absolute inset-0 h-full w-full object-cover"
      loading="lazy"
    />
  )
}

// Top-right corner chip indicating shipping status. Green for "Available now",
// neutral for "Roadmap". Visual-only; does not gate interactivity.
function AvailabilityBadge({ availability }: { availability: Module['availability'] }) {
  const isAvailable = availability === 'available'
  return (
    <span
      className={`pointer-events-none absolute right-1.5 top-1.5 z-10 rounded-full px-2 py-[2px] font-mono text-[9px] font-bold uppercase tracking-[0.14em] shadow-sm ring-1 backdrop-blur-sm ${
        isAvailable
          ? 'bg-emerald-50/95 text-emerald-700 ring-emerald-200'
          : 'bg-stone-100/95 text-stone-600 ring-stone-300'
      }`}
    >
      {isAvailable ? 'Available now' : 'Roadmap'}
    </span>
  )
}

// Minimalist tile: 16:10 poster, single-word title + one-clause blurb.
// Every tile opens its guided demo on click — including the roadmap ones,
// since the demo itself IS the preview of that upcoming agent.
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
          <PosterArea module={module} />
          <AvailabilityBadge availability={module.availability} />
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
