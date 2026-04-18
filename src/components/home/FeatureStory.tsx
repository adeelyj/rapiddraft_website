import clsx from 'clsx';
import { type ReactNode } from 'react';
import Reveal from './Reveal';

type FeatureStoryProps = {
    eyebrow: string;
    title: string;
    description: string;
    children: ReactNode;
    reverse?: boolean;
};

export default function FeatureStory({
    eyebrow,
    title,
    description,
    children,
    reverse = false,
}: FeatureStoryProps) {
    return (
        <Reveal
            className={clsx(
                'grid gap-8 border-b border-stone-200/80 pb-14 last:border-b-0 last:pb-0 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:items-center',
                reverse && 'lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1'
            )}
        >
            <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-primary">{eyebrow}</div>
                <h3 className="mt-4 text-3xl font-semibold tracking-tight text-gray-950">{title}</h3>
                <p className="mt-4 text-lg leading-8 text-gray-600">{description}</p>
            </div>
            <div>{children}</div>
        </Reveal>
    );
}
