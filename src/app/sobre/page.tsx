import type { Metadata } from 'next'
import { PlaceholderPage } from '@/components/institutional/PlaceholderPage'
import { createPageMetadata } from '@/lib/seo/metadata'

export const metadata: Metadata = createPageMetadata({ title: 'Sobre a Galanta Medical', description: 'Apresentação institucional em desenvolvimento da Galanta Medical.', path: '/sobre' })

export default function AboutPage() {
  return <PlaceholderPage description="A Galanta Medical reúne tecnologia, engenharia e manufatura digital aplicada à saúde. A apresentação institucional completa será desenvolvida na próxima fase." eyebrow="Galanta Medical" title="Uma plataforma profissional em construção." />
}
