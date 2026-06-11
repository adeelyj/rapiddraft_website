import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import clsx from 'clsx';
import BrandMark from './BrandMark';
import { useTheme, type Theme } from '../hooks/useTheme';
import { useLang, type Lang } from '../i18n/LanguageContext';
import { stripLangPrefix } from '../i18n/paths';

const NAV = {
  en: {
    links: [
      { name: 'Platform', to: '/platform' },
      { name: 'Use cases', to: '/use-cases' },
      { name: 'Security', to: '/security' },
      { name: 'Company', to: '/company' },
    ],
    cta: 'Book a demo',
  },
  de: {
    links: [
      { name: 'Plattform', to: '/platform' },
      { name: 'Anwendungsfälle', to: '/use-cases' },
      { name: 'Sicherheit', to: '/security' },
      { name: 'Unternehmen', to: '/company' },
    ],
    cta: 'Demo buchen',
  },
} as const;

function ThemeToggle({ theme, onToggle }: { theme: Theme; onToggle: () => void }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--rd-edge)] text-[var(--rd-head)] transition hover:border-[var(--rd-accent)] hover:text-[var(--rd-accent)]"
    >
      {theme === 'dark' ? <Sun className="h-[18px] w-[18px]" /> : <Moon className="h-[18px] w-[18px]" />}
    </button>
  );
}

function LangToggle({ lang, onSet }: { lang: Lang; onSet: (l: Lang) => void }) {
  return (
    <div
      className="inline-flex h-10 items-center rounded-full border border-[var(--rd-edge)] p-1 text-[13px] font-medium"
      style={{ fontFamily: 'var(--rd-meta)' }}
      role="group"
      aria-label="Language"
    >
      {(['en', 'de'] as const).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => onSet(l)}
          aria-pressed={lang === l}
          className={clsx(
            'flex h-full items-center rounded-full px-3 leading-none transition-colors',
            lang === l
              ? 'bg-[var(--rd-surface)] text-[var(--rd-fg-strong)] shadow-[0_0_0_1px_var(--rd-hair)]'
              : 'text-[var(--rd-fg-3)] hover:text-[var(--rd-fg)]',
          )}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

export default function Navbar() {
  const [openPath, setOpenPath] = useState<string | null>(null);
  const [hidden, setHidden] = useState(false);
  const location = useLocation();
  const isOpen = openPath === location.pathname;
  const { theme, toggle } = useTheme();
  const { lang, setLang, localizePath } = useLang();
  const nav = NAV[lang];

  // Hide the navbar when scrolling down, reveal it when scrolling up.
  useEffect(() => {
    let last = window.scrollY;
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const y = window.scrollY;
        if (y > last + 4 && y > 90) {
          setHidden(true);
          setOpenPath(null);
        } else if (y < last - 4) {
          setHidden(false);
        }
        last = y;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const currentPath = stripLangPrefix(location.pathname);
  const isActive = (to: string) => (to === '/' ? currentPath === '/' : currentPath.startsWith(to));

  /* Floating capsule: the sticky wrapper stays in normal flow at exactly 80px
     (pt-4 + h-16), so the hero's calc(100vh - 80px) and the 88px anchor
     scroll-margins keep working. The wrapper itself is transparent and
     click-through; only the pill (and the mobile panel) catch the pointer. */
  return (
    <nav
      className={clsx(
        'pointer-events-none sticky top-0 z-50 pt-4 transition-transform duration-300 will-change-transform',
        hidden ? '-translate-y-full' : 'translate-y-0',
      )}
    >
      <div className="rd-container">
        <div className="pointer-events-auto mx-auto max-w-[1180px] rounded-full border border-[var(--rd-hair)] bg-[var(--rd-nav-surface)] shadow-[var(--rd-nav-shadow)] backdrop-blur-[8px]">
          <div className="grid h-16 grid-cols-[1fr_auto_1fr] items-center gap-4 px-4 lg:pl-7 lg:pr-3">
            {/* left: logo */}
            <div className="flex items-center justify-start">
              <Link
                to={localizePath('/')}
                className="flex items-center"
                aria-label="RapidDraft home"
                onClick={() => window.scrollTo(0, 0)}
              >
                <BrandMark theme={theme} size="sm" />
              </Link>
            </div>

            {/* center: nav links */}
            <div className="hidden items-center gap-6 lg:flex lg:gap-8">
              {nav.links.map((link) => (
                <Link
                  key={link.to}
                  to={localizePath(link.to)}
                  className={clsx(
                    'group inline-flex items-center gap-1 whitespace-nowrap text-[15px] font-medium transition-colors duration-150',
                    isActive(link.to)
                      ? 'text-[var(--rd-accent)]'
                      : 'text-[var(--rd-head)] hover:text-[var(--rd-accent)]',
                  )}
                  style={{ fontFamily: 'var(--rd-meta)' }}
                >
                  <span
                    className={clsx(
                      'transition-colors',
                      isActive(link.to)
                        ? 'text-[var(--rd-accent)]'
                        : 'text-[var(--rd-accent)] opacity-0 group-hover:opacity-100',
                    )}
                    style={{ fontFamily: 'var(--rd-mono)' }}
                    aria-hidden="true"
                  >
                    /
                  </span>
                  {link.name}
                </Link>
              ))}
            </div>

            {/* right: controls */}
            <div className="flex items-center justify-end gap-3">
              <div className="hidden items-center gap-3 lg:flex">
                <LangToggle lang={lang} onSet={setLang} />
                <ThemeToggle theme={theme} onToggle={toggle} />
                <Link to={localizePath('/book-demo')} className="rd-btn rd-btn--primary rd-btn--sm">
                  {nav.cta}
                </Link>
              </div>
              <div className="flex items-center gap-2 lg:hidden">
                <ThemeToggle theme={theme} onToggle={toggle} />
                <button
                  type="button"
                  onClick={() =>
                    setOpenPath((current) => (current === location.pathname ? null : location.pathname))
                  }
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--rd-edge)] text-[var(--rd-head)] transition hover:border-[var(--rd-accent)] hover:text-[var(--rd-accent)]"
                  aria-label="Toggle menu"
                  aria-expanded={isOpen}
                >
                  {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className={clsx(
            'pointer-events-auto mt-2 rounded-[var(--rd-r-lg)] border border-[var(--rd-hair)] bg-[var(--rd-surface)] lg:hidden',
            isOpen ? 'block' : 'hidden',
          )}
        >
          <div className="flex flex-col gap-1 px-4 py-4">
            {nav.links.map((link) => (
              <Link
                key={link.to}
                to={localizePath(link.to)}
                onClick={() => setOpenPath(null)}
                className={clsx(
                  'rounded-[var(--rd-r-md)] px-3 py-3 text-[15px] transition',
                  isActive(link.to) ? 'text-[var(--rd-accent)]' : 'text-[var(--rd-head)] hover:text-[var(--rd-accent)]',
                )}
                style={{ fontFamily: 'var(--rd-meta)' }}
              >
                <span className="mr-1.5 text-[var(--rd-accent)]" style={{ fontFamily: 'var(--rd-mono)' }}>
                  /
                </span>
                {link.name}
              </Link>
            ))}
            <div className="flex items-center justify-between gap-3 px-3 pt-3">
              <LangToggle lang={lang} onSet={setLang} />
            </div>
            <Link
              to={localizePath('/book-demo')}
              onClick={() => setOpenPath(null)}
              className="rd-btn rd-btn--primary mt-3 w-full"
            >
              {nav.cta}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
