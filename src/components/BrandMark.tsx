import clsx from 'clsx';

type BrandMarkProps = {
    theme?: 'light' | 'dark';
    size?: 'sm' | 'md';
    className?: string;
};

const sizeClasses = {
    sm: 'h-9 w-9 sm:h-10 sm:w-10',
    md: 'h-11 w-11 sm:h-12 sm:w-12',
} as const;

export default function BrandMark({
    theme = 'light',
    size = 'sm',
    className,
}: BrandMarkProps) {
    void theme;

    return (
        <img
            src="/Logo.svg"
            alt="RapidDraft"
            className={clsx('block shrink-0 object-contain', sizeClasses[size], className)}
        />
    );
}
