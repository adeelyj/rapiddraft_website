import { type ReactNode } from 'react';
import clsx from 'clsx';
import PageMeta from '../components/PageMeta';
import { useLang } from '../i18n/LanguageContext';
import {
  Section,
  Container,
  Eyebrow,
  H1,
  H2,
  Subhead,
  Intro,
  Body,
} from '../components/ui/primitives';

const CONTENT = {
  en: {
    meta: {
      title: 'Book a demo | RapidDraft',
      description:
        'Start narrow: one product family, one drawing-release process, one recurring review bottleneck. Bring a drawing that is hard to release, and we show the findings traced back to your rules, on your infrastructure.',
    },
    hero: {
      eyebrow: 'Book a demo',
      heading: 'Bring a drawing that is hard to release',
      subhead:
        'Bring a drawing that keeps getting kicked back, and we trace each finding to your rules, caught before you cut the rev.',
      inTheCall: [
        'Walk through one recurring drawing-release bottleneck',
        'See where RapidDraft fits your CAD, PDM/PLM, and release gate',
        'Decide whether it is a strong candidate for a scoped pilot',
      ],
      responseNote: 'We typically respond within 1 to 2 business days.',
    },
    form: {
      title: 'Tell us which drawing release to walk through',
      intro:
        'Name one workflow and one drawing. The more specific the request, the more specific the findings we can show you.',
      nameLabel: 'Name (required)',
      emailLabel: 'Work email (required)',
      companyLabel: 'Company',
      roleLabel: 'Role',
      cadToolsLabel: 'CAD tools',
      messageLabel: 'Message',
      submit: 'Book a demo',
    },
    pilot: {
      title: 'How a pilot works',
      intro:
        'Start narrow: one product family, one drawing-release process, one recurring bottleneck, scoped up front and run on-prem.',
      steps: [
        'Measure review effort, repeated findings, and time to release against the metric we agreed on.',
        'Expand team by team once the workflow proves itself, with every finding still traced to its source.',
      ],
    },
    bestFit: {
      title: 'Best fit',
      items: [
        'Mechanical design teams with frequent CAD revisions and drawing-heavy release workflows.',
        'Supplier-facing programs where quality, certification, or FAIR and EMPB documentation still rides on the 2D drawing.',
        'Teams that want a grounded check on review and rework effort before a broader rollout. Better design review workflows are where the roughly 30% ROI comes from.',
      ],
    },
  },
  de: {
    meta: {
      title: 'Demo buchen | RapidDraft',
      description:
        'Eng anfangen: eine Produktfamilie, ein Zeichnungs-Freigabeprozess, ein wiederkehrender Review-Engpass. Bringen Sie eine Zeichnung mit, die sich schwer freigeben lässt, und wir zeigen die Befunde zurückverfolgt auf Ihre Regeln, auf Ihrer Infrastruktur.',
    },
    hero: {
      eyebrow: 'Demo buchen',
      heading: 'Bringen Sie eine Zeichnung mit, die sich schwer freigeben lässt',
      subhead:
        'Bringen Sie eine Zeichnung mit, die zurückkommt, und wir verfolgen jeden Befund auf Ihre Regeln, erkannt vor der Revision.',
      inTheCall: [
        'Einen wiederkehrenden Engpass in der Zeichnungsfreigabe gemeinsam durchgehen',
        'Sehen, wo RapidDraft in Ihre CAD-, PDM/PLM-Landschaft und Ihren Freigabeprozess passt',
        'Entscheiden, ob er ein starker Kandidat für ein eng gefasstes Pilotprojekt ist',
      ],
      responseNote: 'Wir antworten in der Regel innerhalb von 1 bis 2 Werktagen.',
    },
    form: {
      title: 'Sagen Sie uns, welche Freigabe wir durchgehen sollen',
      intro:
        'Nennen Sie einen Workflow und eine Zeichnung. Je konkreter die Anfrage, desto konkreter die Befunde, die wir Ihnen zeigen können.',
      nameLabel: 'Name (erforderlich)',
      emailLabel: 'Geschäftliche E-Mail (erforderlich)',
      companyLabel: 'Unternehmen',
      roleLabel: 'Rolle',
      cadToolsLabel: 'CAD-Tools',
      messageLabel: 'Nachricht',
      submit: 'Demo buchen',
    },
    pilot: {
      title: 'So läuft ein Pilotprojekt ab',
      intro:
        'Eng anfangen: eine Produktfamilie, ein Zeichnungs-Freigabeprozess, ein wiederkehrender Engpass, vorab gefasst und On-Prem.',
      steps: [
        'Review-Aufwand, wiederkehrende Befunde und Zeit bis zur Freigabe an der vereinbarten Kennzahl messen.',
        'Team für Team ausweiten, sobald sich der Workflow bewährt hat, jeder Befund weiterhin auf seine Quelle zurückverfolgbar.',
      ],
    },
    bestFit: {
      title: 'Passt am besten zu',
      items: [
        'Konstruktionsteams im Maschinenbau mit häufigen CAD-Revisionen und zeichnungsintensiven Freigabe-Workflows.',
        'Lieferantenbezogene Programme, in denen Qualität, Zertifizierung oder die FAIR- und EMPB-Dokumentation weiterhin an der 2D-Zeichnung hängt.',
        'Teams, die vor einem breiteren Rollout eine fundierte Einschätzung von Review- und Nacharbeitsaufwand wollen. Bessere Design-Review-Workflows sind die Quelle der rund 30 % ROI.',
      ],
    },
  },
} as const;

/* Consistent centered section header used by every section. */
function SectionHeader({
  eyebrow,
  title,
  intro,
  display = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  display?: boolean;
}) {
  return (
    <div className={clsx('mx-auto text-center', display ? 'max-w-[1000px]' : 'max-w-[860px]')}>
      {eyebrow && <Eyebrow className="mb-5">{eyebrow}</Eyebrow>}
      <H2 display={display}>{title}</H2>
      {intro && <Intro className="mx-auto mt-5 max-w-[760px]">{intro}</Intro>}
    </div>
  );
}

/* Left-aligned bullet list inside a centered tile/panel. */
function BulletList({ items, className }: { items: readonly string[]; className?: string }) {
  return (
    <ul className={clsx('flex flex-col gap-2.5 text-left', className)}>
      {items.map((item) => (
        <li key={item} className="flex gap-2.5">
          <span
            aria-hidden="true"
            className="mt-2 h-1 w-1 flex-none rounded-full bg-[var(--rd-accent)]"
          />
          <Body soft sm>
            {item}
          </Body>
        </li>
      ))}
    </ul>
  );
}

export default function BookDemoPage() {
  const { lang } = useLang();
  const t = CONTENT[lang];

  return (
    <div className="rd2 rd-page">
      <PageMeta title={t.meta.title} description={t.meta.description} path="/book-demo" />

      {/* ── Hero ─────────────────────────────────────────── */}
      <header className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{ background: 'radial-gradient(48% 50% at 50% -6%, var(--rd-accent-soft), transparent 62%)' }}
        />
        <Container className="relative w-full pt-28 pb-16 sm:pt-32 sm:pb-20">
          <div className="mx-auto max-w-[820px] text-center">
            <Eyebrow>{t.hero.eyebrow}</Eyebrow>
            <H1 className="mt-5">{t.hero.heading}</H1>
            <Subhead className="mx-auto mt-5 max-w-[760px]">{t.hero.subhead}</Subhead>
            <BulletList items={[...t.hero.inTheCall]} className="mx-auto mt-8 max-w-[540px] text-left" />
            <Body soft sm className="mt-6">
              {t.hero.responseNote}
            </Body>
          </div>
        </Container>
      </header>

      {/* ── Request form ─────────────────────────────────── */}
      <Section>
        <SectionHeader title={t.form.title} intro={t.form.intro} />
        <div className="mx-auto mt-10 w-full max-w-[640px] rd-tile rd-tile--static">
          <form
            name="bookdemo"
            method="POST"
            data-netlify="true"
            className="flex flex-col gap-5 text-left"
          >
            <input type="hidden" name="form-name" value="bookdemo" />

            <div>
              <label htmlFor="bookdemo-name" className="rd-label">
                {t.form.nameLabel}
              </label>
              <input
                id="bookdemo-name"
                type="text"
                name="name"
                required
                className="rd-input"
                autoComplete="name"
              />
            </div>

            <div>
              <label htmlFor="bookdemo-email" className="rd-label">
                {t.form.emailLabel}
              </label>
              <input
                id="bookdemo-email"
                type="email"
                name="email"
                required
                className="rd-input"
                autoComplete="email"
              />
            </div>

            <div>
              <label htmlFor="bookdemo-company" className="rd-label">
                {t.form.companyLabel}
              </label>
              <input
                id="bookdemo-company"
                type="text"
                name="company"
                className="rd-input"
                autoComplete="organization"
              />
            </div>

            <div>
              <label htmlFor="bookdemo-role" className="rd-label">
                {t.form.roleLabel}
              </label>
              <input
                id="bookdemo-role"
                type="text"
                name="role"
                className="rd-input"
                autoComplete="organization-title"
              />
            </div>

            <div>
              <label htmlFor="bookdemo-cad-tools" className="rd-label">
                {t.form.cadToolsLabel}
              </label>
              <input id="bookdemo-cad-tools" type="text" name="cad-tools" className="rd-input" />
            </div>

            <div>
              <label htmlFor="bookdemo-message" className="rd-label">
                {t.form.messageLabel}
              </label>
              <textarea id="bookdemo-message" name="message" className="rd-textarea" />
            </div>

            <button type="submit" className="rd-btn rd-btn--primary mt-1">
              {t.form.submit}
            </button>
          </form>
        </div>
      </Section>

      {/* ── How a pilot works ────────────────────────────── */}
      <Section>
        <SectionHeader title={t.pilot.title} intro={t.pilot.intro} />
        <div className="mx-auto mt-10 w-full max-w-[640px] rd-tile rd-tile--static">
          <BulletList items={t.pilot.steps} />
        </div>
      </Section>

      {/* ── Best fit ─────────────────────────────────────── */}
      <Section>
        <SectionHeader title={t.bestFit.title} />
        <div className="mx-auto mt-10 w-full max-w-[640px] rd-tile rd-tile--static">
          <BulletList items={t.bestFit.items} />
        </div>
      </Section>
    </div>
  );
}
