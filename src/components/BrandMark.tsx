import clsx from 'clsx';

type BrandMarkProps = {
    theme?: 'light' | 'dark';
    size?: 'sm' | 'md';
    className?: string;
};

const sizeClasses = {
    sm: 'h-9 sm:h-10',
    md: 'h-11 sm:h-12',
} as const;

export default function BrandMark({
    theme = 'light',
    size = 'sm',
    className,
}: BrandMarkProps) {
    return (
        <img
            src={theme === 'dark' ? '/media/rd_logo_white.png' : '/media/rd_logo.png'}
            alt="RapidDraft"
            className={clsx('block w-auto object-contain', sizeClasses[size], className)}
        />
    );
}
