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

/* Consistent centered section header used by every section (copied from Home). */
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

const FOUNDERS = [
  {
    name: 'Adeel Yawar Jamil',
    bio: 'Founder and Mechanical Engineering Lead. 15+ years across CAD, simulation, and technical documentation in aerospace, automotive, and process industries. RapidDraft grew from his repeated experience of good designs slowing down in drawing and review chaos.',
  },
  {
    name: 'Dr. Hasan Raza',
    bio: 'Founder and Operations Lead. 15+ years scaling engineering and manufacturing operations globally, with the operating discipline to make RapidDraft useful inside real industrial release workflows.',
  },
  {
    name: 'Sreekar Reddy Sajjala',
    bio: 'Founder and AI Lead. Builds production AI systems and engineering software across FEM, CFD, topology optimization, and data-driven tooling, connecting engineering-grade reasoning with reliable software delivery.',
  },
];

const ADVISORS = [
  { name: 'Shehjar Kaul', bio: 'Machine learning and business expert at Siemens.' },
  { name: 'Julio Saucedo', bio: 'Battery design and manufacturing lead at Volocopter.' },
  { name: 'Muneeb Ahmed', bio: 'Program manager at Amazon.' },
];

const BACKERS = [
  { name: 'UnternehmerTUM', src: '/media/ecosystem/unternehmertum-logo.svg' },
  { name: 'XPLORE', src: '/media/ecosystem/xplore-logo.svg' },
];

const OPEN_ROLES = [
  {
    title: 'Full stack web developer',
    body: 'Build and scale the platform that turns complex CAD intelligence into fast, intuitive engineering workflows.',
    tags: ['Node.js/Python', 'React', 'CAD API experience', 'Cloud (AWS/GCP)', 'Git'],
  },
  {
    title: 'AI and ML expert',
    body: 'Build systems that understand 3D geometry and drawings to automate DFM checks, feature recognition, and engineering decisions.',
    tags: ['Python', 'PyTorch', 'OpenCascade', 'Graph Algorithms', '3D Vision'],
  },
  {
    title: 'CAD automation engineer',
    body: 'Develop the core CAD automation that extracts geometry, relationships, and engineering intent from NX, SolidWorks, and CATIA models.',
    tags: ['GD&T Logic', 'NX/SolidWorks', 'Geometry Processing'],
  },
];

export default function Company() {
  return (
    <div className="rd2">
      <PageMeta
        title="Company | RapidDraft"
        description="RapidDraft is built by engineers who have felt the release bottleneck firsthand, building tooling that reduces repeated effort, tightens review cycles, and makes release workflows easier to govern."
        path="/company"
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
            <Eyebrow>Company</Eyebrow>
            <H1 className="mt-5">
              Built by engineers who have felt the release bottleneck firsthand
            </H1>
            <Subhead className="mx-auto mt-5 max-w-[760px]">
              RapidDraft exists because technical drawings and design reviews still slow down real
              hardware programs. We are building the software we wished existed: tooling that reduces
              repeated effort, tightens review cycles, and makes release workflows easier to govern.
            </Subhead>
          </div>
        </Container>
      </header>

      {/* ── Our vision ───────────────────────────────────── */}
      <Section>
        <SectionHeader
          title="Our vision"
          intro="The 3D model should be the single source of truth for the entire release, including drawings, reviews, inspection documents, and decisions. We are building toward engineering work where nothing is rebuilt from zero on the next revision, and no hard-won decision is ever lost."
        />
      </Section>

      {/* ── Our mission ──────────────────────────────────── */}
      <Section>
        <SectionHeader
          title="Our mission"
          intro="To turn engineering release workflows from manual bottlenecks into structured, reliable systems. We reduce repeated drafting and review effort, improve consistency, and help teams move from design intent to release-ready output with more speed and control."
        />
      </Section>

      {/* ── Founding team ────────────────────────────────── */}
      <Section id="team">
        <SectionHeader title="Founding team" />
        <div className="mx-auto mt-10 grid max-w-[1120px] gap-4 sm:grid-cols-3">
          {FOUNDERS.map((person) => (
            <div key={person.name} className="rd-tile">
              <H3>{person.name}</H3>
              <Body soft sm className="mt-2.5">
                {person.bio}
              </Body>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Advisory board ───────────────────────────────── */}
      <Section>
        <SectionHeader title="Advisory board" />
        <div className="mx-auto mt-10 grid max-w-[1120px] gap-4 sm:grid-cols-3">
          {ADVISORS.map((person) => (
            <div key={person.name} className="rd-tile">
              <H3>{person.name}</H3>
              <Body soft sm className="mt-2.5">
                {person.bio}
              </Body>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Backed by ────────────────────────────────────── */}
      <Section>
        <SectionHeader title="Backed by" />
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {BACKERS.map((b) => (
            <img
              key={b.name}
              src={b.src}
              alt={b.name}
              className="h-9 w-auto opacity-80"
              loading="lazy"
            />
          ))}
        </div>
      </Section>

      {/* ── Open roles ───────────────────────────────────── */}
      <Section id="open-roles">
        <SectionHeader
          title="Open roles"
          intro="Each role is built around product ownership and technical depth. You will work across disciplines and help shape how RapidDraft evolves."
        />
        <div className="mx-auto mt-10 grid max-w-[1120px] gap-4 sm:grid-cols-3">
          {OPEN_ROLES.map((role) => (
            <div key={role.title} className="rd-tile">
              <H3>{role.title}</H3>
              <Body soft sm className="mt-2.5">
                {role.body}
              </Body>
              <div className="mt-5 flex flex-wrap justify-center gap-2.5">
                {role.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
        <Body soft sm className="mx-auto mt-8 max-w-[760px] text-center">
          Send a short note about what you have built. We care more about judgment, execution
          quality, and technical depth than a polished application package.
        </Body>
        <div className="mt-9 flex justify-center">
          <Button href="mailto:info@rapiddraft.ai" variant="primary">
            See open roles
          </Button>
        </div>
      </Section>

      {/* ── Contact ──────────────────────────────────────── */}
      <Section>
        <SectionHeader title="Contact" />
        <MetaRow
          className="mt-8 justify-center"
          items={['info@rapiddraft.ai', '+49 176 8444 3362', 'Munich, Germany']}
        />
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button to="/book-demo" variant="primary">
            Book a demo
          </Button>
          <Button href="mailto:info@rapiddraft.ai" variant="secondary" arrow>
            Contact us
          </Button>
        </div>
      </Section>
    </div>
  );
}
