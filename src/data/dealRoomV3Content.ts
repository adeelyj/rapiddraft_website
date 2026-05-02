import { type ContactPerson, type DisclosureItem } from './dealRoomContent';

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
    faqs: DisclosureItem[];
    contact: ContactPerson;
    contactIntroTitle: string;
    contactIntroBody: string;
    contactCtaLabel?: string;
};

export const defaultDealRoomV3Content: DealRoomV3Content = {
    heroTitle: 'A simple path from first review to pilot execution.',
    heroBody:
        'This deal room is designed for the next stage of the conversation: aligning on fit, selecting the right pilot structure, and moving into execution with clarity.',
    primaryStepId: 'nda',
    secondaryStepId: 'offer-selection',
    onboardingSteps: [
        {
            id: 'nda',
            title: 'NDA + LOI',
            summary: 'Share the details needed so we can send both documents together.',
            detailTitle: 'Start with the NDA and LOI together.',
            detailBody:
                'We start by collecting the company, workflow, and environment details needed to prepare both the NDA and the LOI. That keeps the process tighter and lets us send both documents together.',
            kind: 'document',
            actions: [
                {
                    label: 'Start NDA + LOI',
                    variant: 'primary',
                    helper: 'Share the details needed for us to send the NDA and LOI together. Once they are signed, we will set up the Discussion meeting.',
                },
            ],
        },
        {
            id: 'discussion',
            title: 'Discussion',
            summary: 'Review the workflow, constraints, and fit.',
            detailTitle: 'Align on the workflow we are evaluating.',
            detailBody:
                'This step is where we review the release workflow, the current friction points, and the environment around it. The goal is to understand whether RapidDraft is a strong fit and what the pilot should focus on.',
            kind: 'discussion',
            bullets: [
                'Workflow and review process',
                'CAD environment and standards',
                'Current bottlenecks and constraints',
                'Target outcomes for the pilot',
            ],
        },
        {
            id: 'offer-selection',
            title: 'Offer Selection',
            summary: 'Start with the level of commitment that matches your readiness.',
            detailTitle: 'Start with one workflow. Prove value before rollout.',
            detailBody:
                'Every engagement is scoped around a priority engineering workflow, agreed success metrics, required inputs, and a clear decision point. Start with the level of commitment that matches your readiness.',
            kind: 'offers',
            offers: [
                {
                    title: 'Assess',
                    subtext: 'Best for teams exploring whether RapidDraft fits their engineering workflow.',
                    description:
                        'A short diagnostic engagement to understand your use case, review available drawings or engineering inputs, assess workflow fit, and define the right pilot scope before committing to a proof-of-value pilot.',
                    details: [
                        'Use-case and workflow assessment',
                        'Drawing/sample review',
                        'Technical and operational feasibility check',
                        'Success metric proposal',
                        'Recommended pilot scope',
                    ],
                    footer: 'Typical duration: 2–3 weeks',
                },
                {
                    title: 'Proof-of-Value Pilot',
                    subtext: 'Best for teams ready to validate measurable value in one defined workflow.',
                    description:
                        'A focused pilot to configure RapidDraft for one priority workflow, run structured working sessions, review real engineering inputs, and measure impact against agreed KPIs.',
                    details: [
                        'Scoped pilot setup',
                        'Use-case-specific configuration',
                        'Review of real workflow samples',
                        'Weekly working sessions',
                        'KPI measurement',
                        'Final value assessment',
                        'Recommended next step',
                    ],
                    footer: 'Typical duration: 6–10 weeks',
                    badge: 'Recommended',
                    recommended: true,
                },
                {
                    title: 'Production Rollout',
                    subtext: 'Best for teams preparing to move from pilot validation to recurring production use.',
                    description:
                        'A pilot-to-production engagement that turns validated workflow value into a rollout plan, including deployment scope, governance, stakeholder alignment, integration planning, and production readiness.',
                    details: [
                        'Everything in Proof-of-Value Pilot',
                        'Rollout design',
                        'Integration planning',
                        'Governance alignment',
                        'Deployment roadmap',
                        'Production readiness review',
                        'Expansion plan',
                    ],
                    footer: 'Typical duration: 8–12 weeks',
                },
            ],
            scopeTitle: 'Every engagement starts with a clear scope.',
            scopeBody:
                'Before work begins, we align on the priority workflow, success metrics, required inputs, stakeholder roles, and expected decision point. This keeps the engagement focused, measurable, and useful for deciding the next step.',
            scopeItems: [
                {
                    title: 'Priority workflow',
                    description: 'Defines where RapidDraft will be applied.',
                },
                {
                    title: 'Success metrics',
                    description: 'Makes value measurable.',
                },
                {
                    title: 'Required inputs',
                    description: 'Confirms drawings, models, rules, or samples are available.',
                },
                {
                    title: 'Stakeholder roles',
                    description: 'Clarifies ownership and feedback loops.',
                },
                {
                    title: 'Decision point',
                    description: 'Defines what happens after the engagement.',
                },
            ],
            scopeNote:
                'After the pilot, we define the right production path based on the validated workflow, rollout scope, and deployment needs.',
            finalCtaCopy:
                'Not sure where to start? We’ll help identify the right workflow and recommend the best starting point after a short demo.',
            finalCtaLabel: 'Book a Demo',
        },
        {
            id: 'agreement',
            title: 'Agreement',
            summary: 'Once NDA, LOI, and offer selection are complete, we send the Pilot Agreement.',
            detailTitle: 'Formalize the pilot structure.',
            detailBody:
                'Once the NDA and LOI are in place and the preferred offer is aligned, we send the Pilot Agreement to formalize scope, timing, responsibilities, and commercial terms.',
            kind: 'document',
        },
        {
            id: 'pilot-execution',
            title: 'Pilot Execution',
            summary: 'Launch the pilot, run it, and close with a clear outcome.',
            detailTitle: 'Run the pilot with clear scope and measurable outcomes.',
            detailBody:
                'The pilot starts with a defined workflow, a structured working cadence, and clear success criteria. At the end, we review the results and agree on the next step.',
            kind: 'execution',
            bullets: [
                'Launch the agreed pilot scope',
                'Review progress in working sessions',
                'Measure outcomes against agreed criteria',
                'Close with recommendation and handover',
            ],
        },
    ],
    overview: {
        title: 'Built for the release workflows where drawings still carry the work.',
        body:
            'RapidDraft helps engineering teams reduce repeated drawing and review effort, improve consistency, and move from design intent to release-ready output with more speed and control.',
    },
    faqs: [
        {
            question: 'Why do we start with the NDA and LOI?',
            answer: 'Because the discussion involves sensitive drawings, standards, workflow details, and the company information needed to prepare both documents together.',
        },
        {
            question: 'Is the LOI mandatory?',
            answer: 'Yes. The LOI is part of the standard process and is prepared together with the NDA in the first document step.',
        },
        {
            question: 'Where do the offers fit in?',
            answer: 'They are part of the onboarding flow and help define the right pilot structure before the Pilot Agreement is sent.',
        },
        {
            question: 'What happens after the Pilot Agreement is signed?',
            answer: 'The pilot moves into launch and execution against the agreed scope, working cadence, and success criteria.',
        },
        {
            question: 'Can the pilot be adapted to our workflow?',
            answer: 'Yes, within the agreed scope. The pilot is designed around a defined use case, not a generic demo.',
        },
    ],
    contactIntroTitle: 'Your point of contact throughout the process.',
    contactIntroBody:
        'For questions on scope, documents, offers, or next steps, your RapidDraft contact will help move the process forward clearly and efficiently.',
    contactCtaLabel: 'Email Your Contact',
    contact: {
        name: 'Adeel Yawar Jamil',
        title: 'Founder & Mechanical Engineering Lead',
        email: 'info@rapiddraft.ai',
        message: 'Direct contact for pilot setup, coordination, and follow-up.',
        image: '/media/adeel.jpg',
    },
};
