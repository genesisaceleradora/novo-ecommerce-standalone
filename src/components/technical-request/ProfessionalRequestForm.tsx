'use client'

import Link from 'next/link'
import { useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { RequestItemDetails } from '@/components/technical-request/RequestItemDetails'
import { Button } from '@/components/ui/Button'
import { ComplianceNotice } from '@/components/ui/ComplianceNotice'
import { Container } from '@/components/ui/Container'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { requestTypeLabels } from '@/data/catalog'
import { brazilianStates, professionalProfileLabels, professionalRoleLabels } from '@/data/technical-request'
import { useTechnicalRequest } from '@/hooks/useTechnicalRequest'
import { getStoredUTMs } from '@/lib/tracking/utm'
import { trackEvent } from '@/lib/tracking/events'
import { storeTechnicalRequestSession } from '@/lib/technical-request/storage'
import { validateTechnicalRequestPayload } from '@/lib/technical-request/validation'
import { professionalProfileValues, professionalRoleValues, technicalRequestVersion, type MockTechnicalRequestConfirmation, type ProfessionalRequestData, type TechnicalRequestFieldErrors } from '@/types/technical-request'
import type { TechnicalRequestType } from '@/types/catalog'

const initialData: ProfessionalRequestData = {
  fullName: '', role: '', professionalRegistration: '', institution: '', city: '', state: '', email: '', whatsapp: '', serviceProfile: '', primaryInterest: '', approximateVolume: '', cnpj: '', notes: '', privacyConsent: false, noPatientDataConfirmation: false,
}

const requestTrackingEvents: Partial<Record<TechnicalRequestType, 'TechnicalPresentationRequested' | 'TechnicalSampleRequested' | 'StockPlanningRequested' | 'PersonalProjectRequested'>> = {
  technical_presentation: 'TechnicalPresentationRequested',
  technical_sample: 'TechnicalSampleRequested',
  stock_planning: 'StockPlanningRequested',
  personal_project: 'PersonalProjectRequested',
}

export function ProfessionalRequestForm() {
  const router = useRouter()
  const { clearItems, isHydrated, items } = useTechnicalRequest()
  const [data, setData] = useState(initialData)
  const [errors, setErrors] = useState<TechnicalRequestFieldErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const formStarted = useRef(false)
  const availableInterests = Array.from(new Set(items.map((item) => item.requestType)))

  function updateField<K extends keyof ProfessionalRequestData>(field: K, value: ProfessionalRequestData[K]) {
    setData((current) => ({ ...current, [field]: value }))
    if (errors[field] || errors.form) setErrors((current) => ({ ...current, [field]: undefined, form: undefined }))
  }

  function trackFormStart() {
    if (formStarted.current) return
    formStarted.current = true
    trackEvent('FormStart', { form_name: 'technical_request', item_count: items.length })
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const attribution = getStoredUTMs()
    const payload = { version: technicalRequestVersion, items, professional: data, attribution }
    const clientResult = validateTechnicalRequestPayload(payload)
    if (!clientResult.success) {
      setErrors(clientResult.fieldErrors)
      window.requestAnimationFrame(() => document.getElementById('request-form-errors')?.focus())
      return
    }

    setIsSubmitting(true)
    setErrors({})
    try {
      const response = await fetch('/api/solicitacoes/create', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(clientResult.data) })
      const result = await response.json() as { confirmation?: MockTechnicalRequestConfirmation; message?: string; fieldErrors?: TechnicalRequestFieldErrors }
      if (!response.ok || !result.confirmation) {
        setErrors(result.fieldErrors ?? { form: result.message ?? 'Não foi possível enviar a solicitação.' })
        setIsSubmitting(false)
        return
      }

      storeTechnicalRequestSession({ confirmation: result.confirmation, professional: clientResult.data.professional, attribution: clientResult.data.attribution })
      trackEvent('FormSubmit', { form_name: 'technical_request', item_count: items.length, request_type: data.primaryInterest })
      trackEvent('Lead', { lead_type: 'technical_request', item_count: items.length, request_type: data.primaryInterest })
      const specializedEvent = requestTrackingEvents[data.primaryInterest as TechnicalRequestType]
      if (specializedEvent) trackEvent(specializedEvent, { item_count: items.length, request_type: data.primaryInterest })
      clearItems()
      router.push('/solicitacao/confirmacao')
    } catch {
      setErrors({ form: 'Não foi possível enviar a solicitação demonstrativa. Verifique sua conexão e tente novamente.' })
      setIsSubmitting(false)
    }
  }

  if (!isHydrated) return <Container className="py-16"><p aria-live="polite" className="text-sm text-steel">Carregando sua solicitação…</p></Container>
  if (items.length === 0) return <Container className="py-16 md:py-24"><SectionTitle description="Adicione ao menos um interesse no catálogo antes de informar seus dados profissionais." eyebrow="Etapa 2 de 2" title="Nenhuma seleção disponível." /><Button className="mt-8" href="/produtos">Consultar soluções</Button></Container>

  return (
    <Container className="py-10 md:py-16">
      <SectionTitle description="Informe somente dados profissionais e comerciais necessários para a qualificação inicial." eyebrow="Etapa 2 de 2" title="Dados profissionais." />
      <ComplianceNotice className="mt-8" title="Não envie dados de pacientes" tone="restricted">Não inclua nomes, documentos, fotografias, diagnósticos, prontuários ou qualquer informação identificável de pacientes.</ComplianceNotice>

      <form className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.72fr]" noValidate onFocusCapture={trackFormStart} onSubmit={handleSubmit}>
        <div className="space-y-9">
          <fieldset className="grid gap-5"><legend className="font-display text-2xl font-semibold text-slate">Identificação profissional</legend>
            <FormInput autoComplete="name" error={errors.fullName} label="Nome completo" maxLength={120} onChange={(value) => updateField('fullName', value)} required value={data.fullName} />
            <div className="grid gap-5 sm:grid-cols-2"><FormSelect error={errors.role} label="Profissão ou função" onChange={(value) => updateField('role', value as ProfessionalRequestData['role'])} required value={data.role}><option value="">Selecione</option>{professionalRoleValues.map((role) => <option key={role} value={role}>{professionalRoleLabels[role]}</option>)}</FormSelect><FormInput error={errors.professionalRegistration} label="Registro profissional" maxLength={60} onChange={(value) => updateField('professionalRegistration', value)} value={data.professionalRegistration} /></div>
            <FormInput autoComplete="organization" error={errors.institution} label="Clínica, hospital, empresa ou atuação" maxLength={140} onChange={(value) => updateField('institution', value)} required value={data.institution} />
            <div className="grid gap-5 sm:grid-cols-2"><FormInput autoComplete="address-level2" error={errors.city} label="Cidade" maxLength={100} onChange={(value) => updateField('city', value)} required value={data.city} /><FormSelect autoComplete="address-level1" error={errors.state} label="Estado" onChange={(value) => updateField('state', value)} required value={data.state}><option value="">Selecione</option>{brazilianStates.map(([value, label]) => <option key={value} value={value}>{value} — {label}</option>)}</FormSelect></div>
          </fieldset>

          <fieldset className="grid gap-5"><legend className="font-display text-2xl font-semibold text-slate">Contato e contexto</legend>
            <div className="grid gap-5 sm:grid-cols-2"><FormInput autoComplete="email" error={errors.email} label="E-mail" maxLength={160} onChange={(value) => updateField('email', value)} required type="email" value={data.email} /><FormInput autoComplete="tel" error={errors.whatsapp} label="WhatsApp com DDD" maxLength={30} onChange={(value) => updateField('whatsapp', value)} required type="tel" value={data.whatsapp} /></div>
            <FormSelect error={errors.serviceProfile} label="Perfil de atendimento" onChange={(value) => updateField('serviceProfile', value as ProfessionalRequestData['serviceProfile'])} value={data.serviceProfile}><option value="">Não informado</option>{professionalProfileValues.map((profile) => <option key={profile} value={profile}>{professionalProfileLabels[profile]}</option>)}</FormSelect>
            <FormSelect error={errors.primaryInterest} label="Interesse principal" onChange={(value) => updateField('primaryInterest', value as ProfessionalRequestData['primaryInterest'])} required value={data.primaryInterest}><option value="">Selecione</option>{availableInterests.map((type) => <option key={type} value={type}>{requestTypeLabels[type]}</option>)}</FormSelect>
            <div className="grid gap-5 sm:grid-cols-2"><FormInput error={errors.approximateVolume} label="Volume aproximado" maxLength={100} onChange={(value) => updateField('approximateVolume', value)} value={data.approximateVolume} /><FormInput autoComplete="off" error={errors.cnpj} label="CNPJ" maxLength={30} onChange={(value) => updateField('cnpj', value)} value={data.cnpj} /></div>
            <label className="grid gap-2 text-sm font-semibold text-slate" htmlFor="professional-notes">Observações comerciais ou técnicas <span className="font-normal text-steel">(opcional)</span></label><textarea aria-describedby="professional-notes-help" aria-invalid={Boolean(errors.notes)} className="min-h-32 rounded-lg border border-mist bg-white p-4 text-sm font-normal text-slate outline-none focus:border-cyan" id="professional-notes" maxLength={800} onChange={(event) => updateField('notes', event.target.value)} value={data.notes} /><p className="-mt-3 text-xs leading-5 text-steel" id="professional-notes-help">Limite de 800 caracteres. Não inclua informações de pacientes.</p>
          </fieldset>

          <fieldset className="grid gap-4"><legend className="font-display text-2xl font-semibold text-slate">Consentimentos</legend><FormCheckbox checked={data.privacyConsent} error={errors.privacyConsent} label={<>Li e concordo com o tratamento destes dados para qualificação e contato sobre a solicitação, conforme a <Link className="font-semibold text-cyan underline underline-offset-2" href="/politica-de-privacidade" target="_blank">Política de Privacidade</Link>.</>} onChange={(checked) => updateField('privacyConsent', checked)} /><FormCheckbox checked={data.noPatientDataConfirmation} error={errors.noPatientDataConfirmation} label="Confirmo que não incluí dados pessoais, documentos, imagens ou informações identificáveis de pacientes." onChange={(checked) => updateField('noPatientDataConfirmation', checked)} /></fieldset>

          {Object.keys(errors).length > 0 && <div aria-live="assertive" className="rounded-lg border border-clinicalRed/30 bg-clinicalRed/5 p-4 text-sm font-semibold text-clinicalRed" id="request-form-errors" role="alert" tabIndex={-1}>{errors.form ?? 'Revise os campos destacados antes de continuar.'}</div>}
          <Button className="w-full" isLoading={isSubmitting} type="submit">{isSubmitting ? 'Enviando solicitação…' : 'Enviar solicitação técnica'}</Button>
          <p className="text-xs leading-5 text-steel">O envio é demonstrativo: não cria compra, pagamento, reserva, proposta, entrega ou comunicação externa.</p>
        </div>

        <aside className="h-fit rounded-2xl border border-mist bg-sterile p-5 sm:p-6 lg:sticky lg:top-28"><p className="font-technical text-[10px] font-semibold uppercase tracking-[0.12em] text-cyan">Seleção técnica</p><h2 className="mt-2 font-display text-2xl font-semibold text-slate">Resumo para qualificação</h2><ul className="mt-5 divide-y divide-mist">{items.map((item) => <li className="py-4" key={item.key}><RequestItemDetails item={item} /></li>)}</ul><Link className="mt-5 inline-flex min-h-11 items-center text-sm font-semibold text-cyan underline underline-offset-4" href="/solicitacao">Editar seleção</Link></aside>
      </form>
    </Container>
  )
}

type FormInputProps = { label: string; value: string; onChange: (value: string) => void; error?: string; required?: boolean; type?: 'text' | 'email' | 'tel'; autoComplete?: string; maxLength?: number }
function FormInput({ label, value, onChange, error, required = false, type = 'text', autoComplete, maxLength }: FormInputProps) {
  const id = `request-${label.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`
  return <label className="grid gap-2 text-sm font-semibold text-slate" htmlFor={id}>{label}{required && ' *'}<input aria-describedby={error ? `${id}-error` : undefined} aria-invalid={Boolean(error)} autoComplete={autoComplete} className="min-h-12 rounded-lg border border-mist bg-white px-4 font-normal text-slate outline-none focus:border-cyan" id={id} maxLength={maxLength} onChange={(event) => onChange(event.target.value)} required={required} type={type} value={value} />{error && <span className="text-xs font-semibold text-clinicalRed" id={`${id}-error`}>{error}</span>}</label>
}

type FormSelectProps = { children: React.ReactNode; label: string; value: string; onChange: (value: string) => void; error?: string; required?: boolean; autoComplete?: string }
function FormSelect({ children, label, value, onChange, error, required = false, autoComplete }: FormSelectProps) {
  const id = `request-${label.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`
  return <label className="grid gap-2 text-sm font-semibold text-slate" htmlFor={id}>{label}{required && ' *'}<select aria-describedby={error ? `${id}-error` : undefined} aria-invalid={Boolean(error)} autoComplete={autoComplete} className="min-h-12 rounded-lg border border-mist bg-white px-4 font-normal text-slate outline-none focus:border-cyan" id={id} onChange={(event) => onChange(event.target.value)} required={required} value={value}>{children}</select>{error && <span className="text-xs font-semibold text-clinicalRed" id={`${id}-error`}>{error}</span>}</label>
}

type FormCheckboxProps = { checked: boolean; label: React.ReactNode; onChange: (checked: boolean) => void; error?: string }
function FormCheckbox({ checked, label, onChange, error }: FormCheckboxProps) {
  return <label className="rounded-lg border border-mist bg-white p-4 text-sm leading-6 text-slate"><span className="flex items-start gap-3"><input aria-invalid={Boolean(error)} checked={checked} className="mt-1 size-4 shrink-0 accent-cyan" onChange={(event) => onChange(event.target.checked)} type="checkbox" /><span>{label}</span></span>{error && <span className="mt-2 block text-xs font-semibold text-clinicalRed">{error}</span>}</label>
}
