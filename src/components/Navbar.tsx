import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'Product', path: '/' },
        { name: 'Use Cases', path: '/use-cases' },
        { name: 'Team', path: '/team' },
        { name: 'Join Us', path: '/join-us' },
    ];

    const isActive = (path: string) => {
        if (path === '/' && location.pathname !== '/') return false;
        return location.pathname.startsWith(path);
    };

    return (
        <nav className="sticky top-0 z-50 bg-white shadow-sm">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="flex-shrink-0 flex items-center">
                            <img
                                src="/media/rd_logo.png"
                                alt="RapidDraft"
                                className="h-8 w-auto"
                            />
                            <span className="sr-only">RapidDraft</span>
                            <span className="ml-2 inline-flex items-center rounded-full bg-orange-50 text-orange-700 text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5">
                                Coming soon
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex md:items-center md:space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={clsx(
                                    'text-sm font-medium transition-colors duration-200',
                                    isActive(link.path)
                                        ? 'text-primary'
                                        : 'text-gray-600 hover:text-gray-900'
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            to="/book-demo"
                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-2xl text-white bg-primary hover:bg-primary-hover shadow-orange shadow-md transition-all"
                        >
                            Book a Demo
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={clsx('md:hidden', isOpen ? 'block' : 'hidden')}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b border-gray-100">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            className={clsx(
                                'block px-3 py-2 rounded-md text-base font-medium',
                                isActive(link.path)
                                    ? 'text-primary bg-orange-50'
                                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="pt-4 pb-2">
                        <Link
                            to="/book-demo"
                            onClick={() => setIsOpen(false)}
                            className="block w-full text-center px-4 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-primary hover:bg-primary-hover shadow-md"
                        >
                            Book a Demo
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
