import { CapabilityCard } from '@/components/marketing/CapabilityCard'
import { FAQ } from '@/components/marketing/FAQ'
import { HeroBanner } from '@/components/marketing/HeroBanner'
import { Button } from '@/components/ui/Button'
import { ComplianceNotice } from '@/components/ui/ComplianceNotice'
import { Container } from '@/components/ui/Container'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { capabilities, faqs, processSteps } from '@/data/home'
import { createPageMetadata } from '@/lib/seo/metadata'

export const metadata = createPageMetadata({
  title: 'Galanta Medical | Tecnologia aplicada à saúde',
  description: 'Portal profissional Galanta Medical com Galanta Ortho como linha inicial em desenvolvimento.',
  path: '/',
})

export default function HomePage() {
  return (
    <>
      <HeroBanner
        description="Portal profissional preparado para apresentar a Galanta Ortho, organizar informações aprovadas e qualificar interesse técnico de profissionais, clínicas e hospitais."
        eyebrow="Galanta Medical · Portal profissional"
        primaryAction={{ label: 'Conhecer a estrutura', href: '#solucoes' }}
        secondaryAction={{ label: 'Falar com a equipe', href: '/contato' }}
        title="Tecnologia, engenharia e manufatura digital aplicada à saúde."
      />

      <Container className="py-16 md:py-24" id="solucoes">
        <SectionTitle description="A linha inicial será organizada em duas arquiteturas configuráveis. Produtos, aplicações e especificações permanecem em validação." eyebrow="Galanta Ortho" title="Estrutura Standard + Personal." />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <CapabilityCard description="Soluções padronizadas por modelo, tamanho e lado quando essas configurações forem tecnicamente confirmadas." index={1} label="Linha" title="Standard" />
          <CapabilityCard description="Soluções para casos selecionados, condicionadas às informações e avaliações profissionais aplicáveis." index={2} label="Linha" title="Personal" />
        </div>
      </Container>

      <section className="border-y border-mist bg-white py-16 md:py-24">
        <Container>
          <SectionTitle description="Pilares de plataforma e operação. Não representam promessa clínica, disponibilidade ou resultado de produto." eyebrow="Fundação da linha" title="Disponibilidade, adaptação e personalização." />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {capabilities.map((capability, index) => <CapabilityCard index={index + 1} key={capability.title} {...capability} />)}
          </div>
        </Container>
      </section>

      <Container className="py-16 md:py-24" id="como-funciona">
        <SectionTitle description="O fluxo comercial definitivo será detalhado após as decisões de produto, amostras e atendimento." eyebrow="Fluxo em desenvolvimento" title="Uma jornada profissional, clara e verificável." />
        <ol className="mt-10 grid gap-8 md:grid-cols-3">
          {processSteps.map((step, index) => (
            <li className="border-t border-cyan/45 pt-5" key={step.title}>
              <span className="font-technical text-[11px] font-semibold text-cyan">{String(index + 1).padStart(2, '0')}</span>
              <h3 className="mt-4 font-display text-2xl font-semibold tracking-[-0.03em] text-slate">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-steel">{step.description}</p>
            </li>
          ))}
        </ol>
      </Container>

      <section className="bg-graphite py-16 text-sterile md:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <SectionTitle description="A plataforma evolui sem preencher lacunas técnicas com afirmações prováveis. Cada informação será publicada conforme sua fonte e aprovação." eyebrow="Desenvolvimento responsável" title="Clareza antes da complexidade." tone="dark" />
            <ComplianceNotice title="Informação em validação" tone="warning">
              Conteúdo de apresentação em desenvolvimento. Informações técnicas e regulatórias serão publicadas após validação e aprovação aplicáveis.
            </ComplianceNotice>
          </div>
        </Container>
      </section>

      <Container className="py-16 md:py-24">
        <SectionTitle eyebrow="Dúvidas frequentes" title="Informação profissional com contexto." />
        <div className="mt-8"><FAQ items={faqs} /></div>
      </Container>

      <Container className="pb-16 md:pb-24">
        <div className="rounded-2xl border border-cyan/25 bg-galanta-black px-6 py-12 text-center text-sterile sm:px-12 md:py-16">
          <p className="font-technical text-[11px] font-semibold uppercase tracking-[0.14em] text-aqua">Contato profissional</p>
          <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">Converse com a equipe Galanta.</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-mist/70">O canal definitivo e o prazo de retorno ainda serão confirmados. Nenhuma informação de paciente deve ser enviada.</p>
          <Button className="mt-7" href="/contato">Acessar contato</Button>
        </div>
      </Container>
    </>
  )
}
