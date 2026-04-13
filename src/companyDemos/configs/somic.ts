import type { CompanyDemoConfig } from '../types';

export const somicDemoConfig: CompanyDemoConfig = {
    slug: 'somic',
    companyName: 'SOMIC',
    hostnames: ['somic.rapiddraft.ai'],
    accessLabel: 'Private SOMIC pilot demo',
    summary:
        'A SOMIC 434-style revision walkthrough that turns Rev A and Rev B into a change summary, release gate, changed-part DFM pass, and exportable evidence packet.',
    hero: {
        badge: 'Private SOMIC pilot demo',
        title: 'From Rev A to release-ready for a SOMIC change package',
        description:
            'RapidDraft turns a customer-driven format change into one review flow: compare revisions, run the release gate, validate the changed part, and export an evidence packet engineering can stand behind.',
        proofChips: ['Revision diff', 'Release gate', 'DFM on changed part', 'Evidence packet'],
        scenarioTitle: 'Scenario',
        scenarioBody:
            'A SOMIC mechanical engineer is preparing a customer-driven format change on a SOMIC 434-style machine and needs the changed revision package ready for Freigabe without manually reconstructing every change.',
    },
    fitCards: [
        {
            title: 'Engineering',
            body:
                'Baseline versus candidate review is the shortest path from a new format request to a usable approval discussion. The engineer spends less time reconstructing what changed and more time judging what matters.',
        },
        {
            title: 'Engineering leadership',
            body:
                'The same flow gives leads a consistent release gate: what changed, what still blocks release, and what evidence supports the final decision.',
        },
        {
            title: 'Manufacturing / documentation',
            body:
                'A single packet can serve drawing review, changed-part manufacturability, and downstream documentation handoff instead of scattering context across emails and PDFs.',
        },
    ],
    chapters: [
        {
            id: 'change-request-arrives',
            stepNumber: 1,
            title: 'The change request arrives',
            engineerAction:
                'A SOMIC engineer receives a new carton or format requirement on a 434-style line. The request touches the format set, a changed machine module, several drawings, and the release package.',
            rapiddraftReturn:
                'RapidDraft frames the work as a baseline-versus-candidate review so the team starts with the exact revision pair and the affected artifact set.',
            managementValue:
                'The review starts with a bounded scope instead of a vague “please check the new revision” handoff.',
            artifactsIn: ['Customer change request', 'Released Rev A package', 'Candidate Rev B package'],
            artifactsOut: ['Scoped review session'],
            video: {
                placeholderTitle: 'Video 1 · From change request to review scope',
                recordingBrief:
                    'Show the engineer opening a SOMIC 434-style change request, selecting the released baseline, and defining the candidate package to review.',
                durationLabel: '1–2 min',
            },
        },
        {
            id: 'start-review-session',
            stepNumber: 2,
            title: 'Start a review session',
            engineerAction:
                'The engineer loads exported artifacts instead of waiting for deep vault setup: drawing PDFs, model exports, and the candidate release package.',
            rapiddraftReturn:
                'RapidDraft pairs the baseline and candidate artifacts, captures the key metadata, and opens a review room with the right context attached.',
            managementValue:
                'Pilot value appears without forcing SOMIC to reconfigure its current CAD, PDM, or PLM flow on day one.',
            artifactsIn: ['Rev A STEP or drawing exports', 'Rev B STEP or drawing exports', 'Basic revision metadata'],
            artifactsOut: ['Baseline-candidate pair', 'Review room'],
            video: {
                placeholderTitle: 'Video 2 · Artifact-first intake',
                recordingBrief:
                    'Show how the engineer starts from exported artifacts, pairs the candidate with the released baseline, and creates a bounded review room.',
                durationLabel: '1–2 min',
            },
        },
        {
            id: 'see-what-changed',
            stepNumber: 3,
            title: 'See what changed',
            engineerAction:
                'Before the approval discussion, the engineer opens the diff to understand which views, notes, dimensions, and geometry actually changed.',
            rapiddraftReturn:
                'RapidDraft highlights added, removed, and modified content, then writes a plain-language summary of what changed and what should be re-checked.',
            managementValue:
                'Review time shifts from detective work to decision work, which is the core wedge SOMIC already reacted to.',
            artifactsOut: ['Visual diff', 'Plain-language change summary'],
            video: {
                placeholderTitle: 'Video 3 · Revision diff and change summary',
                recordingBrief:
                    'Make this the hero video: show Rev A versus Rev B, highlight the changed region, and read out the machine-generated “what changed” summary.',
                durationLabel: '2–3 min',
            },
        },
        {
            id: 'release-readiness-gate',
            stepNumber: 4,
            title: 'Run the release-readiness gate',
            engineerAction:
                'The engineer runs the deterministic release gate on the candidate package to catch revision hygiene and documentation blockers before Freigabe.',
            rapiddraftReturn:
                'RapidDraft flags missing notes, revision-table issues, title-block mismatches, dangling dimensions, and other release-readiness problems with severity and evidence.',
            managementValue:
                'Approvals become more consistent, and release blockers surface before they leak into manufacturing, FAT, or documentation work.',
            artifactsOut: ['Release checklist results', 'Severity-ranked blockers'],
            video: {
                placeholderTitle: 'Video 4 · DraftLint-style release gate',
                recordingBrief:
                    'Walk through the release-readiness findings, show a few blockers, and make clear that RapidDraft is a consistency and coverage layer, not a CAD replacement.',
                durationLabel: '1–2 min',
            },
        },
        {
            id: 'validate-changed-part',
            stepNumber: 5,
            title: 'Validate the changed machined part',
            engineerAction:
                'The engineer checks one representative changed part or format tool linked to the revision, focusing on manufacturability of the actual changed geometry.',
            rapiddraftReturn:
                'RapidDraft runs DFM on the changed part, ties findings to geometry, and produces a short summary manufacturing can understand quickly.',
            managementValue:
                'SOMIC can see how the same review flow extends from documentation readiness to Haag-style part manufacturability.',
            artifactsIn: ['Changed STEP part', 'Selected manufacturing route'],
            artifactsOut: ['Geometry-linked DFM findings', 'Changed-part summary'],
            video: {
                placeholderTitle: 'Video 5 · DFM on the changed part',
                recordingBrief:
                    'Use one believable SOMIC-style machined part or format tool, then show how RapidDraft spots changed-part manufacturability risks with linked evidence.',
                durationLabel: '1–2 min',
            },
        },
        {
            id: 'capture-findings',
            stepNumber: 6,
            title: 'Capture findings and decisions',
            engineerAction:
                'The reviewer converts important findings into tracked items, assigns owners, and records why a point must be fixed or can be accepted as-is.',
            rapiddraftReturn:
                'RapidDraft keeps each item linked to evidence, status, and rationale so the review survives the meeting instead of disappearing into email.',
            managementValue:
                'Decision memory stays with the revision and can be carried into the next change cycle.',
            artifactsOut: ['Owned review items', 'Decision rationale'],
            video: {
                placeholderTitle: 'Video 6 · Thin but credible review memory',
                recordingBrief:
                    'Show a lightweight closure loop: convert a finding into an item, assign it, mark one accepted as-is, and record the reason.',
                durationLabel: '1–2 min',
            },
        },
        {
            id: 'export-evidence-packet',
            stepNumber: 7,
            title: 'Export the evidence packet',
            engineerAction:
                'Once the candidate is understood, the engineer exports the review packet for approval, manufacturing handoff, or documentation follow-up.',
            rapiddraftReturn:
                'RapidDraft compiles the change summary, release-gate results, DFM findings, and decision log into one release-ready packet.',
            managementValue:
                'Teams get a traceable artifact that travels with the revision rather than a loose set of screenshots or meeting notes.',
            artifactsOut: ['Release evidence packet', 'Approval-ready summary'],
            video: {
                placeholderTitle: 'Video 7 · One-click export',
                recordingBrief:
                    'Show the final packet generation and briefly scan the exported sections: change summary, blockers, changed-part DFM, and decision log.',
                durationLabel: '1–2 min',
            },
        },
        {
            id: 'expansion-path',
            stepNumber: 8,
            title: 'Show the immediate expansion path',
            engineerAction:
                'After the core flow lands, the team looks at how the same review can trigger automatically once SOMIC confirms the preferred intake path.',
            rapiddraftReturn:
                'RapidDraft shows a believable next step from export-based intake today to workflow-triggered or vault-linked execution later.',
            managementValue:
                'SOMIC sees a credible adoption path: immediate value now, deeper integration only once it is worth the effort.',
            artifactsOut: ['Pilot roadmap', 'Integration next step'],
            video: {
                placeholderTitle: 'Video 8 · From pilot to integration',
                recordingBrief:
                    'Close by showing the roadmap ladder: export-based intake first, workflow trigger next, and deeper PDM or PLM store-back only after the core wedge is proven.',
                durationLabel: '1 min',
            },
        },
    ],
    capabilities: [
        {
            title: 'Review intelligence',
            body:
                'Revision pairing, evidence anchors, and plain-language change summaries explain what changed before the meeting starts.',
        },
        {
            title: 'Deterministic release checks',
            body:
                'DraftLint-style gates catch checklist failures and release blockers with consistent severity instead of ad hoc reviewer memory.',
        },
        {
            title: 'Decision memory',
            body:
                'Findings can become owned items with status and rationale, so the next revision inherits context instead of reopening the same debate.',
        },
        {
            title: 'Manufacturing-ready export',
            body:
                'One packet ties together change summary, release readiness, changed-part DFM, and closure notes for handoff or approval.',
        },
    ],
    nonClaims: [
        'RapidDraft is not a CAD replacement. SOMIC engineers stay in SolidWorks, NX, or their current export workflow.',
        'RapidDraft is not a full PLM replacement. The goal is to automate painful review work inside the existing process.',
        'RapidDraft is not promising full native PDM automation today. The first pilot remains artifact-first and low-friction.',
        'RapidDraft is not claiming guaranteed design correctness. It improves coverage, traceability, and review speed.',
    ],
    rolloutPhases: [
        {
            phase: 'Now',
            title: 'Artifact-first review',
            body:
                'Use Rev A and Rev B exports, run change summary, release checks, changed-part DFM, and export a packet without deep system changes.',
        },
        {
            phase: 'Next',
            title: 'Workflow-triggered intake',
            body:
                'Add a watched folder, export hook, or workflow action so review runs start from a defined engineering trigger instead of manual pairing.',
        },
        {
            phase: 'Later',
            title: 'Deeper PDM or store-back',
            body:
                'When SOMIC confirms the real stack and the value is proven, attach reports back to the vault or move into deeper task-driven integration.',
        },
    ],
    cta: {
        buttonLabel: 'Book a SOMIC walkthrough',
        buttonHref: '/book-demo',
        panelTitle: 'What we need from SOMIC',
        needs: ['Rev A and Rev B artifacts', '1–2 drawing PDFs', 'Current approval template'],
        note:
            'With those three inputs, we can mirror a real release packet instead of showing a generic CAD demo.',
    },
};
