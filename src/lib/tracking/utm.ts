'use client'

const storageKey = 'ecommerce-standalone-utms'
const trackedParameters = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'fbclid', 'gclid'] as const

export type UTMParameters = Partial<Record<(typeof trackedParameters)[number], string>>

export function captureUTMs(searchParameters: URLSearchParams) {
  if (typeof window === 'undefined') return
  const captured = trackedParameters.reduce<UTMParameters>((result, parameter) => {
    const value = searchParameters.get(parameter)
    return value ? { ...result, [parameter]: value } : result
  }, {})
  if (Object.keys(captured).length === 0) return
  const previous = getStoredUTMs()
  window.localStorage.setItem(storageKey, JSON.stringify({ ...previous, ...captured }))
}

export function getStoredUTMs(): UTMParameters {
  if (typeof window === 'undefined') return {}
  try {
    const stored = window.localStorage.getItem(storageKey)
    return stored ? JSON.parse(stored) as UTMParameters : {}
  } catch { return {} }
}
