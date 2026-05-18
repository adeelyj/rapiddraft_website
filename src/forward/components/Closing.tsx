// Forward x RapidDraft - questions for the meeting, drawn from our own deep
// research (perplexity + GPT). Each question carries a one-line italic
// subtitle explaining what a candid answer would surface, plus a small
// source citation visible on hover.

type Question = {
  text: string
  subtitle: string
  source: string
}

const QUESTIONS: Question[] = [
  {
    text:
      'Both your SMC and Megamolding battery enclosures look stuck around TRL 6-7. Which single demonstrator is closest to an OEM SOP nomination, and what specifically is still blocking it?',
    subtitle:
      'Reveals whether FE is genuinely converting demonstrators into series wins - the place a review / collaboration tool earns or loses relevance.',
    source:
      'GPT deep-research report - multiple battery enclosures publicly "validated for series feasibility" but no disclosed SOP awards.',
  },
  {
    text:
      'Your 2024 deck calls poor FRP crash material cards the reason designers default to metals. Where in that card pipeline are your engineers still rebuilding from scratch each project?',
    subtitle:
      'Forces a candid answer on reuse vs. bespoke work - exactly where a RapidDraft-style knowledge layer over CAE artefacts has the highest leverage.',
    source: "GPT deep-research report - FE's 2024 SPE ACCE deck on material-card maturity as the root bottleneck.",
  },
  {
    text:
      'The 2025 Global Fire-Safety Test Program tore down eight packs from VW to Xiaomi. Is that intelligence a paid subscription, or still feeding one-off engineering RFPs?',
    subtitle:
      "Tests whether FE's most productizable asset - bulk teardown data - is a recurring product line yet, or trapped inside consulting hours.",
    source: 'Perplexity research - 2025 Global EV Battery Fire Safety Test Program comparing eight OEM packs.',
  },
  {
    text:
      'GB 38031-2025 takes effect July 1, 2026. How many of your current OEM conversations are pulled by that deadline versus by cost or weight targets?',
    subtitle:
      'A high regulation-pull number means FE has a narrow, time-boxed window to productize compliance - a clear opening for clause-level review workflow.',
    source: 'Both reports - GB 38031-2025 flagged as the strongest near-term commercial pull.',
  },
  {
    text:
      'With ~26 people across Munich, Nagoya, Shanghai and Detroit, how do you keep CAE assumptions, material cards, and DFM rules consistent across sites - or do you not yet?',
    subtitle:
      'Exposes whether FE has internal tooling or is held together by a handful of senior experts - directly frames where a shared review platform fits.',
    source: 'Perplexity research - global coordination pain point across four offices with a small team.',
  },
  {
    text:
      "You lead Design-for-Circularity inside BMW's FSCM consortium. When has an LCA result actually changed an architecture decision early, versus arriving as a slide at the end?",
    subtitle:
      'Separates real DfS engineering from CSR theater - indicates whether sustainability data is a live design input the CO2 agent should surface at concept stage.',
    source: 'Perplexity research - FSCM role and DfS positioning, with the risk LCA stays "marketing rather than design input."',
  },
  {
    text:
      'Mitsui has been a strategic shareholder since 2016. What does it unlock for you today beyond ownership legacy - Japanese OEM access, capital for productization, or something else?',
    subtitle:
      'Probes whether FE has real capital and channel leverage to scale into productized offerings, or remains a boutique plateaued under its anchor investor.',
    source: "GPT deep-research report - Mitsui's 2016 stake confirmed; the commercial yield is undefined.",
  },
]

const CALL_TO_ACTION_ITEMS = [
  'Define pilot scope for the next 2-3 months',
  'Data access and cloud strategy',
  'Problem scope (design review, collaboration, documentation)',
  'On-site meeting',
]

export function Closing() {
  return (
    <section id="closing" className="relative scroll-mt-16">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="max-w-4xl rounded-[1.75rem] border border-stone-200/90 bg-white px-6 py-8 shadow-[0_20px_50px_-38px_rgba(17,24,39,0.2)] sm:px-8">
          <span className="inline-block font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-primary">
            Call to action
          </span>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {CALL_TO_ACTION_ITEMS.map((item, index) => (
              <div
                key={item}
                className="rounded-[1.25rem] border border-stone-200/80 bg-[#fffaf7] px-4 py-4"
              >
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-40">
                  {`0${index + 1}`}
                </p>
                <p className="mt-2 text-body font-semibold text-ink">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 max-w-2xl">
          <span className="inline-block font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-primary">
            Forward x RapidDraft
          </span>
          <h2 className="mt-4 text-[2rem] font-semibold leading-[1.1] tracking-tight text-ink sm:text-[2.5rem]">
            Questions for the meeting.
          </h2>
          <p className="mt-4 text-meta text-ink-60">
            Drawn from our own deep-research and perplexity reports on Forward Engineering - the seven questions most likely to surface a sharp answer.
          </p>
        </div>

        <ol className="mt-12 max-w-4xl space-y-8">
          {QUESTIONS.map((q, i) => (
            <li key={q.text} className="group">
              <div className="flex gap-6">
                <span className="font-mono text-meta tabular-nums text-ink-40">{`0${i + 1}`}</span>
                <div className="flex-1">
                  <p className="text-body text-ink">{q.text}</p>
                  <p className="mt-2 text-meta italic text-ink-60">{q.subtitle}</p>
                  <p
                    title={q.source}
                    className="mt-2 line-clamp-1 cursor-help text-[11px] text-ink-40 underline-offset-4 group-hover:underline"
                  >
                    Source · {q.source}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-16 max-w-3xl">
          <p className="text-body text-ink">
            Pick one enclosure program. We test this workflow on it next week.
          </p>
          <a
            href="mailto:adeel@rapiddraft.ai?subject=Forward%20%C3%97%20RapidDraft%20%E2%80%94%20pilot%20program"
            className="mt-4 inline-flex items-center gap-2 text-meta font-semibold text-primary underline-offset-4 hover:underline"
          >
            Start a one-program pilot <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  )
}

// Minimal footer.
export function Footer() {
  return (
    <footer className="border-t border-stone-200/80">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between">
          <p className="text-meta text-ink-60">
            Adeel Yawar Jamil ·{' '}
            <a href="mailto:adeel@rapiddraft.ai" className="text-ink-60 underline-offset-4 hover:underline">
              adeel@rapiddraft.ai
            </a>
          </p>
          <a
            href="https://rapiddraft.ai"
            target="_blank"
            rel="noreferrer"
            className="text-meta text-ink-60 underline-offset-4 hover:underline"
          >
            rapiddraft.ai
          </a>
        </div>
      </div>
    </footer>
  )
}
