import { adminOrderStatusLabels, type AdminOrderStatus } from '@/types/admin'

const statusStyles: Record<AdminOrderStatus, string> = {
  new: 'bg-sterile text-slate', payment_pending: 'bg-clinicalRed/15 text-clinicalRed', payment_approved: 'bg-cyan/20 text-cyan',
  awaiting_personalization: 'bg-clinicalRed/15 text-clinicalRed', files_received: 'bg-cyan/20 text-cyan', in_review: 'bg-sterile text-slate',
  in_production: 'bg-graphite text-sterile', ready_to_ship: 'bg-cyan/20 text-cyan', shipped: 'bg-graphite text-sterile',
  delivered: 'bg-cyan/20 text-cyan', cancelled: 'bg-clinicalRed/15 text-clinicalRed', refunded: 'bg-clinicalRed/15 text-clinicalRed',
}

export function AdminStatusBadge({ status }: { status: AdminOrderStatus }) {
  return <span className={`inline-flex rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.11em] ${statusStyles[status]}`}>{adminOrderStatusLabels[status]}</span>
}
