import type { CompanyDemoConfig } from '../types';

export const webastoDemoConfig: CompanyDemoConfig = {
    slug: 'webasto',
    companyName: 'Webasto',
    hostnames: ['webasto.rapiddraft.ai'],
    accessLabel: 'Private Webasto pilot demo',
    summary:
        'A Webasto walkthrough: find a battery-tray part by geometry, improve it with DFM review, compare Rev A and Rev B, and release a drawing that has already been linted against ISO or ASME.',
    hero: {
        badge: 'Private Webasto pilot demo',
        title: 'From a battery-tray part search to a release-ready drawing',
        description:
            'RapidDraft helps Webasto engineers find the right part across battery and thermal modules, improve it with DFM review, compare revisions, and release a drawing that has already been linted against ISO or ASME.',
        proofChips: ['Natural-language part search', 'DFM review', 'Rev A -> Rev B', 'DraftLint ISO / ASME'],
        scenarioTitle: 'Scenario',
        scenarioBody:
            "A Webasto engineer needs the bracket with pockets used on a battery thermal module. They don't remember the part number, so they search by geometry and program name, improve the part with DFM review, compare revisions, and export a clean drawing ready for release.",
        image: {
            src: '/media/webasto-battery.jpg',
            alt: 'Webasto standardized battery system',
        },
    },
    heroStoryboard: {
        eyebrow: 'Webasto search-to-lint flow',
        title: 'From part search to release-ready drawing',
        revisionLabel: 'Rev A -> Rev B',
        steps: [
            { label: '1. Find the part', text: 'Search by geometry or program name (e.g. "pockets" or "battery tray").' },
            { label: '2. DFM review', text: 'Apply the flagged manufacturability fixes and save Rev B.' },
            { label: '3. Compare revisions', text: 'See exactly what changed between Rev A and Rev B.' },
            { label: '4. Lint the drawing', text: 'Run DraftLint against ISO or ASME before release review.' },
        ],
    },
    heroVisual: {
        kind: 'artifact-pack',
        intakeLabel: 'Package intake',
        artifacts: [
            { kind: 'JT', name: 'bat-mod-03.jt', size: '1.8 MB' },
            { kind: '3D', name: 'thermal-pack.pdf', size: '482 KB' },
            { kind: 'DWG', name: 'drw-04-r2.pdf', size: '624 KB' },
        ],
        deltaLabel: 'Package delta',
        deltaSummary: '34 changed · 7 added · 2 removed',
        tableLabel: 'Revision table · extracted',
        tableHeaders: ['Rev', 'Date', 'Note'],
        tableRows: [
            { cells: ['A', '2025-05-12', 'Initial release'] },
            { cells: ['B', '2025-09-03', 'Seal geometry + notes'], highlight: true },
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
            id: 'search-part',
            stepNumber: 1,
            title: "Find the battery-tray bracket by what it is, not what it's called",
            engineerAction:
                "The engineer needs the bracket with pockets used on a battery thermal module. They don't remember the part number, so they type \"pockets\" - or \"battery tray\" - into the search field.",
            rapiddraftReturn:
                'RapidDraft matches intent across program name, geometry, and part metadata, and returns the bracket (and a few close siblings) ranked by relevance.',
            managementValue:
                'Engineers stop hunting through program folders. New hires can find the right part on day one.',
            artifactsIn: ['Search term: "pockets" or "battery tray"'],
            artifactsOut: ['Matched battery-tray bracket'],
            video: {
                placeholderTitle: 'Video 1 · Semantic part search',
                recordingBrief:
                    'Show the engineer typing "pockets" into the search field and the battery-tray bracket appearing in the results.',
                durationLabel: '1-2 min',
            },
        },
        {
            id: 'dfm-review',
            stepNumber: 2,
            title: 'Run a DFM review and apply the fixes',
            engineerAction:
                'The engineer opens the matched part and runs a DFM review. RapidDraft lists concrete manufacturability improvements - deep pockets, sharp internal corners, thin walls, tool-access problems.',
            rapiddraftReturn:
                'RapidDraft surfaces geometry-linked DFM findings with a severity and a suggested fix for each. The engineer applies the fixes and saves the result as Rev B.',
            managementValue:
                'Manufacturability is resolved before the drawing exists - not after a supplier quote comes back.',
            artifactsIn: ['Rev A of the bracket'],
            artifactsOut: ['DFM findings', 'Rev B with fixes applied'],
            video: {
                placeholderTitle: 'Video 2 · DFM review and fix',
                recordingBrief:
                    'Open the part, open the DFM review, scroll the findings, apply a fix, save as Rev B.',
                durationLabel: '2-3 min',
            },
        },
        {
            id: 'compare-revisions',
            stepNumber: 3,
            title: 'Compare Rev A and Rev B to confirm the change',
            engineerAction:
                'The engineer opens the revision compare view on Rev A and Rev B of the same bracket.',
            rapiddraftReturn:
                'RapidDraft highlights exactly what changed - geometry, features, tolerances - with a plain-language summary alongside the visual diff.',
            managementValue:
                'The reviewer sees the delta without hunting through the model tree.',
            artifactsIn: ['Rev A', 'Rev B'],
            artifactsOut: ['Revision diff', 'Plain-language change summary'],
            video: {
                placeholderTitle: 'Video 3 · Revision compare',
                recordingBrief:
                    'Show the before/after viewer with the changed regions highlighted and the summary panel.',
                durationLabel: '1-2 min',
            },
        },
        {
            id: 'draftlint',
            stepNumber: 4,
            title: 'Create the drawing and run DraftLint',
            engineerAction:
                "The engineer creates the drawing of Rev B and runs DraftLint against the company's chosen standard (ISO 128 / ISO 129 / ISO 8015 or ASME Y14.5).",
            rapiddraftReturn:
                'RapidDraft flags standard-compliance issues - missing tolerances, wrong projection, non-conforming annotations, title-block gaps - with evidence linked to the drawing.',
            managementValue:
                'The drawing arrives at review already lint-clean. Release discussion time collapses.',
            artifactsIn: ['Rev B drawing', 'Chosen standard: ISO 128 / 129 / 8015 or ASME Y14.5'],
            artifactsOut: ['DraftLint findings', 'Release-ready drawing'],
            video: {
                placeholderTitle: 'Video 4 · DraftLint on the drawing',
                recordingBrief:
                    'Create the drawing, pick a standard, run DraftLint, scroll findings, show the cleaned drawing.',
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
        needs: [
            'One battery-tray or thermal-module part (Rev A)',
            'Your preferred standard (ISO 128 / 129 / 8015 or ASME Y14.5)',
            'One drawing template',
        ],
        note: 'With those inputs, we can show the search, the DFM review, the revision compare, and the DraftLint pass on one real part.',
    },
    narrative: {
        hostModeNote: 'Built from the Webasto pilot dossier and RapidDraft release-review vision.',
        fitKicker: 'Why this fits Webasto',
        fitTitle: 'Built for approval packs, not for a day-one CAD integration pitch',
        fitBody:
            'The Webasto story is narrow on purpose: start from neutral artifacts, clarify one release package, extract the structured table changes, and export something the approval flow can actually use.',
        storylineKicker: 'How the demo runs',
        storylineTitle: 'From part search to release-ready drawing',
        storylineBody:
            'Four steps that match how a Webasto engineer actually works: find the part, improve it with DFM review, compare revisions, and lint the drawing before release.',
        capabilityKicker: 'Capability map',
        capabilityTitle: 'What the Webasto demo is really proving',
        capabilityBody:
            'Semantic part search, DFM review, revision compare, and standard-based drawing lint - the four moves that shorten release review on a real battery or thermal part.',
        nonClaimsKicker: 'What this demo does not claim',
        nonClaimsTitle: 'Credibility matters more than breadth',
        nonClaimsBody:
            'This page is designed to show where RapidDraft is strongest for Webasto right now, while keeping the longer-term workflow and systems story honest.',
        rolloutKicker: 'Pilot expansion path',
        rolloutTitle: 'Start narrow, then earn the right to integrate',
        rolloutBody:
            'The first Webasto pilot should prove the search-to-lint workflow on one part, then expand to more programs.',
        finalCtaKicker: 'Book a walkthrough',
        finalCtaTitle: 'See it on a real Webasto part',
        finalCtaBody:
            'If you see the search, the DFM fix, the revision compare, and the DraftLint pass on one real part, the rest of the evaluation gets much shorter.',
    },
};
