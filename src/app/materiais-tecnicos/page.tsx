import { InstitutionalCta } from '@/components/institutional/InstitutionalCta'
import { InstitutionalHero } from '@/components/institutional/InstitutionalHero'
import { LineCard } from '@/components/institutional/LineCard'
import { ComplianceNotice } from '@/components/ui/ComplianceNotice'
import { Container } from '@/components/ui/Container'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { technicalMaterials } from '@/data/institutional'
import { createPageMetadata } from '@/lib/seo/metadata'

export const metadata = createPageMetadata({ title: 'Materiais técnicos', description: 'Hub estrutural de materiais técnicos Galanta Ortho sujeitos a versão e aprovação.', path: '/materiais-tecnicos' })

export default function TechnicalMaterialsPage() {
  return <>
    <InstitutionalHero description="Hub preparado para documentos versionados, aprovados e vinculados ao produto aplicável." eyebrow="Galanta Ortho · Materiais" notice="Nenhum documento técnico está liberado para download nesta fase." primaryAction={{ href: '/contato', label: 'Solicitar informações' }} secondaryAction={{ href: '/regulatorio-e-seguranca', label: 'Ver status regulatório' }} title="Materiais técnicos com versão, status e responsabilidade." />
    <Container className="py-16 md:py-24"><SectionTitle description="Os cards demonstram a estrutura editorial futura. Eles não representam documentos existentes ou aprovados." eyebrow="Hub estrutural" title="Conteúdo técnico organizado por status." /><div className="mt-10 grid gap-5 md:grid-cols-2">{technicalMaterials.map((material) => <LineCard description={material.description} key={material.title} label={material.kind} status={material.status} title={material.title} />)}</div><ComplianceNotice className="mt-10" title="Publicação controlada" tone="restricted">Somente materiais com versão, data, responsável e status aprovado poderão receber URL pública.</ComplianceNotice></Container>
    <InstitutionalCta description="A equipe poderá esclarecer o status dos materiais sem enviar documentos não aprovados." primaryAction={{ href: '/contato', label: 'Falar com a equipe Galanta' }} secondaryAction={{ href: '/como-funciona', label: 'Conhecer o processo' }} title="Precisa acompanhar a evolução do conteúdo técnico?" />
  </>
}
