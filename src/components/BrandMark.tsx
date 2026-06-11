import clsx from 'clsx';

type BrandMarkProps = {
    theme?: 'light' | 'dark';
    size?: 'sm' | 'md';
    className?: string;
};

const tileClasses = {
    sm: 'h-9 w-9 sm:h-10 sm:w-10',
    md: 'h-11 w-11 sm:h-12 sm:w-12',
} as const;

const wordmarkClasses = {
    sm: 'text-[19px] sm:text-[20px]',
    md: 'text-[22px] sm:text-[24px]',
} as const;

/* Lockup = vector tile + live-text wordmark. Per the brand assets the tile is
   identical in both themes; only the wordmark color flips (dark text on light,
   white on dark). The text wordmark stays crisp at any DPI, weighs nothing,
   and inherits the site's Inter. */
export default function BrandMark({
    theme = 'light',
    size = 'sm',
    className,
}: BrandMarkProps) {
    return (
        <span className={clsx('inline-flex items-center gap-2.5', className)}>
            <img
                src="/media/rd-mark.svg"
                alt=""
                aria-hidden="true"
                className={clsx('block shrink-0 object-contain', tileClasses[size])}
            />
            <span
                className={clsx(
                    'font-semibold leading-none tracking-[-0.02em]',
                    wordmarkClasses[size],
                    theme === 'dark' ? 'text-white' : 'text-[#1f1f1f]',
                )}
                style={{ fontFamily: 'var(--rd-sans)' }}
            >
                RapidDraft
            </span>
        </span>
    );
}
