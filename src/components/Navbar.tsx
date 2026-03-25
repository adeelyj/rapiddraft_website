import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'Use Cases', path: '/use-cases' },
        { name: 'Team', path: '/team' },
    ];

    const isActive = (path: string) => {
        const pathname = path.split('#')[0];
        if (pathname === '/' && location.pathname !== '/') return false;
        return location.pathname.startsWith(pathname);
    };

    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    return (
        <nav className="sticky top-0 z-50 border-b border-stone-200/70 bg-white/88 backdrop-blur-xl">
            <div className="mx-auto max-w-[1180px] px-5 sm:px-6 lg:px-8 xl:px-10">
                <div className="flex h-16 items-center justify-between gap-4 sm:gap-6">
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center">
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
                                        ? 'text-primary'
                                        : 'text-gray-600 hover:text-gray-950'
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            to="/book-demo"
                            className="inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-[0_14px_34px_-18px_rgba(234,88,12,0.8)] transition duration-300 hover:-translate-y-0.5 hover:bg-primary-hover"
                        >
                            Book a Demo
                        </Link>
                    </div>

                    <div className="flex items-center md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center rounded-full border border-stone-200 bg-white p-2 text-gray-500 transition hover:border-stone-300 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            <div className={clsx('border-b border-stone-200/70 bg-white/95 backdrop-blur-xl md:hidden', isOpen ? 'block' : 'hidden')}>
                <div className="mx-auto max-w-[1180px] space-y-1 px-5 pb-4 pt-2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={clsx(
                                'block rounded-2xl px-4 py-3 text-base font-medium',
                                isActive(link.path)
                                    ? 'bg-orange-50 text-primary'
                                    : 'text-gray-700 hover:bg-stone-50 hover:text-gray-900'
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="pt-3">
                        <Link
                            to="/book-demo"
                            className="block w-full rounded-full bg-primary px-4 py-3 text-center text-base font-semibold text-white shadow-[0_14px_34px_-18px_rgba(234,88,12,0.8)] transition hover:bg-primary-hover"
                        >
                            Book a Demo
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
