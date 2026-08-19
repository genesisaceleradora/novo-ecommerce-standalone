import type { Metadata } from 'next'
import { AdminDashboard } from '@/components/admin/AdminDashboard'
import { AdminLogin } from '@/components/admin/AdminLogin'
import { AdminShell } from '@/components/admin/AdminShell'
import { hasAdminSession, isLocalDevelopmentPasswordEnabled } from '@/lib/admin/auth'

export const metadata: Metadata = { title: 'Admin mockado', robots: { index: false, follow: false } }

export default async function AdminPage() {
  if (!(await hasAdminSession())) return <AdminLogin showLocalPasswordHint={isLocalDevelopmentPasswordEnabled()} />
  return <AdminShell><AdminDashboard /></AdminShell>
}
