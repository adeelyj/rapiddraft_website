// The 4 marquee modules from the "Where We Fit" slide.
// Tile labels match the slide verbatim; deep links target the demo-mode app URL.

const APP_BASE = 'https://app.rapiddraft.ai'
const DEMO_QS = 'demo=fe'

export type Module = {
  id: string
  title: string
  /** Short title shown on the agent tile when grid is dense (3-up row). */
  shortTitle?: string
  /** Verb-led description: "Reviews drawings.", "Checks DFM.", … */
  verb: string
  blurb: string
  href: string
  poster: string
  loop?: string
  /** Captioned narration of what the loop shows — used in the auth-independent guided demo. */
  steps?: string[]
  /** One-line pitch shown above the steps in the guided demo. */
  pitch?: string
  /** Marks an agent as Forward-specific — gets a "Built for Forward" badge. */
  forwardOnly?: boolean
  /** Activity figure for the live counter ("1,247 reviews this month"). Illustrative. */
  activity?: number
}

export const HERO_MODULES: Module[] = [
  {
    id: 'collaboration',
    title: 'Collaborate directly on CAD',
    shortTitle: 'Comments',
    verb: 'Collects comments.',
    blurb: 'Threaded and version-aware, pinned to geometry.',
    href: `${APP_BASE}/?${DEMO_QS}&mode=collaboration`,
    poster: '/media/pitch/pitch-collaboration.png',
    pitch: 'CAE, mold-flow, cost, and validation looking at the same part — without a meeting.',
    activity: 198,
    steps: [
      'Upload the part to CAD Drive. Anyone with a link can view — no install needed.',
      'Share link is generated; 3 reviewers join the live workspace.',
      'Lukas pins a comment on the front-face fillet. Thread anchors to the geometry.',
      'Aisha replies in the same thread. Sami opens a second thread on the rib tolerance.',
      'New version v05 published — features changed are flagged; comments preserved.',
    ],
  },
  {
    id: 'co2',
    title: 'CO₂ / LCA per part',
    shortTitle: 'CO₂',
    verb: 'Calculates CO₂.',
    blurb: 'Part-level LCA with recycled content visible.',
    href: `${APP_BASE}/?${DEMO_QS}&mode=co2-preview`,
    poster: '/media/pitch/launcher-poster.png',
    forwardOnly: true,
    activity: 24,
    pitch: 'Sustainability decisions surfaced where the architecture is still cheap to change.',
    steps: [
      'Part mass auto-pulled from the CAD (1.24 kg). Material defaults to library.',
      'Pick PP-LGF40 + injection molding. Per-stage breakdown appears live.',
      'Result: 4.8 kg CO₂eq per part. Raw material dominates; transport is small.',
      'Compare against aluminum, SMC, virgin PP. The trade space is on one chart.',
      'Push recycled content to 30%: result drops to 3.7 kg CO₂eq — 1.1 kg saved per part.',
    ],
  },
  {
    id: 'dfm',
    title: 'Design for Manufacturing Review',
    shortTitle: 'DFM',
    verb: 'Checks DFM.',
    blurb: 'Manufacturability checked against the CAD model.',
    href: `${APP_BASE}/?${DEMO_QS}&mode=design-review`,
    poster: '/media/pitch/pitch-dfm-checks.png',
    loop: '/media/pitch/design-review-expert-mode.mp4',
    pitch: 'DFM findings the model itself can defend — not a PDF that has to be re-explained per supplier.',
    activity: 311,
    steps: [
      'Load a CAD part. Material and process are set (here: PP-LGF40 · injection molding).',
      'Run DFM — the first wave of rules pass: draft, mold split, fastener spacing.',
      'Pocket internal radius fails — R0.4 is below the minimum tool radius for fiber-reinforced PP.',
      'Wall thickness varies 1.2-2.4 mm (warpage risk). Center bore depth/diameter = 7.2 (tool reach).',
      'Summary: 3 pass · 2 warn · 2 fail. Attach findings to the part — they travel with it.',
    ],
  },
  {
    id: 'drawing',
    title: 'Drawing Analysis (GD&T and Stackup)',
    shortTitle: 'Drawings',
    verb: 'Reviews drawings.',
    blurb: 'GD&T, datums, and stackups read on the sheet.',
    href: `${APP_BASE}/?${DEMO_QS}&mode=drawing`,
    poster: '/media/pitch/pitch-drawing-memory.png',
    pitch: 'Drawing release without the back-and-forth on datums and tolerances that eats two weeks.',
    activity: 412,
    steps: [
      'Drop in a drawing PDF. RapidDraft reads frames, datums, and stackup chains.',
      'Scan finds the first wave of issues — missing datums, tolerance conflicts — pinned to the sheet.',
      'Second pass surfaces the deeper conflicts: incompatible GD&T frames, incomplete surface specs.',
      'Findings export as a review package attached to the part — next reviewer or supplier picks it up cold.',
    ],
  },
  {
    id: 'batch',
    title: 'Bulk review of parts',
    shortTitle: 'Batches',
    verb: 'Processes batches.',
    blurb: 'Dozens of STEP files reviewed in one traceable pass.',
    href: `${APP_BASE}/?${DEMO_QS}&mode=batch`,
    poster: '/media/pitch/launcher-poster.png',
    pitch: 'A teardown or benchmark backlog turned into traceable findings — not a folder of STEPs.',
    activity: 142,
    steps: [
      'Drop a folder of STEP files. Each part is queued with the right DFM context applied.',
      '12 parts in the queue — names, statuses, and findings columns lined up for review.',
      'Processing runs in parallel. First 6 parts are inspected while the rest stay queued.',
      'All 12 complete. Findings table is sortable; filter to critical-only or warnings.',
      'Select all → export a single review package. ~17 engineer-hours saved vs. manual review.',
    ],
  },
]

/** Sum of activity counts across all agents — used in the live counter ticker. */
export const TOTAL_ACTIVITY = HERO_MODULES.reduce((a, m) => a + (m.activity ?? 0), 0)

export const SECONDARY_MODULES: Module[] = [
  {
    id: 'expert',
    title: 'Expert Mode',
    verb: 'Runs everything.',
    blurb: 'Full workspace: rails for files, DFM, knowledge, requirements, vision.',
    href: `${APP_BASE}/?${DEMO_QS}&mode=expert`,
    poster: '/media/pitch/launcher-poster.png',
  },
  {
    id: 'launcher',
    title: 'Launcher',
    verb: 'Picks the workflow.',
    blurb: 'Mode selector and entry point into the workspace.',
    href: `${APP_BASE}/?${DEMO_QS}`,
    poster: '/media/pitch/launcher-poster.png',
  },
]
