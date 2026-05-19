const APP_BASE = 'https://app.rapiddraft.ai'
const DEMO_QS = 'demo=fe'

export type Module = {
  id: string
  title: string
  shortTitle?: string
  verb: string
  blurb: string
  href: string
  poster: string
  loop?: string
  steps?: string[]
  pitch?: string
  forwardOnly?: boolean
  activity?: number
  availability: 'available' | 'roadmap'
}

export const HERO_MODULES: Module[] = [
  {
    id: 'collaboration',
    title: 'Feedback and Markups',
    shortTitle: 'Feedback and Markups',
    verb: 'Collects feedback.',
    blurb: 'Threaded and version-aware, pinned to geometry.',
    href: `${APP_BASE}/?${DEMO_QS}&mode=collaboration`,
    poster: '/media/pitch/pitch-collaboration.png',
    availability: 'available',
    pitch: 'CAE, mold-flow, cost, and validation looking at the same part without a meeting.',
    activity: 198,
    steps: [
      'Upload the part to CAD Drive. Anyone with a link can view without an install.',
      'A share link is generated and three reviewers join the live workspace.',
      'Lukas pins feedback on the front-face fillet. The thread anchors to the geometry.',
      'Aisha replies in the same thread. Sami opens a second thread on the rib tolerance.',
      'New version v05 is published. Changed features are flagged and comments are preserved.',
    ],
  },
  {
    id: 'co2',
    title: 'Sustainability',
    shortTitle: 'Sustainability',
    verb: 'Calculates impact.',
    blurb: 'Part-level LCA with recycled content visible.',
    href: `${APP_BASE}/?${DEMO_QS}&mode=co2-preview`,
    poster: '/media/pitch/launcher-poster.png',
    availability: 'roadmap',
    forwardOnly: true,
    activity: 24,
    pitch: 'Sustainability decisions surfaced where the architecture is still cheap to change.',
    steps: [
      'Part mass is auto-pulled from the CAD at 1.24 kg. Material defaults from the library.',
      'Pick PP-LGF40 with injection molding. The per-stage breakdown appears live.',
      'Result: 4.8 kg CO2eq per part. Raw material dominates and transport is small.',
      'Compare against aluminum, SMC, and virgin PP. The trade space sits on one chart.',
      'Push recycled content to 30 percent and the result drops to 3.7 kg CO2eq, saving 1.1 kg per part.',
    ],
  },
  {
    id: 'dfm',
    title: 'Design for Manufacturability',
    shortTitle: 'Design for Manufacturability',
    verb: 'Checks manufacturability.',
    blurb: 'Manufacturability checked against the CAD model.',
    href: `${APP_BASE}/?${DEMO_QS}&mode=design-review`,
    poster: '/media/pitch/pitch-dfm-checks.png',
    loop: '/media/pitch/design-review-expert-mode.mp4',
    availability: 'available',
    pitch: 'DFM findings the model itself can defend, not a PDF that has to be re-explained per supplier.',
    activity: 311,
    steps: [
      'Load a CAD part. Material and process are set, here PP-LGF40 and injection molding.',
      'Run DFM and the first wave of rules passes: draft, mold split, and fastener spacing.',
      'The pocket internal radius fails because R0.4 is below the minimum tool radius for fiber-reinforced PP.',
      'Wall thickness varies from 1.2 to 2.4 mm, creating warpage risk. Center bore depth-to-diameter is 7.2 for tool reach.',
      'Summary: 3 pass, 2 warn, 2 fail. Findings attach to the part and travel with it.',
    ],
  },
  {
    id: 'drawing',
    title: 'AI Drawing Review',
    shortTitle: 'AI Drawing Review',
    verb: 'Reviews drawings.',
    blurb: 'GD&T, datums, and stackups read on the sheet.',
    href: `${APP_BASE}/?${DEMO_QS}&mode=drawing`,
    poster: '/media/pitch/pitch-drawing-memory.png',
    availability: 'available',
    pitch: 'Drawing release without the back-and-forth on datums and tolerances that eats two weeks.',
    activity: 412,
    steps: [
      'Drop in a drawing PDF. RapidDraft reads frames, datums, and stackup chains.',
      'The scan finds the first wave of issues such as missing datums and tolerance conflicts pinned to the sheet.',
      'A second pass surfaces deeper conflicts like incompatible GD&T frames and incomplete surface specs.',
      'Findings export as a review package attached to the part so the next reviewer or supplier can pick it up cold.',
    ],
  },
]

export const TOTAL_ACTIVITY = HERO_MODULES.reduce((a, m) => a + (m.activity ?? 0), 0)

export const SECONDARY_MODULES: Module[] = [
  {
    id: 'expert',
    title: 'Expert Mode',
    verb: 'Runs everything.',
    blurb: 'Full workspace: rails for files, DFM, knowledge, requirements, and vision.',
    href: `${APP_BASE}/?${DEMO_QS}&mode=expert`,
    poster: '/media/pitch/launcher-poster.png',
    availability: 'available',
  },
  {
    id: 'launcher',
    title: 'Launcher',
    verb: 'Picks the workflow.',
    blurb: 'Mode selector and entry point into the workspace.',
    href: `${APP_BASE}/?${DEMO_QS}`,
    poster: '/media/pitch/launcher-poster.png',
    availability: 'available',
  },
]
