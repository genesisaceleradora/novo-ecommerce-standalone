import { InstitutionalCta } from '@/components/institutional/InstitutionalCta'
import { InstitutionalHero } from '@/components/institutional/InstitutionalHero'
import { CapabilityCard } from '@/components/marketing/CapabilityCard'
import { ComplianceNotice } from '@/components/ui/ComplianceNotice'
import { Container } from '@/components/ui/Container'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { createPageMetadata } from '@/lib/seo/metadata'

export const metadata = createPageMetadata({ title: 'Sobre a Galanta Medical', description: 'Tecnologia, engenharia e manufatura digital aplicada à saúde.', path: '/sobre' })

const brandStructure = [
  { title: 'Galanta Medical', label: 'Marca master', description: 'Tecnologia, engenharia e manufatura digital aplicada à saúde.' },
  { title: 'Galanta Ortho', label: 'Linha inicial', description: 'Estrutura profissional voltada ao desenvolvimento de órteses e imobilizadores 3D.' },
  { title: 'Standard + Personal', label: 'Arquitetura', description: 'Duas linhas planejadas para disponibilidade e personalização, com especificações ainda pendentes.' },
]

export default function AboutPage() {
  return <>
    <InstitutionalHero description="Uma plataforma profissional para organizar linhas, informação aprovada e interesse técnico em soluções desenvolvidas com manufatura digital." eyebrow="Galanta Medical" notice="Logo, ativos finais, produto e informações técnicas permanecem sujeitos às aprovações aplicáveis." primaryAction={{ href: '/galanta-ortho', label: 'Conhecer Galanta Ortho' }} secondaryAction={{ href: '/contato', label: 'Falar com a equipe' }} title="Tecnologia e engenharia aplicadas à rotina clínica." />
    <Container className="py-16 md:py-24"><SectionTitle description="A arquitetura separa marca, linha e modelos para permitir evolução sem transformar pendências em informações definitivas." eyebrow="Arquitetura de marca" title="Galanta Medical como plataforma. Galanta Ortho como linha inicial." /><div className="mt-10 grid gap-5 md:grid-cols-3">{brandStructure.map((item, index) => <CapabilityCard index={index + 1} key={item.title} {...item} />)}</div><ComplianceNotice className="mt-10" title="Desenvolvimento responsável" tone="validation">Conteúdo técnico e comercial será atualizado conforme cada decisão possuir origem, responsável e data.</ComplianceNotice></Container>
    <InstitutionalCta description="Conheça a linha inicial ou apresente o contexto profissional da sua instituição." primaryAction={{ href: '/galanta-ortho', label: 'Conhecer a linha' }} secondaryAction={{ href: '/contato', label: 'Solicitar apresentação' }} title="Acompanhe a construção da plataforma Galanta." />
  </>
}
