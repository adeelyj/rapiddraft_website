/* /one-pager: a self-contained, print-ready A4 one-pager. Not linked anywhere
   in the site nav. Designed to print to a single A4 page with ~1cm margins and
   no nav/footer (the <style> below scopes the print rules to this route). Uses
   the site's design language (tokens, Inter, hairlines, single accent) at a
   compact, document-grade scale, and reuses the engineering-stack figure. */
import { useLang } from '../i18n/LanguageContext';
import PageMeta from '../components/PageMeta';
import BrandMark from '../components/BrandMark';
import EngineeringStackFigure from '../components/diagrams/EngineeringStackFigure';

const CONTENT = {
  en: {
    meta: {
      title: 'One-pager | RapidDraft',
      description: 'Agentic drawing release and design review for engineering teams. On-prem, human-in-the-loop, grounded in your own rules.',
    },
    badges: ['On-prem AI', 'SSO', 'Local / EU Cloud', 'GDPR-compliant'],
    eyebrow: 'For hardware and mechanical engineering teams',
    headline: 'Agentic drawing release and design review',
    subhead:
      'RapidDraft catches design and drawing issues earlier, automates repetitive review, and keeps decision context on the model, across CAD, manufacturing drawings, and release workflows. On-prem, grounded in your own rules.',
    problem: {
      title: 'Where release slows down',
      lines: [
        'Design intent lives in CAD. Requirements live in drawings. Review logic is tribal knowledge.',
        'Collaboration is inefficient, drawing review is error-prone, and quality inspection is slow.',
      ],
    },
    helps: {
      title: 'RapidDraft helps you',
      items: [
        { title: 'Analyze manufacturing drawings', body: 'Find missing, inconsistent, or review-critical information before release.' },
        { title: 'Accelerate design reviews', body: 'Apply engineering, manufacturing, and your company-specific logic.' },
        { title: 'Remove team silos', body: 'Bring teams together in a shared CAD review environment.' },
        { title: 'Preserve company knowledge', body: 'Keep comments, findings, and manufacturing feedback on the model.' },
      ],
    },
    useCases: {
      title: 'Typical use cases',
      items: [
        { title: 'Technical drawing checks', body: 'Catch common drawing errors before they reach production.' },
        { title: 'Quality inspection documents', body: 'Build the BOM and first-article inspection report from CAD data.' },
        { title: 'Design-for-manufacturing reviews', body: 'Surface manufacturing issues before supplier feedback.' },
        { title: 'Supplier / OEM CAD collaboration', body: 'Let QA, design, and suppliers collaborate in one place.' },
      ],
    },
    sovereignty: {
      title: 'AI with data sovereignty, your data stays in-house',
      items: [
        { title: 'Data sovereignty', body: 'Models run locally, on-prem.' },
        { title: 'IP protection', body: 'Training only on anonymized or approved data.' },
        { title: 'Employee trust', body: 'Transparent, traceable, human-in-the-loop workflows.' },
        { title: 'Data quality', body: 'One clean source across part data, drawings, and BOMs.' },
      ],
    },
    pilot: {
      title: 'Launch a pilot with RapidDraft',
      body: 'Start narrow: one product family, one drawing-release process, or one recurring review bottleneck.',
      points: [
        { k: '~30% ROI', v: 'from better design-review workflows' },
        { k: 'Scalable local AI', v: 'deployed on-prem and built to scale' },
      ],
      cta: 'Book a demo',
      contact: 'rapiddraft.ai · info@rapiddraft.ai · Munich, Germany',
    },
  },
  de: {
    meta: {
      title: 'One-Pager | RapidDraft',
      description: 'Agentische Zeichnungsfreigabe und Design-Review für Engineering-Teams. On-Prem, Human-in-the-Loop, verankert in Ihren eigenen Regeln.',
    },
    badges: ['On-Prem-KI', 'SSO', 'Lokale / EU-Cloud', 'DSGVO-konform'],
    eyebrow: 'Für Hardware- und Mechanik-Engineering-Teams',
    headline: 'Agentische Zeichnungsfreigabe und Design-Review',
    subhead:
      'RapidDraft erkennt Zeichnungs- und Designprobleme früher, automatisiert wiederkehrende Prüfung und hält den Entscheidungskontext am Modell, über CAD, Fertigungszeichnungen und Freigabe-Workflows hinweg. On-Prem, verankert in Ihren eigenen Regeln.',
    problem: {
      title: 'Wo die Freigabe ins Stocken gerät',
      lines: [
        'Designabsicht steckt im CAD. Anforderungen in Zeichnungen. Prüflogik ist Erfahrungswissen.',
        'Zusammenarbeit ist ineffizient, Zeichnungsprüfung fehleranfällig, Qualitätsprüfung langsam.',
      ],
    },
    helps: {
      title: 'RapidDraft hilft Ihnen',
      items: [
        { title: 'Fertigungszeichnungen analysieren', body: 'Fehlende, inkonsistente oder prüfkritische Angaben vor der Freigabe finden.' },
        { title: 'Design-Reviews beschleunigen', body: 'Konstruktions-, Fertigungs- und unternehmenseigene Logik anwenden.' },
        { title: 'Silos auflösen', body: 'Teams in einer gemeinsamen CAD-Review-Umgebung zusammenbringen.' },
        { title: 'Unternehmenswissen bewahren', body: 'Kommentare, Befunde und Fertigungsfeedback am Modell halten.' },
      ],
    },
    useCases: {
      title: 'Typische Anwendungsfälle',
      items: [
        { title: 'Technische Zeichnungsprüfungen', body: 'Häufige Zeichnungsfehler abfangen, bevor sie in die Produktion gelangen.' },
        { title: 'Qualitätsdokumente', body: 'BOM und Erstmusterprüfbericht aus CAD-Daten erstellen.' },
        { title: 'Design-for-Manufacturing-Reviews', body: 'Fertigungsprobleme vor dem Lieferantenfeedback sichtbar machen.' },
        { title: 'Lieferanten- / OEM-CAD-Zusammenarbeit', body: 'QA, Konstruktion und Lieferanten an einem Ort zusammenarbeiten lassen.' },
      ],
    },
    sovereignty: {
      title: 'KI mit Datensouveränität, Ihre Daten bleiben im Haus',
      items: [
        { title: 'Datensouveränität', body: 'Modelle laufen lokal, On-Prem.' },
        { title: 'IP-Schutz', body: 'Training nur auf anonymisierten oder freigegebenen Daten.' },
        { title: 'Vertrauen der Mitarbeitenden', body: 'Transparente, nachvollziehbare, Human-in-the-Loop-Workflows.' },
        { title: 'Datenqualität', body: 'Eine saubere Quelle über Teiledaten, Zeichnungen und BOMs.' },
      ],
    },
    pilot: {
      title: 'Starten Sie einen Piloten mit RapidDraft',
      body: 'Eng anfangen: eine Produktfamilie, ein Zeichnungs-Freigabeprozess oder ein wiederkehrender Review-Engpass.',
      points: [
        { k: '~30% ROI', v: 'durch bessere Design-Review-Workflows' },
        { k: 'Skalierbare lokale KI', v: 'On-Prem bereitgestellt und auf Skalierung ausgelegt' },
      ],
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

function ItemRow({ title, body, num }: { title: string; body: string; num?: number }) {
  return (
    <div className="op-item">
      {num != null && <span className="op-num">{String(num).padStart(2, '0')}</span>}
      <p className="op-item-title">{title}</p>
      <p className="op-item-body">{body}</p>
    </div>
  );
}

export default function OnePager() {
  const { lang } = useLang();
  const t = CONTENT[lang];

  return (
    <div className="rd2 op-screen">
      <PageMeta title={t.meta.title} description={t.meta.description} path="/one-pager" />
      <style>{`
        .op-screen { display: flex; justify-content: center; background: #e7e7ea; padding: 28px 16px; }
        .op-sheet {
          width: 210mm; min-height: 297mm; box-sizing: border-box; padding: 10mm 11mm;
          background: #fff; color: var(--rd-fg);
          box-shadow: 0 18px 60px -28px rgba(17,24,39,0.4);
          display: flex; flex-direction: column;
          font-family: var(--rd-text, 'Inter', sans-serif);
        }
        .op-eyebrow { display: flex; align-items: center; gap: 7px; font-family: var(--rd-meta); font-size: 8.5px; font-weight: 600; letter-spacing: 1.4px; text-transform: uppercase; color: var(--rd-fg-3); margin: 0; }
        .op-slash { font-family: var(--rd-mono); color: var(--rd-accent); letter-spacing: 0; }
        .op-h1 { font-family: var(--rd-text, 'Inter'); font-size: 27px; font-weight: 600; letter-spacing: -0.02em; line-height: 1.06; color: var(--rd-head); margin: 7px 0 0; }
        .op-sub { font-size: 10.5px; line-height: 1.5; color: var(--rd-fg-2); margin: 7px 0 0; max-width: 165mm; }
        .op-badge { display: inline-flex; align-items: center; border: 1px solid var(--rd-hair); border-radius: 999px; padding: 3px 9px; font-size: 8.5px; font-weight: 500; color: var(--rd-fg-2); white-space: nowrap; }
        .op-rule { border: 0; border-top: 1px solid var(--rd-hair); margin: 0; }
        .op-section-title { font-size: 11.5px; font-weight: 600; letter-spacing: -0.01em; color: var(--rd-head); margin: 0 0 6px; }
        .op-grid4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; }
        .op-item { border: 1px solid var(--rd-hair); border-radius: 9px; background: var(--rd-surface); padding: 8px 9px; }
        .op-num { display: block; font-family: var(--rd-num); font-size: 11px; font-weight: 600; color: var(--rd-accent); margin-bottom: 2px; }
        .op-item-title { font-size: 9.6px; font-weight: 600; line-height: 1.2; color: var(--rd-fg-strong); margin: 0; }
        .op-item-body { font-size: 8.7px; line-height: 1.32; color: var(--rd-fg-2); margin: 3px 0 0; }
        .op-problem { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
        .op-problem p { font-size: 10px; line-height: 1.4; color: var(--rd-fg); margin: 0; }
        .op-pilot { display: flex; align-items: center; justify-content: space-between; gap: 16px; border: 1px solid var(--rd-accent-hair); background: var(--rd-accent-soft); border-radius: 12px; padding: 11px 14px; }
        .op-pilot-k { font-family: var(--rd-num); font-size: 14px; font-weight: 700; color: var(--rd-accent); line-height: 1; }
        .op-pilot-v { font-size: 8.6px; color: var(--rd-fg-2); margin-top: 2px; }
        .op-cta { display: inline-flex; align-items: center; border-radius: 999px; background: var(--rd-accent); color: #fff; font-size: 10px; font-weight: 600; padding: 7px 16px; white-space: nowrap; }
        .op-contact { font-family: var(--rd-meta); font-size: 8px; letter-spacing: 0.3px; color: var(--rd-fg-3); text-align: center; margin: 0; }

        @media print {
          @page { size: A4; margin: 0; }
          html, body { background: #fff !important; margin: 0 !important; padding: 0 !important; }
          .rd-app > nav, .rd-app > footer, .rd-app__grid-root { display: none !important; }
          .rd-app > main, .rd-app { overflow: visible !important; }
          .op-screen { background: #fff !important; padding: 0 !important; min-height: 0 !important; display: block !important; }
          /* Pin the sheet to exactly one A4 page. Measured content is ~282mm
             (15mm under A4), so overflow:hidden never clips real content, it
             only guards against a sub-pixel rounding sliver tipping to page 2. */
          .op-sheet { box-shadow: none !important; width: 210mm !important; height: 297mm !important; min-height: 0 !important; overflow: hidden !important; }
          .op-cta, .op-badge { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          .op-pilot, .op-num, .op-slash, .op-pilot-k { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
        }
      `}</style>

      <article className="op-sheet">
        {/* ── Header ─────────────────────────────────────── */}
        <header>
          <div className="flex items-start justify-between gap-4">
            <BrandMark theme="light" size="md" />
            <div className="flex flex-wrap justify-end gap-1.5">
              {t.badges.map((b) => (
                <span key={b} className="op-badge">{b}</span>
              ))}
            </div>
          </div>
          <div className="mt-4">
            <Eyebrow>{t.eyebrow}</Eyebrow>
            <h1 className="op-h1">{t.headline}</h1>
            <p className="op-sub">{t.subhead}</p>
          </div>
        </header>

        {/* ── Figure ─────────────────────────────────────── */}
        <div className="mx-auto mt-4 w-full" style={{ maxWidth: '166mm' }}>
          <EngineeringStackFigure />
        </div>

        <hr className="op-rule" style={{ margin: '22px 0 11px' }} />

        {/* ── Problem ────────────────────────────────────── */}
        <p className="op-section-title">{t.problem.title}</p>
        <div className="op-problem">
          {t.problem.lines.map((l) => (
            <p key={l}>{l}</p>
          ))}
        </div>

        <hr className="op-rule" style={{ margin: '11px 0' }} />

        {/* ── RapidDraft helps you ───────────────────────── */}
        <p className="op-section-title">{t.helps.title}</p>
        <div className="op-grid4">
          {t.helps.items.map((it) => (
            <ItemRow key={it.title} title={it.title} body={it.body} />
          ))}
        </div>

        {/* ── Use cases ──────────────────────────────────── */}
        <p className="op-section-title" style={{ marginTop: '11px' }}>{t.useCases.title}</p>
        <div className="op-grid4">
          {t.useCases.items.map((it, i) => (
            <ItemRow key={it.title} title={it.title} body={it.body} num={i + 1} />
          ))}
        </div>

        {/* ── Data sovereignty ───────────────────────────── */}
        <p className="op-section-title" style={{ marginTop: '11px' }}>{t.sovereignty.title}</p>
        <div className="op-grid4">
          {t.sovereignty.items.map((it) => (
            <ItemRow key={it.title} title={it.title} body={it.body} />
          ))}
        </div>

        {/* ── Pilot (pinned to the bottom) ───────────────── */}
        <div className="mt-auto pt-3">
          <div className="op-pilot">
            <div>
              <p className="op-section-title" style={{ margin: 0 }}>{t.pilot.title}</p>
              <p className="op-sub" style={{ margin: '3px 0 0', fontSize: '9px' }}>{t.pilot.body}</p>
            </div>
            <div className="flex items-center gap-5">
              {t.pilot.points.map((p) => (
                <div key={p.k} className="text-right">
                  <div className="op-pilot-k">{p.k}</div>
                  <div className="op-pilot-v">{p.v}</div>
                </div>
              ))}
              <span className="op-cta">{t.pilot.cta}</span>
            </div>
          </div>
          <p className="op-contact" style={{ marginTop: '7px' }}>{t.pilot.contact}</p>
        </div>
      </article>
    </div>
  );
}
