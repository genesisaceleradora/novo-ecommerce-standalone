import { InstitutionalCta } from '@/components/institutional/InstitutionalCta'
import { InstitutionalHero } from '@/components/institutional/InstitutionalHero'
import { ProcessSteps } from '@/components/institutional/ProcessSteps'
import { CapabilityCard } from '@/components/marketing/CapabilityCard'
import { ComplianceNotice } from '@/components/ui/ComplianceNotice'
import { Container } from '@/components/ui/Container'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { conceptualProcess } from '@/data/institutional'
import { createPageMetadata } from '@/lib/seo/metadata'

export const metadata = createPageMetadata({ title: 'Como funciona', description: 'Processo conceitual Galanta Ortho apresentado sem parâmetros ou instruções não aprovadas.', path: '/como-funciona' })

const responsibilities = [
  { title: 'Conteúdo aprovado', description: 'A plataforma publicará apenas informações com fonte, versão e aprovação aplicáveis.' },
  { title: 'Avaliação profissional', description: 'Qualquer aplicação permanece condicionada à avaliação e à orientação profissional.' },
  { title: 'Processo rastreável', description: 'Protocolos futuros deverão indicar versão, responsável e produto aplicável.' },
]

export default function HowItWorksPage() {
  return <>
    <InstitutionalHero description="Visão conceitual da jornada prevista para seleção, preparação, adaptação e verificação profissional." eyebrow="Galanta Ortho · Processo" notice="Esta página não constitui protocolo, instrução de uso ou autorização para aplicação clínica." primaryAction={{ href: '/contato', label: 'Solicitar apresentação' }} secondaryAction={{ href: '/regulatorio-e-seguranca', label: 'Ver status técnico' }} title="Um processo estruturado, sem antecipar parâmetros não aprovados." />
    <Container className="py-16 md:py-24"><SectionTitle description="Os passos organizam a compreensão da proposta. Detalhes operacionais serão publicados somente quando aprovados." eyebrow="Visão conceitual" title="Selecionar, preparar, adaptar e verificar." /><div className="mt-10"><ProcessSteps items={conceptualProcess} /></div><ComplianceNotice className="mt-10" title="Parâmetros restritos" tone="warning">Temperatura, tempo, técnica, finalidade e critérios de verificação não estão publicados.</ComplianceNotice></Container>
    <section className="border-y border-mist bg-white py-16 md:py-24"><Container><SectionTitle description="A clareza sobre fonte, responsabilidade e aprovação faz parte do próprio produto digital." eyebrow="Governança" title="Informação profissional com rastreabilidade editorial." /><div className="mt-10 grid gap-5 md:grid-cols-3">{responsibilities.map((item, index) => <CapabilityCard index={index + 1} key={item.title} {...item} />)}</div></Container></section>
    <InstitutionalCta description="Conheça a proposta antes da publicação de modelos e protocolos específicos." primaryAction={{ href: '/contato', label: 'Falar com a equipe Galanta' }} secondaryAction={{ href: '/galanta-ortho', label: 'Conhecer Galanta Ortho' }} title="Avalie o processo conceitual com a sua equipe." />
  </>
}
