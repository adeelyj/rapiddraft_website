import {
    BadgeCheck,
    FileCheck2,
    FolderKanban,
    Handshake,
    PlayCircle,
    Rocket,
    ScrollText,
    Users,
    type LucideIcon,
} from 'lucide-react';
import {
    defaultDealRoomContent,
    type ContactPerson,
    type DisclosureItem,
    type Offer,
} from './dealRoomContent';

export type OnboardingAction = {
    label: string;
    variant?: 'primary' | 'secondary';
    helper?: string;
};

export type OnboardingStepKind = 'document' | 'discussion' | 'offers' | 'execution' | 'handover';

export type OnboardingStep = {
    id: string;
    title: string;
    summary: string;
    description: string;
    kind: OnboardingStepKind;
    icon: LucideIcon;
    actions?: OnboardingAction[];
    offers?: Offer[];
};

export type DealRoomV2Content = {
    customerName: string;
    subtitle: string;
    heroNote: string;
    onboardingTitle: string;
    onboardingIntro: string;
    primaryStepId: string;
    secondaryStepId: string;
    onboardingSteps: OnboardingStep[];
    overview: typeof defaultDealRoomContent.overview;
    faqs: DisclosureItem[];
    contact: ContactPerson;
};

export const defaultDealRoomV2Content: DealRoomV2Content = {
    customerName: '[Customer Name]',
    subtitle:
        'A single onboarding workspace for aligning the pilot path, documents, commercial selection, and implementation handoff around one selected RapidDraft opportunity.',
    heroNote:
        'Prepared for [Customer Name]. The purpose of this page is to guide the pilot onboarding sequence from confidentiality through launch and handover.',
    onboardingTitle: 'Pilot onboarding path',
    onboardingIntro:
        'Move through the onboarding steps in order. Each step clarifies what is needed, who is involved, and what action unlocks the next stage.',
    primaryStepId: 'nda',
    secondaryStepId: 'offer-selection',
    onboardingSteps: [
        {
            id: 'nda',
            title: 'NDA',
            summary: 'Put confidentiality in place before file or standards sharing.',
            description:
                'The mutual NDA is the first operational step. It allows both sides to exchange sensitive technical, workflow, and commercial information confidently before detailed scoping begins.',
            kind: 'document',
            icon: ScrollText,
            actions: [
                {
                    label: 'View NDA',
                    variant: 'primary',
                    helper: 'Document button placeholder. Link can be wired later.',
                },
                {
                    label: 'Send for Review',
                    variant: 'secondary',
                    helper: 'Document action placeholder.',
                },
            ],
        },
        {
            id: 'detailed-discussion',
            title: 'Detailed Discussion',
            summary: 'Review the workflow, sample data, scope constraints, and success metrics.',
            description:
                'This step confirms what will actually be tested in the pilot. It covers the selected workflow, stakeholders, target outcomes, relevant files or standards, and any constraints that could affect pilot design.',
            kind: 'discussion',
            icon: Users,
        },
        {
            id: 'offer-selection',
            title: 'Offer Selection',
            summary: 'Choose the engagement structure that matches the maturity and scope of the pilot.',
            description:
                'Offer selection is the commercial decision point inside the onboarding flow. Use this step to choose the right level of validation, working cadence, and deployment readiness for the prospect.',
            kind: 'offers',
            icon: FolderKanban,
            offers: defaultDealRoomContent.offers,
        },
        {
            id: 'loi',
            title: 'LOI',
            summary: 'Optional alignment document when intent and timing need to be formalized before contracting.',
            description:
                'The LOI is optional. It is useful when internal alignment is still being formed and both sides want written confirmation of intent, expected timing, and commercial direction before the final pilot agreement.',
            kind: 'document',
            icon: Handshake,
            actions: [
                {
                    label: 'View LOI',
                    variant: 'primary',
                    helper: 'Document button placeholder. Link can be wired later.',
                },
            ],
        },
        {
            id: 'pilot-agreement',
            title: 'Pilot Agreement',
            summary: 'Finalize the binding commercial scope, responsibilities, fee, and delivery terms.',
            description:
                'The Pilot Agreement or SOW is the binding document for the engagement. It defines scope, timing, responsibilities, fees, and the practical boundaries of the pilot so launch can proceed cleanly.',
            kind: 'document',
            icon: FileCheck2,
            actions: [
                {
                    label: 'View Pilot Agreement',
                    variant: 'primary',
                    helper: 'Document button placeholder. Link can be wired later.',
                },
                {
                    label: 'Review Scope Summary',
                    variant: 'secondary',
                    helper: 'Document action placeholder.',
                },
            ],
        },
        {
            id: 'pilot-launch',
            title: 'Pilot Launch',
            summary: 'Kick off the scoped engagement with confirmed owners, cadence, and access.',
            description:
                'Pilot launch starts once scope and documents are in place. This is where the working team confirms meeting cadence, operational owners, inputs, and the first checkpoint against agreed success criteria.',
            kind: 'execution',
            icon: PlayCircle,
        },
        {
            id: 'pilot-implementation',
            title: 'Pilot Implementation',
            summary: 'Run the configured pilot, measure outcomes, and manage working sessions.',
            description:
                'Implementation covers the active execution window: configuration, use-case-specific adaptation, weekly working sessions, KPI tracking, and issue handling while the pilot is underway.',
            kind: 'execution',
            icon: Rocket,
        },
        {
            id: 'handover',
            title: 'Handover',
            summary: 'Close with evaluation, recommendation, and next-step readiness.',
            description:
                'Handover packages the pilot outcome into a clear closeout: KPI review, recommendation, rollout implications, and the commercial next step if success criteria were met.',
            kind: 'handover',
            icon: BadgeCheck,
        },
    ],
    overview: defaultDealRoomContent.overview,
    faqs: defaultDealRoomContent.faqs,
    contact: defaultDealRoomContent.contact,
};
