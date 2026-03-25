import { motion, type HTMLMotionProps } from 'framer-motion';
import clsx from 'clsx';
import { type ReactNode } from 'react';

type RevealProps = HTMLMotionProps<'div'> & {
    children: ReactNode;
    delay?: number;
};

export default function Reveal({ children, className, delay = 0, ...props }: RevealProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
            className={clsx(className)}
            {...props}
        >
            {children}
        </motion.div>
    );
}
