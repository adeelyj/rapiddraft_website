// Question bank pulled from the meeting playbook. Searchable / filterable
// live in the meeting. `starred` marks the 12-15 strongest opening questions
// across categories.

export type Category =
  | 'Leadership'
  | 'Technical'
  | 'Battery enclosure'
  | 'CAE & material card'
  | 'Business strategy'
  | 'AI & digital'
  | 'China & global'
  | 'Sustainability'
  | 'Scaling'

export type Question = {
  id: string
  category: Category
  text: string
  starred?: boolean
}

export const CATEGORIES: Category[] = [
  'Leadership',
  'Technical',
  'Battery enclosure',
  'CAE & material card',
  'Business strategy',
  'AI & digital',
  'China & global',
  'Sustainability',
  'Scaling',
]

export const QUESTIONS: Question[] = [
  // Leadership
  { id: 'L1', category: 'Leadership', text: 'Which revenue streams are most strategic for FE over the next two years: engineering services, benchmark intelligence, testing/pre-compliance, sustainability consulting, or something else?', starred: true },
  { id: 'L2', category: 'Leadership', text: 'Which battery-enclosure programs have moved closest to OEM release, and what blocked the rest?' },
  { id: 'L3', category: 'Leadership', text: 'Where do you think FE can win repeatedly against larger engineering houses rather than just occasionally?', starred: true },
  { id: 'L4', category: 'Leadership', text: 'How do you decide when to stay a pure development partner vs. when to push for IP, methods licensing, or a recurring-data product?' },
  { id: 'L5', category: 'Leadership', text: 'What portion of customer demand today is being pulled by regulation vs. cost pressure vs. innovation scouting?' },
  { id: 'L6', category: 'Leadership', text: 'How important is China-derived technology intelligence to your European and Japanese business today?' },
  { id: 'L7', category: 'Leadership', text: 'What did opening Shanghai change commercially that remote China engagement could not?' },
  { id: 'L8', category: 'Leadership', text: 'How do you avoid becoming a "demonstrator company" rather than a "series impact company"?', starred: true },
  { id: 'L9', category: 'Leadership', text: 'Which offerings have the best gross margin and the best repeatability?' },
  { id: 'L10', category: 'Leadership', text: 'How do you think about Mitsui strategically today — market access, commercial leverage, or ownership legacy?' },
  { id: 'L11', category: 'Leadership', text: 'What technical domain do customers most underappreciate until late in a project?' },
  { id: 'L12', category: 'Leadership', text: 'Where do you see the biggest misconception about composite battery housings in OEM organizations?' },
  { id: 'L13', category: 'Leadership', text: 'What kind of technical hire creates the most business value fastest inside FE?' },
  { id: 'L14', category: 'Leadership', text: 'What would have to be true for FE to scale meaningfully without diluting its specialist edge?' },
  { id: 'L15', category: 'Leadership', text: 'If you had to cut one activity area and double down on one, what would they be?' },

  // Technical managers
  { id: 'T1', category: 'Technical', text: 'How do you define the system requirements cascade from vehicle to pack to enclosure to plaque?' },
  { id: 'T2', category: 'Technical', text: 'At concept stage, which load cases kill bad architectures fastest?', starred: true },
  { id: 'T3', category: 'Technical', text: 'How do you decide whether a concept should be thermoplastic-intensive, SMC-heavy, or metal-hybrid?' },
  { id: 'T4', category: 'Technical', text: 'What are your standard correlation gates between coupon, subsystem, component, and full-system validation?' },
  { id: 'T5', category: 'Technical', text: 'Where does FE rely most on external labs today?' },
  { id: 'T6', category: 'Technical', text: 'How do you handle strain-rate sensitivity, temperature dependence, and manufacturing effects in early cards?' },
  { id: 'T7', category: 'Technical', text: 'How do you translate customer-specific abuse cases into generic reusable methods?' },
  { id: 'T8', category: 'Technical', text: 'Which joining or sealing failure mode surprises customers most often?' },
  { id: 'T9', category: 'Technical', text: 'What are the hard-to-model behaviors you still have to cover with engineering judgment?' },
  { id: 'T10', category: 'Technical', text: 'How do you handle fast architecture exploration without losing physical realism?' },
  { id: 'T11', category: 'Technical', text: 'How much of your workflow is solver-limited vs. data-limited?' },
  { id: 'T12', category: 'Technical', text: 'What manufacturing-simulation outputs most often change the structural design?' },
  { id: 'T13', category: 'Technical', text: 'Where are tolerance sensitivities highest in large battery covers and trays?' },
  { id: 'T14', category: 'Technical', text: 'What has changed most in customer expectations since stricter thermal-propagation rules gained momentum?' },
  { id: 'T15', category: 'Technical', text: 'If you had one more great CAE engineer, where would you deploy them first?' },

  // Battery-enclosure-specific
  { id: 'B1', category: 'Battery enclosure', text: 'What is the toughest unsolved problem in composite or thermoplastic HV battery housings?', starred: true },
  { id: 'B2', category: 'Battery enclosure', text: 'Where do metals remain technically superior?' },
  { id: 'B3', category: 'Battery enclosure', text: 'Where do thermoplastics or composites provide non-negotiable value?' },
  { id: 'B4', category: 'Battery enclosure', text: 'How do you design for bottom impact and rocker-to-pack load transfer without overbuilding mass?' },
  { id: 'B5', category: 'Battery enclosure', text: 'How do you handle venting, deflagration pressure, and particle erosion in early concepts?' },
  { id: 'B6', category: 'Battery enclosure', text: 'What do you consider a credible subsystem proxy for full-pack thermal-runaway performance?' },
  { id: 'B7', category: 'Battery enclosure', text: 'How do you think about serviceability and repairability vs. structural efficiency?' },
  { id: 'B8', category: 'Battery enclosure', text: 'What failure modes drive the flange and sealing concept most strongly?' },
  { id: 'B9', category: 'Battery enclosure', text: 'Which architecture is currently most promising for true cost-down at mass-market OEM scale?' },
  { id: 'B10', category: 'Battery enclosure', text: 'What evidence is still required before customers trust composite-intensive housings for broad series adoption?', starred: true },

  // CAE & material card
  { id: 'C1', category: 'CAE & material card', text: 'How do you build first-pass proxy cards when material data are incomplete?' },
  { id: 'C2', category: 'CAE & material card', text: 'What is your minimum viable test matrix before you trust a new crash card?' },
  { id: 'C3', category: 'CAE & material card', text: 'How do you incorporate fiber orientation and process history into structural cards?' },
  { id: 'C4', category: 'CAE & material card', text: 'How do you correlate insert behavior and fastener pull-out in the enclosure context?' },
  { id: 'C5', category: 'CAE & material card', text: 'Which solver/modeling choices are most customer-dependent?' },
  { id: 'C6', category: 'CAE & material card', text: 'How do you manage uncertainty ranges rather than just single deterministic results?' },
  { id: 'C7', category: 'CAE & material card', text: 'Where does mold-flow or warpage most often invalidate a "good" structural concept?' },
  { id: 'C8', category: 'CAE & material card', text: 'How do you handle temperature-conditioned crash or abuse scenarios?' },
  { id: 'C9', category: 'CAE & material card', text: 'Which outputs are hardest to communicate convincingly to non-CAE stakeholders?' },
  { id: 'C10', category: 'CAE & material card', text: 'What part of the simulation pipeline is most ready for automation without sacrificing trust?', starred: true },

  // Business strategy & profitability
  { id: 'S1', category: 'Business strategy', text: 'Which project types have consistently low margins and when do you say no?' },
  { id: 'S2', category: 'Business strategy', text: 'Where can FE charge for value delivered instead of engineering hours consumed?', starred: true },
  { id: 'S3', category: 'Business strategy', text: 'What do you think customers will buy repeatedly from FE even without a new vehicle platform?' },
  { id: 'S4', category: 'Business strategy', text: 'Are benchmark reports and teardown insights already a meaningful business line?' },
  { id: 'S5', category: 'Business strategy', text: 'What is FE’s strongest pricing power today?' },
  { id: 'S6', category: 'Business strategy', text: 'How do you protect know-how in multi-partner demonstrator projects?' },
  { id: 'S7', category: 'Business strategy', text: 'What is your most scalable offering that still uses FE’s core strengths?' },
  { id: 'S8', category: 'Business strategy', text: 'How do you balance custom customer work with investment in reusable internal assets?' },
  { id: 'S9', category: 'Business strategy', text: 'Where do you see the best opportunity for subscription-like revenue?' },
  { id: 'S10', category: 'Business strategy', text: 'Which KPI best predicts good projects for FE — margin, reuse potential, strategic account value, or something else?' },

  // AI & digital engineering
  { id: 'A1', category: 'AI & digital', text: 'Which engineering tasks consume expert time but add little differentiated value?', starred: true },
  { id: 'A2', category: 'AI & digital', text: 'Where would automated pre-processing save the most time today?' },
  { id: 'A3', category: 'AI & digital', text: 'How standardized are your report structures, load-case libraries, and validation templates?' },
  { id: 'A4', category: 'AI & digital', text: 'Do you already use any internal knowledge-search or semantic retrieval across old projects?' },
  { id: 'A5', category: 'AI & digital', text: 'Would you trust AI to suggest architecture options, or only to accelerate evaluation of human-generated options?' },
  { id: 'A6', category: 'AI & digital', text: 'Where is traceable evidence capture weakest today — requirements, simulation assumptions, test correlation, or decisions?', starred: true },
  { id: 'A7', category: 'AI & digital', text: 'How much time is currently spent rebuilding similar models instead of reusing structured assets?' },
  { id: 'A8', category: 'AI & digital', text: 'Would a material-card assistant be valuable if it exposed assumptions and uncertainty explicitly?' },
  { id: 'A9', category: 'AI & digital', text: 'What customer-facing digital tool would create the most commercial leverage — benchmark dashboard, cost/LCA calculator, or compliance cockpit?' },
  { id: 'A10', category: 'AI & digital', text: 'What kind of AI proposal from a candidate sounds useful rather than generic?' },

  // China & global
  { id: 'CH1', category: 'China & global', text: 'What are Chinese OEMs doing today in battery-housing architecture that European OEMs still underestimate?', starred: true },
  { id: 'CH2', category: 'China & global', text: 'What have you learned from Chinese battery teardowns that Western clients found genuinely actionable?' },
  { id: 'CH3', category: 'China & global', text: 'Are Chinese customers mostly ahead on cost engineering, architecture aggressiveness, vertical integration, or speed?' },
  { id: 'CH4', category: 'China & global', text: 'Where is Japan still distinct in engineering priorities vs. Europe and China?' },
  { id: 'CH5', category: 'China & global', text: 'What work is best done locally in China vs. centrally in Munich?' },
  { id: 'CH6', category: 'China & global', text: 'How do global customers use FE’s China insights in actual product decisions?' },
  { id: 'CH7', category: 'China & global', text: 'Which kinds of customers ask for teardown intelligence instead of classic development support?' },
  { id: 'CH8', category: 'China & global', text: 'Are customers looking more for "what China is doing now" or "what will matter in Europe next"?' },
  { id: 'CH9', category: 'China & global', text: 'Where is regional regulation divergence most painful for enclosure development?' },
  { id: 'CH10', category: 'China & global', text: 'Which region is currently generating the strongest commercial pull for FE?' },

  // Sustainability
  { id: 'SU1', category: 'Sustainability', text: 'How do you stop LCA from becoming an after-the-fact presentation rather than a design input?' },
  { id: 'SU2', category: 'Sustainability', text: 'What assumptions matter most in battery-enclosure LCAs and where are customers often sloppy?' },
  { id: 'SU3', category: 'Sustainability', text: 'How do you compare low-mass / high-process-energy concepts against heavier but mature metal routes?' },
  { id: 'SU4', category: 'Sustainability', text: 'What does a realistic circularity story look like for SMC vs. thermoplastic battery housings?' },
  { id: 'SU5', category: 'Sustainability', text: 'How do customers react when sustainability and cost objectives conflict?' },
  { id: 'SU6', category: 'Sustainability', text: 'Which end-of-life pathway is most credible for the concepts you are publicizing?' },
  { id: 'SU7', category: 'Sustainability', text: 'How do you handle recycled-content uncertainty in early engineering development?' },
  { id: 'SU8', category: 'Sustainability', text: 'What will upcoming ELV and product-footprint expectations change in enclosure design decisions?' },
  { id: 'SU9', category: 'Sustainability', text: 'Where is mono-materiality genuinely helpful, and where is it marketing overreach?' },
  { id: 'SU10', category: 'Sustainability', text: 'Which sustainability metric actually changes customer decisions — CO₂, recycled content, disassembly effort, or total value recovery?' },

  // Scaling
  { id: 'SC1', category: 'Scaling', text: 'How many projects reuse a common internal method or data asset from earlier work?', starred: true },
  { id: 'SC2', category: 'Scaling', text: 'What percentage of new business comes from repeat customers?' },
  { id: 'SC3', category: 'Scaling', text: 'Which internal tools have become standardized across regions?' },
  { id: 'SC4', category: 'Scaling', text: 'Are your benchmark/teardown products sold repeatedly or still mostly bespoke?' },
  { id: 'SC5', category: 'Scaling', text: 'How often do early feasibility projects convert into deeper engineering phases?' },
  { id: 'SC6', category: 'Scaling', text: 'What capabilities are now mature enough to quote with confidence rather than estimate loosely?' },
  { id: 'SC7', category: 'Scaling', text: 'Which partner relationships are systematic rather than one-off?' },
  { id: 'SC8', category: 'Scaling', text: 'Do your battery programs share common architecture building blocks?' },
  { id: 'SC9', category: 'Scaling', text: 'What has become faster in the last 18 months because FE learned and standardized something?' },
  { id: 'SC10', category: 'Scaling', text: 'What commercial offering today could double revenue without doubling headcount?', starred: true },
]
