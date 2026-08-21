'use client'

import { trackGa4Event } from './ga4'
import { trackMetaEvent } from './meta'

export type TrackingEvent = 'PageView' | 'ViewContent' | 'Lead' | 'Contact' | 'FormStart' | 'FormSubmit' | 'TechnicalPresentationRequested' | 'TechnicalSampleRequested' | 'StockPlanningRequested' | 'PersonalProjectRequested' | 'ProfessionalMaterialDownloaded' | 'Search' | 'AddToCart' | 'InitiateCheckout' | 'Purchase' | 'Lead WhatsApp' | 'UploadStarted' | 'UploadCompleted'
export type TrackingProperties = Record<string, string | number | boolean | undefined>

const metaEventNames: Partial<Record<TrackingEvent, string>> = {
  PageView: 'PageView', ViewContent: 'ViewContent', Lead: 'Lead', Contact: 'Contact', FormStart: 'FormStart', FormSubmit: 'FormSubmit', TechnicalPresentationRequested: 'TechnicalPresentationRequested', TechnicalSampleRequested: 'TechnicalSampleRequested', StockPlanningRequested: 'StockPlanningRequested', PersonalProjectRequested: 'PersonalProjectRequested', ProfessionalMaterialDownloaded: 'ProfessionalMaterialDownloaded', 'Lead WhatsApp': 'Lead', Search: 'Search',
}

export function trackEvent(event: TrackingEvent, properties?: TrackingProperties) {
  trackGa4Event(event, properties)
  const metaEvent = metaEventNames[event]
  if (metaEvent) trackMetaEvent(metaEvent, properties)
}
