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
} from '../components/ui/primitives';
import StackAndSovereignty from '../components/platform/StackAndSovereignty';
import { useLang } from '../i18n/LanguageContext';

const CONTENT = {
  en: {
    meta: {
      title: 'Platform | RapidDraft',
      description:
        'RapidDraft sits on top of your CAD and PLM and keeps drawing release, design review, and manufacturing feedback attached to the model. It is human-in-the-loop and grounded in your rules.',
    },
    hero: {
      eyebrow: 'Platform',
      headingLead: 'One agentic review layer for your entire ',
      headingMark: 'drawing-release process',
      subhead:
        'RapidDraft sits on top of your CAD and PLM and keeps drawing release, design review, and manufacturing feedback attached to the model. It is human-in-the-loop and grounded in your rules.',
      primaryCta: 'Book a demo',
      secondaryCta: 'See it in your workflow',
    },
    sourceOfTruth: {
      title: 'The model is the single source of truth, and so is the review',
      intro:
        'Drawings, reviews, and feedback usually scatter across email, PDFs, and spreadsheets, disconnected from the CAD they describe. RapidDraft keeps them attached to the model and governed by your rules, so every release is backed by a complete, traceable review.',
    },
    howItWorks: {
      title: 'How it works',
    },
    steps: [
      {
        title: 'Connect',
        body: 'Plug RapidDraft into your CAD and PLM: Siemens NX, CATIA, SolidWorks, EPLAN, and your PDM or CIM Database. Your data stays in your governed systems.',
      },
      {
        title: 'Check',
        body: 'RapidDraft generates drawings and QA documents, then reviews them against your engineering, manufacturing, and company-specific rules. It flags missing dimensions, tolerance and GD&T issues, standards violations, and manufacturability risks.',
      },
      {
        title: 'Release',
        body: 'Engineers review the findings, decide, and release through a clear gate. Every decision feeds an audit trail (VDA, EMPB) and reusable company knowledge.',
      },
    ],
    inside: {
      title: 'Inside the platform',
      intro: 'The modules behind RapidDraft, and how each one works.',
    },
    modules: [
      {
        title: 'Drawing Memory',
        body: 'Generate manufacturing-ready drawings and inspection-ready documents, including BOMs and first-article inspection reports, from current geometry, and preserve drafting intent as designs evolve.',
        list: [
          'Preserves dimensions, notes, and checks across revisions.',
          'Keeps redraw effort from starting at zero after each change.',
          'Turns review effort into reusable company knowledge.',
        ],
      },
      {
        title: 'Review Automation',
        body: 'Apply your engineering, manufacturing, and company-specific logic to surface manufacturability and completeness issues early, while engineers keep control of the final decisions.',
        list: [
          'Flags repeated DFM risks before formal review starts.',
          'Catches missing, inconsistent, or review-critical information before release.',
          'Standardizes technical drawings against ISO and ASME.',
        ],
      },
      {
        title: 'Model-Linked Collaboration',
        body: 'Give design, QA, and suppliers one shared CAD review environment built around the model.',
        list: [
          'Feedback stays attached to geometry instead of scattered screenshots.',
          'Every reviewer works from the same model state and revision.',
          'Lessons learned stay connected to the part for future iterations.',
        ],
      },
      {
        title: 'Bulk Review',
        body: 'Run repeated checks across drawings, revisions, and part families without reopening work one file at a time.',
        list: [
          'Applies the same review logic across large drawing sets and revision queues.',
          'Surfaces common failure patterns and high-priority outliers fast.',
          'Lets engineers triage exceptions instead of repeating the same checks.',
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
        a: 'Yes. Siemens NX, CATIA, SolidWorks, and EPLAN today, with more coming. You do not change tools or workflow.',
      },
      {
        q: 'Does it replace my engineers?',
        a: 'No. It highlights issues, suggests fixes, and automates repetitive work. Final approval always stays with the engineer.',
      },
      {
        q: 'Can it run on-prem?',
        a: 'Yes. It runs locally on your infrastructure, with local or EU-cloud options.',
      },
      {
        q: 'How accurate is it?',
        a: 'It is grounded in engineering standards and your company rules, and it learns from your feedback on your specific parts over time.',
      },
      {
        q: 'What happens to my data?',
        a: 'It stays in your environment. Models run locally, and training uses only anonymized or approved data.',
      },
    ],
  },
  de: {
    meta: {
      title: 'Plattform | RapidDraft',
      description:
        'RapidDraft setzt auf Ihr CAD und PLM auf und hält Zeichnungsfreigabe, Design-Review und Fertigungsfeedback mit dem Modell verbunden. Human-in-the-Loop und verankert in Ihren Regeln.',
    },
    hero: {
      eyebrow: 'Plattform',
      headingLead: 'Eine agentische Review-Ebene für Ihren gesamten ',
      headingMark: 'Zeichnungsfreigabe-Prozess',
      subhead:
        'RapidDraft setzt auf Ihr CAD und PLM auf und hält Zeichnungsfreigabe, Design-Review und Fertigungsfeedback mit dem Modell verbunden. Human-in-the-Loop und verankert in Ihren Regeln.',
      primaryCta: 'Demo buchen',
      secondaryCta: 'In Ihrem Workflow erleben',
    },
    sourceOfTruth: {
      title: 'Das Modell ist die einzige Quelle der Wahrheit, und das Review ist es auch',
      intro:
        'Zeichnungen, Reviews und Feedback verteilen sich meist über E-Mails, PDFs und Tabellen, getrennt vom CAD, das sie beschreiben. RapidDraft hält sie mit dem Modell verbunden und durch Ihre Regeln gesteuert, sodass jede Freigabe durch ein vollständiges, nachvollziehbares Review abgesichert ist.',
    },
    howItWorks: {
      title: 'So funktioniert es',
    },
    steps: [
      {
        title: 'Verbinden',
        body: 'Binden Sie RapidDraft in Ihr CAD und PLM ein: Siemens NX, CATIA, SolidWorks, EPLAN sowie Ihr PDM oder CIM Database. Ihre Daten bleiben in Ihren geregelten Systemen.',
      },
      {
        title: 'Prüfen',
        body: 'RapidDraft erstellt Zeichnungen und QS-Dokumente und prüft sie anschließend gegen Ihre Konstruktions-, Fertigungs- und unternehmensspezifischen Regeln. Es markiert fehlende Bemaßungen, Toleranz- und GD&T-Probleme, Normverstöße und Fertigungsrisiken.',
      },
      {
        title: 'Freigeben',
        body: 'Ingenieure prüfen die Befunde, entscheiden und geben über ein klares Gate frei. Jede Entscheidung fließt in einen Audit-Trail (VDA, EMPB) und wiederverwendbares Unternehmenswissen ein.',
      },
    ],
    inside: {
      title: 'Im Inneren der Plattform',
      intro: 'Die Module hinter RapidDraft und wie jedes einzelne arbeitet.',
    },
    modules: [
      {
        title: 'Drawing Memory',
        body: 'Erstellen Sie fertigungsreife Zeichnungen und prüffertige Dokumente, einschließlich BOMs und Erstmusterprüfberichten, aus der aktuellen Geometrie, und bewahren Sie die Zeichnungsabsicht, während sich Designs weiterentwickeln.',
        list: [
          'Bewahrt Bemaßungen, Anmerkungen und Prüfungen über Revisionen hinweg.',
          'Verhindert, dass die Neuzeichnung nach jeder Änderung bei null beginnt.',
          'Verwandelt Review-Aufwand in wiederverwendbares Unternehmenswissen.',
        ],
      },
      {
        title: 'Review Automation',
        body: 'Wenden Sie Ihre Konstruktions-, Fertigungs- und unternehmensspezifische Logik an, um Fertigbarkeits- und Vollständigkeitsprobleme früh aufzudecken, während Ingenieure die finalen Entscheidungen behalten.',
        list: [
          'Markiert wiederkehrende DFM-Risiken, bevor das formale Review beginnt.',
          'Erkennt fehlende, inkonsistente oder review-kritische Informationen vor der Freigabe.',
          'Standardisiert technische Zeichnungen gemäß ISO und ASME.',
        ],
      },
      {
        title: 'Model-Linked Collaboration',
        body: 'Geben Sie Konstruktion, QS und Lieferanten eine gemeinsame CAD-Review-Umgebung, die rund um das Modell aufgebaut ist.',
        list: [
          'Feedback bleibt mit der Geometrie verbunden statt in verstreuten Screenshots.',
          'Jeder Prüfer arbeitet vom gleichen Modellstand und der gleichen Revision aus.',
          'Erkenntnisse bleiben für künftige Iterationen mit dem Bauteil verknüpft.',
        ],
      },
      {
        title: 'Bulk Review',
        body: 'Führen Sie wiederholte Prüfungen über Zeichnungen, Revisionen und Teilefamilien hinweg durch, ohne jede Datei einzeln erneut zu öffnen.',
        list: [
          'Wendet dieselbe Review-Logik auf große Zeichnungssätze und Revisionswarteschlangen an.',
          'Deckt häufige Fehlermuster und Ausreißer mit hoher Priorität schnell auf.',
          'Lässt Ingenieure Ausnahmen bearbeiten, statt dieselben Prüfungen zu wiederholen.',
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
        a: 'Ja. Siemens NX, CATIA, SolidWorks und EPLAN heute, weitere folgen. Sie ändern weder Werkzeuge noch Workflow.',
      },
      {
        q: 'Ersetzt es meine Ingenieure?',
        a: 'Nein. Es hebt Probleme hervor, schlägt Korrekturen vor und automatisiert repetitive Arbeit. Die finale Freigabe bleibt immer beim Ingenieur.',
      },
      {
        q: 'Kann es On-Prem laufen?',
        a: 'Ja. Es läuft lokal auf Ihrer Infrastruktur, mit Optionen für lokale oder EU-Cloud.',
      },
      {
        q: 'Wie genau ist es?',
        a: 'Es ist in Konstruktionsnormen und Ihren Unternehmensregeln verankert und lernt mit der Zeit aus Ihrem Feedback zu Ihren spezifischen Bauteilen.',
      },
      {
        q: 'Was passiert mit meinen Daten?',
        a: 'Sie bleiben in Ihrer Umgebung. Modelle laufen lokal, und das Training nutzt ausschließlich anonymisierte oder freigegebene Daten.',
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
      <header className="relative overflow-hidden border-b border-[var(--rd-hair)]">
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
      </Section>

      {/* ── How it works (three numbered steps) ──────────── */}
      <Section>
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
      <Section>
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
      <StackAndSovereignty />

      {/* ── FAQ ──────────────────────────────────────────── */}
      <Section>
        <SectionHeader title={t.faqSection.title} />
        <div className="mx-auto mt-10 flex max-w-[820px] flex-col gap-4">
          {t.faqs.map((faq) => (
            <div key={faq.q} className="rd-tile text-left">
              <H3>{faq.q}</H3>
              <Body soft sm className="mt-2.5">
                {faq.a}
              </Body>
            </div>
          ))}
        </div>
        <div className="mt-9 flex justify-center">
          <Button to="/book-demo" variant="primary">
            {t.faqSection.cta}
          </Button>
        </div>
      </Section>
    </div>
  );
}
