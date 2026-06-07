import { type ReactNode } from 'react';
import clsx from 'clsx';
import PageMeta from '../components/PageMeta';
import { useLang } from '../i18n/LanguageContext';
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

const CONTENT = {
  en: {
    meta: {
      title: 'Company | RapidDraft',
      description:
        'RapidDraft is built by engineers who have felt the release bottleneck firsthand, building tooling that reduces repeated effort, tightens review cycles, and makes release workflows easier to govern.',
    },
    hero: {
      eyebrow: 'Company',
      heading: 'Built by engineers who have felt the release bottleneck firsthand',
      subhead:
        'RapidDraft exists because technical drawings and design reviews still slow down real hardware programs. We are building the software we wished existed: tooling that reduces repeated effort, tightens review cycles, and makes release workflows easier to govern.',
    },
    vision: {
      title: 'Our vision',
      intro:
        'The 3D model should be the single source of truth for the entire release, including drawings, reviews, inspection documents, and decisions. We are building toward engineering work where nothing is rebuilt from zero on the next revision, and no hard-won decision is ever lost.',
    },
    mission: {
      title: 'Our mission',
      intro:
        'To turn engineering release workflows from manual bottlenecks into structured, reliable systems. We reduce repeated drafting and review effort, improve consistency, and help teams move from design intent to release-ready output with more speed and control.',
    },
    team: { title: 'Founding team' },
    advisors: { title: 'Advisory board' },
    backers: { title: 'Backed by' },
    openRoles: {
      title: 'Open roles',
      intro:
        'Each role is built around product ownership and technical depth. You will work across disciplines and help shape how RapidDraft evolves.',
      note: 'Send a short note about what you have built. We care more about judgment, execution quality, and technical depth than a polished application package.',
      cta: 'See open roles',
    },
    contact: {
      title: 'Contact',
      meta: ['info@rapiddraft.ai', '+49 176 8444 3362', 'Munich, Germany'],
      ctaPrimary: 'Book a demo',
      ctaSecondary: 'Contact us',
    },
    founders: [
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
    ],
    advisorList: [
      { name: 'Shehjar Kaul', bio: 'Machine learning and business expert at Siemens.' },
      { name: 'Julio Saucedo', bio: 'Battery design and manufacturing lead at Volocopter.' },
      { name: 'Muneeb Ahmed', bio: 'Program manager at Amazon.' },
    ],
    backerList: [
      { name: 'UnternehmerTUM', src: '/media/ecosystem/unternehmertum-logo.svg' },
      { name: 'XPLORE', src: '/media/ecosystem/xplore-logo.svg' },
    ],
    roles: [
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
    ],
  },
  de: {
    meta: {
      title: 'Unternehmen | RapidDraft',
      description:
        'RapidDraft wird von Ingenieuren entwickelt, die den Freigabe-Engpass selbst erlebt haben. Wir bauen Werkzeuge, die wiederholten Aufwand reduzieren, Review-Zyklen verkürzen und Freigabe-Workflows leichter steuerbar machen.',
    },
    hero: {
      eyebrow: 'Unternehmen',
      heading: 'Entwickelt von Ingenieuren, die den Freigabe-Engpass selbst erlebt haben',
      subhead:
        'RapidDraft entsteht, weil technische Zeichnungen und Design-Reviews reale Hardware-Programme noch immer ausbremsen. Wir bauen die Software, die wir uns gewünscht haben: Werkzeuge, die wiederholten Aufwand reduzieren, Review-Zyklen verkürzen und Freigabe-Workflows leichter steuerbar machen.',
    },
    vision: {
      title: 'Unsere Vision',
      intro:
        'Das 3D-Modell sollte die einzige Quelle der Wahrheit für die gesamte Freigabe sein, einschließlich Zeichnungen, Reviews, Prüfdokumenten und Entscheidungen. Wir arbeiten an einer Ingenieurswelt, in der bei der nächsten Revision nichts von Grund auf neu erstellt wird und keine hart erarbeitete Entscheidung jemals verloren geht.',
    },
    mission: {
      title: 'Unsere Mission',
      intro:
        'Engineering-Freigabe-Workflows von manuellen Engpässen in strukturierte, verlässliche Systeme zu verwandeln. Wir reduzieren wiederholten Zeichen- und Review-Aufwand, verbessern die Konsistenz und helfen Teams, schneller und kontrollierter von der Design-Absicht zum freigabefertigen Ergebnis zu gelangen.',
    },
    team: { title: 'Gründungsteam' },
    advisors: { title: 'Beirat' },
    backers: { title: 'Unterstützt von' },
    openRoles: {
      title: 'Offene Stellen',
      intro:
        'Jede Rolle ist auf Produktverantwortung und technische Tiefe ausgerichtet. Sie arbeiten über Disziplinen hinweg und prägen mit, wie sich RapidDraft weiterentwickelt.',
      note: 'Schicken Sie uns ein kurzes Wort dazu, was Sie gebaut haben. Uns sind Urteilsvermögen, Umsetzungsqualität und technische Tiefe wichtiger als eine perfekt ausgearbeitete Bewerbung.',
      cta: 'Offene Stellen ansehen',
    },
    contact: {
      title: 'Kontakt',
      meta: ['info@rapiddraft.ai', '+49 176 8444 3362', 'München, Deutschland'],
      ctaPrimary: 'Demo buchen',
      ctaSecondary: 'Kontakt aufnehmen',
    },
    founders: [
      {
        name: 'Adeel Yawar Jamil',
        bio: 'Gründer und Lead Maschinenbau. Über 15 Jahre Erfahrung in CAD, Simulation und technischer Dokumentation in Luft- und Raumfahrt, Automobil und Prozessindustrie. RapidDraft entstand aus seiner wiederkehrenden Erfahrung, dass gute Designs im Zeichnungs- und Review-Chaos ins Stocken geraten.',
      },
      {
        name: 'Dr. Hasan Raza',
        bio: 'Gründer und Lead Operations. Über 15 Jahre Erfahrung im weltweiten Aufbau von Engineering- und Fertigungsabläufen, mit der operativen Disziplin, RapidDraft in realen industriellen Freigabe-Workflows nützlich zu machen.',
      },
      {
        name: 'Sreekar Reddy Sajjala',
        bio: 'Gründer und Lead KI. Entwickelt produktive KI-Systeme und Engineering-Software über FEM, CFD, Topologieoptimierung und datengetriebene Werkzeuge hinweg und verbindet Engineering-fundiertes Denken mit verlässlicher Software-Auslieferung.',
      },
    ],
    advisorList: [
      { name: 'Shehjar Kaul', bio: 'Experte für maschinelles Lernen und Business bei Siemens.' },
      { name: 'Julio Saucedo', bio: 'Lead Batteriedesign und -fertigung bei Volocopter.' },
      { name: 'Muneeb Ahmed', bio: 'Programm-Manager bei Amazon.' },
    ],
    backerList: [
      { name: 'UnternehmerTUM', src: '/media/ecosystem/unternehmertum-logo.svg' },
      { name: 'XPLORE', src: '/media/ecosystem/xplore-logo.svg' },
    ],
    roles: [
      {
        title: 'Full-Stack-Webentwickler',
        body: 'Entwickeln und skalieren Sie die Plattform, die komplexe CAD-Intelligenz in schnelle, intuitive Engineering-Workflows verwandelt.',
        tags: ['Node.js/Python', 'React', 'CAD-API-Erfahrung', 'Cloud (AWS/GCP)', 'Git'],
      },
      {
        title: 'KI- und ML-Experte',
        body: 'Entwickeln Sie Systeme, die 3D-Geometrie und Zeichnungen verstehen, um DFM-Prüfungen, Feature-Erkennung und Engineering-Entscheidungen zu automatisieren.',
        tags: ['Python', 'PyTorch', 'OpenCascade', 'Graph-Algorithmen', '3D-Vision'],
      },
      {
        title: 'CAD-Automatisierungsingenieur',
        body: 'Entwickeln Sie die zentrale CAD-Automatisierung, die Geometrie, Beziehungen und Engineering-Absicht aus NX-, SolidWorks- und CATIA-Modellen extrahiert.',
        tags: ['GD&T-Logik', 'NX/SolidWorks', 'Geometrieverarbeitung'],
      },
    ],
  },
} as const;

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

export default function Company() {
  const { lang } = useLang();
  const t = CONTENT[lang];

  return (
    <div className="rd2">
      <PageMeta
        title={t.meta.title}
        description={t.meta.description}
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
            <Eyebrow>{t.hero.eyebrow}</Eyebrow>
            <H1 className="mt-5">
              {t.hero.heading}
            </H1>
            <Subhead className="mx-auto mt-5 max-w-[760px]">
              {t.hero.subhead}
            </Subhead>
          </div>
        </Container>
      </header>

      {/* ── Our vision ───────────────────────────────────── */}
      <Section>
        <SectionHeader
          title={t.vision.title}
          intro={t.vision.intro}
        />
      </Section>

      {/* ── Our mission ──────────────────────────────────── */}
      <Section>
        <SectionHeader
          title={t.mission.title}
          intro={t.mission.intro}
        />
      </Section>

      {/* ── Founding team ────────────────────────────────── */}
      <Section id="team">
        <SectionHeader title={t.team.title} />
        <div className="mx-auto mt-10 grid max-w-[1120px] gap-4 sm:grid-cols-3">
          {t.founders.map((person) => (
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
        <SectionHeader title={t.advisors.title} />
        <div className="mx-auto mt-10 grid max-w-[1120px] gap-4 sm:grid-cols-3">
          {t.advisorList.map((person) => (
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
        <SectionHeader title={t.backers.title} />
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {t.backerList.map((b) => (
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
          title={t.openRoles.title}
          intro={t.openRoles.intro}
        />
        <div className="mx-auto mt-10 grid max-w-[1120px] gap-4 sm:grid-cols-3">
          {t.roles.map((role) => (
            <div key={role.title} className="rd-tile">
              <H3>{role.title}</H3>
              <Body soft sm className="mt-2.5">
                {role.body}
              </Body>
              <div className="mt-5 flex flex-wrap justify-center gap-2.5">
                {role.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
        <Body soft sm className="mx-auto mt-8 max-w-[760px] text-center">
          {t.openRoles.note}
        </Body>
        <div className="mt-9 flex justify-center">
          <Button href="mailto:info@rapiddraft.ai" variant="primary">
            {t.openRoles.cta}
          </Button>
        </div>
      </Section>

      {/* ── Contact ──────────────────────────────────────── */}
      <Section>
        <SectionHeader title={t.contact.title} />
        <MetaRow
          className="mt-8 justify-center"
          items={[...t.contact.meta]}
        />
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button to="/book-demo" variant="primary">
            {t.contact.ctaPrimary}
          </Button>
          <Button href="mailto:info@rapiddraft.ai" variant="secondary" arrow>
            {t.contact.ctaSecondary}
          </Button>
        </div>
      </Section>
    </div>
  );
}
