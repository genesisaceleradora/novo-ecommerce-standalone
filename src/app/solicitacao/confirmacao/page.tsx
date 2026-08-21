import type { Metadata } from 'next'
import { TechnicalRequestConfirmation } from '@/components/technical-request/TechnicalRequestConfirmation'

export const metadata: Metadata = { title: 'Solicitação recebida', description: 'Confirmação demonstrativa de solicitação técnica Galanta.', robots: { index: false, follow: false } }

export default function TechnicalRequestConfirmationPage() {
  return <TechnicalRequestConfirmation />
}
