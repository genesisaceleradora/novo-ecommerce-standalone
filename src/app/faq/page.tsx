import type { Metadata } from 'next'
import { FAQ } from '@/components/marketing/FAQ'
import { Container } from '@/components/ui/Container'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { faqs } from '@/data/home'
import { createPageMetadata } from '@/lib/seo/metadata'

export const metadata: Metadata = createPageMetadata({ title: 'Dúvidas frequentes', description: 'Respostas provisórias sobre o portal profissional Galanta Medical.', path: '/faq' })

export default function FAQPage() {
  return <Container className="py-14 md:py-24"><SectionTitle description="As respostas serão atualizadas conforme produto, conteúdo técnico e regras comerciais forem aprovados." eyebrow="FAQ profissional" title="Informação com contexto e transparência." /><div className="mt-8"><FAQ items={faqs} /></div></Container>
}
