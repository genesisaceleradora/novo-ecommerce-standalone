import { NextResponse } from 'next/server'
import { validateTechnicalRequestPayload } from '@/lib/technical-request/validation'
import { createMockTechnicalRequest } from '@/server/technical-request/create-request'

const maximumBodySize = 32_000

export async function POST(request: Request) {
  try {
    const rawBody = await request.text()
    if (rawBody.length > maximumBodySize) {
      return NextResponse.json({ message: 'A solicitação excede o limite permitido.', fieldErrors: { form: 'Reduza as observações e tente novamente.' } }, { status: 413 })
    }

    const result = validateTechnicalRequestPayload(JSON.parse(rawBody) as unknown)
    if (!result.success) return NextResponse.json(result, { status: 400 })

    const confirmation = createMockTechnicalRequest(result.data)
    return NextResponse.json({ confirmation })
  } catch {
    return NextResponse.json({ message: 'Não foi possível processar a solicitação.', fieldErrors: { form: 'Tente novamente em instantes.' } }, { status: 400 })
  }
}
