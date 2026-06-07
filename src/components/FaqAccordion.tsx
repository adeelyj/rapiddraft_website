/* Accessible FAQ accordion in the v2 design language. All questions are
   visible; clicking a row (or its chevron) expands the answer with a smooth
   auto-height animation (grid-template-rows 0fr -> 1fr). The active row picks
   up the accent. Honors prefers-reduced-motion via the global rd2 motion guard. */
import { useId, useState } from 'react';
import clsx from 'clsx';
import { Body } from './ui/primitives';

type FaqItem = { q: string; a: string };

function FaqRow({ q, a }: FaqItem) {
  const [open, setOpen] = useState(false);
  const id = useId();
  return (
    <div
      className={clsx(
        'overflow-hidden rounded-[16px] border bg-[var(--rd-surface)] transition-colors duration-200',
        open
          ? 'border-[var(--rd-accent-hair)]'
          : 'border-[var(--rd-hair)] hover:border-[var(--rd-edge)]',
      )}
    >
      <h3 className="m-0">
        <button
          type="button"
          id={`${id}-btn`}
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          onClick={() => setOpen((o) => !o)}
          className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left sm:px-7"
        >
          <span
            className="text-[17px] font-medium text-[var(--rd-head)]"
            style={{ letterSpacing: '-0.005em' }}
          >
            {q}
          </span>
          <span
            aria-hidden="true"
            className={clsx(
              'flex h-8 w-8 flex-none items-center justify-center rounded-full border transition-all duration-300',
              open
                ? 'rotate-180 border-[var(--rd-accent-hair)] text-[var(--rd-accent)]'
                : 'border-[var(--rd-hair)] text-[var(--rd-fg-3)]',
            )}
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path
                d="M4 6l4 4 4-4"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>
      </h3>
      <div
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-btn`}
        className="grid transition-[grid-template-rows] duration-300 ease-out"
        style={{ gridTemplateRows: open ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-6 pt-0 sm:px-7">
            <Body soft sm>
              {a}
            </Body>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FaqAccordion({ items }: { items: readonly FaqItem[] }) {
  return (
    <div className="mx-auto mt-10 flex max-w-[820px] flex-col gap-3">
      {items.map((it) => (
        <FaqRow key={it.q} q={it.q} a={it.a} />
      ))}
    </div>
  );
}
