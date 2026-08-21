'use client'

import { createContext } from 'react'
import type { NewTechnicalRequestItem, TechnicalRequestItem } from '@/types/technical-request'

export type TechnicalRequestContextValue = {
  items: TechnicalRequestItem[]
  itemCount: number
  isHydrated: boolean
  isOpen: boolean
  addItem: (item: NewTechnicalRequestItem) => void
  removeItem: (key: string) => void
  updateQuantity: (key: string, quantity: number) => void
  clearItems: () => void
  openRequest: () => void
  closeRequest: () => void
}

export const TechnicalRequestContext = createContext<TechnicalRequestContextValue | null>(null)
