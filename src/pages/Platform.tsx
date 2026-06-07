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
import EngineeringStackFigure from '../components/diagrams/EngineeringStackFigure';

const STEPS = [
  {
    title: 'Connect',
    body: 'Plug RapidDraft into your CAD and PLM: Siemens NX, CATIA, SolidWorks, EPLAN, and your PDM or CIM Database. Your data stays in your governed systems.',
  },
  {
    title: 'Check',
    body: 'RapidDraft generates drawings and QA documents, then reviews them against your engineering, manufacturing, and company-specific rules. It flags missing dimensions, tolerance and GD&T issues, standards violations, and manufacturability risks.',
  },
  {
    title: 'Release',
    body: 'Engineers review the findings, decide, and release through a clear gate. Every decision feeds an audit trail (VDA, EMPB) and reusable company knowledge.',
  },
];

const MODULES = [
  {
    title: 'Drawing Memory',
    body: 'Generate manufacturing-ready drawings and inspection-ready documents, including BOMs and first-article and inspection reports, from current geometry, and preserve drafting intent as designs evolve.',
    list: [
      'Preserves dimensions, notes, and checks across revisions.',
      'Keeps redraw effort from starting at zero after each change.',
      'Turns review effort into reusable company knowledge.',
    ],
  },
  {
    title: 'Review Automation',
    body: 'Apply your engineering, manufacturing, and company-specific logic to surface manufacturability and completeness issues early, while engineers keep control of the final decisions.',
    list: [
      'Flags repeated DFM risks before formal review starts.',
      'Catches missing, inconsistent, or review-critical information before release.',
      'Standardizes technical drawings against ISO and ASME.',
    ],
  },
  {
    title: 'Model-Linked Collaboration',
    body: 'Give design, QA, and suppliers one shared CAD review environment built around the model.',
    list: [
      'Feedback stays attached to geometry instead of scattered screenshots.',
      'Every reviewer works from the same model state and revision.',
      'Lessons learned stay connected to the part for future iterations.',
    ],
  },
  {
    title: 'Bulk Review',
    body: 'Run repeated checks across drawings, revisions, and part families without reopening work one file at a time.',
    list: [
      'Applies the same review logic across large drawing sets and revision queues.',
      'Surfaces common failure patterns and high-priority outliers fast.',
      'Lets engineers triage exceptions instead of repeating the same checks.',
    ],
  },
];

const INTEGRATION_TAGS = [
  'Siemens NX',
  'CATIA',
  'SolidWorks',
  'EPLAN',
  'PLM / PDM (CIM Database)',
  'Drawings',
  'BOMs',
];

const FAQS = [
  {
    q: 'Does it work with my CAD?',
    a: 'Yes. Siemens NX, CATIA, SolidWorks, and EPLAN today, with more coming. You do not change tools or workflow.',
  },
  {
    q: 'Does it replace my engineers?',
    a: 'No. It highlights issues, suggests fixes, and automates repetitive work. Final approval always stays with the engineer.',
  },
  {
    q: 'Can it run on-prem?',
    a: 'Yes. It runs locally on your infrastructure, with local or EU-cloud options.',
  },
  {
    q: 'How accurate is it?',
    a: 'It is grounded in engineering standards and your company rules, and it learns from your feedback on your specific parts over time.',
  },
  {
    q: 'What happens to my data?',
    a: 'It stays in your environment. Models run locally, and training uses only anonymized or approved data.',
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

export default function Platform() {
  return (
    <div className="rd2">
      <PageMeta
        title="Platform | RapidDraft"
        description="RapidDraft sits on top of your CAD and PLM and keeps drawing release, design review, and manufacturing feedback attached to the model. It is human-in-the-loop and grounded in your rules."
        path="/platform"
      />

      {/* ── Hero (centered) ──────────────────────────────── */}
      <header className="relative overflow-hidden border-b border-[var(--rd-hair)]">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{ background: 'radial-gradient(48% 50% at 50% -6%, var(--rd-accent-soft), transparent 62%)' }}
        />
        <Container className="relative w-full pt-28 pb-16 sm:pt-32 sm:pb-20">
          <div className="mx-auto max-w-[820px] text-center">
            <Eyebrow>Platform</Eyebrow>
            <H1 className="mt-5">
              One agentic review layer for your entire <span className="rd-mark">drawing-release process</span>
            </H1>
            <Subhead className="mx-auto mt-5 max-w-[760px]">
              RapidDraft sits on top of your CAD and PLM and keeps drawing release, design review, and
              manufacturing feedback attached to the model. It is human-in-the-loop and grounded in your
              rules.
            </Subhead>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button to="/book-demo" variant="primary">
                Book a demo
              </Button>
              <Button to="/book-demo" variant="secondary" arrow>
                See it in your workflow
              </Button>
            </div>
          </div>
        </Container>
      </header>

      {/* ── Single source of truth ───────────────────────── */}
      <Section>
        <SectionHeader
          title="The model is the single source of truth, and so is the review"
          intro="Drawings, reviews, and feedback usually scatter across email, PDFs, and spreadsheets, disconnected from the CAD they describe. RapidDraft keeps them attached to the model and governed by your rules, so every release is backed by a complete, traceable review."
        />
      </Section>

      {/* ── How it works (three numbered steps) ──────────── */}
      <Section>
        <SectionHeader title="How it works" />
        <div className="mx-auto mt-10 grid max-w-[1120px] gap-4 sm:grid-cols-3">
          {STEPS.map((step, i) => (
            <div key={step.title} className="rd-tile">
              <div className="rd-index">0{i + 1}</div>
              <H3 className="mt-3">{step.title}</H3>
              <Body soft sm className="mt-2.5">
                {step.body}
              </Body>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Inside the platform (four modules) ───────────── */}
      <Section>
        <SectionHeader
          title="Inside the platform"
          intro="The modules behind RapidDraft, and how each one works."
        />
        <div className="mx-auto mt-10 grid max-w-[1120px] gap-4 sm:grid-cols-2">
          {MODULES.map((mod) => (
            <div key={mod.title} className="rd-tile">
              <H3>{mod.title}</H3>
              <Body soft sm className="mt-2.5">
                {mod.body}
              </Body>
              <ul className="mt-4 flex flex-col gap-2.5 text-left">
                {mod.list.map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1 w-1 flex-none rounded-full bg-[var(--rd-accent)]"
                    />
                    <Body soft sm>
                      {item}
                    </Body>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Integrations ─────────────────────────────────── */}
      <Section>
        <SectionHeader
          title="Works inside the stack you already run"
          intro="RapidDraft fits natively with Siemens NX, CATIA, SolidWorks, and EPLAN, and connects to your PDM or PLM, for example CIM Database. It reads your CAD models, drawings, and BOMs, and works with your release process rather than replacing it."
        />
        <div className="mx-auto mt-10 flex max-w-[860px] flex-wrap justify-center gap-2.5">
          {INTEGRATION_TAGS.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </Section>

      {/* ── AI review layer + figure ─────────────────────── */}
      <Section>
        <SectionHeader
          title="The AI review layer"
          intro="Analyze drawings, apply rules, surface issues, capture decisions. RapidDraft automates the repetitive checking and surfaces what needs attention. Every approval stays with your engineers, and it runs inside your environment."
        />
        <div className="mt-9 flex justify-center">
          <Button to="/security" variant="secondary" arrow>
            How we keep your data secure
          </Button>
        </div>
        <div className="mx-auto mt-9 w-full max-w-[920px] rounded-[16px] border border-[var(--rd-hair)] bg-[var(--rd-surface)] p-5 sm:p-6">
          <Figure caption="One review layer across your stack: drawings, PDM/PLM, and supplier QA in; DFM findings, inspection documents, BOMs, release gates, and an audit trail out.">
            <EngineeringStackFigure />
          </Figure>
        </div>
      </Section>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <Section>
        <SectionHeader title="Frequently asked questions" />
        <div className="mx-auto mt-10 flex max-w-[820px] flex-col gap-4">
          {FAQS.map((faq) => (
            <div key={faq.q} className="rd-tile text-left">
              <H3>{faq.q}</H3>
              <Body soft sm className="mt-2.5">
                {faq.a}
              </Body>
            </div>
          ))}
        </div>
        <div className="mt-9 flex justify-center">
          <Button to="/book-demo" variant="primary">
            Book a demo
          </Button>
        </div>
      </Section>
    </div>
  );
}
