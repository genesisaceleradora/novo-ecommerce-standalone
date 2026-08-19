import type { CartItem } from '@/types/cart'

export type CheckoutCustomer = {
  fullName: string
  email: string
  phone: string
  document: string
}

export type CheckoutAddress = {
  zipCode: string
  street: string
  number: string
  complement: string
  neighborhood: string
  city: string
  state: string
}

export type CheckoutFormData = CheckoutCustomer & CheckoutAddress & {
  orderNotes: string
}

export type CreateMockOrderInput = {
  customer: CheckoutCustomer
  address: CheckoutAddress
  orderNotes?: string
  items: CartItem[]
}

export type MockOrderConfirmation = {
  id: string
  status: 'pending_payment'
  itemCount: number
  subtotal: number
  createdAt: string
}
