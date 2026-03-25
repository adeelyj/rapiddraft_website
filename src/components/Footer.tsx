import { Link } from 'react-router-dom';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-white/10 bg-dark text-white">
            <div className="mx-auto max-w-[1180px] px-5 py-14 sm:px-6 lg:px-8 xl:px-10">
                <div className="grid gap-10 lg:grid-cols-[1.1fr_0.8fr_0.8fr_0.8fr]">
                    <div className="max-w-sm">
                        <img src="/media/rd_logo.png" alt="RapidDraft" className="h-8 w-auto" />
                        <p className="mt-5 text-sm leading-7 text-gray-400">
                            RapidDraft helps engineering teams accelerate design reviews, generate manufacturing-ready drawings, and retain decision logic across CAD workflows.
                        </p>
                        <div className="mt-8">
                            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-500">
                                Backed by
                            </div>
                            <div className="mt-4 flex items-center gap-3 whitespace-nowrap">
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
                                        className="h-auto w-[122px] object-contain opacity-90 grayscale invert"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-gray-500">Product</h3>
                        <div className="mt-5 space-y-3">
                            <Link to="/" className="block text-sm text-gray-300 transition hover:text-white">Product</Link>
                            <Link to="/use-cases" className="block text-sm text-gray-300 transition hover:text-white">Use Cases</Link>
                            <Link to="/book-demo" className="block text-sm text-gray-300 transition hover:text-white">Book a Demo</Link>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-gray-500">Company</h3>
                        <div className="mt-5 space-y-3">
                            <Link to="/team" className="block text-sm text-gray-300 transition hover:text-white">Team</Link>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-gray-500">Contact</h3>
                        <div className="mt-5 space-y-3">
                            <a href="mailto:adeel@rapiddraft.ai" className="block text-sm text-gray-300 transition hover:text-white">
                                adeel@rapiddraft.ai
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
                    <p className="text-sm text-gray-500 md:justify-self-start">
                        &copy; {year} RapidDraft. All rights reserved.
                    </p>
                    <p className="flex items-center gap-2 text-sm text-gray-500">
                        <span>Made with</span>
                        <img src="/media/heart.png" alt="love" className="h-3.5 w-3.5 object-contain" />
                        <span>in Munich</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}
