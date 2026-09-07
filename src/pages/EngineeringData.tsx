import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Box, FileText, MousePointer2, ScanLine } from "lucide-react";
import {
  Container,
  Section,
  Eyebrow,
  H1,
  H2,
  H3,
  Subhead,
  Intro,
  Body,
  Button,
} from "../components/ui/primitives";
import FaqAccordion from "../components/FaqAccordion";
import PageMeta from "../components/PageMeta";
import { useLang } from "../i18n/LanguageContext";
import "./engineering-data.css";

const content = {
  en: {
    eyebrow: "ENGINEERING DATA FOR AI",
    headline: ["Real engineering.", "Richer intelligence."],
    intro:
      "CAD models, technical drawings, expert annotations, and the workflows that connect them. Built around what your AI needs to learn.",
    contact: "Discuss your data needs",
    explore: "Explore a data package",
    photo: "Engineering component · illustrative photography",
    bottom: "From the geometry to the reasoning behind it.",
    disciplines: [
      "CAD & drawings",
      "Expert annotations",
      "Engineering workflows",
    ],
    section: "01 / THE DATA, IN CONTEXT",
    title: ["One engineering task.", "Every layer connected."],
    description:
      "A file is a starting point. Connect the geometry, the drawing, the task, and the expert reasoning to make it useful for training and evaluation.",
    taskLabel: "Example task",
    task: "Review the bracket drawing against its geometry. Identify the missing overall dimension and explain what needs to change.",
    example: "ILLUSTRATIVE PACKAGE / RD-DEMO-001",
    notice: "Concept example, not a downloadable or licensable dataset.",
    tabs: ["Geometry", "Drawing", "Workflow", "Expert review"],
    titles: [
      "The part is only the beginning.",
      "Give every dimension context.",
      "Capture how the work happens.",
      "Keep the reasoning with the result.",
    ],
    descriptions: [
      "Associate a source model with its drawing, task, and structured metadata. Agree the exact formats and relationships for your use case.",
      "Connect drawing views, dimensions, and symbols to a specific engineering task. This example intentionally omits an overall width.",
      "Pair recorded engineering sessions with timestamped interactions and task context. Scope native files and expert commentary as additional deliverables.",
      "Link an observation to the relevant artifact, the reason it matters, and the expected action. Define review criteria with your team.",
    ],
    geometryNote:
      "Concept mounting bracket · SVG illustration, not a STEP file",
    drawingNote: "Illustrative drawing · not for manufacture",
    workflow: [
      "Open the source drawing",
      "Inspect the front view",
      "Record the missing dimension",
    ],
    workflowNote: "Illustrative event sequence · not a recorded session",
    reviewLabel: "EXAMPLE FINDING",
    review: "Overall width is missing.",
    reason:
      "The front view does not fully define the outer profile. Add the overall width before release.",
    fields: ["Artifact", "Region", "Recommended action"],
    values: ["drawing.svg", "Front view / outer profile", "Add overall width"],
    offerLabel: "02 / WORK WITH US",
    offerTitle: ["Your task.", "The right data."],
    offerIntro:
      "Start with the capability you want to build. We’ll scope the data, the review process, and the delivery together.",
    offers: [
      [
        "Dataset licensing",
        "Explore relevant CAD, drawing, and annotation datasets. Availability, coverage, and permitted uses are confirmed individually.",
        "Explore availability",
      ],
      [
        "Custom data production",
        "Commission engineering examples, controlled variants, and expert annotations against an agreed task and acceptance criteria.",
        "Scope a dataset",
      ],
      [
        "Workflow capture",
        "Capture engineering-software sessions with video, interaction events, and window context. Add the artifacts and explanations your task needs.",
        "Discuss workflow capture",
      ],
    ],
    boundaryLabel: "A CLEAR DATA BOUNDARY",
    boundary: "Purpose-built data. Explicit permissions.",
    boundaryText:
      "Commercial deliveries should use separately created or appropriately licensed material. Customer projects from the review platform are not an implied source of training data. Confirm provenance and permitted uses for each engagement.",
    faqLabel: "03 / BEFORE WE BEGIN",
    faqTitle: "A few practical questions.",
    faqs: [
      [
        "What data is available today?",
        "Availability, volume, annotation coverage, formats, and license terms are confirmed in a scoping conversation. The package above demonstrates a concept; it is not a published inventory.",
      ],
      [
        "Can you create data for our model’s task?",
        "Custom production can cover CAD examples, technical drawings, annotations, workflow recordings, and task-based evaluations. We agree the engineering domain, deliverables, and acceptance criteria before production.",
      ],
      [
        "What does workflow capture include?",
        "The Rapid Shot Windows recording foundation supports WebM video, timestamped JSONL interaction events, and JSON session metadata. Native engineering files and expert explanations are separately scoped.",
      ],
      [
        "What about simulation and CAE data?",
        "Simulation data is a custom-scoped direction. Solver setup, loads, boundary conditions, results, and review requirements need to be agreed. No ready-to-license simulation catalogue is implied.",
      ],
    ],
    finalLabel: "LET’S BUILD THE RIGHT DATASET",
    finalTitle: ["What should your", "AI learn to do?"],
    finalText:
      "Bring a target task, a data specification, or a capability you’re working toward.",
    finalCta: "Let’s talk engineering data",
    emailNote: "Opens your email app · info@rapiddraft.ai",
  },
  de: {
    eyebrow: "ENGINEERING-DATEN FÜR KI",
    headline: ["Reales Engineering.", "Mehr Kontext für KI."],
    intro:
      "CAD-Modelle, technische Zeichnungen, Expertenannotationen und die zugehörigen Arbeitsabläufe. Abgestimmt auf das, was Ihre KI lernen soll.",
    contact: "Datenbedarf besprechen",
    explore: "Datenpaket entdecken",
    photo: "Engineering-Bauteil · illustrative Fotografie",
    bottom: "Von der Geometrie bis zur Begründung dahinter.",
    disciplines: [
      "CAD & Zeichnungen",
      "Expertenannotationen",
      "Engineering-Workflows",
    ],
    section: "01 / DATEN IM KONTEXT",
    title: ["Eine Engineering-Aufgabe.", "Alle Ebenen verbunden."],
    description:
      "Eine Datei ist der Anfang. Verbinden Sie Geometrie, Zeichnung, Aufgabe und Expertenwissen für Training und Evaluation.",
    taskLabel: "Beispielaufgabe",
    task: "Prüfen Sie die Zeichnung des Haltewinkels anhand seiner Geometrie. Erkennen Sie das fehlende Gesamtmaß und erläutern Sie die nötige Änderung.",
    example: "ILLUSTRATIVES PAKET / RD-DEMO-001",
    notice:
      "Konzeptbeispiel, kein herunterladbarer oder lizenzierbarer Datensatz.",
    tabs: ["Geometrie", "Zeichnung", "Workflow", "Expertenprüfung"],
    titles: [
      "Das Bauteil ist erst der Anfang.",
      "Jedes Maß braucht Kontext.",
      "Erfassen, wie Arbeit entsteht.",
      "Ergebnis und Begründung verbinden.",
    ],
    descriptions: [
      "Verknüpfen Sie ein Ausgangsmodell mit Zeichnung, Aufgabe und strukturierten Metadaten. Formate und Beziehungen werden für Ihren Anwendungsfall vereinbart.",
      "Verbinden Sie Ansichten, Maße und Symbole mit einer konkreten Aufgabe. In diesem Beispiel fehlt bewusst die Gesamtbreite.",
      "Verbinden Sie aufgezeichnete Engineering-Sitzungen mit zeitgestempelten Interaktionen und Aufgabenkontext. Native Dateien und Expertenkommentare werden zusätzlich vereinbart.",
      "Verknüpfen Sie eine Beobachtung mit dem Artefakt, ihrer Bedeutung und der erwarteten Handlung. Prüfkriterien werden mit Ihrem Team definiert.",
    ],
    geometryNote:
      "Konzept eines Haltewinkels · SVG-Illustration, keine STEP-Datei",
    drawingNote: "Illustrative Zeichnung · nicht zur Fertigung",
    workflow: [
      "Ausgangszeichnung öffnen",
      "Vorderansicht prüfen",
      "Fehlendes Maß dokumentieren",
    ],
    workflowNote: "Illustrative Ereignisfolge · keine aufgezeichnete Sitzung",
    reviewLabel: "BEISPIELBEFUND",
    review: "Die Gesamtbreite fehlt.",
    reason:
      "Die Vorderansicht definiert das Außenprofil nicht vollständig. Ergänzen Sie die Gesamtbreite vor der Freigabe.",
    fields: ["Artefakt", "Bereich", "Empfohlene Aktion"],
    values: [
      "drawing.svg",
      "Vorderansicht / Außenprofil",
      "Gesamtbreite ergänzen",
    ],
    offerLabel: "02 / ZUSAMMENARBEIT",
    offerTitle: ["Ihre Aufgabe.", "Die passenden Daten."],
    offerIntro:
      "Beginnen Sie mit der Fähigkeit, die Sie entwickeln möchten. Daten, Prüfprozess und Lieferung stimmen wir gemeinsam ab.",
    offers: [
      [
        "Datensatz-Lizenzierung",
        "Besprechen Sie passende CAD-, Zeichnungs- und Annotationsdaten. Verfügbarkeit, Abdeckung und Nutzungsrechte werden individuell bestätigt.",
        "Verfügbarkeit besprechen",
      ],
      [
        "Individuelle Datenproduktion",
        "Beauftragen Sie Engineering-Beispiele, kontrollierte Varianten und Expertenannotationen nach vereinbarten Aufgaben und Abnahmekriterien.",
        "Datensatz definieren",
      ],
      [
        "Workflow-Erfassung",
        "Erfassen Sie Engineering-Sitzungen mit Video, Interaktionsereignissen und Fensterkontext. Ergänzen Sie die benötigten Artefakte und Erklärungen.",
        "Workflow-Erfassung besprechen",
      ],
    ],
    boundaryLabel: "KLARE DATENGRENZEN",
    boundary: "Gezielte Daten. Explizite Rechte.",
    boundaryText:
      "Kommerzielle Lieferungen sollten separat erstelltes oder entsprechend lizenziertes Material verwenden. Kundenprojekte der Prüfplattform sind keine implizite Quelle für Trainingsdaten. Herkunft und Nutzungsrechte werden je Auftrag geklärt.",
    faqLabel: "03 / VOR DEM START",
    faqTitle: "Einige praktische Fragen.",
    faqs: [
      [
        "Welche Daten sind heute verfügbar?",
        "Verfügbarkeit, Umfang, Annotationen, Formate und Lizenzbedingungen werden im Gespräch bestätigt. Das gezeigte Paket ist ein Konzept und kein veröffentlichter Bestand.",
      ],
      [
        "Können Sie Daten für unsere Modellaufgabe erstellen?",
        "Individuelle Produktion kann CAD-Beispiele, Zeichnungen, Annotationen, Workflow-Aufzeichnungen und Evaluationen umfassen. Fachgebiet, Lieferumfang und Abnahmekriterien werden vorab vereinbart.",
      ],
      [
        "Was umfasst die Workflow-Erfassung?",
        "Die Windows-Aufzeichnungsbasis Rapid Shot unterstützt WebM-Video, zeitgestempelte JSONL-Interaktionsereignisse und JSON-Sitzungsmetadaten. Native Engineering-Dateien und Expertenerklärungen werden separat vereinbart.",
      ],
      [
        "Was ist mit Simulations- und CAE-Daten?",
        "Simulationsdaten werden individuell definiert. Solver, Lasten, Randbedingungen, Ergebnisse und Prüfumfang müssen vereinbart werden. Ein sofort lizenzierbarer Simulationskatalog wird nicht vorausgesetzt.",
      ],
    ],
    finalLabel: "GEMEINSAM ZUM PASSENDEN DATENSATZ",
    finalTitle: ["Was soll Ihre", "KI lernen?"],
    finalText:
      "Bringen Sie eine Zielaufgabe, eine Datenspezifikation oder eine gewünschte Fähigkeit mit.",
    finalCta: "Über Engineering-Daten sprechen",
    emailNote: "Öffnet Ihr E-Mail-Programm · info@rapiddraft.ai",
  },
};
const files = ["part.step", "drawing.svg", "events.jsonl", "review.json"];
const icons = [Box, FileText, MousePointer2, ScanLine];

export default function EngineeringData() {
  const { lang } = useLang();
  const t = content[lang];
  const [selected, setSelected] = useState(0);
  const reduced = useReducedMotion();
  const email = (subject: string) =>
    `mailto:info@rapiddraft.ai?subject=${encodeURIComponent(subject)}`;
  const reveal = {
    initial: { opacity: reduced ? 1 : 0, y: reduced ? 0 : 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: { duration: reduced ? 0 : 0.45 },
  };

  return (
    <div className="rd2 rd-page rd-data-page">
      <PageMeta
        title={`${lang === "en" ? "Engineering Data for AI" : "Engineering-Daten für KI"} | RapidDraft`}
        description={t.intro}
        path="/engineering-data"
      />
      <header className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(48% 50% at 50% -6%, var(--rd-accent-soft), transparent 62%)",
          }}
        />
        <Container className="relative w-full pt-28 pb-16 sm:pt-32 sm:pb-20">
          <motion.div className="mx-auto max-w-[820px] text-center" {...reveal}>
            <Eyebrow>
              {lang === "en" ? "Engineering Data" : "Engineering-Daten"}
            </Eyebrow>
            <H1 className="mt-5">
              {lang === "en" ? (
                <>
                  Engineering data.
                  <br />
                  With <span className="rd-mark">engineering context.</span>
                </>
              ) : (
                <>
                  Engineering-Daten.
                  <br />
                  Mit <span className="rd-mark">Engineering-Kontext.</span>
                </>
              )}
            </H1>
            <Subhead className="mx-auto mt-5 max-w-[760px]">{t.intro}</Subhead>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href={email("Engineering data enquiry")}>
                {t.contact}
              </Button>
              <Button href="#data-package" variant="secondary" arrow>
                {t.explore}
              </Button>
            </div>
            <p className="rd-figcaption mt-4">{t.emailNote}</p>
          </motion.div>
        </Container>
      </header>

      <Section id="data-package">
        <div className="mx-auto max-w-[860px] text-center">
          <H2>{t.title.join(" ")}</H2>
          <Intro className="mx-auto mt-5 max-w-[760px]">{t.description}</Intro>
        </div>
        <div className="rd-data-explorer mx-auto mt-10 max-w-[1040px]">
          <div className="rd-data-package-label">{t.example}</div>
          <div className="rd-data-task">
            <strong>{t.taskLabel}</strong>
            <Body soft sm>
              {t.task}
            </Body>
          </div>
          <div
            className="rd-data-tabs"
            role="tablist"
            aria-label={lang === "en" ? "Data layers" : "Datenebenen"}
          >
            {t.tabs.map((tab, i) => {
              const Icon = icons[i];
              return (
                <button
                  key={tab}
                  type="button"
                  role="tab"
                  id={`ed-tab-${i}`}
                  aria-selected={selected === i}
                  aria-controls="ed-layer-panel"
                  tabIndex={selected === i ? 0 : -1}
                  onClick={() => setSelected(i)}
                  onKeyDown={(event) => {
                    let next = i;
                    if (event.key === "ArrowRight") next = (i + 1) % 4;
                    else if (event.key === "ArrowLeft") next = (i + 3) % 4;
                    else if (event.key === "Home") next = 0;
                    else if (event.key === "End") next = 3;
                    else return;
                    event.preventDefault();
                    setSelected(next);
                    document.getElementById(`ed-tab-${next}`)?.focus();
                  }}
                >
                  <Icon size={18} />
                  <span>{tab}</span>
                </button>
              );
            })}
          </div>
          <div
            id="ed-layer-panel"
            role="tabpanel"
            aria-labelledby={`ed-tab-${selected}`}
            tabIndex={0}
            className="rd-data-panel"
          >
            <div className="rd-data-stage">
              <div className="rd-data-file">
                {files[selected]}
                <span>RD-DEMO-001</span>
              </div>
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  className="rd-data-layer"
                  key={selected}
                  initial={{ opacity: reduced ? 1 : 0, y: reduced ? 0 : 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: reduced ? 1 : 0 }}
                  transition={{ duration: reduced ? 0 : 0.18 }}
                >
                  {selected < 2 ? (
                    <img
                      className="rd-data-drawing"
                      src={`/media/engineering-data/${selected === 0 ? "bracket" : "drawing"}.svg`}
                      alt={selected === 0 ? t.geometryNote : t.drawingNote}
                      width="650"
                      height="410"
                      loading="lazy"
                    />
                  ) : selected === 2 ? (
                    <ol className="rd-data-events">
                      {t.workflow.map((event, i) => (
                        <li key={event}>
                          <span className="text-[var(--rd-accent)]">
                            00:{String(i * 12).padStart(2, "0")}.000
                          </span>
                          <div>
                            {event}
                            <small>
                              {
                                [
                                  "document.open",
                                  "view.inspect",
                                  "annotation.create",
                                ][i]
                              }
                            </small>
                          </div>
                        </li>
                      ))}
                    </ol>
                  ) : (
                    <div className="rd-data-review">
                      <Eyebrow>{t.reviewLabel}</Eyebrow>
                      <H3 className="mt-4">{t.review}</H3>
                      <Body soft sm className="mt-3">
                        {t.reason}
                      </Body>
                      <dl>
                        {t.fields.map((field, i) => (
                          <div key={field}>
                            <dt>{field}</dt>
                            <dd>{t.values[i]}</dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
              <p className="rd-data-note">
                {selected === 0
                  ? t.geometryNote
                  : selected === 1
                    ? t.drawingNote
                    : selected === 2
                      ? t.workflowNote
                      : t.notice}
              </p>
            </div>
            <div className="rd-data-explanation">
              <div className="rd-index">0{selected + 1}</div>
              <H3 className="mt-4">{t.titles[selected]}</H3>
              <Body soft sm className="mt-4">
                {t.descriptions[selected]}
              </Body>
            </div>
          </div>
        </div>
        <p className="rd-figcaption mx-auto mt-4 max-w-[1040px] text-center">
          {t.notice}
        </p>
      </Section>

      <Section>
        <div className="mx-auto max-w-[860px] text-center">
          <H2>{t.offerTitle.join(" ")}</H2>
          <Intro className="mx-auto mt-5 max-w-[760px]">{t.offerIntro}</Intro>
        </div>
        <div className="mx-auto mt-10 grid max-w-[1120px] gap-4 xl:grid-cols-3">
          {t.offers.map(([title, description, action], i) => (
            <motion.article
              key={title}
              className="rd-tile rd-tile--left flex min-w-0 flex-col"
              {...reveal}
            >
              <div className="rd-index">0{i + 1}</div>
              <H3 className="mt-3">{title}</H3>
              <Body soft sm className="mt-2.5">
                {description}
              </Body>
              <div className="mt-auto pt-6">
                <Button href={email(title)} variant="ghost" arrow>
                  {action}
                </Button>
              </div>
            </motion.article>
          ))}
        </div>
      </Section>

      <Section divider>
        <div className="mx-auto max-w-[860px] text-center">
          <Eyebrow className="mb-5">{t.boundaryLabel}</Eyebrow>
          <H2>{t.boundary}</H2>
          <Intro className="mx-auto mt-5 max-w-[760px]">{t.boundaryText}</Intro>
        </div>
      </Section>
      <Section id="data-faq">
        <div className="mx-auto max-w-[860px] text-center">
          <H2>{t.faqTitle}</H2>
        </div>
        <FaqAccordion items={t.faqs.map(([q, a]) => ({ q, a }))} />
      </Section>
      <Section divider>
        <motion.div className="mx-auto max-w-[860px] text-center" {...reveal}>
          <Eyebrow className="mb-5">{t.finalLabel}</Eyebrow>
          <H2>
            {t.finalTitle[0]} <span className="rd-mark">{t.finalTitle[1]}</span>
          </H2>
          <Intro className="mx-auto mt-5 max-w-[760px]">{t.finalText}</Intro>
          <div className="mt-7">
            <Button href={email("Engineering data enquiry")} arrow>
              {t.finalCta}
            </Button>
          </div>
          <p className="rd-figcaption mt-4">{t.emailNote}</p>
        </motion.div>
      </Section>
    </div>
  );
}
