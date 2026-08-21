import Link from 'next/link'
import { requestTypeLabels } from '@/data/catalog'
import type { TechnicalRequestItem, TechnicalRequestVariation } from '@/types/technical-request'

const variationLabels: Record<keyof TechnicalRequestVariation, string> = {
  size: 'Tamanho',
  side: 'Lado',
  model: 'Modelo',
  version: 'Versão',
  configuration: 'Configuração',
}

type RequestItemDetailsProps = {
  item: Pick<TechnicalRequestItem, 'productName' | 'productSlug' | 'requestType' | 'quantity' | 'variation' | 'notes'>
  showQuantity?: boolean
}

export function RequestItemDetails({ item, showQuantity = true }: RequestItemDetailsProps) {
  const variations = Object.entries(item.variation ?? {}) as Array<[keyof TechnicalRequestVariation, { value: string; label: string }]>

  return (
    <div>
      <Link className="font-display text-xl font-semibold tracking-[-0.02em] text-slate hover:text-cyan" href={`/produto/${item.productSlug}`}>{item.productName}</Link>
      <p className="mt-1 font-technical text-[10px] font-semibold uppercase tracking-[0.09em] text-cyan">{requestTypeLabels[item.requestType]}</p>
      {(variations.length > 0 || item.notes) && <dl className="mt-3 space-y-1 text-xs leading-5 text-steel">
        {variations.map(([kind, option]) => <div className="flex gap-1" key={kind}><dt className="font-semibold text-slate">{variationLabels[kind]}:</dt><dd>{option.label}</dd></div>)}
        {item.notes && <div><dt className="font-semibold text-slate">Observação da seleção:</dt><dd className="mt-0.5 whitespace-pre-wrap">{item.notes}</dd></div>}
      </dl>}
      {showQuantity && <p className="mt-3 text-xs text-steel">Quantidade de referência: <strong className="text-slate">{item.quantity}</strong></p>}
    </div>
  )
}
