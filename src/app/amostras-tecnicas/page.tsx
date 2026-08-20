import { InstitutionalCta } from '@/components/institutional/InstitutionalCta'
import { InstitutionalHero } from '@/components/institutional/InstitutionalHero'
import { StatusList } from '@/components/institutional/StatusList'
import { CapabilityCard } from '@/components/marketing/CapabilityCard'
import { ComplianceNotice } from '@/components/ui/ComplianceNotice'
import { Container } from '@/components/ui/Container'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { createPageMetadata } from '@/lib/seo/metadata'

export const metadata = createPageMetadata({ title: 'Amostras técnicas', description: 'Estrutura demonstrativa para futuro interesse profissional em amostras técnicas Galanta Ortho.', path: '/amostras-tecnicas' })

const sampleInterests = [
  { title: 'Apresentação técnica', description: 'Interesse em conhecer a arquitetura da linha e seus próximos marcos.' },
  { title: 'Avaliação de amostra', description: 'Registro futuro de interesse, sem pressupor disponibilidade, envio ou uso permitido.' },
  { title: 'Planejamento de estoque', description: 'Conversa comercial futura, condicionada à definição de produto e regras de operação.' },
]

const sampleStatus = [
  { label: 'Programa', value: 'Estrutura demonstrativa', status: 'development' as const },
  { label: 'Disponibilidade', value: 'A confirmar', status: 'pending' as const },
  { label: 'Condições de envio', value: 'A confirmar', status: 'pending' as const },
  { label: 'Uso permitido', value: 'Em validação técnica e regulatória', status: 'validation' as const },
]

export default function TechnicalSamplesPage() {
  return <>
    <InstitutionalHero description="Estrutura prevista para registrar interesse profissional em apresentação, avaliação de amostra ou planejamento de estoque." eyebrow="Galanta Ortho · Amostras" notice="Amostra técnica não significa disponibilidade, envio, regularização ou autorização de uso clínico." primaryAction={{ href: '/contato', label: 'Registrar interesse' }} secondaryAction={{ href: '/regulatorio-e-seguranca', label: 'Ver avisos' }} title="Amostras técnicas com condições transparentes." />
    <Container className="py-16 md:py-24"><SectionTitle description="Os tipos abaixo representam interesses possíveis para o fluxo B2B futuro. Nenhum deles inicia uma solicitação nesta fase." eyebrow="Interesses previstos" title="Apresentação, avaliação e planejamento." /><div className="mt-10 grid gap-5 md:grid-cols-3">{sampleInterests.map((item, index) => <CapabilityCard index={index + 1} key={item.title} {...item} />)}</div></Container>
    <section className="border-y border-mist bg-white py-16 md:py-24"><Container><div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]"><div><SectionTitle description="A interface mantém cada condição pendente explícita para não transformar intenção em promessa operacional." eyebrow="Estado atual" title="Programa ainda não lançado." /><ComplianceNotice className="mt-8" title="Fluxo demonstrativo" tone="warning">Condições, disponibilidade, finalidade e uso permitido das amostras serão confirmados pela equipe Galanta.</ComplianceNotice></div><StatusList items={sampleStatus} /></div></Container></section>
    <InstitutionalCta description="O contato não confirma envio ou disponibilidade. Não envie informações identificáveis de pacientes." primaryAction={{ href: '/contato', label: 'Falar com a equipe Galanta' }} secondaryAction={{ href: '/galanta-ortho', label: 'Conhecer a linha' }} title="Registre interesse profissional na estrutura de amostras." />
  </>
}
