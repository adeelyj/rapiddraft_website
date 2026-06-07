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

// Workflow imagery (language-independent), in the same order as the workflows.
const WORKFLOW_IMAGES = [
  '/media/usecase-new-product-development.jpg',
  '/media/usecase-battery-structural.png',
  '/media/usecase-supplier-packages.png',
  '/media/usecase-change-driven.png',
  '/media/usecase-legacy-cleanup.png',
];

const CONTENT = {
  en: {
    meta: {
      title: 'Use cases | RapidDraft',
      description:
        'Technical drawing checks, quality inspection documents, DFM reviews, and supplier CAD collaboration. RapidDraft catches drawing and design issues before release and before the EMPB.',
    },
    hero: {
      eyebrow: 'Use cases',
      heading: 'Where RapidDraft catches issues before release',
      subhead:
        'Four review jobs every drawing-release team knows: checking the drawing, building the inspection documents, the DFM pass, and the supplier handoff. RapidDraft does the first pass on each, grounded in your rules, and you keep the sign-off.',
      overviewItems: [
        'Drawings checked against your rules before you cut the rev',
        'DFM questions surfaced before the EMPB, not after a rejection',
        'Supplier packages that leave with fewer gaps to clarify',
      ],
      ctaPrimary: 'Book a demo',
      ctaSecondary: 'See the use cases',
    },
    lead: {
      title: 'Built for the review work, not an abstract CAD demo',
      intro:
        'Design intent lives in CAD, the manufacturing requirements live in the drawing, and the review logic is tribal knowledge. RapidDraft runs the repetitive first pass across all four, links every finding back to the rule or note it came from, and leaves the judgment to you.',
    },
    workflows: [
      {
        title: 'Technical drawing checks',
        body: 'A second set of eyes on the sheet before you cut the rev. RapidDraft reads GD&T, datums, and tolerance stack-up the way a checker does, grounded in your company rules, and flags what would fail downstream.',
        bullets: [
          'Catch missing dimensions, tolerance conflicts, and datum-scheme gaps before release.',
          'Every finding links back to the rule, standard, or drawing note it came from.',
          'Supports the Vier-Augen-Prinzip: RapidDraft does the first pass, the checker keeps the sign-off.',
        ],
        tags: ['Second set of eyes', 'GD&T and datums', 'Grounded in your rules'],
      },
      {
        title: 'Quality inspection documents (BOM, FAIR)',
        body: 'Where any deviation means rejection, the inspection documents have to be right. RapidDraft helps build BOM and First Article Inspection documents and checks the drawing for what the EMPB will catch, before the package ships.',
        bullets: [
          'Prepare inspection-ready documents, the BOM and the FAIR, against the drawing.',
          'Flag, line by line, what would fail a First Article Inspection or a VDA Band 2 EMPB.',
          'Carry findings into an audit trail a quality engineer can show to an auditor.',
        ],
        tags: ['BOM and FAIR', 'EMPB / VDA Band 2', 'Audit trail'],
      },
      {
        title: 'DFM reviews',
        body: 'The manufacturability pass that pre-empts "why is this tolerance here?". RapidDraft reviews the drawing for manufacturability against your rules so the question is answered in engineering, not thrown back from the floor.',
        bullets: [
          'Surface manufacturing-sensitive features and tolerances early, while changes are still cheap.',
          'Answer the recurring DFM questions with the rule and the drawing note behind each finding.',
          'Catch it in review and you lose a few hours. Catch it after release and it is rework or scrap.',
        ],
        tags: ['DFM / manufacturability', 'Tolerance review', 'Caught before release'],
      },
      {
        title: 'Supplier / OEM CAD collaboration',
        body: 'So the design is not thrown over the wall. When drawings, the BOM, FAIR, and the review decisions leave together, the supplier picks the package up cold. RapidDraft helps teams send a cleaner handoff with fewer clarification loops.',
        bullets: [
          'Check for missing release information before the package leaves engineering.',
          'Send the drawing with its findings and decision context attached, not a PDF to re-explain.',
          'Cut the back-and-forth on tolerances, manufacturability, and missing detail across suppliers.',
        ],
        tags: ['Supplier / OEM handoff', 'Decision context attached', 'Fewer feedback loops'],
      },
      {
        title: 'Change-driven updates (ECN)',
        body: 'A cut rev triggers drawing churn long after the design decision is made. RapidDraft points to what changed, what needs a fresh review, and what to update before sign-off, so the release chain does not restart from zero.',
        bullets: [
          'See which views, dimensions, and notes need a second look after a change.',
          'Re-check only what the ECN touched instead of re-reviewing the whole sheet.',
          'Keep the release gate moving when the engineering change is already in motion.',
        ],
        tags: ['ECN-driven review', 'Re-check what changed', 'Release gate'],
      },
    ],
    closing: {
      heading: 'Bring a drawing that is hard to release',
      intro:
        'If one of these is your bottleneck, start there. Bring one drawing-release process and a drawing that is hard to release, and we show the findings traced back to your own rules. Scoped, low-risk, on your infrastructure.',
      ctaPrimary: 'Book a demo',
      ctaSecondary: 'Platform',
    },
  },
  de: {
    meta: {
      title: 'Anwendungsfälle | RapidDraft',
      description:
        'Technische Zeichnungsprüfungen, Qualitätsdokumente, DFM-Reviews und Lieferanten-CAD-Zusammenarbeit. RapidDraft findet Zeichnungs- und Designfehler vor der Freigabe und vor dem EMPB.',
    },
    hero: {
      eyebrow: 'Anwendungsfälle',
      heading: 'Wo RapidDraft Fehler vor der Freigabe findet',
      subhead:
        'Vier Prüfaufgaben, die jedes Freigabeteam kennt: die Zeichnung prüfen, die Prüfdokumente erstellen, der DFM-Durchgang und die Lieferantenübergabe. RapidDraft übernimmt bei jeder den ersten Durchgang, verankert in Ihren Regeln, und die Freigabe behalten Sie.',
      overviewItems: [
        'Zeichnungen werden gegen Ihre Regeln geprüft, bevor Sie eine Revision ziehen',
        'DFM-Fragen werden vor dem EMPB sichtbar, nicht nach einer Reklamation',
        'Lieferantenpakete gehen mit weniger Lücken zur Klärung heraus',
      ],
      ctaPrimary: 'Demo buchen',
      ctaSecondary: 'Anwendungsfälle ansehen',
    },
    lead: {
      title: 'Gebaut für die Prüfarbeit, nicht für eine abstrakte CAD-Demo',
      intro:
        'Die Designintention steckt im CAD, die Fertigungsanforderungen stecken in der Zeichnung, und die Prüflogik ist Erfahrungswissen. RapidDraft übernimmt den wiederkehrenden ersten Durchgang über alle vier hinweg, verknüpft jeden Befund mit der Regel oder dem Hinweis, aus dem er stammt, und überlässt Ihnen das Urteil.',
    },
    workflows: [
      {
        title: 'Technische Zeichnungsprüfungen',
        body: 'Ein zweites Augenpaar auf dem Blatt, bevor Sie eine Revision ziehen. RapidDraft liest GD&T, Bezüge und Toleranzketten so, wie es ein Prüfer tut, verankert in Ihren Firmenregeln, und kennzeichnet, was nachgelagert durchfallen würde.',
        bullets: [
          'Fehlende Maße, Toleranzkonflikte und Lücken im Bezugsschema vor der Freigabe finden.',
          'Jeder Befund verweist auf die Regel, die Norm oder den Zeichnungshinweis, aus dem er stammt.',
          'Unterstützt das Vier-Augen-Prinzip: RapidDraft macht den ersten Durchgang, der Prüfer behält die Freigabe.',
        ],
        tags: ['Zweites Augenpaar', 'GD&T und Bezüge', 'Verankert in Ihren Regeln'],
      },
      {
        title: 'Qualitätsdokumente (BOM, FAIR)',
        body: 'Wo jede Abweichung eine Reklamation bedeutet, müssen die Prüfdokumente stimmen. RapidDraft hilft beim Erstellen von BOM und Erstmusterprüfbericht und prüft die Zeichnung auf das, was das EMPB findet, bevor das Paket herausgeht.',
        bullets: [
          'Prüfbereite Dokumente, die BOM und den FAIR, gegen die Zeichnung vorbereiten.',
          'Zeile für Zeile kennzeichnen, was bei einer Erstmusterprüfung oder einem EMPB nach VDA Band 2 durchfällt.',
          'Befunde in eine Rückverfolgbarkeit überführen, die ein Qualitätsingenieur einem Auditor vorlegen kann.',
        ],
        tags: ['BOM und FAIR', 'EMPB / VDA Band 2', 'Rückverfolgbarkeit'],
      },
      {
        title: 'DFM-Reviews',
        body: 'Der Fertigbarkeitsdurchgang, der die Frage "warum steht diese Toleranz hier?" vorwegnimmt. RapidDraft prüft die Zeichnung gegen Ihre Regeln auf Fertigbarkeit, damit die Frage in der Konstruktion beantwortet wird und nicht aus der Fertigung zurückkommt.',
        bullets: [
          'Fertigungsempfindliche Merkmale und Toleranzen früh sichtbar machen, solange Änderungen noch günstig sind.',
          'Wiederkehrende DFM-Fragen mit der Regel und dem Zeichnungshinweis hinter jedem Befund beantworten.',
          'Im Review gefunden kostet ein paar Stunden. Nach der Freigabe gefunden bedeutet Nacharbeit oder Ausschuss.',
        ],
        tags: ['DFM / Fertigbarkeit', 'Toleranzprüfung', 'Vor der Freigabe gefunden'],
      },
      {
        title: 'Lieferanten- / OEM-CAD-Zusammenarbeit',
        body: 'Damit das Design nicht über den Zaun geworfen wird. Wenn Zeichnungen, BOM, FAIR und die Prüfentscheidungen gemeinsam herausgehen, nimmt der Lieferant das Paket ohne Vorlauf auf. RapidDraft hilft Teams, sauberer zu übergeben, mit weniger Rückfrageschleifen.',
        bullets: [
          'Auf fehlende Freigabeinformationen prüfen, bevor das Paket die Konstruktion verlässt.',
          'Die Zeichnung mit ihren Befunden und dem Entscheidungskontext übergeben, nicht als PDF zum Neu-Erklären.',
          'Das Hin und Her zu Toleranzen, Fertigbarkeit und fehlenden Details über Lieferanten hinweg reduzieren.',
        ],
        tags: ['Lieferanten- / OEM-Übergabe', 'Entscheidungskontext dabei', 'Weniger Rückfrageschleifen'],
      },
      {
        title: 'Änderungsgetriebene Aktualisierungen (ECN)',
        body: 'Eine gezogene Revision löst lange nach der Designentscheidung noch Zeichnungsaufwand aus. RapidDraft zeigt, was sich geändert hat, was neu geprüft werden muss und was vor der Freigabe zu aktualisieren ist, damit die Freigabekette nicht bei null beginnt.',
        bullets: [
          'Erkennen, welche Ansichten, Maße und Hinweise nach einer Änderung einen zweiten Blick brauchen.',
          'Nur das neu prüfen, was die ECN berührt hat, statt das ganze Blatt erneut zu prüfen.',
          'Die Konstruktionsfreigabe in Bewegung halten, wenn die technische Änderung bereits läuft.',
        ],
        tags: ['ECN-getriebene Prüfung', 'Nur Geändertes neu prüfen', 'Release Gate'],
      },
    ],
    closing: {
      heading: 'Bringen Sie eine Zeichnung mit, die schwer freizugeben ist',
      intro:
        'Wenn einer davon Ihr Engpass ist, beginnen wir genau dort. Bringen Sie einen Freigabeprozess und eine Zeichnung mit, die schwer freizugeben ist, und wir zeigen die Befunde, zurückverfolgt zu Ihren eigenen Regeln. Eng gefasst, risikoarm, auf Ihrer Infrastruktur.',
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
      <header className="relative overflow-hidden">
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
              {WORKFLOW_IMAGES[i] && (
                <img
                  src={WORKFLOW_IMAGES[i]}
                  alt={wf.title}
                  loading="lazy"
                  className="mb-5 aspect-[16/9] w-full rounded-[10px] border border-[var(--rd-hair)] object-cover"
                />
              )}
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
