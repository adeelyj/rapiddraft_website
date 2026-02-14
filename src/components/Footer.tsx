import { Link } from 'react-router-dom';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-dark text-white border-t border-gray-800">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-1">
                        <span className="text-xl font-bold tracking-tight">RapidDraft</span>
                        <p className="mt-4 text-sm text-gray-400">
                            Automated drawings and DFM reviews for modern engineering teams.
                        </p>
                    </div>

                    <div className="md:col-span-2">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
                            <h3 className="text-sm font-semibold tracking-wider uppercase text-gray-400">Product</h3>
                            <h3 className="text-sm font-semibold tracking-wider uppercase text-gray-400">Company</h3>
                        </div>
                        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                            <Link to="/" className="text-base text-gray-300 hover:text-white">Features</Link>
                            <Link to="/team" className="text-base text-gray-300 hover:text-white">Team</Link>
                            <Link to="/use-cases" className="text-base text-gray-300 hover:text-white">Use Cases</Link>
                            <Link to="/join-us" className="text-base text-gray-300 hover:text-white">Careers</Link>
                            <Link to="/book-demo" className="text-base text-gray-300 hover:text-white">Book a Demo</Link>
                            <span className="hidden sm:block" aria-hidden="true"></span>
                        </div>
                    </div>
                </div>

                <div className="mt-12 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-base text-gray-500">
                        &copy; {year} RapidDraft. All rights reserved.
                    </p>
                    <p className="text-sm text-gray-600 mt-2 md:mt-0">
                        <span className="inline-flex items-center gap-2">
                            Built with
                            <img src="/media/heart.png" alt="heart" className="h-4 w-4 inline-block" />
                            in M&#252;nchen
                        </span>
                    </p>
                </div>
            </div>
        </footer>
    );
}
