const ROOT_DOMAIN = 'rapiddraft.ai'
const PITCH_HOSTNAME = 'pitch.rapiddraft.ai'
const CLOUDFLARE_BEACON_ID = 'cloudflare-web-analytics'
const TOKEN_PATTERNS = [
  /"token"\s*:\s*"([^"]+)"/i,
  /token=([a-z0-9]+)/i,
]

function isTrackedHostname(hostname: string) {
  return hostname === ROOT_DOMAIN || hostname.endsWith(`.${ROOT_DOMAIN}`)
}

function normalizeAnalyticsToken(value?: string) {
  const trimmedValue = value?.trim()

  if (!trimmedValue) {
    return undefined
  }

  if (/^[a-z0-9]+$/i.test(trimmedValue)) {
    return trimmedValue
  }

  for (const pattern of TOKEN_PATTERNS) {
    const matchedToken = trimmedValue.match(pattern)?.[1]?.trim()

    if (matchedToken) {
      return matchedToken
    }
  }

  return undefined
}

function getAnalyticsToken(hostname: string) {
  const defaultToken = normalizeAnalyticsToken(import.meta.env.VITE_CLOUDFLARE_WEB_ANALYTICS_TOKEN)
  const pitchToken = normalizeAnalyticsToken(import.meta.env.VITE_CLOUDFLARE_PITCH_WEB_ANALYTICS_TOKEN)

  if (hostname === PITCH_HOSTNAME && pitchToken) {
    return pitchToken
  }

  return defaultToken
}

export function initCloudflareWebAnalytics() {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return
  }

  const { hostname } = window.location

  if (!isTrackedHostname(hostname)) {
    return
  }

  const token = getAnalyticsToken(hostname)

  if (!token || document.getElementById(CLOUDFLARE_BEACON_ID)) {
    return
  }

  const script = document.createElement('script')
  script.id = CLOUDFLARE_BEACON_ID
  script.defer = true
  script.src = 'https://static.cloudflareinsights.com/beacon.min.js'
  script.setAttribute('data-cf-beacon', JSON.stringify({ token }))

  document.head.appendChild(script)
}
