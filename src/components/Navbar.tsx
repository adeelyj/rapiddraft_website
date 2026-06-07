import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import clsx from 'clsx';
import BrandMark from './BrandMark';
import { useTheme, type Theme } from '../hooks/useTheme';
import { useLang, type Lang } from '../i18n/LanguageContext';

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
      className="inline-flex items-center rounded-full border border-[var(--rd-edge)] p-[3px] text-[12.5px] font-medium"
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
            'rounded-full px-2.5 py-1 leading-none transition-colors',
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
  const { lang, setLang } = useLang();
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

  const isActive = (to: string) => (to === '/' ? location.pathname === '/' : location.pathname.startsWith(to));

  return (
    <nav
      className={clsx(
        'sticky top-0 z-50 border-b border-[var(--rd-hair)] bg-[var(--rd-bg)] transition-transform duration-300 will-change-transform',
        hidden ? '-translate-y-full' : 'translate-y-0',
      )}
    >
      <div className="rd-container">
        <div className="grid h-20 grid-cols-[1fr_auto_1fr] items-center gap-4">
          {/* left: logo */}
          <div className="flex items-center justify-start">
            <Link to="/" className="flex items-center" aria-label="RapidDraft home">
              <BrandMark theme={theme} size="sm" />
            </Link>
          </div>

          {/* center: nav links */}
          <div className="hidden items-center gap-8 md:flex">
            {nav.links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={clsx(
                  'group inline-flex items-center gap-1 whitespace-nowrap text-[13.5px] transition-colors duration-150',
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
            <div className="hidden items-center gap-3 md:flex">
              <LangToggle lang={lang} onSet={setLang} />
              <ThemeToggle theme={theme} onToggle={toggle} />
              <Link to="/book-demo" className="rd-btn rd-btn--primary h-10 px-5 text-[13.5px]">
                {nav.cta}
              </Link>
            </div>
            <div className="flex items-center gap-2 md:hidden">
              <ThemeToggle theme={theme} onToggle={toggle} />
              <button
                type="button"
                onClick={() =>
                  setOpenPath((current) => (current === location.pathname ? null : location.pathname))
                }
                className="inline-flex items-center justify-center rounded-[var(--rd-r-md)] border border-[var(--rd-edge)] p-2 text-[var(--rd-head)] transition hover:border-[var(--rd-accent)] hover:text-[var(--rd-accent)]"
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
          'border-t border-[var(--rd-hair)] bg-[var(--rd-bg)] md:hidden',
          isOpen ? 'block' : 'hidden',
        )}
      >
        <div className="rd-container flex flex-col gap-1 py-4">
          {nav.links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
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
            to="/book-demo"
            onClick={() => setOpenPath(null)}
            className="rd-btn rd-btn--primary mt-3 w-full"
          >
            {nav.cta}
          </Link>
        </div>
      </div>
    </nav>
  );
}
