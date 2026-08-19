'use client'

import { useState, type FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'

type AdminLoginProps = { showLocalPasswordHint: boolean }

export function AdminLogin({ showLocalPasswordHint }: AdminLoginProps) {
  const router = useRouter()
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError('')
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/admin/login', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ password }) })
      if (!response.ok) {
        const data = await response.json().catch(() => null) as { message?: string } | null
        setError(data?.message ?? 'Não foi possível validar a senha.')
        return
      }
      router.refresh()
    } catch {
      setError('Não foi possível iniciar a sessão mockada. Tente novamente.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Container className="py-12 md:py-20">
      <div className="mx-auto max-w-md rounded-3xl border border-line bg-cream p-6 shadow-[0_18px_45px_rgba(14,25,48,0.10)] sm:p-9">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold-dark">Painel administrativo</p>
        <h1 className="mt-3 font-display text-4xl font-semibold text-navy">Acesso mockado</h1>
        <p className="mt-3 text-sm leading-6 text-muted">Use a senha configurada em <code>ADMIN_PASSWORD</code>. Esta camada é uma base de MVP e não substitui autenticação real.</p>
        {showLocalPasswordHint && <p className="mt-4 rounded-xl bg-ivory p-3 text-xs leading-5 text-navy">Ambiente local: sem <code>ADMIN_PASSWORD</code>, a senha de desenvolvimento é <code>admin-local-dev-only</code>. Não use esta senha fora do desenvolvimento.</p>}
        <form className="mt-7 space-y-4" onSubmit={handleSubmit}>
          <label className="block text-sm font-semibold text-navy" htmlFor="admin-password">Senha <input autoComplete="current-password" className="mt-2 w-full rounded-xl border border-line bg-white px-4 py-3 font-normal outline-none transition focus:border-gold" id="admin-password" onChange={(event) => setPassword(event.target.value)} required type="password" value={password} /></label>
          {error && <p className="rounded-xl bg-rose/10 px-3 py-2 text-sm text-rose" role="alert">{error}</p>}
          <Button className="w-full" disabled={isSubmitting} type="submit">{isSubmitting ? 'Validando…' : 'Entrar no painel'}</Button>
        </form>
      </div>
    </Container>
  )
}
