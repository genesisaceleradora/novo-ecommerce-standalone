import { InstitutionalCta } from '@/components/institutional/InstitutionalCta'
import { LineCard } from '@/components/institutional/LineCard'
import { ProcessSteps } from '@/components/institutional/ProcessSteps'
import { CapabilityCard } from '@/components/marketing/CapabilityCard'
import { FAQ } from '@/components/marketing/FAQ'
import { HeroBanner } from '@/components/marketing/HeroBanner'
import { ComplianceNotice } from '@/components/ui/ComplianceNotice'
import { Container } from '@/components/ui/Container'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { conceptualProcess, engineeringCapabilities, interestProcess, platformPillars, productLines, professionalAudiences, professionalFaqs } from '@/data/institutional'
import { createPageMetadata } from '@/lib/seo/metadata'

export const metadata = createPageMetadata({
  title: 'Galanta Medical | Tecnologia aplicada à rotina clínica',
  description: 'Conheça a Galanta Medical e a estrutura Standard + Personal da linha Galanta Ortho para profissionais, clínicas e hospitais.',
  path: '/',
})

export default function HomePage() {
  return (
    <>
      <HeroBanner
        description="Estrutura Standard + Personal desenvolvida com engenharia e manufatura digital para profissionais, clínicas e hospitais."
        eyebrow="Galanta Medical · Portal profissional"
        notice="Conteúdo e especificações em desenvolvimento. Esta apresentação não constitui indicação clínica ou oferta comercial."
        primaryAction={{ label: 'Solicitar apresentação técnica', href: '/contato' }}
        secondaryAction={{ label: 'Conhecer Galanta Ortho', href: '/galanta-ortho' }}
        title="Órteses 3D para a rotina clínica moderna."
      />

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
            <SectionTitle description="Galanta Ortho é a linha inicial da Galanta Medical para o desenvolvimento de soluções Standard e Personal voltadas a profissionais e pontos de atendimento." eyebrow="Arquitetura de marca" title="Engenharia e manufatura digital aplicadas à saúde." />
            <ComplianceNotice title="Escopo em desenvolvimento" tone="validation">Produto, finalidade, materiais, configurações e situação regulatória permanecem em validação. Nenhuma lacuna será preenchida com uma afirmação provável.</ComplianceNotice>
          </div>
        </Container>
      </section>

      <section className="border-y border-mist bg-white py-16 md:py-24">
        <Container>
          <SectionTitle description="Duas estruturas complementares, apresentadas sem preço, disponibilidade ou especificações não confirmadas." eyebrow="Galanta Ortho" title="Standard + Personal." />
          <div className="mt-10 grid gap-5 md:grid-cols-2">{productLines.map((line) => <LineCard key={line.title} {...line} />)}</div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <SectionTitle description="Pilares de plataforma e operação. Eles não representam promessa clínica, disponibilidade imediata ou desempenho de produto." eyebrow="Fundação da linha" title="Disponibilidade, adaptação e personalização." />
          <div className="mt-10 grid gap-5 md:grid-cols-3">{platformPillars.map((pillar, index) => <CapabilityCard index={index + 1} key={pillar.title} {...pillar} />)}</div>
        </Container>
      </section>

      <section className="border-y border-mist bg-white py-16 md:py-24">
        <Container>
          <SectionTitle description="Visão de processo sem temperatura, tempo, indicação ou instrução operacional. Qualquer protocolo futuro dependerá de aprovação aplicável." eyebrow="Como funciona" title="Um processo profissional, apresentado com contexto." />
          <div className="mt-10"><ProcessSteps items={conceptualProcess} /></div>
          <ComplianceNotice className="mt-10" title="Protocolo não publicado" tone="warning">A preparação, adaptação e verificação dependem de orientação profissional e conteúdo técnico ainda em validação.</ComplianceNotice>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <SectionTitle description="Conteúdo voltado a avaliação técnica e diálogo institucional. O portal não estimula autodiagnóstico ou compra sem profissional." eyebrow="Públicos" title="Estrutura para profissionais e pontos de atendimento." />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{professionalAudiences.map((audience, index) => <CapabilityCard href={audience.href} index={index + 1} key={audience.title} label={audience.label} title={audience.title} description={audience.description} />)}</div>
        </Container>
      </section>

      <section className="bg-graphite py-16 text-sterile md:py-24">
        <Container>
          <SectionTitle description="A plataforma será preparada para receber requisitos, versões e documentos aprovados sem transformar capacidade estrutural em promessa de resultado." eyebrow="Clinical Tech Industrial" title="Engenharia, processo e rastreabilidade." tone="dark" />
          <div className="mt-10 grid gap-5 md:grid-cols-3">{engineeringCapabilities.map((capability, index) => <CapabilityCard index={index + 1} key={capability.title} {...capability} />)}</div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <SectionTitle description="A solicitação B2B completa será implementada em uma fase própria. Nesta etapa, o contato profissional permanece como destino provisório." eyebrow="Interesse profissional" title="Da apresentação ao próximo passo." />
          <div className="mt-10"><ProcessSteps items={interestProcess} /></div>
        </Container>
      </section>

      <section className="border-y border-mist bg-white py-16 md:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <SectionTitle description="Conheça a estrutura prevista para apresentação e avaliação de amostras sem pressupor disponibilidade, envio ou uso permitido." eyebrow="Amostras técnicas" title="Avaliação profissional com limites explícitos." />
            <div><ComplianceNotice title="Fluxo demonstrativo" tone="warning">Condições, disponibilidade, finalidade e uso permitido das amostras serão confirmados pela equipe Galanta.</ComplianceNotice><a className="mt-5 inline-block text-sm font-semibold text-cyan" href="/amostras-tecnicas">Conhecer a estrutura de amostras →</a></div>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <SectionTitle eyebrow="Dúvidas frequentes" title="Informação profissional com contexto." />
          <div className="mt-8"><FAQ items={professionalFaqs} /></div>
        </Container>
      </section>

      <InstitutionalCta description="Registre seu interesse em conhecer a proposta. O canal completo de solicitação será disponibilizado na próxima etapa do desenvolvimento." primaryAction={{ href: '/contato', label: 'Solicitar apresentação técnica' }} secondaryAction={{ href: '/galanta-ortho', label: 'Conhecer a linha' }} title="Conheça a proposta Galanta Ortho para o seu ponto de atendimento." />
    </>
  )
}
