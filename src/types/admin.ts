export const adminOrderStatuses = [
  'new',
  'payment_pending',
  'payment_approved',
  'awaiting_personalization',
  'files_received',
  'in_review',
  'in_production',
  'ready_to_ship',
  'shipped',
  'delivered',
  'cancelled',
  'refunded',
] as const

export type AdminOrderStatus = (typeof adminOrderStatuses)[number]

export const adminOrderStatusLabels: Record<AdminOrderStatus, string> = {
  new: 'Novo pedido',
  payment_pending: 'Pagamento pendente',
  payment_approved: 'Pagamento aprovado',
  awaiting_personalization: 'Aguardando personalização',
  files_received: 'Arquivos recebidos',
  in_review: 'Em revisão',
  in_production: 'Em produção',
  ready_to_ship: 'Pronto para envio',
  shipped: 'Enviado',
  delivered: 'Entregue',
  cancelled: 'Cancelado',
  refunded: 'Reembolsado',
}

export type AdminOrderFile = {
  id: string
  originalFileName: string
  storagePath: string
  mimeType: string
  fileSize: number
}

export type AdminOrderItem = {
  id: string
  productName: string
  quantity: number
  unitPrice: number
  total: number
  customization?: {
    name?: string
    phrase?: string
    date?: string
    notes?: string
    musicLink?: string
  }
  files: AdminOrderFile[]
}

export type AdminOrderHistoryItem = {
  id: string
  status: AdminOrderStatus
  createdAt: string
  description: string
}

export type AdminOrder = {
  id: string
  number: string
  createdAt: string
  customer: {
    fullName: string
    email: string
    phone: string
    document: string
  }
  items: AdminOrderItem[]
  subtotal: number
  shippingTotal: number
  total: number
  paymentStatus: 'pending' | 'approved' | 'refused' | 'cancelled' | 'refunded'
  status: AdminOrderStatus
  trackingCode?: string
  customerNotes?: string
  internalNotes?: string
  utms?: Record<string, string>
  history: AdminOrderHistoryItem[]
}
