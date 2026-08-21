'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { useCart } from '@/hooks/useCart'
import { getCustomizationSummary } from '@/lib/cart'
import { formatPriceInBRL } from '@/lib/formatters'

export function CartPageContent() {
  const { isHydrated, items, openCart, subtotal } = useCart()

  if (!isHydrated) return <Container className="py-16"><p className="text-sm text-steel">Carregando seu carrinho…</p></Container>
  if (items.length === 0) return <Container className="py-16 md:py-24"><SectionTitle description="O catálogo Galanta não envia itens para este fluxo. A seleção técnica será implementada na Fase 5." eyebrow="Fluxo legado" title="Carrinho demonstrativo sem itens." /><Button className="mt-8" href="/produtos">Consultar catálogo profissional</Button></Container>

  return <Container className="py-10 md:py-16"><SectionTitle description="Revise seus itens e abra o carrinho lateral para ajustar quantidades ou remover produtos." eyebrow="Carrinho" title="Seu resumo de escolhas." /><div className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.38fr]"><ul className="divide-y divide-mist rounded-2xl border border-mist bg-white px-5 sm:px-6">{items.map((item) => <li className="flex justify-between gap-5 py-5" key={item.key}><div><h2 className="font-display text-2xl font-semibold text-slate">{item.product.name}</h2><p className="mt-1 text-sm text-steel">Quantidade: {item.quantity}</p>{getCustomizationSummary(item).length > 0 && <p className="mt-2 text-xs leading-5 text-steel">{getCustomizationSummary(item).join(' · ')}</p>}</div><strong className="shrink-0 text-sm text-slate">{formatPriceInBRL(item.product.price * item.quantity)}</strong></li>)}</ul><aside className="h-fit rounded-2xl border border-mist bg-sterile p-5"><p className="text-sm text-steel">Subtotal</p><p className="mt-2 font-display text-4xl font-semibold text-slate">{formatPriceInBRL(subtotal)}</p><Button className="mt-6 w-full" onClick={openCart}>Editar carrinho</Button><Link className="mt-3 flex min-h-12 items-center justify-center rounded-full border border-slate/30 px-5 text-sm font-semibold text-slate hover:bg-graphite/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan" href="/checkout">Ir para checkout</Link></aside></div></Container>
}
