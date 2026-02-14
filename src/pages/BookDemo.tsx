import Section from '../components/Section';

export default function BookDemo() {
    return (
        <Section className="bg-gray-50 min-h-screen py-20 flex items-center justify-center">
            <div className="w-full max-w-xl bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="bg-primary px-8 py-6 text-center">
                    <h1 className="text-2xl font-bold text-white">Book a demo of RapidDraft</h1>
                    <p className="text-orange-100 mt-2 text-sm">
                        See how we automate drawing reviews in NX, SolidWorks, and CATIA.
                    </p>
                </div>

                <div className="p-8 md:p-10">
                    <form
                        name="bookdemo"
                        method="POST"
                        data-netlify="true"
                        netlify-honeypot="bot-field"
                        action="/"
                        className="space-y-6"
                    >
                        <input type="hidden" name="form-name" value="bookdemo" />
                        <input type="hidden" name="bot-field" />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name <span className="text-red-500">*</span></label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    required
                                    className="block w-full rounded-xl border-gray-300 shadow-sm focus:border-primary focus:ring-primary py-2.5 bg-gray-50 border px-3"
                                    placeholder="Jane Doe"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Work Email <span className="text-red-500">*</span></label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    required
                                    className="block w-full rounded-xl border-gray-300 shadow-sm focus:border-primary focus:ring-primary py-2.5 bg-gray-50 border px-3"
                                    placeholder="jane@company.com"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                                <input
                                    type="text"
                                    name="company"
                                    id="company"
                                    className="block w-full rounded-xl border-gray-300 shadow-sm focus:border-primary focus:ring-primary py-2.5 bg-gray-50 border px-3"
                                />
                            </div>
                            <div>
                                <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                                <input
                                    type="text"
                                    name="role"
                                    id="role"
                                    className="block w-full rounded-xl border-gray-300 shadow-sm focus:border-primary focus:ring-primary py-2.5 bg-gray-50 border px-3"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="cad-tools" className="block text-sm font-medium text-gray-700 mb-1">CAD Tools Used</label>
                            <input
                                type="text"
                                name="cad-tools"
                                id="cad-tools"
                                placeholder="e.g. NX, SolidWorks, CATIA V5"
                                className="block w-full rounded-xl border-gray-300 shadow-sm focus:border-primary focus:ring-primary py-2.5 bg-gray-50 border px-3"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">What would you like to see?</label>
                            <textarea
                                name="message"
                                id="message"
                                rows={4}
                                className="block w-full rounded-xl border-gray-300 shadow-sm focus:border-primary focus:ring-primary py-2.5 bg-gray-50 border px-3"
                                placeholder="Describe your current drawing review workflow..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full flex justify-center py-3.5 px-4 border border-transparent rounded-full shadow-sm text-sm font-bold text-white bg-primary hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
                        >
                            Request Demo
                        </button>

                        <p className="text-xs text-gray-500 text-center mt-4">
                            We typically respond within 1–2 business days.
                        </p>
                    </form>
                </div>
            </div>
        </Section>
    );
}
