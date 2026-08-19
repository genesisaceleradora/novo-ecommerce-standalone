'use client'

import Link from 'next/link'
import { AdminStatusBadge } from '@/components/admin/AdminStatusBadge'
import { Card } from '@/components/ui/Card'
import { useMockAdminOrders } from '@/hooks/useMockAdminOrders'
import { formatPriceInBRL } from '@/lib/formatters'

function formatDate(value: string) {
  return new Intl.DateTimeFormat('pt-BR', { dateStyle: 'short', timeStyle: 'short' }).format(new Date(value))
}

export function AdminDashboard() {
  const { orders } = useMockAdminOrders()
  const pending = orders.filter((order) => ['new', 'payment_pending', 'awaiting_personalization'].includes(order.status)).length
  const inProduction = orders.filter((order) => order.status === 'in_production').length
  const revenue = orders.filter((order) => order.paymentStatus === 'approved' && order.status !== 'refunded').reduce((total, order) => total + order.total, 0)
  const metrics = [
    { label: 'Pedidos totais', value: String(orders.length), detail: 'Base demonstrativa' },
    { label: 'Pedidos pendentes', value: String(pending), detail: 'Pagamento ou briefing' },
    { label: 'Em produção', value: String(inProduction), detail: 'Acompanhamento operacional' },
    { label: 'Faturamento demonstrativo', value: formatPriceInBRL(revenue), detail: 'Somente pedidos mockados' },
  ]

  return <div>
    <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"><div><p className="text-xs font-bold uppercase tracking-[0.15em] text-gold-dark">Visão geral</p><h1 className="mt-2 font-display text-4xl font-semibold text-navy">Pedidos e produção</h1><p className="mt-2 max-w-2xl text-sm leading-6 text-muted">Dados exclusivamente demonstrativos, prontos para serem substituídos pela camada de banco.</p></div><span className="text-xs text-muted">Atualizações persistem apenas neste navegador.</span></div>
    <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{metrics.map((metric) => <Card className="p-5" key={metric.label}><p className="text-xs font-bold uppercase tracking-[0.11em] text-muted">{metric.label}</p><p className="mt-3 font-display text-3xl font-semibold text-navy">{metric.value}</p><p className="mt-2 text-xs text-muted">{metric.detail}</p></Card>)}</div>
    <section className="mt-8"><div className="flex items-center justify-between"><div><h2 className="font-display text-3xl font-semibold text-navy">Pedidos recentes</h2><p className="mt-1 text-sm text-muted">Listagem mockada para a rotina inicial.</p></div></div>
      <Card className="mt-4 overflow-hidden"><div className="divide-y divide-line">{orders.map((order) => <Link className="block p-5 transition hover:bg-ivory" href={`/admin/pedidos/${order.id}`} key={order.id}><div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"><div><div className="flex flex-wrap items-center gap-3"><p className="font-semibold text-navy">{order.number}</p><AdminStatusBadge status={order.status} /></div><p className="mt-2 text-sm text-muted">{order.customer.fullName} · {order.items.length} item(ns) · {formatDate(order.createdAt)}</p></div><div className="sm:text-right"><p className="font-semibold text-navy">{formatPriceInBRL(order.total)}</p><p className="mt-1 text-xs font-semibold text-gold-dark">Ver detalhe →</p></div></div></Link>)}</div></Card>
    </section>
  </div>
}
