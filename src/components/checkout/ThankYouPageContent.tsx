'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Container } from '@/components/ui/Container'
import { formatPriceInBRL } from '@/lib/formatters'
import type { MockOrderConfirmation } from '@/types/checkout'

export function ThankYouPageContent() {
  const [order, setOrder] = useState<MockOrderConfirmation | null>(null)
  useEffect(() => {
    try {
      const storedOrder = window.sessionStorage.getItem('ecommerce-standalone-last-order')
      if (storedOrder) setOrder(JSON.parse(storedOrder) as MockOrderConfirmation)
    } catch { /* A mensagem padrão cobre dados indisponíveis. */ }
  }, [])

  return <Container className="py-16 md:py-24"><div className="mx-auto max-w-2xl rounded-3xl bg-navy px-7 py-12 text-center text-cream md:px-16 md:py-16"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Pedido demonstrativo</p><h1 className="mt-4 font-display text-5xl font-semibold">Obrigado pelo seu pedido.</h1>{order ? <div className="mt-6 space-y-2 text-sm text-cream/75"><p>Número: <strong className="text-cream">{order.id}</strong></p><p>{order.itemCount} item(ns) · {formatPriceInBRL(order.subtotal)}</p><p>O pagamento ainda não foi criado. Esta confirmação é apenas uma simulação.</p></div> : <p className="mx-auto mt-6 max-w-md text-sm leading-6 text-cream/75">Nenhum pedido demonstrativo foi encontrado nesta sessão. Você pode voltar ao catálogo para iniciar uma nova simulação.</p>}<Link className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-gold px-6 text-sm font-semibold text-ink" href="/">Voltar para a loja</Link></div></Container>
}
