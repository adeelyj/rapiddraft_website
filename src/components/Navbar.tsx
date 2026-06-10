import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';
import BrandMark from './BrandMark';
import { useLocale } from '../i18n/LocaleContext';

export default function Navbar() {
    const [openPath, setOpenPath] = useState<string | null>(null);
    const [scrolled, setScrolled] = useState(false);
    const [hovered, setHovered] = useState(false);
    const [scrollingUp, setScrollingUp] = useState(false);
    const lastScrollY = useRef(0);
    const location = useLocation();
    const { locale, localizePath } = useLocale();
    const isCadConcept = location.pathname === '/cad-concept' || location.pathname === '/de/cad-concept';
    const isOpen = openPath === location.pathname;
    const isCondensed = scrolled && !isOpen && !hovered && !scrollingUp;

    const navLinks = [
        { name: locale === 'de' ? 'Start' : 'Home', path: '/' },
        { name: 'ROI', path: '/#roi-calculator' },
        { name: locale === 'de' ? 'Anwendungen' : 'Use Cases', path: '/use-cases' },
        { name: 'Team', path: '/team' },
    ];

    const isActive = (path: string) => {
        const localizedPath = localizePath(path);
        const [pathname, hash] = localizedPath.split('#');
        if (hash) {
            return location.pathname === pathname && location.hash === `#${hash}`;
        }
        if ((pathname === '/' || pathname === '/de') && location.pathname === pathname) return location.hash === '';
        if ((pathname === '/' || pathname === '/de') && location.pathname !== pathname) return false;
        return location.pathname.startsWith(pathname);
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const scrollDelta = currentScrollY - lastScrollY.current;

            setScrolled(currentScrollY > 120);

            if (currentScrollY <= 120) {
                setScrollingUp(false);
            } else if (scrollDelta < -8) {
                setScrollingUp(true);
            } else if (scrollDelta > 8) {
                setScrollingUp(false);
            }

            lastScrollY.current = currentScrollY;
        };

        lastScrollY.current = window.scrollY;
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={clsx(
                'pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5',
                isCadConcept ? 'text-white' : 'text-gray-950'
            )}
        >
            <div
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                onFocus={() => setHovered(true)}
                onBlur={(event) => {
                    if (!event.currentTarget.contains(event.relatedTarget)) {
                        setHovered(false);
                    }
                }}
                className={clsx(
                    'pointer-events-auto mx-auto max-w-[1180px] px-5 transition-[padding] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] sm:px-6 lg:px-8 xl:px-10'
                )}
            >
                <div
                    className={clsx(
                        'relative mx-auto flex items-center justify-between overflow-hidden rounded-full border shadow-[0_24px_70px_-42px_rgba(15,23,42,0.7)] backdrop-blur-2xl backdrop-saturate-150 transition-[width,height,padding,box-shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]',
                        'before:pointer-events-none before:absolute before:inset-x-6 before:top-0 before:h-px before:bg-white/80 before:content-[""]',
                        'after:pointer-events-none after:absolute after:inset-0 after:rounded-full after:shadow-[inset_0_1px_0_rgba(255,255,255,0.72),inset_0_-18px_38px_-28px_rgba(15,23,42,0.5)] after:content-[""]',
                        isCondensed
                            ? 'h-9 w-16 justify-center px-0 shadow-[0_14px_36px_-26px_rgba(15,23,42,0.78)]'
                            : 'h-16 w-full gap-4 pl-6 pr-4 sm:gap-6 sm:pl-7 sm:pr-5',
                        isCadConcept
                            ? 'border-white/12 bg-[linear-gradient(135deg,rgba(8,15,25,0.82),rgba(14,22,35,0.58)_48%,rgba(234,88,12,0.16))]'
                            : 'border-white/65 bg-[linear-gradient(135deg,rgba(255,255,255,0.78),rgba(255,250,247,0.54)_48%,rgba(234,88,12,0.12))] ring-1 ring-black/[0.035]'
                    )}
                >
                    <div className={clsx('flex items-center', isCondensed && 'w-full justify-center')}>
                        <Link
                            to={localizePath('/')}
                            className={clsx(
                                'relative z-10 hidden items-center transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] md:flex',
                                isCondensed && 'scale-[0.56]',
                                isCadConcept && 'hover:opacity-90'
                            )}
                        >
                            <BrandMark theme={isCadConcept ? 'dark' : 'light'} size="sm" />
                        </Link>
                        <button
                            type="button"
                            onClick={() => {
                                if (isCondensed) {
                                    setOpenPath(location.pathname);
                                    return;
                                }

                                setOpenPath((current) => (current === location.pathname ? null : location.pathname));
                            }}
                            className={clsx(
                                'relative z-10 flex items-center justify-center transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary md:hidden',
                                isCondensed ? 'h-full w-full scale-[0.56]' : 'h-auto w-auto'
                            )}
                            aria-label={isOpen ? 'Close main menu' : 'Open main menu'}
                            aria-expanded={isOpen}
                        >
                            <BrandMark theme={isCadConcept ? 'dark' : 'light'} size="sm" />
                        </button>
                    </div>

                    <div
                        className={clsx(
                            'hidden overflow-hidden transition-[max-width,opacity,gap] duration-200 ease-out md:flex md:items-center',
                            isCondensed
                                ? 'pointer-events-none max-w-0 gap-0 opacity-0'
                                : 'max-w-[720px] gap-7 opacity-100 delay-75'
                        )}
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={localizePath(link.path)}
                                className={clsx(
                                    'relative z-10 text-sm font-semibold transition-colors duration-200',
                                    isActive(link.path)
                                        ? (isCadConcept ? 'text-[#deac49]' : 'text-primary')
                                        : (isCadConcept ? 'text-[#f1e8dc]/88 hover:text-white' : 'text-gray-800 hover:text-gray-950')
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            to={localizePath('/book-demo')}
                            className={clsx(
                                'relative z-10 inline-flex items-center rounded-full px-5 py-2.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5',
                                isCadConcept
                                    ? 'bg-[#ea580c] shadow-[0_18px_40px_-22px_rgba(234,88,12,0.8)] hover:bg-[#de6349]'
                                    : 'bg-primary shadow-[0_14px_34px_-18px_rgba(234,88,12,0.8)] hover:bg-primary-hover'
                            )}
                        >
                            {locale === 'de' ? 'Demo buchen' : 'Book a Demo'}
                        </Link>
                    </div>

                    <div
                        className={clsx(
                            'flex items-center transition-all duration-300 md:hidden',
                            isCondensed && 'pointer-events-none max-w-0 opacity-0'
                        )}
                    >
                        <button
                            onClick={() => {
                                setOpenPath((current) => (current === location.pathname ? null : location.pathname));
                            }}
                            className={clsx(
                                'relative z-10 inline-flex items-center justify-center rounded-full p-2 transition focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary',
                                isCadConcept
                                    ? 'border border-white/10 bg-white/[0.05] text-[#d8d3cb] hover:border-white/20 hover:bg-white/[0.08] hover:text-white'
                                    : 'border border-white/80 bg-white/80 text-gray-800 shadow-sm hover:border-stone-300 hover:bg-white hover:text-gray-950'
                            )}
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            <div
                className={clsx(
                    'pointer-events-auto mx-8 mt-2 max-w-[1180px] overflow-hidden rounded-[1.5rem] border shadow-[0_24px_70px_-42px_rgba(15,23,42,0.55)] backdrop-blur-2xl transition-[opacity,transform] duration-200 ease-out sm:mx-11 md:hidden',
                    isCadConcept
                        ? 'border-white/12 bg-[#09111b]/88'
                        : 'border-white/70 bg-white/82',
                    isOpen && !isCondensed
                        ? 'translate-y-0 opacity-100'
                        : 'pointer-events-none -translate-y-1 opacity-0'
                )}
            >
                <div className="mx-auto max-w-[1180px] space-y-1 px-5 pb-4 pt-2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={localizePath(link.path)}
                            onClick={() => setOpenPath(null)}
                            className={clsx(
                                'block rounded-2xl px-4 py-3 text-base font-medium',
                                isActive(link.path)
                                    ? (isCadConcept ? 'bg-white/[0.07] text-[#deac49]' : 'bg-orange-50 text-primary')
                                    : (isCadConcept ? 'text-[#d8d3cb] hover:bg-white/[0.04] hover:text-white' : 'text-gray-700 hover:bg-stone-50 hover:text-gray-900')
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="pt-3">
                        <Link
                            to={localizePath('/book-demo')}
                            className={clsx(
                                'block w-full rounded-full px-4 py-3 text-center text-base font-semibold text-white transition',
                                isCadConcept
                                    ? 'bg-[#ea580c] shadow-[0_18px_40px_-22px_rgba(234,88,12,0.8)] hover:bg-[#de6349]'
                                    : 'bg-primary shadow-[0_14px_34px_-18px_rgba(234,88,12,0.8)] hover:bg-primary-hover'
                            )}
                        >
                            {locale === 'de' ? 'Demo buchen' : 'Book a Demo'}
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
