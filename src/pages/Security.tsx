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
  Figure,
} from '../components/ui/primitives';
import OnPremFigure from '../components/diagrams/OnPremFigure';

const HERO_BADGES = ['On-prem AI', 'SSO', 'Local / EU Cloud', 'GDPR-Compliant'];

const PILLARS = [
  {
    title: 'Data sovereignty',
    body: 'AI models run locally, on-prem, so your designs never leave your environment.',
  },
  {
    title: 'IP protection',
    body: 'Training uses only anonymized or approved data, and no third-party model ever sees your IP.',
  },
  {
    title: 'Employee trust',
    body: 'Workflows are transparent, traceable, and reliable, and final approval always stays with your engineers.',
  },
  {
    title: 'Data quality',
    body: 'One clean source across part data, drawings, and BOMs.',
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

export default function Security() {
  return (
    <div className="rd2 rd-dark" style={{ background: 'var(--rd-bg)' }}>
      <PageMeta
        title="Security and sovereignty | RapidDraft"
        description="RapidDraft runs on your infrastructure, on your network. Models stay on-prem, training stays governed, and engineers keep the final say over every release."
        path="/security"
      />

      {/* ── Hero (centered) + centerpiece figure ─────────── */}
      <header className="relative overflow-hidden border-b border-[var(--rd-hair)]">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{ background: 'radial-gradient(48% 50% at 50% -6%, var(--rd-accent-soft), transparent 62%)' }}
        />
        <Container className="relative w-full pt-28 pb-16 sm:pt-32 sm:pb-20">
          <div className="mx-auto max-w-[820px] text-center">
            <Eyebrow>Security and sovereignty</Eyebrow>
            <H1 className="mt-5">Enterprise AI that never leaves your control</H1>
            <Subhead className="mx-auto mt-5 max-w-[760px]">
              RapidDraft is built for teams who cannot send drawings to a third-party cloud. Models
              run on your infrastructure, training stays governed, and your engineers keep the final
              say.
            </Subhead>
            <div className="mt-5 flex flex-wrap justify-center gap-2.5">
              {HERO_BADGES.map((b) => (
                <Tag key={b}>{b}</Tag>
              ))}
            </div>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button to="/deal-room/nda-request" variant="primary">
                Request an NDA
              </Button>
              <Button to="/book-demo" variant="secondary" arrow>
                Book a demo
              </Button>
            </div>
          </div>

          {/* Centerpiece figure, directly under the hero */}
          <div className="mx-auto mt-10 w-full max-w-[1120px] rounded-[16px] border border-[var(--rd-hair)] bg-[var(--rd-surface)] p-5 sm:p-6">
            <Figure caption="RapidDraft runs on your hardware, on your network. Your data stays on-site, the agent orchestrates the work, and an engineer approves before anything is written back to your PLM.">
              <OnPremFigure inputLabel="Your release package" />
            </Figure>
          </div>
        </Container>
      </header>

      {/* ── Why it matters ───────────────────────────────── */}
      <Section>
        <SectionHeader
          eyebrow="Why it matters"
          title="Bring AI into your most sensitive IP without moving it"
          intro="In automotive and precision manufacturing, your drawings and BOMs are some of your most sensitive IP. RapidDraft brings AI into that work without moving the data out of approved environments or out of your engineers' hands."
        />
      </Section>

      {/* ── The four pillars ─────────────────────────────── */}
      <Section>
        <SectionHeader
          eyebrow="The four pillars"
          title="Four commitments behind every release"
          intro="Data sovereignty, IP protection, employee trust, and data quality, held together by one governed workflow."
        />
        <div className="mx-auto mt-10 grid max-w-[1120px] gap-4 sm:grid-cols-2">
          {PILLARS.map((pillar, i) => (
            <div key={pillar.title} className="rd-tile">
              <div className="rd-index">0{i + 1}</div>
              <H3 className="mt-3">{pillar.title}</H3>
              <Body soft sm className="mt-2.5">
                {pillar.body}
              </Body>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Deployment and data handling ─────────────────── */}
      <Section>
        <SectionHeader
          eyebrow="Deployment and data handling"
          title="Run it on-prem or in a private EU cloud"
          intro="Run it on-prem for full sovereignty, or in a private or EU-hosted cloud if you would rather we operate it, scaling to your release volume. Either way you get scoped access, SSO, role-based permissions, encryption, and a complete audit trail, with no uncontrolled data movement."
        />
      </Section>

      {/* ── AI governance ────────────────────────────────── */}
      <Section>
        <SectionHeader
          eyebrow="AI governance"
          title="Transparent agents, engineers in control"
          intro="Models run locally and learn only from anonymized or approved data. The agentic workflow is transparent and traceable, so you can see why a finding was raised, and engineers, not the AI, make every release decision."
        />
      </Section>

      {/* ── Standards and audit ──────────────────────────── */}
      <Section>
        <SectionHeader
          eyebrow="Standards and audit"
          title="Outputs that line up with your quality processes"
          intro="Outputs follow your drawing standards, ISO and ASME. Release gates, first-article inspection (FAIR and EMPB), BOM consistency, and a full audit trail line up with VDA and your quality processes."
        />
      </Section>

      {/* ── Compliance ───────────────────────────────────── */}
      <Section>
        <SectionHeader
          eyebrow="Compliance"
          title="GDPR-compliant by design"
          intro="RapidDraft is GDPR-compliant by design, with EU data residency, a DPA available on request, and subprocessor transparency."
        />
        <div className="mt-8 flex justify-center">
          <Tag accent>TODO: SOC 2 / ISO 27001 — state status or &ldquo;in progress&rdquo;</Tag>
        </div>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button to="/deal-room/nda-request" variant="primary">
            Request an NDA
          </Button>
          <Button to="/book-demo" variant="secondary" arrow>
            Book a demo
          </Button>
        </div>
      </Section>
    </div>
  );
}
