import { type ContactPerson, type DisclosureItem } from './dealRoomContent';
import { type Lang } from '../i18n/LanguageContext';

export type OnboardingAction = {
    label: string;
    variant?: 'primary' | 'secondary';
    helper?: string;
};

export type OnboardingOffer = {
    title: string;
    subtext: string;
    description: string;
    details: string[];
    footer: string;
    badge?: string;
    recommended?: boolean;
};

export type ScopeItem = {
    title: string;
    description: string;
};

export type OnboardingStepKind = 'document' | 'discussion' | 'offers' | 'execution';

export type OnboardingStep = {
    id: string;
    title: string;
    summary: string;
    detailTitle: string;
    detailBody: string;
    kind: OnboardingStepKind;
    actions?: OnboardingAction[];
    offers?: OnboardingOffer[];
    note?: string;
    bullets?: string[];
    sequence?: string[];
    microcopy?: string;
    scopeTitle?: string;
    scopeBody?: string;
    scopeItems?: ScopeItem[];
    scopeNote?: string;
    finalCtaCopy?: string;
    finalCtaLabel?: string;
};

export type DealRoomV3Content = {
    heroTitle: string;
    heroBody: string;
    primaryStepId: string;
    secondaryStepId: string;
    onboardingSteps: OnboardingStep[];
    overview: {
        title: string;
        body: string;
    };
    faqTitle: string;
    faqIntro: string;
    faqs: DisclosureItem[];
    contact: ContactPerson;
    contactIntroTitle: string;
    contactIntroBody: string;
    contactCtaLabel?: string;
};

/* English (canonical). Also consumed by the Forward subsystem
   (src/forward/components/PilotOptions.tsx), which matches offer.title === 'Assess',
   so keep that tier title stable. */
export const defaultDealRoomV3Content: DealRoomV3Content = {
    heroTitle: 'From the first documents to a running pilot, in clear steps.',
    heroBody:
        'This room is for the next stage of the conversation: the NDA and LOI, a look at the drawing-release workflow you want to test, the pilot scope, and the agreement. Each step is scoped, traceable, and runs on your infrastructure.',
    primaryStepId: 'nda',
    secondaryStepId: 'offer-selection',
    onboardingSteps: [
        {
            id: 'nda',
            title: 'NDA + LOI',
            summary: 'Share the details so we can prepare and send both documents together.',
            detailTitle: 'Start with the NDA and LOI together.',
            detailBody:
                'We start by collecting the company, workflow, and environment details needed to prepare both the NDA and the LOI, so they can go out together. Drawings, standards, and review logic are sensitive, and this keeps that covered from the first step.',
            kind: 'document',
            actions: [
                {
                    label: 'Start NDA + LOI',
                    variant: 'primary',
                    helper: 'Share the details we need to prepare the NDA and LOI. Once both are signed, we set up the discussion.',
                },
            ],
        },
        {
            id: 'discussion',
            title: 'Discussion',
            summary: 'Walk through the drawing-release workflow, the constraints, and the fit.',
            detailTitle: 'Walk through the drawing-release workflow we would test.',
            detailBody:
                'We go through the release workflow, where it gets stuck today, and the CAD and standards around it. The goal is to see whether RapidDraft is a strong fit and what one scoped pilot should focus on.',
            kind: 'discussion',
            bullets: [
                'The release workflow and where reviews stall',
                'CAD environment, PDM/PLM, and the standards you check against',
                'Current bottlenecks and constraints',
                'What a useful pilot result would look like',
            ],
        },
        {
            id: 'offer-selection',
            title: 'Offer Selection',
            summary: 'Start at the level of commitment that matches where you are.',
            detailTitle: 'Start with one workflow. See the result before any rollout.',
            detailBody:
                'Every engagement is scoped around one priority workflow, the success metric we agree on, the inputs it needs, and a clear decision point. Start at the level of commitment that matches where you are.',
            kind: 'offers',
            offers: [
                {
                    title: 'Assess',
                    subtext: 'For teams checking whether RapidDraft fits their release workflow.',
                    description:
                        'A short diagnostic: we go through your use case, review a few real drawings or release inputs, check the workflow fit, and define the scope for a pilot before you commit to one.',
                    details: [
                        'Use-case and workflow review',
                        'Review of sample drawings',
                        'Technical and operational feasibility check',
                        'Proposed success metric',
                        'Recommended pilot scope',
                    ],
                    footer: 'Typical duration: 2 to 3 weeks',
                },
                {
                    title: 'Proof-of-Value Pilot',
                    subtext: 'For teams ready to prove measurable value in one defined workflow.',
                    description:
                        'A focused pilot: we configure RapidDraft for one priority workflow, run working sessions on real drawings and release inputs, and measure the result against the metric we agreed on.',
                    details: [
                        'Scoped pilot setup',
                        'Configuration for your use case',
                        'Review of real workflow samples',
                        'Weekly working sessions',
                        'Measurement against the agreed metric',
                        'Final result review',
                        'Recommended next step',
                    ],
                    footer: 'Typical duration: 6 to 10 weeks',
                    badge: 'Recommended',
                    recommended: true,
                },
                {
                    title: 'Rollout',
                    subtext: 'For teams moving a proven workflow into recurring use.',
                    description:
                        'We turn a validated pilot into a rollout: the deployment scope, how it fits your release gate and PDM/PLM, who owns what, and what production readiness looks like.',
                    details: [
                        'Everything in the Proof-of-Value Pilot',
                        'Rollout scope',
                        'Integration with your release gate and PDM/PLM',
                        'Ownership and sign-off roles',
                        'Deployment plan',
                        'Production readiness review',
                        'Plan to expand to the next workflow',
                    ],
                    footer: 'Typical duration: 8 to 12 weeks',
                },
            ],
            scopeTitle: 'Every engagement starts with a clear scope.',
            scopeBody:
                'Before any work begins, we agree on the priority workflow, the success metric, the inputs it needs, who owns the sign-off, and the decision point at the end. That keeps the engagement focused and the result easy to judge.',
            scopeItems: [
                {
                    title: 'Priority workflow',
                    description: 'Where RapidDraft gets applied first.',
                },
                {
                    title: 'Success metric',
                    description: 'How we measure the result, in your units.',
                },
                {
                    title: 'Required inputs',
                    description: 'The drawings, models, rules, and samples it needs.',
                },
                {
                    title: 'Sign-off roles',
                    description: 'Who reviews, and who keeps the sign-off.',
                },
                {
                    title: 'Decision point',
                    description: 'What happens after the engagement.',
                },
            ],
            scopeNote:
                'After the pilot, we agree on the production path from the validated workflow, the rollout scope, and what deployment needs.',
            finalCtaCopy:
                'Not sure where to start? Bring one drawing-release process to a short demo and we will recommend the right starting point.',
            finalCtaLabel: 'Book a Demo',
        },
        {
            id: 'agreement',
            title: 'Agreement',
            summary: 'Once the NDA, LOI, and offer are settled, we send the pilot agreement.',
            detailTitle: 'Put the pilot in writing.',
            detailBody:
                'Once the NDA and LOI are in place and the offer is agreed, we send the pilot agreement: scope, timing, responsibilities, and commercial terms, so everyone works from the same document.',
            kind: 'document',
        },
        {
            id: 'pilot-execution',
            title: 'Pilot Execution',
            summary: 'Run the pilot against a defined scope and close with a clear result.',
            detailTitle: 'Run the pilot against a defined scope and a measurable result.',
            detailBody:
                'The pilot starts with one workflow, a working cadence, and the success criteria we set. At the end we review what RapidDraft caught and agree on the next step.',
            kind: 'execution',
            bullets: [
                'Start on the agreed pilot scope',
                'Review progress in working sessions',
                'Measure the result against the agreed criteria',
                'Close with a recommendation and handover',
            ],
        },
    ],
    overview: {
        title: 'Built for the release workflows where the drawing still carries the work.',
        body:
            'RapidDraft does the repetitive first pass on drawing release and design review, grounded in your own rules, and links every finding back to the rule or note it came from. The repeated review effort drops, the release stays consistent, and the engineer keeps the sign-off.',
    },
    faqTitle: 'Questions that usually come up at this stage.',
    faqIntro:
        'A few straight answers on process, scope, and what to expect from the pilot setup.',
    faqs: [
        {
            question: 'Why do we start with the NDA and LOI?',
            answer: 'Because the discussion involves your drawings, standards, and workflow details. The NDA and LOI are prepared together from the company information you share, so both can go out in one step.',
        },
        {
            question: 'Is the LOI mandatory?',
            answer: 'Yes. The LOI is part of the standard process and is prepared together with the NDA in the first step.',
        },
        {
            question: 'Where do the offers fit in?',
            answer: 'They come after the discussion and help set the pilot scope before the pilot agreement is sent.',
        },
        {
            question: 'What happens after the pilot agreement is signed?',
            answer: 'The pilot starts against the agreed scope, working cadence, and success criteria.',
        },
        {
            question: 'Can the pilot be adapted to our workflow?',
            answer: 'Yes, within the agreed scope. The pilot is built around one defined workflow, not a generic demo.',
        },
    ],
    contactIntroTitle: 'Your point of contact through the process.',
    contactIntroBody:
        'For questions on scope, the documents, the offers, or the next step, your RapidDraft contact moves things forward.',
    contactCtaLabel: 'Email Your Contact',
    contact: {
        name: 'Adeel Yawar Jamil',
        title: 'Founder & Mechanical Engineering Lead',
        email: 'info@rapiddraft.ai',
        message: 'Direct contact for pilot setup, coordination, and follow-up.',
        image: '/media/adeel.jpg',
    },
};

/* German. Technical loanwords (CAD, PDM/PLM, EMPB, FAIR, BOM, Release Gate, Pilot,
   Rollout) are kept as the buyer uses them; the prose is fully German. */
const dealRoomV3ContentDe: DealRoomV3Content = {
    heroTitle: 'Von den ersten Dokumenten zum laufenden Pilot, in klaren Schritten.',
    heroBody:
        'Dieser Raum ist für die nächste Phase des Gesprächs: NDA und LOI, ein Blick auf den Zeichnungs-Freigabe-Workflow, den Sie testen wollen, der Pilotumfang und die Vereinbarung. Jeder Schritt ist eng gefasst, rückverfolgbar und läuft auf Ihrer Infrastruktur.',
    primaryStepId: 'nda',
    secondaryStepId: 'offer-selection',
    onboardingSteps: [
        {
            id: 'nda',
            title: 'NDA + LOI',
            summary: 'Teilen Sie die Angaben, damit wir beide Dokumente gemeinsam vorbereiten können.',
            detailTitle: 'Mit NDA und LOI gemeinsam beginnen.',
            detailBody:
                'Wir beginnen damit, die Angaben zu Unternehmen, Workflow und Umgebung zu erfassen, die wir brauchen, um NDA und LOI vorzubereiten, damit beide zusammen herausgehen. Zeichnungen, Normen und Prüflogik sind sensibel, und so ist das vom ersten Schritt an abgedeckt.',
            kind: 'document',
            actions: [
                {
                    label: 'NDA + LOI starten',
                    variant: 'primary',
                    helper: 'Teilen Sie die Angaben, die wir zur Vorbereitung von NDA und LOI brauchen. Sind beide unterschrieben, vereinbaren wir das Gespräch.',
                },
            ],
        },
        {
            id: 'discussion',
            title: 'Gespräch',
            summary: 'Den Zeichnungs-Freigabe-Workflow, die Randbedingungen und die Passung durchgehen.',
            detailTitle: 'Den Zeichnungs-Freigabe-Workflow durchgehen, den wir testen würden.',
            detailBody:
                'Wir gehen den Freigabe-Workflow durch, wo er heute hängen bleibt, und das CAD und die Normen drumherum. Das Ziel ist zu sehen, ob RapidDraft gut passt und worauf sich ein eng gefasster Pilot konzentrieren sollte.',
            kind: 'discussion',
            bullets: [
                'Der Freigabe-Workflow und wo Reviews ins Stocken geraten',
                'CAD-Umgebung, PDM/PLM und die Normen, gegen die Sie prüfen',
                'Aktuelle Engpässe und Randbedingungen',
                'Wie ein nützliches Pilotergebnis aussehen würde',
            ],
        },
        {
            id: 'offer-selection',
            title: 'Angebotswahl',
            summary: 'Beginnen Sie auf dem Niveau, das zu Ihrem Stand passt.',
            detailTitle: 'Mit einem Workflow beginnen. Das Ergebnis vor jedem Rollout sehen.',
            detailBody:
                'Jedes Engagement ist um einen priorisierten Workflow herum gefasst, die vereinbarte Erfolgskennzahl, die benötigten Eingaben und einen klaren Entscheidungspunkt. Beginnen Sie auf dem Niveau, das zu Ihrem Stand passt.',
            kind: 'offers',
            offers: [
                {
                    title: 'Einschätzung',
                    subtext: 'Für Teams, die prüfen, ob RapidDraft zu ihrem Freigabe-Workflow passt.',
                    description:
                        'Eine kurze Diagnose: Wir gehen Ihren Anwendungsfall durch, sehen uns einige echte Zeichnungen oder Freigabe-Eingaben an, prüfen die Passung des Workflows und legen den Umfang für einen Pilot fest, bevor Sie sich auf einen festlegen.',
                    details: [
                        'Prüfung von Anwendungsfall und Workflow',
                        'Durchsicht von Beispielzeichnungen',
                        'Technische und operative Machbarkeitsprüfung',
                        'Vorschlag für eine Erfolgskennzahl',
                        'Empfohlener Pilotumfang',
                    ],
                    footer: 'Typische Dauer: 2 bis 3 Wochen',
                },
                {
                    title: 'Pilot zum Wertnachweis',
                    subtext: 'Für Teams, die in einem definierten Workflow messbaren Wert nachweisen wollen.',
                    description:
                        'Ein fokussierter Pilot: Wir konfigurieren RapidDraft für einen priorisierten Workflow, führen Arbeitssitzungen an echten Zeichnungen und Freigabe-Eingaben durch und messen das Ergebnis an der vereinbarten Kennzahl.',
                    details: [
                        'Eng gefasstes Pilot-Setup',
                        'Konfiguration für Ihren Anwendungsfall',
                        'Durchsicht echter Workflow-Beispiele',
                        'Wöchentliche Arbeitssitzungen',
                        'Messung an der vereinbarten Kennzahl',
                        'Abschließende Ergebnisbewertung',
                        'Empfohlener nächster Schritt',
                    ],
                    footer: 'Typische Dauer: 6 bis 10 Wochen',
                    badge: 'Empfohlen',
                    recommended: true,
                },
                {
                    title: 'Rollout',
                    subtext: 'Für Teams, die einen bewährten Workflow in den laufenden Betrieb überführen.',
                    description:
                        'Wir machen aus einem validierten Pilot einen Rollout: der Einsatzumfang, wie er zu Ihrem Release Gate und PDM/PLM passt, wer was verantwortet und wie Produktionsreife aussieht.',
                    details: [
                        'Alles aus dem Pilot zum Wertnachweis',
                        'Rollout-Umfang',
                        'Integration in Ihr Release Gate und PDM/PLM',
                        'Verantwortung und Freigabe-Rollen',
                        'Einsatzplan',
                        'Prüfung der Produktionsreife',
                        'Plan zur Ausweitung auf den nächsten Workflow',
                    ],
                    footer: 'Typische Dauer: 8 bis 12 Wochen',
                },
            ],
            scopeTitle: 'Jedes Engagement beginnt mit einem klaren Umfang.',
            scopeBody:
                'Bevor die Arbeit beginnt, einigen wir uns auf den priorisierten Workflow, die Erfolgskennzahl, die benötigten Eingaben, wer die Freigabe verantwortet und den Entscheidungspunkt am Ende. So bleibt das Engagement fokussiert und das Ergebnis leicht zu beurteilen.',
            scopeItems: [
                {
                    title: 'Priorisierter Workflow',
                    description: 'Wo RapidDraft zuerst angewendet wird.',
                },
                {
                    title: 'Erfolgskennzahl',
                    description: 'Wie wir das Ergebnis messen, in Ihren Einheiten.',
                },
                {
                    title: 'Benötigte Eingaben',
                    description: 'Die Zeichnungen, Modelle, Regeln und Muster, die es braucht.',
                },
                {
                    title: 'Freigabe-Rollen',
                    description: 'Wer prüft und wer die Freigabe behält.',
                },
                {
                    title: 'Entscheidungspunkt',
                    description: 'Was nach dem Engagement passiert.',
                },
            ],
            scopeNote:
                'Nach dem Pilot einigen wir uns auf den Weg in den Betrieb, ausgehend vom validierten Workflow, dem Rollout-Umfang und dem, was der Einsatz braucht.',
            finalCtaCopy:
                'Nicht sicher, wo Sie anfangen sollen? Bringen Sie einen Zeichnungs-Freigabeprozess in eine kurze Demo, und wir empfehlen den richtigen Startpunkt.',
            finalCtaLabel: 'Demo buchen',
        },
        {
            id: 'agreement',
            title: 'Vereinbarung',
            summary: 'Sind NDA, LOI und Angebot geklärt, senden wir die Pilotvereinbarung.',
            detailTitle: 'Den Pilot schriftlich festhalten.',
            detailBody:
                'Sind NDA und LOI in Kraft und das Angebot vereinbart, senden wir die Pilotvereinbarung: Umfang, Zeitplan, Verantwortlichkeiten und kommerzielle Bedingungen, damit alle vom selben Dokument ausgehen.',
            kind: 'document',
        },
        {
            id: 'pilot-execution',
            title: 'Pilotdurchführung',
            summary: 'Den Pilot gegen einen definierten Umfang durchführen und mit einem klaren Ergebnis abschließen.',
            detailTitle: 'Den Pilot gegen einen definierten Umfang und ein messbares Ergebnis durchführen.',
            detailBody:
                'Der Pilot beginnt mit einem Workflow, einem Arbeitsrhythmus und den Erfolgskriterien, die wir festlegen. Am Ende sehen wir uns an, was RapidDraft gefunden hat, und einigen uns auf den nächsten Schritt.',
            kind: 'execution',
            bullets: [
                'Auf dem vereinbarten Pilotumfang starten',
                'Den Fortschritt in Arbeitssitzungen prüfen',
                'Das Ergebnis an den vereinbarten Kriterien messen',
                'Mit einer Empfehlung und Übergabe abschließen',
            ],
        },
    ],
    overview: {
        title: 'Gebaut für die Freigabe-Workflows, in denen die Zeichnung die Arbeit trägt.',
        body:
            'RapidDraft übernimmt den wiederkehrenden ersten Durchgang bei Zeichnungsfreigabe und Design-Review, verankert in Ihren eigenen Regeln, und verknüpft jeden Befund mit der Regel oder dem Hinweis, aus dem er stammt. Der wiederkehrende Review-Aufwand sinkt, die Freigabe bleibt konsistent, und der Ingenieur behält die Freigabe.',
    },
    faqTitle: 'Fragen, die in dieser Phase meist aufkommen.',
    faqIntro:
        'Ein paar klare Antworten zu Ablauf, Umfang und dem, was vom Pilot-Setup zu erwarten ist.',
    faqs: [
        {
            question: 'Warum beginnen wir mit NDA und LOI?',
            answer: 'Weil das Gespräch Ihre Zeichnungen, Normen und Workflow-Details betrifft. NDA und LOI werden gemeinsam aus den Unternehmensangaben vorbereitet, die Sie teilen, sodass beide in einem Schritt herausgehen.',
        },
        {
            question: 'Ist das LOI verpflichtend?',
            answer: 'Ja. Das LOI gehört zum Standardablauf und wird im ersten Schritt gemeinsam mit dem NDA vorbereitet.',
        },
        {
            question: 'Wo passen die Angebote hinein?',
            answer: 'Sie kommen nach dem Gespräch und helfen, den Pilotumfang festzulegen, bevor die Pilotvereinbarung gesendet wird.',
        },
        {
            question: 'Was passiert, nachdem die Pilotvereinbarung unterschrieben ist?',
            answer: 'Der Pilot startet gegen den vereinbarten Umfang, den Arbeitsrhythmus und die Erfolgskriterien.',
        },
        {
            question: 'Kann der Pilot an unseren Workflow angepasst werden?',
            answer: 'Ja, im vereinbarten Umfang. Der Pilot ist um einen definierten Workflow herum gebaut, nicht um eine generische Demo.',
        },
    ],
    contactIntroTitle: 'Ihr Ansprechpartner über den gesamten Ablauf.',
    contactIntroBody:
        'Bei Fragen zu Umfang, den Dokumenten, den Angeboten oder dem nächsten Schritt bringt Ihr RapidDraft-Ansprechpartner die Dinge voran.',
    contactCtaLabel: 'Ansprechpartner kontaktieren',
    contact: {
        name: 'Adeel Yawar Jamil',
        title: 'Gründer und Mechanical Engineering Lead',
        email: 'info@rapiddraft.ai',
        message: 'Direkter Kontakt für Pilot-Setup, Koordination und Nachverfolgung.',
        image: '/media/adeel.jpg',
    },
};

export const dealRoomV3Content: Record<Lang, DealRoomV3Content> = {
    en: defaultDealRoomV3Content,
    de: dealRoomV3ContentDe,
};
