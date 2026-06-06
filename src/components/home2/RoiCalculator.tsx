/* ROI calculator (RapidDraft v2) — restyled to the flat hairline design language.
   Math is preserved verbatim from the original Product page implementation. */
import { useState } from 'react';
import { Eyebrow, H2, Body } from '../ui/primitives';

const WORKING_WEEKS_PER_YEAR = 42;
const AVOIDED_COST_PER_ISSUE = 5000;

type RoiValues = { engineers: number; hoursPerWeek: number; hourlyRate: number };

const roiInputs: Array<{
  key: keyof RoiValues;
  label: string;
  min: number;
  max: number;
  step: number;
  format: (v: number) => string;
}> = [
  { key: 'engineers', label: 'Number of engineers', min: 1, max: 20, step: 1, format: (v) => `${v}` },
  { key: 'hoursPerWeek', label: 'Hours spent per week', min: 1, max: 40, step: 1, format: (v) => `${v} hours` },
  { key: 'hourlyRate', label: 'Average hourly rate', min: 30, max: 200, step: 5, format: (v) => formatEuro(v) },
];

function formatEuro(value: number) {
  return `€${Math.round(value).toLocaleString('en-US')}`;
}

function rangeFill(value: number, min: number, max: number) {
  const pct = ((value - min) / (max - min)) * 100;
  return `linear-gradient(to right, var(--rd-accent) 0%, var(--rd-accent) ${pct}%, var(--rd-hair) ${pct}%, var(--rd-hair) 100%)`;
}

export default function RoiCalculator() {
  const [roi, setRoi] = useState<RoiValues>({ engineers: 5, hoursPerWeek: 3, hourlyRate: 60 });

  const savedHoursPerEngineerPerWeek = Math.max(3, roi.hoursPerWeek * 0.3);
  const annualTimeSavingValue =
    roi.engineers * savedHoursPerEngineerPerWeek * roi.hourlyRate * WORKING_WEEKS_PER_YEAR;
  const annualAvoidedIssueValue = roi.engineers * AVOIDED_COST_PER_ISSUE;
  const totalValue = annualTimeSavingValue + annualAvoidedIssueValue;

  const results = [
    { label: 'Annual time-saving value', value: formatEuro(annualTimeSavingValue), highlight: false },
    { label: 'Annual avoided-issue value', value: formatEuro(annualAvoidedIssueValue), highlight: false },
    { label: 'Total value', value: formatEuro(totalValue), highlight: true },
  ];

  return (
    <section id="roi-calculator" className="rd-section scroll-mt-24 rd-divider">
      <div className="rd-container">
        <div className="max-w-2xl">
          <Eyebrow className="mb-5">ROI calculator</Eyebrow>
          <H2>Estimate the annual value of faster engineering review</H2>
          <Body soft className="mt-5">
            Adjust the core assumptions to see how reduced review effort and fewer late issues turn
            into annual value.
          </Body>
        </div>

        <div className="mt-10 grid gap-px overflow-hidden rounded-[10px] border border-[var(--rd-hair)] bg-[var(--rd-hair)] lg:grid-cols-[1.05fr_0.95fr]">
          {/* Parameters */}
          <div className="bg-[var(--rd-surface)] p-6 sm:p-8">
            <div
              className="text-[12px] uppercase tracking-[0.12em] text-[var(--rd-fg-3)]"
              style={{ fontFamily: 'var(--rd-meta)' }}
            >
              Parameters
            </div>
            <div className="mt-7 flex flex-col gap-7">
              {roiInputs.map((input) => {
                const value = roi[input.key];
                return (
                  <label key={input.key} htmlFor={`roi-${input.key}`} className="block">
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="text-[15px] text-[var(--rd-fg)]">{input.label}</span>
                      <span
                        className="text-[15px] text-[var(--rd-accent)]"
                        style={{ fontFamily: 'var(--rd-mono)' }}
                      >
                        {input.format(value)}
                      </span>
                    </div>
                    <input
                      id={`roi-${input.key}`}
                      type="range"
                      min={input.min}
                      max={input.max}
                      step={input.step}
                      value={value}
                      onChange={(e) =>
                        setRoi((c) => ({ ...c, [input.key]: Number(e.target.value) }))
                      }
                      style={{ background: rangeFill(value, input.min, input.max) }}
                      className="mt-3 h-1.5 w-full cursor-pointer appearance-none rounded-full outline-none [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-[var(--rd-surface)] [&::-moz-range-thumb]:bg-[var(--rd-inverse)] [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-[var(--rd-surface)] [&::-webkit-slider-thumb]:bg-[var(--rd-inverse)]"
                    />
                  </label>
                );
              })}
            </div>
          </div>

          {/* Results */}
          <div className="grid gap-px bg-[var(--rd-hair)]" aria-live="polite">
            {results.map((r) => (
              <div
                key={r.label}
                className="flex items-center justify-between gap-6 bg-[var(--rd-surface)] p-6 sm:px-8"
              >
                <div className="text-[14px] text-[var(--rd-fg-2)]">{r.label}</div>
                <div
                  className="text-[26px] sm:text-[30px]"
                  style={{
                    fontFamily: 'var(--rd-sans)',
                    fontWeight: 500,
                    letterSpacing: '-0.02em',
                    color: r.highlight ? 'var(--rd-accent)' : 'var(--rd-fg-strong)',
                  }}
                >
                  {r.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        <Body soft className="mt-6 max-w-3xl text-[14px]">
          Conservative by design. Time saved is the higher of 3 hours per engineer per week or 30% of
          current effort. Each engineer avoids at least one issue per year, at an average avoided cost
          of about {formatEuro(AVOIDED_COST_PER_ISSUE)}. The model assumes {WORKING_WEEKS_PER_YEAR}{' '}
          working weeks per year.
        </Body>
      </div>
    </section>
  );
}
