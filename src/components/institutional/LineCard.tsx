import { Badge, type BadgeVariant } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import type { ContentCard, ContentStatus } from '@/types/content'

const statusPresentation: Record<ContentStatus, { badge: BadgeVariant; label: string }> = {
  confirmed: { badge: 'success', label: 'Confirmado' },
  development: { badge: 'standard', label: 'Em desenvolvimento' },
  validation: { badge: 'validation', label: 'Em validação' },
  pending: { badge: 'pending', label: 'A confirmar' },
  restricted: { badge: 'pending', label: 'Não publicado' },
}

export function LineCard({ description, href, label, status = 'development', title }: ContentCard) {
  const presentation = statusPresentation[status]

  return (
    <Card className="flex h-full flex-col p-6 sm:p-8" variant="technical">
      <div className="flex flex-wrap items-center justify-between gap-3"><p className="font-technical text-[11px] font-semibold uppercase tracking-[0.12em] text-cyan">{label ?? 'Linha'}</p><Badge variant={presentation.badge}>{presentation.label}</Badge></div>
      <h3 className="mt-12 font-display text-3xl font-semibold tracking-[-0.04em] text-slate">{title}</h3>
      <p className="mt-4 flex-1 text-sm leading-6 text-steel">{description}</p>
      {href && <Button className="mt-7 self-start" href={href} variant="secondary">Conhecer estrutura</Button>}
    </Card>
  )
}
