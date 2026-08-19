import { NextResponse } from 'next/server'
import { ADMIN_SESSION_COOKIE, getAdminSessionValue, isValidAdminPassword } from '@/lib/admin/auth'

export async function POST(request: Request) {
  const body = await request.json().catch(() => null) as { password?: unknown } | null
  const password = typeof body?.password === 'string' ? body.password : ''

  if (!isValidAdminPassword(password)) {
    return NextResponse.json({ message: 'Senha inválida ou admin não configurado.' }, { status: 401 })
  }

  const sessionValue = getAdminSessionValue()
  if (!sessionValue) return NextResponse.json({ message: 'Admin não configurado.' }, { status: 503 })

  const response = NextResponse.json({ ok: true })
  response.cookies.set({
    name: ADMIN_SESSION_COOKIE,
    value: sessionValue,
    httpOnly: true,
    sameSite: 'strict',
    secure: process.env.NODE_ENV === 'production',
    path: '/admin',
  })
  return response
}
