'use client'

import { useEffect, useMemo, useState } from 'react'
import { CartContext, type CartCustomization, type CartItem } from '@/components/cart/CartContext'

const storageKey = 'ecommerce-standalone-cart'

function createItemKey(productId: string, customization?: CartCustomization) {
  return `${productId}:${JSON.stringify(customization ?? {})}`
}

function readCart() {
  try {
    const storedCart = window.localStorage.getItem(storageKey)
    if (!storedCart) return []
    const parsedCart: unknown = JSON.parse(storedCart)
    return Array.isArray(parsedCart) ? parsedCart as CartItem[] : []
  } catch {
    return []
  }
}

export function CartProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    setItems(readCart())
    setIsHydrated(true)
  }, [])

  useEffect(() => {
    if (isHydrated) window.localStorage.setItem(storageKey, JSON.stringify(items))
  }, [isHydrated, items])

  const value = useMemo(() => ({
    items,
    itemCount: items.reduce((total, item) => total + item.quantity, 0),
    subtotal: items.reduce((total, item) => total + item.product.price * item.quantity, 0),
    isOpen,
    isHydrated,
    addProduct: (product: CartItem['product'], customization?: CartCustomization) => {
      const key = createItemKey(product.id, customization)
      setItems((currentItems) => {
        const existingItem = currentItems.find((item) => item.key === key)
        if (existingItem) return currentItems.map((item) => item.key === key ? { ...item, quantity: item.quantity + 1 } : item)
        return [...currentItems, { key, product, quantity: 1, customization }]
      })
      setIsOpen(true)
    },
    removeItem: (key: string) => setItems((currentItems) => currentItems.filter((item) => item.key !== key)),
    updateQuantity: (key: string, quantity: number) => {
      if (quantity < 1) {
        setItems((currentItems) => currentItems.filter((item) => item.key !== key))
        return
      }
      setItems((currentItems) => currentItems.map((item) => item.key === key ? { ...item, quantity } : item))
    },
    openCart: () => setIsOpen(true),
    closeCart: () => setIsOpen(false),
  }), [isHydrated, isOpen, items])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
