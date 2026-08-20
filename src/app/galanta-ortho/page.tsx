import { InstitutionalCta } from '@/components/institutional/InstitutionalCta'
import { InstitutionalHero } from '@/components/institutional/InstitutionalHero'
import { LineCard } from '@/components/institutional/LineCard'
import { StatusList } from '@/components/institutional/StatusList'
import { CapabilityCard } from '@/components/marketing/CapabilityCard'
import { ComplianceNotice } from '@/components/ui/ComplianceNotice'
import { Container } from '@/components/ui/Container'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { platformPillars, productLines } from '@/data/institutional'
import { createPageMetadata } from '@/lib/seo/metadata'

export const metadata = createPageMetadata({ title: 'Galanta Ortho', description: 'Conheça a linha inicial Galanta Ortho e sua estrutura Standard + Personal.', path: '/galanta-ortho' })

const lineStatus = [
  { label: 'Marca master', value: 'Galanta Medical', status: 'confirmed' as const },
  { label: 'Linha inicial', value: 'Galanta Ortho', status: 'confirmed' as const },
  { label: 'Área de desenvolvimento', value: 'Órteses e imobilizadores 3D', status: 'development' as const },
  { label: 'Produto/modelo', value: 'A confirmar', status: 'pending' as const },
]

export default function GalantaOrthoPage() {
  return <>
    <InstitutionalHero description="Linha inicial da Galanta Medical para desenvolvimento de estruturas Standard e Personal voltadas à rotina profissional." eyebrow="Galanta Medical · Linha inicial" notice="Produto, finalidade, material e situação regulatória permanecem em validação." primaryAction={{ href: '/produtos', label: 'Conhecer as soluções' }} secondaryAction={{ href: '/contato', label: 'Solicitar apresentação' }} title="Galanta Ortho: tecnologia aplicada à rotina ortopédica profissional." />
    <Container className="py-16 md:py-24"><div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start"><SectionTitle description="A Galanta Ortho organiza a comunicação inicial de órteses e imobilizadores 3D para profissionais, clínicas, hospitais e pontos de atendimento." eyebrow="Arquitetura" title="Uma linha preparada para evoluir com informação aprovada." /><StatusList items={lineStatus} /></div></Container>
    <section className="border-y border-mist bg-white py-16 md:py-24"><Container><SectionTitle description="As duas linhas representam estruturas de desenvolvimento, não um catálogo comercial publicado." eyebrow="Estrutura de linha" title="Standard + Personal." /><div className="mt-10 grid gap-5 md:grid-cols-2">{productLines.map((line) => <LineCard key={line.title} {...line} />)}</div></Container></section>
    <Container className="py-16 md:py-24"><SectionTitle description="Os pilares descrevem a direção da plataforma e da operação futura, sem constituir promessa de produto." eyebrow="Pilares" title="Disponibilidade, adaptação e personalização." /><div className="mt-10 grid gap-5 md:grid-cols-3">{platformPillars.map((pillar, index) => <CapabilityCard index={index + 1} key={pillar.title} {...pillar} />)}</div><ComplianceNotice className="mt-10" title="Conteúdo em desenvolvimento" tone="validation">Especificações serão publicadas apenas quando possuírem fonte, versão e aprovação aplicáveis.</ComplianceNotice></Container>
    <InstitutionalCta description="Conheça o posicionamento, as linhas e o processo previsto sem iniciar compra ou pagamento." primaryAction={{ href: '/contato', label: 'Solicitar apresentação técnica' }} secondaryAction={{ href: '/como-funciona', label: 'Ver processo conceitual' }} title="Avalie a proposta Galanta Ortho com a sua equipe." />
  </>
}
