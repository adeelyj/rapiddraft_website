import { useEffect, type ReactNode } from 'react';
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
  Figure,
} from '../components/ui/primitives';
import CapabilityRail, { type RailItem } from '../components/home2/CapabilityRail';
import RoiCalculator from '../components/home2/RoiCalculator';
import HubAndSpokeFigure from '../components/diagrams/HubAndSpokeFigure';

const RAIL_ITEMS: RailItem[] = [
  {
    key: 'drawing-memory',
    label: 'Drawing Memory',
    media: '/media/pitch/optimized/drawing-analysis.mp4',
    poster: '/media/pitch/pitch-drawing-memory.png',
    alt: 'RapidDraft generating manufacturing-ready drawings from CAD geometry.',
    durationMs: 9030,
  },
  {
    key: 'review-automation',
    label: 'Review Automation',
    media: '/media/pitch/optimized/design-review-expert-mode.mp4',
    poster: '/media/pitch/pitch-dfm-checks.png',
    alt: 'RapidDraft surfacing manufacturability and completeness issues for engineer review.',
    durationMs: 15364,
  },
  {
    key: 'model-collaboration',
    label: 'Model-Linked Collaboration',
    media: '/media/pitch/optimized/collaboration.mp4',
    poster: '/media/pitch/pitch-collaboration.png',
    alt: 'Design, QA, and suppliers reviewing around the shared 3D model.',
    durationMs: 5940,
  },
  {
    key: 'bulk-review',
    label: 'Bulk Review',
    media: '/media/pitch/optimized/bulk-design-review.mp4',
    poster: '/media/pitch/pitch-release-approval.png',
    alt: 'RapidDraft running review passes across drawings, revisions, and part families.',
    durationMs: 11100,
  },
];

const HERO_BADGES = ['On-prem AI', 'Local/EU Cloud', 'GDPR-Compliant', 'Human-in-the-loop'];

const KPIS = [
  { value: '30%', label: 'Fewer change cycles' },
  { value: '10x', label: 'Faster feedback' },
  { value: '50%', label: 'Less checking time' },
];

const PROBLEM_CARDS = [
  {
    title: 'Drawings restart on every revision',
    body: 'Documentation work gets rebuilt whenever geometry changes, even when the underlying intent stays the same.',
  },
  {
    title: 'Manufacturing constraints live outside CAD',
    body: 'DFM notes, supplier feedback, and release caveats stay buried in PDFs, emails, and follow-up threads.',
  },
  {
    title: 'Review decisions lose their model context',
    body: 'Comments and approvals are hard to trace back to the exact change in geometry that triggered them.',
  },
  {
    title: 'Lessons learned rarely reach the next cycle',
    body: 'Teams keep rediscovering the same issues because past decisions are not preserved with the model.',
  },
];

const CAPABILITIES = [
  {
    title: 'Generate drawings and QA documents',
    body: 'Produce manufacturing-ready drawings, BOMs, and first-article and inspection reports straight from your CAD geometry.',
  },
  {
    title: 'Automate review and DFM checks',
    body: 'Check completeness, manufacturability, and standards (ISO and ASME) against your own rules, and catch issues before release.',
  },
  {
    title: 'Collaborate around the model',
    body: 'Bring design, QA, and suppliers into one shared CAD review space, with every comment attached to the geometry it refers to.',
  },
  {
    title: 'Preserve review knowledge',
    body: 'Keep decisions, findings, and drafting intent attached to the model so they carry across revisions instead of getting lost.',
  },
];

const PILLARS = ['Data sovereignty', 'IP protection', 'Employee trust', 'Data quality'];

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

export default function Home() {
  // Full-screen section snapping + card-style reveal, only while Home is mounted.
  useEffect(() => {
    const el = document.documentElement;
    el.classList.add('rd-snap');
    const screens = Array.from(document.querySelectorAll<HTMLElement>('.rd-screen'));
    const vh = window.innerHeight;
    screens.forEach((s) => {
      const r = s.getBoundingClientRect();
      if (r.top < vh * 0.75 && r.bottom > vh * 0.25) s.classList.add('is-in');
    });
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-in');
        });
      },
      { threshold: 0.3 },
    );
    screens.forEach((s) => io.observe(s));
    return () => {
      el.classList.remove('rd-snap');
      io.disconnect();
      screens.forEach((s) => s.classList.remove('is-in'));
    };
  }, []);

  return (
    <div className="rd2">
      <PageMeta
        title="RapidDraft | Agentic drawing release and design review"
        description="RapidDraft catches design and drawing issues earlier and automates repetitive review checks, keeping decisions attached to the CAD model with engineers in control of every release."
        path="/"
      />

      {/* ── Hero (slightly larger, centered) ─────────────── */}
      <header className="relative overflow-hidden border-b border-[var(--rd-hair)]">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{ background: 'radial-gradient(48% 50% at 50% -6%, var(--rd-accent-soft), transparent 62%)' }}
        />
        <Container className="relative w-full pt-28 pb-16 sm:pt-32 sm:pb-20">
          <div className="mx-auto max-w-[820px] text-center">
            <Eyebrow>Agentic drawing release and design review for engineering teams</Eyebrow>
            <H1 className="mt-5">
              Accelerate engineering decisions and <span className="rd-mark">drawing release</span>
            </H1>
            <Subhead className="mx-auto mt-5 max-w-[760px]">
              RapidDraft catches issues earlier, automates repetitive review checks, and keeps every
              decision attached to the model.
            </Subhead>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button to="/book-demo" variant="primary">
                Book a demo
              </Button>
              <Button to="/platform" variant="secondary" arrow>
                See how it works
              </Button>
            </div>
            <div className="mt-5 flex flex-wrap justify-center gap-2.5">
              {HERO_BADGES.map((b) => (
                <Tag key={b}>{b}</Tag>
              ))}
            </div>
          </div>

          <div className="mx-auto mt-10 w-full max-w-[820px]">
            <CapabilityRail items={RAIL_ITEMS} />
          </div>
        </Container>
      </header>

      {/* ── Credibility (no eyebrow) ─────────────────────── */}
      <Section screen>
        <SectionHeader
          title="Reduce repeated work before it delays release"
          intro="Faster feedback, fewer iterations, and less manual checking, right where drawings and reviews still slow teams down."
        />
        <div className="mx-auto mt-10 grid max-w-[1040px] gap-4 sm:grid-cols-3">
          {KPIS.map((k) => (
            <div key={k.label} className="rd-tile">
              <div className="rd-kpi-num">{k.value}</div>
              <div className="rd-kpi-label mt-3">{k.label}</div>
            </div>
          ))}
        </div>
        <MetaRow
          className="mt-8 justify-center"
          items={[
            'Built by engineers from aerospace, automotive, and process industries',
            'Advised by leaders at Siemens, Volocopter, and Amazon',
            'Backed by UnternehmerTUM and XPLORE',
          ]}
        />
      </Section>

      {/* ── Problem (display statement) ──────────────────── */}
      <Section screen>
        <SectionHeader
          eyebrow="Problem"
          display
          title={
            <>
              Design intent lives in CAD. Requirements live in drawings. The review logic lives in
              people&rsquo;s heads
            </>
          }
          intro="Collaboration is inefficient, review is error-prone, and inspection is slow. Good designs stall in documentation."
        />
        <div className="mx-auto mt-10 grid max-w-[1120px] gap-4 sm:grid-cols-2">
          {PROBLEM_CARDS.map((card, i) => (
            <div key={card.title} className="rd-tile">
              <div className="rd-index">0{i + 1}</div>
              <H3 className="mt-3">{card.title}</H3>
              <Body soft sm className="mt-2.5">
                {card.body}
              </Body>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Solution + figure 2 (centered showcase) ──────── */}
      <Section screen>
        <SectionHeader
          eyebrow="Solution"
          title="Turn fragmented review work into a connected release workflow"
          intro="Human-in-the-loop AI, grounded in your rules, keeping drafting intent, review decisions, and feedback attached to the model."
        />
        <div className="mx-auto mt-9 w-full max-w-[820px] rounded-[16px] border border-[var(--rd-hair)] bg-[var(--rd-surface)] p-5 sm:p-6">
          <Figure caption="RapidDraft sits between your engineering inputs and release-ready outputs, with human-in-the-loop review at the center.">
            <HubAndSpokeFigure />
          </Figure>
        </div>
      </Section>

      {/* ── Capabilities ─────────────────────────────────── */}
      <Section screen>
        <SectionHeader
          eyebrow="Capabilities"
          title="One review layer, four core capabilities"
          intro="One layer that generates documents, automates checks, keeps collaboration on the model, and preserves what teams learn."
        />
        <div className="mx-auto mt-10 grid max-w-[1120px] gap-4 sm:grid-cols-2">
          {CAPABILITIES.map((cap, i) => (
            <div key={cap.title} className="rd-tile">
              <div className="rd-index">0{i + 1}</div>
              <H3 className="mt-3">{cap.title}</H3>
              <Body soft sm className="mt-2.5">
                {cap.body}
              </Body>
            </div>
          ))}
        </div>
        <div className="mt-9 flex justify-center">
          <Button to="/platform" variant="secondary" arrow>
            Explore the platform
          </Button>
        </div>
      </Section>

      {/* ── Security teaser ──────────────────────────────── */}
      <Section screen>
        <SectionHeader
          eyebrow="Security"
          title="Works with your stack, keeps your data in-house"
          intro="AI-assisted review inside your existing CAD, drawing, BOM, and PLM workflows, with your tools and data under your control."
        />
        <div className="mx-auto mt-10 grid max-w-[1040px] grid-cols-2 gap-4 sm:grid-cols-4">
          {PILLARS.map((p) => (
            <div
              key={p}
              className="flex items-center justify-center rounded-[14px] border border-[var(--rd-hair)] bg-[var(--rd-surface)] px-4 py-6 text-center text-[15px] text-[var(--rd-fg)]"
            >
              {p}
            </div>
          ))}
        </div>
        <div className="mt-9 flex justify-center">
          <Button to="/security" variant="secondary" arrow>
            Read about security
          </Button>
        </div>
      </Section>

      {/* ── ROI (centered showcase) ──────────────────────── */}
      <RoiCalculator />

      {/* ── Final CTA (closing block) ────────────────────── */}
      <Section>
        <div className="mx-auto max-w-[680px] text-center">
          <H2>Bring speed and traceability to drawing release</H2>
          <Intro className="mx-auto mt-5 max-w-[760px]">
            See how RapidDraft reduces review effort, speeds up drawing release, and keeps decision
            context across revisions.
          </Intro>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button to="/book-demo" variant="primary">
              Book a demo
            </Button>
            <Button to="/use-cases" variant="secondary" arrow>
              See use cases
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
