import { InstitutionalHero } from '@/components/institutional/InstitutionalHero'
import { Card } from '@/components/ui/Card'
import { ComplianceNotice } from '@/components/ui/ComplianceNotice'
import { Container } from '@/components/ui/Container'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { createPageMetadata } from '@/lib/seo/metadata'
import { siteConfig } from '@/lib/site'

export const metadata = createPageMetadata({ title: 'Contato profissional', description: 'Canais profissionais Galanta Medical para apresentação e informações institucionais.', path: '/contato' })

export default function ContactPage() {
  const channels = [
    { label: 'E-mail', value: siteConfig.supportEmail || 'Canal a confirmar' },
    { label: 'WhatsApp', value: siteConfig.supportWhatsApp || 'Canal a confirmar' },
  ]

  return <>
    <InstitutionalHero description="Canal provisório para profissionais, clínicas, hospitais e pontos de atendimento interessados em conhecer a proposta." eyebrow="Galanta Medical · Contato" notice="O formulário completo de solicitação técnica será implementado na Fase 5." secondaryAction={{ href: '/galanta-ortho', label: 'Conhecer a linha' }} title="Fale com a equipe Galanta." />
    <Container className="py-16 md:py-24" size="narrow"><SectionTitle description="Os canais oficiais podem ser configurados por ambiente. Nenhum prazo de retorno está sendo prometido nesta fase." eyebrow="Canais profissionais" title="Contato institucional em configuração." /><div className="mt-10 grid gap-5 sm:grid-cols-2">{channels.map((channel) => <Card className="p-6" key={channel.label} variant="technical"><p className="font-technical text-[10px] font-semibold uppercase tracking-[0.12em] text-cyan">{channel.label}</p><p className="mt-5 break-words text-sm font-semibold text-slate">{channel.value}</p></Card>)}</div><div className="mt-8 grid gap-5"><ComplianceNotice title="Não envie dados de pacientes" tone="restricted">Não inclua nomes, documentos, imagens, diagnósticos ou informações identificáveis de pacientes.</ComplianceNotice><ComplianceNotice title="Contato sem compromisso comercial" tone="information">O contato não constitui pedido, compra, confirmação de amostra, proposta ou reserva de estoque.</ComplianceNotice></div></Container>
  </>
}
