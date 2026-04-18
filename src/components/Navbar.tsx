import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';

export default function Navbar() {
    const [openPath, setOpenPath] = useState<string | null>(null);
    const location = useLocation();
    const isCadConcept = location.pathname === '/cad-concept';
    const isOpen = openPath === location.pathname;

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Use Cases', path: '/use-cases' },
        { name: 'Team', path: '/team' },
    ];

    const isActive = (path: string) => {
        const pathname = path.split('#')[0];
        if (pathname === '/' && location.pathname !== '/') return false;
        return location.pathname.startsWith(pathname);
    };

    return (
        <nav
            className={clsx(
                'sticky top-0 z-50 border-b backdrop-blur-xl',
                isCadConcept
                    ? 'border-white/10 bg-[#09111b]/78 text-white'
                    : 'border-stone-200/70 bg-white/88'
            )}
        >
            <div className="mx-auto max-w-[1180px] px-5 sm:px-6 lg:px-8 xl:px-10">
                <div className="flex h-16 items-center justify-between gap-4 sm:gap-6">
                    <div className="flex items-center">
                        <Link
                            to="/"
                            className={clsx(
                                'flex items-center transition',
                                isCadConcept && 'rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 hover:bg-white/[0.06]'
                            )}
                        >
                            <img
                                src="/media/rd_logo.png"
                                alt="RapidDraft"
                                className="h-7 w-auto sm:h-8"
                            />
                        </Link>
                    </div>

                    <div className="hidden md:flex md:items-center md:gap-7">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={clsx(
                                    'text-sm font-medium transition-colors duration-200',
                                    isActive(link.path)
                                        ? (isCadConcept ? 'text-[#deac49]' : 'text-primary')
                                        : (isCadConcept ? 'text-[#d8d3cb] hover:text-white' : 'text-gray-600 hover:text-gray-950')
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            to="/book-demo"
                            className={clsx(
                                'inline-flex items-center rounded-full px-5 py-2.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5',
                                isCadConcept
                                    ? 'bg-[#ea580c] shadow-[0_18px_40px_-22px_rgba(234,88,12,0.8)] hover:bg-[#de6349]'
                                    : 'bg-primary shadow-[0_14px_34px_-18px_rgba(234,88,12,0.8)] hover:bg-primary-hover'
                            )}
                        >
                            Book a Demo
                        </Link>
                    </div>

                    <div className="flex items-center md:hidden">
                        <button
                            onClick={() => {
                                setOpenPath((current) => (current === location.pathname ? null : location.pathname));
                            }}
                            className={clsx(
                                'inline-flex items-center justify-center rounded-full p-2 transition focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary',
                                isCadConcept
                                    ? 'border border-white/10 bg-white/[0.05] text-[#d8d3cb] hover:border-white/20 hover:bg-white/[0.08] hover:text-white'
                                    : 'border border-stone-200 bg-white text-gray-500 hover:border-stone-300 hover:text-gray-900'
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
                    'backdrop-blur-xl md:hidden',
                    isCadConcept
                        ? 'border-b border-white/10 bg-[#09111b]/96'
                        : 'border-b border-stone-200/70 bg-white/95',
                    isOpen ? 'block' : 'hidden'
                )}
            >
                <div className="mx-auto max-w-[1180px] space-y-1 px-5 pb-4 pt-2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
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
                            to="/book-demo"
                            className={clsx(
                                'block w-full rounded-full px-4 py-3 text-center text-base font-semibold text-white transition',
                                isCadConcept
                                    ? 'bg-[#ea580c] shadow-[0_18px_40px_-22px_rgba(234,88,12,0.8)] hover:bg-[#de6349]'
                                    : 'bg-primary shadow-[0_14px_34px_-18px_rgba(234,88,12,0.8)] hover:bg-primary-hover'
                            )}
                        >
                            Book a Demo
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
