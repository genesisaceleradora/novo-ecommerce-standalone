import type { Metadata } from 'next'
import { PlaceholderPage } from '@/components/institutional/PlaceholderPage'
import { createPageMetadata } from '@/lib/seo/metadata'

export const metadata: Metadata = createPageMetadata({ title: 'Sobre', description: 'Apresentação provisória da marca a definir.', path: '/sobre' })

export default function AboutPage() {
  return <PlaceholderPage description="A marca, sua história e seu posicionamento ainda serão definidos. A estrutura do ecommerce foi pensada para receber essa narrativa sem depender de uma identidade final." eyebrow="Marca a definir" title="Presentes criados para ganhar significado." />
}
