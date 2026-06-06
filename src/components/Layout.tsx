import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout() {
    const location = useLocation();

    useEffect(() => {
        if (!location.hash) {
            window.scrollTo(0, 0);
            return;
        }

        const id = location.hash.replace('#', '');
        const timer = window.setTimeout(() => {
            const element = document.getElementById(id);
            if (!element) return;
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 0);

        return () => window.clearTimeout(timer);
    }, [location.pathname, location.hash]);

    return (
        <div className="flex min-h-screen flex-col bg-[var(--rd-bg)] text-[var(--rd-fg)]">
            <Navbar />
            <main className="flex-grow overflow-hidden">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
