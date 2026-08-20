'use client'

import { useEffect, useRef } from 'react'
import { Button } from '@/components/ui/Button'
import { useCart } from '@/hooks/useCart'
import { getCustomizationSummary } from '@/lib/cart'
import { formatPriceInBRL } from '@/lib/formatters'

const focusableSelector = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'

export function CartDrawer() {
  const { closeCart, isOpen, items, removeItem, subtotal, updateQuantity } = useCart()
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const drawerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!isOpen) return

    const originalOverflow = document.body.style.overflow
    const previouslyFocused = document.activeElement instanceof HTMLElement ? document.activeElement : null
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        closeCart()
        return
      }

      if (event.key !== 'Tab' || !drawerRef.current) return
      const focusableElements = Array.from(drawerRef.current.querySelectorAll<HTMLElement>(focusableSelector))
      const firstElement = focusableElements[0]
      const lastElement = focusableElements.at(-1)
      if (!firstElement || !lastElement) return

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault()
        lastElement.focus()
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault()
        firstElement.focus()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener('keydown', handleKeyDown)
      previouslyFocused?.focus()
    }
  }, [closeCart, isOpen])

  if (!isOpen) return null

  return (
    <div aria-labelledby="selection-title" aria-modal="true" className="fixed inset-0 z-50 flex justify-end" role="dialog">
      <button aria-label="Fechar seleção técnica" className="absolute inset-0 bg-galanta-black/65 backdrop-blur-[2px]" onClick={closeCart} type="button" />
      <aside className="relative flex h-full w-full max-w-md flex-col bg-sterile shadow-elevated" ref={drawerRef}>
        <header className="flex items-center justify-between border-b border-mist px-5 py-5 sm:px-6">
          <div>
            <p className="font-technical text-[10px] font-semibold uppercase tracking-[0.14em] text-cyan">Fluxo legado preservado</p>
            <h2 className="mt-1 font-display text-2xl font-semibold tracking-[-0.03em] text-slate" id="selection-title">Seleção demonstrativa</h2>
          </div>
          <button aria-label="Fechar seleção técnica" className="grid size-11 place-items-center rounded-lg border border-mist text-xl text-slate hover:border-cyan/50 hover:text-cyan" onClick={closeCart} ref={closeButtonRef} type="button">×</button>
        </header>

        <div className="flex-1 overflow-y-auto px-5 py-5 sm:px-6">
          {items.length === 0 ? (
            <div className="grid min-h-64 place-items-center text-center">
              <div>
                <p className="font-display text-2xl font-semibold tracking-[-0.03em] text-slate">Nenhum item selecionado.</p>
                <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-steel">O fluxo atual permanece disponível apenas para validação técnica até a migração para solicitação profissional.</p>
                <Button className="mt-6" href="/" onClick={closeCart}>Voltar ao portal</Button>
              </div>
            </div>
          ) : (
            <ul className="divide-y divide-mist">
              {items.map((item) => (
                <li className="py-5" key={item.key}>
                  <div className="flex gap-4">
                    <div aria-hidden="true" className="relative h-20 w-16 shrink-0 overflow-hidden rounded-lg border border-mist bg-graphite"><span className="absolute inset-3 rotate-12 rounded-lg border border-cyan/30" /></div>
                    <div className="min-w-0 flex-1">
                      <div className="flex justify-between gap-3"><h3 className="font-display text-lg font-semibold tracking-[-0.02em] text-slate">{item.product.name}</h3><button className="text-xs font-semibold text-steel underline underline-offset-4 hover:text-clinicalRed" onClick={() => removeItem(item.key)} type="button">Remover</button></div>
                      <p className="mt-1 font-technical text-[10px] font-semibold uppercase tracking-[0.08em] text-steel">{formatPriceInBRL(item.product.price)} · mock legado</p>
                      {getCustomizationSummary(item).length > 0 && <p className="mt-2 text-xs leading-5 text-steel">{getCustomizationSummary(item).join(' · ')}</p>}
                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center rounded-lg border border-mist">
                          <button aria-label={`Diminuir quantidade de ${item.product.name}`} className="grid size-10 place-items-center hover:text-cyan" onClick={() => updateQuantity(item.key, item.quantity - 1)} type="button">−</button>
                          <span aria-label={`Quantidade de ${item.product.name}`} className="min-w-7 text-center text-sm font-semibold">{item.quantity}</span>
                          <button aria-label={`Aumentar quantidade de ${item.product.name}`} className="grid size-10 place-items-center hover:text-cyan" onClick={() => updateQuantity(item.key, item.quantity + 1)} type="button">+</button>
                        </div>
                        <p className="text-sm font-semibold text-slate">{formatPriceInBRL(item.product.price * item.quantity)}</p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <footer className="border-t border-mist bg-white px-5 py-5 sm:px-6">
            <div className="flex items-end justify-between"><span className="text-sm text-steel">Subtotal mockado</span><strong className="font-display text-2xl text-slate">{formatPriceInBRL(subtotal)}</strong></div>
            <p className="mt-2 text-xs leading-5 text-steel">Valores e checkout existem somente para preservar o teste legado e não constituem oferta comercial.</p>
            <Button className="mt-5 w-full" href="/checkout" onClick={closeCart}>Continuar teste legado</Button>
            <Button className="mt-2 w-full" href="/" onClick={closeCart} variant="ghost">Voltar ao portal</Button>
          </footer>
        )}
      </aside>
    </div>
  )
}
