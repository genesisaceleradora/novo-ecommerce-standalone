import { InstitutionalCta } from '@/components/institutional/InstitutionalCta'
import { InstitutionalHero } from '@/components/institutional/InstitutionalHero'
import { LineCard } from '@/components/institutional/LineCard'
import { ComplianceNotice } from '@/components/ui/ComplianceNotice'
import { Container } from '@/components/ui/Container'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { productLines } from '@/data/institutional'
import { createPageMetadata } from '@/lib/seo/metadata'

export const metadata = createPageMetadata({ title: 'Soluções em desenvolvimento', description: 'Estrutura profissional das linhas Standard e Personal Galanta Ortho.', path: '/produtos' })

export default function ProductsLandingPage() {
  return <>
    <InstitutionalHero description="Entrada institucional para as estruturas Standard e Personal. O catálogo técnico será publicado somente após definição e aprovação dos modelos aplicáveis." eyebrow="Galanta Ortho · Soluções" notice="Nenhum produto, preço, configuração ou disponibilidade comercial está sendo apresentado nesta página." primaryAction={{ href: '/linha-standard', label: 'Conhecer Standard' }} secondaryAction={{ href: '/linha-personal', label: 'Conhecer Personal' }} title="Soluções estruturadas para avaliação profissional." />
    <Container className="py-16 md:py-24"><SectionTitle description="A organização abaixo demonstra a arquitetura da linha sem inventar produto, tamanho, lado, material ou finalidade." eyebrow="Estrutura de desenvolvimento" title="Duas linhas, informações transparentes." /><div className="mt-10 grid gap-5 md:grid-cols-2">{productLines.map((line) => <LineCard key={line.title} {...line} />)}</div><ComplianceNotice className="mt-10" title="Catálogo ainda não publicado" tone="warning">A página de catálogo e o modelo técnico de produto serão implementados na Fase 4. As rotas legadas permanecem apenas para compatibilidade interna.</ComplianceNotice></Container>
    <InstitutionalCta description="Registre interesse na apresentação da arquitetura Standard + Personal. Nenhum pedido ou pagamento será iniciado." primaryAction={{ href: '/contato', label: 'Falar com a equipe Galanta' }} secondaryAction={{ href: '/galanta-ortho', label: 'Voltar à visão da linha' }} title="Converse sobre a estrutura prevista para o seu ponto de atendimento." />
  </>
}
