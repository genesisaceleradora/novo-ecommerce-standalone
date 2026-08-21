import type { ProductVariation, TechnicalRequestType } from '@/types/catalog'

export const technicalRequestVersion = 1 as const

export type ProductVariationKind = ProductVariation['kind']

export type TechnicalRequestVariation = Partial<Record<ProductVariationKind, {
  value: string
  label: string
}>>

export type TechnicalRequestItem = {
  key: string
  productId: string
  productName: string
  productSlug: string
  requestType: TechnicalRequestType
  quantity: number
  variation?: TechnicalRequestVariation
  notes?: string
}

export type NewTechnicalRequestItem = Omit<TechnicalRequestItem, 'key' | 'quantity'> & {
  quantity?: number
}

export const professionalRoleValues = [
  'orthopedist',
  'physiotherapist',
  'occupational_therapist',
  'health_professional',
  'purchasing_manager',
  'clinic_management',
  'hospital_management',
  'other',
] as const

export type ProfessionalRole = (typeof professionalRoleValues)[number]

export const professionalProfileValues = [
  'independent_professional',
  'clinic',
  'hospital',
  'professional_service_point',
  'other',
] as const

export type ProfessionalProfile = (typeof professionalProfileValues)[number]

export type ProfessionalRequestData = {
  fullName: string
  role: ProfessionalRole | ''
  professionalRegistration: string
  institution: string
  city: string
  state: string
  email: string
  whatsapp: string
  serviceProfile: ProfessionalProfile | ''
  primaryInterest: TechnicalRequestType | ''
  approximateVolume: string
  cnpj: string
  notes: string
  privacyConsent: boolean
  noPatientDataConfirmation: boolean
}

export type ValidatedProfessionalRequestData = Omit<ProfessionalRequestData, 'role' | 'primaryInterest'> & {
  role: ProfessionalRole
  primaryInterest: TechnicalRequestType
}

export type RequestAttribution = Partial<Record<
  'utm_source' | 'utm_medium' | 'utm_campaign' | 'utm_content' | 'utm_term' | 'fbclid' | 'gclid',
  string
>>

export type CreateTechnicalRequestInput = {
  version: typeof technicalRequestVersion
  items: TechnicalRequestItem[]
  professional: ValidatedProfessionalRequestData
  attribution?: RequestAttribution
}

export type TechnicalRequestConfirmationItem = Pick<
  TechnicalRequestItem,
  'productId' | 'productName' | 'productSlug' | 'requestType' | 'quantity' | 'variation'
>

export type MockTechnicalRequestConfirmation = {
  id: string
  createdAt: string
  status: 'received_for_mock_qualification'
  primaryInterest: TechnicalRequestType
  items: TechnicalRequestConfirmationItem[]
}

export type SessionTechnicalLead = {
  confirmation: MockTechnicalRequestConfirmation
  professional: ProfessionalRequestData
  attribution?: RequestAttribution
}

export type TechnicalRequestFieldErrors = Partial<Record<keyof ProfessionalRequestData | 'items' | 'form', string>>
