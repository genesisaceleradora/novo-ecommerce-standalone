import { InstitutionalCta } from '@/components/institutional/InstitutionalCta'
import { InstitutionalHero } from '@/components/institutional/InstitutionalHero'
import { ComplianceNotice } from '@/components/ui/ComplianceNotice'
import { Container } from '@/components/ui/Container'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { TechnicalTable, type TechnicalTableRow } from '@/components/ui/TechnicalTable'
import { regulatoryTopics } from '@/data/institutional'
import { createPageMetadata } from '@/lib/seo/metadata'

export const metadata = createPageMetadata({ title: 'Regulatório e segurança', description: 'Status estrutural de informações regulatórias e de segurança Galanta Ortho.', path: '/regulatorio-e-seguranca' })

const columns = [
  { key: 'topic', label: 'Tópico', width: '34%' },
  { key: 'value', label: 'Informação atual', width: '42%' },
  { key: 'status', label: 'Status', width: '24%' },
] as const

const statusLabels = { confirmed: 'Confirmado', development: 'Em desenvolvimento', validation: 'Em validação', pending: 'A confirmar', restricted: 'Não publicado' } as const
const rows: TechnicalTableRow[] = regulatoryTopics.map((item) => ({ topic: item.topic, value: item.value, status: statusLabels[item.status] }))

export default function RegulatoryAndSafetyPage() {
  return <>
    <InstitutionalHero description="Estrutura transparente para acompanhar informações técnicas, regulatórias e de segurança ainda pendentes." eyebrow="Galanta Ortho · Compliance" notice="Esta página não afirma registro, aprovação, regularização, classe de risco ou liberação de uso." primaryAction={{ href: '/contato', label: 'Falar com a equipe' }} secondaryAction={{ href: '/materiais-tecnicos', label: 'Ver materiais' }} title="Status regulatório e segurança sem afirmações antecipadas." />
    <Container className="py-16 md:py-24"><SectionTitle description="Cada campo permanece funcional mesmo quando a informação ainda não foi fornecida ou aprovada." eyebrow="Estado da informação" title="Pendências explícitas, sem preencher lacunas." /><TechnicalTable caption="Status das informações técnicas e regulatórias Galanta Ortho" className="mt-10" columns={columns} rowHeaderKey="topic" rows={rows} /><div className="mt-8 grid gap-5 md:grid-cols-2"><ComplianceNotice title="Sem autorização implícita" tone="restricted">A existência desta página não constitui indicação, registro, regularização ou autorização de uso clínico.</ComplianceNotice><ComplianceNotice title="Revisão necessária" tone="warning">Claims, instruções, materiais e documentos dependerão de fonte, versão e aprovação aplicáveis.</ComplianceNotice></div></Container>
    <InstitutionalCta description="Use o contato apenas para contexto institucional. O canal de queixa técnica será definido antes da operação real." primaryAction={{ href: '/contato', label: 'Acessar contato profissional' }} secondaryAction={{ href: '/galanta-ortho', label: 'Conhecer a linha' }} title="Procura informações sobre o estado atual da linha?" />
  </>
}
