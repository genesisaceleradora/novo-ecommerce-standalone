'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { Button } from '@/components/ui/Button'
import { useCart } from '@/hooks/useCart'
import { getCustomizationSummary } from '@/lib/cart'
import { formatPriceInBRL } from '@/lib/formatters'

export function CartDrawer() {
  const { closeCart, isOpen, items, removeItem, subtotal, updateQuantity } = useCart()
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!isOpen) return
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') closeCart()
    }
    window.addEventListener('keydown', handleEscape)
    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener('keydown', handleEscape)
    }
  }, [closeCart, isOpen])

  if (!isOpen) return null

  return (
    <div aria-labelledby="cart-title" aria-modal="true" className="fixed inset-0 z-50 flex justify-end" role="dialog">
      <button aria-label="Fechar carrinho" className="absolute inset-0 bg-ink/40 backdrop-blur-[2px]" onClick={closeCart} type="button" />
      <aside className="relative flex h-full w-full max-w-md flex-col bg-cream shadow-2xl">
        <header className="flex items-center justify-between border-b border-line px-5 py-5 sm:px-6">
          <div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-dark">Seu carrinho</p><h2 className="mt-1 font-display text-3xl font-semibold text-navy" id="cart-title">Escolhas com significado</h2></div>
          <button aria-label="Fechar carrinho" className="grid h-10 w-10 place-items-center rounded-full border border-line text-xl text-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold" onClick={closeCart} ref={closeButtonRef} type="button">×</button>
        </header>
        <div className="flex-1 overflow-y-auto px-5 py-5 sm:px-6">
          {items.length === 0 ? (
            <div className="grid min-h-64 place-items-center text-center"><div><p className="font-display text-3xl font-semibold text-navy">Seu carrinho está vazio.</p><p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-muted">Encontre um presente demonstrativo para começar a montar sua seleção.</p><Button className="mt-6" href="/" onClick={closeCart}>Continuar comprando</Button></div></div>
          ) : (
            <ul className="divide-y divide-line">
              {items.map((item) => (
                <li className="py-5" key={item.key}>
                  <div className="flex gap-4"><div aria-hidden="true" className="h-20 w-16 shrink-0 rounded-xl bg-[linear-gradient(135deg,#e8dfd2,#b8a995)]" /><div className="min-w-0 flex-1"><div className="flex justify-between gap-3"><h3 className="font-display text-xl font-semibold text-navy">{item.product.name}</h3><button className="text-xs font-semibold text-muted underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold" onClick={() => removeItem(item.key)} type="button">Remover</button></div><p className="mt-1 text-sm font-semibold text-navy">{formatPriceInBRL(item.product.price)}</p>{getCustomizationSummary(item).length > 0 && <p className="mt-2 text-xs leading-5 text-muted">{getCustomizationSummary(item).join(' · ')}</p>}<div className="mt-4 flex items-center justify-between"><div className="flex items-center rounded-full border border-line"><button aria-label={`Diminuir quantidade de ${item.product.name}`} className="grid h-9 w-9 place-items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold" onClick={() => updateQuantity(item.key, item.quantity - 1)} type="button">−</button><span aria-label={`Quantidade de ${item.product.name}`} className="min-w-7 text-center text-sm font-semibold">{item.quantity}</span><button aria-label={`Aumentar quantidade de ${item.product.name}`} className="grid h-9 w-9 place-items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold" onClick={() => updateQuantity(item.key, item.quantity + 1)} type="button">+</button></div><p className="text-sm font-bold text-navy">{formatPriceInBRL(item.product.price * item.quantity)}</p></div></div></div>
                </li>
              ))}
            </ul>
          )}
        </div>
        {items.length > 0 && <footer className="border-t border-line bg-ivory px-5 py-5 sm:px-6"><div className="flex items-end justify-between"><span className="text-sm text-muted">Subtotal</span><strong className="font-display text-3xl text-navy">{formatPriceInBRL(subtotal)}</strong></div><p className="mt-2 text-xs text-muted">Frete e descontos serão calculados no checkout.</p><Link className="mt-5 flex min-h-12 items-center justify-center rounded-full bg-gold px-6 text-sm font-semibold text-ink hover:bg-[#e5c581] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold" href="/checkout" onClick={closeCart}>Ir para checkout</Link><Button className="mt-2 w-full" href="/" onClick={closeCart} variant="ghost">Continuar comprando</Button></footer>}
      </aside>
    </div>
  )
}
