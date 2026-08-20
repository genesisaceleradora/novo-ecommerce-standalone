import { InstitutionalCta } from '@/components/institutional/InstitutionalCta'
import { InstitutionalHero } from '@/components/institutional/InstitutionalHero'
import { StatusList } from '@/components/institutional/StatusList'
import { CapabilityCard } from '@/components/marketing/CapabilityCard'
import { ComplianceNotice } from '@/components/ui/ComplianceNotice'
import { Container } from '@/components/ui/Container'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { createPageMetadata } from '@/lib/seo/metadata'

export const metadata = createPageMetadata({ title: 'Linha Personal', description: 'Estrutura Personal Galanta Ortho para casos selecionados e avaliação profissional.', path: '/linha-personal' })

const personalStatus = [
  { label: 'Arquitetura', value: 'Personal', status: 'confirmed' as const },
  { label: 'Critérios de elegibilidade', value: 'A confirmar', status: 'pending' as const },
  { label: 'Informações necessárias', value: 'Em validação', status: 'validation' as const },
  { label: 'Processo técnico', value: 'Não publicado', status: 'restricted' as const },
  { label: 'Condição comercial', value: 'Sob consulta', status: 'pending' as const },
]

const personalCapabilities = [
  { title: 'Avaliação do caso', description: 'Estrutura futura para casos selecionados, sem coletar dados identificáveis de pacientes no MVP.' },
  { title: 'Configuração Personal', description: 'Modelo de configuração ainda dependente de requisitos técnicos formalmente aprovados.' },
  { title: 'Acompanhamento profissional', description: 'Continuidade prevista com responsabilidades e critérios ainda a definir.' },
]

export default function PersonalLinePage() {
  return <>
    <InstitutionalHero description="Estrutura para soluções personalizadas em casos selecionados, condicionada a informações e avaliação profissional." eyebrow="Galanta Ortho · Personal" notice="Não envie nomes, documentos, imagens ou informações identificáveis de pacientes." primaryAction={{ href: '/contato', label: 'Registrar interesse' }} secondaryAction={{ href: '/linha-standard', label: 'Conhecer Standard' }} title="Linha Personal: configuração condicionada à avaliação profissional." />
    <Container className="py-16 md:py-24"><div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start"><SectionTitle description="A arquitetura Personal pode avançar como estrutura de plataforma sem antecipar elegibilidade, finalidade ou processo técnico." eyebrow="Estado atual" title="Personalização sem inferir indicação clínica." /><StatusList items={personalStatus} /></div></Container>
    <section className="border-y border-mist bg-white py-16 md:py-24"><Container><SectionTitle description="Etapas estruturais, não instruções clínicas ou operacionais." eyebrow="Estrutura prevista" title="Avaliação, configuração e acompanhamento." /><div className="mt-10 grid gap-5 md:grid-cols-3">{personalCapabilities.map((item, index) => <CapabilityCard index={index + 1} key={item.title} {...item} />)}</div><ComplianceNotice className="mt-10" title="Dados de pacientes proibidos" tone="restricted">O MVP não solicita nem aceita imagens clínicas, diagnóstico, prontuário ou identificação de pacientes.</ComplianceNotice></Container></section>
    <InstitutionalCta description="O contato atual é exclusivamente profissional e institucional. Critérios e próximos passos serão confirmados pela equipe Galanta." primaryAction={{ href: '/contato', label: 'Falar com a equipe Galanta' }} secondaryAction={{ href: '/produtos', label: 'Ver estruturas da linha' }} title="Conheça a proposta Personal sem enviar dados clínicos." />
  </>
}
