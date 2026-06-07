import { type ReactNode } from 'react';
import clsx from 'clsx';
import PageMeta from '../components/PageMeta';
import {
  Section,
  Container,
  Eyebrow,
  H1,
  H2,
  Subhead,
  Intro,
  Body,
  MetaRow,
} from '../components/ui/primitives';

const IN_THE_CALL = [
  'Walk through the highest-effort workflow',
  'See where RapidDraft fits your CAD and release environment',
  'Decide whether it is a strong candidate for a narrow pilot',
];

const PILOT_STEPS = [
  'Measure review effort, repeated issues, and time to release.',
  'Expand team by team once the workflow proves itself.',
];

const BEST_FIT = [
  'Mechanical design teams with frequent CAD revisions and drawing-heavy release workflows.',
  'Supplier-facing programs where quality, certification, or manufacturing teams still depend on 2D documentation.',
  'Teams that want a measurable reduction in redraw and review effort before broader rollout.',
];

/* Consistent centered section header used by every section. */
function SectionHeader({
  eyebrow,
  title,
  intro,
  display = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  display?: boolean;
}) {
  return (
    <div className={clsx('mx-auto text-center', display ? 'max-w-[1000px]' : 'max-w-[860px]')}>
      {eyebrow && <Eyebrow className="mb-5">{eyebrow}</Eyebrow>}
      <H2 display={display}>{title}</H2>
      {intro && <Intro className="mx-auto mt-5 max-w-[760px]">{intro}</Intro>}
    </div>
  );
}

/* Left-aligned bullet list inside a centered tile/panel. */
function BulletList({ items, className }: { items: string[]; className?: string }) {
  return (
    <ul className={clsx('flex flex-col gap-3 text-left', className)}>
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span
            aria-hidden="true"
            className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--rd-accent)]"
          />
          <Body soft sm>
            {item}
          </Body>
        </li>
      ))}
    </ul>
  );
}

export default function BookDemoPage() {
  return (
    <div className="rd2">
      <PageMeta
        title="Book a demo | RapidDraft"
        description="The best demo starts with a real release workflow. Tell us where drawings, reviews, or manufacturability checks create the most friction, and we will focus the conversation there."
        path="/book-demo"
      />

      {/* ── Hero ─────────────────────────────────────────── */}
      <header className="relative overflow-hidden border-b border-[var(--rd-hair)]">
        <Container className="relative w-full pt-28 pb-16 sm:pt-32 sm:pb-20">
          <div className="mx-auto max-w-[820px] text-center">
            <Eyebrow>Book a demo</Eyebrow>
            <H1 className="mt-5">Bring the workflow that is slowing your team down the most</H1>
            <Subhead className="mx-auto mt-5 max-w-[760px]">
              The best demo starts with a real release workflow, not a generic product tour. Tell us
              where drawings, reviews, or manufacturability checks create the most friction, and we
              will focus the conversation there.
            </Subhead>
            <MetaRow className="mt-8 justify-center" items={IN_THE_CALL} />
            <Body soft sm className="mt-6">
              We typically respond within 1 to 2 business days.
            </Body>
          </div>
        </Container>
      </header>

      {/* ── Request form ─────────────────────────────────── */}
      <Section>
        <SectionHeader
          title="Share the workflow you want to walk through"
          intro="A focused request helps us make the demo specific and useful."
        />
        <div className="mx-auto mt-10 w-full max-w-[640px] rd-tile">
          <form
            name="bookdemo"
            method="POST"
            data-netlify="true"
            className="flex flex-col gap-5 text-left"
          >
            <input type="hidden" name="form-name" value="bookdemo" />

            <div>
              <label htmlFor="bookdemo-name" className="rd-label">
                Name (required)
              </label>
              <input
                id="bookdemo-name"
                type="text"
                name="name"
                required
                className="rd-input"
                autoComplete="name"
              />
            </div>

            <div>
              <label htmlFor="bookdemo-email" className="rd-label">
                Work email (required)
              </label>
              <input
                id="bookdemo-email"
                type="email"
                name="email"
                required
                className="rd-input"
                autoComplete="email"
              />
            </div>

            <div>
              <label htmlFor="bookdemo-company" className="rd-label">
                Company
              </label>
              <input
                id="bookdemo-company"
                type="text"
                name="company"
                className="rd-input"
                autoComplete="organization"
              />
            </div>

            <div>
              <label htmlFor="bookdemo-role" className="rd-label">
                Role
              </label>
              <input
                id="bookdemo-role"
                type="text"
                name="role"
                className="rd-input"
                autoComplete="organization-title"
              />
            </div>

            <div>
              <label htmlFor="bookdemo-cad-tools" className="rd-label">
                CAD tools
              </label>
              <input id="bookdemo-cad-tools" type="text" name="cad-tools" className="rd-input" />
            </div>

            <div>
              <label htmlFor="bookdemo-message" className="rd-label">
                Message
              </label>
              <textarea id="bookdemo-message" name="message" className="rd-textarea" />
            </div>

            <button type="submit" className="rd-btn rd-btn--primary mt-1">
              Book a demo
            </button>
          </form>
        </div>
      </Section>

      {/* ── How a pilot works ────────────────────────────── */}
      <Section>
        <SectionHeader
          title="How a pilot works"
          intro="Start with one focused workflow: a single product family, one drawing-release process, or one recurring review bottleneck."
        />
        <div className="mx-auto mt-10 w-full max-w-[640px] rd-tile">
          <BulletList items={PILOT_STEPS} />
        </div>
      </Section>

      {/* ── Best fit ─────────────────────────────────────── */}
      <Section>
        <SectionHeader title="Best fit" />
        <div className="mx-auto mt-10 w-full max-w-[640px] rd-tile">
          <BulletList items={BEST_FIT} />
        </div>
      </Section>
    </div>
  );
}
