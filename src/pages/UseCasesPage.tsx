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
      title: 'Use cases | RapidDraft',
      description:
        'From new product introduction to supplier drawing packages, RapidDraft is strongest where drawings, reviews, and manufacturability checks still create expensive loops.',
    },
    hero: {
      eyebrow: 'Use cases',
      heading: 'Where RapidDraft fits in real release workflows',
      subhead:
        'From new product introduction to supplier drawing packages, RapidDraft is strongest where drawings, reviews, and manufacturability checks still create expensive loops.',
      overviewItems: [
        'Drawings stay aligned with evolving CAD geometry',
        'Manufacturability review starts before release friction compounds',
        'Supplier-facing documentation leaves with fewer gaps',
      ],
      ctaPrimary: 'Book a demo',
      ctaSecondary: 'See workflow examples',
    },
    lead: {
      title: 'Built for drawing-heavy release work, not abstract CAD demos',
      intro:
        'RapidDraft adds structure where review logic, manufacturability questions, and drawing updates are still handled manually across release-critical workflows.',
    },
    workflows: [
      {
        title: 'New product development',
        body: 'When 3D geometry moves faster than documentation, drawing release becomes the hidden bottleneck. RapidDraft keeps design, review, and drawing updates moving in the same direction.',
        bullets: [
          'Generate drawing updates continuously as geometry evolves.',
          'Screen early manufacturability questions before formal release reviews.',
          'Give program leads a clearer view of what is ready and what still needs attention.',
        ],
        tags: ['Drawing-led release', 'Early DFM review', 'Design intent preserved'],
      },
      {
        title: 'Battery packs and structural components',
        body: 'High-complexity parts carry tighter tolerances, more manufacturing sensitivity, and less room for avoidable review drift.',
        bullets: [
          'Highlight manufacturing-sensitive features while the model is still active.',
          'Keep GD&T, geometry checks, and drawing completeness in one review flow.',
          'Reduce rework on components where late surprises are expensive.',
        ],
        tags: ['High-complexity parts', 'Tolerance-heavy review', 'Release discipline'],
      },
      {
        title: 'Supplier drawing packages',
        body: 'Supplier packages are strongest when drawings, release notes, QA documents, and review decisions leave together. RapidDraft helps teams send cleaner packages with fewer clarification loops.',
        bullets: [
          'Generate inspection-ready documents (BOM, first-article) and check for missing release information before the package leaves engineering.',
          'Standardize drawing outputs and review expectations across suppliers.',
          'Reduce back-and-forth on manufacturability, quality, and missing detail.',
        ],
        tags: ['Supplier handoff', 'Inspection-ready documents', 'Fewer feedback loops'],
      },
      {
        title: 'Change-driven updates (ECR / ECO)',
        body: 'Geometry changes often trigger drawing churn long after the design decision is made.',
        bullets: [
          'See which views, dimensions, and notes need attention after a change.',
          'Avoid restarting drawing work from zero after each revision.',
          'Keep the release path tighter when engineering change is already in motion.',
        ],
        tags: ['Revision-driven workflows', 'Update validation', 'Faster sign-off'],
      },
      {
        title: 'Legacy drawing cleanup',
        body: 'Old archives carry outdated tolerances, missing standards context, and inconsistent release practices.',
        bullets: [
          'Surface missing GD&T, outdated notes, and standards inconsistencies.',
          'Prioritize cleanup where release or manufacturing confusion is highest.',
          'Support migration toward cleaner drawing standards across older programs.',
        ],
        tags: ['Archive modernization', 'Standards cleanup', 'Manufacturing clarity'],
      },
    ],
    closing: {
      heading: 'Bring a real workflow into the conversation',
      intro:
        'If one of these looks familiar, we can start there and show where RapidDraft fits into your current review and drawing-release path.',
      ctaPrimary: 'Book a demo',
      ctaSecondary: 'Platform',
    },
  },
  de: {
    meta: {
      title: 'Anwendungsfälle | RapidDraft',
      description:
        'Von der Neuprodukteinführung bis zu Zeichnungspaketen für Lieferanten ist RapidDraft dort am stärksten, wo Zeichnungen, Prüfungen und Fertigbarkeitschecks noch teure Schleifen verursachen.',
    },
    hero: {
      eyebrow: 'Anwendungsfälle',
      heading: 'Wo RapidDraft in echte Freigabe-Workflows passt',
      subhead:
        'Von der Neuprodukteinführung bis zu Zeichnungspaketen für Lieferanten ist RapidDraft dort am stärksten, wo Zeichnungen und Fertigbarkeitschecks noch teure Schleifen verursachen.',
      overviewItems: [
        'Zeichnungen bleiben mit sich entwickelnder CAD-Geometrie abgestimmt',
        'Die Fertigbarkeitsprüfung beginnt, bevor sich Freigabe-Reibung aufschaukelt',
        'Lieferantendokumentation verlässt das Haus mit weniger Lücken',
      ],
      ctaPrimary: 'Demo buchen',
      ctaSecondary: 'Workflow-Beispiele ansehen',
    },
    lead: {
      title: 'Gebaut für zeichnungsintensive Freigabearbeit, nicht für abstrakte CAD-Demos',
      intro:
        'RapidDraft bringt Struktur dorthin, wo Prüflogik, Fertigbarkeitsfragen und Zeichnungsaktualisierungen über freigabekritische Workflows hinweg noch manuell erledigt werden.',
    },
    workflows: [
      {
        title: 'Neuproduktentwicklung',
        body: 'Wenn sich die 3D-Geometrie schneller bewegt als die Dokumentation, wird die Zeichnungsfreigabe zum versteckten Engpass. RapidDraft hält Design, Prüfung und Zeichnungsaktualisierungen in derselben Richtung.',
        bullets: [
          'Zeichnungsaktualisierungen laufend erzeugen, während sich die Geometrie weiterentwickelt.',
          'Frühe Fertigbarkeitsfragen vor formalen Freigabeprüfungen abklären.',
          'Programmleitern einen klareren Blick darauf geben, was bereit ist und was noch Aufmerksamkeit braucht.',
        ],
        tags: ['Zeichnungsgeführte Freigabe', 'Frühe DFM-Prüfung', 'Designintention bewahrt'],
      },
      {
        title: 'Batteriepacks und Strukturbauteile',
        body: 'Hochkomplexe Teile bringen engere Toleranzen, mehr Fertigungsempfindlichkeit und weniger Spielraum für vermeidbare Prüf-Abweichungen mit sich.',
        bullets: [
          'Fertigungsempfindliche Merkmale hervorheben, solange das Modell noch aktiv ist.',
          'GD&T, Geometrieprüfungen und Zeichnungsvollständigkeit in einem Prüfablauf vereinen.',
          'Nacharbeit an Bauteilen reduzieren, bei denen späte Überraschungen teuer sind.',
        ],
        tags: ['Hochkomplexe Teile', 'Toleranzintensive Prüfung', 'Freigabedisziplin'],
      },
      {
        title: 'Zeichnungspakete für Lieferanten',
        body: 'Lieferantenpakete sind am stärksten, wenn Zeichnungen, Freigabevermerke, QA-Dokumente und Prüfentscheidungen gemeinsam herausgehen. RapidDraft hilft Teams, sauberere Pakete mit weniger Rückfrageschleifen zu versenden.',
        bullets: [
          'Prüfbereite Dokumente (BOM, Erstmuster) erzeugen und auf fehlende Freigabeinformationen prüfen, bevor das Paket die Konstruktion verlässt.',
          'Zeichnungsausgaben und Prüferwartungen über Lieferanten hinweg standardisieren.',
          'Hin und Her zu Fertigbarkeit, Qualität und fehlenden Details reduzieren.',
        ],
        tags: ['Lieferantenübergabe', 'Prüfbereite Dokumente', 'Weniger Feedback-Schleifen'],
      },
      {
        title: 'Änderungsgetriebene Aktualisierungen (ECR / ECO)',
        body: 'Geometrieänderungen lösen oft lange nach der Designentscheidung noch Zeichnungsaufwand aus.',
        bullets: [
          'Erkennen, welche Ansichten, Maße und Hinweise nach einer Änderung Aufmerksamkeit brauchen.',
          'Vermeiden, die Zeichnungsarbeit nach jeder Revision bei null zu beginnen.',
          'Den Freigabepfad enger halten, wenn die technische Änderung bereits läuft.',
        ],
        tags: ['Revisionsgetriebene Workflows', 'Aktualisierungsprüfung', 'Schnellere Freigabe'],
      },
      {
        title: 'Bereinigung von Altzeichnungen',
        body: 'Alte Archive enthalten veraltete Toleranzen, fehlenden Normenkontext und uneinheitliche Freigabepraktiken.',
        bullets: [
          'Fehlende GD&T, veraltete Hinweise und Normen-Inkonsistenzen sichtbar machen.',
          'Die Bereinigung dort priorisieren, wo Freigabe- oder Fertigungsverwirrung am größten ist.',
          'Die Migration zu saubereren Zeichnungsstandards über ältere Programme hinweg unterstützen.',
        ],
        tags: ['Archivmodernisierung', 'Normenbereinigung', 'Fertigungsklarheit'],
      },
    ],
    closing: {
      heading: 'Bringen Sie einen echten Workflow ins Gespräch',
      intro:
        'Wenn Ihnen einer davon bekannt vorkommt, können wir genau dort beginnen und zeigen, wo RapidDraft in Ihren aktuellen Prüf- und Zeichnungsfreigabepfad passt.',
      ctaPrimary: 'Demo buchen',
      ctaSecondary: 'Plattform',
    },
  },
} as const;

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

export default function UseCasesPage() {
  const { lang } = useLang();
  const t = CONTENT[lang];
  return (
    <div className="rd2 rd-page">
      <PageMeta
        title={t.meta.title}
        description={t.meta.description}
        path="/use-cases"
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
            <H1 className="mt-5">{t.hero.heading}</H1>
            <Subhead className="mx-auto mt-5 max-w-[760px]">
              {t.hero.subhead}
            </Subhead>
            <MetaRow className="mt-8 justify-center" items={t.hero.overviewItems} />
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button to="/book-demo" variant="primary">
                {t.hero.ctaPrimary}
              </Button>
              <Button to="#workflows" variant="secondary" arrow>
                {t.hero.ctaSecondary}
              </Button>
            </div>
          </div>
        </Container>
      </header>

      {/* ── Lead ─────────────────────────────────────────── */}
      <Section>
        <SectionHeader
          title={t.lead.title}
          intro={t.lead.intro}
        />
      </Section>

      {/* ── Workflows ────────────────────────────────────── */}
      <Section id="workflows">
        <div className="mx-auto grid max-w-[1120px] gap-4 sm:grid-cols-2">
          {t.workflows.map((wf, i) => (
            <div key={wf.title} className="rd-tile flex flex-col">
              <div className="rd-index">0{i + 1}</div>
              <H3 className="mt-3">{wf.title}</H3>
              <Body soft sm className="mt-2.5">
                {wf.body}
              </Body>
              <ul className="mt-5 flex flex-col gap-2.5 text-left">
                {wf.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2.5">
                    <span
                      aria-hidden="true"
                      className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--rd-accent)]"
                    />
                    <Body soft sm>
                      {bullet}
                    </Body>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap justify-center gap-2.5">
                {wf.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Closing CTA ──────────────────────────────────── */}
      <Section>
        <div className="mx-auto max-w-[680px] text-center">
          <H2>{t.closing.heading}</H2>
          <Intro className="mx-auto mt-5 max-w-[760px]">
            {t.closing.intro}
          </Intro>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button to="/book-demo" variant="primary">
              {t.closing.ctaPrimary}
            </Button>
            <Button to="/platform" variant="secondary" arrow>
              {t.closing.ctaSecondary}
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
