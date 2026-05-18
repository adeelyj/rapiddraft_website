import { useEffect, useState } from 'react'

type Props = {
  onOpenBank: () => void
}

const ANCHORS = [
  { id: 'where-we-fit', label: 'Where we fit' },
  { id: 'forward-fit', label: 'ROI' },
  { id: 'closing', label: 'Questions' },
  { id: 'research', label: 'Research' },
]

export function Nav({ onOpenBank }: Props) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`sticky top-0 z-40 transition-colors duration-200 ${
        scrolled ? 'border-b border-stone-200/80 bg-[#fffaf7]/90 backdrop-blur' : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 sm:px-8 lg:px-12">
        <a
          href="#where-we-fit"
          className="flex items-center gap-2 text-meta font-semibold text-ink"
        >
          <img src="/media/rd_logo.png" alt="RapidDraft" className="h-5 w-auto" />
          <span className="hidden text-ink-60 sm:inline">×</span>
          <span className="hidden sm:inline">Forward Engineering</span>
        </a>

        <ul className="hidden items-center gap-6 md:flex">
          {ANCHORS.map((a) => (
            <li key={a.id}>
              <a
                href={`#${a.id}`}
                className="text-meta text-ink-60 underline-offset-4 transition hover:text-ink hover:underline"
              >
                {a.label}
              </a>
            </li>
          ))}
          <li>
            <button
              type="button"
              onClick={onOpenBank}
              className="text-meta font-semibold text-primary underline-offset-4 hover:underline"
            >
              Q&amp;A
            </button>
          </li>
        </ul>

        {/* Mobile Q&A */}
        <button
          type="button"
          onClick={onOpenBank}
          className="text-meta font-semibold text-primary md:hidden"
        >
          Q&amp;A
        </button>
      </div>
    </nav>
  )
}
