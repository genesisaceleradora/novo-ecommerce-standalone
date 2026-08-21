'use client'

import { useMemo, useState } from 'react'
import { ApprovalStatusBadge } from '@/components/catalog/CatalogStatusBadge'
import { Button } from '@/components/ui/Button'
import { ComplianceNotice } from '@/components/ui/ComplianceNotice'
import { requestTypeDescriptions } from '@/data/technical-request'
import { requestTypeLabels } from '@/data/catalog'
import { useTechnicalRequest } from '@/hooks/useTechnicalRequest'
import { cn } from '@/lib/cn'
import type { OrthoProduct, TechnicalRequestType } from '@/types/catalog'
import type { TechnicalRequestVariation } from '@/types/technical-request'

type ProductRequestConfiguratorProps = { product: OrthoProduct }

export function ProductRequestConfigurator({ product }: ProductRequestConfiguratorProps) {
  const { addItem } = useTechnicalRequest()
  const [selection, setSelection] = useState<Record<string, string>>({})
  const [requestType, setRequestType] = useState<TechnicalRequestType>(product.requestTypes[0] ?? 'commercial_contact')
  const [notes, setNotes] = useState('')
  const [error, setError] = useState('')

  const selectedVariations = useMemo(() => product.variations.reduce<TechnicalRequestVariation>((result, variation) => {
    const selectedOption = variation.options.find((option) => option.id === selection[variation.id])
    if (selectedOption) result[variation.kind] = { value: selectedOption.value, label: selectedOption.label }
    return result
  }, {}), [product.variations, selection])

  function handleAdd() {
    const missingVariation = product.variations.find((variation) => variation.required && !selection[variation.id])
    if (missingVariation) {
      setError(`Selecione uma opção em “${missingVariation.label}” para continuar.`)
      return
    }
    setError('')
    addItem({
      productId: product.id,
      productName: product.name,
      productSlug: product.slug,
      requestType,
      variation: Object.keys(selectedVariations).length > 0 ? selectedVariations : undefined,
      notes: notes.trim() || undefined,
    })
  }

  return (
    <div className="rounded-2xl border border-mist bg-sterile p-5 sm:p-6">
      <div><p className="font-technical text-[10px] font-semibold uppercase tracking-[0.12em] text-cyan">Configuração da solicitação</p><h2 className="mt-2 font-display text-2xl font-semibold tracking-[-0.03em] text-slate">Registre o contexto que deseja avaliar.</h2></div>
      <ComplianceNotice className="mt-5" title="Opções demonstrativas" tone="warning">Os placeholders validam a estrutura da interface e não representam catálogo, disponibilidade ou especificações finais.</ComplianceNotice>

      {product.variations.length > 0 && <div className="mt-7 space-y-7">{product.variations.map((variation) => <fieldset key={variation.id}><div className="flex flex-wrap items-center justify-between gap-3"><legend className="text-sm font-semibold text-slate">{variation.label}{variation.required && <span aria-hidden="true"> *</span>}</legend><ApprovalStatusBadge status={variation.status} /></div><div className="mt-3 grid gap-3 sm:grid-cols-2">{variation.options.map((option) => {
        const isSelected = selection[variation.id] === option.id
        return <label className={cn('flex min-h-12 cursor-pointer items-center justify-between gap-3 rounded-lg border bg-white px-4 py-3 text-sm font-medium transition focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-cyan', isSelected ? 'border-cyan text-slate shadow-surface' : 'border-mist text-steel hover:border-cyan/50')} key={option.id}><span>{option.label}</span><input checked={isSelected} className="size-4 accent-cyan" name={variation.id} onChange={() => { setSelection((current) => ({ ...current, [variation.id]: option.id })); setError('') }} type="radio" value={option.value} /></label>
      })}</div></fieldset>)}</div>}

      <fieldset className="mt-7"><legend className="text-sm font-semibold text-slate">Tipo de interesse *</legend><div className="mt-3 grid gap-3">{product.requestTypes.map((type) => <label className={cn('cursor-pointer rounded-lg border bg-white px-4 py-3 transition focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-cyan', requestType === type ? 'border-cyan shadow-surface' : 'border-mist hover:border-cyan/50')} key={type}><span className="flex items-start gap-3"><input checked={requestType === type} className="mt-1 size-4 accent-cyan" name="request-type" onChange={() => setRequestType(type)} type="radio" value={type} /><span><span className="block text-sm font-semibold text-slate">{requestTypeLabels[type]}</span><span className="mt-1 block text-xs leading-5 text-steel">{requestTypeDescriptions[type]}</span></span></span></label>)}</div></fieldset>

      <label className="mt-7 grid gap-2 text-sm font-semibold text-slate" htmlFor="selection-notes">Observação sobre esta seleção <span className="font-normal text-steel">(opcional)</span></label>
      <textarea aria-describedby="selection-notes-help" className="mt-2 min-h-24 w-full rounded-lg border border-mist bg-white p-4 text-sm text-slate outline-none focus:border-cyan" id="selection-notes" maxLength={500} onChange={(event) => setNotes(event.target.value)} placeholder="Use apenas informações comerciais ou técnicas não identificáveis." value={notes} />
      <p className="mt-2 text-xs leading-5 text-steel" id="selection-notes-help">Não inclua nomes, documentos, imagens, diagnósticos ou informações identificáveis de pacientes.</p>
      {error && <p aria-live="assertive" className="mt-4 text-sm font-semibold text-clinicalRed" role="alert">{error}</p>}
      <Button aria-label={`Adicionar ${product.name} à solicitação técnica`} className="mt-7 w-full" onClick={handleAdd}>Adicionar à solicitação técnica</Button>
    </div>
  )
}
