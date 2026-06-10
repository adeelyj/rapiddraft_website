import type { IconType } from 'react-icons';
import Reveal from './Reveal';

type ProofStripProps = {
    items: Array<{
        metric: string;
        title: string;
        description: string;
        icon?: IconType;
    }>;
    microcopy: string;
};

export default function ProofStrip({ items, microcopy }: ProofStripProps) {
    return (
        <Reveal className="mx-auto w-full max-w-[1080px]">
            <div className="mx-auto grid w-full gap-10 border-y border-stone-200/80 py-8 md:grid-cols-3 md:gap-0 md:py-10">
                {items.map((item) => {
                    const Icon = item.icon;

                    return (
                    <div
                        key={item.title}
                        className="px-4 text-center md:px-10 md:border-r md:border-stone-200/80 md:last:border-r-0"
                    >
                        {Icon ? (
                            <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-orange-200/80 bg-white text-primary shadow-[0_18px_38px_-28px_rgba(234,88,12,0.5)]">
                                <Icon className="h-5 w-5" aria-hidden="true" />
                            </div>
                        ) : null}
                        <div className="text-5xl font-semibold tracking-tight text-primary md:text-[3.75rem]">
                            {item.metric}
                        </div>
                        <div className="metric-title mt-4">
                            {item.title}
                        </div>
                        <div className="metric-copy mt-3">
                            {item.description}
                        </div>
                    </div>
                    );
                })}
            </div>
            <p className="mx-auto mt-5 max-w-3xl text-center text-sm leading-7 text-gray-500">
                {microcopy}
            </p>
        </Reveal>
    );
}
