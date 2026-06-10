import { useEffect, useState } from 'react'

const ANCHORS = [
  { id: 'where-we-fit', label: 'Where we fit' },
  { id: 'forward-fit', label: 'ROI' },
  { id: 'closing', label: 'Discussion' },
  { id: 'research', label: 'Background & Research' },
]

export function Nav() {
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
          <img src="/Logo.svg" alt="RapidDraft" className="h-6 w-6 shrink-0 object-contain" />
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
        </ul>
      </div>
    </nav>
  )
}
