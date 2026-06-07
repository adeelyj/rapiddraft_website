import { type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import BrandMark from './BrandMark';
import { useLang } from '../i18n/LanguageContext';

const CONTENT = {
  en: {
    desc: 'RapidDraft helps engineering teams catch drawing and design issues before release, grounded in your own rules and running on-prem.',
    backedBy: 'Backed by',
    columns: [
      {
        heading: 'Platform',
        links: [
          { name: 'Overview', to: '/platform' },
          { name: 'How it works', to: '/platform#how-it-works' },
          { name: 'Inside the platform', to: '/platform#inside' },
          { name: 'Works with your stack', to: '/platform#stack' },
          { name: 'FAQ', to: '/platform#faq' },
        ],
      },
      {
        heading: 'Company',
        links: [
          { name: 'Vision and mission', to: '/company' },
          { name: 'Founding team', to: '/company#team' },
          { name: 'Advisory board', to: '/company#advisors' },
          { name: 'Open roles', to: '/company#open-roles' },
        ],
      },
      {
        heading: 'More',
        links: [
          { name: 'Use cases', to: '/use-cases' },
          { name: 'Security', to: '/security' },
          { name: 'ROI calculator', to: '/#roi-calculator' },
          { name: 'Book a demo', to: '/book-demo' },
        ],
      },
    ],
    contactHeading: 'Contact',
    legal: [
      { name: 'Impressum', to: '/impressum', external: false },
      { name: 'Privacy', to: '/privacy', external: false },
      { name: 'Request an NDA', to: '/deal-room/nda-request', external: false },
      { name: 'LinkedIn', to: 'https://www.linkedin.com/company/rapiddraft/', external: true },
    ],
    copyPre: 'RapidDraft. Made with',
    copyPost: 'in Munich.',
  },
  de: {
    desc: 'RapidDraft hilft Engineering-Teams, Zeichnungs- und Designprobleme vor der Freigabe zu erkennen, verankert in Ihren eigenen Regeln und On-Prem.',
    backedBy: 'Unterstützt von',
    columns: [
      {
        heading: 'Plattform',
        links: [
          { name: 'Übersicht', to: '/platform' },
          { name: 'So funktioniert es', to: '/platform#how-it-works' },
          { name: 'Im Inneren der Plattform', to: '/platform#inside' },
          { name: 'Arbeitet mit Ihrem Stack', to: '/platform#stack' },
          { name: 'FAQ', to: '/platform#faq' },
        ],
      },
      {
        heading: 'Unternehmen',
        links: [
          { name: 'Vision und Mission', to: '/company' },
          { name: 'Gründungsteam', to: '/company#team' },
          { name: 'Beirat', to: '/company#advisors' },
          { name: 'Offene Stellen', to: '/company#open-roles' },
        ],
      },
      {
        heading: 'Mehr',
        links: [
          { name: 'Anwendungsfälle', to: '/use-cases' },
          { name: 'Sicherheit', to: '/security' },
          { name: 'ROI-Rechner', to: '/#roi-calculator' },
          { name: 'Demo buchen', to: '/book-demo' },
        ],
      },
    ],
    contactHeading: 'Kontakt',
    legal: [
      { name: 'Impressum', to: '/impressum', external: false },
      { name: 'Datenschutz', to: '/privacy', external: false },
      { name: 'NDA anfragen', to: '/deal-room/nda-request', external: false },
      { name: 'LinkedIn', to: 'https://www.linkedin.com/company/rapiddraft/', external: true },
    ],
    copyPre: 'RapidDraft. Mit',
    copyPost: 'in München gebaut.',
  },
} as const;

const linkCls = 'text-[14px] text-[var(--rd-fg-2)] transition-colors hover:text-[var(--rd-accent)]';

const BACKERS = [
  { name: 'UnternehmerTUM', href: 'https://www.unternehmertum.de', src: '/media/ecosystem/unternehmertum-logo.svg' },
  { name: 'XPLORE', href: 'https://www.unternehmertum.de/angebot/xplore', src: '/media/ecosystem/xplore-logo.svg' },
];

function Col({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <div>
      <div className="rd-microlabel">{heading}</div>
      <div className="mt-5 flex flex-col gap-3">{children}</div>
    </div>
  );
}

function Heart() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 16 16"
      role="img"
      aria-label="love"
      className="mx-1 inline-block align-[-1px]"
      style={{ fill: 'var(--rd-accent)' }}
    >
      <path d="M8 14.4C8 14.4 1.2 10.1 1.2 5.5C1.2 3 3.1 1.5 5.1 2C6.4 2.3 7.5 3.3 8 4.5C8.5 3.3 9.6 2.3 10.9 2C12.9 1.5 14.8 3 14.8 5.5C14.8 10.1 8 14.4 8 14.4Z" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();
  const { lang } = useLang();
  const t = CONTENT[lang];

  return (
    <footer className="rd-dark relative z-[1] border-t border-[var(--rd-hair)] bg-[var(--rd-bg)] text-[var(--rd-fg)]">
      <div className="rd-container py-16">
        <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.85fr_0.85fr_0.85fr_0.85fr]">
          <div className="max-w-sm sm:col-span-2 lg:col-span-1">
            <Link to="/" aria-label="RapidDraft home" onClick={() => window.scrollTo(0, 0)} className="inline-flex">
              <BrandMark theme="dark" size="sm" />
            </Link>
            <p className="mt-5 text-[14px] leading-7 text-[var(--rd-fg-2)]">{t.desc}</p>
            <div className="mt-8">
              <div className="rd-microlabel">{t.backedBy}</div>
              <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-3">
                {BACKERS.map((b) => (
                  <a key={b.name} href={b.href} target="_blank" rel="noreferrer" aria-label={b.name}>
                    <img src={b.src} alt={b.name} className="rd-logo h-8 w-auto max-w-[150px] object-contain" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {t.columns.map((col) => (
            <Col key={col.heading} heading={col.heading}>
              {col.links.map((l) => (
                <Link key={l.name} to={l.to} className={linkCls}>
                  {l.name}
                </Link>
              ))}
            </Col>
          ))}

          <Col heading={t.contactHeading}>
            <a href="mailto:info@rapiddraft.ai" className={linkCls}>
              info@rapiddraft.ai
            </a>
            <a href="tel:+4917684443362" className={linkCls}>
              +49 176 8444 3362
            </a>
          </Col>
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-[var(--rd-hair)] pt-8 md:flex-row md:items-center md:justify-between">
          <ul
            className="flex flex-wrap items-center gap-y-2 text-[13px] text-[var(--rd-fg-2)]"
            style={{ fontFamily: 'var(--rd-meta)' }}
          >
            {t.legal.map((l, i, arr) => (
              <li key={l.name} className="inline-flex items-center">
                {l.external ? (
                  <a href={l.to} target="_blank" rel="noreferrer" className="transition-colors hover:text-[var(--rd-accent)]">
                    {l.name}
                  </a>
                ) : (
                  <Link to={l.to} className="transition-colors hover:text-[var(--rd-accent)]">
                    {l.name}
                  </Link>
                )}
                {i < arr.length - 1 && <span className="mx-3 text-[var(--rd-muted)]">·</span>}
              </li>
            ))}
          </ul>
          <p className="inline-flex items-center text-[13px] text-[var(--rd-fg-3)]">
            &copy; {year} {t.copyPre}
            <Heart />
            {t.copyPost}
          </p>
        </div>
      </div>
    </footer>
  );
}
