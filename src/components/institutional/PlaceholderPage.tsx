import type { ReactNode } from 'react'
import { Button } from '@/components/ui/Button'
import { ComplianceNotice } from '@/components/ui/ComplianceNotice'
import { Container } from '@/components/ui/Container'

type PlaceholderPageProps = { children?: ReactNode; description: string; eyebrow: string; title: string }

export function PlaceholderPage({ children, description, eyebrow, title }: PlaceholderPageProps) {
  return (
    <Container className="py-14 md:py-24" size="narrow">
      <p className="font-technical text-[11px] font-semibold uppercase tracking-[0.14em] text-cyan">{eyebrow}</p>
      <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-slate sm:text-5xl">{title}</h1>
      <p className="mt-5 text-base leading-7 text-steel">{description}</p>
      {children}
      <ComplianceNotice className="mt-10" title="Conteúdo em desenvolvimento" tone="validation">Esta página preserva a navegação do MVP. Informações oficiais serão publicadas somente após revisão e aprovação aplicáveis.</ComplianceNotice>
      <Button className="mt-8" href="/">Voltar ao portal</Button>
    </Container>
  )
}
