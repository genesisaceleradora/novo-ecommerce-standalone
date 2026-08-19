import type { Metadata } from 'next'
import { PlaceholderPage } from '@/components/institutional/PlaceholderPage'
import { createPageMetadata } from '@/lib/seo/metadata'

export const metadata: Metadata = createPageMetadata({ title: 'Trocas e devoluções', description: 'Política comercial pendente de definição.', path: '/politica-de-troca' })

export default function ExchangePolicyPage() {
  return <PlaceholderPage description="Prazos, condições e regras de troca ainda dependem da definição do produto, operação e política comercial. Nenhuma regra demonstrativa deve ser tratada como oferta final." eyebrow="Documento a definir" title="Trocas e devoluções." />
}
