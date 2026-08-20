import { Badge, type BadgeVariant } from '@/components/ui/Badge'
import type { ContentStatus } from '@/types/content'

type StatusItem = { label: string; status: ContentStatus; value: string }
type StatusListProps = { items: readonly StatusItem[] }

const statusPresentation: Record<ContentStatus, { badge: BadgeVariant; label: string }> = {
  confirmed: { badge: 'success', label: 'Confirmado' },
  development: { badge: 'standard', label: 'Em desenvolvimento' },
  validation: { badge: 'validation', label: 'Em validação' },
  pending: { badge: 'pending', label: 'Pendente' },
  restricted: { badge: 'pending', label: 'Não publicado' },
}

export function StatusList({ items }: StatusListProps) {
  return (
    <dl className="divide-y divide-mist rounded-2xl border border-mist bg-white">
      {items.map((item) => {
        const presentation = statusPresentation[item.status]
        return <div className="grid gap-2 px-5 py-4 sm:grid-cols-[0.7fr_1fr_auto] sm:items-center" key={item.label}><dt className="font-technical text-[10px] font-semibold uppercase tracking-[0.1em] text-steel">{item.label}</dt><dd className="text-sm font-medium text-slate">{item.value}</dd><dd><Badge variant={presentation.badge}>{presentation.label}</Badge></dd></div>
      })}
    </dl>
  )
}
