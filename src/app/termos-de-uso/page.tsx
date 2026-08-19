import type { Metadata } from 'next'
import { PlaceholderPage } from '@/components/institutional/PlaceholderPage'
import { createPageMetadata } from '@/lib/seo/metadata'

export const metadata: Metadata = createPageMetadata({ title: 'Termos de uso', description: 'Termos de uso pendentes de revisão jurídica.', path: '/termos-de-uso' })

export default function TermsPage() {
  return <PlaceholderPage description="Os termos de uso e as condições de venda exigem redação e revisão jurídica antes da publicação. Esta rota é apenas estrutural para a navegação do MVP." eyebrow="Documento a definir" title="Termos de uso." />
}
