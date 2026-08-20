'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { BrandLockup } from '@/components/brand/BrandLockup'
import { Container } from '@/components/ui/Container'
import { primaryNavigation } from '@/data/navigation'

export function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') setIsMenuOpen(false)
    }

    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [])

  function closeMenu() {
    setIsMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-20 border-b border-mist/80 bg-sterile/95 backdrop-blur-xl">
      <Container className="flex min-h-[72px] items-center justify-between gap-4">
        <button aria-controls="mobile-navigation" aria-expanded={isMenuOpen} aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'} className="grid size-11 place-items-center rounded-lg text-slate xl:hidden" onClick={() => setIsMenuOpen((current) => !current)} type="button">
          <span aria-hidden="true" className="grid gap-1.5"><span className="block h-px w-5 bg-current" /><span className="block h-px w-5 bg-current" /><span className="block h-px w-5 bg-current" /></span>
        </button>

        <BrandLockup compact />

        <nav aria-label="Navegação principal" className="hidden items-center gap-5 text-sm font-medium text-slate xl:flex">
          {primaryNavigation.map((item) => {
            const isActive = pathname === item.href
            return <Link aria-current={isActive ? 'page' : undefined} className="rounded-sm border-b border-transparent py-2 hover:text-cyan aria-[current=page]:border-cyan aria-[current=page]:text-cyan" href={item.href} key={item.href}>{item.label}</Link>
          })}
        </nav>

        <Link className="inline-flex min-h-11 items-center justify-center rounded-lg bg-cyan px-3 text-xs font-semibold text-galanta-black hover:bg-aqua sm:px-4" href="/contato"><span className="sm:hidden">Contato</span><span className="hidden sm:inline">Solicitar apresentação</span></Link>
      </Container>

      {isMenuOpen && (
        <div className="border-t border-mist bg-sterile xl:hidden">
          <Container>
            <nav aria-label="Navegação mobile" className="grid py-3 text-sm font-semibold text-slate" id="mobile-navigation">
              {primaryNavigation.map((item) => <Link aria-current={pathname === item.href ? 'page' : undefined} className="rounded-lg px-3 py-3 hover:bg-mist/30 aria-[current=page]:bg-cyan/10 aria-[current=page]:text-cyan" href={item.href} key={item.href} onClick={closeMenu}>{item.label}</Link>)}
              <Link className="mt-2 rounded-lg border border-cyan/45 px-3 py-3 text-cyan" href="/contato" onClick={closeMenu}>Contato profissional</Link>
            </nav>
          </Container>
        </div>
      )}
    </header>
  )
}
