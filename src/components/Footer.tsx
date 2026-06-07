import { type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import BrandMark from './BrandMark';

const PRODUCT_LINKS = [
  { name: 'Platform', to: '/platform' },
  { name: 'Use cases', to: '/use-cases' },
  { name: 'Security', to: '/security' },
  { name: 'ROI calculator', to: '/#roi-calculator' },
  { name: 'Book a demo', to: '/book-demo' },
];

const COMPANY_LINKS = [
  { name: 'Vision and mission', to: '/company' },
  { name: 'Team', to: '/company#team' },
  { name: 'Open roles', to: '/company#open-roles' },
];

function Col({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <div>
      <div className="rd-microlabel">{heading}</div>
      <div className="mt-5 flex flex-col gap-3">{children}</div>
    </div>
  );
}

const linkCls =
  'text-[14px] text-[var(--rd-fg-2)] transition-colors hover:text-[var(--rd-accent)]';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="rd-dark relative z-[1] border-t border-[var(--rd-hair)] bg-[var(--rd-bg)] text-[var(--rd-fg)]">
      <div className="rd-container py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.9fr_0.9fr_0.9fr]">
          <div className="max-w-sm">
            <BrandMark theme="dark" size="sm" />
            <p className="mt-5 text-[14px] leading-7 text-[var(--rd-fg-2)]">
              RapidDraft helps engineering teams accelerate design reviews, generate
              manufacturing-ready drawings, and retain decision logic across CAD workflows.
            </p>
            <div className="mt-8">
              <div className="rd-microlabel">Backed by</div>
              <div className="mt-4 flex items-center gap-5">
                <a
                  href="https://www.unternehmertum.de"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="UnternehmerTUM"
                >
                  <img
                    src="/media/ecosystem/unternehmertum-logo.svg"
                    alt="UnternehmerTUM"
                    className="h-auto w-[46px] object-contain opacity-80 grayscale invert"
                  />
                </a>
                <a
                  href="https://www.unternehmertum.de/angebot/xplore"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="XPLORE"
                >
                  <img
                    src="/media/ecosystem/xplore-logo.svg"
                    alt="XPLORE"
                    className="h-auto w-[200px] object-contain opacity-80 grayscale invert"
                  />
                </a>
              </div>
            </div>
          </div>

          <Col heading="Product">
            {PRODUCT_LINKS.map((l) => (
              <Link key={l.name} to={l.to} className={linkCls}>
                {l.name}
              </Link>
            ))}
          </Col>

          <Col heading="Company">
            {COMPANY_LINKS.map((l) => (
              <Link key={l.name} to={l.to} className={linkCls}>
                {l.name}
              </Link>
            ))}
          </Col>

          <Col heading="Contact">
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
            className="flex flex-wrap items-center gap-x-0 gap-y-2 text-[13px] text-[var(--rd-fg-2)]"
            style={{ fontFamily: 'var(--rd-meta)' }}
          >
            {[
              { name: 'Impressum', to: '/impressum', external: false },
              { name: 'Privacy', to: '/privacy', external: false },
              { name: 'Request an NDA', to: '/deal-room/nda-request', external: false },
              {
                name: 'LinkedIn',
                to: 'https://www.linkedin.com/company/rapiddraft/',
                external: true,
              },
            ].map((l, i, arr) => (
              <li key={l.name} className="inline-flex items-center">
                {l.external ? (
                  <a
                    href={l.to}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-[var(--rd-accent)]"
                  >
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
          <p className="text-[13px] text-[var(--rd-fg-3)]">
            &copy; {year} RapidDraft. Made with care in Munich.
          </p>
        </div>
      </div>
    </footer>
  );
}
