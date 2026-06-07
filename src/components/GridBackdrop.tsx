import { useEffect, useRef } from 'react';

/* Fixed page-wide hairline grid with a soft orange spotlight that follows the
   cursor (sets --rd-mx / --rd-my, throttled to animation frames). Pointer
   tracking is skipped when the user prefers reduced motion or has no fine
   pointer (touch). */
export default function GridBackdrop() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    if (reduce || !finePointer) return;

    let raf = 0;
    let x = -400;
    let y = -400;
    const apply = () => {
      raf = 0;
      root.style.setProperty('--rd-mx', `${x}px`);
      root.style.setProperty('--rd-my', `${y}px`);
    };
    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (!raf) raf = requestAnimationFrame(apply);
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={rootRef} className="rd-app__grid-root" aria-hidden="true">
      <div className="rd-app__grid" />
      <div className="rd-app__grid-orb" />
      <div className="rd-app__grid-glow" />
    </div>
  );
}
