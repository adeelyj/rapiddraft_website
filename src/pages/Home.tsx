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
      'drawing-memory': 'RapidDraft checking a manufacturing drawing against the rules and flagging issues before release.',
      'review-automation':
        'RapidDraft surfacing manufacturability and completeness issues for engineer review, with the source of each finding.',
      'model-collaboration': 'Design, quality, and suppliers reviewing around the shared 3D model and the drawing it releases.',
      'bulk-review':
        'RapidDraft running the same review logic across drawings, revisions, and part families.',
    },
    heroBadges: ['On-prem AI', 'Local/EU Cloud', 'GDPR-Compliant', 'Human-in-the-loop'],
    kpis: [
      { value: '30%', label: 'Fewer change cycles' },
      { value: '10x', label: 'Faster feedback' },
      { value: '50%', label: 'Less checking time' },
    ],
    problemCards: [
      {
        title: 'Design intent and drawings drift apart',
        body: 'Intent lives in CAD, requirements in the drawing.',
      },
      {
        title: 'Constraints live outside CAD',
        body: 'DFM notes and supplier feedback hide in email.',
      },
      {
        title: 'The review logic is tribal knowledge',
        body: 'The reasoning lives in a checker’s head, not the file.',
      },
      {
        title: 'The release chain is a serial bottleneck',
        body: 'Drawings wait on a serial sign-off chain.',
      },
    ],
    capabilities: [
      {
        title: 'Analyze manufacturing drawings',
        body: 'Check completeness, GD&T, datum schemes, and tolerance stack-up against your rules. Every finding links back to its source.',
      },
      {
        title: 'Accelerate design reviews',
        body: 'A tireless first pass before you cut the rev and before the EMPB. The engineer keeps the sign-off.',
      },
      {
        title: 'Remove team silos',
        body: 'Bring design, quality, and suppliers around one shared model, so feedback is answered in context, not over the wall.',
      },
      {
        title: 'Preserve company knowledge',
        body: 'Keep findings, decisions, and intent on the model, so the reasoning survives the next rev.',
      },
    ],
    pillars: [
      { title: 'Data sovereignty', body: 'Models run locally, on your infrastructure.' },
      { title: 'IP protection', body: 'We never train on your IP. It stays in-house.' },
      { title: 'Employee trust', body: 'Transparent and traceable. Engineers keep the sign-off.' },
      { title: 'Data quality', body: 'One clean source for parts, drawings, and BOMs.' },
    ],
    meta: {
      pageTitle: 'RapidDraft | Agentic drawing release and design review',
      pageDescription:
        'RapidDraft catches drawing and design issues before release, grounded in your own rules and running on-prem. A traceable, human-in-the-loop second set of eyes that carries findings through to an auditable release gate.',
    },
    hero: {
      eyebrow: 'Agentic drawing release and design review for engineering teams',
      headingLead: 'A traceable second set of eyes before you ',
      headingMark: 'cut the rev',
      subhead:
        'RapidDraft catches drawing and design issues before release, grounded in your own rules and running on-prem. The engineer keeps the sign-off.',
      bookDemo: 'Book a demo',
      seeHow: 'See how it works',
    },
    credibility: {
      title: 'Catch it in review, not after the EMPB',
      intro:
        'Catch an issue in review and you lose hours. Catch it after release and it is rework, a rejected EMPB, or scrap.',
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
        'Collaboration is inefficient, drawing review is error-prone, and the release chain waits on a serial multi-signature bottleneck.',
    },
    solution: {
      eyebrow: 'Solution',
      title: 'A grounded review that shows its work, not a black box',
      intro:
        'Human-in-the-loop AI grounded in your rules. Every finding links back to its source: the rule, standard, or drawing note.',
      caption:
        'RapidDraft sits between your release package, PDM/PLM, drawings, and CAD and an auditable release gate, with human-in-the-loop review at the center.',
    },
    capabilitiesSection: {
      eyebrow: 'Capabilities',
      title: 'Analyze drawings, accelerate reviews, remove silos, keep the knowledge',
      intro:
        'One review layer that reads the drawing, applies your rules, surfaces issues with their source, and keeps the decision context on the model across revisions.',
      cta: 'Explore the platform',
    },
    security: {
      eyebrow: 'Security',
      title: 'Runs on-prem. Your IP never leaves the building',
      intro:
        'Models run locally and we never train on your IP. The plain answer when nothing may be pasted into a public AI.',
      cta: 'Read about security',
    },
    finalCta: {
      title: 'Bring a drawing that is hard to release',
      intro:
        'Start narrow: one product family, one drawing-release process, one recurring bottleneck. We show the findings traced back to your rules, on your infrastructure.',
      bookDemo: 'Book a demo',
      seeUseCases: 'See use cases',
    },
  },
  de: {
    railAlts: {
      'drawing-memory':
        'RapidDraft prüft eine Fertigungszeichnung gegen Ihre Regeln und meldet Probleme vor der Freigabe.',
      'review-automation':
        'RapidDraft macht Fertigbarkeits- und Vollständigkeitsprobleme für die Prüfung sichtbar, mit Quelle zu jedem Befund.',
      'model-collaboration':
        'Konstruktion, QS und Lieferanten prüfen gemeinsam am geteilten 3D-Modell und an der freizugebenden Zeichnung.',
      'bulk-review':
        'RapidDraft wendet dieselbe Prüflogik über Zeichnungen, Revisionen und Teilefamilien hinweg an.',
    },
    heroBadges: ['On-Prem-KI', 'Lokale/EU-Cloud', 'DSGVO-konform', 'Human-in-the-Loop'],
    kpis: [
      { value: '30%', label: 'Weniger Änderungszyklen' },
      { value: '10x', label: 'Schnelleres Feedback' },
      { value: '50%', label: 'Weniger Prüfzeit' },
    ],
    problemCards: [
      {
        title: 'Absicht und Zeichnung driften',
        body: 'Absicht im CAD, Vorgaben in der Zeichnung.',
      },
      {
        title: 'Vorgaben liegen außerhalb des CAD',
        body: 'DFM-Hinweise und Feedback liegen in E-Mails.',
      },
      {
        title: 'Die Prüflogik ist tribales Wissen',
        body: 'Die Begründung steckt im Kopf des Prüfers.',
      },
      {
        title: 'Die Freigabekette ist ein serieller Engpass',
        body: 'Zeichnungen warten auf serielle Unterschriften.',
      },
    ],
    capabilities: [
      {
        title: 'Fertigungszeichnungen analysieren',
        body: 'Prüfen Sie Vollständigkeit, GD&T, Bezugssysteme und Toleranzketten gegen Ihre Regeln, jeder Befund mit seiner Quelle.',
      },
      {
        title: 'Design-Reviews beschleunigen',
        body: 'Ein unermüdlicher erster Durchgang, bevor Sie die Revision ziehen und vor dem EMPB. Die Freigabe bleibt beim Ingenieur.',
      },
      {
        title: 'Team-Silos auflösen',
        body: 'Bringen Sie Konstruktion, QS und Lieferanten an ein gemeinsames Modell, sodass Feedback im Kontext beantwortet wird.',
      },
      {
        title: 'Firmenwissen bewahren',
        body: 'Halten Sie Befunde, Entscheidungen und Absicht am Modell fest, sodass die Begründung die nächste Revision überlebt.',
      },
    ],
    pillars: [
      { title: 'Datensouveränität', body: 'Modelle laufen lokal, auf Ihrer Infrastruktur.' },
      { title: 'IP-Schutz', body: 'Wir trainieren nie auf Ihrem IP. Es bleibt im Haus.' },
      { title: 'Vertrauen der Mitarbeitenden', body: 'Transparent. Ingenieure behalten die Freigabe.' },
      { title: 'Datenqualität', body: 'Eine saubere Quelle für Zeichnungen und BOMs.' },
    ],
    meta: {
      pageTitle: 'RapidDraft | Agentenbasierte Zeichnungsfreigabe und Design-Review',
      pageDescription:
        'RapidDraft erkennt Zeichnungs- und Designprobleme vor der Freigabe, verankert in Ihren eigenen Regeln und On-Prem. Ein nachverfolgbares, Human-in-the-Loop-Zweitaugenpaar, das Befunde bis zu einem auditierbaren Freigabe-Gate trägt.',
    },
    hero: {
      eyebrow: 'Agentenbasierte Zeichnungsfreigabe und Design-Review für Engineering-Teams',
      headingLead: 'Ein zweites Augenpaar, bevor Sie die ',
      headingMark: 'Revision ziehen',
      subhead:
        'RapidDraft erkennt Zeichnungs- und Designprobleme vor der Freigabe, verankert in Ihren Regeln und On-Prem.',
      bookDemo: 'Demo buchen',
      seeHow: 'So funktioniert es',
    },
    credibility: {
      title: 'In der Prüfung abfangen, nicht nach dem EMPB',
      intro:
        'In der Prüfung kostet ein Fehler Stunden. Nach der Freigabe sind es Nacharbeit, ein abgelehntes EMPB oder Ausschuss.',
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
        'Die Zusammenarbeit ist ineffizient, die Zeichnungsprüfung fehleranfällig, und die Freigabekette wartet auf einen seriellen Mehrfach-Unterschriftsengpass.',
    },
    solution: {
      eyebrow: 'Lösung',
      title: 'Eine begründete Prüfung, die ihre Arbeit zeigt, keine Blackbox',
      intro:
        'Human-in-the-Loop-KI, verankert in Ihren Regeln. Jeder Befund führt zurück auf seine Quelle: die Regel, Norm oder Zeichnungsnotiz.',
      caption:
        'RapidDraft steht zwischen Ihrem Freigabepaket, PDM/PLM, Zeichnungen und CAD und einem auditierbaren Freigabe-Gate, mit Human-in-the-Loop-Prüfung im Zentrum.',
    },
    capabilitiesSection: {
      eyebrow: 'Funktionen',
      title: 'Zeichnungen analysieren, Reviews beschleunigen, Wissen bewahren',
      intro:
        'Eine Prüfebene, die die Zeichnung liest, Ihre Regeln anwendet, Probleme mit ihrer Quelle sichtbar macht und den Entscheidungskontext über Revisionen hinweg am Modell hält.',
      cta: 'Plattform ansehen',
    },
    security: {
      eyebrow: 'Sicherheit',
      title: 'Läuft On-Prem. Ihr IP verlässt nie das Haus',
      intro:
        'Modelle laufen lokal, und wir trainieren nie auf Ihrem IP. Die klare Antwort, wenn nichts in eine öffentliche KI eingefügt werden darf.',
      cta: 'Mehr zur Sicherheit',
    },
    finalCta: {
      title: 'Bringen Sie eine Zeichnung mit, die schwer freizugeben ist',
      intro:
        'Starten Sie eng: eine Produktfamilie, ein Zeichnungsfreigabe-Prozess, ein wiederkehrender Engpass. Wir zeigen die Befunde, zurückverfolgt auf Ihre Regeln, auf Ihrer Infrastruktur.',
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
        <div className="mx-auto mt-10 grid max-w-[1120px] gap-4 sm:grid-cols-3">
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
        <div className="mx-auto mt-10 grid max-w-[1120px] grid-cols-2 gap-4 sm:grid-cols-4">
          {t.pillars.map((p) => (
            <div key={p.title} className="rd-tile">
              <span
                aria-hidden="true"
                className="mx-auto flex h-7 w-7 items-center justify-center rounded-[9px]"
                style={{ background: 'var(--rd-accent-soft)' }}
              >
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3.5 8.5l3 3 6-7"
                    stroke="var(--rd-accent)"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <H3 className="mt-4">{p.title}</H3>
              <Body soft sm className="mt-2">
                {p.body}
              </Body>
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
