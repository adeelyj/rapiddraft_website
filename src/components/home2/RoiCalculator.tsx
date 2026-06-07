/* ROI calculator (RapidDraft v2) — restyled to the flat hairline design language.
   Math is preserved verbatim from the original Product page implementation. */
import { useState } from 'react';
import { Eyebrow, H2, Intro, Body } from '../ui/primitives';
import { useLang } from '../../i18n/LanguageContext';

const WORKING_WEEKS_PER_YEAR = 42;
const AVOIDED_COST_PER_ISSUE = 5000;

type RoiValues = { engineers: number; hoursPerWeek: number; hourlyRate: number };

const CONTENT = {
  en: {
    eyebrow: 'ROI calculator',
    heading: 'Estimate the annual value of faster engineering review',
    intro:
      'Adjust the core assumptions to see how reduced review effort and fewer late issues turn into annual value.',
    parametersLabel: 'Parameters',
    inputs: {
      engineers: 'Number of engineers',
      hoursPerWeek: 'Hours spent per week',
      hourlyRate: 'Average hourly rate',
    },
    hoursUnit: (v: number) => `${v} hours`,
    results: {
      annualTimeSaving: 'Annual time-saving value',
      annualAvoidedIssue: 'Annual avoided-issue value',
      total: 'Total value',
    },
    note: (avoidedCost: string, weeks: number) =>
      `Conservative by design. Time saved is the higher of 3 hours per engineer per week or 30% of current effort. Each engineer avoids at least one issue per year, at an average avoided cost of about ${avoidedCost}. The model assumes ${weeks} working weeks per year.`,
  },
  de: {
    eyebrow: 'ROI-Rechner',
    heading: 'Schätzen Sie den jährlichen Wert schnellerer technischer Prüfungen',
    intro:
      'Passen Sie die zentralen Annahmen an und sehen Sie, wie weniger Prüfaufwand und weniger späte Fehler zu jährlichem Wert werden.',
    parametersLabel: 'Parameter',
    inputs: {
      engineers: 'Anzahl der Ingenieure',
      hoursPerWeek: 'Stunden pro Woche',
      hourlyRate: 'Durchschnittlicher Stundensatz',
    },
    hoursUnit: (v: number) => `${v} Stunden`,
    results: {
      annualTimeSaving: 'Jährlicher Zeitersparniswert',
      annualAvoidedIssue: 'Jährlicher Wert vermiedener Fehler',
      total: 'Gesamtwert',
    },
    note: (avoidedCost: string, weeks: number) =>
      `Bewusst konservativ. Die Zeitersparnis ist der höhere Wert aus 3 Stunden je Ingenieur und Woche oder 30% des Aufwands. Jeder vermeidet mindestens einen Fehler pro Jahr (Ø ${avoidedCost}); das Modell rechnet mit ${weeks} Arbeitswochen pro Jahr.`,
  },
} as const;

function formatEuro(value: number) {
  return `€${Math.round(value).toLocaleString('en-US')}`;
}

function rangeFill(value: number, min: number, max: number) {
  const pct = ((value - min) / (max - min)) * 100;
  return `linear-gradient(to right, var(--rd-accent) 0%, var(--rd-accent) ${pct}%, var(--rd-hair) ${pct}%, var(--rd-hair) 100%)`;
}

export default function RoiCalculator() {
  const { lang } = useLang();
  const t = CONTENT[lang];
  const [roi, setRoi] = useState<RoiValues>({ engineers: 5, hoursPerWeek: 3, hourlyRate: 60 });

  const roiInputs: Array<{
    key: keyof RoiValues;
    label: string;
    min: number;
    max: number;
    step: number;
    format: (v: number) => string;
  }> = [
    { key: 'engineers', label: t.inputs.engineers, min: 1, max: 20, step: 1, format: (v) => `${v}` },
    { key: 'hoursPerWeek', label: t.inputs.hoursPerWeek, min: 1, max: 40, step: 1, format: (v) => t.hoursUnit(v) },
    { key: 'hourlyRate', label: t.inputs.hourlyRate, min: 30, max: 200, step: 5, format: (v) => formatEuro(v) },
  ];

  const savedHoursPerEngineerPerWeek = Math.max(3, roi.hoursPerWeek * 0.3);
  const annualTimeSavingValue =
    roi.engineers * savedHoursPerEngineerPerWeek * roi.hourlyRate * WORKING_WEEKS_PER_YEAR;
  const annualAvoidedIssueValue = roi.engineers * AVOIDED_COST_PER_ISSUE;
  const totalValue = annualTimeSavingValue + annualAvoidedIssueValue;

  const results = [
    { label: t.results.annualTimeSaving, value: formatEuro(annualTimeSavingValue), highlight: false },
    { label: t.results.annualAvoidedIssue, value: formatEuro(annualAvoidedIssueValue), highlight: false },
    { label: t.results.total, value: formatEuro(totalValue), highlight: true },
  ];

  return (
    <section id="roi-calculator" className="rd-section rd-screen">
      <div className="rd-container">
        <div className="mx-auto max-w-[860px] text-center">
          <Eyebrow className="mb-5">{t.eyebrow}</Eyebrow>
          <H2>{t.heading}</H2>
          <Intro className="mx-auto mt-5 max-w-[760px]">
            {t.intro}
          </Intro>
        </div>

        <div className="mx-auto mt-9 grid w-full max-w-[1040px] gap-px overflow-hidden rounded-[16px] border border-[var(--rd-hair)] bg-[var(--rd-hair)] text-left lg:grid-cols-[1.05fr_0.95fr]">
          {/* Parameters */}
          <div className="bg-[var(--rd-surface)] p-6 sm:p-8">
            <div className="rd-microlabel">{t.parametersLabel}</div>
            <div className="mt-7 flex flex-col gap-7">
              {roiInputs.map((input) => {
                const value = roi[input.key];
                return (
                  <label key={input.key} htmlFor={`roi-${input.key}`} className="block">
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="text-[15px] text-[var(--rd-fg)]">{input.label}</span>
                      <span
                        className="text-[15px] font-semibold text-[var(--rd-accent)]"
                        style={{ fontFamily: 'var(--rd-num)' }}
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
                className="flex items-center justify-between gap-3 bg-[var(--rd-surface)] p-4 sm:gap-6 sm:p-6 sm:px-8"
              >
                <div className="text-[13px] text-[var(--rd-fg-2)] sm:text-[14px]">{r.label}</div>
                <div
                  className="text-[26px] sm:text-[30px]"
                  style={{
                    fontFamily: 'var(--rd-num)',
                    fontWeight: 600,
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

        <Body soft sm className="mx-auto mt-6 max-w-[920px] text-center">
          {t.note(formatEuro(AVOIDED_COST_PER_ISSUE), WORKING_WEEKS_PER_YEAR)}
        </Body>
      </div>
    </section>
  );
}
