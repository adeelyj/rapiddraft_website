import Reveal from './Reveal';

type ProofStripProps = {
    items: Array<{
        metric: string;
        title: string;
        description: string;
    }>;
    microcopy: string;
};

export default function ProofStrip({ items, microcopy }: ProofStripProps) {
    return (
        <Reveal className="mx-auto w-full max-w-[1080px]">
            <div className="mx-auto grid w-full gap-10 border-y border-stone-200/80 py-8 md:grid-cols-3 md:gap-0 md:py-10">
                {items.map((item) => (
                    <div
                        key={item.title}
                        className="px-4 text-center md:px-10 md:border-r md:border-stone-200/80 md:last:border-r-0"
                    >
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
                ))}
            </div>
            <p className="mx-auto mt-5 max-w-3xl text-center text-sm leading-7 text-gray-500">
                {microcopy}
            </p>
        </Reveal>
    );
}
