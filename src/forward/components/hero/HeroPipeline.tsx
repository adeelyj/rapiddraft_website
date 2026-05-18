// Pipeline variant — per sketch.
//
// Layout: Design — IN line — [ orange box of 5 stages, labeled
// "RapidDraft Agent" ] — OUT line — Manufacturing.
//
// Three independent orange dots flow simultaneously:
//   1) IN dot — short rail from Design into the box,
//   2) Perimeter dot — orbits the box edges (iteration signal),
//   3) OUT dot — short rail from the box to Manufacturing.

import { HERO_MODULES } from '../../data/modules'
import { ModuleTile } from '../ModuleTile'

export function HeroPipeline() {
  return (
    <div className="mt-24 lg:mt-32">
      <div className="flex items-center gap-4 sm:gap-6">
        <PipelineNode label="Design" sub="CAD authoring" />

        <FlowSegment kind="in" />

        {/* Orange box wrapping the 5 stages */}
        <div className="relative flex-1 rounded-2xl border-2 border-primary/90 px-5 py-9 sm:px-7 sm:py-10">
          {/* "RAPIDDRAFT AGENT" label sits on the top edge, cream backing
              creates a tab cut through the orange border. */}
          <span
            className="absolute -top-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#fffaf7] px-3 font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-primary"
          >
            RapidDraft Agent
          </span>

          {/* Perimeter dot — orbits the four edges of this box */}
          <span className="pipeline-perimeter-dot" aria-hidden />

          {/* 5 stages */}
          <div className="grid grid-cols-5 items-start gap-3 sm:gap-4">
            {HERO_MODULES.map((m, i) => (
              <PipelineStage key={m.id} module={m} index={i + 1} />
            ))}
          </div>
        </div>

        <FlowSegment kind="out" />

        <PipelineNode label="Manufacturing" sub="CAM · suppliers" />
      </div>

      <style>{`
        @keyframes pipeline-segment-flow {
          0%   { left: 0%;   opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 1; }
          100% { left: 100%; opacity: 0; }
        }
        .pipeline-segment-dot {
          position: absolute;
          top: 50%;
          height: 0.45rem;
          width: 0.45rem;
          margin-top: -0.225rem;
          margin-left: -0.225rem;
          border-radius: 9999px;
          background: #ea580c;
          animation: pipeline-segment-flow 2.6s linear infinite;
        }
        .pipeline-segment-dot-out {
          animation-delay: 1.3s;
        }

        @keyframes pipeline-perimeter-flow {
          0%    { top: 50%;  left: 0%;   }
          12.5% { top: 0%;   left: 0%;   }
          37.5% { top: 0%;   left: 100%; }
          62.5% { top: 100%; left: 100%; }
          87.5% { top: 100%; left: 0%;   }
          100%  { top: 50%;  left: 0%;   }
        }
        .pipeline-perimeter-dot {
          position: absolute;
          height: 0.6rem;
          width: 0.6rem;
          margin-top: -0.3rem;
          margin-left: -0.3rem;
          border-radius: 9999px;
          background: #ea580c;
          box-shadow: 0 0 0 4px rgba(234, 88, 12, 0.18);
          animation: pipeline-perimeter-flow 7s linear infinite;
          pointer-events: none;
          z-index: 2;
        }
      `}</style>
    </div>
  )
}

function PipelineNode({ label, sub }: { label: string; sub: string }) {
  return (
    <div className="flex shrink-0 flex-col items-center gap-2">
      <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-ink bg-white">
        <span className="text-meta font-semibold text-ink">{label[0]}</span>
      </div>
      <div className="text-center">
        <div className="text-meta font-semibold text-ink">{label}</div>
        <div className="text-[10px] uppercase tracking-[0.16em] text-ink-40">{sub}</div>
      </div>
    </div>
  )
}

function FlowSegment({ kind }: { kind: 'in' | 'out' }) {
  return (
    <div className="relative h-1 w-12 shrink-0 sm:w-16">
      <div className="absolute inset-0 top-1/2 h-px -translate-y-1/2 bg-stone-300" />
      <span
        className={`pipeline-segment-dot ${kind === 'out' ? 'pipeline-segment-dot-out' : ''}`}
        aria-hidden
      />
    </div>
  )
}

// One stage inside the orange box: stage number, ModuleTile.
// No stage-tick dot anymore (per feedback).
function PipelineStage({
  module,
  index,
}: {
  module: (typeof HERO_MODULES)[number]
  index: number
}) {
  return (
    <div className="flex flex-col items-center">
      <span className="font-mono text-[10px] font-bold tabular-nums text-ink-40">{`0${index}`}</span>
      <div className="mt-1 w-full">
        <ModuleTile module={module} variant="compact" />
      </div>
    </div>
  )
}
