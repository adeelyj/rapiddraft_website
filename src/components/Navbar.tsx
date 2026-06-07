import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import clsx from 'clsx';
import BrandMark from './BrandMark';
import { useTheme, type Theme } from '../hooks/useTheme';

function ThemeToggle({
  theme,
  onToggle,
  className,
}: {
  theme: Theme;
  onToggle: () => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      className={clsx(
        'inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--rd-edge)] text-[var(--rd-head)] transition hover:border-[var(--rd-accent)] hover:text-[var(--rd-accent)]',
        className,
      )}
    >
      {theme === 'dark' ? <Sun className="h-[18px] w-[18px]" /> : <Moon className="h-[18px] w-[18px]" />}
    </button>
  );
}

const NAV_LINKS = [
  { name: 'Platform', to: '/platform' },
  { name: 'Use cases', to: '/use-cases' },
  { name: 'Security', to: '/security' },
  { name: 'Company', to: '/company' },
];

export default function Navbar() {
  const [openPath, setOpenPath] = useState<string | null>(null);
  const location = useLocation();
  const isOpen = openPath === location.pathname;
  const { theme, toggle } = useTheme();

  const isActive = (to: string) =>
    to === '/' ? location.pathname === '/' : location.pathname.startsWith(to);

  return (
    <nav className="sticky top-0 z-50 border-b border-[var(--rd-hair)] bg-[var(--rd-bg)]">
      <div className="rd-container">
        <div className="flex h-20 items-center justify-between gap-6">
          <Link to="/" className="flex items-center" aria-label="RapidDraft home">
            <BrandMark theme={theme} size="sm" />
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
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
                    'font-[var(--rd-mono)] transition-colors',
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
            <ThemeToggle theme={theme} onToggle={toggle} />
            <Link to="/book-demo" className="rd-btn rd-btn--primary h-10 px-5 text-[13.5px]">
              Book a demo
            </Link>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle theme={theme} onToggle={toggle} />
            <button
              type="button"
              onClick={() =>
              setOpenPath((current) => (current === location.pathname ? null : location.pathname))
            }
            className="inline-flex items-center justify-center rounded-[var(--rd-r-md)] border border-[var(--rd-edge)] p-2 text-[var(--rd-head)] transition hover:border-[var(--rd-accent)] hover:text-[var(--rd-accent)] md:hidden"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
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
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpenPath(null)}
              className={clsx(
                'rounded-[var(--rd-r-md)] px-3 py-3 text-[15px] transition',
                isActive(link.to)
                  ? 'text-[var(--rd-accent)]'
                  : 'text-[var(--rd-head)] hover:text-[var(--rd-accent)]',
              )}
              style={{ fontFamily: 'var(--rd-meta)' }}
            >
              <span className="mr-1.5 text-[var(--rd-accent)]" style={{ fontFamily: 'var(--rd-mono)' }}>
                /
              </span>
              {link.name}
            </Link>
          ))}
          <Link
            to="/book-demo"
            onClick={() => setOpenPath(null)}
            className="rd-btn rd-btn--primary mt-2 w-full"
          >
            Book a demo
          </Link>
        </div>
      </div>
    </nav>
  );
}
