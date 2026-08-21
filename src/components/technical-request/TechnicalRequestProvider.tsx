'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import { TechnicalRequestContext } from '@/components/technical-request/TechnicalRequestContext'
import { technicalRequestStorageKey } from '@/lib/technical-request/storage'
import { technicalRequestVersion, type NewTechnicalRequestItem, type TechnicalRequestItem } from '@/types/technical-request'

type StoredTechnicalRequest = { version: typeof technicalRequestVersion; items: TechnicalRequestItem[] }

function isStoredItem(value: unknown): value is TechnicalRequestItem {
  if (typeof value !== 'object' || value === null) return false
  const item = value as Partial<TechnicalRequestItem>
  const variationIsSafe = item.variation === undefined || (
    typeof item.variation === 'object'
    && item.variation !== null
    && Object.values(item.variation).every((option) => option !== undefined
      && typeof option === 'object'
      && typeof option.value === 'string'
      && typeof option.label === 'string')
  )
  return typeof item.key === 'string'
    && typeof item.productId === 'string'
    && typeof item.productName === 'string'
    && typeof item.productSlug === 'string'
    && typeof item.requestType === 'string'
    && Number.isInteger(item.quantity)
    && Number(item.quantity) > 0
    && variationIsSafe
    && (item.notes === undefined || typeof item.notes === 'string')
}

function readStoredRequest() {
  try {
    const stored = window.localStorage.getItem(technicalRequestStorageKey)
    if (!stored) return []
    const parsed = JSON.parse(stored) as Partial<StoredTechnicalRequest>
    if (parsed.version !== technicalRequestVersion || !Array.isArray(parsed.items)) return []
    return parsed.items.filter(isStoredItem).slice(0, 20)
  } catch {
    return []
  }
}

function createItemKey(item: NewTechnicalRequestItem) {
  const source = `${item.productId}:${item.requestType}:${JSON.stringify(item.variation ?? {})}:${item.notes?.trim() ?? ''}`
  let hash = 2166136261
  for (let index = 0; index < source.length; index += 1) {
    hash ^= source.charCodeAt(index)
    hash = Math.imul(hash, 16777619)
  }
  return `${item.productId}-${(hash >>> 0).toString(36)}`
}

export function TechnicalRequestProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  const [items, setItems] = useState<TechnicalRequestItem[]>([])
  const [isHydrated, setIsHydrated] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setItems(readStoredRequest())
    setIsHydrated(true)
  }, [])

  useEffect(() => {
    if (!isHydrated) return
    const payload: StoredTechnicalRequest = { version: technicalRequestVersion, items }
    try {
      window.localStorage.setItem(technicalRequestStorageKey, JSON.stringify(payload))
    } catch {
      // O estado em memória continua funcional quando o storage estiver indisponível.
    }
  }, [isHydrated, items])

  const addItem = useCallback((newItem: NewTechnicalRequestItem) => {
    const key = createItemKey(newItem)
    const quantity = Math.min(Math.max(newItem.quantity ?? 1, 1), 999)
    setItems((currentItems) => {
      const existing = currentItems.find((item) => item.key === key)
      if (existing) return currentItems.map((item) => item.key === key ? { ...item, quantity: Math.min(item.quantity + quantity, 999) } : item)
      return [...currentItems, { ...newItem, key, quantity }].slice(0, 20)
    })
    setIsOpen(true)
  }, [])

  const removeItem = useCallback((key: string) => setItems((current) => current.filter((item) => item.key !== key)), [])
  const updateQuantity = useCallback((key: string, quantity: number) => {
    if (quantity < 1) {
      removeItem(key)
      return
    }
    setItems((current) => current.map((item) => item.key === key ? { ...item, quantity: Math.min(quantity, 999) } : item))
  }, [removeItem])
  const clearItems = useCallback(() => setItems([]), [])
  const openRequest = useCallback(() => setIsOpen(true), [])
  const closeRequest = useCallback(() => setIsOpen(false), [])

  const value = useMemo(() => ({
    items,
    itemCount: items.reduce((total, item) => total + item.quantity, 0),
    isHydrated,
    isOpen,
    addItem,
    removeItem,
    updateQuantity,
    clearItems,
    openRequest,
    closeRequest,
  }), [addItem, clearItems, closeRequest, isHydrated, isOpen, items, openRequest, removeItem, updateQuantity])

  return <TechnicalRequestContext.Provider value={value}>{children}</TechnicalRequestContext.Provider>
}
