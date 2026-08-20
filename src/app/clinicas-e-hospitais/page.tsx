import { InstitutionalCta } from '@/components/institutional/InstitutionalCta'
import { InstitutionalHero } from '@/components/institutional/InstitutionalHero'
import { ProcessSteps } from '@/components/institutional/ProcessSteps'
import { CapabilityCard } from '@/components/marketing/CapabilityCard'
import { ComplianceNotice } from '@/components/ui/ComplianceNotice'
import { Container } from '@/components/ui/Container'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { interestProcess } from '@/data/institutional'
import { createPageMetadata } from '@/lib/seo/metadata'

export const metadata = createPageMetadata({ title: 'Clínicas e hospitais', description: 'Estrutura Galanta Ortho para diálogo com clínicas, hospitais e pontos de atendimento.', path: '/clinicas-e-hospitais' })

const institutionCapabilities = [
  { title: 'Apresentação da linha', description: 'Contexto institucional da arquitetura Standard + Personal para equipes profissionais.' },
  { title: 'Planejamento futuro', description: 'Estrutura para diálogo sobre disponibilidade e reposição, sem estoque ou prazo confirmado.' },
  { title: 'Avaliação comercial', description: 'Preparação para propostas futuras conforme produto, condições e operação forem definidos.' },
]

export default function ClinicsAndHospitalsPage() {
  return <>
    <InstitutionalHero description="Estrutura de relacionamento B2B para clínicas, hospitais, gestores e pontos de atendimento profissional." eyebrow="Galanta Ortho · Instituições" notice="Produto, disponibilidade, prazo, preço e condições comerciais permanecem a confirmar." primaryAction={{ href: '/contato', label: 'Solicitar apresentação' }} secondaryAction={{ href: '/linha-standard', label: 'Conhecer Standard' }} title="Tecnologia e planejamento para pontos de atendimento." />
    <Container className="py-16 md:py-24"><SectionTitle description="Capacidades previstas para uma operação futura. Nenhuma informação abaixo representa estoque, SLA ou proposta comercial vigente." eyebrow="Relacionamento institucional" title="Apresentação, planejamento e avaliação." /><div className="mt-10 grid gap-5 md:grid-cols-3">{institutionCapabilities.map((item, index) => <CapabilityCard index={index + 1} key={item.title} {...item} />)}</div><ComplianceNotice className="mt-10" title="Condições sob consulta" tone="validation">A equipe Galanta confirmará escopo e próximos passos somente quando os canais e regras de atendimento estiverem definidos.</ComplianceNotice></Container>
    <section className="border-y border-mist bg-white py-16 md:py-24"><Container><SectionTitle description="Jornada provisória de relacionamento. O formulário B2B ainda não faz parte desta fase." eyebrow="Jornada B2B" title="Da apresentação ao interesse qualificado." /><div className="mt-10"><ProcessSteps items={interestProcess} /></div></Container></section>
    <InstitutionalCta description="Informe apenas contexto institucional e comercial. Não envie dados ou imagens de pacientes." primaryAction={{ href: '/contato', label: 'Falar com a equipe Galanta' }} secondaryAction={{ href: '/produtos', label: 'Conhecer as estruturas' }} title="Converse sobre a proposta para a sua instituição." />
  </>
}
