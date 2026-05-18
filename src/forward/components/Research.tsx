import { useState } from 'react'
import { ArrowUpRight, ChevronDown } from 'lucide-react'
import { RESEARCH } from '../data/research'

// Cream palette, no inversion. Two tiles: the wiki and the strategy map.
// Each tile carries always-visible sub-content (clickable wiki sections /
// growth-opportunity list) and an optional expand for deeper detail bullets.

const KEPT_IDS = new Set(['gb38031', 'strategy'])

export function Research() {
  const [openId, setOpenId] = useState<string | null>(null)
  const items = RESEARCH.filter((r) => KEPT_IDS.has(r.id))

  return (
    <section id="research" className="relative scroll-mt-16">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="max-w-2xl">
          <h2 className="text-[2rem] font-semibold leading-[1.1] tracking-tight text-ink sm:text-[2.5rem]">
            Walking in with the work done.
          </h2>
        </div>

        <ul className="mt-12 grid gap-12 sm:grid-cols-2">
          {items.map((item) => {
            const isOpen = openId === item.id
            return (
              <li key={item.id}>
                <div className="group block">
                  <div className="flex items-start justify-between gap-3">
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-body font-semibold text-ink underline-offset-4 hover:underline"
                    >
                      {item.title}
                      <ArrowUpRight size={16} className="shrink-0 text-ink-40 group-hover:text-primary" />
                    </a>

                    {item.details && (
                      <button
                        type="button"
                        onClick={() => setOpenId((cur) => (cur === item.id ? null : item.id))}
                        aria-label={isOpen ? 'Hide details' : 'Show details'}
                        className="mt-1 shrink-0 text-ink-40 transition hover:text-ink"
                      >
                        <ChevronDown
                          size={16}
                          className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
                        />
                      </button>
                    )}
                  </div>

                  <p className="mt-2 text-meta text-ink-60">{item.summary}</p>

                  {item.sections && (
                    <ul className="mt-5 space-y-3 border-l border-stone-300 pl-4">
                      {item.sections.map((s) => (
                        <li key={s.href}>
                          <a
                            href={s.href}
                            target="_blank"
                            rel="noreferrer"
                            className="group/sec inline-flex items-center gap-1.5 text-meta font-semibold text-ink underline-offset-4 hover:underline"
                          >
                            {s.title}
                            <ArrowUpRight size={13} className="shrink-0 text-ink-40 group-hover/sec:text-primary" />
                          </a>
                          <p className="mt-1 text-meta text-ink-60">{s.summary}</p>
                        </li>
                      ))}
                    </ul>
                  )}

                  {item.growthOpportunities && (
                    <div className="mt-5 border-l border-stone-300 pl-4">
                      <p className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
                        Growth opportunities
                      </p>
                      <ul className="mt-3 space-y-3">
                        {item.growthOpportunities.map((g) => (
                          <li key={g.title}>
                            <p className="text-meta font-semibold text-ink">{g.title}</p>
                            <p className="mt-1 text-meta text-ink-60">{g.summary}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {isOpen && item.details && (
                    <ul className="mt-5 space-y-2 border-l border-stone-300 pl-4">
                      {item.details.map((d, i) => (
                        <li key={i} className="text-meta text-ink-60">
                          {d}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
