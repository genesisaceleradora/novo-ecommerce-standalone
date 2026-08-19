import { adminOrderStatusLabels, type AdminOrderStatus } from '@/types/admin'

const statusStyles: Record<AdminOrderStatus, string> = {
  new: 'bg-ivory text-navy', payment_pending: 'bg-rose/15 text-rose', payment_approved: 'bg-gold/20 text-gold-dark',
  awaiting_personalization: 'bg-rose/15 text-rose', files_received: 'bg-gold/20 text-gold-dark', in_review: 'bg-ivory text-navy',
  in_production: 'bg-navy text-cream', ready_to_ship: 'bg-gold/20 text-gold-dark', shipped: 'bg-navy text-cream',
  delivered: 'bg-gold/20 text-gold-dark', cancelled: 'bg-rose/15 text-rose', refunded: 'bg-rose/15 text-rose',
}

export function AdminStatusBadge({ status }: { status: AdminOrderStatus }) {
  return <span className={`inline-flex rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.11em] ${statusStyles[status]}`}>{adminOrderStatusLabels[status]}</span>
}
