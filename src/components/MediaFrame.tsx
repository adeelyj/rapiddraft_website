import clsx from 'clsx';

type MediaFrameProps = {
    src: string;
    alt: string;
    poster?: string;
    aspectClassName?: string;
    frameClassName?: string;
    mediaClassName?: string;
    caption?: string;
    priority?: boolean;
};

export default function MediaFrame({
    src,
    alt,
    poster,
    aspectClassName = 'aspect-[16/10]',
    frameClassName,
    mediaClassName,
    caption,
    priority = false,
}: MediaFrameProps) {
    const isVideo = src.endsWith('.mp4') || src.endsWith('.webm');

    return (
        <figure className={clsx('group relative', frameClassName)}>
            <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top,rgba(255,237,213,0.58),transparent_62%)] blur-2xl transition duration-500 group-hover:scale-[1.02]" />
            <div className="relative overflow-hidden rounded-[2rem] border border-stone-200/80 bg-white shadow-[0_28px_80px_-36px_rgba(17,24,39,0.3)]">
                <div className="flex items-center gap-2 border-b border-stone-200/80 px-5 py-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-primary/65" />
                    <span className="h-2.5 w-2.5 rounded-full bg-stone-300" />
                    <span className="h-2.5 w-2.5 rounded-full bg-stone-300" />
                </div>
                <div className={clsx('bg-stone-100', aspectClassName)}>
                    {isVideo ? (
                        <video
                            src={src}
                            poster={poster}
                            autoPlay
                            loop
                            muted
                            playsInline
                            aria-label={alt}
                            className={clsx(
                                'h-full w-full object-cover transition duration-500 group-hover:scale-[1.01]',
                                mediaClassName
                            )}
                        />
                    ) : (
                        <img
                            src={src}
                            alt={alt}
                            loading={priority ? 'eager' : 'lazy'}
                            className={clsx(
                                'h-full w-full object-cover transition duration-500 group-hover:scale-[1.01]',
                                mediaClassName
                            )}
                        />
                    )}
                </div>
            </div>
            {caption ? (
                <figcaption className="mt-3 text-sm leading-6 text-gray-500">{caption}</figcaption>
            ) : null}
        </figure>
    );
}
