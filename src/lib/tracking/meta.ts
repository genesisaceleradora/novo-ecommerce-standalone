'use client'

type TrackingProperties = Record<string, string | number | boolean | undefined>

declare global {
  interface Window { fbq?: (action: string, event: string, properties?: TrackingProperties) => void }
}

export function trackMetaEvent(event: string, properties?: TrackingProperties) {
  if (typeof window === 'undefined' || !process.env.NEXT_PUBLIC_META_PIXEL_ID || !window.fbq) return
  window.fbq('track', event, properties)
}
