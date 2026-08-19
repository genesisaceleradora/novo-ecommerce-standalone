import type { Metadata } from 'next'
import { PlaceholderPage } from '@/components/institutional/PlaceholderPage'
import { createPageMetadata } from '@/lib/seo/metadata'

export const metadata: Metadata = createPageMetadata({ title: 'Política de privacidade', description: 'Política de privacidade pendente de revisão jurídica.', path: '/politica-de-privacidade' })

export default function PrivacyPolicyPage() {
  return <PlaceholderPage description="A política oficial de privacidade e o tratamento de dados pessoais devem ser definidos com revisão jurídica antes do lançamento. O MVP não utiliza dados reais de clientes nem armazenamento público de arquivos." eyebrow="Documento a definir" title="Política de privacidade." />
}
