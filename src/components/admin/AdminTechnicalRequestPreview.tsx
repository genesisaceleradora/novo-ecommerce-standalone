'use client'

import { useEffect, useState } from 'react'
import { Card } from '@/components/ui/Card'
import { requestTypeLabels } from '@/data/catalog'
import { professionalRoleLabels } from '@/data/technical-request'
import { readSessionTechnicalLead } from '@/lib/technical-request/storage'
import type { SessionTechnicalLead } from '@/types/technical-request'

export function AdminTechnicalRequestPreview() {
  const [lead, setLead] = useState<SessionTechnicalLead | null>(null)
  useEffect(() => setLead(readSessionTechnicalLead()), [])
  if (!lead) return null

  return (
    <section aria-labelledby="session-lead-title" className="mt-8">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between"><div><p className="font-technical text-[10px] font-semibold uppercase tracking-[0.12em] text-cyan">Transição para leads</p><h2 className="mt-2 font-display text-3xl font-semibold text-slate" id="session-lead-title">Solicitação desta sessão</h2></div><span className="text-xs text-steel">Disponível somente nesta sessão do navegador</span></div>
      <Card className="mt-4 p-5 sm:p-6"><div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]"><dl className="grid gap-3 text-sm"><div><dt className="text-xs font-semibold text-steel">Identificador</dt><dd className="mt-1 font-semibold text-slate">{lead.confirmation.id}</dd></div><div><dt className="text-xs font-semibold text-steel">Profissional</dt><dd className="mt-1 text-slate">{lead.professional.fullName} · {lead.professional.role ? professionalRoleLabels[lead.professional.role] : 'Função não informada'}</dd></div><div><dt className="text-xs font-semibold text-steel">Instituição</dt><dd className="mt-1 text-slate">{lead.professional.institution} · {lead.professional.city}/{lead.professional.state}</dd></div><div><dt className="text-xs font-semibold text-steel">Contato</dt><dd className="mt-1 break-words text-slate">{lead.professional.email} · {lead.professional.whatsapp}</dd></div><div><dt className="text-xs font-semibold text-steel">Interesse principal</dt><dd className="mt-1 text-slate">{requestTypeLabels[lead.confirmation.primaryInterest]}</dd></div></dl><div><p className="text-xs font-semibold text-steel">Itens selecionados</p><ul className="mt-2 divide-y divide-mist rounded-lg border border-mist px-4">{lead.confirmation.items.map((item, index) => <li className="py-3 text-sm" key={`${item.productId}-${index}`}><p className="font-semibold text-slate">{item.productName}</p><p className="mt-1 text-xs text-steel">{requestTypeLabels[item.requestType]} · quantidade de referência {item.quantity}</p></li>)}</ul></div></div><p className="mt-5 border-t border-mist pt-4 text-xs leading-5 text-steel">Prévia transitória para validar o fluxo da Fase 5. O pipeline completo, seus status e a substituição dos pedidos mockados pertencem à Fase 6.</p></Card>
    </section>
  )
}
