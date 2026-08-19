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

  if (!isHydrated) return <Container className="py-16"><p className="text-sm text-muted">Carregando seu carrinho…</p></Container>
  if (items.length === 0) return <Container className="py-16 md:py-24"><SectionTitle description="Adicione um produto demonstrativo para visualizar seu resumo aqui." eyebrow="Carrinho" title="Seu carrinho está vazio." /><Button className="mt-8" href="/categoria/personalizados">Ver produtos</Button></Container>

  return <Container className="py-10 md:py-16"><SectionTitle description="Revise seus itens e abra o carrinho lateral para ajustar quantidades ou remover produtos." eyebrow="Carrinho" title="Seu resumo de escolhas." /><div className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.38fr]"><ul className="divide-y divide-line rounded-2xl border border-line bg-cream px-5 sm:px-6">{items.map((item) => <li className="flex justify-between gap-5 py-5" key={item.key}><div><h2 className="font-display text-2xl font-semibold text-navy">{item.product.name}</h2><p className="mt-1 text-sm text-muted">Quantidade: {item.quantity}</p>{getCustomizationSummary(item).length > 0 && <p className="mt-2 text-xs leading-5 text-muted">{getCustomizationSummary(item).join(' · ')}</p>}</div><strong className="shrink-0 text-sm text-navy">{formatPriceInBRL(item.product.price * item.quantity)}</strong></li>)}</ul><aside className="h-fit rounded-2xl border border-line bg-ivory p-5"><p className="text-sm text-muted">Subtotal</p><p className="mt-2 font-display text-4xl font-semibold text-navy">{formatPriceInBRL(subtotal)}</p><Button className="mt-6 w-full" onClick={openCart}>Editar carrinho</Button><Link className="mt-3 flex min-h-12 items-center justify-center rounded-full border border-navy/30 px-5 text-sm font-semibold text-navy hover:bg-navy/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold" href="/checkout">Ir para checkout</Link></aside></div></Container>
}
