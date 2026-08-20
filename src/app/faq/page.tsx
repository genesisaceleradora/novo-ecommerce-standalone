import { InstitutionalCta } from '@/components/institutional/InstitutionalCta'
import { InstitutionalHero } from '@/components/institutional/InstitutionalHero'
import { FAQ } from '@/components/marketing/FAQ'
import { ComplianceNotice } from '@/components/ui/ComplianceNotice'
import { Container } from '@/components/ui/Container'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { professionalFaqs } from '@/data/institutional'
import { createPageMetadata } from '@/lib/seo/metadata'

export const metadata = createPageMetadata({ title: 'Dúvidas frequentes', description: 'Respostas profissionais sobre a plataforma Galanta Medical e a linha Galanta Ortho.', path: '/faq' })

export default function FAQPage() {
  return <>
    <InstitutionalHero description="Respostas estruturais sobre público, conteúdo, especificações, contato e proteção de dados." eyebrow="Galanta Medical · FAQ" notice="Respostas técnicas específicas serão publicadas somente após aprovação aplicável." primaryAction={{ href: '/contato', label: 'Falar com a equipe' }} secondaryAction={{ href: '/regulatorio-e-seguranca', label: 'Ver status técnico' }} title="Informação profissional com contexto." />
    <Container className="py-16 md:py-24" size="narrow"><SectionTitle description="Campos pendentes permanecem identificados. Nenhuma resposta deve ser interpretada como recomendação individual." eyebrow="FAQ profissional" title="Clareza sobre o estado atual da plataforma." /><div className="mt-8"><FAQ items={professionalFaqs} /></div><ComplianceNotice className="mt-10" title="Conteúdo institucional" tone="validation">Este FAQ não substitui ficha técnica, protocolo, instrução de uso ou avaliação profissional.</ComplianceNotice></Container>
    <InstitutionalCta description="Use o contato para questões institucionais ou para registrar interesse em uma apresentação futura." primaryAction={{ href: '/contato', label: 'Acessar contato profissional' }} secondaryAction={{ href: '/galanta-ortho', label: 'Conhecer a linha' }} title="Ainda precisa de contexto sobre a proposta?" />
  </>
}
