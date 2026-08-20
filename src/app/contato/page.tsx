import type { Metadata } from 'next'
import { PlaceholderPage } from '@/components/institutional/PlaceholderPage'
import { createPageMetadata } from '@/lib/seo/metadata'

export const metadata: Metadata = createPageMetadata({ title: 'Contato profissional', description: 'Canal profissional Galanta Medical em desenvolvimento.', path: '/contato' })

export default function ContactPage() {
  return <PlaceholderPage description="Os canais oficiais de WhatsApp e e-mail ainda não foram confirmados. Não envie nomes, documentos, imagens ou informações identificáveis de pacientes." eyebrow="Contato profissional" title="Estamos preparando os canais da equipe Galanta." />
}
