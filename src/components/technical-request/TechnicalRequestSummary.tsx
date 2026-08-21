'use client'

import { RequestItemDetails } from '@/components/technical-request/RequestItemDetails'
import { Button } from '@/components/ui/Button'
import { ComplianceNotice } from '@/components/ui/ComplianceNotice'
import { Container } from '@/components/ui/Container'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { useTechnicalRequest } from '@/hooks/useTechnicalRequest'

export function TechnicalRequestSummary() {
  const { isHydrated, items, removeItem, updateQuantity } = useTechnicalRequest()

  if (!isHydrated) return <Container className="py-16"><p aria-live="polite" className="text-sm text-steel">Carregando sua seleção técnica…</p></Container>

  if (items.length === 0) return <Container className="py-16 md:py-24"><SectionTitle description="Consulte o catálogo Galanta Ortho e adicione os produtos ou interesses que deseja avaliar profissionalmente." eyebrow="Solicitação técnica" title="Sua seleção está vazia." /><ComplianceNotice className="mt-8 max-w-2xl" title="Este fluxo não é uma compra" tone="validation">Nenhuma reserva, amostra, disponibilidade ou pagamento é iniciado ao selecionar um produto.</ComplianceNotice><Button className="mt-8" href="/produtos">Consultar soluções</Button></Container>

  return (
    <Container className="py-10 md:py-16">
      <SectionTitle description="Confirme os produtos, configurações demonstrativas e tipos de interesse antes de informar seus dados profissionais." eyebrow="Etapa 1 de 2" title="Revise sua seleção técnica." />
      <ComplianceNotice className="mt-8" title="Quantidade de referência" tone="warning">A quantidade serve para contextualizar interesse ou planejamento. Ela não representa estoque, reserva, pedido ou compromisso comercial.</ComplianceNotice>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_0.38fr]">
        <ul className="divide-y divide-mist rounded-2xl border border-mist bg-white px-5 sm:px-6">{items.map((item) => <li className="py-6" key={item.key}><div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between"><RequestItemDetails item={item} showQuantity={false} /><button className="w-fit text-xs font-semibold text-steel underline underline-offset-4 hover:text-clinicalRed" onClick={() => removeItem(item.key)} type="button">Remover seleção</button></div><div className="mt-5 flex flex-wrap items-center justify-between gap-4 border-t border-mist pt-4"><label className="text-xs font-semibold text-slate" htmlFor={`quantity-${item.key}`}>Quantidade de referência</label><div className="flex items-center rounded-lg border border-mist"><button aria-label={`Diminuir quantidade de referência para ${item.productName}`} className="grid size-11 place-items-center hover:text-cyan" onClick={() => updateQuantity(item.key, item.quantity - 1)} type="button">−</button><input aria-label={`Quantidade de referência para ${item.productName}`} className="h-11 w-14 border-x border-mist bg-white text-center text-sm font-semibold outline-none" id={`quantity-${item.key}`} max={999} min={1} onChange={(event) => updateQuantity(item.key, Number(event.target.value) || 1)} type="number" value={item.quantity} /><button aria-label={`Aumentar quantidade de referência para ${item.productName}`} className="grid size-11 place-items-center hover:text-cyan" onClick={() => updateQuantity(item.key, item.quantity + 1)} type="button">+</button></div></div></li>)}</ul>

        <aside className="h-fit rounded-2xl border border-cyan/25 bg-galanta-black p-5 text-sterile sm:p-6"><p className="font-technical text-[10px] font-semibold uppercase tracking-[0.12em] text-aqua">Resumo</p><p className="mt-3 font-display text-3xl font-semibold">{items.length} {items.length === 1 ? 'seleção' : 'seleções'}</p><p className="mt-3 text-sm leading-6 text-mist/70">Na próxima etapa, coletaremos apenas dados profissionais e comerciais necessários para qualificação.</p><Button className="mt-6 w-full" href="/solicitacao/dados">Informar dados profissionais</Button><Button className="mt-2 w-full" href="/produtos" variant="secondary">Continuar consultando</Button></aside>
      </div>
    </Container>
  )
}
