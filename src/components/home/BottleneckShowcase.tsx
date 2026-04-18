import { motion } from 'framer-motion';
import { AlertTriangle, CheckCircle2, Clock3, MessageSquareMore, UserRound } from 'lucide-react';
import Reveal from './Reveal';

const queueItems = [
    { title: 'Bracket-Upper Rev D', status: 'Waiting on expert review', icon: Clock3, tone: 'text-amber-600 bg-amber-50 border-amber-100' },
    { title: 'Battery tray weldment', status: 'DFM note unresolved', icon: AlertTriangle, tone: 'text-red-600 bg-red-50 border-red-100' },
    { title: 'Supplier drawing package', status: 'Needs release sign-off', icon: MessageSquareMore, tone: 'text-sky-600 bg-sky-50 border-sky-100' },
];

export default function BottleneckShowcase() {
    return (
        <Reveal className="relative overflow-hidden rounded-[2rem] border border-stone-200 bg-[#f6f7fb] p-6 shadow-[0_32px_90px_-40px_rgba(17,24,39,0.28)] sm:p-8">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(234,88,12,0.12),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(17,24,39,0.06),transparent_32%)]" />

            <div className="relative grid gap-6 lg:grid-cols-[220px_minmax(0,1fr)]">
                <div className="rounded-[1.5rem] bg-stone-950 p-4 text-white">
                    <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-orange-200">
                        <UserRound className="h-3.5 w-3.5" />
                        Expert Queue
                    </div>
                    <div className="mt-5 space-y-3">
                        {queueItems.map((item) => (
                            <div key={item.title} className="rounded-[1.25rem] border border-white/10 bg-white/5 p-3">
                                <div className="text-sm font-semibold text-white">{item.title}</div>
                                <div className="mt-2 text-xs leading-5 text-gray-300">{item.status}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative min-h-[360px] rounded-[1.75rem] border border-white/70 bg-white p-5 shadow-[0_18px_48px_-32px_rgba(17,24,39,0.22)]">
                    <div className="flex items-center justify-between border-b border-stone-200 pb-4">
                        <div>
                            <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">Review Board</div>
                            <div className="mt-2 text-lg font-semibold tracking-tight text-gray-950">Design review bottleneck</div>
                        </div>
                        <div className="rounded-full border border-stone-200 px-3 py-1 text-xs font-medium text-gray-500">
                            14 open items
                        </div>
                    </div>

                    <div className="mt-5 grid gap-4 md:grid-cols-2">
                        <div className="rounded-[1.25rem] border border-stone-200 bg-stone-50/80 p-4">
                            <div className="text-sm font-semibold text-gray-950">Open reviews</div>
                            <div className="mt-4 space-y-3">
                                <div className="rounded-2xl border border-stone-200 bg-white p-3">
                                    <div className="text-sm font-semibold text-gray-900">Release drawing mismatch</div>
                                    <div className="mt-1 text-xs leading-5 text-gray-500">Awaiting dimensional review from lead checker</div>
                                </div>
                                <div className="rounded-2xl border border-stone-200 bg-white p-3">
                                    <div className="text-sm font-semibold text-gray-900">Machining risk flagged</div>
                                    <div className="mt-1 text-xs leading-5 text-gray-500">Supplier DFM note not yet resolved in CAD</div>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-[1.25rem] border border-stone-200 bg-stone-50/80 p-4">
                            <div className="text-sm font-semibold text-gray-950">Waiting states</div>
                            <div className="mt-4 space-y-3">
                                <div className="rounded-2xl border border-amber-100 bg-amber-50 p-3">
                                    <div className="flex items-center gap-2 text-sm font-semibold text-amber-900">
                                        <Clock3 className="h-4 w-4" />
                                        Waiting on senior reviewer
                                    </div>
                                    <div className="mt-1 text-xs leading-5 text-amber-800/80">Design team paused supplier handoff until sign-off lands.</div>
                                </div>
                                <div className="rounded-2xl border border-red-100 bg-red-50 p-3">
                                    <div className="flex items-center gap-2 text-sm font-semibold text-red-900">
                                        <AlertTriangle className="h-4 w-4" />
                                        Context lost between revisions
                                    </div>
                                    <div className="mt-1 text-xs leading-5 text-red-800/80">Comments from Rev C were not carried into the current part state.</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.96, y: 10 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.45, delay: 0.15 }}
                        className="absolute bottom-5 left-1/2 w-[82%] -translate-x-1/2 rounded-[1.5rem] border border-stone-200 bg-white px-4 py-4 shadow-[0_26px_70px_-36px_rgba(17,24,39,0.3)] sm:w-[68%]"
                    >
                        <div className="flex items-start gap-3">
                            <div className="rounded-full bg-emerald-50 p-2 text-emerald-600">
                                <CheckCircle2 className="h-4 w-4" />
                            </div>
                            <div>
                                <div className="text-sm font-semibold text-gray-950">Reusable review logic created</div>
                                <div className="mt-1 text-xs leading-5 text-gray-500">
                                    RapidDraft turns review knowledge into a repeatable workflow instead of a meeting dependency.
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </Reveal>
    );
}
