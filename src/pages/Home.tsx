import PageMeta from '../components/PageMeta';
import {
  Section,
  Container,
  SectionHead,
  Eyebrow,
  H1,
  H2,
  H3,
  Subhead,
  Intro,
  Body,
  Button,
  Card,
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

const KPIS = [
  { value: '30%', label: 'Fewer change cycles' },
  { value: '10x', label: 'Faster feedback' },
  { value: '50%', label: 'Less checking time' },
];

export default function Home() {
  return (
    <div className="rd2">
      <PageMeta
        title="RapidDraft | Agentic drawing release and design review"
        description="RapidDraft catches design and drawing issues earlier and automates repetitive review checks, keeping decisions attached to the CAD model with engineers in control of every release."
        path="/"
      />

      {/* ── Hero ─────────────────────────────────────────── */}
      <header className="relative overflow-hidden border-b border-[var(--rd-hair)]">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{ background: 'radial-gradient(62% 52% at 50% -8%, var(--rd-accent-soft), transparent 70%)' }}
        />
        <Container className="relative py-16 text-center sm:py-20 lg:py-24">
          <div className="mx-auto max-w-[920px]">
            <Eyebrow className="justify-center">
              Agentic drawing release and design review for engineering teams
            </Eyebrow>
            <H1 className="mt-7">
              Accelerate engineering decisions and <span className="rd-mark">drawing release</span>
            </H1>
            <Subhead className="mx-auto mt-6 max-w-2xl">
              RapidDraft catches design and drawing issues earlier and automates repetitive review
              checks. The decisions behind each drawing stay attached to the model, instead of
              scattering across emails, PDFs, and meetings.
            </Subhead>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button to="/book-demo" variant="primary">
                Book a demo
              </Button>
              <Button to="/platform" variant="secondary" arrow>
                See how it works
              </Button>
            </div>
            <div className="mt-7 flex flex-wrap justify-center gap-2.5">
              {HERO_BADGES.map((b) => (
                <Tag key={b}>
                  {b}
                </Tag>
              ))}
            </div>
          </div>

          <div className="mx-auto mt-12 max-w-[1000px] sm:mt-14">
            <CapabilityRail items={RAIL_ITEMS} />
          </div>
        </Container>
      </header>

      {/* ── Credibility ──────────────────────────────────── */}
      <Section>
        <div className="max-w-2xl">
          <H2>Reduce repeated work before it delays release</H2>
          <Intro className="mt-5">
            RapidDraft brings faster feedback, fewer iterations, and less manual checking to the
            workflows where drawings, reviews, and release readiness still slow teams down.
          </Intro>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-[10px] border border-[var(--rd-hair)] bg-[var(--rd-hair)] sm:grid-cols-3">
          {KPIS.map((k) => (
            <div key={k.label} className="bg-[var(--rd-surface)] p-7 sm:p-8">
              <div className="rd-kpi-num">{k.value}</div>
              <div className="rd-kpi-label mt-3">{k.label}</div>
            </div>
          ))}
        </div>

        <MetaRow
          className="mt-8"
          items={[
            'Built by engineers from aerospace, automotive, and process industries',
            'Advised by leaders at Siemens, Volocopter, and Amazon',
            'Backed by UnternehmerTUM and XPLORE',
          ]}
        />
      </Section>

      {/* ── Problem (sanctioned display heading) ─────────── */}
      <Section divider>
        <div className="max-w-4xl">
          <H2 display>
            Design intent lives in CAD. Requirements live in drawings. The review logic lives in
            people&rsquo;s heads.
          </H2>
          <Intro className="mt-6 max-w-2xl">
            Collaboration is inefficient, drawing review is error-prone, and quality inspection is
            slow and tedious. Good designs stall in documentation and review.
          </Intro>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-[10px] border border-[var(--rd-hair)] bg-[var(--rd-hair)] sm:grid-cols-2">
          {PROBLEM_CARDS.map((card, i) => (
            <div key={card.title} className="bg-[var(--rd-surface)] p-7 sm:p-8">
              <div className="rd-index">0{i + 1}</div>
              <H3 className="mt-4">{card.title}</H3>
              <Body soft sm className="mt-3">
                {card.body}
              </Body>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Solution + figure 2 ──────────────────────────── */}
      <Section divider>
        <div className="max-w-3xl">
          <Eyebrow className="mb-5">Solution</Eyebrow>
          <H2>Turn fragmented review work into a connected release workflow</H2>
          <Intro className="mt-6">
            RapidDraft is human-in-the-loop AI, grounded in your rules. Drafting intent, review
            decisions, and manufacturing feedback stay attached to the design, with the 3D model as
            the single source of truth and engineers in control of every release. Teams redo less
            work, close reviews faster, and keep the knowledge that usually leaves when a project
            ends or a colleague moves on.
          </Intro>
        </div>

        <div className="mt-12 rounded-[12px] border border-[var(--rd-hair)] bg-[var(--rd-surface)] p-5 sm:p-8 lg:p-10">
          <Figure caption="RapidDraft sits between your engineering inputs and release-ready outputs, with human-in-the-loop review at the center.">
            <HubAndSpokeFigure />
          </Figure>
        </div>
      </Section>

      {/* ── Capabilities ─────────────────────────────────── */}
      <Section divider>
        <SectionHead
          title="One review layer, four core capabilities"
          lede="The same review layer generates documents, automates checks, keeps collaboration on the model, and preserves what teams learn."
        />
        <div className="grid gap-px overflow-hidden rounded-[10px] border border-[var(--rd-hair)] bg-[var(--rd-hair)] sm:grid-cols-2">
          {CAPABILITIES.map((cap, i) => (
            <div key={cap.title} className="bg-[var(--rd-surface)] p-7 sm:p-8">
              <div className="rd-index">0{i + 1}</div>
              <H3 className="mt-4">{cap.title}</H3>
              <Body soft sm className="mt-3">
                {cap.body}
              </Body>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Button to="/platform" variant="secondary" arrow>
            Explore the platform
          </Button>
        </div>
      </Section>

      {/* ── Security teaser ──────────────────────────────── */}
      <Section divider>
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <Eyebrow className="mb-5">Security</Eyebrow>
            <H2>Works with your stack, keeps your data in-house</H2>
            <Intro className="mt-6 max-w-xl">
              RapidDraft brings AI-assisted review into your existing CAD, drawing, BOM, and PLM
              workflows. Your tools, approval gates, and sensitive engineering data stay under your
              control.
            </Intro>
            <div className="mt-8">
              <Button to="/security" variant="secondary" arrow>
                Read about security
              </Button>
            </div>
          </div>
          <Card className="bg-[var(--rd-surface)]">
            <div className="rd-kpi-label">The four pillars</div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {['Data sovereignty', 'IP protection', 'Employee trust', 'Data quality'].map((p) => (
                <div
                  key={p}
                  className="rounded-[6px] border border-[var(--rd-hair)] px-4 py-3 text-[15px] text-[var(--rd-fg)]"
                >
                  {p}
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {['On-prem AI', 'Local/EU Cloud', 'GDPR-Compliant', 'SSO', 'Human approval'].map((b) => (
                <Tag key={b}>
                  {b}
                </Tag>
              ))}
            </div>
          </Card>
        </div>
      </Section>

      {/* ── ROI ──────────────────────────────────────────── */}
      <RoiCalculator />

      {/* ── Final CTA ────────────────────────────────────── */}
      <Section divider className="text-center">
        <div className="mx-auto max-w-2xl">
          <H2>Bring speed and traceability to drawing release</H2>
          <Intro className="mx-auto mt-6 max-w-xl">
            See how RapidDraft helps your team reduce review effort, generate manufacturing-ready
            drawings faster, and keep decision context across revisions.
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
