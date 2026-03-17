const ROOT_DOMAIN = 'rapiddraft.ai'
const PITCH_HOSTNAME = 'pitch.rapiddraft.ai'
const CLOUDFLARE_BEACON_ID = 'cloudflare-web-analytics'

function isTrackedHostname(hostname: string) {
  return hostname === ROOT_DOMAIN || hostname.endsWith(`.${ROOT_DOMAIN}`)
}

function getAnalyticsToken(hostname: string) {
  const defaultToken = import.meta.env.VITE_CLOUDFLARE_WEB_ANALYTICS_TOKEN?.trim()
  const pitchToken = import.meta.env.VITE_CLOUDFLARE_PITCH_WEB_ANALYTICS_TOKEN?.trim()

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
