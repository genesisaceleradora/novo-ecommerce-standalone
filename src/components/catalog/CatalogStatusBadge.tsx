import { Badge, type BadgeVariant } from '@/components/ui/Badge'
import { approvalStatusLabels } from '@/data/catalog'
import type { ApprovalStatus, OrthoProduct } from '@/types/catalog'

const approvalVariants: Record<ApprovalStatus, BadgeVariant> = {
  confirmed: 'success',
  provisional: 'validation',
  pending: 'pending',
  restricted: 'pending',
}

const productStatusPresentation: Record<OrthoProduct['status'], { label: string; variant: BadgeVariant }> = {
  placeholder: { label: 'Especificação a confirmar', variant: 'pending' },
  development: { label: 'Em desenvolvimento', variant: 'standard' },
  technical_evaluation: { label: 'Em avaliação técnica', variant: 'validation' },
  commercial: { label: 'Comercial', variant: 'success' },
}

export function ApprovalStatusBadge({ status }: { status: ApprovalStatus }) {
  return <Badge variant={approvalVariants[status]}>{approvalStatusLabels[status]}</Badge>
}

export function ProductStatusBadge({ status }: { status: OrthoProduct['status'] }) {
  const presentation = productStatusPresentation[status]
  return <Badge variant={presentation.variant}>{presentation.label}</Badge>
}
