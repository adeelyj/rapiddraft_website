// Live searchable question bank for the meeting itself.
// Opens as a full-screen overlay. Search + category filters + "starred only" toggle.

import { useEffect, useMemo, useState } from 'react'
import { Search, Star, X } from 'lucide-react'
import { CATEGORIES, QUESTIONS, type Category } from '../data/questions'

type Props = {
  onClose: () => void
}

export function QuestionBank({ onClose }: Props) {
  const [query, setQuery] = useState('')
  const [active, setActive] = useState<Category | 'All'>('All')
  const [starredOnly, setStarredOnly] = useState(false)

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [onClose])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return QUESTIONS.filter((qn) => {
      if (active !== 'All' && qn.category !== active) return false
      if (starredOnly && !qn.starred) return false
      if (q && !qn.text.toLowerCase().includes(q)) return false
      return true
    })
  }, [query, active, starredOnly])

  const starredCount = QUESTIONS.filter((q) => q.starred).length

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Question bank"
      className="fixed inset-0 z-50 flex items-stretch justify-center bg-black/70 p-2 backdrop-blur-sm sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative flex w-full max-w-5xl flex-col overflow-hidden rounded-3xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-stone-200/80 p-5 sm:p-6">
          <div>
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">
              Live in the meeting
            </p>
            <h2 className="mt-1 font-display text-2xl font-semibold leading-tight tracking-tight text-gray-950 sm:text-3xl">
              Question bank
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              {QUESTIONS.length} questions across {CATEGORIES.length} categories ·{' '}
              <Star size={11} className="inline-block -translate-y-px fill-amber-400 text-amber-400" />{' '}
              {starredCount} starred
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-gray-400 transition hover:bg-stone-100 hover:text-gray-900"
          >
            <X size={18} />
          </button>
        </div>

        {/* Controls */}
        <div className="border-b border-stone-200/80 p-4 sm:p-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="relative flex-1">
              <Search
                size={16}
                className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search questions…"
                autoFocus
                className="w-full rounded-full border border-stone-300/90 bg-white py-2.5 pl-10 pr-4 text-[14px] text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-primary focus:shadow-[0_0_0_4px_rgba(234,88,12,0.08)]"
              />
            </div>
            <button
              type="button"
              onClick={() => setStarredOnly((v) => !v)}
              className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-[13px] font-semibold transition ${
                starredOnly
                  ? 'border-amber-300 bg-amber-50 text-amber-900'
                  : 'border-stone-300 bg-white text-gray-700 hover:bg-stone-50'
              }`}
            >
              <Star size={14} className={starredOnly ? 'fill-amber-400 text-amber-400' : ''} />
              {starredOnly ? 'Starred only' : 'All questions'}
            </button>
          </div>

          {/* Category pills */}
          <div className="mt-3 flex flex-wrap gap-1.5">
            <CategoryPill label="All" active={active === 'All'} onClick={() => setActive('All')} />
            {CATEGORIES.map((c) => (
              <CategoryPill
                key={c}
                label={c}
                active={active === c}
                onClick={() => setActive(c)}
              />
            ))}
          </div>
        </div>

        {/* List */}
        <div className="flex-1 overflow-y-auto px-2 py-2 sm:px-4 sm:py-4">
          {filtered.length === 0 ? (
            <p className="px-4 py-12 text-center text-sm text-gray-400">
              No matches.
            </p>
          ) : (
            <ol className="divide-y divide-stone-100">
              {filtered.map((q) => (
                <li key={q.id} className="flex items-start gap-3 px-3 py-3 sm:px-4">
                  <span className="mt-1 inline-flex h-5 shrink-0 items-center rounded-md bg-stone-100 px-1.5 font-mono text-[10px] font-semibold text-gray-500">
                    {q.id}
                  </span>
                  {q.starred && (
                    <Star
                      size={14}
                      className="mt-1 shrink-0 fill-amber-400 text-amber-400"
                      aria-label="starred"
                    />
                  )}
                  <p className="text-[14px] leading-6 text-gray-800 sm:text-[15px]">
                    {q.text}
                    <span className="ml-2 inline-flex items-center rounded-full bg-stone-100 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-gray-500">
                      {q.category}
                    </span>
                  </p>
                </li>
              ))}
            </ol>
          )}
        </div>

        {/* Footer hint */}
        <div className="border-t border-stone-200/80 px-5 py-3 text-[11px] text-gray-400">
          Press <kbd className="rounded border border-stone-300 bg-stone-50 px-1.5 py-0.5 font-mono text-[10px]">Esc</kbd> to close · search is live · click a pill to filter
        </div>
      </div>
    </div>
  )
}

function CategoryPill({
  label,
  active,
  onClick,
}: {
  label: string
  active: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-3 py-1 text-[12px] font-semibold transition ${
        active
          ? 'border-primary bg-primary text-white'
          : 'border-stone-200 bg-white text-gray-700 hover:bg-stone-50'
      }`}
    >
      {label}
    </button>
  )
}
