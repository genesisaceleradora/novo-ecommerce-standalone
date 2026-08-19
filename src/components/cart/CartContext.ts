'use client'

import { createContext } from 'react'
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

export type CartItem = {
  key: string
  product: Pick<Product, 'id' | 'name' | 'slug' | 'price' | 'images'>
  quantity: number
  customization?: CartCustomization
}

export type CartContextValue = {
  items: CartItem[]
  itemCount: number
  subtotal: number
  isOpen: boolean
  isHydrated: boolean
  addProduct: (product: CartItem['product'], customization?: CartCustomization) => void
  removeItem: (key: string) => void
  updateQuantity: (key: string, quantity: number) => void
  openCart: () => void
  closeCart: () => void
}

export const CartContext = createContext<CartContextValue | null>(null)
