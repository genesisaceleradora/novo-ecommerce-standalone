import type { Metadata } from 'next'
import { PlaceholderPage } from '@/components/institutional/PlaceholderPage'
import { createPageMetadata } from '@/lib/seo/metadata'

export const metadata: Metadata = createPageMetadata({ title: 'Contato', description: 'Canal de atendimento ainda a definir.', path: '/contato' })

export default function ContactPage() {
  return <PlaceholderPage description="Os canais oficiais de WhatsApp e e-mail ainda não foram definidos. Configure as variáveis públicas de atendimento antes de publicar uma operação comercial." eyebrow="Atendimento" title="Estamos preparando os canais de contato." />
}
