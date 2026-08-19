'use client'

import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { useCart } from '@/hooks/useCart'

const navigation = [
  { href: '/categoria/personalizados', label: 'Coleções' },
  { href: '#destaques', label: 'Destaques' },
  { href: '#como-funciona', label: 'Como funciona' },
]

export function Header() {
  const { itemCount, openCart } = useCart()
  return (
    <header className="sticky top-0 z-20 border-b border-line/80 bg-cream/95 backdrop-blur">
      <Container className="flex h-[68px] items-center justify-between">
        <button aria-label="Abrir menu" className="rounded-full p-2 text-ink md:hidden" type="button">
          <span aria-hidden="true" className="block h-px w-5 bg-current" />
          <span aria-hidden="true" className="mt-1 block h-px w-5 bg-current" />
        </button>
        <Link className="font-display text-2xl font-semibold tracking-[0.08em] text-navy" href="/">A DEFINIR</Link>
        <nav aria-label="Navegação principal" className="hidden items-center gap-8 text-sm font-medium md:flex">
          {navigation.map((item) => <Link className="hover:text-gold-dark" href={item.href} key={item.href}>{item.label}</Link>)}
        </nav>
        <button aria-label={`Ver carrinho com ${itemCount} item(ns)`} className="flex items-center gap-2 text-sm font-semibold hover:text-gold-dark" onClick={openCart} type="button">
          <span aria-hidden="true" className="relative grid h-8 w-8 place-items-center rounded-full border border-navy/20">◌{itemCount > 0 && <span className="absolute -right-2 -top-2 grid min-h-5 min-w-5 place-items-center rounded-full bg-gold px-1 text-[10px] font-bold text-ink">{itemCount}</span>}</span>
          <span className="hidden sm:inline">Carrinho</span>
        </button>
      </Container>
    </header>
  )
}
