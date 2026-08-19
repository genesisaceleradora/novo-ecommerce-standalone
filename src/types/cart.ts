import type { Product } from '@/types'

export type CartCustomization = {
  name?: string
  phrase?: string
  date?: string
  notes?: string
  dedication?: string
  musicLink?: string
  uploadedFiles?: Array<{ name: string }>
}

export type CartProduct = Pick<Product, 'id' | 'name' | 'slug' | 'price' | 'images'>

export type CartItem = {
  key: string
  product: CartProduct
  quantity: number
  customization?: CartCustomization
}
