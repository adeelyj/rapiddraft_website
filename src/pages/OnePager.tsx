/* /one-pager: a self-contained, print-ready A4 one-pager. Not linked anywhere
   in the site nav. Designed to print to a single A4 page with ~1cm margins and
   no nav/footer (the <style> below scopes the print rules to this route). Uses
   the site's design language (tokens, Inter, hairlines, single accent) at a
   compact, document-grade scale.

   Lean sales arc, one idea per beat, nothing repeated: who it is for + proof
   (hero) -> the problem (tension) -> the transformation (hub-and-spoke figure,
   the hero visual) -> how it runs on your own infrastructure (on-prem agent
   flow) -> where it fits + standards -> credibility + pilot CTA. Theme-reactive
   on screen (light / dark); print always re-pins to a light, white-paper A4. */
import { useLang } from '../i18n/LanguageContext';
import PageMeta from '../components/PageMeta';
import HubAndSpokeFigure from '../components/diagrams/HubAndSpokeFigure';

const HS_INPUTS = ['NX / CATIA / SW', '2D Drawings', 'PDM / PLM', 'Release Package', 'Supplier QA'];
const HS_OUTPUTS = ['DFM Findings', 'FAIR Readiness', 'BOM Consistency', 'Release Gate', 'Audit (VDA, EMPB)'];
const HS_ALT =
  'Engineering inputs (NX/CATIA/SW, 2D drawings, PDM/PLM, release package, supplier QA) feed into ' +
  'RapidDraft at the center, which produces DFM findings, FAIR readiness, BOM consistency, a release ' +
  'gate, and a VDA/EMPB audit trail.';

const CONTENT = {
  en: {
    meta: {
      title: 'One-pager | RapidDraft',
      description:
        'On-prem agentic AI for hardware and mechanical engineering. A tireless first pass over your drawings and reviews, grounded in your rules and traceable to the source. The engineer keeps the sign-off.',
    },
    badges: ['On-prem AI', 'SSO', 'Local / EU Cloud', 'GDPR-compliant'],
    eyebrow: 'For hardware and mechanical engineering teams',
    headingLead: 'Accelerate engineering decisions and ',
    headingMark: 'drawing release',
    subhead:
      'An on-prem agent runs a tireless first pass over your drawings and reviews, grounded in your rules and traceable to the source. The engineer keeps the sign-off.',
    stats: [
      { k: '30%', v: 'Fewer change cycles' },
      { k: '10x', v: 'Faster feedback' },
      { k: '50%', v: 'Less checking time' },
    ],
    problem: {
      title: 'The problem',
      text: 'Design intent lives in CAD, requirements live in drawings, and the review logic lives in people’s heads. Collaboration is slow, drawing review is error-prone, and quality inspection is tedious.',
    },
    figureCaption: 'From your engineering stack to an auditable release gate, with human-in-the-loop review at the center.',
    how: {
      title: 'How it works, on your infrastructure',
      sub: 'Your data stays on-site, and an engineer approves before anything is written back to your PLM.',
      steps: [
        { k: '01', title: 'Your data, on-prem', body: 'CAD, drawings, BOM, and EPLAN on your NVIDIA DGX Spark, on your network.' },
        { k: '02', title: 'Agent runs the first pass', body: 'Checks drawings against your rules with BOM, DFM, model, and knowledge tools. Evidence-linked, not a chatbot.' },
        { k: '03', title: 'Engineer approves', body: 'A traceable second set of eyes. The decision stays on the model, and the engineer keeps the sign-off.' },
        { k: '04', title: 'Release to your PLM', body: 'Approved findings are written back to your CIM Database.' },
      ],
    },
    fit: {
      title: 'Where it fits',
      items: ['Technical drawing checks', 'Quality docs (BOM, FAIR)', 'DFM reviews', 'Supplier handoff', 'Change updates (ECN)'],
    },
    trust: {
      title: 'Standards and sovereignty',
      chips: ['No training on your IP', 'ISO / ASME', 'VDA Band 2, EMPB', 'Full audit trail'],
    },
    proof: 'Advised by leaders at Siemens, Volocopter, and Amazon. Backed by UnternehmerTUM and XPLORE.',
    pilot: {
      title: 'Launch a pilot with RapidDraft',
      body: 'Start narrow: one product family, one release process, or one recurring review bottleneck.',
      cta: 'Book a demo',
      contact: 'rapiddraft.ai · info@rapiddraft.ai · Munich, Germany',
    },
  },
  de: {
    meta: {
      title: 'One-Pager | RapidDraft',
      description:
        'On-Prem-KI für Hardware- und Mechanik-Engineering. Ein unermüdlicher erster Durchgang über Ihre Zeichnungen und Reviews, verankert in Ihren Regeln und nachvollziehbar bis zur Quelle. Die Freigabe bleibt beim Ingenieur.',
    },
    badges: ['On-Prem-KI', 'SSO', 'Lokale / EU-Cloud', 'DSGVO-konform'],
    eyebrow: 'Für Hardware- und Mechanik-Engineering-Teams',
    headingLead: 'Schnellere Entscheidungen und ',
    headingMark: 'Zeichnungsfreigabe',
    subhead:
      'Ein On-Prem-Agent übernimmt den unermüdlichen ersten Durchgang über Ihre Zeichnungen und Reviews, verankert in Ihren Regeln und nachvollziehbar bis zur Quelle. Die Freigabe bleibt beim Ingenieur.',
    stats: [
      { k: '30%', v: 'Weniger Änderungszyklen' },
      { k: '10x', v: 'Schnelleres Feedback' },
      { k: '50%', v: 'Weniger Prüfzeit' },
    ],
    problem: {
      title: 'Das Problem',
      text: 'Designabsicht steckt im CAD, Anforderungen in Zeichnungen, und die Prüflogik in den Köpfen. Zusammenarbeit ist langsam, Zeichnungsprüfung fehleranfällig, und die Qualitätsprüfung mühsam.',
    },
    figureCaption: 'Von Ihrem Engineering-Stack zu einem auditierbaren Release-Gate, mit Human-in-the-Loop-Review im Zentrum.',
    how: {
      title: 'So funktioniert es, auf Ihrer Infrastruktur',
      sub: 'Ihre Daten bleiben im Haus, und ein Ingenieur gibt frei, bevor etwas in Ihr PLM zurückgeschrieben wird.',
      steps: [
        { k: '01', title: 'Ihre Daten, On-Prem', body: 'CAD, Zeichnungen, BOM und EPLAN auf Ihrem NVIDIA DGX Spark, in Ihrem Netzwerk.' },
        { k: '02', title: 'Agent prüft zuerst', body: 'Prüft Zeichnungen gegen Ihre Regeln mit BOM-, DFM-, Modell- und Wissens-Tools. Mit Belegen verknüpft, kein Chatbot.' },
        { k: '03', title: 'Ingenieur gibt frei', body: 'Ein nachvollziehbares zweites Augenpaar. Die Entscheidung bleibt am Modell, und die Freigabe beim Ingenieur.' },
        { k: '04', title: 'Freigabe an Ihr PLM', body: 'Freigegebene Befunde werden in Ihre CIM-Datenbank zurückgeschrieben.' },
      ],
    },
    fit: {
      title: 'Wo es passt',
      items: ['Technische Zeichnungsprüfungen', 'Qualitätsdokumente (BOM, FAIR)', 'DFM-Reviews', 'Lieferanten-Handoff', 'Änderungen (ECN)'],
    },
    trust: {
      title: 'Standards und Souveränität',
      chips: ['Kein Training auf Ihrem IP', 'ISO / ASME', 'VDA Band 2, EMPB', 'Vollständiger Audit-Trail'],
    },
    proof: 'Beraten von Führungskräften bei Siemens, Volocopter und Amazon. Unterstützt von UnternehmerTUM und XPLORE.',
    pilot: {
      title: 'Starten Sie einen Piloten mit RapidDraft',
      body: 'Eng anfangen: eine Produktfamilie, ein Freigabeprozess oder ein wiederkehrender Review-Engpass.',
      cta: 'Demo buchen',
      contact: 'rapiddraft.ai · info@rapiddraft.ai · München, Deutschland',
    },
  },
} as const;

function Eyebrow({ children }: { children: string }) {
  return (
    <p className="op-eyebrow">
      <span className="op-slash">//</span>
      {children}
    </p>
  );
}

function LockGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="op-lock" aria-hidden="true">
      <rect x="5" y="10.5" width="14" height="9.5" rx="2.4" />
      <path d="M7.5 10.5 V8 a4.5 4.5 0 0 1 9 0 V10.5" fill="none" />
    </svg>
  );
}

export default function OnePager() {
  const { lang } = useLang();
  const t = CONTENT[lang];

  return (
    <div className="rd2 op-screen">
      <PageMeta title={t.meta.title} description={t.meta.description} path="/one-pager" />
      <style>{`
        .op-screen { display: flex; justify-content: center; background: var(--rd-sunken); padding: 28px 16px; }
        .op-sheet {
          width: 210mm; min-height: 297mm; box-sizing: border-box; padding: 9mm 11mm;
          background: #fff; color: var(--rd-fg);
          box-shadow: 0 18px 60px -28px rgba(17,24,39,0.4);
          display: flex; flex-direction: column;
          font-family: var(--rd-sans, 'Inter', sans-serif);
        }

        /* ── Header ──────────────────────────────────────────── */
        .op-badge { display: inline-flex; align-items: center; border: 1px solid var(--rd-hair); border-radius: 999px; padding: 3.5px 10px; font-size: 8.6px; font-weight: 500; color: var(--rd-fg-2); white-space: nowrap; }

        /* ── Hero ────────────────────────────────────────────── */
        .op-eyebrow { display: flex; align-items: center; gap: 7px; font-family: var(--rd-meta); font-size: 8.6px; font-weight: 600; letter-spacing: 1.1px; text-transform: uppercase; color: var(--rd-fg-3); margin: 0; }
        .op-slash { font-family: var(--rd-mono); color: var(--rd-accent); letter-spacing: 0; }
        .op-h1 { font-family: var(--rd-sans, 'Inter'); font-size: 27px; font-weight: 600; letter-spacing: -0.02em; line-height: 1.08; color: var(--rd-head); margin: 8px 0 0; }
        .op-mark { color: var(--rd-accent); }
        .op-sub { font-size: 10.5px; line-height: 1.5; color: var(--rd-fg-2); margin: 8px 0 0; max-width: 165mm; }

        /* ── Stat band ───────────────────────────────────────── */
        .op-stats { display: grid; grid-template-columns: repeat(3, 1fr); margin: 14px 0 0; border-top: 1px solid var(--rd-hair); border-bottom: 1px solid var(--rd-hair); }
        .op-stat { padding: 11px 0 11px 18px; }
        .op-stat:first-child { padding-left: 0; }
        .op-stat + .op-stat { border-left: 1px solid var(--rd-hair); }
        .op-stat-k { font-family: var(--rd-num); font-size: 20px; font-weight: 700; line-height: 1; color: var(--rd-accent); letter-spacing: -0.01em; }
        .op-stat-v { font-size: 8.4px; color: var(--rd-fg-3); margin-top: 3px; letter-spacing: 0.2px; }

        /* ── Problem ─────────────────────────────────────────── */
        .op-problem { margin-top: 15px; border-left: 2px solid var(--rd-accent); padding-left: 12px; }
        .op-problem-title { font-family: var(--rd-meta); font-size: 8.6px; font-weight: 600; letter-spacing: 1.1px; text-transform: uppercase; color: var(--rd-accent); margin: 0; }
        .op-problem-text { font-size: 10px; line-height: 1.5; color: var(--rd-fg); margin: 5px 0 0; max-width: 172mm; }

        /* ── Section headings + figure caption ───────────────── */
        .op-section-title { font-size: 11.5px; font-weight: 600; letter-spacing: 0; color: var(--rd-head); margin: 0; }
        .op-section-sub { font-size: 9.2px; line-height: 1.45; color: var(--rd-fg-3); margin: 3px 0 0; max-width: 160mm; }
        .op-cap { font-size: 8.6px; line-height: 1.4; color: var(--rd-fg-3); text-align: center; margin: 7px auto 0; max-width: 150mm; }

        /* ── How it works (on-prem flow) ─────────────────────── */
        .op-flow { display: flex; align-items: stretch; gap: 0; margin-top: 10px; }
        .op-step { flex: 1; display: flex; flex-direction: column; border: 1px solid var(--rd-hair); border-radius: 10px; background: var(--rd-surface); padding: 9px 11px; }
        .op-step-k { font-family: var(--rd-num); font-size: 11px; font-weight: 700; color: var(--rd-accent); letter-spacing: 0.4px; }
        .op-step-title { font-size: 9.2px; font-weight: 600; line-height: 1.2; color: var(--rd-fg-strong); margin: 5px 0 0; }
        .op-step-body { font-size: 8.4px; line-height: 1.42; color: var(--rd-fg-2); margin: 4px 0 0; }
        .op-chev { display: flex; align-items: center; padding: 0 6px; color: var(--rd-accent); font-size: 13px; font-weight: 600; opacity: 0.85; }
        .op-head-lock { display: flex; align-items: center; gap: 7px; }

        /* ── Two-column: where it fits / standards ───────────── */
        .op-cols { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; margin-top: 17px; }
        .op-chips { display: flex; flex-wrap: wrap; gap: 6px 5px; margin-top: 9px; }
        .op-chip { display: inline-flex; align-items: center; border: 1px solid var(--rd-hair); border-radius: 999px; padding: 4px 9px; font-size: 8.6px; font-weight: 500; color: var(--rd-fg-2); white-space: nowrap; }
        .op-chip--soft { border-color: var(--rd-accent-hair); color: var(--rd-fg); }

        /* ── Footer: credibility + pilot CTA ─────────────────── */
        .op-proof { font-size: 9px; line-height: 1.45; color: var(--rd-fg-3); margin: 12px 0 0; }
        .op-pilot { display: flex; align-items: center; justify-content: space-between; gap: 16px; border: 1px solid var(--rd-accent-hair); background: var(--rd-accent-soft); border-radius: 12px; padding: 11px 15px; }
        .op-pilot-title { font-size: 11.5px; font-weight: 600; color: var(--rd-head); margin: 0; }
        .op-pilot-body { font-size: 9.2px; line-height: 1.4; color: var(--rd-fg-2); margin: 3px 0 0; max-width: 120mm; }
        .op-cta { display: inline-flex; align-items: center; border-radius: 999px; background: var(--rd-accent); color: #fff; font-size: 10.5px; font-weight: 600; padding: 9px 18px; white-space: nowrap; }
        .op-contact { font-family: var(--rd-meta); font-size: 8.2px; letter-spacing: 0.3px; color: var(--rd-fg-3); text-align: center; margin: 9px 0 0; }

        /* ── Theme-reactive logo swap (light mark / white mark) ─ */
        .op-logo { display: block; width: auto; height: 46px; }
        .op-logo--dark { display: none; }
        [data-theme='dark'] .op-logo--light { display: none; }
        [data-theme='dark'] .op-logo--dark { display: block; }
        .op-lock { width: 13px; height: 13px; stroke: var(--rd-accent); fill: none; stroke-width: 1.6; }
        .op-lock rect { fill: var(--rd-accent-soft); }

        /* Dark mode: the sheet becomes a dark document matching the site; a
           hairline defines its edge since the drop shadow is invisible on the
           near-black canvas. (Print re-pins everything back to white paper.) */
        [data-theme='dark'] .op-sheet { background: var(--rd-bg); border: 1px solid var(--rd-hair); }

        @media print {
          @page { size: A4; margin: 0; }
          html, body { background: #fff !important; margin: 0 !important; padding: 0 !important; }
          .rd-app > nav, .rd-app > footer, .rd-app__grid-root { display: none !important; }
          .rd-app > main, .rd-app { overflow: visible !important; }
          .op-screen { background: #fff !important; padding: 0 !important; min-height: 0 !important; display: block !important; }
          /* Always print a light, white-paper A4, even when the app is in dark
             mode: re-pin every --rd-* token on the sheet to its light value so
             all token-driven descendants (text, boxes, the figure) render as
             dark ink on white. Pin to exactly one A4 page; overflow:hidden stops
             a sub-pixel rounding sliver from spilling to a second page. */
          .op-sheet {
            --rd-bg: #f5f5f5; --rd-surface: #ffffff; --rd-raised: #ffffff; --rd-sunken: #ececec; --rd-inverse: #0d0d0d;
            --rd-fg-strong: #000000; --rd-head: #1f1f1f; --rd-fg: #1a1a1a; --rd-fg-2: #4a4a4a; --rd-fg-3: #5f5f5f; --rd-muted: #a0a0a0;
            --rd-hair: #e0e0e0; --rd-edge: #c8c8c8;
            --rd-accent: #ea580c; --rd-accent-press: #c2410c; --rd-accent-soft: rgba(234,88,12,0.10); --rd-accent-hair: rgba(234,88,12,0.32);
            background: #ffffff !important; border: 0 !important; box-shadow: none !important;
            width: 210mm !important; height: 297mm !important; min-height: 0 !important; overflow: hidden !important;
          }
          .op-sheet, .op-sheet * { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          .op-logo--light { display: block !important; }
          .op-logo--dark { display: none !important; }
        }
      `}</style>

      <article className="op-sheet">
        {/* ── Header ─────────────────────────────────────── */}
        <header>
          <div className="flex items-start justify-between gap-4">
            {/* Theme-reactive logo: dark mark on the light sheet, white mark on
                the dark sheet. Print always forces the dark mark (white paper). */}
            <div className="shrink-0">
              <img src="/media/rd_logo.png" alt="RapidDraft" className="op-logo op-logo--light" />
              <img src="/media/rd_logo_white.png" alt="" aria-hidden="true" className="op-logo op-logo--dark" />
            </div>
            <div className="flex flex-wrap justify-end gap-1.5">
              {t.badges.map((b) => (
                <span key={b} className="op-badge">{b}</span>
              ))}
            </div>
          </div>
          <div className="mt-5">
            <Eyebrow>{t.eyebrow}</Eyebrow>
            <h1 className="op-h1">
              {t.headingLead}
              <span className="op-mark">{t.headingMark}</span>
            </h1>
            <p className="op-sub">{t.subhead}</p>
          </div>

          <div className="op-stats">
            {t.stats.map((s) => (
              <div key={s.k} className="op-stat">
                <div className="op-stat-k">{s.k}</div>
                <div className="op-stat-v">{s.v}</div>
              </div>
            ))}
          </div>
        </header>

        {/* ── The problem ────────────────────────────────── */}
        <div className="op-problem">
          <p className="op-problem-title">{t.problem.title}</p>
          <p className="op-problem-text">{t.problem.text}</p>
        </div>

        {/* ── The transformation (hero figure) ───────────── */}
        <div className="mx-auto mt-7 w-full" style={{ maxWidth: '146mm' }}>
          <HubAndSpokeFigure inputs={HS_INPUTS} outputs={HS_OUTPUTS} alt={HS_ALT} />
        </div>
        <p className="op-cap">{t.figureCaption}</p>

        {/* ── How it works, on your infrastructure ────────── */}
        <div className="mt-7">
          <div className="op-head-lock">
            <LockGlyph />
            <p className="op-section-title">{t.how.title}</p>
          </div>
          <p className="op-section-sub">{t.how.sub}</p>
          <div className="op-flow">
            {t.how.steps.map((s, i) => (
              <div key={s.k} className="contents">
                {i > 0 && <span className="op-chev" aria-hidden="true">›</span>}
                <div className="op-step">
                  <div className="op-step-k">{s.k}</div>
                  <p className="op-step-title">{s.title}</p>
                  <p className="op-step-body">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Where it fits  /  Standards and sovereignty ─── */}
        <div className="op-cols">
          <div>
            <p className="op-section-title">{t.fit.title}</p>
            <div className="op-chips">
              {t.fit.items.map((c) => (
                <span key={c} className="op-chip op-chip--soft">{c}</span>
              ))}
            </div>
          </div>
          <div>
            <p className="op-section-title">{t.trust.title}</p>
            <div className="op-chips">
              {t.trust.chips.map((c) => (
                <span key={c} className="op-chip">{c}</span>
              ))}
            </div>
          </div>
        </div>

        {/* ── Footer: credibility + pilot CTA (anchored bottom) ── */}
        <div className="mt-auto pt-6">
          <hr style={{ border: 0, borderTop: '1px solid var(--rd-hair)', margin: 0 }} />
          <p className="op-proof">{t.proof}</p>
          <div className="op-pilot mt-3">
            <div>
              <p className="op-pilot-title">{t.pilot.title}</p>
              <p className="op-pilot-body">{t.pilot.body}</p>
            </div>
            <span className="op-cta">{t.pilot.cta}</span>
          </div>
          <p className="op-contact">{t.pilot.contact}</p>
        </div>
      </article>
    </div>
  );
}
