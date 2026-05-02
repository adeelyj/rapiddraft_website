import clsx from 'clsx';

type BrandMarkProps = {
    theme?: 'light' | 'dark';
    size?: 'sm' | 'md';
    className?: string;
};

const sizeClasses = {
    sm: {
        iconFrame: 'h-7 w-[1.72rem] sm:h-8 sm:w-[1.96rem]',
        text: 'text-[2rem] sm:text-[2.25rem]',
    },
    md: {
        iconFrame: 'h-8 w-[1.96rem] sm:h-9 sm:w-[2.2rem]',
        text: 'text-[2.15rem] sm:text-[2.45rem]',
    },
} as const;

export default function BrandMark({
    theme = 'light',
    size = 'sm',
    className,
}: BrandMarkProps) {
    const styles = sizeClasses[size];

    return (
        <span className={clsx('inline-flex items-center gap-2.5 whitespace-nowrap', className)}>
            <span
                className={clsx(
                    'relative block shrink-0 overflow-hidden rounded-[0.55rem]',
                    styles.iconFrame
                )}
                aria-hidden="true"
            >
                <img
                    src="/media/rd_logo.png"
                    alt=""
                    className="absolute left-0 top-0 h-full w-auto max-w-none"
                />
            </span>
            <span
                className={clsx(
                    'font-semibold leading-none tracking-tight',
                    styles.text,
                    theme === 'dark' ? 'text-white' : 'text-gray-950'
                )}
            >
                RapidDraft
            </span>
        </span>
    );
}
