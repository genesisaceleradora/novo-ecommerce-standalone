import { InstitutionalCta } from '@/components/institutional/InstitutionalCta'
import { InstitutionalHero } from '@/components/institutional/InstitutionalHero'
import { ProcessSteps } from '@/components/institutional/ProcessSteps'
import { CapabilityCard } from '@/components/marketing/CapabilityCard'
import { ComplianceNotice } from '@/components/ui/ComplianceNotice'
import { Container } from '@/components/ui/Container'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { interestProcess, professionalAudiences } from '@/data/institutional'
import { createPageMetadata } from '@/lib/seo/metadata'

export const metadata = createPageMetadata({ title: 'Para profissionais', description: 'Portal Galanta Ortho voltado a profissionais de saúde e avaliação técnica.', path: '/profissionais' })

export default function ProfessionalsPage() {
  const healthProfessionals = professionalAudiences.slice(0, 3)
  return <>
    <InstitutionalHero description="Conteúdo para profissionais interessados em conhecer a estrutura Galanta Ortho e acompanhar a evolução das informações aprovadas." eyebrow="Galanta Ortho · Profissionais" notice="O portal não oferece diagnóstico, recomendação individual ou orientação para uso sem avaliação profissional." primaryAction={{ href: '/contato', label: 'Solicitar apresentação' }} secondaryAction={{ href: '/materiais-tecnicos', label: 'Ver materiais' }} title="Informação técnica para diálogo profissional." />
    <Container className="py-16 md:py-24"><SectionTitle description="A plataforma considera diferentes contextos profissionais sem publicar indicação ou protocolo ainda não aprovado." eyebrow="Públicos prioritários" title="Estrutura para diferentes rotinas profissionais." /><div className="mt-10 grid gap-5 md:grid-cols-3">{healthProfessionals.map((audience, index) => <CapabilityCard index={index + 1} key={audience.title} label={audience.label} title={audience.title} description={audience.description} />)}</div><ComplianceNotice className="mt-10" title="Sem orientação individual" tone="information">Conteúdo educativo e institucional não substitui avaliação, protocolo ou responsabilidade profissional.</ComplianceNotice></Container>
    <section className="border-y border-mist bg-white py-16 md:py-24"><Container><SectionTitle description="O fluxo completo de solicitação será implementado na Fase 5. Até lá, o contato é apenas institucional." eyebrow="Próximos passos" title="Conhecer, definir interesse e conversar." /><div className="mt-10"><ProcessSteps items={interestProcess} /></div></Container></section>
    <InstitutionalCta description="Apresente sua área de atuação ou instituição sem inserir informações de pacientes." primaryAction={{ href: '/contato', label: 'Falar com a equipe Galanta' }} secondaryAction={{ href: '/galanta-ortho', label: 'Conhecer a linha' }} title="Solicite uma apresentação profissional da proposta." />
  </>
}
