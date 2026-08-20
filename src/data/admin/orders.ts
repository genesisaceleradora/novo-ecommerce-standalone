import type { AdminOrder } from '@/types/admin'

/** Demonstrative data only. It mirrors the future orders/order_items schema. */
export const mockAdminOrders: AdminOrder[] = [
  {
    id: 'ord_demo_1001', number: '#1001', createdAt: '2026-08-19T13:30:00.000Z', status: 'new', paymentStatus: 'pending', subtotal: 18990, shippingTotal: 0, total: 18990,
    customer: { fullName: 'Cliente demonstrativo', email: 'cliente@example.com', phone: '(11) 90000-0000', document: '***.***.***-**' },
    customerNotes: 'Este é um pedido de demonstração. Regras comerciais a definir.',
    internalNotes: 'Confirmar briefing antes de iniciar produção.',
    utms: { source: 'instagram', medium: 'paid_social', campaign: 'placeholder-galanta' },
    items: [{
      id: 'item_demo_1001', productName: 'Produto personalizado — exemplo', quantity: 1, unitPrice: 18990, total: 18990,
      customization: { name: 'Nome de exemplo', phrase: 'Uma mensagem demonstrativa', date: '2026-08-19', notes: 'Usar como referência de estrutura.' },
      files: [{ id: 'file_demo_1001', originalFileName: 'imagem-exemplo.jpg', storagePath: 'orders/ord_demo_1001/uploads/imagem-exemplo.jpg', mimeType: 'image/jpeg', fileSize: 245000 }],
    }],
    history: [{ id: 'history_1001', status: 'new', createdAt: '2026-08-19T13:30:00.000Z', description: 'Pedido demonstrativo criado.' }],
  },
  {
    id: 'ord_demo_1002', number: '#1002', createdAt: '2026-08-18T15:10:00.000Z', status: 'payment_approved', paymentStatus: 'approved', subtotal: 24990, shippingTotal: 1990, total: 26980,
    customer: { fullName: 'Pessoa exemplo', email: 'pessoa@example.com', phone: '(21) 90000-0000', document: '**.***.***/****-**' },
    items: [{ id: 'item_demo_1002', productName: 'Produto para data especial — exemplo', quantity: 1, unitPrice: 24990, total: 24990, files: [] }],
    history: [
      { id: 'history_1002a', status: 'new', createdAt: '2026-08-18T15:10:00.000Z', description: 'Pedido demonstrativo criado.' },
      { id: 'history_1002b', status: 'payment_approved', createdAt: '2026-08-18T15:12:00.000Z', description: 'Pagamento marcado como aprovado no mock.' },
    ],
  },
  {
    id: 'ord_demo_1003', number: '#1003', createdAt: '2026-08-17T10:00:00.000Z', status: 'in_production', paymentStatus: 'approved', subtotal: 37980, shippingTotal: 1990, total: 39970,
    customer: { fullName: 'Comprador exemplo', email: 'comprador@example.com', phone: '(31) 90000-0000', document: '***.***.***-**' },
    trackingCode: 'Código de rastreio a definir',
    items: [{ id: 'item_demo_1003', productName: 'Produto configurável — exemplo', quantity: 2, unitPrice: 18990, total: 37980, customization: { phrase: 'Conteúdo demonstrativo', musicLink: 'https://exemplo.local/musica-placeholder' }, files: [] }],
    history: [{ id: 'history_1003', status: 'in_production', createdAt: '2026-08-17T10:30:00.000Z', description: 'Produção iniciada (demonstração).' }],
  },
  {
    id: 'ord_demo_1004', number: '#1004', createdAt: '2026-08-16T09:45:00.000Z', status: 'shipped', paymentStatus: 'approved', subtotal: 15990, shippingTotal: 1990, total: 17980,
    customer: { fullName: 'Cliente de teste', email: 'teste@example.com', phone: '(41) 90000-0000', document: '***.***.***-**' },
    trackingCode: 'BR123456789DEMO',
    items: [{ id: 'item_demo_1004', productName: 'Produto a definir — exemplo', quantity: 1, unitPrice: 15990, total: 15990, files: [] }],
    history: [{ id: 'history_1004', status: 'shipped', createdAt: '2026-08-16T13:10:00.000Z', description: 'Pedido marcado como enviado (demonstração).' }],
  },
]

export function getMockAdminOrder(orderId: string) {
  return mockAdminOrders.find((order) => order.id === orderId)
}
