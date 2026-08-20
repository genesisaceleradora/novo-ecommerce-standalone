'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Container } from '@/components/ui/Container'
import { useCart } from '@/hooks/useCart'

const navigation = [
  { href: '/', label: 'Início' },
  { href: '/#solucoes', label: 'Soluções' },
  { href: '/#como-funciona', label: 'Como funciona' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contato', label: 'Contato' },
] as const

export function Header() {
  const { itemCount, openCart } = useCart()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function closeMenu() {
    setIsMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-20 border-b border-mist/80 bg-sterile/95 backdrop-blur-xl">
      <Container className="flex min-h-[72px] items-center justify-between gap-4">
        <button aria-controls="mobile-navigation" aria-expanded={isMenuOpen} aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'} className="grid size-11 place-items-center rounded-lg text-slate md:hidden" onClick={() => setIsMenuOpen((current) => !current)} type="button">
          <span aria-hidden="true" className="grid gap-1.5">
            <span className="block h-px w-5 bg-current" />
            <span className="block h-px w-5 bg-current" />
            <span className="block h-px w-5 bg-current" />
          </span>
        </button>

        <Link aria-label="Galanta Medical — página inicial" className="group flex items-center gap-3" href="/">
          <span aria-hidden="true" className="relative grid size-9 place-items-center rounded-lg border border-cyan/40 bg-graphite">
            <span className="size-3 rotate-45 border border-aqua" />
          </span>
          <span className="leading-none">
            <span className="block font-display text-lg font-semibold tracking-[-0.03em] text-slate sm:text-xl">Galanta Medical</span>
            <span className="mt-1 block font-technical text-[9px] font-medium uppercase tracking-[0.16em] text-steel">Galanta Ortho</span>
          </span>
        </Link>

        <nav aria-label="Navegação principal" className="hidden items-center gap-6 text-sm font-medium text-slate lg:flex">
          {navigation.map((item) => <Link className="rounded-sm py-2 hover:text-cyan" href={item.href} key={item.href}>{item.label}</Link>)}
        </nav>

        <button aria-label={`Abrir seleção técnica com ${itemCount} item(ns)`} className="flex min-h-11 items-center gap-2 rounded-lg border border-mist bg-white px-3 text-sm font-semibold text-slate hover:border-cyan/60 hover:text-cyan" onClick={openCart} type="button">
          <span aria-hidden="true" className="relative grid size-6 place-items-center font-technical text-xs">
            +
            {itemCount > 0 && <span className="absolute -right-2 -top-2 grid min-h-5 min-w-5 place-items-center rounded-full bg-cyan px-1 font-technical text-[9px] font-semibold text-galanta-black">{itemCount}</span>}
          </span>
          <span className="hidden sm:inline">Seleção</span>
        </button>
      </Container>

      {isMenuOpen && (
        <div className="border-t border-mist bg-sterile lg:hidden">
          <Container>
            <nav aria-label="Navegação mobile" className="grid py-3 text-sm font-semibold text-slate" id="mobile-navigation">
              {navigation.map((item) => <Link className="rounded-lg px-3 py-3 hover:bg-mist/30" href={item.href} key={item.href} onClick={closeMenu}>{item.label}</Link>)}
            </nav>
          </Container>
        </div>
      )}
    </header>
  )
}
