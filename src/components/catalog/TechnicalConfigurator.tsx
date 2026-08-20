'use client'

import { useMemo, useState } from 'react'
import { ApprovalStatusBadge } from '@/components/catalog/CatalogStatusBadge'
import { Button } from '@/components/ui/Button'
import { ComplianceNotice } from '@/components/ui/ComplianceNotice'
import { cn } from '@/lib/cn'
import type { ProductVariation } from '@/types/catalog'

type TechnicalConfiguratorProps = { productName: string; variations: readonly ProductVariation[] }

export function TechnicalConfigurator({ productName, variations }: TechnicalConfiguratorProps) {
  const [selection, setSelection] = useState<Record<string, string>>({})
  const selectedCount = Object.keys(selection).length
  const summary = useMemo(() => variations.map((variation) => ({
    label: variation.label,
    value: variation.options.find((option) => option.id === selection[variation.id])?.label,
  })).filter((item) => item.value), [selection, variations])

  if (variations.length === 0) return <ComplianceNotice title="Configuração pendente" tone="validation">As variações serão exibidas quando a estrutura aplicável ao produto for definida.</ComplianceNotice>

  return (
    <div className="rounded-2xl border border-mist bg-sterile p-5 sm:p-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div><p className="font-technical text-[10px] font-semibold uppercase tracking-[0.12em] text-cyan">Configuração técnica</p><h2 className="mt-2 font-display text-2xl font-semibold tracking-[-0.03em] text-slate">Demonstração de variações.</h2></div>
        <span className="font-technical text-[10px] uppercase tracking-[0.1em] text-steel">{selectedCount}/{variations.length} grupos</span>
      </div>
      <ComplianceNotice className="mt-5" title="Opções não comerciais" tone="warning">Os placeholders abaixo validam o comportamento da interface e não representam tamanhos, lados, modelos ou configurações finais.</ComplianceNotice>
      <div className="mt-7 space-y-7">
        {variations.map((variation) => (
          <fieldset key={variation.id}>
            <div className="flex flex-wrap items-center justify-between gap-3"><legend className="text-sm font-semibold text-slate">{variation.label}</legend><ApprovalStatusBadge status={variation.status} /></div>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {variation.options.map((option) => {
                const isSelected = selection[variation.id] === option.id
                return <label className={cn('flex min-h-12 cursor-pointer items-center justify-between gap-3 rounded-lg border bg-white px-4 py-3 text-sm font-medium transition focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-cyan', isSelected ? 'border-cyan text-slate shadow-surface' : 'border-mist text-steel hover:border-cyan/50')} key={option.id}><span>{option.label}</span><input checked={isSelected} className="size-4 accent-cyan" name={variation.id} onChange={() => setSelection((current) => ({ ...current, [variation.id]: option.id }))} type="radio" value={option.value} /></label>
              })}
            </div>
          </fieldset>
        ))}
      </div>
      {summary.length > 0 && <div aria-live="polite" className="mt-7 border-t border-mist pt-5"><p className="font-technical text-[10px] font-semibold uppercase tracking-[0.1em] text-steel">Resumo local</p><ul className="mt-3 space-y-2 text-sm text-slate">{summary.map((item) => <li key={item.label}><span className="font-semibold">{item.label}:</span> {item.value}</li>)}</ul><p className="mt-3 text-xs leading-5 text-steel">A seleção não é salva e não inicia pedido, reserva ou avaliação.</p></div>}
      <Button className="mt-7 w-full" href="/contato">Registrar interesse em {productName}</Button>
    </div>
  )
}
