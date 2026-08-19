import { randomUUID } from 'crypto'
import type { CreateMockOrderInput, MockOrderConfirmation } from '@/types/checkout'

/**
 * Temporary server-side order factory. It intentionally does not persist data
 * or create a Pagar.me charge; those steps belong to the future integration.
 */
export function createMockOrder(input: CreateMockOrderInput): MockOrderConfirmation {
  if (input.items.length === 0) throw new Error('Não é possível criar um pedido sem itens.')

  return {
    id: `mock_${randomUUID().slice(0, 8)}`,
    status: 'pending_payment',
    itemCount: input.items.reduce((total, item) => total + item.quantity, 0),
    subtotal: input.items.reduce((total, item) => total + item.product.price * item.quantity, 0),
    createdAt: new Date().toISOString(),
  }
}
