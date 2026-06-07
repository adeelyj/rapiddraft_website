import clsx from 'clsx';
import { type ReactNode } from 'react';

interface SectionProps {
    children: ReactNode;
    className?: string;
    id?: string;
    background?: 'white' | 'light';
}

/* Legacy section shell, still used by the older routes (deal-room_v1/_v2,
   theegarten-pactec, home-v1). The current pages use the rd2 <Section> from
   components/ui/primitives. Backgrounds and block padding are now sourced from
   the rd2 tokens (--rd-surface / --rd-bg) and the .rd-section padding scale so
   the legacy pages drift toward the design system instead of hardcoded values. */
export default function Section({ children, className, id, background = 'white' }: SectionProps) {
    return (
        <section
            id={id}
            className={clsx(
                'py-[clamp(56px,9vw,120px)]',
                background === 'light' ? 'bg-[var(--rd-bg)]' : 'bg-[var(--rd-surface)]',
                className
            )}
        >
            <div className="mx-auto max-w-[1180px] px-5 sm:px-6 lg:px-8 xl:px-10">
                {children}
            </div>
        </section>
    );
}
