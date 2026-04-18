import type { CompanyDemoConfig } from '../types';

export const webastoDemoConfig: CompanyDemoConfig = {
    slug: 'webasto',
    companyName: 'Webasto',
    hostnames: ['webasto.rapiddraft.ai'],
    accessLabel: 'Private Webasto pilot demo',
    summary:
        'A Webasto artifact-first change-pack walkthrough built around JT, 3D PDF, drawing-table extraction, release-readiness checks, and an attachable approval packet.',
    hero: {
        badge: 'Private Webasto pilot demo',
        title: 'Turn a Webasto change pack into an approval-ready packet',
        description:
            'RapidDraft helps Webasto review a mixed-format release package the way the workflow already works: ingest JT and 3D PDF artifacts, explain the package delta, run the release punchlist, extract table changes, and export a packet that can attach back into the approval flow.',
        proofChips: ['JT + 3D PDF intake', 'Package delta', 'Table extraction', 'Attachable packet'],
        scenarioTitle: 'Scenario',
        scenarioBody:
            'A Webasto engineer is preparing a battery or thermal release package and needs to understand what changed, whether the package is really ready, and which structured drawing data should travel with the approval object.',
    },
    heroStoryboard: {
        eyebrow: 'Webasto change-pack review flow',
        title: 'From neutral artifacts to approval attachment',
        revisionLabel: 'Rev A -> Rev B',
        steps: [
            { label: '1. Ingest the package', text: 'Start from JT, 3D PDF, and drawing artifacts already used in the workflow.' },
            { label: '2. Explain the package delta', text: 'Show what changed across the release pack before approval starts.' },
            { label: '3. Extract structured evidence', text: 'Pull revision-table and drawing-table deltas out of the documents.' },
            { label: '4. Export for attachment', text: 'Package the results into one approval-ready artifact.' },
        ],
    },
    fitCards: [
        {
            title: 'Engineering',
            body:
                'Webasto does not need a generic CAD demo first. It needs a way to review one release package across neutral artifacts without reconstructing the story by hand.',
        },
        {
            title: 'Release and program leads',
            body:
                'The value is one approval view: what changed, what still blocks release, and what evidence is good enough to attach to the decision.',
        },
        {
            title: 'Structured data migration',
            body:
                'The differentiator is not changed-part DFM. It is pulling drawing-bound table information into structured, reusable output.',
        },
    ],
    chapters: [
        {
            id: 'open-change-pack',
            stepNumber: 1,
            title: 'Open the change pack',
            engineerAction:
                'The engineer starts with one battery or thermal release package that already exists as JT, 3D PDF, and drawing-style artifacts.',
            rapiddraftReturn:
                'RapidDraft frames the work as one package review instead of a scattered search across viewers, exports, and side documents.',
            managementValue:
                'The approval conversation begins with one bounded release object instead of fragmented artifact context.',
            artifactsIn: ['Rev A artifact set', 'Rev B artifact set', 'Approval target'],
            artifactsOut: ['Scoped package review'],
            video: {
                placeholderTitle: 'Video 1 · Open the Webasto package',
                recordingBrief:
                    'Show the engineer opening one realistic battery or thermal release pack and selecting the revision pair that needs review.',
                durationLabel: '1-2 min',
            },
        },
        {
            id: 'ingest-neutral-artifacts',
            stepNumber: 2,
            title: 'Ingest neutral artifacts',
            engineerAction:
                'The engineer uploads JT, 3D PDF, and drawing artifacts without waiting for deep CAD-native or PLM-native integration.',
            rapiddraftReturn:
                'RapidDraft pairs the package artifacts and opens one review session that respects Webastos mixed-system process reality.',
            managementValue:
                'Pilot value appears without betting the first conversation on the wrong NX, 3DX, 4PEP, or OpenPDM assumption.',
            artifactsIn: ['JT exports', '3D PDFs', 'Drawing PDFs'],
            artifactsOut: ['Paired neutral-artifact review'],
            video: {
                placeholderTitle: 'Video 2 · Neutral-artifact intake',
                recordingBrief:
                    'Show the package starting from JT and 3D PDF artifacts and quickly becoming one bounded review session.',
                durationLabel: '1-2 min',
            },
        },
        {
            id: 'explain-package-delta',
            stepNumber: 3,
            title: 'Explain the package delta',
            engineerAction:
                'Before approval, the engineer opens the diff to understand which views, notes, tables, and package elements actually changed.',
            rapiddraftReturn:
                'RapidDraft highlights changed content and writes a package-level summary of what shifted and what needs rechecking.',
            managementValue:
                'Review time shifts from assembling the story to deciding whether the package is ready.',
            artifactsOut: ['Package-level diff', 'Plain-language change summary'],
            video: {
                placeholderTitle: 'Video 3 · Package diff and summary',
                recordingBrief:
                    'Show the package delta across mixed artifacts and read out the generated summary in Webasto-shaped approval language.',
                durationLabel: '2-3 min',
            },
        },
        {
            id: 'run-punchlist',
            stepNumber: 4,
            title: 'Run the release punchlist',
            engineerAction:
                'The engineer runs deterministic release-readiness checks on the package to catch drawing hygiene and approval blockers.',
            rapiddraftReturn:
                'RapidDraft flags revision mismatches, missing notes, table issues, and other release blockers with severity and evidence.',
            managementValue:
                'Approvals become more consistent because package-readiness logic is made explicit instead of staying manual.',
            artifactsOut: ['Release punchlist', 'Severity-ranked blockers'],
            video: {
                placeholderTitle: 'Video 4 · Release-readiness punchlist',
                recordingBrief:
                    'Walk through the release findings and make clear that this is a conservative approval-readiness layer, not a PLM replacement.',
                durationLabel: '1-2 min',
            },
        },
        {
            id: 'extract-table-deltas',
            stepNumber: 5,
            title: 'Extract table deltas',
            engineerAction:
                'The engineer selects the revision table and one second structured table from the changed drawing set and asks RapidDraft to compare them.',
            rapiddraftReturn:
                'RapidDraft extracts the table content, highlights the deltas, and prepares structured output instead of leaving the data trapped in documents.',
            managementValue:
                'This is the clearest Webasto-specific differentiator because it bridges drawing-bound information toward structured PLM-ready data.',
            artifactsIn: ['Revision table', 'One second structured table'],
            artifactsOut: ['Structured table diff', 'Reusable table output'],
            video: {
                placeholderTitle: 'Video 5 · Structured table extraction',
                recordingBrief:
                    'Show one revision table and one second table type so the differentiator is clearly about structured drawing data, not just OCR.',
                durationLabel: '1-2 min',
            },
        },
        {
            id: 'export-approval-packet',
            stepNumber: 6,
            title: 'Export the approval packet',
            engineerAction:
                'Once the package is understood, the engineer exports one packet for approval attachment and downstream handoff.',
            rapiddraftReturn:
                'RapidDraft compiles the package summary, release punchlist, and table deltas into one attachable approval artifact.',
            managementValue:
                'The output can travel with the release object instead of living only inside the review UI.',
            artifactsOut: ['Approval packet', 'Attachable summary'],
            video: {
                placeholderTitle: 'Video 6 · Export the attachable packet',
                recordingBrief:
                    'Show the final packet and briefly scan the sections: package summary, blockers, and structured table evidence.',
                durationLabel: '1-2 min',
            },
        },
    ],
    capabilities: [
        {
            title: 'Neutral-artifact package intake',
            body:
                'RapidDraft starts from JT, 3D PDF, and drawing artifacts so the first pilot fits Webastos real multi-system approval flow.',
        },
        {
            title: 'Package-level diff and punchlist',
            body:
                'The review stays focused on package clarity and approval readiness, not on a broad CAD-native automation story.',
        },
        {
            title: 'Structured table extraction',
            body:
                'Revision tables and related drawing tables can be extracted, diffed, and prepared for structured reuse instead of staying trapped in PDFs.',
        },
        {
            title: 'PLM-attachable export',
            body:
                'One packet ties together the package summary, blockers, and structured evidence in a form that can attach back into the approval process.',
        },
    ],
    nonClaims: [
        'RapidDraft is not a PLM replacement. Webasto teams stay in their current release workflow and systems.',
        'RapidDraft is not a native 3DX, 4PEP, or OpenPDM solution on day one. The first pilot stays artifact-first and low-friction.',
        'RapidDraft is not leading with NX-native automation before the workflow wedge is proven.',
        'RapidDraft is not claiming guaranteed design correctness. It improves review clarity, traceability, and approval readiness.',
    ],
    rolloutPhases: [
        {
            phase: 'Now',
            title: 'Artifact-first package review',
            body:
                'Start with JT, 3D PDF, and drawing exports, then prove package diff, punchlist checks, table extraction, and attachable export.',
        },
        {
            phase: 'Next',
            title: 'Workflow attachment',
            body:
                'Once the artifact-first wedge is proven, attach the packet and structured outputs into the real approval flow.',
        },
        {
            phase: 'Later',
            title: 'Deeper system integration',
            body:
                'Only after workflow value is proven should deeper 4PEP, OpenPDM, 3DX, or CAD-native integration become the next step.',
        },
    ],
    cta: {
        buttonLabel: 'Book a Webasto walkthrough',
        buttonHref: '/book-demo',
        panelTitle: 'What we need from Webasto',
        needs: ['Rev A and Rev B neutral artifacts', 'A revision table plus one second table type', 'Current approval template'],
        note:
            'With those inputs, we can show a real Webasto-shaped change-pack review instead of a generic CAD demo.',
    },
    narrative: {
        hostModeNote: 'Built from the Webasto pilot dossier and RapidDraft release-review vision.',
        fitKicker: 'Why this fits Webasto',
        fitTitle: 'Built for approval packs, not for a day-one CAD integration pitch',
        fitBody:
            'The Webasto story is narrow on purpose: start from neutral artifacts, clarify one release package, extract the structured table changes, and export something the approval flow can actually use.',
        storylineKicker: 'Storyline chapters',
        storylineTitle: 'A focused change-pack workflow',
        storylineBody:
            'Each chapter keeps the pilot close to Webastos real process reality: mixed artifacts in, package delta clarified, structured table evidence out.',
        capabilityKicker: 'Capability map',
        capabilityTitle: 'What the Webasto demo is really proving',
        capabilityBody:
            'This demo proves artifact-first approval-pack intelligence, with drawing-table extraction as the key differentiator beyond standard change review.',
        nonClaimsKicker: 'What this demo does not claim',
        nonClaimsTitle: 'Credibility matters more than breadth',
        nonClaimsBody:
            'This page is designed to show where RapidDraft is strongest for Webasto right now, while keeping the longer-term workflow and systems story honest.',
        rolloutKicker: 'Pilot expansion path',
        rolloutTitle: 'Prove the package wedge first, then attach deeper',
        rolloutBody:
            'The first Webasto pilot should prove the artifact-first approval workflow before deeper workflow or system integration is proposed.',
        finalCtaKicker: 'Final CTA',
        finalCtaTitle: 'Prove the change-pack review wedge',
        finalCtaBody:
            'If Webasto sees a trustworthy package summary, a credible release punchlist, a real table-diff capability, and a clean attachable packet, the next conversation becomes much easier.',
        footerBody:
            'This storyline is anchored in the Webasto pilot dossier and RapidDrafts artifact-first approval-pack wedge: ingest neutral artifacts, clarify the package, extract structured table evidence, and export the packet.',
        footerLinkHref: 'https://wiki.rapiddraft.ai/10_pilots/webasto_pilot/_index/',
        footerLinkLabel: 'Open the Webasto wiki dossier',
    },
};
