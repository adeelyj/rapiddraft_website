import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useEffect } from 'react';

type KineticGridBackgroundProps = {
    className?: string;
};

export default function KineticGridBackground({ className }: KineticGridBackgroundProps) {
    const shouldReduceMotion = useReducedMotion();
    const pointerX = useMotionValue(0.52);
    const pointerY = useMotionValue(0.18);
    const { scrollYProgress } = useScroll();

    useEffect(() => {
        if (shouldReduceMotion || typeof window === 'undefined') return;

        const handlePointerMove = (event: PointerEvent) => {
            pointerX.set(event.clientX / window.innerWidth);
            pointerY.set(event.clientY / window.innerHeight);
        };

        window.addEventListener('pointermove', handlePointerMove, { passive: true });

        return () => {
            window.removeEventListener('pointermove', handlePointerMove);
        };
    }, [pointerX, pointerY, shouldReduceMotion]);

    const gridX = useSpring(useTransform(pointerX, [0, 1], [-28, 28]), {
        stiffness: 40,
        damping: 18,
        mass: 0.6,
    });
    const gridY = useSpring(useTransform(pointerY, [0, 1], [-18, 18]), {
        stiffness: 40,
        damping: 18,
        mass: 0.6,
    });
    const fineGridX = useSpring(useTransform(pointerX, [0, 1], [-16, 16]), {
        stiffness: 50,
        damping: 20,
        mass: 0.5,
    });
    const fineGridY = useSpring(useTransform(pointerY, [0, 1], [-10, 10]), {
        stiffness: 50,
        damping: 20,
        mass: 0.5,
    });
    const glowX = useTransform(pointerX, [0, 1], [14, 86]);
    const glowY = useTransform(pointerY, [0, 1], [10, 56]);
    const glow = useMotionTemplate`radial-gradient(circle at ${glowX}% ${glowY}%, rgba(222, 172, 73, 0.2), transparent 22%), radial-gradient(circle at 82% 22%, rgba(234, 88, 12, 0.18), transparent 24%)`;
    const vignetteAlpha = useTransform(scrollYProgress, [0, 1], [0.2, 0.46]);
    const vignette = useMotionTemplate`linear-gradient(180deg, rgba(7, 11, 18, 0.14), rgba(7, 11, 18, ${vignetteAlpha}))`;
    const beamY = useSpring(useTransform(scrollYProgress, [0, 1], [0, 180]), {
        stiffness: 40,
        damping: 24,
        mass: 0.8,
    });
    const beamOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.34, 0.24, 0.16]);

    return (
        <div className={className}>
            <motion.div
                aria-hidden="true"
                className="cad-grid-layer absolute inset-0"
                style={shouldReduceMotion ? undefined : { x: gridX, y: gridY }}
            />
            <motion.div
                aria-hidden="true"
                className="cad-grid-fine absolute inset-0 opacity-90"
                style={shouldReduceMotion ? undefined : { x: fineGridX, y: fineGridY }}
            />
            <motion.div
                aria-hidden="true"
                className="absolute inset-0"
                style={{ backgroundImage: glow }}
            />
            <motion.div
                aria-hidden="true"
                className="absolute left-1/2 top-0 h-[42rem] w-[52rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.06),transparent_65%)] blur-3xl"
                style={shouldReduceMotion ? { opacity: 0.35 } : { y: beamY, opacity: beamOpacity }}
            />
            <motion.div
                aria-hidden="true"
                className="absolute inset-0"
                style={{ backgroundImage: vignette }}
            />
        </div>
    );
}
