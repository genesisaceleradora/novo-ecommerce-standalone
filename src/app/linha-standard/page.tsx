import { InstitutionalCta } from '@/components/institutional/InstitutionalCta'
import { InstitutionalHero } from '@/components/institutional/InstitutionalHero'
import { StatusList } from '@/components/institutional/StatusList'
import { CapabilityCard } from '@/components/marketing/CapabilityCard'
import { ComplianceNotice } from '@/components/ui/ComplianceNotice'
import { Container } from '@/components/ui/Container'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { createPageMetadata } from '@/lib/seo/metadata'

export const metadata = createPageMetadata({ title: 'Linha Standard', description: 'Estrutura Standard Galanta Ortho planejada para configuração e organização profissional.', path: '/linha-standard' })

const standardStatus = [
  { label: 'Arquitetura', value: 'Standard', status: 'confirmed' as const },
  { label: 'Modelos', value: 'A confirmar', status: 'pending' as const },
  { label: 'Tamanhos e lados', value: 'Estrutura futura', status: 'development' as const },
  { label: 'Materiais', value: 'Informação técnica em validação', status: 'validation' as const },
  { label: 'Condição comercial', value: 'Sob consulta', status: 'pending' as const },
]

const standardCapabilities = [
  { title: 'Configuração', description: 'Estrutura prevista para modelo, tamanho e lado quando as opções forem confirmadas.' },
  { title: 'Disponibilidade', description: 'Planejamento futuro para pontos de atendimento, sem afirmação de estoque ou prazo.' },
  { title: 'Reposição', description: 'Capacidade operacional prevista, condicionada às regras comerciais ainda pendentes.' },
]

export default function StandardLinePage() {
  return <>
    <InstitutionalHero description="Estrutura de produtos padronizados planejada para futura configuração e organização em pontos de atendimento." eyebrow="Galanta Ortho · Standard" notice="Modelos, tamanhos, lados, materiais e condições permanecem a confirmar." primaryAction={{ href: '/contato', label: 'Registrar interesse' }} secondaryAction={{ href: '/linha-personal', label: 'Conhecer Personal' }} title="Linha Standard: estrutura para disponibilidade planejada." />
    <Container className="py-16 md:py-24"><div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start"><SectionTitle description="A linha está preparada para receber configurações aprovadas sem apresentá-las como oferta antes da definição técnica e comercial." eyebrow="Estado atual" title="Campos claros, pendências explícitas." /><StatusList items={standardStatus} /></div></Container>
    <section className="border-y border-mist bg-white py-16 md:py-24"><Container><SectionTitle description="Capacidades estruturais da plataforma. Nenhuma delas representa disponibilidade imediata." eyebrow="Planejamento" title="Configuração, disponibilidade e reposição." /><div className="mt-10 grid gap-5 md:grid-cols-3">{standardCapabilities.map((item, index) => <CapabilityCard index={index + 1} key={item.title} {...item} />)}</div><ComplianceNotice className="mt-10" title="Sem oferta comercial" tone="validation">Esta página não exibe preço, estoque, prazo, indicação ou instrução de uso.</ComplianceNotice></Container></section>
    <InstitutionalCta description="Apresente o contexto da sua instituição ou ponto de atendimento sem enviar informações de pacientes." primaryAction={{ href: '/contato', label: 'Solicitar apresentação técnica' }} secondaryAction={{ href: '/produtos', label: 'Ver estruturas da linha' }} title="Avalie a proposta Standard com a equipe Galanta." />
  </>
}
