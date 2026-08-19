'use client'

type TrackingProperties = Record<string, string | number | boolean | undefined>

declare global {
  interface Window { gtag?: (command: string, event: string, properties?: TrackingProperties) => void }
}

export function trackGa4Event(event: string, properties?: TrackingProperties) {
  if (typeof window === 'undefined' || !process.env.NEXT_PUBLIC_GA4_ID || !window.gtag) return
  window.gtag('event', event, properties)
}
