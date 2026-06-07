/* RapidDraft v2 primitives — enforce the spec's element hierarchy and the
   inxm.ai-derived design language. Use these everywhere so the site stays
   visually consistent. See docs/design-language-inxm.md + docs/website-spec.md. */
import { type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

type Div = { className?: string; children?: ReactNode; id?: string };

/* ---------- Layout ---------- */
export function Container({
  className,
  children,
  width = 'default',
}: Div & { width?: 'default' | 'wide' | 'narrow' }) {
  return (
    <div
      className={clsx(
        'rd-container',
        width === 'wide' && 'rd-container--wide',
        width === 'narrow' && 'rd-container--narrow',
        className,
      )}
    >
      {children}
    </div>
  );
}

export function Section({
  className,
  children,
  id,
  tight = false,
  divider = false,
  screen = false,
  width = 'default',
}: Div & {
  tight?: boolean;
  divider?: boolean;
  screen?: boolean;
  width?: 'default' | 'wide' | 'narrow';
}) {
  return (
    <section
      id={id}
      className={clsx(
        'rd-section',
        tight && 'rd-section--tight',
        divider && 'rd-divider',
        screen && 'rd-screen',
        className,
      )}
    >
      <Container width={width} className="w-full">
        {children}
      </Container>
    </section>
  );
}

/* Two-column section header: H2 (+ optional eyebrow) left, lede right */
export function SectionHead({
  eyebrow,
  eyebrowNum,
  title,
  lede,
  className,
  align = 'split',
}: {
  eyebrow?: string;
  eyebrowNum?: string;
  title: ReactNode;
  lede?: ReactNode;
  className?: string;
  align?: 'split' | 'stacked';
}) {
  if (align === 'stacked') {
    return (
      <div className={clsx('max-w-3xl', className)}>
        {eyebrow && <Eyebrow num={eyebrowNum} className="mb-5">{eyebrow}</Eyebrow>}
        <H2>{title}</H2>
        {lede && <p className="rd-intro mt-5 max-w-2xl">{lede}</p>}
      </div>
    );
  }
  return (
    <div className={clsx('rd-sectionhead', className)}>
      <div>
        {eyebrow && <Eyebrow num={eyebrowNum} className="mb-5">{eyebrow}</Eyebrow>}
        <H2>{title}</H2>
      </div>
      {lede && <p className="rd-lede max-w-[52ch] md:pb-2">{lede}</p>}
    </div>
  );
}

export function Divider({ className }: { className?: string }) {
  return <hr className={clsx('rd-divider border-0', className)} />;
}

/* ---------- Type primitives ---------- */
export function Eyebrow({
  children,
  num,
  className,
}: Div & { num?: string }) {
  return (
    <p className={clsx('rd-eyebrow', className)}>
      {num && <span className="rd-num">{num}</span>}
      <span>{children}</span>
    </p>
  );
}

export function H1({ children, className }: Div) {
  return <h1 className={clsx('rd-h1', className)}>{children}</h1>;
}
export function H2({ children, className, display }: Div & { display?: boolean }) {
  return <h2 className={clsx('rd-h2', display && 'rd-h2--display', className)}>{children}</h2>;
}
export function H3({ children, className }: Div) {
  return <h3 className={clsx('rd-h3', className)}>{children}</h3>;
}
export function Subhead({ children, className }: Div) {
  return <p className={clsx('rd-sub', className)}>{children}</p>;
}
export function Lede({ children, className }: Div) {
  return <p className={clsx('rd-lede', className)}>{children}</p>;
}
/* Intro = the standard paragraph that sits directly under a section H2 */
export function Intro({ children, className }: Div) {
  return <p className={clsx('rd-intro', className)}>{children}</p>;
}
export function Body({ children, className, soft, sm }: Div & { soft?: boolean; sm?: boolean }) {
  return (
    <p className={clsx('rd-body', soft && 'rd-body--soft', sm && 'rd-body--sm', className)}>
      {children}
    </p>
  );
}

/* ---------- Meta row (middot-separated) ---------- */
export function MetaRow({ items, className }: { items: readonly ReactNode[]; className?: string }) {
  return (
    <ul className={clsx('rd-meta', className)}>
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

/* ---------- Button ---------- */
type ButtonProps = {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  to?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  arrow?: boolean;
  type?: 'button' | 'submit';
  ariaLabel?: string;
};

export function Button({
  children,
  variant = 'primary',
  to,
  href,
  onClick,
  className,
  arrow = false,
  type = 'button',
  ariaLabel,
}: ButtonProps) {
  const cls = clsx('rd-btn', `rd-btn--${variant}`, className);
  const inner = (
    <>
      {children}
      {arrow && <span className="rd-arrow" aria-hidden="true">&rarr;</span>}
    </>
  );
  if (to) {
    return (
      <Link to={to} className={cls} aria-label={ariaLabel}>
        {inner}
      </Link>
    );
  }
  if (href) {
    const external = href.startsWith('http');
    return (
      <a
        href={href}
        className={cls}
        aria-label={ariaLabel}
        {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
      >
        {inner}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={cls} aria-label={ariaLabel}>
      {inner}
    </button>
  );
}

/* ---------- Tag ---------- */
export function Tag({
  children,
  className,
  mono = false,
  accent = false,
}: Div & { mono?: boolean; accent?: boolean }) {
  return (
    <span className={clsx('rd-tag', mono && 'rd-tag--mono', accent && 'rd-tag--accent', className)}>
      {children}
    </span>
  );
}

export function TagRow({
  tags,
  className,
  mono = false,
}: {
  tags: readonly string[];
  className?: string;
  mono?: boolean;
}) {
  return (
    <div className={clsx('flex flex-wrap gap-2.5', className)}>
      {tags.map((t) => (
        <Tag key={t} mono={mono}>
          {t}
        </Tag>
      ))}
    </div>
  );
}

/* ---------- Card ---------- */
export function Card({
  children,
  className,
  hover = false,
  id,
}: Div & { hover?: boolean }) {
  return (
    <div id={id} className={clsx('rd-card', hover && 'rd-card--hover', className)}>
      {children}
    </div>
  );
}

/* ---------- Figure ---------- */
export function Figure({
  children,
  caption,
  className,
}: {
  children: ReactNode;
  caption: string;
  className?: string;
}) {
  return (
    <figure className={clsx('rd-figure', className)}>
      {children}
      <figcaption className="rd-figcaption">{caption}</figcaption>
    </figure>
  );
}
