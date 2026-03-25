import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { type MouseEvent, useEffect, useMemo, useRef, useState } from 'react';

export type HeroCapabilityItem = {
    key: string;
    label: string;
    title: string;
    description: string;
    media: string;
    poster?: string;
    alt: string;
    mediaClassName?: string;
    durationMs: number;
};

type HeroCapabilityRailProps = {
    items: HeroCapabilityItem[];
    activeKey: string;
    onSelect: (key: string) => void;
};

type SeekRequest = {
    id: number;
    fraction: number;
};

type VideoStageProps = {
    item: HeroCapabilityItem;
    seekRequest: SeekRequest;
    onProgress: (fraction: number) => void;
    onAdvance: () => void;
};

function VideoStage({ item, seekRequest, onProgress, onAdvance }: VideoStageProps) {
    const videoRef = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const duration = video.duration || item.durationMs / 1000;
        const nextTime = Math.max(0, Math.min(duration, duration * seekRequest.fraction));
        video.currentTime = nextTime;
        onProgress(seekRequest.fraction);
        void video.play().catch(() => undefined);
    }, [item.durationMs, onProgress, seekRequest]);

    const syncProgress = () => {
        const video = videoRef.current;
        if (!video) return;

        const duration = video.duration || item.durationMs / 1000;
        const fraction = duration > 0 ? video.currentTime / duration : 0;
        onProgress(Math.max(0, Math.min(1, fraction)));
    };

    return (
        <video
            ref={videoRef}
            src={item.media}
            poster={item.poster}
            autoPlay
            muted
            playsInline
            preload="auto"
            aria-label={item.alt}
            onLoadedMetadata={() => {
                const video = videoRef.current;
                if (!video) return;

                const duration = video.duration || item.durationMs / 1000;
                video.currentTime = duration * seekRequest.fraction;
                onProgress(seekRequest.fraction);
                void video.play().catch(() => undefined);
            }}
            onTimeUpdate={syncProgress}
            onPlaying={syncProgress}
            onEnded={() => {
                onProgress(1);
                onAdvance();
            }}
            className={clsx('h-full w-full object-cover', item.mediaClassName)}
        />
    );
}

export default function HeroCapabilityRail({
    items,
    activeKey,
    onSelect,
}: HeroCapabilityRailProps) {
    const activeItem = items.find((item) => item.key === activeKey) ?? items[0];
    const activeIndex = useMemo(
        () => items.findIndex((item) => item.key === activeKey),
        [activeKey, items]
    );
    const [progress, setProgress] = useState(0);
    const [seekRequest, setSeekRequest] = useState<SeekRequest>({ id: 0, fraction: 0 });

    useEffect(() => {
        setProgress(0);
    }, [activeKey]);

    const advanceToNext = () => {
        const currentIndex = activeIndex === -1 ? 0 : activeIndex;
        const nextIndex = (currentIndex + 1) % items.length;
        setSeekRequest((current) => ({ id: current.id + 1, fraction: 0 }));
        onSelect(items[nextIndex].key);
    };

    const handleSeek = (itemKey: string, event: MouseEvent<HTMLButtonElement>) => {
        const { left, width } = event.currentTarget.getBoundingClientRect();
        const fraction = Math.max(0, Math.min(1, (event.clientX - left) / width));

        setSeekRequest((current) => ({ id: current.id + 1, fraction }));

        if (itemKey !== activeKey) {
            onSelect(itemKey);
        } else {
            setProgress(fraction);
        }
    };

    return (
        <div className="grid gap-4 sm:gap-5">
            <div className="overflow-hidden rounded-[2rem] border border-[#262d3f] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(234,88,12,0.16),transparent_36%),linear-gradient(140deg,#171d2b_0%,#1d2435_52%,#2a2331_100%)] p-4 shadow-[0_42px_120px_-48px_rgba(17,24,39,0.58)] sm:rounded-[2.25rem] sm:p-5 md:p-6">
                <div className="grid grid-cols-2 gap-2.5 sm:gap-3 lg:grid-cols-4">
                    {items.map((item) => (
                        <div
                            key={item.key}
                            className={clsx(
                                'rounded-[1.2rem] px-3 py-3 transition duration-300 sm:rounded-[1.35rem] sm:px-4 sm:py-4',
                                activeKey === item.key ? 'bg-white/8' : 'hover:bg-white/5'
                            )}
                            style={{ color: activeKey === item.key ? '#ffffff' : 'rgba(255,255,255,0.7)' }}
                        >
                            <button
                                type="button"
                                onClick={() => {
                                    setSeekRequest((current) => ({ id: current.id + 1, fraction: 0 }));
                                    onSelect(item.key);
                                }}
                                className="block w-full appearance-none border-0 bg-transparent p-0 text-left text-inherit outline-none"
                            >
                                <div className="min-h-[38px] text-[13px] font-semibold tracking-tight text-current sm:min-h-[42px] sm:text-[15px] lg:min-h-[48px]">
                                    {item.label}
                                </div>
                            </button>
                            <button
                                type="button"
                                onClick={(event) => handleSeek(item.key, event)}
                                aria-label={`Seek ${item.label}`}
                                className="relative mt-0.5 block h-2 w-full appearance-none overflow-hidden rounded-full border-0 bg-transparent p-0 outline-none sm:mt-1"
                            >
                                <div className="absolute inset-0 rounded-full bg-white/20 ring-1 ring-inset ring-white/12" />
                                <div
                                    className="relative z-[1] h-full rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.55)] transition-[width] duration-75"
                                    style={{ width: `${activeKey === item.key ? progress * 100 : 0}%` }}
                                />
                            </button>
                        </div>
                    ))}
                </div>

                <div className="mt-4 rounded-[1.5rem] border border-white/10 bg-white/5 p-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:rounded-[1.75rem] sm:p-4">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeItem.key}
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -12 }}
                            transition={{ duration: 0.28 }}
                            className="overflow-hidden rounded-[1.5rem] border border-white/8 bg-white"
                        >
                            <div className="flex items-center gap-2 border-b border-stone-200/80 px-5 py-3">
                                <span className="h-2.5 w-2.5 rounded-full bg-primary/70" />
                                <span className="h-2.5 w-2.5 rounded-full bg-stone-300" />
                                <span className="h-2.5 w-2.5 rounded-full bg-stone-300" />
                            </div>
                            <div className="aspect-[4/3] bg-stone-100 sm:aspect-[16/10] lg:aspect-[16/9]">
                                <VideoStage
                                    item={activeItem}
                                    seekRequest={seekRequest}
                                    onProgress={setProgress}
                                    onAdvance={advanceToNext}
                                />
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
