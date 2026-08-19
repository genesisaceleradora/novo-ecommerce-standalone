import { NextResponse } from 'next/server'
import { preparePagarmeWebhook } from '@/server/checkout/webhook'

export async function POST() {
  const result = preparePagarmeWebhook()
  return NextResponse.json(result, { status: 501 })
}
