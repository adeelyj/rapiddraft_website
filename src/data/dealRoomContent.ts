import {
    CircleCheckBig,
    Clock3,
    Flag,
    Target,
    UserRound,
    type LucideIcon,
} from 'lucide-react';

export type CTA = {
    label: string;
    href: string;
    variant?: 'primary' | 'secondary';
};

export type SnapshotItem = {
    label: string;
    value: string;
    icon: LucideIcon;
};

export type UseCaseItem = {
    title: string;
    description: string;
    impact: string;
    tag?: string;
};

export type ProcessStep = {
    title: string;
    description: string;
};

export type Offer = {
    title: string;
    bestFor: string;
    includes: string[];
    timeline: string;
    commercialModel: string;
    badge?: string;
    recommended?: boolean;
};

export type TimelinePhase = {
    phase: string;
    title: string;
    description: string;
};

export type DisclosureItem = {
    question: string;
    answer: string;
};

export type ContactPerson = {
    name: string;
    title: string;
    email: string;
    message: string;
    image?: string;
};

export type DealRoomContent = {
    customerName: string;
    subtitle: string;
    heroNote: string;
    heroPrimaryCta: CTA;
    heroSecondaryCta: CTA;
    snapshot: SnapshotItem[];
    overview: {
        title: string;
        paragraphs: string[];
        highlights: string[];
    };
    useCases: UseCaseItem[];
    process: ProcessStep[];
    offers: Offer[];
    timeline: TimelinePhase[];
    timelineNote: string;
    legal: DisclosureItem[];
    faqs: DisclosureItem[];
    contact: ContactPerson;
    finalCtas: {
        primary: CTA;
        secondary: CTA;
        supportingLine: string;
    };
};

export const defaultDealRoomContent: DealRoomContent = {
    customerName: '[Customer Name]',
    subtitle:
        'This is the central place to evaluate a RapidDraft pilot around your selected engineering workflow, stakeholders, and success criteria.',
    heroNote:
        'Prepared for [Customer Name]. Built to help engineering, IT, procurement, and management review one pilot opportunity from the same source of truth.',
    heroPrimaryCta: {
        label: 'Review Pilot Options',
        href: '#pilot-offers',
        variant: 'primary',
    },
    heroSecondaryCta: {
        label: 'Start with NDA',
        href: '#legal-process',
        variant: 'secondary',
    },
    snapshot: [
        {
            label: 'Use Case',
            value: '[Selected Use Case]',
            icon: Target,
        },
        {
            label: 'Objective',
            value: '[Pilot Objective]',
            icon: Flag,
        },
        {
            label: 'Value Areas',
            value: 'Reduced drawing effort, fewer review loops, improved consistency',
            icon: CircleCheckBig,
        },
        {
            label: 'Timeline',
            value: '8-10 weeks',
            icon: Clock3,
        },
        {
            label: 'Contact',
            value: 'Hasan Raza, Co-Founder, RapidDraft, hello@rapiddraft.ai',
            icon: UserRound,
        },
    ],
    overview: {
        title: 'A compact view of how RapidDraft fits the engineering workflow',
        paragraphs: [
            'RapidDraft helps engineering teams catch review issues earlier, generate manufacturing-ready drawings faster, and retain decision context that usually gets lost across emails, PDFs, and meetings.',
            'It keeps drafting intent, review decisions, and manufacturing feedback attached to the 3D model so teams spend less time rebuilding documentation, repeating checks, or re-explaining past decisions across functions.',
        ],
        highlights: [
            'Reduce redraw effort across revisions and release updates.',
            'Surface manufacturability and completeness issues earlier in the workflow.',
            'Keep drafting, validation, and stakeholder review aligned around the current model state.',
        ],
    },
    useCases: [
        {
            title: 'Supplier drawing packages',
            description:
                'Supplier-facing documentation is one of the clearest places to reduce back-and-forth loops and improve handoff quality.',
            impact: 'Improve release quality before the package goes out and reduce clarification loops with suppliers.',
            tag: 'Relevant for your team',
        },
        {
            title: 'Change-driven updates',
            description:
                'ECR and ECO work creates repeated drawing effort. RapidDraft helps teams focus on what changed instead of manually revalidating everything.',
            impact: 'Make revision-heavy workflows more measurable and reduce rework on release cycles.',
            tag: 'Relevant for engineering',
        },
        {
            title: 'New product development',
            description:
                'Drawings often lag behind the model in NPI workflows. RapidDraft helps documentation stay closer to the design as it evolves.',
            impact: 'Keep release documentation moving with fast design iteration and give reviewers earlier visibility.',
            tag: 'Relevant for program leads',
        },
    ],
    process: [
        {
            title: 'High-Level Discussion',
            description: 'Confirm the workflow, stakeholders, and where the current process creates repeated drafting or review effort.',
        },
        {
            title: 'Mutual NDA',
            description: 'Put confidentiality in place before sensitive files, standards, workflows, or internal constraints are shared.',
        },
        {
            title: 'Detailed Discovery',
            description: 'Review the target use case, sample data, standards, success criteria, and operational constraints in more detail.',
        },
        {
            title: 'Offer Selection',
            description: 'Choose the engagement model that best matches the maturity, urgency, and depth of validation required.',
        },
        {
            title: 'Optional LOI',
            description: 'Use an LOI when internal alignment is helpful before final contracting, especially around timing or commercial direction.',
        },
        {
            title: 'Pilot Agreement / SOW',
            description: 'Finalize the binding scope, fee, responsibilities, timeline, and IP boundaries for the selected pilot engagement.',
        },
        {
            title: 'Pilot Launch',
            description: 'Start the configured pilot with agreed working sessions, KPI tracking, and a clear evaluation path.',
        },
    ],
    offers: [
        {
            title: 'Discovery & Feasibility Sprint',
            bestFor: 'Customers who want to validate fit before launching a pilot.',
            includes: [
                'Use-case assessment',
                'Standards and sample review',
                'Feasibility analysis',
                'Success metric proposal',
                'Recommended pilot scope',
            ],
            timeline: '2-3 weeks',
            commercialModel: 'Fixed fee',
        },
        {
            title: 'Structured Pilot',
            bestFor: 'Customers ready to prove measurable business value on one selected workflow.',
            includes: [
                'Scoped pilot setup',
                'Use-case-specific configuration',
                'Weekly working sessions',
                'KPI measurement',
                'Final evaluation and recommendation',
            ],
            timeline: '6-10 weeks',
            commercialModel: 'Fixed pilot fee',
            badge: 'Recommended',
            recommended: true,
        },
        {
            title: 'Pilot + Production Readiness',
            bestFor: 'Customers who want to prove value and prepare for deployment.',
            includes: [
                'Everything in Structured Pilot',
                'Rollout design',
                'Integration planning',
                'Governance and security alignment',
                'Deployment roadmap',
                'Commercial rollout proposal',
            ],
            timeline: '8-12 weeks',
            commercialModel: 'Premium fixed fee, optionally creditable toward rollout',
        },
    ],
    timeline: [
        {
            phase: 'Week 0',
            title: 'Alignment & NDA',
            description: 'Confirm stakeholders, review the target workflow, and complete confidentiality before detailed file sharing.',
        },
        {
            phase: 'Week 1-2',
            title: 'Discovery & scope confirmation',
            description: 'Validate the use case, data readiness, pilot scope, and success metrics with the working team.',
        },
        {
            phase: 'Week 3-6',
            title: 'Configuration, adaptation, and execution',
            description: 'Run the scoped engagement with working sessions, pilot setup, and measurable review checkpoints.',
        },
        {
            phase: 'Week 7-8+',
            title: 'KPI review, evaluation, and rollout recommendation',
            description: 'Assess outcomes against success criteria and define the most practical path to the next commercial step.',
        },
    ],
    timelineNote: 'Exact timing depends on data availability, stakeholder access, and scope complexity.',
    legal: [
        {
            question: 'Mutual NDA',
            answer:
                'Signed before sharing sensitive files, standards, workflows, or internal constraints so both sides can exchange information with confidence.',
        },
        {
            question: 'LOI',
            answer:
                'An optional alignment document that confirms intent, timing, and commercial direction when internal alignment is still forming.',
        },
        {
            question: 'Pilot Agreement / SOW',
            answer:
                'The binding document covering scope, fee, timeline, responsibilities, and IP boundaries for the selected pilot engagement.',
        },
    ],
    faqs: [
        {
            question: 'Why do we need an NDA?',
            answer:
                'The NDA allows both sides to exchange sensitive technical and commercial information confidently before the pilot is scoped in detail.',
        },
        {
            question: 'Is the LOI mandatory?',
            answer:
                'No. The LOI is optional and mainly useful when internal alignment is still being formed before full contracting.',
        },
        {
            question: 'What is the difference between the LOI and the Pilot Agreement?',
            answer:
                'The LOI signals intent and alignment. The Pilot Agreement / SOW is the binding document that defines delivery scope, fee, responsibilities, timing, and commercial terms.',
        },
        {
            question: 'Can the pilot be customized to our environment?',
            answer:
                'Yes, within the agreed scope. The pilot is designed to address a specific use case while keeping the engagement structured and commercially clear.',
        },
        {
            question: 'What happens after a successful pilot?',
            answer:
                'If the agreed success criteria are met, the next step is a commercial rollout discussion, typically covering licensing, onboarding, and any agreed implementation support.',
        },
        {
            question: 'Who needs to be involved on our side?',
            answer:
                'Typically a business sponsor, a technical owner, and access to relevant SMEs or sample data are needed for an effective pilot.',
        },
    ],
    contact: {
        name: 'Hasan Raza',
        title: 'Co-Founder, RapidDraft',
        email: 'hello@rapiddraft.ai',
        message: 'Your point of contact for pilot setup, scoping, and next steps.',
        image: '/media/hasan.jpg',
    },
    finalCtas: {
        primary: {
            label: 'Start with NDA',
            href: '#legal-process',
            variant: 'primary',
        },
        secondary: {
            label: 'Discuss Pilot Scope',
            href: '/book-demo',
            variant: 'secondary',
        },
        supportingLine:
            'Ready to evaluate RapidDraft for your engineering workflow? We can move from review to pilot setup in a structured, low-friction process.',
    },
};
