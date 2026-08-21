'use client'

import type { MockTechnicalRequestConfirmation, SessionTechnicalLead } from '@/types/technical-request'

export const technicalRequestStorageKey = 'galanta-technical-request:v1'
export const technicalRequestConfirmationKey = 'galanta-technical-request-confirmation:v1'
export const technicalLeadSessionKey = 'galanta-technical-lead:v1'

export function storeTechnicalRequestSession(lead: SessionTechnicalLead) {
  window.sessionStorage.setItem(technicalRequestConfirmationKey, JSON.stringify(lead.confirmation))
  window.sessionStorage.setItem(technicalLeadSessionKey, JSON.stringify(lead))
}

export function readTechnicalRequestConfirmation(): MockTechnicalRequestConfirmation | null {
  try {
    const stored = window.sessionStorage.getItem(technicalRequestConfirmationKey)
    return stored ? JSON.parse(stored) as MockTechnicalRequestConfirmation : null
  } catch {
    return null
  }
}

export function readSessionTechnicalLead(): SessionTechnicalLead | null {
  try {
    const stored = window.sessionStorage.getItem(technicalLeadSessionKey)
    return stored ? JSON.parse(stored) as SessionTechnicalLead : null
  } catch {
    return null
  }
}
