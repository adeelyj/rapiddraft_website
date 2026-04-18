import type { CompanyDemoConfig } from '../types';

export const somicDemoConfig: CompanyDemoConfig = {
    slug: 'somic',
    companyName: 'SOMIC',
    hostnames: ['somic.rapiddraft.ai'],
    accessLabel: 'Private SOMIC pilot demo',
    summary:
        'A SOMIC revision-before-release walkthrough that turns Rev A and Rev B into a change summary, release gate, changed-part DFM pass, and exportable evidence packet.',
    hero: {
        badge: 'Private SOMIC pilot demo',
        title: 'Turn a SOMIC revision pair into a release-ready review',
        description:
            'RapidDraft helps SOMIC review one machine change the way the team actually works: compare Rev A and Rev B, explain what changed, run the release gate, check one changed part, and export the evidence packet.',
        proofChips: ['Rev A -> Rev B', 'Change summary', 'Release gate', 'Changed-part DFM'],
        scenarioTitle: 'Scenario',
        scenarioBody:
            'A SOMIC engineer is preparing a customer-driven format change on a 434-style machine and needs the release discussion focused on what changed, what blocks Freigabe, and whether the changed part is still manufacturable.',
    },
    heroStoryboard: {
        eyebrow: 'SOMIC revision-before-release flow',
        title: 'From format change to Freigabe packet',
        revisionLabel: 'Rev A -> Rev B',
        steps: [
            { label: '1. Pair the revisions', text: 'Start from the released baseline and the candidate change package.' },
            { label: '2. Explain the delta', text: 'Show exactly what changed before the approval discussion starts.' },
            { label: '3. Gate the release', text: 'Run deterministic release-readiness checks on the candidate package.' },
            { label: '4. Check the changed part', text: 'Validate one representative changed part before export.' },
        ],
    },
    fitCards: [
        {
            title: 'Engineering',
            body:
                'SOMICs core pain is revision review before release, not generic AI for CAD. The value is faster understanding of one real machine change.',
        },
        {
            title: 'Release leads',
            body:
                'The same flow gives leadership one consistent answer: what changed, what still blocks Freigabe, and what evidence supports the decision.',
        },
        {
            title: 'Manufacturing handoff',
            body:
                'The pilot only goes one step beyond document review: validate one changed machined part so the packet is useful beyond the meeting itself.',
        },
    ],
    chapters: [
        {
            id: 'scope-revision',
            stepNumber: 1,
            title: 'Scope the revision pair',
            engineerAction:
                'The engineer selects the released package and the candidate package for one customer-driven format change on a SOMIC machine.',
            rapiddraftReturn:
                'RapidDraft opens one bounded review session around the exact Rev A and Rev B pair that needs approval.',
            managementValue:
                'The meeting starts from one explicit revision scope instead of a vague handoff to check the new version.',
            artifactsIn: ['Released Rev A package', 'Candidate Rev B package', 'Basic change context'],
            artifactsOut: ['Scoped review session'],
            video: {
                placeholderTitle: 'Video 1 · Scope the SOMIC revision',
                recordingBrief:
                    'Show the engineer selecting Rev A and Rev B for a believable format change on a SOMIC 434-style machine.',
                durationLabel: '1-2 min',
            },
        },
        {
            id: 'explain-change',
            stepNumber: 2,
            title: 'Explain what changed',
            engineerAction:
                'Before the approval discussion, the engineer opens the diff to understand which views, notes, dimensions, and geometry changed.',
            rapiddraftReturn:
                'RapidDraft highlights changed content and writes a plain-language summary of what must be rechecked.',
            managementValue:
                'Review time shifts from detective work to decision work, which is the exact wedge SOMIC already signaled.',
            artifactsOut: ['Revision diff', 'Plain-language change summary'],
            video: {
                placeholderTitle: 'Video 2 · Revision diff and summary',
                recordingBrief:
                    'Make this the hero moment: compare Rev A and Rev B, highlight the changed region, and read out the generated summary.',
                durationLabel: '2-3 min',
            },
        },
        {
            id: 'run-release-gate',
            stepNumber: 3,
            title: 'Run the release gate',
            engineerAction:
                'The engineer runs deterministic release-readiness checks on the candidate package before Freigabe.',
            rapiddraftReturn:
                'RapidDraft flags revision-table issues, title-block mismatches, missing notes, dangling dimensions, and other release blockers with severity and evidence.',
            managementValue:
                'Approval becomes more consistent because checklist logic no longer lives only in reviewer memory.',
            artifactsOut: ['Release checklist results', 'Severity-ranked blockers'],
            video: {
                placeholderTitle: 'Video 3 · Deterministic release gate',
                recordingBrief:
                    'Walk through the findings and make clear that RapidDraft is a release-review intelligence layer, not a CAD replacement.',
                durationLabel: '1-2 min',
            },
        },
        {
            id: 'check-changed-part',
            stepNumber: 4,
            title: 'Check one changed part',
            engineerAction:
                'The engineer selects one representative changed part or format tool that matters to the release and runs a focused manufacturability check.',
            rapiddraftReturn:
                'RapidDraft produces geometry-linked DFM findings on the changed part and summarizes the manufacturing risk clearly.',
            managementValue:
                'This is the SOMIC-specific extension beyond paperwork: the review packet also says something useful about the changed hardware.',
            artifactsIn: ['Changed STEP part', 'Selected manufacturing route'],
            artifactsOut: ['Changed-part DFM findings', 'Manufacturing summary'],
            video: {
                placeholderTitle: 'Video 4 · Changed-part manufacturability',
                recordingBrief:
                    'Use one believable SOMIC-style machined part or format tool and show a tight changed-part DFM slice.',
                durationLabel: '1-2 min',
            },
        },
        {
            id: 'export-packet',
            stepNumber: 5,
            title: 'Export the Freigabe packet',
            engineerAction:
                'Once the revision is understood, the engineer exports one packet for approval and downstream handoff.',
            rapiddraftReturn:
                'RapidDraft compiles the change summary, release-gate results, and changed-part DFM evidence into one review packet.',
            managementValue:
                'The result travels with the revision instead of being scattered across screenshots, PDFs, and meeting notes.',
            artifactsOut: ['Release evidence packet', 'Approval-ready summary'],
            video: {
                placeholderTitle: 'Video 5 · Export the evidence packet',
                recordingBrief:
                    'Show the exported packet and briefly scan the sections: change summary, blockers, and changed-part manufacturability.',
                durationLabel: '1-2 min',
            },
        },
        {
            id: 'show-next-step',
            stepNumber: 6,
            title: 'Show the next step, not the whole roadmap',
            engineerAction:
                'After the core workflow lands, the team looks at the most believable follow-on intake path.',
            rapiddraftReturn:
                'RapidDraft shows how this can move from export-based intake today toward workflow-triggered execution later.',
            managementValue:
                'SOMIC sees a credible adoption path without the first meeting turning into a speculative PDM integration pitch.',
            artifactsOut: ['Pilot roadmap'],
            video: {
                placeholderTitle: 'Video 6 · Practical expansion path',
                recordingBrief:
                    'Close with the narrow roadmap: export-first now, workflow trigger later, deeper system coupling only after the wedge is proven.',
                durationLabel: '1 min',
            },
        },
    ],
    capabilities: [
        {
            title: 'Revision pairing and diff',
            body:
                'RapidDraft turns one released package and one candidate package into a bounded engineering review instead of an open-ended artifact hunt.',
        },
        {
            title: 'Deterministic release gate',
            body:
                'Checklist-style checks catch release blockers with consistent severity before Freigabe depends on reviewer memory alone.',
        },
        {
            title: 'Changed-part DFM',
            body:
                'One focused manufacturability pass on the changed part connects the release review to the real hardware decision.',
        },
        {
            title: 'Release-ready export',
            body:
                'One packet ties together the revision summary, blockers, and changed-part evidence for approval and handoff.',
        },
    ],
    nonClaims: [
        'RapidDraft is not a CAD replacement. SOMIC engineers stay in SolidWorks, NX, or their current export workflow.',
        'RapidDraft is not a full PLM replacement. The first pilot proves one review wedge inside the existing process.',
        'RapidDraft is not promising deep PDM automation on day one. The first step is still artifact-first and low-friction.',
        'RapidDraft is not claiming guaranteed design correctness. It improves coverage, traceability, and review speed.',
    ],
    rolloutPhases: [
        {
            phase: 'Now',
            title: 'Revision-before-release review',
            body:
                'Start with Rev A and Rev B, run the change summary and release gate, and validate one changed part without deep system changes.',
        },
        {
            phase: 'Next',
            title: 'Workflow-triggered intake',
            body:
                'Add a watched folder, export hook, or workflow action so review sessions start from a defined engineering trigger.',
        },
        {
            phase: 'Later',
            title: 'Deeper store-back',
            body:
                'Only after the wedge is proven should reports and results move into deeper PDM or PLM attachment paths.',
        },
    ],
    cta: {
        buttonLabel: 'Book a SOMIC walkthrough',
        buttonHref: '/book-demo',
        panelTitle: 'What we need from SOMIC',
        needs: ['Rev A and Rev B artifacts', '1-2 drawing PDFs', 'One representative changed part'],
        note:
            'With those inputs, we can show a real revision-before-release review instead of a generic CAD demo.',
    },
    narrative: {
        hostModeNote: 'Built from the SOMIC pilot dossier and RapidDraft review vision.',
        fitKicker: 'Why this fits SOMIC',
        fitTitle: 'Built for revision-before-release on modular machine variants',
        fitBody:
            'The SOMIC story is narrow on purpose: compare one revision pair, surface release blockers, and check one changed part before Freigabe.',
        storylineKicker: 'Storyline chapters',
        storylineTitle: 'A focused release-review workflow',
        storylineBody:
            'Each chapter keeps the pilot close to SOMICs real approval pressure: what changed, what blocks release, and whether the changed part is still safe to make.',
        capabilityKicker: 'Capability map',
        capabilityTitle: 'What the SOMIC demo is really proving',
        capabilityBody:
            'This demo proves revision-before-release intelligence, with changed-part manufacturability as the supporting second layer.',
        nonClaimsKicker: 'What this demo does not claim',
        nonClaimsTitle: 'Credibility matters more than breadth',
        nonClaimsBody:
            'This page is designed to show where RapidDraft is strongest for SOMIC right now, while keeping the longer-term integration story honest.',
        rolloutKicker: 'Pilot expansion path',
        rolloutTitle: 'Start narrow, then earn the right to integrate',
        rolloutBody:
            'The first SOMIC pilot should prove the release-review wedge first and only then move toward deeper workflow attachment.',
        finalCtaKicker: 'Final CTA',
        finalCtaTitle: 'Prove the revision-before-release wedge',
        finalCtaBody:
            'If SOMIC sees a trustworthy change summary, a credible release gate, a believable changed-part DFM slice, and a clean evidence packet, the next conversation becomes much easier.',
        footerBody:
            'This storyline is anchored in the SOMIC pilot dossier and RapidDrafts revision-before-release wedge: compare revisions, gate release, validate the changed part, and export the evidence.',
        footerLinkHref: 'https://wiki.rapiddraft.ai/10_pilots/somic_pilot/_index/',
        footerLinkLabel: 'Open the SOMIC wiki dossier',
    },
};
