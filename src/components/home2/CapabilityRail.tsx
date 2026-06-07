/* Hero capability rail (RapidDraft v2) — interactive, auto-advancing video rail
   in the flat hairline design language. Tabs are the four platform modules.
   Reuses the seek/auto-advance logic from the original rail. */
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { type MouseEvent, useEffect, useMemo, useRef, useState } from 'react';

export type RailItem = {
  key: string;
  label: string;
  media: string;
  poster?: string;
  alt: string;
  durationMs: number;
};

type SeekRequest = { id: number; fraction: number };

function VideoStage({
  item,
  seekRequest,
  onProgress,
  onAdvance,
}: {
  item: RailItem;
  seekRequest: SeekRequest;
  onProgress: (f: number) => void;
  onAdvance: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const duration = video.duration || item.durationMs / 1000;
    video.currentTime = Math.max(0, Math.min(duration, duration * seekRequest.fraction));
    onProgress(seekRequest.fraction);
    void video.play().catch(() => undefined);
  }, [item.durationMs, onProgress, seekRequest]);

  const sync = () => {
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
      onTimeUpdate={sync}
      onPlaying={sync}
      onEnded={() => {
        onProgress(1);
        onAdvance();
      }}
      className="h-full w-full object-cover"
    />
  );
}

export default function CapabilityRail({ items }: { items: RailItem[] }) {
  const [activeKey, setActiveKey] = useState(items[0].key);
  const activeItem = items.find((i) => i.key === activeKey) ?? items[0];
  const activeIndex = useMemo(() => items.findIndex((i) => i.key === activeKey), [activeKey, items]);
  const [progress, setProgress] = useState(0);
  const [seekRequest, setSeekRequest] = useState<SeekRequest>({ id: 0, fraction: 0 });

  const select = (key: string) => {
    setProgress(0);
    setSeekRequest((c) => ({ id: c.id + 1, fraction: 0 }));
    setActiveKey(key);
  };

  const advance = () => {
    const next = ((activeIndex === -1 ? 0 : activeIndex) + 1) % items.length;
    select(items[next].key);
  };

  const handleSeek = (key: string, event: MouseEvent<HTMLButtonElement>) => {
    const { left, width } = event.currentTarget.getBoundingClientRect();
    const fraction = Math.max(0, Math.min(1, (event.clientX - left) / width));
    setSeekRequest((c) => ({ id: c.id + 1, fraction }));
    setProgress(fraction);
    if (key !== activeKey) setActiveKey(key);
  };

  return (
    <div className="rd-panel overflow-hidden rounded-[16px] p-3 sm:p-4">
      <div className="grid grid-cols-2 gap-2">
        {items.map((item) => {
          const active = item.key === activeKey;
          return (
            <div key={item.key} className="flex flex-col gap-2 rounded-[6px] px-2 py-1.5">
              <button
                type="button"
                onClick={() => select(item.key)}
                className={clsx(
                  'text-left text-[13px] font-medium leading-snug transition-colors sm:text-[14px]',
                  active ? 'text-[var(--rd-fg-strong)]' : 'text-[var(--rd-fg-3)] hover:text-[var(--rd-fg)]',
                )}
                style={{ fontFamily: 'var(--rd-sans)' }}
              >
                {item.label}
              </button>
              <button
                type="button"
                onClick={(e) => handleSeek(item.key, e)}
                aria-label={`Seek ${item.label}`}
                className="relative block h-[3px] w-full overflow-hidden rounded-full bg-[var(--rd-hair)]"
              >
                <div
                  className="absolute inset-y-0 left-0 rounded-full bg-[var(--rd-accent)] transition-[width] duration-75"
                  style={{ width: `${active ? progress * 100 : 0}%` }}
                />
              </button>
            </div>
          );
        })}
      </div>

      <div className="mt-3 overflow-hidden rounded-[12px] border border-[var(--rd-hair)] bg-[var(--rd-surface)]">
        <div className="flex items-center gap-2 border-b border-[var(--rd-hair)] px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--rd-accent)]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--rd-hair)]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--rd-hair)]" />
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeItem.key}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.24 }}
            className="aspect-[16/10] bg-[var(--rd-sunken)]"
          >
            <VideoStage
              item={activeItem}
              seekRequest={seekRequest}
              onProgress={setProgress}
              onAdvance={advance}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
