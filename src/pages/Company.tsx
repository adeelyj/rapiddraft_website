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

// Photos + LinkedIn are language-independent, keyed by person name.
const PEOPLE: Record<string, { image: string; linkedin: string }> = {
  'Adeel Yawar Jamil': { image: '/media/adeel.jpg', linkedin: 'https://www.linkedin.com/in/adeelyawarjamil/' },
  'Dr. Hasan Raza': { image: '/media/hasan.jpg', linkedin: 'https://www.linkedin.com/in/shasanrr/' },
  'Sreekar Reddy Sajjala': { image: '/media/sreekar.jpg', linkedin: 'https://www.linkedin.com/in/sreekar2858/' },
  'Shehjar Kaul': { image: '/media/shehjar.jpg', linkedin: 'https://www.linkedin.com/in/shehjarkaul/' },
  'Julio Saucedo': { image: '/media/julio.jpg', linkedin: 'https://www.linkedin.com/in/julio-saucedo/' },
  'Muneeb Ahmed': { image: '/media/muneeb.jpg', linkedin: 'https://www.linkedin.com/in/muneebdotahmed/' },
};

/* Small accent uppercase label (Vision / Mission / role / category). */
function AccentLabel({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={clsx('text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--rd-accent)]', className)}
      style={{ fontFamily: 'var(--rd-meta)' }}
    >
      {children}
    </div>
  );
}

function LinkedInLink({ name }: { name: string }) {
  const media = PEOPLE[name];
  if (!media?.linkedin) return null;
  return (
    <a
      href={media.linkedin}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-1 text-[13px] font-medium text-[var(--rd-accent)] transition-opacity hover:opacity-80"
      style={{ fontFamily: 'var(--rd-meta)' }}
      aria-label={`${name} on LinkedIn`}
    >
      LinkedIn<span aria-hidden="true">↗</span>
    </a>
  );
}

function CheckIcon() {
  return (
    <span
      aria-hidden="true"
      className="flex h-7 w-7 items-center justify-center rounded-[9px]"
      style={{ background: 'var(--rd-accent-soft)' }}
    >
      <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
        <path d="M3.5 8.5l3 3 6-7" stroke="var(--rd-accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

/* Founder card: portrait photo + name, role, bio, LinkedIn (centered). */
function FounderCard({ name, role, bio }: { name: string; role: string; bio: string }) {
  const media = PEOPLE[name];
  return (
    <div className="overflow-hidden rounded-[16px] border border-[var(--rd-hair)] bg-[var(--rd-surface)] transition-colors hover:border-[var(--rd-edge)]">
      {media?.image && (
        <img src={media.image} alt={name} loading="lazy" className="aspect-[4/5] w-full object-cover" />
      )}
      <div className="p-6 text-center">
        <H3>{name}</H3>
        <AccentLabel className="mt-2">{role}</AccentLabel>
        <Body soft sm className="mt-3">
          {bio}
        </Body>
        <div className="mt-4 flex justify-center">
          <LinkedInLink name={name} />
        </div>
      </div>
    </div>
  );
}

/* Advisor card: compact avatar + name + role + LinkedIn (centered). */
function AdvisorCard({ name, role }: { name: string; role: string }) {
  const media = PEOPLE[name];
  return (
    <div className="rd-tile flex flex-col items-center">
      {media?.image && (
        <img
          src={media.image}
          alt={name}
          loading="lazy"
          className="h-16 w-16 rounded-full object-cover ring-1 ring-[var(--rd-hair)]"
        />
      )}
      <H3 className="mt-4 text-[17px]">{name}</H3>
      <div className="rd-microlabel mt-1.5 normal-case tracking-normal">{role}</div>
      <div className="mt-3">
        <LinkedInLink name={name} />
      </div>
    </div>
  );
}

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
    visionMission: {
      title: 'Vision and mission',
      intro: 'Where we are headed, and what we do every day to get there.',
      vision: {
        label: 'Vision',
        statement: 'The 3D model becomes the single source of truth for the entire release.',
        body: 'Drawings, reviews, inspection documents, and decisions all live with the model, so nothing is rebuilt from zero and no hard-won decision is ever lost.',
      },
      mission: {
        label: 'Mission',
        statement: 'Turn engineering release from a manual bottleneck into a reliable system.',
        body: 'We cut repeated drafting and review effort and keep every decision traceable, so teams move from design intent to release-ready output with speed and control.',
      },
    },
    team: {
      title: 'Engineering depth, AI capability, and industrial execution in one team',
      intro:
        'The founding team brings the technical understanding to see where the bottleneck lives, the product capability to build around it, and the operational discipline to make it useful inside real programs.',
    },
    advisors: {
      title: 'Advisory board',
      intro:
        'Operators and technical leaders who know how engineering software has to perform inside real industrial programs, not just in demos.',
    },
    backers: {
      title: 'Backed by',
      intro: 'Supported by leading European deep-tech programs.',
    },
    joinUs: {
      title: 'Help build better tools for how engineering release actually works',
      intro:
        'We are looking for people who want to work on hard, useful problems across software, geometry, AI, and industrial execution.',
      reasons: [
        { title: 'High impact', body: 'Direct influence on product direction and the workflows we solve first.' },
        { title: 'Deep technical problems', body: 'Hard problems across CAD, geometry, AI systems, and product design.' },
        { title: 'End-to-end ownership', body: 'From concept to delivery in a small, execution-focused team.' },
        { title: 'Low ego, high trust', body: 'A bias for practical engineering over theater.' },
      ],
    },
    openRoles: {
      title: 'Open roles',
      intro:
        'Each role is built around product ownership and technical depth. You will work across disciplines and shape how RapidDraft evolves.',
    },
    apply: {
      title: 'Apply',
      intro:
        'Send a short note about what you have built. We care more about judgment, execution quality, and technical depth than a polished application package.',
      nameLabel: 'Name',
      emailLabel: 'Email',
      messageLabel: 'What have you built? Why RapidDraft?',
      submit: 'Apply',
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
        role: 'Founder & Mechanical Engineering Lead',
        bio: '15+ years across CAD, simulation, and technical documentation in aerospace, automotive, and process industries. RapidDraft grew from his repeated experience of good designs slowing down in drawing and review chaos.',
      },
      {
        name: 'Dr. Hasan Raza',
        role: 'Founder & Operations Lead',
        bio: '15+ years scaling engineering and manufacturing operations globally, with the operating discipline to make RapidDraft useful inside real industrial release workflows.',
      },
      {
        name: 'Sreekar Reddy Sajjala',
        role: 'Founder & AI Lead',
        bio: 'Builds production AI systems and engineering software across FEM, CFD, topology optimization, and data-driven tooling, connecting engineering-grade reasoning with reliable software delivery.',
      },
    ],
    advisorList: [
      { name: 'Shehjar Kaul', role: 'Machine learning and business expert, Siemens' },
      { name: 'Julio Saucedo', role: 'Battery design and manufacturing lead, Volocopter' },
      { name: 'Muneeb Ahmed', role: 'Program manager, Amazon' },
    ],
    backerList: [
      { name: 'UnternehmerTUM', src: '/media/ecosystem/unternehmertum-logo.svg' },
      { name: 'XPLORE', src: '/media/ecosystem/xplore-logo.svg' },
    ],
    roles: [
      {
        category: 'Full-stack',
        title: 'Full Stack Web Developer',
        body: 'Build and scale the platform that turns complex CAD intelligence into fast, intuitive engineering workflows.',
        tags: ['Node.js/Python', 'React', 'CAD API experience', 'Cloud (AWS/GCP)', 'Git'],
      },
      {
        category: 'ML / Computational geometry',
        title: 'AI & ML Expert',
        body: 'Build systems that read 3D geometry and drawings to automate DFM checks, feature recognition, and engineering decisions.',
        tags: ['Python', 'PyTorch', 'OpenCascade', 'Graph Algorithms', '3D Vision'],
      },
      {
        category: 'Mechanical / CAD',
        title: 'CAD Automation Engineer',
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
    visionMission: {
      title: 'Vision und Mission',
      intro: 'Wohin wir wollen, und was wir jeden Tag dafür tun.',
      vision: {
        label: 'Vision',
        statement: 'Das 3D-Modell wird zur einzigen Quelle der Wahrheit für die gesamte Freigabe.',
        body: 'Zeichnungen, Reviews, Prüfdokumente und Entscheidungen leben am Modell, sodass nichts von Grund auf neu entsteht und keine hart erarbeitete Entscheidung verloren geht.',
      },
      mission: {
        label: 'Mission',
        statement: 'Engineering-Freigabe vom manuellen Engpass zu einem verlässlichen System machen.',
        body: 'Wir reduzieren wiederholten Zeichen- und Review-Aufwand und halten jede Entscheidung nachvollziehbar, sodass Teams schneller und kontrollierter von der Design-Absicht zum freigabefertigen Ergebnis gelangen.',
      },
    },
    team: {
      title: 'Engineering-Tiefe, KI-Kompetenz und industrielle Umsetzung in einem Team',
      intro:
        'Das Gründungsteam vereint das technische Verständnis, um zu sehen, wo der Engpass liegt, die Produktkompetenz, darum herum zu bauen, und die operative Disziplin, es in realen Programmen nützlich zu machen.',
    },
    advisors: {
      title: 'Beirat',
      intro:
        'Operative und technische Köpfe, die wissen, wie Engineering-Software in realen industriellen Programmen funktionieren muss, nicht nur in Demos.',
    },
    backers: {
      title: 'Unterstützt von',
      intro: 'Unterstützt von führenden europäischen Deep-Tech-Programmen.',
    },
    joinUs: {
      title: 'Helfen Sie, bessere Werkzeuge für die echte Engineering-Freigabe zu bauen',
      intro:
        'Wir suchen Menschen, die an harten, nützlichen Problemen aus Software, Geometrie, KI und industrieller Umsetzung arbeiten wollen.',
      reasons: [
        { title: 'Hohe Wirkung', body: 'Direkter Einfluss auf die Produktrichtung und die Workflows, die wir zuerst lösen.' },
        { title: 'Tiefe technische Probleme', body: 'Harte Probleme aus CAD, Geometrie, KI-Systemen und Produktdesign.' },
        { title: 'Verantwortung von Anfang bis Ende', body: 'Vom Konzept bis zur Auslieferung in einem kleinen, umsetzungsstarken Team.' },
        { title: 'Wenig Ego, viel Vertrauen', body: 'Eine Vorliebe für praktische Technik statt Theater.' },
      ],
    },
    openRoles: {
      title: 'Offene Stellen',
      intro:
        'Jede Rolle ist auf Produktverantwortung und technische Tiefe ausgerichtet. Sie arbeiten über Disziplinen hinweg und prägen, wie sich RapidDraft entwickelt.',
    },
    apply: {
      title: 'Bewerben',
      intro:
        'Schicken Sie uns ein kurzes Wort dazu, was Sie gebaut haben. Uns sind Urteilsvermögen, Umsetzungsqualität und technische Tiefe wichtiger als eine perfekte Bewerbung.',
      nameLabel: 'Name',
      emailLabel: 'E-Mail',
      messageLabel: 'Was haben Sie gebaut? Warum RapidDraft?',
      submit: 'Bewerben',
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
        role: 'Gründer & Lead Maschinenbau',
        bio: 'Über 15 Jahre in CAD, Simulation und technischer Dokumentation in Luft- und Raumfahrt, Automobil und Prozessindustrie. RapidDraft entstand aus seiner wiederkehrenden Erfahrung, dass gute Designs im Zeichnungs- und Review-Chaos ins Stocken geraten.',
      },
      {
        name: 'Dr. Hasan Raza',
        role: 'Gründer & Lead Operations',
        bio: 'Über 15 Jahre im weltweiten Aufbau von Engineering- und Fertigungsabläufen, mit der operativen Disziplin, RapidDraft in realen industriellen Freigabe-Workflows nützlich zu machen.',
      },
      {
        name: 'Sreekar Reddy Sajjala',
        role: 'Gründer & Lead KI',
        bio: 'Entwickelt produktive KI-Systeme und Engineering-Software über FEM, CFD, Topologieoptimierung und datengetriebene Werkzeuge hinweg und verbindet Engineering-fundiertes Denken mit verlässlicher Software-Auslieferung.',
      },
    ],
    advisorList: [
      { name: 'Shehjar Kaul', role: 'Experte für ML und Business, Siemens' },
      { name: 'Julio Saucedo', role: 'Lead Batteriedesign und -fertigung, Volocopter' },
      { name: 'Muneeb Ahmed', role: 'Programm-Manager, Amazon' },
    ],
    backerList: [
      { name: 'UnternehmerTUM', src: '/media/ecosystem/unternehmertum-logo.svg' },
      { name: 'XPLORE', src: '/media/ecosystem/xplore-logo.svg' },
    ],
    roles: [
      {
        category: 'Full-Stack',
        title: 'Full-Stack-Webentwickler',
        body: 'Entwickeln und skalieren Sie die Plattform, die komplexe CAD-Intelligenz in schnelle, intuitive Engineering-Workflows verwandelt.',
        tags: ['Node.js/Python', 'React', 'CAD-API-Erfahrung', 'Cloud (AWS/GCP)', 'Git'],
      },
      {
        category: 'ML / Computational Geometry',
        title: 'KI- und ML-Experte',
        body: 'Entwickeln Sie Systeme, die 3D-Geometrie und Zeichnungen lesen, um DFM-Prüfungen, Feature-Erkennung und Engineering-Entscheidungen zu automatisieren.',
        tags: ['Python', 'PyTorch', 'OpenCascade', 'Graph-Algorithmen', '3D-Vision'],
      },
      {
        category: 'Maschinenbau / CAD',
        title: 'CAD-Automatisierungsingenieur',
        body: 'Entwickeln Sie die zentrale CAD-Automatisierung, die Geometrie, Beziehungen und Engineering-Absicht aus NX-, SolidWorks- und CATIA-Modellen extrahiert.',
        tags: ['GD&T-Logik', 'NX/SolidWorks', 'Geometrieverarbeitung'],
      },
    ],
  },
} as const;

/* Consistent centered section header used by every section. */
function SectionHeader({
  title,
  intro,
  display = false,
}: {
  title: ReactNode;
  intro?: ReactNode;
  display?: boolean;
}) {
  return (
    <div className={clsx('mx-auto text-center', display ? 'max-w-[1000px]' : 'max-w-[860px]')}>
      <H2 display={display}>{title}</H2>
      {intro && <Intro className="mx-auto mt-5 max-w-[760px]">{intro}</Intro>}
    </div>
  );
}

export default function Company() {
  const { lang } = useLang();
  const t = CONTENT[lang];

  return (
    <div className="rd2 rd-page">
      <PageMeta title={t.meta.title} description={t.meta.description} path="/company" />

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
            <H1 className="mt-5">{t.hero.heading}</H1>
            <Subhead className="mx-auto mt-5 max-w-[760px]">{t.hero.subhead}</Subhead>
          </div>
        </Container>
      </header>

      {/* ── Vision and mission ───────────────────────────── */}
      <Section>
        <SectionHeader title={t.visionMission.title} intro={t.visionMission.intro} />
        <div className="mx-auto mt-10 grid max-w-[980px] gap-4 sm:grid-cols-2">
          {[t.visionMission.vision, t.visionMission.mission].map((item) => (
            <div
              key={item.label}
              className="rounded-[16px] border border-[var(--rd-hair)] bg-[var(--rd-surface)] p-8 text-center transition-colors hover:border-[var(--rd-edge)]"
            >
              <span
                aria-hidden="true"
                className="mx-auto block h-[5px] w-10 rounded-full"
                style={{ background: 'var(--rd-accent)' }}
              />
              <AccentLabel className="mt-5">{item.label}</AccentLabel>
              <p className="mx-auto mt-3 max-w-[420px] text-[21px] font-semibold leading-[1.3] tracking-[-0.01em] text-[var(--rd-fg-strong)]">
                {item.statement}
              </p>
              <Body soft sm className="mx-auto mt-4 max-w-[440px]">
                {item.body}
              </Body>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Founding team ────────────────────────────────── */}
      <Section id="team">
        <SectionHeader title={t.team.title} intro={t.team.intro} />
        <div className="mx-auto mt-10 grid max-w-[1000px] gap-4 sm:grid-cols-3">
          {t.founders.map((person) => (
            <FounderCard key={person.name} name={person.name} role={person.role} bio={person.bio} />
          ))}
        </div>
      </Section>

      {/* ── Advisory board ───────────────────────────────── */}
      <Section>
        <SectionHeader title={t.advisors.title} intro={t.advisors.intro} />
        <div className="mx-auto mt-10 grid max-w-[1000px] gap-4 sm:grid-cols-3">
          {t.advisorList.map((person) => (
            <AdvisorCard key={person.name} name={person.name} role={person.role} />
          ))}
        </div>
      </Section>

      {/* ── Backed by ────────────────────────────────────── */}
      <Section>
        <SectionHeader title={t.backers.title} intro={t.backers.intro} />
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {t.backerList.map((b) => (
            <img key={b.name} src={b.src} alt={b.name} className="h-9 w-auto opacity-80" loading="lazy" />
          ))}
        </div>
      </Section>

      {/* ── Join us (transition into open roles) ─────────── */}
      <Section>
        <SectionHeader title={t.joinUs.title} intro={t.joinUs.intro} />
        <div className="mx-auto mt-10 grid max-w-[1000px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.joinUs.reasons.map((reason) => (
            <div
              key={reason.title}
              className="rounded-[16px] border border-[var(--rd-hair)] bg-[var(--rd-surface)] p-6 text-left transition-colors hover:border-[var(--rd-edge)]"
            >
              <CheckIcon />
              <H3 className="mt-4 text-[17px]">{reason.title}</H3>
              <Body soft sm className="mt-2.5">
                {reason.body}
              </Body>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Open roles (horizontal split cards) ──────────── */}
      <Section id="open-roles">
        <SectionHeader title={t.openRoles.title} intro={t.openRoles.intro} />
        <div className="mx-auto mt-10 flex max-w-[920px] flex-col gap-4">
          {t.roles.map((role) => (
            <div
              key={role.title}
              className="grid gap-5 rounded-[16px] border border-[var(--rd-hair)] bg-[var(--rd-surface)] p-6 text-left transition-colors hover:border-[var(--rd-edge)] sm:p-7 md:grid-cols-[230px_minmax(0,1fr)]"
            >
              <div>
                <AccentLabel>{role.category}</AccentLabel>
                <H3 className="mt-2">{role.title}</H3>
              </div>
              <div>
                <Body soft sm>
                  {role.body}
                </Body>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {role.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Apply (short application form) ───────────────── */}
      <Section>
        <SectionHeader title={t.apply.title} intro={t.apply.intro} />
        <div className="mx-auto mt-10 w-full max-w-[640px] rd-tile">
          <form name="job-application" method="POST" data-netlify="true" className="flex flex-col gap-5 text-left">
            <input type="hidden" name="form-name" value="job-application" />

            <div>
              <label htmlFor="job-name" className="rd-label">
                {t.apply.nameLabel}
              </label>
              <input id="job-name" type="text" name="name" required className="rd-input" autoComplete="name" />
            </div>

            <div>
              <label htmlFor="job-email" className="rd-label">
                {t.apply.emailLabel}
              </label>
              <input id="job-email" type="email" name="email" required className="rd-input" autoComplete="email" />
            </div>

            <div>
              <label htmlFor="job-message" className="rd-label">
                {t.apply.messageLabel}
              </label>
              <textarea id="job-message" name="message" rows={5} className="rd-textarea" />
            </div>

            <button type="submit" className="rd-btn rd-btn--primary mt-1">
              {t.apply.submit}
            </button>
          </form>
        </div>
      </Section>

      {/* ── Contact ──────────────────────────────────────── */}
      <Section>
        <SectionHeader title={t.contact.title} />
        <MetaRow className="mt-8 justify-center" items={[...t.contact.meta]} />
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
