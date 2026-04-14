import type { CompanyDemoConfig } from '../types';

export const webastoDemoConfig: CompanyDemoConfig = {
    slug: 'webasto',
    companyName: 'Webasto',
    hostnames: ['webasto.rapiddraft.ai'],
    accessLabel: 'Private Webasto pilot demo',
    summary:
        'A Webasto change-pack walkthrough that starts from JT and 3D PDF artifacts, explains the revision delta, runs release-readiness checks, extracts table changes, and exports a PLM-attachable packet.',
    hero: {
        badge: 'Private Webasto pilot demo',
        title: 'Turn a mixed-format Webasto change pack into a release-ready review packet',
        description:
            'RapidDraft turns JT, 3D PDF, and drawing artifacts into one artifact-first review flow: explain the revision delta, run the release punchlist, extract table changes, and export an approval packet teams can attach back into the real workflow.',
        proofChips: ['JT + 3D PDF intake', 'Change summary', 'Release punchlist', 'PLM-attachable report'],
        scenarioTitle: 'Scenario',
        scenarioBody:
            'A Webasto engineer is preparing a revised battery or thermal release package and needs to understand what changed, what still blocks approval, and what evidence should travel with the release object.',
    },
    heroStoryboard: {
        eyebrow: 'Webasto release-review flow',
        title: 'From neutral artifacts to an attachable approval packet',
        revisionLabel: 'Rev A → Rev B',
        steps: [
            { label: '1. Ingest the package', text: 'Start from JT, 3D PDF, and drawing exports instead of waiting for deep native integration.' },
            { label: '2. Explain the delta', text: 'Generate a package-level change summary across geometry views and drawing context.' },
            { label: '3. Gate the release', text: 'Run deterministic release-readiness checks and pull structured table deltas.' },
            { label: '4. Export the packet', text: 'Package findings, issue memory, and evidence for approval attachment.' },
        ],
    },
    fitCards: [
        {
            title: 'Engineering',
            body:
                'Engineers stop reconstructing release logic across JT viewers, 3D PDFs, revision tables, and drawing exports just to explain one candidate package.',
        },
        {
            title: 'Program and release leads',
            body:
                'The same flow gives leads a consistent approval story: what changed, what still blocks release, and what evidence is strong enough to attach to the decision.',
        },
        {
            title: 'Downstream stakeholders',
            body:
                'One packet can serve release review, drawing-table extraction, and downstream handoff instead of scattering context across attachments and side notes.',
        },
    ],
    chapters: [
        {
            id: 'change-pack-arrives',
            stepNumber: 1,
            title: 'The change pack arrives',
            engineerAction:
                'A Webasto engineer receives a revised battery or thermal package with updated JT, 3D PDF, and drawing artifacts that all need to move through approval together.',
            rapiddraftReturn:
                'RapidDraft frames the work as one explicit release-review session instead of a scattered artifact hunt across multiple neutral formats.',
            managementValue:
                'The team starts from one bounded approval object before context fragments across folders, viewers, and side conversations.',
            artifactsIn: ['Rev A artifact set', 'Rev B artifact set', 'Approval target or release milestone'],
            artifactsOut: ['Scoped review session'],
            video: {
                placeholderTitle: 'Video 1 · Open the Webasto change pack',
                recordingBrief:
                    'Show the engineer opening a realistic battery or thermal release package and defining the exact revision pair that needs review.',
                durationLabel: '1–2 min',
            },
        },
        {
            id: 'artifact-first-intake',
            stepNumber: 2,
            title: 'Start the review from neutral artifacts',
            engineerAction:
                'The engineer uploads JT, 3D PDF, and drawing-style artifacts without waiting for deep CAD or PLM integration to exist on day one.',
            rapiddraftReturn:
                'RapidDraft pairs the package artifacts, captures the key metadata, and opens a review room that respects stack heterogeneity.',
            managementValue:
                'Pilot value appears inside Webasto’s current process reality instead of forcing the first conversation into a risky integration pitch.',
            artifactsIn: ['JT exports', '3D PDFs', 'Drawing PDFs'],
            artifactsOut: ['Baseline-candidate pair', 'Review room'],
            video: {
                placeholderTitle: 'Video 2 · Artifact-first intake',
                recordingBrief:
                    'Show how the engineer starts from neutral artifacts, pairs Rev A with Rev B, and gets into a bounded review flow quickly.',
                durationLabel: '1–2 min',
            },
        },
        {
            id: 'see-what-changed',
            stepNumber: 3,
            title: 'See what changed across the package',
            engineerAction:
                'Before the approval discussion, the engineer opens the diff to understand which views, tables, notes, and package artifacts actually changed.',
            rapiddraftReturn:
                'RapidDraft highlights changed content and writes a plain-language summary of what shifted and what needs re-checking.',
            managementValue:
                'Review time shifts from detective work to decision work, which is the most credible Webasto wedge in the current research.',
            artifactsOut: ['Visual diff', 'Package-level change summary'],
            video: {
                placeholderTitle: 'Video 3 · Revision diff and package summary',
                recordingBrief:
                    'Make this the hero video: show Rev A versus Rev B, highlight changed regions and table context, and read out the generated summary.',
                durationLabel: '2–3 min',
            },
        },
        {
            id: 'release-readiness-gate',
            stepNumber: 4,
            title: 'Run the release-readiness punchlist',
            engineerAction:
                'The engineer runs a deterministic release gate on the candidate package to catch completeness, revision hygiene, and drawing-package blockers before approval.',
            rapiddraftReturn:
                'RapidDraft flags missing notes, revision mismatches, drawing hygiene issues, and other release blockers with severity and evidence.',
            managementValue:
                'Approvals become more consistent, and blockers surface before they spill into downstream release work.',
            artifactsOut: ['Release punchlist results', 'Severity-ranked blockers'],
            video: {
                placeholderTitle: 'Video 4 · Deterministic release gate',
                recordingBrief:
                    'Walk through the release-readiness findings and make clear that RapidDraft is a review-intelligence layer, not a PLM replacement.',
                durationLabel: '1–2 min',
            },
        },
        {
            id: 'extract-table-deltas',
            stepNumber: 5,
            title: 'Extract the structured table deltas',
            engineerAction:
                'The engineer selects the revision table and one second structured table type from the changed drawing set and asks RapidDraft to compare them.',
            rapiddraftReturn:
                'RapidDraft extracts the table content, highlights the deltas, and prepares the information for structured reuse instead of leaving it trapped in documents.',
            managementValue:
                'This is the clearest bridge from drawing-bound information toward more structured PLM-ready data.',
            artifactsIn: ['Revision table', 'One second structured table'],
            artifactsOut: ['Extracted table rows', 'Structured diff output'],
            video: {
                placeholderTitle: 'Video 5 · Table extraction and diff',
                recordingBrief:
                    'Show one revision table and one additional table type so the differentiator lands as a Webasto-shaped data problem, not just OCR.',
                durationLabel: '1–2 min',
            },
        },
        {
            id: 'capture-findings',
            stepNumber: 6,
            title: 'Capture findings and review memory',
            engineerAction:
                'The reviewer converts important findings into tracked items, assigns owners, and records why a point must be fixed or can move forward.',
            rapiddraftReturn:
                'RapidDraft keeps each issue linked to evidence, status, and rationale so the review survives the meeting instead of disappearing into email.',
            managementValue:
                'Decision memory stays attached to the release packet and can be carried into the next review cycle.',
            artifactsOut: ['Owned review items', 'Decision rationale'],
            video: {
                placeholderTitle: 'Video 6 · Thin review memory',
                recordingBrief:
                    'Show a lightweight closure loop: convert one blocker into a tracked item, keep one accepted as-is, and record the reason.',
                durationLabel: '1–2 min',
            },
        },
        {
            id: 'export-evidence-packet',
            stepNumber: 7,
            title: 'Export the approval packet',
            engineerAction:
                'Once the candidate is understood, the engineer exports one packet for approval, structured handoff, or later attachment back into the workflow.',
            rapiddraftReturn:
                'RapidDraft compiles the change summary, release-gate results, extracted table deltas, and issue log into one approval-ready packet.',
            managementValue:
                'Teams get a traceable artifact that can travel with the release object instead of a loose set of screenshots and meeting notes.',
            artifactsOut: ['Approval packet', 'Attachable summary'],
            video: {
                placeholderTitle: 'Video 7 · Export the attachable packet',
                recordingBrief:
                    'Show the final packet generation and briefly scan the exported sections: change summary, blockers, table deltas, and issue memory.',
                durationLabel: '1–2 min',
            },
        },
        {
            id: 'expansion-path',
            stepNumber: 8,
            title: 'Show the realistic expansion path',
            engineerAction:
                'After the core flow lands, the team looks at how the same review can later attach into 4PEP, OpenPDM, or adjacent approval workflows.',
            rapiddraftReturn:
                'RapidDraft shows a believable path from artifact-first intake today to workflow-triggered or system-attached execution later.',
            managementValue:
                'Webasto sees a credible adoption path: immediate value now, deeper integration only once the review wedge is proven.',
            artifactsOut: ['Pilot roadmap', 'Integration next step'],
            video: {
                placeholderTitle: 'Video 8 · From pilot to workflow attachment',
                recordingBrief:
                    'Close by showing the roadmap ladder: neutral-artifact intake first, workflow attachment next, and deeper integration only after the value is proven.',
                durationLabel: '1 min',
            },
        },
    ],
    capabilities: [
        {
            title: 'Review intelligence',
            body:
                'Mixed-format package pairing, evidence anchors, and plain-language change summaries explain what changed before the approval meeting starts.',
        },
        {
            title: 'Deterministic release checks',
            body:
                'Release punchlists catch checklist failures and approval blockers with consistent severity instead of ad hoc reviewer memory.',
        },
        {
            title: 'Structured table extraction',
            body:
                'Revision tables and related drawing data can be extracted, diffed, and prepared for structured reuse instead of staying trapped in PDFs.',
        },
        {
            title: 'PLM-attachable export',
            body:
                'One packet ties together change summary, release readiness, extracted table deltas, and review memory for handoff or approval attachment.',
        },
    ],
    nonClaims: [
        'RapidDraft is not a PLM replacement. Webasto teams stay in their current release workflow and systems.',
        'RapidDraft is not a native 3DX, 4PEP, or OpenPDM solution on day one. The first pilot stays artifact-first and low-friction.',
        'RapidDraft is not assuming NX-native or full CAD-stack automation before the workflow wedge is proven.',
        'RapidDraft is not claiming guaranteed design correctness. It improves coverage, traceability, and review speed.',
    ],
    rolloutPhases: [
        {
            phase: 'Now',
            title: 'Artifact-first review',
            body:
                'Use JT, 3D PDF, and drawing exports to run change summary, release checks, table extraction, and packet export without deep system changes.',
        },
        {
            phase: 'Next',
            title: 'Workflow-triggered intake',
            body:
                'Add a watched flow or approval trigger so review runs start from a defined release event instead of manual pairing.',
        },
        {
            phase: 'Later',
            title: 'Deeper workflow attachment',
            body:
                'When Webasto confirms the real stack and the value is proven, attach packets and structured outputs back into the adjacent approval process.',
        },
    ],
    cta: {
        buttonLabel: 'Book a Webasto walkthrough',
        buttonHref: '/book-demo',
        panelTitle: 'What we need from Webasto',
        needs: ['Rev A and Rev B neutral artifacts', 'Drawing set with a revision table', 'Current approval or release template'],
        note:
            'With those inputs, we can mirror a real Webasto-shaped change-pack review instead of showing a generic CAD demo.',
    },
    narrative: {
        hostModeNote: 'Built from the Webasto pilot dossier and RapidDraft release-review vision.',
        fitKicker: 'Why this fits Webasto',
        fitTitle: 'Built for a mixed-format release workflow',
        fitBody:
            'The strongest Webasto wedge is not generic AI for CAD. It is an artifact-first change-pack review that respects neutral formats, release pressure, and the need to move key information out of drawing-bound workflows.',
        storylineKicker: 'Storyline chapters',
        storylineTitle: 'One end-to-end workflow an engineer can actually follow',
        storylineBody:
            'Each chapter is one video slot: what the engineer does, what RapidDraft returns, and why the result matters beyond the screen.',
        capabilityKicker: 'Capability map',
        capabilityTitle: 'What the Webasto demo is really proving',
        capabilityBody:
            'The storyline stays narrow on purpose. It shows the parts of RapidDraft that most directly support a change-driven release workflow for neutral artifacts and structured review data.',
        nonClaimsKicker: 'What this demo does not claim',
        nonClaimsTitle: 'Credibility matters more than breadth',
        nonClaimsBody:
            'This page is designed to show where RapidDraft is strongest for Webasto right now, while keeping the longer-term workflow and systems story honest.',
        rolloutKicker: 'Pilot expansion path',
        rolloutTitle: 'A believable rollout, not a forced integration jump',
        rolloutBody:
            'The first Webasto pilot should prove the review wedge with minimal friction, then earn the right to attach into adjacent release systems.',
        finalCtaKicker: 'Final CTA',
        finalCtaTitle: 'Use the first meeting to prove the release-review wedge',
        finalCtaBody:
            'If Webasto sees a trustworthy change summary, a credible release punchlist, structured table extraction, and a clean approval packet, the next conversation becomes much easier.',
        footerBody:
            'This storyline is anchored in the Webasto pilot dossier and RapidDraft’s artifact-first release-review wedge: change summary, release gating, table extraction, and traceable approval evidence.',
        footerLinkHref: 'https://wiki.rapiddraft.ai/10_pilots/webasto_pilot/_index/',
        footerLinkLabel: 'Open the Webasto wiki dossier',
    },
};
