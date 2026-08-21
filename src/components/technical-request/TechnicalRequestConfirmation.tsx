'use client'

import { useEffect, useState } from 'react'
import { RequestItemDetails } from '@/components/technical-request/RequestItemDetails'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { requestTypeLabels } from '@/data/catalog'
import { readTechnicalRequestConfirmation } from '@/lib/technical-request/storage'
import type { MockTechnicalRequestConfirmation } from '@/types/technical-request'

export function TechnicalRequestConfirmation() {
  const [confirmation, setConfirmation] = useState<MockTechnicalRequestConfirmation | null>(null)
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    setConfirmation(readTechnicalRequestConfirmation())
    setIsHydrated(true)
  }, [])

  if (!isHydrated) return <Container className="py-16"><p aria-live="polite" className="text-sm text-steel">Carregando confirmação…</p></Container>

  return (
    <Container className="py-12 md:py-20">
      <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-cyan/25 bg-white shadow-surface">
        <div className="bg-galanta-black px-6 py-10 text-sterile sm:px-10"><p className="font-technical text-[10px] font-semibold uppercase tracking-[0.14em] text-aqua">Solicitação técnica demonstrativa</p><h1 className="mt-3 font-display text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Interesse registrado.</h1><p className="mt-5 max-w-2xl text-sm leading-6 text-mist/75">Nenhuma compra, cobrança, reserva, entrega ou confirmação de disponibilidade foi realizada.</p></div>
        <div className="px-6 py-8 sm:px-10 sm:py-10">
          {confirmation ? <><dl className="grid gap-5 rounded-xl border border-mist bg-sterile p-5 sm:grid-cols-2"><div><dt className="font-technical text-[9px] font-semibold uppercase tracking-[0.1em] text-steel">Identificador demonstrativo</dt><dd className="mt-2 font-semibold text-slate">{confirmation.id}</dd></div><div><dt className="font-technical text-[9px] font-semibold uppercase tracking-[0.1em] text-steel">Interesse principal</dt><dd className="mt-2 font-semibold text-slate">{requestTypeLabels[confirmation.primaryInterest]}</dd></div></dl><section className="mt-8"><h2 className="font-display text-2xl font-semibold text-slate">Itens selecionados</h2><ul className="mt-4 divide-y divide-mist rounded-xl border border-mist px-5">{confirmation.items.map((item, index) => <li className="py-5" key={`${item.productId}-${item.requestType}-${index}`}><RequestItemDetails item={item} /></li>)}</ul></section></> : <div className="rounded-xl border border-alertAmber/35 bg-alertAmber/10 p-5"><h2 className="font-display text-2xl font-semibold text-slate">Confirmação não encontrada nesta sessão.</h2><p className="mt-3 text-sm leading-6 text-steel">A confirmação fica disponível somente nesta sessão do navegador. Inicie uma nova solicitação pelo catálogo quando necessário.</p></div>}

          <div className="mt-8 rounded-xl border border-mist p-5"><h2 className="font-display text-2xl font-semibold text-slate">O que acontece agora?</h2><p className="mt-3 text-sm leading-6 text-steel">No fluxo real futuro, a equipe Galanta qualificará o interesse e confirmará disponibilidade, condições e próximos passos aplicáveis. Nenhum prazo de retorno está prometido enquanto o processo comercial permanece em definição.</p></div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row"><Button href="/produtos">Voltar ao catálogo</Button><Button href="/" variant="secondary">Ir para o início</Button></div>
        </div>
      </div>
    </Container>
  )
}
