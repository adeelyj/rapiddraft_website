import { Link } from 'react-router-dom';
import BrandMark from './BrandMark';
import { useLocale } from '../i18n/LocaleContext';

export default function Footer() {
    const year = new Date().getFullYear();
    const { locale, localizePath, switchLocalePath } = useLocale();
    const isGerman = locale === 'de';

    return (
        <footer className="border-t border-white/10 bg-dark text-white">
            <div className="mx-auto max-w-[1180px] px-5 py-14 sm:px-6 lg:px-8 xl:px-10">
                <div className="grid gap-10 lg:grid-cols-[1.1fr_0.8fr_0.8fr_0.8fr]">
                    <div className="max-w-sm">
                        <BrandMark theme="dark" size="sm" />
                        <p className="mt-5 text-sm leading-7 text-gray-400">
                            {isGerman
                                ? 'RapidDraft hilft Engineering-Teams, Design Reviews zu beschleunigen, fertigungsgerechte Zeichnungen schneller zu erstellen und Entscheidungslogik in CAD-Workflows zu bewahren.'
                                : 'RapidDraft helps engineering teams accelerate design reviews, generate manufacturing-ready drawings, and retain decision logic across CAD workflows.'}
                        </p>
                        <div className="mt-8">
                            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-500">
                                {isGerman ? 'Unterstützt von' : 'Backed by'}
                            </div>
                            <div className="mt-4 flex items-center gap-[19px] whitespace-nowrap">
                                <a
                                    href="https://www.unternehmertum.de"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center justify-start transition hover:opacity-100"
                                    aria-label="UnternehmerTUM"
                                >
                                    <img
                                        src="/media/ecosystem/unternehmertum-logo.svg"
                                        alt="UnternehmerTUM"
                                        className="h-auto w-[49px] object-contain opacity-90 grayscale invert"
                                    />
                                </a>
                                <a
                                    href="https://www.unternehmertum.de/angebot/xplore"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center justify-start transition hover:opacity-100"
                                    aria-label="XPLORE"
                                >
                                    <img
                                        src="/media/ecosystem/xplore-logo.svg"
                                        alt="XPLORE"
                                        className="h-auto w-[220px] object-contain opacity-90 grayscale invert"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-gray-500">
                            {isGerman ? 'Produkt' : 'Product'}
                        </h3>
                        <div className="mt-5 space-y-3">
                            <Link to={localizePath('/')} className="block text-sm text-gray-300 transition hover:text-white">
                                {isGerman ? 'Start' : 'Home'}
                            </Link>
                            <Link to={localizePath('/#roi-calculator')} className="block text-sm text-gray-300 transition hover:text-white">
                                ROI Calculator
                            </Link>
                            <Link to={localizePath('/use-cases')} className="block text-sm text-gray-300 transition hover:text-white">
                                {isGerman ? 'Anwendungen' : 'Use Cases'}
                            </Link>
                            <Link to={localizePath('/book-demo')} className="block text-sm text-gray-300 transition hover:text-white">
                                {isGerman ? 'Demo buchen' : 'Book a Demo'}
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-gray-500">
                            {isGerman ? 'Unternehmen' : 'Company'}
                        </h3>
                        <div className="mt-5 space-y-3">
                            <Link to={localizePath('/team')} className="block text-sm text-gray-300 transition hover:text-white">Team</Link>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-gray-500">
                            {isGerman ? 'Kontakt' : 'Contact'}
                        </h3>
                        <div className="mt-5 space-y-3">
                            <a href="mailto:info@rapiddraft.ai" className="block text-sm text-gray-300 transition hover:text-white">
                                info@rapiddraft.ai
                            </a>
                        </div>
                        <div className="mt-8">
                            <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-gray-500">
                                {isGerman ? 'Sprache' : 'Language'}
                            </h3>
                            <div className="mt-4 inline-flex rounded-full border border-white/10 bg-white/[0.04] p-1">
                                <Link
                                    to={switchLocalePath('en')}
                                    className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                                        !isGerman ? 'bg-white text-gray-950' : 'text-gray-400 hover:text-white'
                                    }`}
                                    aria-current={!isGerman ? 'page' : undefined}
                                >
                                    EN
                                </Link>
                                <Link
                                    to={switchLocalePath('de')}
                                    className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                                        isGerman ? 'bg-white text-gray-950' : 'text-gray-400 hover:text-white'
                                    }`}
                                    aria-current={isGerman ? 'page' : undefined}
                                >
                                    DE
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
                    <p className="text-sm text-gray-500 md:justify-self-start">
                        &copy; {year} RapidDraft. {isGerman ? 'Alle Rechte vorbehalten.' : 'All rights reserved.'}
                    </p>
                    <p className="flex items-center gap-2 text-sm text-gray-500">
                        <span>{isGerman ? 'Gemacht mit' : 'Made with'}</span>
                        <img src="/media/heart.png" alt="love" className="h-3.5 w-3.5 object-contain" />
                        <span>{isGerman ? 'in Muenchen' : 'in Munich'}</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}
