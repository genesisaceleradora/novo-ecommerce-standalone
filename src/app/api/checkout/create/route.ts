import { NextResponse } from 'next/server'
import { createMockOrder } from '@/server/checkout/create-order'
import type { CreateMockOrderInput } from '@/types/checkout'

export async function POST(request: Request) {
  try {
    const input = await request.json() as CreateMockOrderInput
    const order = createMockOrder(input)
    return NextResponse.json({ order })
  } catch {
    return NextResponse.json({ error: 'Não foi possível criar o pedido mockado.' }, { status: 400 })
  }
}
