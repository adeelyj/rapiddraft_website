// Research artifacts pre-built for the Forward Engineering meeting.
// Each tile expands inline to reveal the deeper bullets.

export type ResearchItem = {
  id: string
  title: string
  kicker: string
  summary: string
  href?: string
  icon: 'standard' | 'strategy' | 'pain' | 'china' | 'questions' | 'flags' | 'ingest'
  /** Bullet points shown when the tile expands inline. */
  details?: string[]
  /** Always-visible clickable sub-sections that link deeper into the artifact. */
  sections?: { title: string; summary: string; href: string }[]
  /** Always-visible growth-opportunity list (strategy tile). */
  growthOpportunities?: { title: string; summary: string }[]
}

export const RESEARCH: ResearchItem[] = [
  {
    id: 'gb38031',
    title: 'GB 38031-2025 wiki',
    kicker: 'Chinese EV battery safety standard',
    summary: 'Full reference wiki — every test, pass/fail criterion, and clause citation. Built from the original Chinese PDF with numerical fidelity enforced page-by-page.',
    href: '/forward/wiki/',
    icon: 'standard',
    details: [
      'Every clause cited against the original Chinese PDF — no paraphrasing of pass/fail thresholds.',
      'Templates for cell-level, mechanical, environmental, electrical, and thermal-stability tests.',
      'Cross-tagged with type-approval terminology (German parentheticals where regulators use them).',
      'Atomic pages — insulation thresholds, the 5-minute warning rule, etc. live in one place and are linked from everywhere they\'re relevant.',
      'Engineering interpretation explicitly tagged as non-normative, never mixed into the spec.',
    ],
    sections: [
      {
        title: 'Cell-level tests',
        summary: '7 tests. Overcharge, over-discharge, external short, heating, temperature cycling, compression, safety after fast-charge cycles.',
        href: '/forward/wiki/tests/cell-level/',
      },
      {
        title: 'Pack & system — Mechanical',
        summary: '5 tests. Vibration, mechanical shock, simulated collision, compression, bottom impact 🆕.',
        href: '/forward/wiki/tests/pack-system/mechanical/',
      },
      {
        title: 'Pack & system — Environmental',
        summary: '5 tests. Damp heat cycling, immersion, temperature shock, salt fog, high altitude.',
        href: '/forward/wiki/tests/pack-system/environmental/',
      },
      {
        title: 'Pack & system — Electrical',
        summary: '5 tests. Over-temperature, over-current, external short circuit, overcharge, over-discharge.',
        href: '/forward/wiki/tests/pack-system/electrical/',
      },
      {
        title: 'Thermal stability',
        summary: '2 tests. External fire, thermal propagation ⭐ — the headline of the 2025 revision.',
        href: '/forward/wiki/tests/pack-system/thermal-stability/',
      },
      {
        title: 'Pass / Fail criteria',
        summary: 'What "no fire, no explosion" means. Insulation thresholds. The 5-minute warning. Observation.',
        href: '/forward/wiki/pass-fail/',
      },
    ],
  },
  {
    id: 'strategy',
    title: 'Forward strategy & competition map',
    kicker: 'Where FE wins, where it doesn’t',
    summary: 'Repeat business vs. one-off demonstrators, Munich vs. Shanghai positioning, where larger engineering houses overlap and where FE has a specialist edge.',
    href: '/forward/strategy/',
    icon: 'strategy',
    details: [
      'Revenue streams mapped: engineering services, benchmark intelligence, testing/pre-compliance, sustainability consulting.',
      'Where FE wins repeatedly vs. larger houses — and the moats that don\'t hold up.',
      'Demonstrator → series-mandate conversion as the key commercial bottleneck.',
      'Munich vs. Shanghai: what changed commercially with the Shanghai office, and what didn\'t.',
      'Mitsui relationship framing: market access, commercial leverage, or ownership legacy.',
    ],
    growthOpportunities: [
      {
        title: 'GB 38031-2025 readiness program',
        summary: 'Productized clause-level compliance prep against the July 2026 deadline — a recurring engagement, not a one-off RFP.',
      },
      {
        title: 'Thermal-runaway material screening & pre-compliance service',
        summary: 'Screen materials and joints against the propagation test before tooling, cutting the late-validation failures that push designers back to metals.',
      },
      {
        title: 'Sustainability impact calculator',
        summary: 'LCA as a live design input — CO₂ deltas visible at concept stage, not as a closing slide; ties directly into the BMW FSCM DfS work.',
      },
    ],
  },
  {
    id: 'painpoints',
    title: 'Battery-enclosure pain points',
    kicker: 'What slows series adoption',
    summary: 'Material-card maturity, correlation gates, bottom-impact and rocker integration, joining and sealing failure modes that surprise customers late.',
    icon: 'pain',
    details: [
      'Material-card and correlation maturity is the most-cited technical bottleneck.',
      'Bottom impact and rocker-to-pack load transfer — the place where enclosure strategy becomes vehicle strategy.',
      'Venting, deflagration pressure, and particle erosion — usually under-modeled in early concepts.',
      'Joining and sealing failure modes that surprise customers most in late validation.',
      'Composite-intensive housings still need stronger evidence to be trusted for broad series adoption.',
    ],
  },
  {
    id: 'china',
    title: 'China intelligence lens',
    kicker: 'Teardowns that change architecture',
    summary: 'How Chinese OEMs are running ahead on cost engineering, vertical integration, and speed — and what that should change in European enclosure decisions.',
    icon: 'china',
    details: [
      'Chinese OEMs leading on architecture aggressiveness, cost engineering, and speed — not just on raw labor cost.',
      'Teardown intelligence becomes valuable when it *changes architecture choices*, not when it stays as a slide deck.',
      'Regional regulation divergence (GB 38031-2025 in China vs. R100 / EU) is where enclosure design decisions diverge fastest.',
      'Japan still distinct on engineering priorities — quietly, and worth tracking.',
      'Open question: are customers buying "what China is doing now" or "what will matter in Europe next"?',
    ],
  },
  {
    id: 'questions',
    title: 'Question banks',
    kicker: 'Leadership · Tech · AI · Sustainability',
    summary: 'Curated, filterable, live in the meeting. Covers leadership, technical managers, battery-enclosure-specific, CAE/material-card, business strategy, AI & digital, China & global, sustainability, and scaling indicators.',
    icon: 'questions',
  },
  {
    id: 'flags',
    title: 'Hypotheses · red & green flags',
    kicker: 'Tick live in the meeting',
    summary: 'Ten hypotheses to test, ten signs FE is genuinely scaling, ten signs it isn\'t. Strong opinions, lightly held.',
    icon: 'flags',
    details: [
      'Hypothesis: FE\'s clearest growth engine is battery enclosures, not general body engineering.',
      'Hypothesis: FE is consciously moving from bespoke consulting toward repeatable intelligence/testing offerings.',
      'Green flag: requirement cascades, trade spaces, reusable internal methods, candor about where metals still win.',
      'Red flag: cannot name programs past demonstrator stage, mostly talks about materials not validation gates.',
      'Red flag: treats China only as a sourcing story, not as a speed/architecture-learning story.',
    ],
  },
  {
    id: 'ingest',
    title: 'Technical ingest prototype',
    kicker: 'Working retrieval demo',
    summary: 'A small ingestion prototype already wired to chunked outputs from mixed engineering sources — page/line provenance, retrieval queries, honest limitations called out inline.',
    icon: 'ingest',
    details: [
      'Ingests mixed Markdown and PDF engineering sources from a project folder.',
      'Chunks outputs with per-document manifests, page/line provenance, and topic tags.',
      'Sample retrieval queries demonstrate "material card calibration"-style lookups against the corpus.',
      'Honest about limits: PDF is text-extraction only today; PPTX support pending python-pptx in the environment.',
      'Keyword retrieval for the demo; embeddings deferred until the multimodal document-object model is defined.',
    ],
  },
]
