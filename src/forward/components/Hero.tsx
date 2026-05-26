import { HeroPipeline } from './hero/HeroPipeline'

export function Hero() {
  return (
    <section id="where-we-fit" className="relative scroll-mt-16">
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-32 sm:px-8 lg:px-12 lg:pt-40">
        <div className="max-w-3xl">
          <h1 className="text-[2.25rem] font-semibold leading-[1.05] tracking-tight text-ink sm:text-[3rem] lg:text-[3.75rem]">
            An agentic layer for engineering review, analysis and collaboration.
          </h1>
          <p className="mt-6 max-w-2xl text-body text-ink-60">
            Drawing release, design review, and manufacturing feedback - kept on the CAD model,
            re-run every revision.
          </p>
          <div className="mt-8">
            <a
              href="https://app.rapiddraft.ai/?demo=fe"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-meta font-semibold text-primary underline-offset-4 transition hover:underline"
            >
              Open the workspace
              <span aria-hidden>&rarr;</span>
            </a>
          </div>
        </div>

        <HeroPipeline />
      </div>
    </section>
  )
}
