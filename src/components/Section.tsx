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
                'py-16 md:py-28',
                background === 'light' ? 'bg-[#fff8f3]' : 'bg-white',
                className
            )}
        >
            <div className="mx-auto max-w-[1180px] px-5 sm:px-6 lg:px-8 xl:px-10">
                {children}
            </div>
        </section>
    );
}
