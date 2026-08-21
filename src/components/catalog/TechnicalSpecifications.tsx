import { ApprovalStatusBadge } from '@/components/catalog/CatalogStatusBadge'
import { Card } from '@/components/ui/Card'
import type { TechnicalSpecification } from '@/types/catalog'

const groupLabels: Record<TechnicalSpecification['group'], string> = {
  product: 'Produto e configuração',
  adaptation: 'Adaptação e protocolo',
  care: 'Cuidados e conservação',
  regulatory: 'Regulatório e rastreabilidade',
}

export function TechnicalSpecifications({ specifications }: { specifications: readonly TechnicalSpecification[] }) {
  const groups = Object.entries(groupLabels).map(([key, label]) => ({
    key: key as TechnicalSpecification['group'],
    label,
    items: specifications.filter((specification) => specification.group === key),
  })).filter((group) => group.items.length > 0)

  return <div className="grid gap-5 lg:grid-cols-2">{groups.map((group) => <Card className="overflow-hidden" key={group.key} variant="technical"><h3 className="border-b border-mist bg-graphite px-5 py-4 font-technical text-[11px] font-semibold uppercase tracking-[0.12em] text-sterile">{group.label}</h3><dl className="divide-y divide-mist">{group.items.map((item) => <div className="grid gap-3 px-5 py-4 sm:grid-cols-[0.75fr_1fr_auto] sm:items-center" key={item.id}><dt className="font-technical text-[10px] font-semibold uppercase tracking-[0.1em] text-steel">{item.label}</dt><dd className="text-sm font-medium text-slate">{item.content.value}</dd><dd><ApprovalStatusBadge status={item.content.status} /></dd></div>)}</dl></Card>)}</div>
}
