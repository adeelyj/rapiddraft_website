import clsx from 'clsx';
import { type ReactNode } from 'react';

interface SectionProps {
    children: ReactNode;
    className?: string;
    id?: string;
    background?: 'white' | 'light';
}

export default function Section({ children, className, id, background = 'white' }: SectionProps) {
    return (
        <section
            id={id}
            className={clsx(
                'py-16 md:py-24',
                background === 'light' ? 'bg-gray-50' : 'bg-white',
                className
            )}
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {children}
            </div>
        </section>
    );
}
