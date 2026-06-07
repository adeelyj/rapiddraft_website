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
        title: 'Drawings restart on every revision',
        body: 'Documentation gets rebuilt on every geometry change, even when the underlying intent is unchanged.',
      },
      {
        title: 'Manufacturing constraints live outside CAD',
        body: 'DFM notes, supplier feedback, and release caveats stay buried in PDFs and email, not on the part.',
      },
      {
        title: 'Review decisions lose their model context',
        body: 'Comments and approvals are hard to trace back to the exact change that triggered them.',
      },
      {
        title: 'Lessons learned rarely reach the next cycle',
        body: 'Teams keep rediscovering the same issues because past decisions are not kept with the model.',
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
        title: 'Zeichnungen starten bei jeder Revision neu',
        body: 'Die Dokumentation wird bei jeder Geometrieänderung neu erstellt, auch wenn die Absicht gleich bleibt.',
      },
      {
        title: 'Fertigungsvorgaben liegen außerhalb des CAD',
        body: 'DFM-Hinweise, Lieferantenfeedback und Freigabevorbehalte bleiben in PDFs und E-Mails, nicht am Bauteil.',
      },
      {
        title: 'Review-Entscheidungen verlieren den Modellbezug',
        body: 'Kommentare und Freigaben lassen sich schwer auf die auslösende Änderung zurückführen.',
      },
      {
        title: 'Erkenntnisse erreichen selten den nächsten Zyklus',
        body: 'Teams entdecken dieselben Probleme erneut, weil frühere Entscheidungen nicht am Modell bleiben.',
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
      { title: 'Vertrauen der Mitarbeitenden', body: 'Transparent und nachvollziehbar. Ingenieure behalten die Freigabe.' },
      { title: 'Datenqualität', body: 'Eine saubere Quelle für Zeichnungen und BOMs.' },
    ],
    meta: {
      pageTitle: 'RapidDraft | Agentenbasierte Zeichnungsfreigabe und Design-Review',
      pageDescription:
        'RapidDraft erkennt Zeichnungs- und Designprobleme vor der Freigabe, verankert in Ihren eigenen Regeln und On-Prem. Ein nachverfolgbares, Human-in-the-Loop-Zweitaugenpaar, das Befunde bis zu einem auditierbaren Freigabe-Gate trägt.',
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
      title: 'Zeichnungen analysieren, Reviews beschleunigen, Silos auflösen, Wissen bewahren',
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

  // Buttery, retargetable section scrolling (only while Home is mounted).
  // A wheel/trackpad swipe glides one section into place; a single continuous
  // critically-damped SmoothDamp loop always chases a mutable target, so rapid
  // swipes chain smoothly and nothing is ever LOCKED — a genuine swipe can never
  // be swallowed by a decaying momentum tail. Touch + reduced-motion fall back
  // to native scrolling.
  useEffect(() => {
    const el = document.documentElement;
    const prevRestoration = history.scrollRestoration;
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
    el.classList.add('rd-snap');

    const screens = Array.from(document.querySelectorAll<HTMLElement>('.rd-screen'));
    const vh0 = window.innerHeight;
    screens.forEach((s) => {
      const r = s.getBoundingClientRect();
      if (r.top < vh0 * 0.6 && r.bottom > vh0 * 0.4) s.classList.add('is-in');
    });
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('is-in')),
      { threshold: 0.35 },
    );
    screens.forEach((s) => io.observe(s));

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const coarse = window.matchMedia('(pointer: coarse)').matches;

    let teardown = () => {};
    if (!reduce && !coarse) {
      // Section stops, de-duplicated by Y so an advance can never resolve to the
      // position it already sits at and silently swallow a swipe.
      const stops = () => {
        const maxY = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
        const tops = screens.map((s) =>
          Math.min(maxY, Math.round(s.getBoundingClientRect().top + window.scrollY)),
        );
        tops[0] = 0; // hero sits at the page top (with the nav visible)
        if (maxY - tops[tops.length - 1] > 48) tops.push(maxY); // closing CTA + footer
        return Array.from(new Set(tops)).sort((a, b) => a - b);
      };
      const nearestIndex = (pts: number[], y: number) => {
        let bi = 0, bd = Infinity;
        pts.forEach((p, i) => { const d = Math.abs(p - y); if (d < bd) { bd = d; bi = i; } });
        return bi;
      };

      // ── Retargetable glide (Unity-style SmoothDamp: critically damped, no
      //    overshoot, frame-rate independent). Retargeting just moves targetY;
      //    the carried velocity makes the redirection seamless. scrollTo is
      //    instant here because html.rd-snap sets scroll-behavior:auto, so this
      //    easing — not the browser's smooth-scroll — is the sole controller. ──
      const SMOOTH = 0.19; // seconds; ~90% of the move in ~370ms, settled ~550ms — snappy but smooth
      let curY = window.scrollY;
      let targetY = window.scrollY;
      let vy = 0; // px/sec
      let running = false;
      let raf = 0;
      let lastTs = 0;
      const tick = (now: number) => {
        const dt = Math.min(0.064, lastTs ? (now - lastTs) / 1000 : 0.016);
        lastTs = now;
        const omega = 2 / SMOOTH;
        const x = omega * dt;
        const expf = 1 / (1 + x + 0.48 * x * x + 0.235 * x * x * x);
        const change = curY - targetY;
        const temp = (vy + omega * change) * dt;
        vy = (vy - omega * temp) * expf;
        curY = targetY + (change + temp) * expf;
        if (Math.abs(targetY - curY) < 0.5) {
          curY = targetY; vy = 0; running = false; lastTs = 0;
          window.scrollTo(0, Math.round(curY));
          return;
        }
        window.scrollTo(0, Math.round(curY));
        raf = requestAnimationFrame(tick);
      };
      const glideTo = (y: number) => {
        targetY = y;
        if (!running) {
          running = true;
          curY = window.scrollY; // resync if the user native-scrolled meanwhile
          lastTs = 0;
          raf = requestAnimationFrame(tick);
        }
      };
      const move = (dir: number) => {
        const pts = stops();
        const idx = nearestIndex(pts, targetY); // off the in-flight target so flicks accumulate
        glideTo(pts[Math.max(0, Math.min(pts.length - 1, idx + dir))]);
      };

      // ── Wheel intent vs momentum tail ─────────────────────────────────────
      // Normalize the delta, then advance on a genuine push, throttled by a
      // FIXED interval that momentum can never extend. A momentum tail is a
      // continuous stream of DECAYING deltas, so it is filtered out by trend —
      // never by a wall-clock lock it could keep alive — which is the whole bug
      // fixed: a real new flick (a delta spike, or after a pause) always fires.
      const normDelta = (e: WheelEvent) => {
        let d = e.deltaY;
        if (e.deltaMode === 1) d *= 16;                      // lines -> px
        else if (e.deltaMode === 2) d *= window.innerHeight; // pages -> px
        return d;
      };
      let lastAbs = 0, lastTime = 0, lastFire = 0;
      const onWheel = (e: WheelEvent) => {
        e.preventDefault();
        const d = normDelta(e);
        const ad = Math.abs(d);
        const now = performance.now();
        const gap = now - lastTime;
        const decaying = ad < lastAbs - 1; // |delta| falling => inertia, not a fresh push
        lastAbs = ad; lastTime = now;
        if (ad < 4) return;                       // ignore micro-deltas
        if (now - lastFire < 280) return;         // fixed throttle, NOT momentum-extended
        if (gap <= 140 && decaying) return;       // continuous + decaying = momentum tail
        lastFire = now;
        move(d > 0 ? 1 : -1);
      };

      const onKey = (e: KeyboardEvent) => {
        const node = e.target as HTMLElement | null;
        if (node && (node.tagName === 'INPUT' || node.tagName === 'TEXTAREA' || node.isContentEditable)) return;
        const pts = stops();
        if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') { e.preventDefault(); move(1); }
        else if (e.key === 'ArrowUp' || e.key === 'PageUp') { e.preventDefault(); move(-1); }
        else if (e.key === 'Home') { e.preventDefault(); glideTo(pts[0]); }
        else if (e.key === 'End') { e.preventDefault(); glideTo(pts[pts.length - 1]); }
      };

      window.addEventListener('wheel', onWheel, { passive: false });
      window.addEventListener('keydown', onKey);
      teardown = () => {
        window.removeEventListener('wheel', onWheel);
        window.removeEventListener('keydown', onKey);
        cancelAnimationFrame(raf);
      };
    }

    return () => {
      el.classList.remove('rd-snap');
      io.disconnect();
      screens.forEach((s) => s.classList.remove('is-in'));
      teardown();
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
      <header className="rd-screen rd-screen--hero relative overflow-hidden">
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
            <div key={card.title} className="rd-tile rd-tile--left rd-problemcard flex">
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
            <div key={cap.title} className="rd-tile rd-tile--left">
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
