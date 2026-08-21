'use client'

import { useEffect, useRef } from 'react'
import { RequestItemDetails } from '@/components/technical-request/RequestItemDetails'
import { Button } from '@/components/ui/Button'
import { useTechnicalRequest } from '@/hooks/useTechnicalRequest'

const focusableSelector = 'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])'

export function TechnicalRequestDrawer() {
  const { closeRequest, isOpen, items, removeItem, updateQuantity } = useTechnicalRequest()
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
        closeRequest()
        return
      }
      if (event.key !== 'Tab' || !drawerRef.current) return
      const focusable = Array.from(drawerRef.current.querySelectorAll<HTMLElement>(focusableSelector))
      const first = focusable[0]
      const last = focusable.at(-1)
      if (!first || !last) return
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener('keydown', handleKeyDown)
      previouslyFocused?.focus()
    }
  }, [closeRequest, isOpen])

  if (!isOpen) return null

  return (
    <div aria-labelledby="technical-request-drawer-title" aria-modal="true" className="fixed inset-0 z-50 flex justify-end" role="dialog">
      <button aria-label="Fechar seleção técnica" className="absolute inset-0 bg-galanta-black/65 backdrop-blur-[2px]" onClick={closeRequest} type="button" />
      <aside className="relative flex h-full w-full max-w-md flex-col bg-sterile shadow-elevated" ref={drawerRef}>
        <header className="flex items-center justify-between border-b border-mist px-5 py-5 sm:px-6">
          <div><p className="font-technical text-[10px] font-semibold uppercase tracking-[0.14em] text-cyan">Solicitação profissional</p><h2 className="mt-1 font-display text-2xl font-semibold text-slate" id="technical-request-drawer-title">Seleção técnica</h2></div>
          <button aria-label="Fechar seleção técnica" className="grid size-11 place-items-center rounded-lg border border-mist text-xl text-slate hover:border-cyan/50 hover:text-cyan" onClick={closeRequest} ref={closeButtonRef} type="button">×</button>
        </header>

        <div className="flex-1 overflow-y-auto px-5 py-5 sm:px-6">
          {items.length === 0 ? <div className="grid min-h-64 place-items-center text-center"><div><p className="font-display text-2xl font-semibold text-slate">Nenhum item selecionado.</p><p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-steel">Consulte o catálogo e registre os produtos ou interesses que deseja avaliar com a equipe Galanta.</p><Button className="mt-6" href="/produtos" onClick={closeRequest}>Consultar soluções</Button></div></div> : <ul className="divide-y divide-mist">{items.map((item) => <li className="py-5" key={item.key}><div className="flex items-start justify-between gap-4"><RequestItemDetails item={item} /><button className="shrink-0 text-xs font-semibold text-steel underline underline-offset-4 hover:text-clinicalRed" onClick={() => removeItem(item.key)} type="button">Remover</button></div><div className="mt-4 flex items-center justify-between"><div className="flex items-center rounded-lg border border-mist"><button aria-label={`Diminuir quantidade de referência para ${item.productName}`} className="grid size-10 place-items-center hover:text-cyan" onClick={() => updateQuantity(item.key, item.quantity - 1)} type="button">−</button><span aria-label={`Quantidade de referência para ${item.productName}`} className="min-w-8 text-center text-sm font-semibold">{item.quantity}</span><button aria-label={`Aumentar quantidade de referência para ${item.productName}`} className="grid size-10 place-items-center hover:text-cyan" onClick={() => updateQuantity(item.key, item.quantity + 1)} type="button">+</button></div><span className="font-technical text-[9px] uppercase tracking-[0.08em] text-steel">Referência, não pedido</span></div></li>)}</ul>}
        </div>

        {items.length > 0 && <footer className="border-t border-mist bg-white px-5 py-5 sm:px-6"><p className="text-xs leading-5 text-steel">Esta seleção registra interesse técnico. Não reserva estoque, confirma amostra ou inicia compra e pagamento.</p><Button className="mt-5 w-full" href="/solicitacao" onClick={closeRequest}>Revisar solicitação</Button><Button className="mt-2 w-full" href="/produtos" onClick={closeRequest} variant="ghost">Continuar consultando</Button></footer>}
      </aside>
    </div>
  )
}
