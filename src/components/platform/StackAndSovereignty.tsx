/* "Works with your stack, keeps your data secure" — a composite section adapted
   from the existing rapiddraft.ai figure, rebuilt in the v2 design language:
   two hairline cards (engineering stack + data sovereignty) bridged by a dark
   review-layer bar, with four guarantee tiles beneath. Light/dark themeable via
   --rd-* tokens. Bilingual. Used on the Platform page. */
import { Section, Eyebrow, H2, H3, Intro, Body, Button, Tag } from '../ui/primitives';
import { useLang } from '../../i18n/LanguageContext';

const CONTENT = {
  en: {
    eyebrow: 'Data sovereignty, built in',
    heading: 'Works with your stack, keeps your data secure',
    intro:
      'RapidDraft brings AI-assisted review into your existing CAD, drawing, BOM, and PLM workflows. Models run on your infrastructure, your IP never leaves the building, and we do not train on it.',
    stack: {
      title: 'Works with your engineering stack',
      body: 'Connect review context from CAD models, manufacturing drawings, BOMs, PLM/PDM records, and internal review rules.',
      tags: ['Siemens NX', 'SolidWorks', 'CATIA', 'EPLAN', 'PLM / PDM', 'Drawings', 'BOMs'],
    },
    sovereignty: {
      title: 'Designed for data sovereignty',
      body: 'Keep sensitive engineering data inside approved environments, with scoped access, controlled AI workflows, and engineer-reviewed outputs.',
      tags: ['GDPR-Compliant', 'On-prem AI', 'Local/EU Cloud', 'SSO', 'IP protection', 'Human-in-the-loop'],
    },
    bar: {
      title: 'RapidDraft review',
      steps: ['Analyze drawings', 'apply rules', 'surface issues', 'capture decisions'],
    },
    guarantees: [
      { title: 'No tool replacement', body: 'Works around your current CAD, PDM, PLM, and release process.' },
      { title: 'No uncontrolled data movement', body: 'Sensitive files stay within approved environments and access boundaries.' },
      { title: 'Engineer-controlled AI', body: 'Findings stay reviewable, explainable, and tied to human approval.' },
      { title: 'Cleaner release data', body: 'Reduce inconsistencies across drawings, BOMs, part data, and review records.' },
    ],
    cta: 'How we keep your data secure',
  },
  de: {
    eyebrow: 'Datensouveränität, von Anfang an',
    heading: 'Arbeitet mit Ihrem Stack, schützt Ihre Daten',
    intro:
      'RapidDraft bringt KI-gestützte Prüfung in Ihre bestehenden CAD-, Zeichnungs-, BOM- und PLM-Workflows. Die Modelle laufen auf Ihrer Infrastruktur, Ihr IP verlässt das Haus nicht, und wir trainieren nicht darauf.',
    stack: {
      title: 'Arbeitet mit Ihrem Engineering-Stack',
      body: 'Verbindet Review-Kontext aus CAD-Modellen, Fertigungszeichnungen, Stücklisten, PLM/PDM-Daten und internen Prüfregeln.',
      tags: ['Siemens NX', 'SolidWorks', 'CATIA', 'EPLAN', 'PLM / PDM', 'Zeichnungen', 'BOMs'],
    },
    sovereignty: {
      title: 'Für Datensouveränität konzipiert',
      body: 'Hält sensible Konstruktionsdaten in freigegebenen Umgebungen, mit eingeschränktem Zugriff, kontrollierten KI-Workflows und von Ingenieuren geprüften Ergebnissen.',
      tags: ['DSGVO-konform', 'On-Prem-KI', 'Lokale/EU-Cloud', 'SSO', 'IP-Schutz', 'Human-in-the-Loop'],
    },
    bar: {
      title: 'RapidDraft Review',
      steps: ['Zeichnungen analysieren', 'Regeln anwenden', 'Probleme aufdecken', 'Entscheidungen festhalten'],
    },
    guarantees: [
      { title: 'Kein Werkzeugwechsel', body: 'Arbeitet mit Ihrem heutigen CAD, PDM, PLM und Freigabeprozess.' },
      { title: 'Keine unkontrollierte Datenbewegung', body: 'Sensible Dateien bleiben in freigegebenen Umgebungen und Zugriffsgrenzen.' },
      { title: 'Von Ingenieuren gesteuerte KI', body: 'Befunde bleiben prüfbar, erklärbar und an menschliche Freigabe gebunden.' },
      { title: 'Sauberere Freigabedaten', body: 'Weniger Inkonsistenzen über Zeichnungen, Stücklisten, Teiledaten und Review-Daten.' },
    ],
    cta: 'Wie wir Ihre Daten schützen',
  },
} as const;

/* Small accent top-marker used on each card (the orange bar in the reference). */
function CardMark() {
  return (
    <span
      aria-hidden="true"
      className="block h-[5px] w-10 rounded-full"
      style={{ background: 'var(--rd-accent)' }}
    />
  );
}

function CheckIcon() {
  return (
    <span
      aria-hidden="true"
      className="flex h-7 w-7 flex-none items-center justify-center rounded-[9px]"
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
  );
}

export default function StackAndSovereignty() {
  const { lang } = useLang();
  const t = CONTENT[lang];

  return (
    <Section>
      {/* Header */}
      <div className="mx-auto max-w-[860px] text-center">
        <Eyebrow className="mb-5">{t.eyebrow}</Eyebrow>
        <H2>{t.heading}</H2>
        <Intro className="mx-auto mt-5 max-w-[760px]">{t.intro}</Intro>
      </div>

      <div className="mx-auto mt-10 w-full max-w-[1120px]">
        {/* Two cards */}
        <div className="grid gap-4 lg:grid-cols-2">
          {/* Engineering stack */}
          <div className="rd-lift rounded-[16px] border border-[var(--rd-hair)] bg-[var(--rd-surface)] p-7 text-left sm:p-8">
            <CardMark />
            <H3 className="mt-6">{t.stack.title}</H3>
            <Body soft sm className="mt-3">
              {t.stack.body}
            </Body>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {t.stack.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </div>

          {/* Data sovereignty (faint accent treatment) */}
          <div
            className="rd-lift relative overflow-hidden rounded-[16px] border p-7 text-left sm:p-8"
            style={{ borderColor: 'var(--rd-accent-hair)', background: 'var(--rd-surface)' }}
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{ background: 'radial-gradient(120% 90% at 100% 0%, var(--rd-accent-soft), transparent 60%)' }}
            />
            <div className="relative">
              <CardMark />
              <H3 className="mt-6">{t.sovereignty.title}</H3>
              <Body soft sm className="mt-3">
                {t.sovereignty.body}
              </Body>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {t.sovereignty.tags.map((tag, i) => (
                  <Tag key={tag} accent={i === 0}>
                    {tag}
                  </Tag>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Dark review-layer bar (stays dark in both themes) */}
        <div className="rd-dark mt-4 flex flex-col items-start gap-2.5 rounded-[16px] border border-[var(--rd-accent-hair)] bg-[var(--rd-bg)] px-7 py-6 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-9">
          <div className="text-[19px] font-medium tracking-[-0.005em] text-[var(--rd-head)]">
            {t.bar.title}
          </div>
          <div
            className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[14.5px] text-[var(--rd-fg-2)]"
            style={{ fontFamily: 'var(--rd-meta)' }}
          >
            {t.bar.steps.map((step, i) => (
              <span key={step} className="inline-flex items-center gap-2">
                {i > 0 && <span className="text-[var(--rd-muted)]">·</span>}
                {step}
              </span>
            ))}
          </div>
        </div>

        {/* Four guarantee tiles */}
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.guarantees.map((g) => (
            <div
              key={g.title}
              className="rd-lift rounded-[16px] border border-[var(--rd-hair)] bg-[var(--rd-surface)] p-6 text-left"
            >
              <CheckIcon />
              <H3 className="mt-4 text-[17px]">{g.title}</H3>
              <Body soft sm className="mt-2.5">
                {g.body}
              </Body>
            </div>
          ))}
        </div>
      </div>

      {/* Bridge to Security */}
      <div className="mt-9 flex justify-center">
        <Button to="/security" variant="secondary" arrow>
          {t.cta}
        </Button>
      </div>
    </Section>
  );
}
