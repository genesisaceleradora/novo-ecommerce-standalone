import { brazilianStates } from '@/data/technical-request'
import { catalogProducts } from '@/data/catalog'
import { professionalProfileValues, professionalRoleValues, technicalRequestVersion, type CreateTechnicalRequestInput, type ProfessionalRequestData, type TechnicalRequestFieldErrors, type TechnicalRequestItem, type ValidatedProfessionalRequestData } from '@/types/technical-request'

const requestTypes = ['technical_presentation', 'technical_sample', 'stock_planning', 'personal_project', 'commercial_contact'] as const
const stateValues = new Set<string>(brazilianStates.map(([value]) => value))

type ValidationResult =
  | { success: true; data: CreateTechnicalRequestInput }
  | { success: false; message: string; fieldErrors: TechnicalRequestFieldErrors }

function cleanText(value: unknown, maxLength: number) {
  if (typeof value !== 'string') return ''
  return value.replace(/[\u0000-\u001F\u007F]/g, ' ').replace(/\s+/g, ' ').trim().slice(0, maxLength)
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

function isOneOf<const T extends readonly string[]>(value: string, options: T): value is T[number] {
  return options.includes(value as T[number])
}

function validateItems(value: unknown): TechnicalRequestItem[] | null {
  if (!Array.isArray(value) || value.length === 0 || value.length > 20) return null

  const normalized: TechnicalRequestItem[] = []
  for (const [index, rawItem] of value.entries()) {
    if (!isRecord(rawItem)) return null
    const productId = cleanText(rawItem.productId, 100)
    const productSlug = cleanText(rawItem.productSlug, 160)
    const product = catalogProducts.find((candidate) => candidate.active && candidate.id === productId && candidate.slug === productSlug)
    const requestType = cleanText(rawItem.requestType, 60)
    if (!product || !isOneOf(requestType, requestTypes) || !product.requestTypes.includes(requestType)) return null

    const quantityNumber = typeof rawItem.quantity === 'number' ? rawItem.quantity : Number(rawItem.quantity)
    if (!Number.isInteger(quantityNumber) || quantityNumber < 1 || quantityNumber > 999) return null

    const variation: TechnicalRequestItem['variation'] = {}
    if (rawItem.variation !== undefined) {
      if (!isRecord(rawItem.variation)) return null
      for (const productVariation of product.variations) {
        const rawSelection = rawItem.variation[productVariation.kind]
        if (!rawSelection) {
          if (productVariation.required) return null
          continue
        }
        if (!isRecord(rawSelection)) return null
        const selectedValue = cleanText(rawSelection.value, 100)
        const option = productVariation.options.find((candidate) => candidate.value === selectedValue)
        if (!option) return null
        variation[productVariation.kind] = { value: option.value, label: option.label }
      }
    } else if (product.variations.some((candidate) => candidate.required)) {
      return null
    }

    const notes = cleanText(rawItem.notes, 500)
    normalized.push({
      key: cleanText(rawItem.key, 240) || `${product.id}-${index}`,
      productId: product.id,
      productName: product.name,
      productSlug: product.slug,
      requestType,
      quantity: quantityNumber,
      variation: Object.keys(variation).length > 0 ? variation : undefined,
      notes: notes || undefined,
    })
  }
  return normalized
}

export function validateTechnicalRequestPayload(input: unknown): ValidationResult {
  if (!isRecord(input) || input.version !== technicalRequestVersion || !isRecord(input.professional)) {
    return { success: false, message: 'Não foi possível validar a solicitação.', fieldErrors: { form: 'Revise os dados e tente novamente.' } }
  }

  const items = validateItems(input.items)
  if (!items) return { success: false, message: 'Revise os itens selecionados.', fieldErrors: { items: 'A seleção está vazia ou contém uma configuração inválida.' } }

  const raw = input.professional
  const professional: ProfessionalRequestData = {
    fullName: cleanText(raw.fullName, 120),
    role: cleanText(raw.role, 60) as ProfessionalRequestData['role'],
    professionalRegistration: cleanText(raw.professionalRegistration, 60),
    institution: cleanText(raw.institution, 140),
    city: cleanText(raw.city, 100),
    state: cleanText(raw.state, 2).toUpperCase(),
    email: cleanText(raw.email, 160).toLowerCase(),
    whatsapp: cleanText(raw.whatsapp, 30),
    serviceProfile: cleanText(raw.serviceProfile, 60) as ProfessionalRequestData['serviceProfile'],
    primaryInterest: cleanText(raw.primaryInterest, 60) as ProfessionalRequestData['primaryInterest'],
    approximateVolume: cleanText(raw.approximateVolume, 100),
    cnpj: cleanText(raw.cnpj, 30),
    notes: cleanText(raw.notes, 800),
    privacyConsent: raw.privacyConsent === true,
    noPatientDataConfirmation: raw.noPatientDataConfirmation === true,
  }

  const fieldErrors: TechnicalRequestFieldErrors = {}
  if (professional.fullName.length < 3) fieldErrors.fullName = 'Informe seu nome completo.'
  if (!isOneOf(professional.role, professionalRoleValues)) fieldErrors.role = 'Selecione sua profissão ou função.'
  if (professional.institution.length < 2) fieldErrors.institution = 'Informe a instituição ou atuação profissional.'
  if (professional.city.length < 2) fieldErrors.city = 'Informe a cidade.'
  if (!stateValues.has(professional.state)) fieldErrors.state = 'Selecione o estado.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(professional.email)) fieldErrors.email = 'Informe um e-mail válido.'
  const phoneDigits = professional.whatsapp.replace(/\D/g, '')
  if (phoneDigits.length < 10 || phoneDigits.length > 13) fieldErrors.whatsapp = 'Informe um WhatsApp válido com DDD.'
  const cnpjDigits = professional.cnpj.replace(/\D/g, '')
  if (professional.cnpj && cnpjDigits.length !== 14) fieldErrors.cnpj = 'Informe um CNPJ com 14 dígitos ou deixe o campo vazio.'
  if (professional.serviceProfile && !isOneOf(professional.serviceProfile, professionalProfileValues)) fieldErrors.serviceProfile = 'Selecione um perfil de atendimento válido.'
  if (!isOneOf(professional.primaryInterest, requestTypes)) fieldErrors.primaryInterest = 'Selecione o interesse principal.'
  if (!professional.privacyConsent) fieldErrors.privacyConsent = 'O consentimento é necessário para enviar a solicitação.'
  if (!professional.noPatientDataConfirmation) fieldErrors.noPatientDataConfirmation = 'Confirme que não incluiu dados de pacientes.'

  if (Object.keys(fieldErrors).length > 0) {
    return { success: false, message: 'Revise os campos destacados.', fieldErrors }
  }

  const attribution = isRecord(input.attribution)
    ? Object.fromEntries(Object.entries(input.attribution).flatMap(([key, value]) => {
      const allowed = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'fbclid', 'gclid'].includes(key)
      const cleaned = cleanText(value, 160)
      return allowed && cleaned ? [[key, cleaned]] : []
    }))
    : undefined

  return {
    success: true,
    data: { version: technicalRequestVersion, items, professional: professional as ValidatedProfessionalRequestData, attribution },
  }
}
