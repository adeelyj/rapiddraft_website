import type { CompanyDemoConfig } from '../types';

export const somicDemoConfig: CompanyDemoConfig = {
    slug: 'somic',
    companyName: 'SOMIC',
    hostnames: ['somic.rapiddraft.ai'],
    accessLabel: 'Private SOMIC pilot demo',
    summary:
        'A SOMIC walkthrough: find a CORAS part by geometry, improve it with DFM review, compare Rev A and Rev B, and release a drawing that has already been linted against ISO or ASME.',
    hero: {
        badge: 'Private SOMIC pilot demo',
        title: 'From a CORAS part search to a release-ready drawing',
        description:
            'RapidDraft helps SOMIC engineers find the right part across machines like CORAS, improve it with DFM review, compare revisions, and release a drawing that has already been linted against ISO or ASME.',
        proofChips: ['Natural-language part search', 'DFM review', 'Rev A -> Rev B', 'DraftLint ISO / ASME'],
        scenarioTitle: 'Scenario',
        scenarioBody:
            "A SOMIC engineer needs the pocket-and-slot adapter used on the CORAS line. They don't remember the part number, so they search by geometry and machine name, improve the part with DFM review, compare revisions, and export a clean drawing ready for release.",
        image: {
            src: '/media/somic-coras.jpg',
            alt: 'SOMIC CORAS collating and grouping system in operation',
        },
    },
    heroStoryboard: {
        eyebrow: 'SOMIC search-to-lint flow',
        title: 'From part search to release-ready drawing',
        revisionLabel: 'Rev A -> Rev B',
        steps: [
            { label: '1. Find the part', text: 'Search by geometry or machine name (e.g. "pockets" or "CORAS").' },
            { label: '2. DFM review', text: 'Apply the flagged manufacturability fixes and save Rev B.' },
            { label: '3. Compare revisions', text: 'See exactly what changed between Rev A and Rev B.' },
            { label: '4. Lint the drawing', text: 'Run DraftLint against ISO or ASME before release review.' },
        ],
    },
    heroVisual: {
        kind: 'revision-gate',
        pairLabel: 'Revision pair',
        revA: { tag: 'Rev A', label: '434-format · released', meta: '2025-05-12' },
        revB: { tag: 'Rev B', label: '434-format · candidate', meta: '2025-09-03' },
        diffSummary: '12 changed · 2 added · 1 removed',
        gateLabel: 'Release gate',
        gateChecks: [
            { label: 'Revision table', status: 'ok' },
            { label: 'Title block', status: 'ok' },
            { label: 'Dimensions', status: 'ok' },
            { label: 'Notes', status: 'warn' },
        ],
        partLabel: 'Changed part · DFM',
        partName: '434-format cam insert',
        partFindings: [
            { label: 'Geometry watertight', status: 'ok' },
            { label: 'Tap depth margin tight', status: 'warn' },
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
            id: 'search-part',
            stepNumber: 1,
            title: "Find the CORAS adapter by what it is, not what it's called",
            engineerAction:
                "The engineer needs the adapter for CORAS that has pockets and slots. They don't remember the part number, so they type \"pockets\" - or \"CORAS\" - into the search field.",
            rapiddraftReturn:
                'RapidDraft matches intent across machine name, geometry, and part metadata, and returns the adapter (and a few close siblings) ranked by relevance.',
            managementValue:
                'Engineers stop hunting through folders. New hires can find the right part on day one.',
            artifactsIn: ['Search term: "pockets" or "CORAS"'],
            artifactsOut: ['Matched CORAS adapter part'],
            video: {
                src: '/media/somic-videos/01_PartSearch.mp4',
                placeholderTitle: 'Video 1 · Semantic part search',
                recordingBrief:
                    'Show the engineer typing "pockets" into the search field and the CORAS adapter appearing in the results.',
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
            artifactsIn: ['Rev A of the CORAS adapter'],
            artifactsOut: ['DFM findings', 'Rev B with fixes applied'],
            video: {
                src: '/media/somic-videos/02_RunDFMReview.mp4',
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
                'The engineer opens the revision compare view on Rev A and Rev B of the same adapter.',
            rapiddraftReturn:
                'RapidDraft highlights exactly what changed - geometry, features, tolerances - with a plain-language summary alongside the visual diff.',
            managementValue:
                'The reviewer sees the delta without hunting through the model tree.',
            artifactsIn: ['Rev A', 'Rev B'],
            artifactsOut: ['Revision diff', 'Plain-language change summary'],
            video: {
                src: '/media/somic-videos/03_PartComparison.mp4',
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
                src: '/media/somic-videos/04_DrawingReview.mp4',
                placeholderTitle: 'Video 4 · DraftLint on the drawing',
                recordingBrief:
                    'Create the drawing, pick a standard, run DraftLint, scroll findings, show the cleaned drawing.',
                durationLabel: '1-2 min',
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
        buttonLabel: 'Deal room',
        buttonHref: '/deal-room',
        buttonNewTab: true,
        panelTitle: 'What we need from SOMIC',
        needs: [
            'One CORAS-family part (Rev A)',
            'Your preferred standard (ISO 128 / 129 / 8015 or ASME Y14.5)',
            'One drawing template',
        ],
        note: 'With those inputs, we can show the search, the DFM review, the revision compare, and the DraftLint pass on one real part.',
    },
    narrative: {
        hostModeNote: 'Built from the SOMIC pilot dossier and RapidDraft review vision.',
        fitKicker: 'Why this fits SOMIC',
        fitTitle: 'Built for revision-before-release on modular machine variants',
        fitBody:
            'The SOMIC story is narrow on purpose: compare one revision pair, surface release blockers, and check one changed part before Freigabe.',
        storylineKicker: 'How the demo runs',
        storylineTitle: 'From part search to release-ready drawing',
        storylineBody:
            'Four steps that match how a SOMIC engineer actually works: find the part, improve it with DFM review, compare revisions, and lint the drawing before release.',
        capabilityKicker: 'Capability map',
        capabilityTitle: 'What the SOMIC demo is really proving',
        capabilityBody:
            'Semantic part search, DFM review, revision compare, and standard-based drawing lint - the four moves that shorten release review on a real machine part.',
        nonClaimsKicker: 'What this demo does not claim',
        nonClaimsTitle: 'Credibility matters more than breadth',
        nonClaimsBody:
            'This page is designed to show where RapidDraft is strongest for SOMIC right now, while keeping the longer-term integration story honest.',
        rolloutKicker: 'Pilot expansion path',
        rolloutTitle: 'Start narrow, then earn the right to integrate',
        rolloutBody:
            'The first SOMIC pilot should prove the search-to-lint workflow on one part, then expand to more machines.',
        finalCtaKicker: 'Book a walkthrough',
        finalCtaTitle: 'See it on a real CORAS part',
        finalCtaBody:
            'If you see the search, the DFM fix, the revision compare, and the DraftLint pass on one real part, the rest of the evaluation gets much shorter.',
    },
};
