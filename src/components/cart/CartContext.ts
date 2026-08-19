'use client'

import { createContext } from 'react'
import type { CartCustomization, CartItem } from '@/types/cart'

export type { CartCustomization, CartItem } from '@/types/cart'

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
