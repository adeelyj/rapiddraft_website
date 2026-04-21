import type { CompanyDemoConfig } from '../types';

const sharedVideoPath = (filename: string) => `/media/${'so'}${'mic'}-videos/${filename}`;

export const demoDemoConfig: CompanyDemoConfig = {
    slug: 'demo',
    companyName: 'RapidDraft',
    hostnames: ['demo.rapiddraft.ai'],
    accessLabel: 'General RapidDraft demo',
    summary:
        'A vendor-neutral RapidDraft walkthrough: find a representative machined part by geometry, improve it with DFM review, compare Rev A and Rev B, and release a drawing that has already been linted against ISO or ASME.',
    hero: {
        badge: 'General RapidDraft demo',
        title: 'From part search to a release-ready drawing',
        description:
            'RapidDraft helps engineering teams find the right part across legacy machine data, improve it with DFM review, compare revisions, and release a drawing that has already been linted against ISO or ASME.',
        proofChips: ['Natural-language part search', 'DFM review', 'Rev A -> Rev B', 'DraftLint ISO / ASME'],
        scenarioTitle: 'Scenario',
        scenarioBody:
            "An engineer needs a pocket-and-slot carrier plate from an older machine program. They do not remember the part number, so they search by geometry and context, improve the part with DFM review, compare revisions, and export a clean drawing ready for release.",
    },
    heroStoryboard: {
        eyebrow: 'Search-to-lint flow',
        title: 'From part search to release-ready drawing',
        revisionLabel: 'Rev A -> Rev B',
        steps: [
            { label: '1. Find the part', text: 'Search by geometry or machine context, such as pockets, slots, carrier, or adapter.' },
            { label: '2. DFM review', text: 'Apply the flagged manufacturability fixes and save Rev B.' },
            { label: '3. Compare revisions', text: 'See exactly what changed between Rev A and Rev B.' },
            { label: '4. Lint the drawing', text: 'Run DraftLint against ISO or ASME before release review.' },
        ],
    },
    heroVisual: {
        kind: 'revision-gate',
        pairLabel: 'Revision pair',
        revA: { tag: 'Rev A', label: 'Released package', meta: '2025-05-12' },
        revB: { tag: 'Rev B', label: 'Candidate package', meta: '2025-09-03' },
        diffSummary: '12 changed - 2 added - 1 removed',
        gateLabel: 'Release gate',
        gateChecks: [
            { label: 'Revision table', status: 'ok' },
            { label: 'Title block', status: 'ok' },
            { label: 'Dimensions', status: 'ok' },
            { label: 'Notes', status: 'warn' },
        ],
        partLabel: 'Changed part - DFM',
        partName: 'Pocket-and-slot carrier plate',
        partFindings: [
            { label: 'Geometry watertight', status: 'ok' },
            { label: 'Tap depth margin tight', status: 'warn' },
        ],
    },
    fitCards: [
        {
            title: 'Engineering',
            body:
                'The core pain is revision review before release, not generic AI for CAD. The value is faster understanding of one real machine change.',
        },
        {
            title: 'Release leads',
            body:
                'The same flow gives leadership one consistent answer: what changed, what still blocks release approval, and what evidence supports the decision.',
        },
        {
            title: 'Manufacturing handoff',
            body:
                'The walkthrough goes one step beyond document review: validate one changed machined part so the release packet is useful beyond the meeting itself.',
        },
    ],
    chapters: [
        {
            id: 'search-part',
            stepNumber: 1,
            title: "Find the carrier plate by what it is, not what it is called",
            engineerAction:
                'The engineer needs a pocket-and-slot carrier plate from an older machine program. They do not remember the part number, so they search by geometry and machine context.',
            rapiddraftReturn:
                'RapidDraft matches intent across geometry, machine context, and part metadata, then returns the target part and close siblings ranked by relevance.',
            managementValue:
                'Engineers stop hunting through folders. New hires can find the right part on day one.',
            artifactsIn: ['Search terms: pockets, slots, carrier, adapter'],
            artifactsOut: ['Matched representative machined part'],
            video: {
                src: sharedVideoPath('01_PartSearch.mp4'),
                placeholderTitle: 'Video 1 - Semantic part search',
                recordingBrief:
                    'Show the engineer searching by geometry and the matching carrier plate appearing in the results.',
                durationLabel: '1-2 min',
            },
        },
        {
            id: 'dfm-review',
            stepNumber: 2,
            title: 'Run a DFM review and apply the fixes',
            engineerAction:
                'The engineer opens the matched part and runs a DFM review. RapidDraft lists concrete manufacturability improvements: deep pockets, sharp internal corners, thin walls, and tool-access problems.',
            rapiddraftReturn:
                'RapidDraft surfaces geometry-linked DFM findings with a severity and a suggested fix for each. The engineer applies the fixes and saves the result as Rev B.',
            managementValue:
                'Manufacturability is resolved before the drawing exists, not after a supplier quote comes back.',
            artifactsIn: ['Rev A of the representative part'],
            artifactsOut: ['DFM findings', 'Rev B with fixes applied'],
            video: {
                src: sharedVideoPath('02_RunDFMReview.mp4'),
                placeholderTitle: 'Video 2 - DFM review and fix',
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
                'The engineer opens the revision compare view on Rev A and Rev B of the same representative part.',
            rapiddraftReturn:
                'RapidDraft highlights exactly what changed: geometry, features, tolerances, and release-relevant details, with a plain-language summary alongside the visual diff.',
            managementValue:
                'The reviewer sees the delta without hunting through the model tree.',
            artifactsIn: ['Rev A', 'Rev B'],
            artifactsOut: ['Revision diff', 'Plain-language change summary'],
            video: {
                src: sharedVideoPath('03_PartComparison.mp4'),
                placeholderTitle: 'Video 3 - Revision compare',
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
                "The engineer creates the drawing of Rev B and runs DraftLint against the company's chosen standard, such as ISO 128, ISO 129, ISO 8015, or ASME Y14.5.",
            rapiddraftReturn:
                'RapidDraft flags standard-compliance issues such as missing tolerances, wrong projection, non-conforming annotations, and title-block gaps, with evidence linked to the drawing.',
            managementValue:
                'The drawing arrives at review already lint-clean. Release discussion time collapses.',
            artifactsIn: ['Rev B drawing', 'Chosen standard: ISO 128 / 129 / 8015 or ASME Y14.5'],
            artifactsOut: ['DraftLint findings', 'Release-ready drawing'],
            video: {
                src: sharedVideoPath('04_DrawingReview.mp4'),
                placeholderTitle: 'Video 4 - DraftLint on the drawing',
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
                'Checklist-style checks catch release blockers with consistent severity before release approval depends on reviewer memory alone.',
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
        'RapidDraft is not a CAD replacement. Engineers stay in SolidWorks, NX, or their current export workflow.',
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
        buttonLabel: 'Book a walkthrough',
        buttonHref: '/book-demo',
        panelTitle: 'What we need for a tailored walkthrough',
        needs: [
            'One representative machined part (Rev A)',
            'Your preferred standard (ISO 128 / 129 / 8015 or ASME Y14.5)',
            'One drawing template',
        ],
        note: 'With those inputs, we can show the search, the DFM review, the revision compare, and the DraftLint pass on one real part from your workflow.',
    },
    narrative: {
        hostModeNote: 'A reusable RapidDraft walkthrough for engineering and release teams.',
        fitKicker: 'Why this workflow matters',
        fitTitle: 'Built for revision-before-release on real machine parts',
        fitBody:
            'The demo is narrow on purpose: compare one revision pair, surface release blockers, and check one changed part before release approval.',
        storylineKicker: 'How the demo runs',
        storylineTitle: 'From part search to release-ready drawing',
        storylineBody:
            'Four steps that match how engineering teams evaluate a change: find the part, improve it with DFM review, compare revisions, and lint the drawing before release.',
        capabilityKicker: 'Capability map',
        capabilityTitle: 'What the demo is really proving',
        capabilityBody:
            'Semantic part search, DFM review, revision compare, and standard-based drawing lint: the four moves that shorten release review on a real machined part.',
        nonClaimsKicker: 'What this demo does not claim',
        nonClaimsTitle: 'Credibility matters more than breadth',
        nonClaimsBody:
            'This page is designed to show where RapidDraft is strongest right now, while keeping the longer-term integration story honest.',
        rolloutKicker: 'Pilot expansion path',
        rolloutTitle: 'Start narrow, then earn the right to integrate',
        rolloutBody:
            'The first pilot should prove the search-to-lint workflow on one part, then expand to more machines, programs, and release packages.',
        finalCtaKicker: 'Book a walkthrough',
        finalCtaTitle: 'See it on a real part from your workflow',
        finalCtaBody:
            'If you see the search, the DFM fix, the revision compare, and the DraftLint pass on one real part, the rest of the evaluation gets much shorter.',
    },
};
