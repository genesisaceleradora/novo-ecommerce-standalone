'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import type { ReactNode } from 'react'

export function AdminShell({ children }: { children: ReactNode }) {
  const router = useRouter()

  async function signOut() {
    await fetch('/api/admin/logout', { method: 'POST' })
    router.push('/admin')
    router.refresh()
  }

  return (
    <div className="min-h-screen bg-ivory py-5 sm:py-8">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <header className="rounded-2xl bg-navy px-5 py-4 text-cream shadow-[0_12px_32px_rgba(14,25,48,0.15)] sm:flex sm:items-center sm:justify-between">
          <div><p className="text-[10px] font-bold uppercase tracking-[0.16em] text-gold">Admin mockado</p><Link className="mt-1 block font-display text-2xl font-semibold" href="/admin">Operação de pedidos</Link></div>
          <div className="mt-4 flex items-center gap-4 sm:mt-0"><Link className="text-sm text-cream/80 hover:text-gold" href="/">Ver loja</Link><button className="text-sm font-semibold text-gold hover:text-cream" onClick={signOut} type="button">Sair</button></div>
        </header>
        <main className="py-7 md:py-9">{children}</main>
      </div>
    </div>
  )
}
