import { notFound } from 'next/navigation'
import { AdminOrderDetail } from '@/components/admin/AdminOrderDetail'
import { AdminLogin } from '@/components/admin/AdminLogin'
import { AdminShell } from '@/components/admin/AdminShell'
import { getMockAdminOrder } from '@/data/admin/orders'
import { hasAdminSession, isLocalDevelopmentPasswordEnabled } from '@/lib/admin/auth'

type AdminOrderPageProps = { params: Promise<{ orderId: string }> }

export default async function AdminOrderPage({ params }: AdminOrderPageProps) {
  if (!(await hasAdminSession())) return <AdminLogin showLocalPasswordHint={isLocalDevelopmentPasswordEnabled()} />
  const { orderId } = await params
  if (!getMockAdminOrder(orderId)) notFound()
  return <AdminShell><AdminOrderDetail orderId={orderId} /></AdminShell>
}
