import { type ReactNode } from 'react';
import clsx from 'clsx';
import PageMeta from '../components/PageMeta';
import {
  Section,
  Container,
  Eyebrow,
  H1,
  H2,
  H3,
  Subhead,
  Intro,
  Body,
  Button,
  Tag,
  MetaRow,
} from '../components/ui/primitives';

const OVERVIEW_ITEMS = [
  'Drawings stay aligned with evolving CAD geometry',
  'Manufacturability review starts before release friction compounds',
  'Supplier-facing documentation leaves with fewer gaps',
];

const WORKFLOWS = [
  {
    title: 'New product development',
    body: 'When 3D geometry moves faster than documentation, drawing release becomes the hidden bottleneck. RapidDraft keeps design, review, and drawing updates moving in the same direction.',
    bullets: [
      'Generate drawing updates continuously as geometry evolves.',
      'Screen early manufacturability questions before formal release reviews.',
      'Give program leads a clearer view of what is ready and what still needs attention.',
    ],
    tags: ['Drawing-led release', 'Early DFM review', 'Design intent preserved'],
  },
  {
    title: 'Battery packs and structural components',
    body: 'High-complexity parts carry tighter tolerances, more manufacturing sensitivity, and less room for avoidable review drift.',
    bullets: [
      'Highlight manufacturing-sensitive features while the model is still active.',
      'Keep GD&T, geometry checks, and drawing completeness in one review flow.',
      'Reduce rework on components where late surprises are expensive.',
    ],
    tags: ['High-complexity parts', 'Tolerance-heavy review', 'Release discipline'],
  },
  {
    title: 'Supplier drawing packages',
    body: 'Supplier packages are strongest when drawings, release notes, QA documents, and review decisions leave together. RapidDraft helps teams send cleaner packages with fewer clarification loops.',
    bullets: [
      'Generate inspection-ready documents (BOM, first-article) and check for missing release information before the package leaves engineering.',
      'Standardize drawing outputs and review expectations across suppliers.',
      'Reduce back-and-forth on manufacturability, quality, and missing detail.',
    ],
    tags: ['Supplier handoff', 'Inspection-ready documents', 'Fewer feedback loops'],
  },
  {
    title: 'Change-driven updates (ECR / ECO)',
    body: 'Geometry changes often trigger drawing churn long after the design decision is made.',
    bullets: [
      'See which views, dimensions, and notes need attention after a change.',
      'Avoid restarting drawing work from zero after each revision.',
      'Keep the release path tighter when engineering change is already in motion.',
    ],
    tags: ['Revision-driven workflows', 'Update validation', 'Faster sign-off'],
  },
  {
    title: 'Legacy drawing cleanup',
    body: 'Old archives carry outdated tolerances, missing standards context, and inconsistent release practices.',
    bullets: [
      'Surface missing GD&T, outdated notes, and standards inconsistencies.',
      'Prioritize cleanup where release or manufacturing confusion is highest.',
      'Support migration toward cleaner drawing standards across older programs.',
    ],
    tags: ['Archive modernization', 'Standards cleanup', 'Manufacturing clarity'],
  },
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

export default function UseCasesPage() {
  return (
    <div className="rd2">
      <PageMeta
        title="Use cases | RapidDraft"
        description="From new product introduction to supplier drawing packages, RapidDraft is strongest where drawings, reviews, and manufacturability checks still create expensive loops."
        path="/use-cases"
      />

      {/* ── Hero ─────────────────────────────────────────── */}
      <header className="relative overflow-hidden border-b border-[var(--rd-hair)]">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{ background: 'radial-gradient(48% 50% at 50% -6%, var(--rd-accent-soft), transparent 62%)' }}
        />
        <Container className="relative w-full pt-28 pb-16 sm:pt-32 sm:pb-20">
          <div className="mx-auto max-w-[820px] text-center">
            <Eyebrow>Use cases</Eyebrow>
            <H1 className="mt-5">Where RapidDraft fits in real release workflows</H1>
            <Subhead className="mx-auto mt-5 max-w-[760px]">
              From new product introduction to supplier drawing packages, RapidDraft is strongest
              where drawings, reviews, and manufacturability checks still create expensive loops.
            </Subhead>
            <MetaRow className="mt-8 justify-center" items={OVERVIEW_ITEMS} />
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button to="/book-demo" variant="primary">
                Book a demo
              </Button>
              <Button to="#workflows" variant="secondary" arrow>
                See workflow examples
              </Button>
            </div>
          </div>
        </Container>
      </header>

      {/* ── Lead ─────────────────────────────────────────── */}
      <Section>
        <SectionHeader
          title="Built for drawing-heavy release work, not abstract CAD demos"
          intro="RapidDraft adds structure where review logic, manufacturability questions, and drawing updates are still handled manually across release-critical workflows."
        />
      </Section>

      {/* ── Workflows ────────────────────────────────────── */}
      <Section id="workflows">
        <div className="mx-auto grid max-w-[1120px] gap-4 sm:grid-cols-2">
          {WORKFLOWS.map((wf, i) => (
            <div key={wf.title} className="rd-tile flex flex-col">
              <div className="rd-index">0{i + 1}</div>
              <H3 className="mt-3">{wf.title}</H3>
              <Body soft sm className="mt-2.5">
                {wf.body}
              </Body>
              <ul className="mt-5 flex flex-col gap-2.5 text-left">
                {wf.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2.5">
                    <span
                      aria-hidden="true"
                      className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--rd-accent)]"
                    />
                    <Body soft sm>
                      {bullet}
                    </Body>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap justify-center gap-2.5">
                {wf.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Closing CTA ──────────────────────────────────── */}
      <Section>
        <div className="mx-auto max-w-[680px] text-center">
          <H2>Bring a real workflow into the conversation</H2>
          <Intro className="mx-auto mt-5 max-w-[760px]">
            If one of these looks familiar, we can start there and show where RapidDraft fits into
            your current review and drawing-release path.
          </Intro>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button to="/book-demo" variant="primary">
              Book a demo
            </Button>
            <Button to="/platform" variant="secondary" arrow>
              Platform
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
