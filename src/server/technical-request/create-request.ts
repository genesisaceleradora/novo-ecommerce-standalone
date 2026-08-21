import type { CreateTechnicalRequestInput, MockTechnicalRequestConfirmation } from '@/types/technical-request'

export function createMockTechnicalRequest(input: CreateTechnicalRequestInput): MockTechnicalRequestConfirmation {
  const reference = crypto.randomUUID().replace(/-/g, '').slice(0, 10).toUpperCase()

  return {
    id: `GAL-${reference}`,
    createdAt: new Date().toISOString(),
    status: 'received_for_mock_qualification',
    primaryInterest: input.professional.primaryInterest,
    items: input.items.map(({ productId, productName, productSlug, requestType, quantity, variation }) => ({
      productId,
      productName,
      productSlug,
      requestType,
      quantity,
      variation,
    })),
  }
}
