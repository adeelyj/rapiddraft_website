/* /one-pager: a self-contained, print-ready A4 one-pager. Not linked anywhere
   in the site nav. Prints to a single A4 page with 1cm margins and no nav/footer
   (the <style> below scopes the print rules to this route). Uses the site's
   design language (tokens, Inter, Manrope numerics, hairlines, single accent) at
   a compact, document-grade scale.

   Storyline (three movements):
     1. Pitch    — logo + trust badges, hero, the three KPIs, and the engine
                   (hub-and-spoke figure: your stack -> human-in-the-loop -> outputs).
     2. Why/what — problem -> the answer that tackles it (paired comparison).
     3. How + close — "on your infrastructure" steps; trust + compliance and
                   where it fits; a footer with backers, contact, and a QR that
                   books a demo (no button).
   Theme-reactive on screen (light / dark); print always re-pins to a light,
   white-paper A4. */
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
    headingLead: 'Agentic drawing release and ',
    headingMark: 'design review',
    subhead:
      'An on-prem agent runs a tireless first pass over your drawings and reviews, grounded in your rules. The engineer keeps the sign-off.',
    stats: [
      { k: '30%', v: 'Fewer change cycles' },
      { k: '10x', v: 'Faster feedback' },
      { k: '50%', v: 'Less checking time' },
    ],
    ps: {
      problemTitle: 'Today',
      solutionTitle: 'With RapidDraft',
      pairs: [
        { p: 'Design intent lives in CAD, requirements in drawings.', s: 'Reads the model and the drawing together.' },
        { p: 'Review logic is tribal knowledge.', s: 'Applies your rules and preserves the context.' },
        { p: 'Collaboration is inefficient.', s: 'Brings OEM and suppliers into one review.' },
        { p: 'Drawing-review is error-prone.', s: 'Runs a tireless, evidence-linked first pass.' },
        { p: 'Quality inspection is slow and tedious.', s: 'Generates QA documents (BOM, FAIR) from CAD.' },
      ],
    },
    figureCaption:
      'From your engineering stack to an auditable release gate, with human-in-the-loop review at the center.',
    how: {
      title: 'How it works, on your infrastructure',
      sub: 'Your data stays on-site; an engineer approves before anything is written back to your PLM.',
      steps: [
        { k: '01', title: 'Your data, on-prem', body: 'CAD, drawings, BOM, and EPLAN on your NVIDIA DGX Spark.' },
        { k: '02', title: 'Agent runs the first pass', body: 'Checks drawings against your rules. Evidence-linked, not a chatbot.' },
        { k: '03', title: 'Engineer approves', body: 'A traceable second set of eyes. The engineer keeps the sign-off.' },
        { k: '04', title: 'Release to your PLM', body: 'Approved findings are written back to your CIM Database.' },
      ],
    },
    trust: {
      title: 'Built for trust and sovereignty',
      pillars: [
        { k: 'Data Sovereignty', v: 'Models run locally, on-prem.' },
        { k: 'IP Protection', v: 'Trained only on anonymized or approved data.' },
        { k: 'Employee Trust', v: 'Transparent, traceable, reliable workflows.' },
        { k: 'Data Quality', v: 'Consistent part data, drawings, and BOMs.' },
      ],
    },
    fit: {
      title: 'Where it fits',
      items: [
        { k: 'Technical drawing checks', v: 'Catch common drawing errors before they reach production.' },
        { k: 'Quality documents (BOM, FAIR)', v: 'Generated from your CAD data, ready for inspection.' },
        { k: 'DFM reviews', v: 'Surface manufacturing issues before supplier feedback.' },
        { k: 'Supplier / OEM collaboration', v: 'One shared review for QA, design, and suppliers.' },
      ],
    },
    standards: {
      title: 'Standards and compliance',
      items: ['ISO / ASME', 'VDA Band 2, EMPB', 'EU Data Act', 'Full audit trail'],
    },
    pilot: {
      title: 'Launch a pilot with RapidDraft',
      body: 'Start narrow: one product family, one release process, or one recurring review bottleneck.',
      scan: 'Scan to book a demo',
    },
    backedBy: 'Backed by',
    contact: 'info@rapiddraft.ai · rapiddraft.ai · +49 176 8444 3362',
    madePre: 'made with',
    madePost: 'in Munich',
  },
  de: {
    meta: {
      title: 'One-Pager | RapidDraft',
      description:
        'On-Prem-KI für Hardware- und Mechanik-Engineering. Ein unermüdlicher erster Durchgang über Ihre Zeichnungen und Reviews, verankert in Ihren Regeln und nachvollziehbar bis zur Quelle. Die Freigabe bleibt beim Ingenieur.',
    },
    badges: ['On-Prem-KI', 'SSO', 'Lokale / EU-Cloud', 'DSGVO-konform'],
    eyebrow: 'Für Hardware- und Mechanik-Engineering-Teams',
    headingLead: 'Agentenbasierte Zeichnungsfreigabe und ',
    headingMark: 'Design-Review',
    subhead:
      'Ein On-Prem-Agent übernimmt den unermüdlichen ersten Durchgang über Ihre Zeichnungen und Reviews, verankert in Ihren Regeln. Die Freigabe bleibt beim Ingenieur.',
    stats: [
      { k: '30%', v: 'Weniger Änderungszyklen' },
      { k: '10x', v: 'Schnelleres Feedback' },
      { k: '50%', v: 'Weniger Prüfzeit' },
    ],
    ps: {
      problemTitle: 'Heute',
      solutionTitle: 'Mit RapidDraft',
      pairs: [
        { p: 'Designabsicht im CAD, Anforderungen in Zeichnungen.', s: 'Liest Modell und Zeichnung zusammen.' },
        { p: 'Prüflogik ist Erfahrungswissen.', s: 'Wendet Ihre Regeln an und bewahrt den Kontext.' },
        { p: 'Zusammenarbeit ist ineffizient.', s: 'Bringt OEM und Lieferanten in ein Review.' },
        { p: 'Zeichnungsprüfung ist fehleranfällig.', s: 'Ein unermüdlicher, belegbasierter Durchgang.' },
        { p: 'Qualitätsprüfung ist langsam und mühsam.', s: 'Erstellt QA-Dokumente (BOM, FAIR) aus CAD.' },
      ],
    },
    figureCaption:
      'Von Ihrem Engineering-Stack zu einem auditierbaren Release-Gate, mit Human-in-the-Loop-Review im Zentrum.',
    how: {
      title: 'So funktioniert es, auf Ihrer Infrastruktur',
      sub: 'Ihre Daten bleiben im Haus; ein Ingenieur gibt frei, bevor etwas in Ihr PLM zurückgeschrieben wird.',
      steps: [
        { k: '01', title: 'Ihre Daten, On-Prem', body: 'CAD, Zeichnungen, BOM und EPLAN auf Ihrem NVIDIA DGX Spark.' },
        { k: '02', title: 'Agent prüft zuerst', body: 'Prüft Zeichnungen gegen Ihre Regeln. Mit Belegen verknüpft, kein Chatbot.' },
        { k: '03', title: 'Ingenieur gibt frei', body: 'Ein nachvollziehbares zweites Augenpaar. Die Freigabe bleibt beim Ingenieur.' },
        { k: '04', title: 'Freigabe an Ihr PLM', body: 'Freigegebene Befunde werden in Ihre CIM-Datenbank zurückgeschrieben.' },
      ],
    },
    trust: {
      title: 'Für Vertrauen und Souveränität gebaut',
      pillars: [
        { k: 'Datensouveränität', v: 'Modelle laufen lokal, on-prem.' },
        { k: 'IP-Schutz', v: 'Nur mit anonymisierten oder freigegebenen Daten trainiert.' },
        { k: 'Mitarbeitervertrauen', v: 'Transparente, nachvollziehbare, verlässliche Workflows.' },
        { k: 'Datenqualität', v: 'Konsistente Teiledaten, Zeichnungen und BOMs.' },
      ],
    },
    fit: {
      title: 'Wo es passt',
      items: [
        { k: 'Technische Zeichnungsprüfungen', v: 'Häufige Zeichnungsfehler vor der Produktion finden.' },
        { k: 'Qualitätsdokumente (BOM, FAIR)', v: 'Aus Ihren CAD-Daten erstellt, bereit für die Prüfung.' },
        { k: 'DFM-Reviews', v: 'Fertigungsprobleme vor dem Lieferanten-Feedback aufdecken.' },
        { k: 'OEM- / Lieferanten-Zusammenarbeit', v: 'Ein gemeinsames Review für QA, Design und Lieferanten.' },
      ],
    },
    standards: {
      title: 'Standards und Compliance',
      items: ['ISO / ASME', 'VDA Band 2, EMPB', 'EU Data Act', 'Vollständiger Audit-Trail'],
    },
    pilot: {
      title: 'Starten Sie einen Piloten mit RapidDraft',
      body: 'Eng anfangen: eine Produktfamilie, ein Freigabeprozess oder ein wiederkehrender Review-Engpass.',
      scan: 'Zum Buchen scannen',
    },
    backedBy: 'Unterstützt von',
    contact: 'info@rapiddraft.ai · rapiddraft.ai · +49 176 8444 3362',
    madePre: 'mit',
    madePost: 'in München gebaut',
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

/* Section-heading glyphs — one minimal line icon per section, all in the same
   13px / accent-stroke / accent-soft-fill idiom so the headings read as a set. */
function LockGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="op-ico" aria-hidden="true">
      <rect className="op-ico-soft" x="5" y="10.5" width="14" height="9.5" rx="2.4" />
      <path d="M7.5 10.5 V8 a4.5 4.5 0 0 1 9 0 V10.5" />
    </svg>
  );
}

function ShieldGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="op-ico" aria-hidden="true">
      <path className="op-ico-soft" d="M12 3 L19 5.7 V11 C19 16 15.6 18.9 12 20.4 C8.4 18.9 5 16 5 11 V5.7 Z" />
      <path d="M9 11.2 l2.2 2.2 3.8 -4.3" />
    </svg>
  );
}

function TargetGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="op-ico" aria-hidden="true">
      <circle cx="12" cy="12" r="7.4" />
      <circle className="op-ico-soft" cx="12" cy="12" r="3.3" />
      <circle cx="12" cy="12" r="1" style={{ fill: 'var(--rd-accent)', stroke: 'none' }} />
    </svg>
  );
}

function ComplianceGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="op-ico" aria-hidden="true">
      <path className="op-ico-soft" d="M6 5.5 H18 a1.5 1.5 0 0 1 1.5 1.5 V19.5 a1.5 1.5 0 0 1 -1.5 1.5 H6 a1.5 1.5 0 0 1 -1.5 -1.5 V7 a1.5 1.5 0 0 1 1.5 -1.5 Z" />
      <rect x="9" y="3.4" width="6" height="3.4" rx="1" style={{ fill: 'var(--rd-surface)' }} />
      <path d="M8.4 13 l2.3 2.3 4.4 -5" />
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
          width: 210mm; min-height: 297mm; box-sizing: border-box; padding: 10mm 10mm;
          background: #fff; color: var(--rd-fg);
          box-shadow: 0 18px 60px -28px rgba(17,24,39,0.4);
          display: flex; flex-direction: column;
          font-family: var(--rd-sans, 'Inter', sans-serif);
        }

        /* ── Header ──────────────────────────────────────────── */
        .op-badge { display: inline-flex; align-items: center; border: 1px solid var(--rd-hair); border-radius: 999px; padding: 3.5px 10px; font-size: 8.4px; font-weight: 500; color: var(--rd-fg-2); white-space: nowrap; }

        /* ── Hero ────────────────────────────────────────────── */
        .op-eyebrow { display: flex; align-items: center; gap: 7px; font-family: var(--rd-meta); font-size: 8.5px; font-weight: 600; letter-spacing: 1.1px; text-transform: uppercase; color: var(--rd-fg-3); margin: 0; }
        .op-slash { font-family: var(--rd-mono); color: var(--rd-accent); letter-spacing: 0; }
        .op-h1 { font-family: var(--rd-sans, 'Inter'); font-size: 24px; font-weight: 600; letter-spacing: -0.02em; line-height: 1.07; color: var(--rd-head); margin: 6px 0 0; }
        .op-mark { color: var(--rd-head); }
        .op-sub { font-size: 9.7px; line-height: 1.5; color: var(--rd-fg-2); margin: 6px 0 0; max-width: 100%; }

        /* ── Stat band (KPIs) ────────────────────────────────── */
        .op-stats { display: grid; grid-template-columns: repeat(3, 1fr); margin: 8px 0 0; border-top: 1px solid var(--rd-hair); border-bottom: 1px solid var(--rd-hair); }
        .op-stat { padding: 9px 12px; text-align: center; }
        .op-stat + .op-stat { border-left: 1px solid var(--rd-hair); }
        .op-stat-k { font-family: var(--rd-num); font-size: 21px; font-weight: 700; line-height: 1; color: var(--rd-accent); letter-spacing: -0.01em; }
        .op-stat-v { font-size: 8.6px; color: var(--rd-fg-3); margin-top: 3px; letter-spacing: 0.2px; }

        /* ── Section heading ─────────────────────────────────── */
        .op-section-title { font-size: 11.5px; font-weight: 600; letter-spacing: 0; color: var(--rd-head); margin: 0; }
        .op-section-sub { font-size: 8.8px; line-height: 1.45; color: var(--rd-fg-3); margin: 2px 0 0; }
        .op-shead { display: flex; align-items: center; gap: 6px; }
        .op-eyebrow-label { font-family: var(--rd-meta); font-size: 8.4px; font-weight: 600; letter-spacing: 1.1px; text-transform: uppercase; color: var(--rd-fg-3); margin: 0; }

        /* ── Problem -> solution: a de-boxed comparison. No outer box, no tinted
              header, no vertical divider — just two columns, a hairline between
              rows, and one accent arrow per answer. The quiet problem (left)
              resolves into the confident RapidDraft answer (right). ── */
        .op-ps { margin-top: auto; }
        .op-ps-row { display: grid; grid-template-columns: 0.84fr 1.16fr; column-gap: 16px; }
        .op-ps-head { align-items: end; padding-bottom: 5px; border-bottom: 1px solid var(--rd-edge); }
        .op-ps-body { align-items: baseline; padding: 7px 0; }
        .op-ps-body + .op-ps-body { border-top: 1px solid var(--rd-hair); }
        .op-ps-sol { display: flex; gap: 7px; align-items: baseline; }
        .op-ps-ptext { font-size: 9px; line-height: 1.3; color: var(--rd-fg-2); margin: 0; }
        .op-ps-stext { font-size: 9px; line-height: 1.3; color: var(--rd-fg-strong); margin: 0; }
        .op-ps-arrow { color: var(--rd-accent); font-weight: 700; flex-shrink: 0; font-size: 9px; line-height: 1.3; }

        /* ── How it works: horizontal step cards (chevron-linked) ── */
        .op-flow { display: flex; align-items: stretch; gap: 0; margin-top: 8px; }
        .op-step { flex: 1; display: flex; flex-direction: column; border: 1px solid var(--rd-hair); border-radius: 10px; background: var(--rd-surface); padding: 9px 10px; }
        .op-step-k { font-family: var(--rd-num); font-size: 11px; font-weight: 700; color: var(--rd-accent); letter-spacing: 0.4px; }
        .op-step-title { font-size: 9.2px; font-weight: 600; line-height: 1.2; color: var(--rd-fg-strong); margin: 5px 0 0; }
        .op-step-body { font-size: 8.4px; line-height: 1.4; color: var(--rd-fg-2); margin: 4px 0 0; }
        .op-chev { display: flex; align-items: center; padding: 0 6px; color: var(--rd-accent); font-size: 13px; font-weight: 600; opacity: 0.85; }

        /* ── Engine figure (hub-and-spoke) + caption, in the hero ── */
        .op-fig { width: 100%; max-width: 124mm; margin: 10px auto 0; }
        .op-cap { font-size: 8.4px; line-height: 1.4; color: var(--rd-fg-3); text-align: center; margin: 7px auto 0; max-width: 150mm; text-wrap: pretty; }

        /* ── Bottom band: sovereignty pillars + fit / standards ── */
        /* margin-top:auto pairs with the footer's auto margin so the sheet's
           leftover vertical space is split between the gap under the steps and
           the gap above the footer (scales per language) instead of all of it
           piling up above the footer. */
        .op-bottom { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: auto; }
        .op-pillars { display: grid; grid-template-columns: 1fr 1fr; gap: 8px 14px; margin-top: 7px; }
        .op-pillar-k { display: flex; align-items: baseline; gap: 6px; font-size: 9.2px; font-weight: 600; color: var(--rd-fg-strong); }
        .op-pillar-k::before { content: ''; width: 5px; height: 5px; border-radius: 999px; background: var(--rd-accent); flex-shrink: 0; transform: translateY(-1px); }
        .op-pillar-v { font-size: 8.3px; line-height: 1.34; color: var(--rd-fg-2); margin: 1px 0 0 11px; }
        /* Where it fits — single-column labelled list in the pillar idiom. */
        .op-uses { display: flex; flex-direction: column; gap: 9px; margin-top: 7px; }
        .op-fitblock { margin-top: 9px; }
        .op-standards { font-family: var(--rd-meta); font-size: 8.4px; line-height: 1.55; letter-spacing: 0.2px; color: var(--rd-fg-3); margin: 6px 0 0; }

        /* ── Pilot CTA band with QR (no button) ──────────────── */
        .op-pilot { margin-top: auto; display: flex; align-items: center; justify-content: space-between; gap: 18px; border: 1px solid var(--rd-accent-hair); background: var(--rd-accent-soft); border-radius: 13px; padding: 11px 16px; }
        .op-pilot-title { font-size: 12px; font-weight: 600; color: var(--rd-head); margin: 0; }
        .op-pilot-body { font-size: 9.2px; line-height: 1.45; color: var(--rd-fg-2); margin: 3px 0 0; max-width: 130mm; }
        .op-qr { display: flex; align-items: center; gap: 11px; flex-shrink: 0; }
        .op-qr-img { width: 66px; height: 66px; display: block; border-radius: 8px; box-shadow: 0 2px 8px -3px rgba(17,24,39,0.25); }
        .op-qr-label { font-size: 9px; font-weight: 600; line-height: 1.3; color: var(--rd-fg); text-align: right; max-width: 90px; }

        /* ── Trust row: backers + contact ────────────────────── */
        .op-trust { display: flex; align-items: center; justify-content: space-between; gap: 16px; margin-top: auto; }
        .op-backers { display: flex; align-items: center; gap: 13px; }
        .op-backed { font-family: var(--rd-meta); font-size: 7.6px; font-weight: 600; letter-spacing: 0.8px; text-transform: uppercase; color: var(--rd-fg-3); }
        .op-backer { height: 20px; width: auto; filter: grayscale(1); opacity: 0.7; }
        .op-contact { font-family: var(--rd-meta); font-size: 8.2px; letter-spacing: 0.2px; color: var(--rd-fg-3); text-align: right; margin: 0; }
        .op-heart { color: var(--rd-accent); }

        /* ── Theme-reactive logo swap (light mark / white mark) ─ */
        .op-logo { display: block; width: auto; height: 30px; }
        .op-logo--dark { display: none; }
        [data-theme='dark'] .op-logo--light { display: none; }
        [data-theme='dark'] .op-logo--dark { display: block; }
        [data-theme='dark'] .op-backer { filter: grayscale(1) invert(1); opacity: 0.88; }
        .op-ico { width: 13px; height: 13px; stroke: var(--rd-accent); fill: none; stroke-width: 1.6; stroke-linecap: round; stroke-linejoin: round; flex-shrink: 0; }
        .op-ico-soft { fill: var(--rd-accent-soft); }

        /* Dark mode: the sheet becomes a dark document matching the site; a
           hairline defines its edge since the drop shadow is invisible on the
           near-black canvas. (Print re-pins everything back to white paper.) */
        [data-theme='dark'] .op-sheet { background: var(--rd-bg); border: 1px solid var(--rd-hair); }

        @media print {
          @page { size: A4; margin: 0; }
          html, body { background: #fff !important; margin: 0 !important; padding: 0 !important; }
          .rd-app > nav, .rd-app > footer, .rd-app__grid-root { display: none !important; }
          .rd-app > main, .rd-app { overflow: visible !important; }
          /* Clamp the whole document to a single A4 page so nothing can spill to
             a second sheet. */
          html, body { height: auto !important; overflow: hidden !important; }
          .op-screen { background: #fff !important; padding: 0 !important; margin: 0 !important; min-height: 0 !important; height: auto !important; display: block !important; overflow: hidden !important; }
          /* Always print a light, white-paper A4, even when the app is in dark
             mode: re-pin every --rd-* token on the sheet to its light value so
             all token-driven descendants render as dark ink on white. The sheet
             is 296mm (a hair under A4's 297mm): with @page margin:0, content that
             is exactly the page height makes Chrome emit a blank trailing page,
             so the 1mm of slack keeps it to exactly one page. overflow:hidden
             clips any sub-pixel sliver. */
          .op-sheet {
            --rd-bg: #f5f5f5; --rd-surface: #ffffff; --rd-raised: #ffffff; --rd-sunken: #ececec; --rd-inverse: #0d0d0d;
            --rd-fg-strong: #000000; --rd-head: #1f1f1f; --rd-fg: #1a1a1a; --rd-fg-2: #4a4a4a; --rd-fg-3: #5f5f5f; --rd-muted: #a0a0a0;
            --rd-hair: #e0e0e0; --rd-edge: #c8c8c8;
            --rd-accent: #ea580c; --rd-accent-press: #c2410c; --rd-accent-soft: rgba(234,88,12,0.10); --rd-accent-hair: rgba(234,88,12,0.32);
            background: #ffffff !important; border: 0 !important; box-shadow: none !important;
            width: 210mm !important; height: 296mm !important; min-height: 0 !important; overflow: hidden !important;
            break-after: avoid-page; page-break-after: avoid;
          }
          .op-sheet, .op-sheet * { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          .op-logo--light { display: block !important; }
          .op-logo--dark { display: none !important; }
          [data-theme='dark'] .op-backer, .op-backer { filter: grayscale(1) !important; opacity: 0.7 !important; }
          .op-qr-img { box-shadow: none !important; }
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
          <div className="mt-3">
            <Eyebrow>{t.eyebrow}</Eyebrow>
            <h1 className="op-h1">
              {t.headingLead}
              <span className="op-mark">{t.headingMark}</span>
            </h1>
            <p className="op-sub">{t.subhead}</p>
          </div>

          {/* KPIs */}
          <div className="op-stats">
            {t.stats.map((s) => (
              <div key={s.k} className="op-stat">
                <div className="op-stat-k">{s.k}</div>
                <div className="op-stat-v">{s.v}</div>
              </div>
            ))}
          </div>

          {/* The engine (hub-and-spoke), in the hero below the KPIs */}
          <div className="op-fig">
            <HubAndSpokeFigure inputs={HS_INPUTS} outputs={HS_OUTPUTS} alt={HS_ALT} />
          </div>
          <p className="op-cap">{t.figureCaption}</p>
        </header>

        {/* ── Problem  ->  the answer that tackles it (de-boxed rows) ── */}
        <div className="op-ps">
          <div className="op-ps-row op-ps-head">
            <p className="op-eyebrow-label">{t.ps.problemTitle}</p>
            <p className="op-eyebrow-label">{t.ps.solutionTitle}</p>
          </div>
          {t.ps.pairs.map((pair) => (
            <div key={pair.p} className="op-ps-row op-ps-body">
              <p className="op-ps-ptext">{pair.p}</p>
              <div className="op-ps-sol">
                <span className="op-ps-arrow" aria-hidden="true">→</span>
                <p className="op-ps-stext">{pair.s}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── How it works, on your infrastructure (horizontal flow) ── */}
        <div className="mt-auto">
          <div className="op-shead">
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

        {/* ── Where it fits (left)  |  trust + compliance (right) ── */}
        <div className="op-bottom">
          <div>
            <div className="op-shead">
              <TargetGlyph />
              <p className="op-section-title">{t.fit.title}</p>
            </div>
            <div className="op-uses">
              {t.fit.items.map((u) => (
                <div key={u.k}>
                  <p className="op-pillar-k">{u.k}</p>
                  <p className="op-pillar-v">{u.v}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="op-shead">
              <ShieldGlyph />
              <p className="op-section-title">{t.trust.title}</p>
            </div>
            <div className="op-pillars">
              {t.trust.pillars.map((p) => (
                <div key={p.k}>
                  <p className="op-pillar-k">{p.k}</p>
                  <p className="op-pillar-v">{p.v}</p>
                </div>
              ))}
            </div>
            <div className="op-fitblock">
              <div className="op-shead">
                <ComplianceGlyph />
                <p className="op-section-title">{t.standards.title}</p>
              </div>
              <p className="op-standards">{t.standards.items.join('   ·   ')}</p>
            </div>
          </div>
        </div>

        {/* ── Pilot CTA + QR — a section with the same even gap as the rest ── */}
        <div className="op-pilot">
          <div>
            <p className="op-pilot-title">{t.pilot.title}</p>
            <p className="op-pilot-body">{t.pilot.body}</p>
          </div>
          <div className="op-qr">
            <p className="op-qr-label">{t.pilot.scan}</p>
            <img src="/media/qr-book-demo.svg" alt="QR code to book a demo at rapiddraft.ai/book-demo" className="op-qr-img" />
          </div>
        </div>

        {/* ── Backers + contact ── */}
        <div className="op-trust">
          <div className="op-backers">
            <span className="op-backed">{t.backedBy}</span>
            <img src="/media/ecosystem/unternehmertum-logo.svg" alt="UnternehmerTUM" className="op-backer" />
            <img src="/media/ecosystem/xplore-logo.svg" alt="XPLORE" className="op-backer" />
          </div>
          <p className="op-contact">{t.contact} · {t.madePre} <span className="op-heart">♥</span> {t.madePost}</p>
        </div>
      </article>
    </div>
  );
}
