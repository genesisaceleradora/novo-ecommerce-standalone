'use client'

import { trackGa4Event } from './ga4'
import { trackMetaEvent } from './meta'

export type TrackingEvent = 'PageView' | 'ViewContent' | 'AddToCart' | 'InitiateCheckout' | 'Purchase' | 'Lead WhatsApp' | 'Search' | 'UploadStarted' | 'UploadCompleted'
export type TrackingProperties = Record<string, string | number | boolean | undefined>

const metaEventNames: Partial<Record<TrackingEvent, string>> = {
  PageView: 'PageView', ViewContent: 'ViewContent', AddToCart: 'AddToCart', InitiateCheckout: 'InitiateCheckout', Purchase: 'Purchase', 'Lead WhatsApp': 'Lead', Search: 'Search',
}

export function trackEvent(event: TrackingEvent, properties?: TrackingProperties) {
  trackGa4Event(event, properties)
  const metaEvent = metaEventNames[event]
  if (metaEvent) trackMetaEvent(metaEvent, properties)
}
