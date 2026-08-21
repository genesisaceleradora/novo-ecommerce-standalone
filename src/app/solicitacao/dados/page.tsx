import type { Metadata } from 'next'
import { ProfessionalRequestForm } from '@/components/technical-request/ProfessionalRequestForm'

export const metadata: Metadata = { title: 'Dados profissionais', description: 'Informe os dados necessários para qualificar sua solicitação técnica.', robots: { index: false, follow: false } }

export default function TechnicalRequestDataPage() {
  return <ProfessionalRequestForm />
}
