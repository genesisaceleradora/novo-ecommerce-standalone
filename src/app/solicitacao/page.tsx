import type { Metadata } from 'next'
import { TechnicalRequestSummary } from '@/components/technical-request/TechnicalRequestSummary'

export const metadata: Metadata = { title: 'Solicitação técnica', description: 'Revise sua seleção profissional Galanta Ortho.', robots: { index: false, follow: false } }

export default function TechnicalRequestPage() {
  return <TechnicalRequestSummary />
}
