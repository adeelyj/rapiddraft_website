import { useState } from 'react'
import { ChevronRight } from 'lucide-react'

type DiscussionNote = {
  date: string
  title: string
  sections: {
    title: string
    bullets: string[]
  }[]
}

const DISCUSSION_NOTES: DiscussionNote[] = [
  {
    date: '2026-05-18',
    title: 'First meeting',
    sections: [
      {
        title: 'Next steps',
        bullets: [
          'Align around starting with an Assess-style entry point before a broader proof-of-value pilot.',
          'Define pilot scope for the next 2-3 months and confirm the first workflow to test.',
        ],
      },
      {
        title: 'Forward Engineering',
        bullets: [
          'Share the relevant drawings, samples, and workflow context needed for the initial assessment.',
          'Clarify data access expectations and the preferred cloud or collaboration boundary early.',
        ],
      },
      {
        title: 'RapidDraft',
        bullets: [
          'Frame the pilot around design review, collaboration, and documentation outcomes.',
          'Prepare for an on-site meeting to shape the working cadence and initial execution plan.',
        ],
      },
    ],
  },
]

export function Closing() {
  const [openId, setOpenId] = useState<string | null>(null)

  return (
    <section id="closing" className="relative scroll-mt-16">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="max-w-2xl">
          <span className="inline-block font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-primary">
            Forward x RapidDraft
          </span>
          <h2 className="mt-4 text-[2rem] font-semibold leading-[1.1] tracking-tight text-ink sm:text-[2.5rem]">
            Discussion notes
          </h2>
          <p className="mt-4 text-meta text-ink-60">
            Every meeting note can live here as a dated running list, expandable when we want the
            detail and collapsible when we want the overview.
          </p>
        </div>

        <div className="mt-12 max-w-4xl space-y-5">
          {DISCUSSION_NOTES.map((note) => {
            const id = `${note.date}-${note.title}`
            const isOpen = openId === id

            return (
              <article key={id} className="group block">
                <button
                  type="button"
                  onClick={() => setOpenId((cur) => (cur === id ? null : id))}
                  aria-expanded={isOpen}
                  aria-controls={`discussion-note-${id}`}
                  className="flex w-full items-start gap-3 text-left"
                >
                  <span className="mt-[18px] shrink-0 text-ink-40">
                    <ChevronRight
                      size={16}
                      className={`transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`}
                    />
                  </span>
                  <span>
                    <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
                      {note.date}
                    </p>
                    <h3 className="mt-2 text-lg font-semibold tracking-tight text-gray-950 sm:text-xl">
                      {note.title}
                    </h3>
                  </span>
                </button>

                {isOpen ? (
                  <ul
                    id={`discussion-note-${id}`}
                    className="mt-5 space-y-3 border-l border-stone-300 pl-4"
                  >
                    {note.sections.map((section) => (
                      <li key={section.title} className="space-y-2">
                        <p className="text-[15px] font-semibold leading-7 text-gray-950 sm:text-base">
                          {section.title}
                        </p>
                        <ul className="space-y-3">
                          {section.bullets.map((bullet) => (
                            <li key={bullet} className="flex items-start gap-3">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                              <p className="text-[15px] leading-7 text-gray-700 sm:text-base">{bullet}</p>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-stone-200/80">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between">
          <p className="text-meta text-ink-60">
            Adeel Yawar Jamil ·{' '}
            <a href="mailto:adeel@rapiddraft.ai" className="text-ink-60 underline-offset-4 hover:underline">
              adeel@rapiddraft.ai
            </a>
          </p>
          <a
            href="https://rapiddraft.ai"
            target="_blank"
            rel="noreferrer"
            className="text-meta text-ink-60 underline-offset-4 hover:underline"
          >
            rapiddraft.ai
          </a>
        </div>
      </div>
    </footer>
  )
}
