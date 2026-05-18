// Animated mockup of "Collaborate directly on CAD".
// Covers both commenting AND link-share as separate beats on the timeline.
// Step 0: part loaded, no collaborators yet.
// Step 1: Share link panel appears, "Copy link" is clicked, 3 viewers join.
// Step 2: First pinned comment thread appears on a feature; activity logs it.
// Step 3: Reply lands; a second comment is pinned elsewhere.
// Step 4: Version note — "v04 → v05: 2 features changed, 3 comments preserved".

import { Check, Link2, MessageSquare, GitBranch } from 'lucide-react'
import type { AnimationProps } from './types'
import { MockCadPart } from './MockCadPart'

type Pin = {
  id: string
  author: string
  initials: string
  color: string
  text: string
  x: number // % of viewport
  y: number
  showFrom: number
}

const PINS: Pin[] = [
  {
    id: 'c1',
    author: 'Lukas',
    initials: 'LK',
    color: '#2563eb',
    text: 'Can we round this fillet? Mold-flow shows a knit line on the corner.',
    x: 32,
    y: 38,
    showFrom: 2,
  },
  {
    id: 'c2',
    author: 'Aisha',
    initials: 'AS',
    color: '#0f8f5e',
    text: 'Agree — also check the radius vs. our tool diameter.',
    x: 32,
    y: 38,
    showFrom: 3,
  },
  {
    id: 'c3',
    author: 'Sami',
    initials: 'SR',
    color: '#d97706',
    text: 'Tolerance ±0.05 here is tight. Confirm with CAE before we lock it.',
    x: 56,
    y: 56,
    showFrom: 3,
  },
]

const VIEWERS = [
  { initials: 'LK', color: '#2563eb', name: 'Lukas K.' },
  { initials: 'AS', color: '#0f8f5e', name: 'Aisha S.' },
  { initials: 'SR', color: '#d97706', name: 'Sami R.' },
]

export function CollaborateAnimation({ step }: AnimationProps) {
  const showShare = step === 1
  const linkCopied = step >= 1
  const viewersOnline = step >= 1 ? VIEWERS : []

  const pinnedThreads = PINS.filter((p) => p.showFrom <= step)
  // Group pins by location (so c1 + c2 share a thread)
  const threadKeys = Array.from(new Set(pinnedThreads.map((p) => `${p.x}-${p.y}`)))
  const threads = threadKeys.map((k) => ({
    key: k,
    pins: pinnedThreads.filter((p) => `${p.x}-${p.y}` === k),
  }))

  const activity: { ts: string; icon: typeof Link2; text: string }[] = []
  if (step >= 1) activity.push({ ts: '0:02', icon: Link2, text: 'Adeel created a share link · 3 viewers' })
  if (step >= 2) activity.push({ ts: '0:08', icon: MessageSquare, text: 'Lukas commented on fillet (front face)' })
  if (step >= 3) activity.push({ ts: '0:14', icon: MessageSquare, text: 'Aisha replied · Sami opened new thread' })
  if (step >= 4) activity.push({ ts: '0:22', icon: GitBranch, text: 'New version v05 published · comments preserved' })

  return (
    <div className="app-look flex h-full w-full flex-col">
      {/* App top bar */}
      <div
        className="flex items-center justify-between gap-3 px-5 py-3"
        style={{ borderBottom: '1px solid var(--app-border-1)', background: 'var(--app-surface-1)' }}
      >
        <div className="flex items-center gap-2.5">
          <span
            className="inline-flex h-6 w-6 items-center justify-center rounded-md text-white"
            style={{ background: 'var(--app-accent-1)' }}
          >
            <GitBranch size={13} />
          </span>
          <div>
            <div className="text-[12px] font-semibold leading-tight" style={{ color: 'var(--app-text-1)' }}>
              CAD Drive · enclosure_lid_v0{step >= 4 ? 5 : 4}.step
            </div>
            <div className="text-[10px] leading-tight" style={{ color: 'var(--app-text-3)' }}>
              Collaboration · live workspace
            </div>
          </div>
        </div>

        {/* Viewer stack + share button */}
        <div className="flex items-center gap-3">
          {viewersOnline.length > 0 && (
            <div className="flex -space-x-1.5">
              {viewersOnline.map((v) => (
                <div
                  key={v.initials}
                  className="app-fade-in flex h-6 w-6 items-center justify-center rounded-full text-[9px] font-bold text-white ring-2 ring-white"
                  style={{ background: v.color }}
                  title={v.name}
                >
                  {v.initials}
                </div>
              ))}
              <span
                className="ml-2 self-center font-mono text-[10px]"
                style={{ color: 'var(--app-text-3)' }}
              >
                {viewersOnline.length} online
              </span>
            </div>
          )}
          <button
            type="button"
            className="inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-[11px] font-semibold"
            style={{
              borderColor: 'var(--app-accent-1)',
              color: 'var(--app-accent-1)',
              background: 'rgba(37, 99, 235, 0.08)',
            }}
          >
            <Link2 size={11} />
            Share
          </button>
        </div>
      </div>

      <div className="relative flex flex-1 overflow-hidden">
        {/* CAD viewport */}
        <div className="relative flex-1 overflow-hidden">
          <MockCadPart />

          {/* Pinned threads */}
          {threads.map((t) => {
            const first = t.pins[0]
            return (
              <div
                key={t.key}
                className="absolute -translate-x-1/2 -translate-y-1/2 app-fade-in"
                style={{ left: `${first.x}%`, top: `${first.y}%` }}
              >
                {/* Pin marker */}
                <span
                  className="app-pulse flex h-7 w-7 items-center justify-center rounded-full font-mono text-[10px] font-bold text-white"
                  style={{ background: first.color }}
                  title={`${t.pins.length} comment${t.pins.length > 1 ? 's' : ''}`}
                >
                  {t.pins.length}
                </span>
                {/* Floating thread bubble */}
                <div
                  className="app-fade-in absolute left-9 top-0 w-60 rounded-lg border bg-white p-3 shadow-lg"
                  style={{ borderColor: 'var(--app-border-1)' }}
                >
                  {t.pins.map((p, i) => (
                    <div key={p.id} className={i > 0 ? 'mt-2 border-t pt-2' : ''} style={{ borderColor: 'var(--app-border-1)' }}>
                      <div className="flex items-center gap-1.5">
                        <span
                          className="inline-flex h-4 w-4 items-center justify-center rounded-full text-[8px] font-bold text-white"
                          style={{ background: p.color }}
                        >
                          {p.initials}
                        </span>
                        <span
                          className="text-[10.5px] font-semibold"
                          style={{ color: 'var(--app-text-1)' }}
                        >
                          {p.author}
                        </span>
                      </div>
                      <p className="mt-1 text-[11.5px] leading-snug" style={{ color: 'var(--app-text-2)' }}>
                        {p.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}

          {/* Share-link popover (transient on step 1) */}
          {showShare && (
            <div
              className="app-fade-in absolute right-6 top-6 w-72 rounded-xl border bg-white p-4 shadow-2xl"
              style={{ borderColor: 'var(--app-border-1)' }}
            >
              <div className="flex items-center gap-2">
                <Link2 size={14} style={{ color: 'var(--app-accent-1)' }} />
                <span className="text-[12px] font-semibold" style={{ color: 'var(--app-text-1)' }}>
                  Share this part
                </span>
              </div>
              <div className="mt-3 flex gap-1.5">
                <div
                  className="flex-1 truncate rounded border px-2.5 py-1.5 font-mono text-[10.5px]"
                  style={{ borderColor: 'var(--app-border-1)', color: 'var(--app-text-2)', background: 'var(--app-surface-2)' }}
                >
                  rapiddraft.app/p/Ru4Z7qN
                </div>
                <button
                  type="button"
                  className="inline-flex items-center gap-1 rounded px-2.5 py-1.5 text-[10.5px] font-semibold text-white"
                  style={{ background: 'var(--app-accent-1)' }}
                >
                  <Check size={11} />
                  {linkCopied ? 'Copied' : 'Copy'}
                </button>
              </div>
              <p className="mt-2 text-[10px]" style={{ color: 'var(--app-text-3)' }}>
                Anyone with the link can view · version-aware
              </p>
            </div>
          )}

          {/* Version banner at step 4 */}
          {step >= 4 && (
            <div
              className="app-fade-in absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full border px-4 py-2 text-[11.5px] shadow-md"
              style={{
                borderColor: 'var(--app-border-1)',
                background: 'rgba(15, 143, 94, 0.08)',
                color: '#0f8f5e',
              }}
            >
              <span className="font-semibold">v04 → v05</span> · 2 features changed · 3 comments preserved
            </div>
          )}
        </div>

        {/* Activity rail */}
        <aside
          className="flex w-72 shrink-0 flex-col overflow-y-auto"
          style={{
            borderLeft: '1px solid var(--app-border-1)',
            background: 'var(--app-surface-1)',
          }}
        >
          <div className="px-4 py-3" style={{ borderBottom: '1px solid var(--app-border-1)' }}>
            <div className="text-[10px] font-bold uppercase tracking-wider" style={{ color: 'var(--app-text-3)' }}>
              Activity
            </div>
            <div className="mt-0.5 font-mono text-[20px] font-semibold" style={{ color: 'var(--app-text-1)' }}>
              {activity.length}
            </div>
          </div>

          <div className="flex-1 overflow-y-auto">
            {activity.length === 0 ? (
              <p className="px-4 py-8 text-center text-[12px]" style={{ color: 'var(--app-text-3)' }}>
                Quiet here. Share the link to begin.
              </p>
            ) : (
              <ul>
                {activity.map((a, i) => {
                  const Icon = a.icon
                  return (
                    <li
                      key={i}
                      className="app-fade-in px-4 py-3"
                      style={{ borderBottom: '1px solid var(--app-border-1)' }}
                    >
                      <div className="flex items-start gap-2.5">
                        <span
                          className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md"
                          style={{ background: 'var(--app-surface-3)', color: 'var(--app-accent-1)' }}
                        >
                          <Icon size={11} />
                        </span>
                        <div className="min-w-0">
                          <div className="font-mono text-[10px] font-semibold" style={{ color: 'var(--app-text-3)' }}>
                            {a.ts}
                          </div>
                          <p className="mt-0.5 text-[12px] leading-snug" style={{ color: 'var(--app-text-1)' }}>
                            {a.text}
                          </p>
                        </div>
                      </div>
                    </li>
                  )
                })}
              </ul>
            )}
          </div>
        </aside>
      </div>
    </div>
  )
}
