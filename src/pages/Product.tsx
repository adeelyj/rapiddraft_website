import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { FiCheckCircle, FiRepeat, FiZap } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import PageMeta from '../components/PageMeta';
import ProofStrip from '../components/home/ProofStrip';
import Reveal from '../components/home/Reveal';
import { useLocale } from '../i18n/LocaleContext';

const proofItems = [
    {
        metric: '30%',
        title: 'Fewer change cycles',
        description: 'Catch issues before tooling and release work have to restart.',
        icon: FiRepeat,
    },
    {
        metric: '10x',
        title: 'Faster feedback',
        description: 'Surface review signals while the model is still active.',
        icon: FiZap,
    },
    {
        metric: '50%',
        title: 'Less checking time',
        description: 'Automate repetitive standards and manufacturability validation.',
        icon: FiCheckCircle,
    },
];

const proofItemsDe = [
    {
        metric: '30%',
        title: 'Weniger Änderungsschleifen',
        description: 'Probleme erkennen, bevor Werkzeugbau und Freigabearbeit neu starten müssen.',
        icon: FiRepeat,
    },
    {
        metric: '10x',
        title: 'Schnelleres Feedback',
        description: 'Review-Signale sichtbar machen, solange das Modell noch aktiv bearbeitet wird.',
        icon: FiZap,
    },
    {
        metric: '50%',
        title: 'Weniger Prüfaufwand',
        description: 'Wiederholte Standards und Fertigbarkeitsprüfungen automatisieren.',
        icon: FiCheckCircle,
    },
];

const problemCards = [
    {
        title: 'Drawings restart on every revision',
        description:
            'Documentation work gets rebuilt whenever geometry changes, even when the underlying intent stays the same.',
    },
    {
        title: 'Manufacturing constraints live outside CAD',
        description:
            'DFM notes, supplier feedback, and release caveats often remain buried in PDFs, emails, and follow-up threads.',
    },
    {
        title: 'Review decisions lose their model context',
        description:
            'Comments and approvals are hard to trace back to the exact change in geometry that triggered them.',
    },
    {
        title: 'Lessons learned rarely reach the next cycle',
        description:
            'Teams keep rediscovering the same issues because past decisions are not preserved with the model.',
    },
];

const problemCardsDe = [
    {
        title: 'Zeichnungen starten bei jeder Revision neu',
        description:
            'Dokumentationsarbeit wird neu aufgebaut, sobald sich Geometrie ändert, auch wenn die eigentliche Absicht gleich bleibt.',
    },
    {
        title: 'Fertigungsregeln liegen außerhalb von CAD',
        description:
            'DFM-Notizen, Lieferantenfeedback und Freigabehinweise verschwinden oft in PDFs, E-Mails und Folgegesprächen.',
    },
    {
        title: 'Review-Entscheidungen verlieren Modellkontext',
        description:
            'Kommentare und Freigaben lassen sich schwer auf die konkrete Geometrieänderung zurückführen, die sie ausgelöst hat.',
    },
    {
        title: 'Gelerntes erreicht selten den nächsten Zyklus',
        description:
            'Teams entdecken dieselben Probleme erneut, weil frühere Entscheidungen nicht mit dem Modell erhalten bleiben.',
    },
];

const solutionBlocks = [
    {
        title: 'AI Drawing Analysis',
        description:
            'Generate manufacturing-ready drawings from current geometry and preserve drafting intent as designs evolve.',
        bullets: [
            'Preserves dimensions, notes, and checks across revisions.',
            'Keeps redraw effort from starting at zero after each change.',
            'Turns review effort into reusable drafting intent.',
        ],
    },
    {
        title: 'Rules/AI Design Reviews',
        description:
            'Surface manufacturability and completeness issues earlier while engineers stay in control of the final decisions.',
        bullets: [
            'Flags repeated DFM risks before formal review starts.',
            'Highlights missing or inconsistent release information.',
            'Keeps automation transparent and reviewable when decisions affect downstream teams.',
        ],
    },
    {
        title: 'AI/Human Collaboration',
        description:
            'Keep model-linked discussion, AI feedback, and human review in one shared workspace around the 3D model.',
        bullets: [
            'Feedback stays attached to geometry instead of scattered screenshots.',
            'Different reviewers work from the same model state and revision.',
            'Lessons learned stay connected to the part for future iterations.',
        ],
    },
    {
        title: 'Bulk Reviews and Analysis',
        description:
            'Run repeated checks across drawings, revisions, and part families without reopening work one file at a time.',
        bullets: [
            'Applies the same review logic across large drawing sets and revision queues.',
            'Surfaces common failure patterns, missing information, and high-priority outliers fast.',
            'Helps engineers triage exceptions instead of manually repeating the same checks.',
        ],
    },
];

const solutionBlocksDe = [
    {
        title: 'KI-Zeichnungsanalyse',
        description:
            'Fertigungsgerechte Zeichnungen aus aktueller Geometrie erzeugen und Zeichnungsabsicht über Revisionen hinweg bewahren.',
        bullets: [
            'Bewahrt Maße, Hinweise und Prüfungen über Revisionen hinweg.',
            'Verhindert, dass Zeichnungsarbeit nach jeder Änderung bei null startet.',
            'Macht Review-Aufwand zu wiederverwendbarer Zeichnungslogik.',
        ],
    },
    {
        title: 'Regel- und KI-Designreviews',
        description:
            'Fertigbarkeits- und Vollständigkeitsthemen früher sichtbar machen, während Ingenieure die finalen Entscheidungen behalten.',
        bullets: [
            'Markiert wiederkehrende DFM-Risiken vor dem formalen Review.',
            'Hebt fehlende oder inkonsistente Freigabeinformationen hervor.',
            'Hält Automatisierung nachvollziehbar, wenn Entscheidungen nachgelagerte Teams betreffen.',
        ],
    },
    {
        title: 'KI- und Human Collaboration',
        description:
            'Modellgebundene Diskussion, KI-Feedback und menschliches Review in einem gemeinsamen Arbeitsraum halten.',
        bullets: [
            'Feedback bleibt an Geometrie gebunden statt in Screenshots zu verschwinden.',
            'Reviewer arbeiten aus demselben Modellstand und derselben Revision.',
            'Lessons Learned bleiben für spätere Iterationen mit dem Bauteil verbunden.',
        ],
    },
    {
        title: 'Bulk Reviews und Analyse',
        description:
            'Wiederholte Prüfungen über Zeichnungen, Revisionen und Teilefamilien ausführen, ohne Dateien einzeln zu öffnen.',
        bullets: [
            'Wendet dieselbe Review-Logik auf große Zeichnungssätze und Revisionswarteschlangen an.',
            'Zeigt Muster, fehlende Informationen und Prioritäten schnell auf.',
            'Hilft Ingenieuren, Ausnahmen zu triagieren statt dieselben Checks zu wiederholen.',
        ],
    },
];

const integrationPillar = {
    title: 'Works with your engineering stack',
    body: 'Connect review context from CAD models, manufacturing drawings, BOMs, PLM/PDM records, and internal review rules.',
    tags: ['Siemens NX', 'SolidWorks', 'CATIA', 'PLM / PDM', 'Drawings', 'BOMs'],
};

const sovereigntyPillar = {
    title: 'Designed for data sovereignty',
    body: 'Keep sensitive engineering data inside approved environments with scoped access, controlled AI workflows, and engineer-reviewed outputs.',
    tags: [
        'GDPR-Compliant',
        'On-prem AI',
        'Local/EU Cloud',
        'SSO',
        'IP protection',
        'Human approval',
    ],
};

const trustCards = [
    {
        title: 'No tool replacement',
        body: 'Works around your current CAD, PDM, PLM, and release process.',
    },
    {
        title: 'No uncontrolled data movement',
        body: 'Sensitive files stay within approved environments and access boundaries.',
    },
    {
        title: 'Engineer-controlled AI',
        body: 'Findings remain reviewable, explainable, and tied to human approval.',
    },
    {
        title: 'Cleaner release data',
        body: 'Reduce inconsistencies across drawings, BOMs, part data, and review records.',
    },
];

const WORKING_WEEKS_PER_YEAR = 42;
const AVOIDED_COST_PER_ISSUE = 5000;

type RoiValues = {
    engineers: number;
    hoursPerWeek: number;
    hourlyRate: number;
};

const roiInputs: Array<{
    key: keyof RoiValues;
    label: string;
    min: number;
    max: number;
    step: number;
    formatValue: (value: number) => string;
}> = [
    {
        key: 'engineers',
        label: 'Number of engineers',
        min: 1,
        max: 20,
        step: 1,
        formatValue: (value) => `${value}`,
    },
    {
        key: 'hoursPerWeek',
        label: 'Hours spent per week',
        min: 1,
        max: 40,
        step: 1,
        formatValue: (value) => `${value} hours`,
    },
    {
        key: 'hourlyRate',
        label: 'Average hourly rate',
        min: 30,
        max: 200,
        step: 5,
        formatValue: (value) => formatEuro(value),
    },
];

function formatEuro(value: number) {
    return `€${Math.round(value).toLocaleString('en-US')}`;
}

function getRangeFill(value: number, min: number, max: number) {
    const percentage = ((value - min) / (max - min)) * 100;
    return `linear-gradient(to right, #ea580c 0%, #ea580c ${percentage}%, #e7e5e4 ${percentage}%, #e7e5e4 100%)`;
}

type RoiCalculatorSectionProps = {
    sectionRef?: (element: HTMLElement | null) => void;
};

function RoiCalculatorSection({ sectionRef }: RoiCalculatorSectionProps = {}) {
    const { locale } = useLocale();
    const isGerman = locale === 'de';
    const [roiValues, setRoiValues] = useState<RoiValues>({
        engineers: 5,
        hoursPerWeek: 3,
        hourlyRate: 60,
    });

    const savedHoursPerEngineerPerWeek = Math.max(3, roiValues.hoursPerWeek * 0.3);
    const annualTimeSavingValue =
        roiValues.engineers *
        savedHoursPerEngineerPerWeek *
        roiValues.hourlyRate *
        WORKING_WEEKS_PER_YEAR;
    const annualAvoidedIssueValue = roiValues.engineers * AVOIDED_COST_PER_ISSUE;
    const totalValue = annualTimeSavingValue + annualAvoidedIssueValue;

    const results = [
        {
            label: isGerman ? 'Jährlicher Wert der Zeitersparnis' : 'Annual time-saving value',
            value: formatEuro(annualTimeSavingValue),
            description: isGerman ? 'Wert durch weniger wiederholte Review- und Prüfaufwände.' : 'Value from reduced repeated review and checking effort.',
        },
        {
            label: isGerman ? 'Jährlicher Wert vermiedener Probleme' : 'Annual avoided-issue value',
            value: formatEuro(annualAvoidedIssueValue),
            description: isGerman ? 'Wert durch weniger späte Zeichnungs-, Modell- oder Freigabeprobleme.' : 'Value from fewer late drawing, model, or release issues.',
        },
        {
            label: isGerman ? 'Gesamtwert' : 'Total value',
            value: formatEuro(totalValue),
            description: isGerman ? 'Geschätzter jährlicher Kundenwert aus Zeitersparnis und vermiedenen Problemen.' : 'Estimated annual customer value from time savings and avoided issues.',
            highlighted: true,
        },
    ];

    return (
        <section
            ref={sectionRef}
            id="roi-calculator"
            className="relative flex min-h-[100svh] scroll-mt-20 items-center overflow-hidden border-b border-stone-200/70 bg-white py-10 md:py-14"
        >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top_left,rgba(255,237,213,0.52),transparent_34%)]" />
            <div className="mx-auto max-w-[1180px] px-5 sm:px-6 lg:px-8 xl:px-10">
                <Reveal className="mx-auto max-w-3xl text-center">
                    <div className="site-kicker">ROI Calculator</div>
                    <h2 className="section-title mt-4 text-balance">
                        {isGerman ? 'Schätzen Sie den jährlichen Wert schnellerer Engineering Reviews' : 'Estimate the annual value of faster engineering review'}
                    </h2>
                    <p className="section-copy mx-auto mt-4 max-w-2xl">
                        {isGerman
                            ? 'Passen Sie die wichtigsten Annahmen an und sehen Sie, wie weniger Review-Aufwand und weniger späte Probleme jährlichen Wert schaffen.'
                            : 'Adjust the core assumptions to see how reduced review effort and fewer late issues can translate into annual value.'}
                    </p>
                </Reveal>

                <Reveal delay={0.08} className="mx-auto mt-7 max-w-[1120px] md:mt-9">
                    <div className="warm-panel relative p-5 sm:p-6 lg:p-8">
                        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.56fr)_minmax(0,0.44fr)] lg:items-stretch">
                            <div className="flex h-full flex-col">
                                <h3 className="card-title">{isGerman ? 'Parameter' : 'Parameters'}</h3>
                                <p className="card-copy mt-3 max-w-xl">
                                    {isGerman
                                        ? 'Nutzen Sie eine konservative Teamsicht. Der Rechner nimmt als Zeitersparnis den höheren Wert aus 3 Stunden pro Ingenieur pro Woche oder 30% des aktuellen wöchentlichen Aufwands.'
                                        : 'Use a conservative team view. The calculator assumes time savings are the higher of 3 hours per engineer per week or 30% of the current weekly effort entered.'}
                                </p>

                                <div className="mt-6 flex flex-col gap-6 lg:mt-8 lg:flex-1 lg:justify-between">
                                    {roiInputs.map((input) => {
                                        const value = roiValues[input.key];
                                        const label = isGerman
                                            ? {
                                                engineers: 'Anzahl der Ingenieure',
                                                hoursPerWeek: 'Stunden pro Woche',
                                                hourlyRate: 'Durchschnittlicher Stundensatz',
                                            }[input.key]
                                            : input.label;

                                        return (
                                            <label key={input.key} htmlFor={`roi-${input.key}`} className="block">
                                                <div className="flex items-baseline justify-between gap-4">
                                                    <span className="text-sm font-semibold text-gray-950 sm:text-base">
                                                        {label}
                                                    </span>
                                                    <span className="text-sm font-semibold text-primary">
                                                        {input.formatValue(value)}
                                                    </span>
                                                </div>
                                                <input
                                                    id={`roi-${input.key}`}
                                                    type="range"
                                                    min={input.min}
                                                    max={input.max}
                                                    step={input.step}
                                                    value={value}
                                                    onChange={(event) => {
                                                        const nextValue = Number(event.target.value);
                                                        setRoiValues((current) => ({
                                                            ...current,
                                                            [input.key]: nextValue,
                                                        }));
                                                    }}
                                                    style={{ background: getRangeFill(value, input.min, input.max) }}
                                                    className="mt-4 h-2 w-full cursor-pointer appearance-none rounded-full outline-none transition focus-visible:ring-4 focus-visible:ring-orange-500/15 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-[3px] [&::-moz-range-thumb]:border-white [&::-moz-range-thumb]:bg-gray-950 [&::-moz-range-thumb]:shadow-[0_8px_18px_-8px_rgba(17,24,39,0.6)] [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-[3px] [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:bg-gray-950 [&::-webkit-slider-thumb]:shadow-[0_8px_18px_-8px_rgba(17,24,39,0.6)]"
                                                />
                                            </label>
                                        );
                                    })}
                                </div>
                            </div>

                            <div className="grid gap-4" aria-live="polite">
                                {results.map((result) => (
                                    <div
                                        key={result.label}
                                        className={`rounded-[1.5rem] border px-5 py-4 shadow-[0_18px_46px_-38px_rgba(17,24,39,0.22)] sm:px-6 ${
                                            result.highlighted
                                                ? 'border-orange-200 bg-[#fff7ed]'
                                                : 'border-stone-200/90 bg-white'
                                        }`}
                                    >
                                        <div className="text-sm font-semibold text-gray-600">
                                            {result.label}
                                        </div>
                                        <div
                                            className={`mt-2 text-4xl font-semibold tracking-tight sm:text-[2.55rem] ${
                                                result.highlighted ? 'text-primary' : 'text-gray-950'
                                            }`}
                                        >
                                            {result.value}
                                        </div>
                                        <p className="mt-2 text-sm leading-6 text-gray-600">
                                            {result.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-6 rounded-[1.5rem] border border-stone-200/80 bg-white/80 px-5 py-4 text-sm leading-7 text-gray-600 sm:px-6">
                            {isGerman ? (
                                <>
                                    Bei {roiValues.engineers} Ingenieuren, {roiValues.hoursPerWeek} Stunden pro Woche und einem durchschnittlichen Stundensatz von {formatEuro(roiValues.hourlyRate)} erwarten wir einen jährlichen Zeitwert von{' '}
                                    <span className="font-semibold text-gray-950">{formatEuro(annualTimeSavingValue)}</span> und einen jährlichen Wert vermiedener Probleme von{' '}
                                    <span className="font-semibold text-gray-950">{formatEuro(annualAvoidedIssueValue)}</span>. Das ergibt einen Gesamtwert von{' '}
                                    <span className="font-semibold text-primary">{formatEuro(totalValue)}</span>. Zusätzlich nehmen wir an, dass jeder Ingenieur mindestens 1 Problem pro Jahr vermeidet, mit durchschnittlichen vermiedenen Kosten von {formatEuro(AVOIDED_COST_PER_ISSUE)} pro Problem.
                                </>
                            ) : (
                                <>
                                    Assuming {roiValues.engineers} engineers spend {roiValues.hoursPerWeek} hours per week with an average hourly rate of {formatEuro(roiValues.hourlyRate)}, we expect an annual time-saving value of{' '}
                                    <span className="font-semibold text-gray-950">{formatEuro(annualTimeSavingValue)}</span> and annual avoided-issue value of{' '}
                                    <span className="font-semibold text-gray-950">{formatEuro(annualAvoidedIssueValue)}</span>, giving total value of{' '}
                                    <span className="font-semibold text-primary">{formatEuro(totalValue)}</span>. We additionally assume every engineer avoids at least 1 issue per year, with an average avoided cost per issue of {formatEuro(AVOIDED_COST_PER_ISSUE)}.
                                </>
                            )}
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}

export default function Product() {
    const { locale, localizePath } = useLocale();
    const isGerman = locale === 'de';
    const activeProofItems = isGerman ? proofItemsDe : proofItems;
    const activeProblemCards = isGerman ? problemCardsDe : problemCards;
    const activeSolutionBlocks = isGerman ? solutionBlocksDe : solutionBlocks;
    const activeEnterprisePillars = isGerman
        ? [
            {
                title: 'Funktioniert mit Ihrem Engineering-Stack',
                body: 'Verbinden Sie Review-Kontext aus CAD-Modellen, Fertigungszeichnungen, BOMs, PLM/PDM-Daten und internen Review-Regeln.',
                tags: integrationPillar.tags,
            },
            {
                title: 'Für Datensouveränität entwickelt',
                body: 'Halten Sie sensible Engineering-Daten in genehmigten Umgebungen mit begrenztem Zugriff, kontrollierten KI-Workflows und ingenieurgeprüften Ergebnissen.',
                tags: sovereigntyPillar.tags,
            },
        ]
        : [integrationPillar, sovereigntyPillar];
    const activeTrustCards = isGerman
        ? [
            {
                title: 'Kein Tool-Ersatz',
                body: 'Arbeitet um Ihren bestehenden CAD-, PDM-, PLM- und Freigabeprozess herum.',
            },
            {
                title: 'Keine unkontrollierte Datenbewegung',
                body: 'Sensible Dateien bleiben innerhalb genehmigter Umgebungen und Zugriffsgrenzen.',
            },
            {
                title: 'Ingenieurkontrollierte KI',
                body: 'Ergebnisse bleiben prüfbar, erklärbar und an menschliche Freigabe gebunden.',
            },
            {
                title: 'Sauberere Freigabedaten',
                body: 'Reduziert Inkonsistenzen über Zeichnungen, BOMs, Teiledaten und Review-Datensätze hinweg.',
            },
        ]
        : trustCards;
    const snapSectionRefs = useRef<Array<HTMLElement | null>>([]);
    const touchStartYRef = useRef(0);
    const snapStateRef = useRef({
        isSnapping: false,
    });
    const setSnapSectionRef = (index: number) => (element: HTMLElement | null) => {
        snapSectionRefs.current[index] = element;
    };

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        const isInteractiveTarget = (target: EventTarget | null) => {
            return target instanceof Element && Boolean(
                target.closest('a, button, input, textarea, select, label, [role="button"], [data-snap-ignore="true"]')
            );
        };

        const getSections = () => snapSectionRefs.current.filter(Boolean) as HTMLElement[];

        const getCurrentSectionIndex = (sections = getSections()) => {
            const viewportAnchor = window.scrollY + window.innerHeight * 0.42;

            return sections.reduce(
                (nearest, section, index) => {
                    const distance = Math.abs(section.offsetTop - viewportAnchor);

                    if (distance < nearest.distance) {
                        return { index, distance };
                    }

                    return nearest;
                },
                { index: 0, distance: Number.POSITIVE_INFINITY }
            ).index;
        };

        const canScrollWithinCurrentPanel = (direction: 1 | -1) => {
            const sections = getSections();
            const currentSection = sections[getCurrentSectionIndex(sections)];
            if (!currentSection) return false;

            const rect = currentSection.getBoundingClientRect();

            if (direction > 0) {
                return rect.bottom > window.innerHeight + 24;
            }

            return rect.top < -24;
        };

        const snapToPanel = (direction: 1 | -1) => {
            if (snapStateRef.current.isSnapping) return false;

            const sections = getSections();
            const currentIndex = getCurrentSectionIndex(sections);
            const targetIndex = Math.max(0, Math.min(sections.length - 1, currentIndex + direction));
            const target = sections[targetIndex];

            if (!target || targetIndex === currentIndex) return false;

            const targetTop = Math.round(target.getBoundingClientRect().top + window.scrollY);

            snapStateRef.current.isSnapping = true;
            window.scrollTo({
                top: targetTop,
                behavior: prefersReducedMotion ? 'auto' : 'smooth',
            });

            window.setTimeout(() => {
                window.scrollTo({ top: targetTop, behavior: 'auto' });
                snapStateRef.current.isSnapping = false;
            }, prefersReducedMotion ? 180 : 820);

            return true;
        };

        const handleWheel = (event: WheelEvent) => {
            if (isInteractiveTarget(event.target)) return;
            if (Math.abs(event.deltaY) < 18) return;
            if (snapStateRef.current.isSnapping) {
                event.preventDefault();
                return;
            }

            const direction = event.deltaY > 0 ? 1 : -1;
            if (canScrollWithinCurrentPanel(direction)) return;

            if (snapToPanel(direction)) {
                event.preventDefault();
            }
        };

        const handleTouchStart = (event: TouchEvent) => {
            touchStartYRef.current = event.touches[0]?.clientY ?? 0;
        };

        const handleTouchEnd = (event: TouchEvent) => {
            if (isInteractiveTarget(event.target)) return;

            const endY = event.changedTouches[0]?.clientY ?? touchStartYRef.current;
            const deltaY = touchStartYRef.current - endY;

            if (Math.abs(deltaY) < 54) return;
            if (canScrollWithinCurrentPanel(deltaY > 0 ? 1 : -1)) return;
            snapToPanel(deltaY > 0 ? 1 : -1);
        };

        window.addEventListener('wheel', handleWheel, { passive: false });
        window.addEventListener('touchstart', handleTouchStart, { passive: true });
        window.addEventListener('touchend', handleTouchEnd, { passive: true });

        return () => {
            window.removeEventListener('wheel', handleWheel);
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchend', handleTouchEnd);
        };
    }, []);

    return (
        <>
            <PageMeta
                title={isGerman ? 'RapidDraft | KI für CAD Reviews und Fertigungszeichnungen' : 'RapidDraft | AI for CAD reviews and manufacturing drawings'}
                description={isGerman
                    ? 'RapidDraft hilft Engineering-Teams, Design Reviews zu beschleunigen, fertigungsgerechte Zeichnungen schneller zu erstellen und Entscheidungslogik über CAD-Workflows hinweg zu bewahren.'
                    : 'RapidDraft helps engineering teams accelerate design reviews, generate manufacturing-ready drawings, and retain engineering decision logic across CAD workflows.'}
                path={isGerman ? '/de' : '/'}
            />

            <section
                ref={setSnapSectionRef(0)}
                className="hero-mesh relative min-h-[100svh] scroll-mt-20 overflow-hidden border-b border-stone-200/70"
            >
                <img
                    src="/Jet_Engine_over_CAD%20Drawing.png"
                    alt=""
                    className="pointer-events-none absolute left-[58%] top-[53%] z-0 w-[920px] max-w-none -translate-x-1/2 -translate-y-1/2 select-none object-contain opacity-95 drop-shadow-[0_34px_46px_rgba(17,24,39,0.2)] sm:left-[62%] sm:w-[1040px] lg:left-[66%] lg:w-[1160px] xl:left-[68%] xl:w-[1280px]"
                    draggable={false}
                />
                <div className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-[62%] bg-[linear-gradient(90deg,rgba(255,250,247,0.92)_0%,rgba(255,250,247,0.82)_44%,rgba(255,250,247,0.34)_76%,transparent_100%)] backdrop-blur-[2px] [mask-image:linear-gradient(90deg,black_0%,black_72%,transparent_100%)]" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-32 bg-gradient-to-t from-white/80 to-transparent" />

                <div className="relative z-10 mx-auto grid min-h-[calc(100svh-1px)] max-w-[1280px] items-center px-5 pb-10 pt-28 sm:px-6 sm:pt-32 lg:px-8 lg:pb-14 lg:pt-32 xl:px-10">
                    <Reveal className="max-w-[620px] text-left">
                        <div className="site-kicker">
                            {isGerman ? 'KI für CAD Reviews und Fertigungszeichnungen' : 'AI for CAD reviews and manufacturing drawings'}
                        </div>
                        <h1 className="mt-5 text-balance text-[2.45rem] font-semibold leading-[0.98] tracking-tight text-gray-950 sm:text-[3rem] lg:text-[3.65rem]">
                            {isGerman ? 'Engineering-Entscheidungen und Zeichnungsfreigaben beschleunigen' : 'Accelerate engineering decisions and drawing release'}
                        </h1>
                        <p className="mt-5 max-w-[34rem] text-[0.98rem] leading-7 text-gray-600 sm:text-[1.05rem] sm:leading-8">
                            {isGerman
                                ? 'RapidDraft hilft Engineering-Teams, Review-Probleme früher zu erkennen, fertigungsgerechte Zeichnungen schneller zu erstellen und Entscheidungskontext zu bewahren, der sonst in E-Mails, PDFs und Meetings verloren geht.'
                                : 'RapidDraft helps engineering teams catch review issues earlier, generate manufacturing-ready drawings faster, and retain decision context that usually gets lost across emails, PDFs, and meetings.'}
                        </p>
                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <Link to={localizePath('/book-demo')} className="btn-primary w-full sm:w-auto">
                                {isGerman ? 'Demo buchen' : 'Book a Demo'}
                            </Link>
                            <Link to={localizePath('/deal-room')} className="btn-secondary w-full sm:w-auto">
                                {isGerman ? 'Deal Room ansehen' : 'Explore Deal Room'}
                            </Link>
                        </div>
                    </Reveal>
                </div>
            </section>

            <section
                ref={setSnapSectionRef(1)}
                className="flex min-h-[100svh] scroll-mt-20 items-center bg-[#fff8f3] py-12 md:py-16"
            >
                <div className="mx-auto max-w-[1180px] translate-y-6 px-5 sm:px-6 md:translate-y-8 lg:px-8 xl:px-10">
                    <Reveal className="mx-auto mb-10 max-w-3xl text-center">
                        <h2 className="section-title text-balance">
                            {isGerman ? 'Wiederholte Arbeit reduzieren, bevor sie die Freigabe verzögert' : 'Reduce repeated work before it delays release'}
                        </h2>
                        <p className="section-copy mx-auto mt-5 max-w-2xl">
                            {isGerman
                                ? 'RapidDraft bringt schnelleres Feedback, weniger Iterationen und weniger manuelle Prüfungen in Workflows, in denen Zeichnungen, Reviews und Freigabebereitschaft Teams noch ausbremsen.'
                                : 'RapidDraft brings faster feedback, fewer iterations, and less manual checking into the workflows where drawings, reviews, and release readiness still slow teams down.'}
                        </p>
                    </Reveal>
                    <ProofStrip
                        items={activeProofItems}
                        microcopy={isGerman
                            ? 'Manuelle Prüfungen, Neuzeichnen und Review-Engpässe vor der Freigabe reduzieren.'
                            : 'Reduce manual checking, redrafting, and review bottlenecks before release.'}
                    />
                </div>
            </section>

            <section
                ref={setSnapSectionRef(2)}
                className="flex min-h-[100svh] scroll-mt-20 items-center overflow-hidden bg-white py-12 md:py-16"
            >
                <div className="mx-auto grid max-w-[1180px] gap-8 px-5 sm:px-6 md:gap-10 lg:grid-cols-[minmax(0,0.48fr)_minmax(0,0.52fr)] lg:items-center lg:px-8 xl:px-10">
                    <Reveal className="max-w-[720px]">
                        <div className="site-kicker">
                            {isGerman ? 'Warum Engineering-Kontext verloren geht' : 'Why engineering context gets lost'}
                        </div>
                        <h2 className="mt-5 text-balance text-[2.25rem] font-semibold leading-[1.02] tracking-tight text-gray-950 sm:text-[2.8rem] lg:text-[3.25rem]">
                            {isGerman ? 'Zwischen Design-Iterationen gehen Engineering-Entscheidungen verloren' : 'Between design iterations, engineering decisions get lost'}
                        </h2>
                        <p className="section-copy mt-5 max-w-2xl">
                            {isGerman
                                ? 'Engineering-Dokumentation verbraucht viel Entwicklungszeit, und zu viel dieser Arbeit wird bei jeder Revision neu erstellt.'
                                : 'Engineering documentation consumes a large share of engineering time, and too much of that effort gets recreated on every revision.'}
                        </p>
                        <div className="mt-5 max-w-2xl space-y-3">
                            <p className="text-base leading-8 text-gray-600">
                                {isGerman
                                    ? 'Zeichnungen, Review-Kommentare, Fertigungsregeln und Lessons Learned wandern in getrennte Tools, statt am 3D-Modell zu bleiben.'
                                    : 'Drawings, review comments, manufacturing constraints, and lessons learned drift into disconnected tools instead of staying attached to the 3D model.'}
                            </p>
                            <p className="text-base leading-8 text-gray-600">
                                {isGerman
                                    ? 'Das Ergebnis: Teams wiederholen Prüfungen, erstellen Dokumentation neu und diskutieren Entscheidungen erneut, die beim Design hätten bleiben sollen.'
                                    : 'The result: teams redo checks, recreate documentation, and revisit decisions that should have stayed with the design.'}
                            </p>
                        </div>
                    </Reveal>

                    <div className="grid gap-4 sm:grid-cols-2">
                        {activeProblemCards.map((card, index) => (
                            <Reveal key={card.title} delay={index * 0.04}>
                                <article className="h-full rounded-[1.45rem] border border-stone-200/90 bg-white p-5 shadow-[0_18px_42px_-34px_rgba(17,24,39,0.16)]">
                                    <div className="card-index">0{index + 1}</div>
                                    <h3 className="card-title mt-4">
                                        {card.title}
                                    </h3>
                                    <p className="card-copy mt-3">
                                        {card.description}
                                    </p>
                                </article>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            <section
                ref={setSnapSectionRef(3)}
                className="flex min-h-[100svh] scroll-mt-20 items-center overflow-hidden bg-[#fff8f3] py-12 md:py-16"
            >
                <div className="mx-auto max-w-[1180px] px-5 sm:px-6 lg:px-8 xl:px-10">
                    <Reveal className="mx-auto max-w-4xl text-center">
                        <div className="site-kicker">
                            {isGerman ? 'Wie RapidDraft die Lücke schließt' : 'How RapidDraft closes the gap'}
                        </div>
                        <h2 className="section-title mx-auto mt-5 max-w-4xl text-balance">
                            {isGerman ? 'Fragmentierte Review-Arbeit in einen verbundenen Freigabe-Workflow verwandeln' : 'Turn fragmented review work into a connected release workflow'}
                        </h2>
                        <p className="section-copy mx-auto mt-5 max-w-4xl">
                            {isGerman
                                ? 'RapidDraft hält Zeichnungsabsicht, Review-Entscheidungen und Fertigungsfeedback am Design, damit Teams schneller von der Geometrieänderung zur Zeichnungsfreigabe kommen.'
                                : 'RapidDraft keeps drafting intent, review decisions, and manufacturing feedback attached to the design so teams can move faster from geometry change to drawing release.'}
                        </p>
                    </Reveal>

                    <div className="mt-8 grid gap-4 md:grid-cols-2 lg:mt-10">
                        {activeSolutionBlocks.map((capability, index) => (
                            <Reveal key={capability.title} delay={0.04 + index * 0.04}>
                                <article className="h-full rounded-[1.45rem] border border-stone-200/90 bg-white p-5 shadow-[0_20px_50px_-38px_rgba(17,24,39,0.2)] sm:p-6">
                                    <div className="card-index">0{index + 1}</div>
                                    <h3 className="card-title mt-4">
                                        {capability.title}
                                    </h3>
                                    <p className="card-copy mt-3">
                                        {capability.description}
                                    </p>
                                    <ul className="mt-4 space-y-2.5">
                                        {capability.bullets.map((bullet) => (
                                            <li key={bullet} className="bullet-row">
                                                <span className="bullet-icon">
                                                    <Check className="h-3 w-3 text-primary" />
                                                </span>
                                                <span className="bullet-copy">{bullet}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </article>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            <section
                ref={setSnapSectionRef(4)}
                className="relative flex min-h-[100svh] scroll-mt-20 items-center overflow-hidden border-y border-stone-200/70 bg-white py-12 md:py-16"
            >
                <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8 xl:px-10">
                    <Reveal className="mx-auto max-w-[980px] text-center">
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                            {isGerman ? 'ENTERPRISE-READY KI REVIEW' : 'ENTERPRISE-READY AI REVIEW'}
                        </p>
                        <h2 className="section-title mx-auto mt-5 max-w-4xl text-balance">
                            {isGerman ? 'Funktioniert mit Ihrem Stack. Hält Ihre Daten sicher.' : 'Works with your stack. Keeps your data secure.'}
                        </h2>
                        <p className="section-copy mx-auto mt-5 max-w-4xl">
                            {isGerman
                                ? 'RapidDraft bringt KI-gestütztes Review in bestehende CAD-, Zeichnungs-, BOM- und PLM-Workflows, während Tools, Freigabepunkte und sensible Engineering-Daten unter Ihrer Kontrolle bleiben.'
                                : 'RapidDraft brings AI-assisted review into your existing CAD, drawing, BOM, and PLM workflows while keeping tools, approval gates, and sensitive engineering data under your control.'}
                        </p>
                    </Reveal>

                    <Reveal delay={0.06} className="mt-8 grid gap-5 md:grid-cols-2 lg:mt-10">
                        {activeEnterprisePillars.map((pillar, index) => {
                            const isSovereignty = index === 1;

                            return (
                                <article
                                    key={pillar.title}
                                    className={[
                                        'flex h-full flex-col rounded-[2rem] border p-6 shadow-[0_24px_70px_-54px_rgba(15,23,42,0.18)] sm:p-7 lg:p-8',
                                        isSovereignty
                                            ? 'border-orange-200/70 bg-[linear-gradient(180deg,rgba(255,247,237,0.86),rgba(255,255,255,0.96))]'
                                            : 'border-stone-200/80 bg-white/80',
                                    ].join(' ')}
                                >
                                    <span className="mb-5 block h-1.5 w-10 rounded-full bg-primary" aria-hidden="true" />
                                    <h3 className="text-2xl font-semibold tracking-tight text-gray-950 sm:text-[1.7rem]">
                                        {pillar.title}
                                    </h3>
                                    <p className="mt-4 text-base leading-8 text-gray-600">
                                        {pillar.body}
                                    </p>
                                    <div className="mt-6 flex flex-wrap gap-2.5">
                                        {pillar.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className={[
                                                    'rounded-full border px-3 py-2 text-[13px] font-medium leading-none',
                                                    tag === 'GDPR-Compliant'
                                                        ? 'border-orange-200 bg-orange-50/80 text-primary'
                                                        : 'border-stone-200/80 bg-white/80 text-gray-700',
                                                ].join(' ')}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </article>
                            );
                        })}
                    </Reveal>

                    <Reveal delay={0.1} className="mt-4">
                        <div className="rounded-[1.7rem] border border-[#262d3f] bg-[linear-gradient(140deg,#171d2b_0%,#1d2435_56%,#2a2331_100%)] px-6 py-5 text-white shadow-[0_18px_45px_-34px_rgba(17,24,39,0.55)] sm:px-7 md:flex md:items-center md:justify-between md:gap-8">
                            <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                                {isGerman ? 'RapidDraft KI-Review-Layer' : 'RapidDraft AI review layer'}
                            </h3>
                            <p className="mt-2 max-w-2xl text-sm leading-7 text-white/70 md:mt-0 md:text-right sm:text-base">
                                {isGerman
                                    ? 'Zeichnungen analysieren · Regeln anwenden · Probleme sichtbar machen · Entscheidungen erfassen'
                                    : 'Analyze drawings · apply rules · surface issues · capture decisions'}
                            </p>
                        </div>
                    </Reveal>

                    <Reveal delay={0.14} className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                        {activeTrustCards.map((card) => (
                            <article
                                key={card.title}
                                className="rounded-[1.35rem] border border-stone-200/75 bg-white/75 p-5 shadow-[0_18px_48px_-42px_rgba(15,23,42,0.18)]"
                            >
                                <span className="mb-4 flex h-6 w-6 items-center justify-center rounded-full bg-orange-50 text-primary" aria-hidden="true">
                                    <Check className="h-3.5 w-3.5" />
                                </span>
                                <h3 className="text-base font-semibold text-gray-950">
                                    {card.title}
                                </h3>
                                <p className="mt-2 text-sm leading-6 text-gray-600">
                                    {card.body}
                                </p>
                            </article>
                        ))}
                    </Reveal>
                </div>
            </section>

            <RoiCalculatorSection sectionRef={setSnapSectionRef(5)} />

            <section
                ref={setSnapSectionRef(6)}
                className="hero-mesh relative flex min-h-[100svh] scroll-mt-20 items-center overflow-hidden border-t border-stone-200/70 py-16 md:py-20"
            >
                <div className="mx-auto max-w-[1180px] px-5 sm:px-6 lg:px-8 xl:px-10">
                    <Reveal className="mx-auto max-w-[880px] text-center">
                        <h2 className="section-title text-balance">
                            {isGerman ? 'Mehr Geschwindigkeit und Nachvollziehbarkeit in die Zeichnungsfreigabe bringen' : 'Bring speed and traceability to drawing release'}
                        </h2>
                        <p className="section-copy mx-auto mt-5 max-w-3xl">
                            {isGerman
                                ? 'Sehen Sie, wie RapidDraft Ihrem Team hilft, Review-Aufwand zu reduzieren, fertigungsgerechte Zeichnungen schneller zu erstellen und Entscheidungskontext über Revisionen hinweg zu bewahren.'
                                : 'See how RapidDraft helps your team reduce review effort, generate manufacturing-ready drawings faster, and retain decision context across revisions.'}
                        </p>
                        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                            <Link to={localizePath('/book-demo')} className="btn-primary w-full sm:w-auto">
                                {isGerman ? 'Demo buchen' : 'Book a Demo'}
                            </Link>
                            <Link to={localizePath('/use-cases')} className="btn-secondary w-full sm:w-auto">
                                {isGerman ? 'Anwendungen ansehen' : 'See Use Cases'}
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </div>
                    </Reveal>
                </div>
            </section>
        </>
    );
}
