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
import { useLang } from '../i18n/LanguageContext';

const CONTENT = {
  en: {
    railAlts: {
      'drawing-memory': 'RapidDraft generating manufacturing-ready drawings from CAD geometry.',
      'review-automation':
        'RapidDraft surfacing manufacturability and completeness issues for engineer review.',
      'model-collaboration': 'Design, QA, and suppliers reviewing around the shared 3D model.',
      'bulk-review':
        'RapidDraft running review passes across drawings, revisions, and part families.',
    },
    heroBadges: ['On-prem AI', 'Local/EU Cloud', 'GDPR-Compliant', 'Human-in-the-loop'],
    kpis: [
      { value: '30%', label: 'Fewer change cycles' },
      { value: '10x', label: 'Faster feedback' },
      { value: '50%', label: 'Less checking time' },
    ],
    problemCards: [
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
    ],
    capabilities: [
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
    ],
    pillars: ['Data sovereignty', 'IP protection', 'Employee trust', 'Data quality'],
    meta: {
      pageTitle: 'RapidDraft | Agentic drawing release and design review',
      pageDescription:
        'RapidDraft catches design and drawing issues earlier and automates repetitive review checks, keeping decisions attached to the CAD model with engineers in control of every release.',
    },
    hero: {
      eyebrow: 'Agentic drawing release and design review for engineering teams',
      headingLead: 'Accelerate engineering decisions and ',
      headingMark: 'drawing release',
      subhead:
        'RapidDraft catches issues earlier, automates repetitive review, and keeps every decision attached to the model.',
      bookDemo: 'Book a demo',
      seeHow: 'See how it works',
    },
    credibility: {
      title: 'Reduce repeated work before it delays release',
      intro:
        'Faster feedback, fewer iterations, and less manual checking, right where drawings, reviews, and release readiness still slow teams down.',
      meta: [
        'Built by engineers from aerospace, automotive, and process industries',
        'Advised by leaders at Siemens, Volocopter, and Amazon',
        'Backed by UnternehmerTUM and XPLORE',
      ],
    },
    problem: {
      eyebrow: 'Problem',
      title: 'Design intent lives in CAD. Requirements live in drawings. The review logic lives in people’s heads',
      intro:
        'Collaboration is inefficient, drawing review is error-prone, and quality inspection is slow and tedious. Good designs stall in documentation and review.',
    },
    solution: {
      eyebrow: 'Solution',
      title: 'Turn fragmented review work into a connected release workflow',
      intro:
        'Human-in-the-loop AI, grounded in your rules, keeping drafting intent, review decisions, and feedback attached to the model.',
      caption:
        'RapidDraft sits between your engineering inputs and release-ready outputs, with human-in-the-loop review at the center.',
    },
    capabilitiesSection: {
      eyebrow: 'Capabilities',
      title: 'One review layer, four core capabilities',
      intro:
        'One layer that generates documents, automates checks, keeps collaboration on the model, and preserves what teams learn.',
      cta: 'Explore the platform',
    },
    security: {
      eyebrow: 'Security',
      title: 'Works with your stack, keeps your data in-house',
      intro:
        'AI-assisted review inside your existing CAD, drawing, BOM, and PLM workflows. Your tools, approval gates, and sensitive engineering data stay under your control.',
      cta: 'Read about security',
    },
    finalCta: {
      title: 'Bring speed and traceability to drawing release',
      intro:
        'See how RapidDraft reduces review effort, generates manufacturing-ready drawings faster, and keeps decision context across revisions.',
      bookDemo: 'Book a demo',
      seeUseCases: 'See use cases',
    },
  },
  de: {
    railAlts: {
      'drawing-memory':
        'RapidDraft erzeugt fertigungsreife Zeichnungen aus der CAD-Geometrie.',
      'review-automation':
        'RapidDraft macht Fertigbarkeits- und Vollständigkeitsprobleme für die Prüfung durch Ingenieure sichtbar.',
      'model-collaboration':
        'Konstruktion, QS und Lieferanten prüfen gemeinsam am geteilten 3D-Modell.',
      'bulk-review':
        'RapidDraft führt Prüfdurchläufe über Zeichnungen, Revisionen und Teilefamilien hinweg aus.',
    },
    heroBadges: ['On-Prem-KI', 'Lokale/EU-Cloud', 'DSGVO-konform', 'Human-in-the-Loop'],
    kpis: [
      { value: '30%', label: 'Weniger Änderungszyklen' },
      { value: '10x', label: 'Schnelleres Feedback' },
      { value: '50%', label: 'Weniger Prüfzeit' },
    ],
    problemCards: [
      {
        title: 'Zeichnungen starten bei jeder Revision neu',
        body: 'Dokumentationsarbeit wird bei jeder Geometrieänderung neu aufgebaut, selbst wenn die zugrunde liegende Absicht gleich bleibt.',
      },
      {
        title: 'Fertigungsvorgaben liegen außerhalb des CAD',
        body: 'DFM-Hinweise, Lieferantenfeedback und Freigabevorbehalte verschwinden in PDFs, E-Mails und Folge-Threads.',
      },
      {
        title: 'Prüfentscheidungen verlieren ihren Modellbezug',
        body: 'Kommentare und Freigaben lassen sich nur schwer auf die genaue Geometrieänderung zurückführen, die sie ausgelöst hat.',
      },
      {
        title: 'Erkenntnisse erreichen selten den nächsten Zyklus',
        body: 'Teams entdecken dieselben Probleme immer wieder, weil frühere Entscheidungen nicht beim Modell erhalten bleiben.',
      },
    ],
    capabilities: [
      {
        title: 'Zeichnungen und QS-Dokumente erstellen',
        body: 'Erzeugen Sie fertigungsreife Zeichnungen, BOMs sowie Erstmuster- und Prüfberichte direkt aus Ihrer CAD-Geometrie.',
      },
      {
        title: 'Prüfung und DFM-Checks automatisieren',
        body: 'Prüfen Sie Vollständigkeit, Fertigbarkeit und Normen (ISO/ASME) gegen Ihre Regeln und finden Sie Probleme vor der Freigabe.',
      },
      {
        title: 'Rund um das Modell zusammenarbeiten',
        body: 'Führen Sie Konstruktion, QS und Lieferanten in einem geteilten CAD-Prüfraum zusammen, jeder Kommentar an seiner Geometrie.',
      },
      {
        title: 'Prüfwissen bewahren',
        body: 'Halten Sie Entscheidungen, Befunde und Zeichnungsabsicht am Modell fest, sodass sie über Revisionen hinweg erhalten bleiben.',
      },
    ],
    pillars: ['Datensouveränität', 'IP-Schutz', 'Vertrauen der Mitarbeitenden', 'Datenqualität'],
    meta: {
      pageTitle: 'RapidDraft | Agentenbasierte Zeichnungsfreigabe und Design-Review',
      pageDescription:
        'RapidDraft erkennt Design- und Zeichnungsprobleme früher und automatisiert wiederkehrende Prüfungen, hält Entscheidungen am CAD-Modell und lässt Ingenieure jede Freigabe steuern.',
    },
    hero: {
      eyebrow: 'Agentenbasierte Zeichnungsfreigabe und Design-Review für Engineering-Teams',
      headingLead: 'Engineering-Entscheidungen ',
      headingMark: 'schneller freigeben',
      subhead:
        'RapidDraft erkennt Probleme früher, automatisiert wiederkehrende Prüfungen und hält jede Entscheidung am Modell fest.',
      bookDemo: 'Demo buchen',
      seeHow: 'So funktioniert es',
    },
    credibility: {
      title: 'Wiederholte Arbeit reduzieren, bevor sie die Freigabe verzögert',
      intro:
        'Schnelleres Feedback, weniger Iterationen und weniger manuelles Prüfen, genau dort, wo Zeichnungen, Reviews und Freigabereife Teams noch ausbremsen.',
      meta: [
        'Entwickelt von Ingenieuren aus Luftfahrt, Automotive und Prozessindustrie',
        'Beraten von Führungskräften bei Siemens, Volocopter und Amazon',
        'Unterstützt von UnternehmerTUM und XPLORE',
      ],
    },
    problem: {
      eyebrow: 'Problem',
      title: 'Designabsicht lebt im CAD. Anforderungen in Zeichnungen. Prüflogik in den Köpfen',
      intro:
        'Die Zusammenarbeit ist ineffizient, die Zeichnungsprüfung fehleranfällig und die Qualitätsinspektion langsam und mühsam. Gute Designs bleiben in Dokumentation und Prüfung stecken.',
    },
    solution: {
      eyebrow: 'Lösung',
      title: 'Aus fragmentierter Prüfarbeit einen vernetzten Freigabe-Workflow machen',
      intro:
        'Human-in-the-Loop-KI, verankert in Ihren Regeln, die Zeichnungsabsicht, Prüfentscheidungen und Feedback am Modell hält.',
      caption:
        'RapidDraft steht zwischen Ihren Engineering-Eingaben und freigabereifen Ergebnissen, mit Human-in-the-Loop-Prüfung im Zentrum.',
    },
    capabilitiesSection: {
      eyebrow: 'Funktionen',
      title: 'Eine Prüfebene, vier Kernfunktionen',
      intro:
        'Eine Ebene, die Dokumente erzeugt, Prüfungen automatisiert, die Zusammenarbeit am Modell hält und das Wissen der Teams bewahrt.',
      cta: 'Plattform ansehen',
    },
    security: {
      eyebrow: 'Sicherheit',
      title: 'Funktioniert mit Ihrem Stack, hält Ihre Daten im Haus',
      intro:
        'KI-gestützte Prüfung innerhalb Ihrer bestehenden CAD-, Zeichnungs-, BOM- und PLM-Workflows. Ihre Tools, Freigabe-Gates und sensiblen Engineering-Daten bleiben unter Ihrer Kontrolle.',
      cta: 'Mehr zur Sicherheit',
    },
    finalCta: {
      title: 'Tempo und Nachverfolgbarkeit in die Freigabe bringen',
      intro:
        'Sehen Sie, wie RapidDraft den Prüfaufwand reduziert, fertigungsreife Zeichnungen schneller erzeugt und den Entscheidungskontext über Revisionen hinweg bewahrt.',
      bookDemo: 'Demo buchen',
      seeUseCases: 'Anwendungsfälle ansehen',
    },
  },
} as const;

const RAIL_META = [
  {
    key: 'drawing-memory' as const,
    label: 'Drawing Memory',
    media: '/media/pitch/optimized/drawing-analysis.mp4',
    poster: '/media/pitch/pitch-drawing-memory.png',
    durationMs: 9030,
  },
  {
    key: 'review-automation' as const,
    label: 'Review Automation',
    media: '/media/pitch/optimized/design-review-expert-mode.mp4',
    poster: '/media/pitch/pitch-dfm-checks.png',
    durationMs: 15364,
  },
  {
    key: 'model-collaboration' as const,
    label: 'Model-Linked Collaboration',
    media: '/media/pitch/optimized/collaboration.mp4',
    poster: '/media/pitch/pitch-collaboration.png',
    durationMs: 5940,
  },
  {
    key: 'bulk-review' as const,
    label: 'Bulk Review',
    media: '/media/pitch/optimized/bulk-design-review.mp4',
    poster: '/media/pitch/pitch-release-approval.png',
    durationMs: 11100,
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

export default function Home() {
  const { lang } = useLang();
  const t = CONTENT[lang];

  const RAIL_ITEMS: RailItem[] = RAIL_META.map((item) => ({
    ...item,
    alt: t.railAlts[item.key],
  }));

  // Full-screen section snapping + card-style reveal, only while Home is mounted.
  useEffect(() => {
    const el = document.documentElement;
    // Always open at the hero; prevent the browser from restoring a prior
    // scroll position before mandatory snap engages.
    const prevRestoration = history.scrollRestoration;
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
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
      if ('scrollRestoration' in history) history.scrollRestoration = prevRestoration;
    };
  }, []);

  return (
    <div className="rd2">
      <PageMeta
        title={t.meta.pageTitle}
        description={t.meta.pageDescription}
        path="/"
      />

      {/* ── Hero (slightly larger, centered) ─────────────── */}
      <header className="rd-screen relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{ background: 'radial-gradient(48% 50% at 50% -6%, var(--rd-accent-soft), transparent 62%)' }}
        />
        <Container className="relative w-full">
          <div className="mx-auto max-w-[820px] text-center">
            <Eyebrow>{t.hero.eyebrow}</Eyebrow>
            <H1 className="mt-5">
              {t.hero.headingLead}
              <span className="rd-mark">{t.hero.headingMark}</span>
            </H1>
            <Subhead className="mx-auto mt-5 max-w-[760px]">{t.hero.subhead}</Subhead>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button to="/book-demo" variant="primary">
                {t.hero.bookDemo}
              </Button>
              <Button to="/platform" variant="secondary" arrow>
                {t.hero.seeHow}
              </Button>
            </div>
            <div className="mt-5 flex flex-wrap justify-center gap-2.5">
              {t.heroBadges.map((b) => (
                <Tag key={b}>{b}</Tag>
              ))}
            </div>
          </div>
        </Container>
      </header>

      {/* ── Product rail (own full screen so snap never skips it) ── */}
      <Section screen>
        <div className="mx-auto w-full max-w-[860px]">
          <CapabilityRail items={RAIL_ITEMS} />
        </div>
      </Section>

      {/* ── Credibility (no eyebrow) ─────────────────────── */}
      <Section screen>
        <SectionHeader
          title={t.credibility.title}
          intro={t.credibility.intro}
        />
        <div className="mx-auto mt-10 grid max-w-[1040px] gap-4 sm:grid-cols-3">
          {t.kpis.map((k) => (
            <div key={k.label} className="rd-tile">
              <div className="rd-kpi-num">{k.value}</div>
              <div className="rd-kpi-label mt-3">{k.label}</div>
            </div>
          ))}
        </div>
        <MetaRow
          className="mt-8 justify-center"
          items={[...t.credibility.meta]}
        />
      </Section>

      {/* ── Problem (display statement) ──────────────────── */}
      <Section screen>
        <SectionHeader
          eyebrow={t.problem.eyebrow}
          display
          title={t.problem.title}
          intro={t.problem.intro}
        />
        <div className="mx-auto mt-10 grid max-w-[1120px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.problemCards.map((card, i) => (
            <div key={card.title} className="rd-tile rd-problemcard flex">
              <div className="rd-problemcard__inner">
                <div className="rd-index">0{i + 1}</div>
                <H3 className="mt-3">{card.title}</H3>
                <Body soft sm className="mt-2.5">
                  {card.body}
                </Body>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Solution + figure 2 (centered showcase) ──────── */}
      <Section screen>
        <SectionHeader
          eyebrow={t.solution.eyebrow}
          title={t.solution.title}
          intro={t.solution.intro}
        />
        <div className="mx-auto mt-10 w-full max-w-[820px] rounded-[16px] border border-[var(--rd-hair)] bg-[var(--rd-surface)] p-5 sm:p-6">
          <Figure caption={t.solution.caption}>
            <HubAndSpokeFigure />
          </Figure>
        </div>
      </Section>

      {/* ── Capabilities ─────────────────────────────────── */}
      <Section screen>
        <SectionHeader
          eyebrow={t.capabilitiesSection.eyebrow}
          title={t.capabilitiesSection.title}
          intro={t.capabilitiesSection.intro}
        />
        <div className="mx-auto mt-10 grid max-w-[1120px] gap-4 sm:grid-cols-2">
          {t.capabilities.map((cap, i) => (
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
            {t.capabilitiesSection.cta}
          </Button>
        </div>
      </Section>

      {/* ── Security teaser ──────────────────────────────── */}
      <Section screen>
        <SectionHeader
          eyebrow={t.security.eyebrow}
          title={t.security.title}
          intro={t.security.intro}
        />
        <div className="mx-auto mt-10 grid max-w-[1040px] grid-cols-2 gap-4 sm:grid-cols-4">
          {t.pillars.map((p) => (
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
            {t.security.cta}
          </Button>
        </div>
      </Section>

      {/* ── ROI (centered showcase) ──────────────────────── */}
      <RoiCalculator />

      {/* ── Final CTA (closing block) ────────────────────── */}
      <Section>
        <div className="mx-auto max-w-[780px] text-center">
          <H2>{t.finalCta.title}</H2>
          <Intro className="mx-auto mt-5 max-w-[760px]">{t.finalCta.intro}</Intro>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button to="/book-demo" variant="primary">
              {t.finalCta.bookDemo}
            </Button>
            <Button to="/use-cases" variant="secondary" arrow>
              {t.finalCta.seeUseCases}
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
