import { type ReactNode } from 'react';
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
  Figure,
} from '../components/ui/primitives';
import StackAndSovereignty from '../components/platform/StackAndSovereignty';
import HubAndSpokeFigure from '../components/diagrams/HubAndSpokeFigure';
import FaqAccordion from '../components/FaqAccordion';

// The Platform stack carries the more grounded labels (NX/CATIA/SW, PDM/PLM,
// FAIR, VDA/EMPB) in the same hub-and-spoke figure the Home page uses.
const STACK_INPUTS = ['NX / CATIA / SW', '2D Drawings', 'PDM / PLM', 'Release Package', 'Supplier QA'] as const;
const STACK_OUTPUTS = ['DFM Findings', 'FAIR Readiness', 'BOM Consistency', 'Release Gate', 'Audit (VDA, EMPB)'] as const;
const STACK_ALT =
  'Engineering inputs (NX/CATIA/SolidWorks, 2D drawings, PDM/PLM, release package, supplier QA) ' +
  'feed into RapidDraft at the center, which produces DFM findings, FAIR readiness, BOM consistency, ' +
  'a release gate, and a VDA/EMPB audit trail.';
import { useLang } from '../i18n/LanguageContext';

const CONTENT = {
  en: {
    meta: {
      title: 'Platform | RapidDraft',
      description:
        'Grounded drawing release and design review, not a black box. RapidDraft applies engineering, manufacturing, and your own rules, shows its work, and links every finding back to its source. Human-in-the-loop, runs on-prem.',
    },
    hero: {
      eyebrow: 'Platform',
      headingLead: 'A grounded second set of eyes for ',
      headingMark: 'drawing release',
      subhead:
        'RapidDraft checks the drawing against engineering, manufacturing, and your own rules, and shows its work. The engineer keeps the sign-off.',
      primaryCta: 'Book a demo',
      secondaryCta: 'See it on your drawings',
    },
    sourceOfTruth: {
      title: 'A reviewed release, not a verdict from a black box',
      intro:
        'Reviews scatter across email, PDFs, and spreadsheets, cut off from the CAD. RapidDraft keeps the check on the model, grounded in your rules.',
      figureCaption:
        'RapidDraft sits between your engineering stack and an auditable release gate, with human-in-the-loop review at the center.',
    },
    howItWorks: {
      title: 'How it works',
    },
    steps: [
      {
        title: 'Connect',
        body: 'Point RapidDraft at your CAD and PLM: Siemens NX, CATIA, SolidWorks, EPLAN, and your PDM or CIM Database. Your IP stays in your governed systems. No tools or workflow to swap out.',
      },
      {
        title: 'Check',
        body: 'RapidDraft does the first pass: it reads the drawing and tests it against your engineering, manufacturing, and company rules. It flags missing dimensions, tolerance and GD&T conflicts, datum-scheme gaps, standards violations, and manufacturability risks, each one linked to the rule it came from.',
      },
      {
        title: 'Release',
        body: 'The engineer reviews the findings, decides, and releases through a clear gate. Every decision feeds an audit trail (VDA, EMPB) and stays as reusable company knowledge for the next reviewer.',
      },
    ],
    inside: {
      title: 'Inside the platform',
      intro: 'The modules behind RapidDraft, and how each one shows its work.',
    },
    modules: [
      {
        title: 'Drawing Memory',
        body: 'Generate manufacturing-ready drawings and inspection-ready documents, including BOMs and First Article Inspection reports, from current geometry, and carry drafting intent forward as the design changes.',
        list: [
          'Keeps dimensions, notes, and checks intact across revisions.',
          'Stops the redraw from starting at zero after every change.',
          'Turns each review into reusable company knowledge instead of tribal memory.',
        ],
      },
      {
        title: 'Review Automation',
        body: 'Apply your engineering, manufacturing, and company-specific rules to catch manufacturability and completeness issues before the rev, while the engineer keeps the final call.',
        list: [
          'Flags repeated DFM risks before the formal review starts.',
          'Catches missing, inconsistent, or review-critical detail before release, not at the EMPB.',
          'Checks technical drawings against ISO and ASME, and against your in-house standards.',
        ],
      },
      {
        title: 'Model-Linked Collaboration',
        body: 'Give design, QA, and suppliers one shared review surface built around the model, so a finding is something the model can defend, not a PDF re-explained for every supplier.',
        list: [
          'Feedback stays pinned to the geometry instead of scattered screenshots.',
          'Every reviewer works from the same model state and revision.',
          'Findings export as a package attached to the part, so the next reviewer or supplier picks it up cold.',
        ],
      },
      {
        title: 'Bulk Review',
        body: 'Run the same checks across drawings, revisions, and part families without reopening work one file at a time.',
        list: [
          'Applies the same review logic across large drawing sets and revision queues.',
          'Surfaces common failure patterns and high-priority outliers first.',
          'Lets engineers triage the exceptions instead of repeating the same checks.',
        ],
      },
    ],
    faqSection: {
      title: 'Frequently asked questions',
      cta: 'Book a demo',
    },
    faqs: [
      {
        q: 'Does it work with my CAD?',
        a: 'Yes. Siemens NX, CATIA, SolidWorks, and EPLAN today, with more coming. You keep your tools and your workflow.',
      },
      {
        q: 'Does it replace my engineers?',
        a: 'No. It does the first pass, flags issues, and links each one to its source. The sign-off always stays with the engineer, supporting the four-eyes principle.',
      },
      {
        q: 'Can it run on-prem?',
        a: 'Yes. It runs locally on your infrastructure, with Local or EU-cloud options. Your IP never leaves the building.',
      },
      {
        q: 'How do I know it is right?',
        a: 'It is grounded in engineering standards and your own rules, and every finding links back to the rule, standard, or drawing note it came from, so you can check the reasoning, not just the verdict.',
      },
      {
        q: 'What happens to my data?',
        a: 'It stays in your environment. Models run locally, we do not train on your IP, and any training uses only anonymized or approved data.',
      },
    ],
  },
  de: {
    meta: {
      title: 'Plattform | RapidDraft',
      description:
        'Fundierte Zeichnungsfreigabe und Design-Review, keine Blackbox. RapidDraft wendet Konstruktions-, Fertigungs- und Ihre eigenen Regeln an, legt seine Arbeit offen und verknüpft jeden Befund mit seiner Quelle. Human-in-the-Loop, läuft On-Prem.',
    },
    hero: {
      eyebrow: 'Plattform',
      headingLead: 'Ein fundiertes Vier-Augen-Prinzip vor der ',
      headingMark: 'Freigabe',
      subhead:
        'RapidDraft prüft die Zeichnung gegen Ihre Regeln und legt seine Arbeit offen. Die Freigabe bleibt beim Ingenieur.',
      primaryCta: 'Demo buchen',
      secondaryCta: 'An Ihren Zeichnungen erleben',
    },
    sourceOfTruth: {
      title: 'Ein geprüftes Review, kein Urteil aus der Blackbox',
      intro:
        'Reviews verteilen sich über E-Mails und Tabellen, weg vom CAD. RapidDraft hält die Prüfung am Modell, verankert in Ihren Regeln.',
      figureCaption:
        'RapidDraft sitzt zwischen Ihrem Engineering-Stack und einem auditierbaren Release-Gate, mit Human-in-the-Loop-Review im Zentrum.',
    },
    howItWorks: {
      title: 'So funktioniert es',
    },
    steps: [
      {
        title: 'Verbinden',
        body: 'Richten Sie RapidDraft auf Ihr CAD und PLM aus: Siemens NX, CATIA, SolidWorks, EPLAN sowie Ihr PDM oder CIM Database. Ihr IP bleibt in Ihren geregelten Systemen. Keine Werkzeuge oder Workflows zum Austauschen.',
      },
      {
        title: 'Prüfen',
        body: 'RapidDraft übernimmt den ersten Durchgang: Es liest die Zeichnung und prüft sie gegen Ihre Konstruktions-, Fertigungs- und Unternehmensregeln. Es markiert fehlende Bemaßungen, Toleranz- und GD&T-Konflikte, Lücken im Bezugssystem, Normverstöße und Fertigungsrisiken, jeden Befund verknüpft mit der Regel, aus der er stammt.',
      },
      {
        title: 'Freigeben',
        body: 'Der Ingenieur prüft die Befunde, entscheidet und gibt über ein klares Gate frei. Jede Entscheidung fließt in einen Audit-Trail (VDA, EMPB) und bleibt als wiederverwendbares Unternehmenswissen für den nächsten Prüfer erhalten.',
      },
    ],
    inside: {
      title: 'Im Inneren der Plattform',
      intro: 'Die Module hinter RapidDraft und wie jedes seine Arbeit offenlegt.',
    },
    modules: [
      {
        title: 'Drawing Memory',
        body: 'Erstellen Sie fertigungsreife Zeichnungen und prüffertige Dokumente, einschließlich BOMs und Erstmusterprüfberichten, aus der aktuellen Geometrie, und tragen Sie die Zeichnungsabsicht weiter, während sich das Design ändert.',
        list: [
          'Hält Bemaßungen, Anmerkungen und Prüfungen über Revisionen hinweg intakt.',
          'Verhindert, dass die Neuzeichnung nach jeder Änderung bei null beginnt.',
          'Verwandelt jedes Review in wiederverwendbares Unternehmenswissen statt in Erfahrungswissen Einzelner.',
        ],
      },
      {
        title: 'Review Automation',
        body: 'Wenden Sie Ihre Konstruktions-, Fertigungs- und unternehmensspezifischen Regeln an, um Fertigbarkeits- und Vollständigkeitsprobleme vor dem Rev zu erkennen, während der Ingenieur die finale Entscheidung behält.',
        list: [
          'Markiert wiederkehrende DFM-Risiken, bevor das formale Review beginnt.',
          'Erkennt fehlende, inkonsistente oder review-kritische Angaben vor der Freigabe, nicht erst beim EMPB.',
          'Prüft technische Zeichnungen gegen ISO und ASME sowie gegen Ihre internen Normen.',
        ],
      },
      {
        title: 'Model-Linked Collaboration',
        body: 'Geben Sie Konstruktion, QS und Lieferanten eine gemeinsame Review-Umgebung rund um das Modell, sodass ein Befund am Modell belegbar ist und nicht als PDF für jeden Lieferanten neu erklärt werden muss.',
        list: [
          'Feedback bleibt an der Geometrie verankert statt in verstreuten Screenshots.',
          'Jeder Prüfer arbeitet vom gleichen Modellstand und der gleichen Revision aus.',
          'Befunde werden als Paket am Bauteil exportiert, sodass der nächste Prüfer oder Lieferant ohne Vorlauf einsteigt.',
        ],
      },
      {
        title: 'Bulk Review',
        body: 'Führen Sie dieselben Prüfungen über Zeichnungen, Revisionen und Teilefamilien hinweg durch, ohne jede Datei einzeln erneut zu öffnen.',
        list: [
          'Wendet dieselbe Review-Logik auf große Zeichnungssätze und Revisionswarteschlangen an.',
          'Deckt häufige Fehlermuster und Ausreißer mit hoher Priorität zuerst auf.',
          'Lässt Ingenieure die Ausnahmen bearbeiten, statt dieselben Prüfungen zu wiederholen.',
        ],
      },
    ],
    faqSection: {
      title: 'Häufig gestellte Fragen',
      cta: 'Demo buchen',
    },
    faqs: [
      {
        q: 'Funktioniert es mit meinem CAD?',
        a: 'Ja. Siemens NX, CATIA, SolidWorks und EPLAN heute, weitere folgen. Sie behalten Ihre Werkzeuge und Ihren Workflow.',
      },
      {
        q: 'Ersetzt es meine Ingenieure?',
        a: 'Nein. Es übernimmt den ersten Durchgang, markiert Probleme und verknüpft jedes mit seiner Quelle. Die Freigabe bleibt immer beim Ingenieur und stützt das Vier-Augen-Prinzip.',
      },
      {
        q: 'Kann es On-Prem laufen?',
        a: 'Ja. Es läuft lokal auf Ihrer Infrastruktur, mit Optionen für lokale oder EU-Cloud. Ihr IP verlässt das Haus nicht.',
      },
      {
        q: 'Woher weiß ich, dass es stimmt?',
        a: 'Es ist in Konstruktionsnormen und Ihren eigenen Regeln verankert, und jeder Befund verweist zurück auf die Regel, Norm oder Zeichnungsnotiz, aus der er stammt. So prüfen Sie die Begründung, nicht nur das Urteil.',
      },
      {
        q: 'Was passiert mit meinen Daten?',
        a: 'Sie bleiben in Ihrer Umgebung. Modelle laufen lokal, wir trainieren nicht auf Ihrem IP, und jedes Training nutzt ausschließlich anonymisierte oder freigegebene Daten.',
      },
    ],
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

export default function Platform() {
  const { lang } = useLang();
  const t = CONTENT[lang];

  return (
    <div className="rd2 rd-page">
      <PageMeta
        title={t.meta.title}
        description={t.meta.description}
        path="/platform"
      />

      {/* ── Hero (centered) ──────────────────────────────── */}
      <header className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{ background: 'radial-gradient(48% 50% at 50% -6%, var(--rd-accent-soft), transparent 62%)' }}
        />
        <Container className="relative w-full pt-28 pb-16 sm:pt-32 sm:pb-20">
          <div className="mx-auto max-w-[820px] text-center">
            <Eyebrow>{t.hero.eyebrow}</Eyebrow>
            <H1 className="mt-5">
              {t.hero.headingLead}<span className="rd-mark">{t.hero.headingMark}</span>
            </H1>
            <Subhead className="mx-auto mt-5 max-w-[760px]">
              {t.hero.subhead}
            </Subhead>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button to="/book-demo" variant="primary">
                {t.hero.primaryCta}
              </Button>
              <Button to="/book-demo" variant="secondary" arrow>
                {t.hero.secondaryCta}
              </Button>
            </div>
          </div>
        </Container>
      </header>

      {/* ── Single source of truth ───────────────────────── */}
      <Section>
        <SectionHeader
          title={t.sourceOfTruth.title}
          intro={t.sourceOfTruth.intro}
        />
        <div className="mx-auto mt-10 w-full max-w-[880px] rounded-[16px] border border-[var(--rd-hair)] bg-[var(--rd-surface)] p-5 sm:p-6">
          <Figure caption={t.sourceOfTruth.figureCaption}>
            <HubAndSpokeFigure inputs={STACK_INPUTS} outputs={STACK_OUTPUTS} alt={STACK_ALT} />
          </Figure>
        </div>
      </Section>

      {/* ── How it works (three numbered steps) ──────────── */}
      <Section id="how-it-works">
        <SectionHeader title={t.howItWorks.title} />
        <div className="mx-auto mt-10 grid max-w-[1120px] gap-4 sm:grid-cols-3">
          {t.steps.map((step, i) => (
            <div key={step.title} className="rd-tile">
              <div className="rd-index">0{i + 1}</div>
              <H3 className="mt-3">{step.title}</H3>
              <Body soft sm className="mt-2.5">
                {step.body}
              </Body>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Inside the platform (four modules) ───────────── */}
      <Section id="inside">
        <SectionHeader
          title={t.inside.title}
          intro={t.inside.intro}
        />
        <div className="mx-auto mt-10 grid max-w-[1120px] gap-4 sm:grid-cols-2">
          {t.modules.map((mod) => (
            <div key={mod.title} className="rd-tile">
              <H3>{mod.title}</H3>
              <Body soft sm className="mt-2.5">
                {mod.body}
              </Body>
              <ul className="mt-4 flex flex-col gap-2.5 text-left">
                {mod.list.map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1 w-1 flex-none rounded-full bg-[var(--rd-accent)]"
                    />
                    <Body soft sm>
                      {item}
                    </Body>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Works with your stack, keeps your data secure ── */}
      <div id="stack" className="scroll-mt-[88px]">
        <StackAndSovereignty />
      </div>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <Section id="faq">
        <SectionHeader title={t.faqSection.title} />
        <FaqAccordion items={t.faqs} />
        <div className="mt-9 flex justify-center">
          <Button to="/book-demo" variant="primary">
            {t.faqSection.cta}
          </Button>
        </div>
      </Section>
    </div>
  );
}
