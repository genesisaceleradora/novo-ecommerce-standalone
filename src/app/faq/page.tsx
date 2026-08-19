import type { Metadata } from 'next'
import { FAQ } from '@/components/marketing/FAQ'
import { Container } from '@/components/ui/Container'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { faqs } from '@/data/home'
import { createPageMetadata } from '@/lib/seo/metadata'

export const metadata: Metadata = createPageMetadata({ title: 'Dúvidas frequentes', description: 'Respostas provisórias sobre o ecommerce.', path: '/faq' })

export default function FAQPage() {
  return <Container className="py-14 md:py-24"><SectionTitle description="As respostas serão revisadas quando marca, produto e regras comerciais estiverem definidos." eyebrow="FAQ provisório" title="Comece com clareza." /><div className="mt-8"><FAQ items={faqs} /></div></Container>
}
