// ROI Calculator — ported verbatim from the rapiddraft_website
// `codex/rapiddraft-changes` branch (src/pages/Product.tsx). The only
// changes from the original RoiCalculatorSection:
//   - removed the <Reveal> scroll-fade wrappers (framer-motion not in
//     this minimalist build);
//   - added id="forward-fit" so the existing #forward-fit anchor still
//     scrolls here.
// Logic, copy, slider range/step, and visual styling kept identical.

import { useState } from 'react'

const WORKING_WEEKS_PER_YEAR = 42
const AVOIDED_COST_PER_ISSUE = 5000

type RoiValues = {
  engineers: number
  hoursPerWeek: number
  hourlyRate: number
}

const roiInputs: Array<{
  key: keyof RoiValues
  label: string
  min: number
  max: number
  step: number
  formatValue: (value: number) => string
}> = [
  {
    key: 'engineers',
    label: 'Number of engineers',
    min: 1,
    max: 20,
    step: 1,
    formatValue: (value) => `${value}`,
  },
  {
    key: 'hoursPerWeek',
    label: 'Hours spent per week',
    min: 1,
    max: 40,
    step: 1,
    formatValue: (value) => `${value} hours`,
  },
  {
    key: 'hourlyRate',
    label: 'Average hourly rate',
    min: 30,
    max: 200,
    step: 5,
    formatValue: (value) => formatEuro(value),
  },
]

function formatEuro(value: number) {
  return `€${Math.round(value).toLocaleString('en-US')}`
}

function getRangeFill(value: number, min: number, max: number) {
  const percentage = ((value - min) / (max - min)) * 100
  return `linear-gradient(to right, #ea580c 0%, #ea580c ${percentage}%, #e7e5e4 ${percentage}%, #e7e5e4 100%)`
}

export function ROICalculator() {
  const [roiValues, setRoiValues] = useState<RoiValues>({
    engineers: 5,
    hoursPerWeek: 3,
    hourlyRate: 60,
  })

  const savedHoursPerEngineerPerWeek = Math.max(3, roiValues.hoursPerWeek * 0.3)
  const annualTimeSavingValue =
    roiValues.engineers *
    savedHoursPerEngineerPerWeek *
    roiValues.hourlyRate *
    WORKING_WEEKS_PER_YEAR
  const annualAvoidedIssueValue = roiValues.engineers * AVOIDED_COST_PER_ISSUE
  const totalValue = annualTimeSavingValue + annualAvoidedIssueValue

  const results = [
    {
      label: 'Annual time-saving value',
      value: formatEuro(annualTimeSavingValue),
      description: 'Value from reduced repeated review and checking effort.',
    },
    {
      label: 'Annual avoided-issue value',
      value: formatEuro(annualAvoidedIssueValue),
      description: 'Value from fewer late drawing, model, or release issues.',
    },
    {
      label: 'Total value',
      value: formatEuro(totalValue),
      description: 'Estimated annual customer value from time savings and avoided issues.',
      highlighted: true as const,
    },
  ]

  return (
    <section
      id="forward-fit"
      className="relative scroll-mt-16 overflow-hidden border-b border-stone-200/70 bg-white py-16 md:py-24"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top_left,rgba(255,237,213,0.52),transparent_34%)]" />
      <div className="mx-auto max-w-[1180px] px-5 sm:px-6 lg:px-8 xl:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="site-kicker">ROI Calculator</div>
          <h2 className="section-title mt-5 text-balance">
            Estimate the annual value of faster engineering review
          </h2>
          <p className="section-copy mx-auto mt-5 max-w-2xl">
            Adjust the core assumptions to see how reduced review effort and fewer late issues can translate into annual value.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-[1120px]">
          <div className="warm-panel relative p-5 sm:p-6 lg:p-8">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,0.56fr)_minmax(0,0.44fr)] lg:items-stretch">
              <div className="flex h-full flex-col">
                <h3 className="card-title">Parameters</h3>
                <p className="card-copy mt-3 max-w-xl">
                  Use a conservative team view. The calculator assumes time savings are the higher of 3 hours per engineer per week or 30% of the current weekly effort entered.
                </p>

                <div className="mt-8 flex flex-col gap-8 lg:mt-10 lg:flex-1 lg:justify-between">
                  {roiInputs.map((input) => {
                    const value = roiValues[input.key]

                    return (
                      <label key={input.key} htmlFor={`roi-${input.key}`} className="block">
                        <div className="flex items-baseline justify-between gap-4">
                          <span className="text-sm font-semibold text-gray-950 sm:text-base">
                            {input.label}
                          </span>
                          <span className="text-sm font-semibold text-primary">
                            {input.formatValue(value)}
                          </span>
                        </div>
                        <input
                          id={`roi-${input.key}`}
                          type="range"
                          min={input.min}
                          max={input.max}
                          step={input.step}
                          value={value}
                          onChange={(event) => {
                            const nextValue = Number(event.target.value)
                            setRoiValues((current) => ({
                              ...current,
                              [input.key]: nextValue,
                            }))
                          }}
                          style={{ background: getRangeFill(value, input.min, input.max) }}
                          className="mt-4 h-2 w-full cursor-pointer appearance-none rounded-full outline-none transition focus-visible:ring-4 focus-visible:ring-orange-500/15 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-[3px] [&::-moz-range-thumb]:border-white [&::-moz-range-thumb]:bg-gray-950 [&::-moz-range-thumb]:shadow-[0_8px_18px_-8px_rgba(17,24,39,0.6)] [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-[3px] [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:bg-gray-950 [&::-webkit-slider-thumb]:shadow-[0_8px_18px_-8px_rgba(17,24,39,0.6)]"
                        />
                      </label>
                    )
                  })}
                </div>
              </div>

              <div className="grid gap-4" aria-live="polite">
                {results.map((result) => (
                  <div
                    key={result.label}
                    className={`rounded-[1.5rem] border px-5 py-4 shadow-[0_18px_46px_-38px_rgba(17,24,39,0.22)] sm:px-6 ${
                      result.highlighted
                        ? 'border-orange-200 bg-[#fff7ed]'
                        : 'border-stone-200/90 bg-white'
                    }`}
                  >
                    <div className="text-sm font-semibold text-gray-600">{result.label}</div>
                    <div
                      className={`mt-2 text-4xl font-semibold tracking-tight sm:text-[2.55rem] ${
                        result.highlighted ? 'text-primary' : 'text-gray-950'
                      }`}
                    >
                      {result.value}
                    </div>
                    <p className="mt-2 text-sm leading-6 text-gray-600">{result.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 rounded-[1.5rem] border border-stone-200/80 bg-white/80 px-5 py-5 text-sm leading-7 text-gray-600 sm:px-6 sm:text-base sm:leading-8">
              Assuming {roiValues.engineers} engineers spend {roiValues.hoursPerWeek} hours per week with an average hourly rate of {formatEuro(roiValues.hourlyRate)}, we expect an annual time-saving value of{' '}
              <span className="font-semibold text-gray-950">{formatEuro(annualTimeSavingValue)}</span> and annual avoided-issue value of{' '}
              <span className="font-semibold text-gray-950">{formatEuro(annualAvoidedIssueValue)}</span>, giving total value of{' '}
              <span className="font-semibold text-primary">{formatEuro(totalValue)}</span>. We additionally assume every engineer avoids at least 1 issue per year, with an average avoided cost per issue of {formatEuro(AVOIDED_COST_PER_ISSUE)}.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
