import type { ReactNode } from 'react'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'

type PlaceholderPageProps = { eyebrow: string; title: string; description: string; children?: ReactNode }

export function PlaceholderPage({ eyebrow, title, description, children }: PlaceholderPageProps) {
  return <Container className="py-14 md:py-24"><div className="mx-auto max-w-3xl"><p className="text-xs font-bold uppercase tracking-[0.16em] text-gold-dark">{eyebrow}</p><h1 className="mt-4 font-display text-5xl font-semibold leading-tight text-navy">{title}</h1><p className="mt-5 text-base leading-7 text-muted">{description}</p>{children}<div className="mt-10 rounded-2xl border border-gold/40 bg-ivory p-5 text-sm leading-6 text-muted"><strong className="text-navy">Conteúdo provisório.</strong> Esta página existe para validar a navegação do MVP. As informações oficiais precisam ser revisadas antes da publicação comercial.</div><Button className="mt-8" href="/">Voltar para a loja</Button></div></Container>
}
