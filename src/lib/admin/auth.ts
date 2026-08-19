import 'server-only'
import { createHash, timingSafeEqual } from 'crypto'
import { cookies } from 'next/headers'

export const ADMIN_SESSION_COOKIE = 'ecommerce-standalone-admin-session'
const LOCAL_DEVELOPMENT_PASSWORD = 'admin-local-dev-only'

function getConfiguredAdminPassword() {
  if (process.env.ADMIN_PASSWORD) return process.env.ADMIN_PASSWORD
  return process.env.NODE_ENV === 'development' ? LOCAL_DEVELOPMENT_PASSWORD : null
}

function createSessionValue(password: string) {
  return createHash('sha256').update(`admin-session:${password}`).digest('hex')
}

export function isLocalDevelopmentPasswordEnabled() {
  return !process.env.ADMIN_PASSWORD && process.env.NODE_ENV === 'development'
}

export function isValidAdminPassword(password: string) {
  const expectedPassword = getConfiguredAdminPassword()
  if (!expectedPassword) return false

  const expectedHash = createSessionValue(expectedPassword)
  const receivedHash = createSessionValue(password)
  return timingSafeEqual(Buffer.from(expectedHash), Buffer.from(receivedHash))
}

export function getAdminSessionValue() {
  const password = getConfiguredAdminPassword()
  return password ? createSessionValue(password) : null
}

export async function hasAdminSession() {
  const expectedSession = getAdminSessionValue()
  if (!expectedSession) return false
  const cookieStore = await cookies()
  const session = cookieStore.get(ADMIN_SESSION_COOKIE)?.value
  if (!session) return false
  return timingSafeEqual(Buffer.from(expectedSession), Buffer.from(session))
}
