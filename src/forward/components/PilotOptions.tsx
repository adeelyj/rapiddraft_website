import { Check } from 'lucide-react'
import { defaultDealRoomV3Content } from '../../data/dealRoomV3Content'

const offerStep = defaultDealRoomV3Content.onboardingSteps.find((step) => step.id === 'offer-selection')

export function PilotOptions() {
  if (!offerStep || !offerStep.offers) {
    return null
  }

  return (
    <section id="pilot-options" className="relative scroll-mt-16 overflow-hidden border-b border-stone-200/70 bg-white py-20 md:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,rgba(255,237,213,0.5),transparent_40%)]" />
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-primary">
            03
          </span>
          <h2 className="mt-4 text-[2.5rem] font-semibold leading-[1.02] tracking-tight text-ink sm:text-[3.2rem]">
            {offerStep.detailTitle}
          </h2>
          <p className="mt-5 text-body text-ink-60">{offerStep.detailBody}</p>
        </div>

        <div className="mt-12 grid gap-4 xl:grid-cols-3">
          {offerStep.offers.map((offer) => {
            const emphasizeAssess = offer.title === 'Assess'
            return (
              <article
                key={offer.title}
                className={`flex h-full flex-col rounded-[2rem] p-5 sm:p-6 ${
                  emphasizeAssess
                    ? 'warm-panel border-orange-200/90 bg-[linear-gradient(180deg,rgba(255,244,235,0.98),rgba(255,255,255,0.98))] shadow-[0_30px_72px_-42px_rgba(234,88,12,0.24)]'
                    : 'surface-card'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-[1.2rem] font-semibold leading-[1.12] tracking-tight text-gray-950 sm:text-[1.35rem]">
                    {offer.title}
                  </h3>
                  {emphasizeAssess ? (
                    <span className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                      Recommended
                    </span>
                  ) : null}
                </div>
                <p className="mt-3 text-[13px] font-semibold leading-6 text-primary sm:text-sm">{offer.subtext}</p>
                <p className="mt-3 text-[15px] leading-7 text-gray-600 sm:text-base">{offer.description}</p>
                <ul className="mt-4 space-y-2">
                  {offer.details.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-gray-700">
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-50 text-primary">
                        <Check className="h-3 w-3 text-primary" />
                      </span>
                      <span className="text-[15px] leading-7 text-gray-700 sm:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-5">
                  <div className="inline-flex rounded-full border border-orange-200/70 bg-orange-50/70 px-4 py-2 text-[13px] font-semibold leading-6 text-gray-900">
                    {offer.footer.replace('â€“', '-')}
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
