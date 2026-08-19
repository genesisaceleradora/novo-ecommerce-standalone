'use client'

import { useCallback, useEffect, useState } from 'react'
import { mockAdminOrders } from '@/data/admin/orders'
import type { AdminOrder, AdminOrderStatus } from '@/types/admin'

const storageKey = 'ecommerce-standalone-mock-admin-orders'

function copyInitialOrders() {
  return JSON.parse(JSON.stringify(mockAdminOrders)) as AdminOrder[]
}

export function useMockAdminOrders() {
  const [orders, setOrders] = useState<AdminOrder[]>(copyInitialOrders)
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(storageKey)
      if (stored) setOrders(JSON.parse(stored) as AdminOrder[])
    } catch { /* Mocks iniciais permanecem disponíveis se o storage falhar. */ }
    setIsHydrated(true)
  }, [])

  useEffect(() => {
    if (!isHydrated) return
    try { window.localStorage.setItem(storageKey, JSON.stringify(orders)) } catch { /* Estado segue em memória. */ }
  }, [isHydrated, orders])

  const updateOrderStatus = useCallback((orderId: string, status: AdminOrderStatus) => {
    setOrders((currentOrders) => currentOrders.map((order) => {
      if (order.id !== orderId || order.status === status) return order
      return {
        ...order,
        status,
        history: [...order.history, {
          id: `history_${orderId}_${Date.now()}`,
          status,
          createdAt: new Date().toISOString(),
          description: `${status} definido localmente no painel mockado.`,
        }],
      }
    }))
  }, [])

  return { orders, updateOrderStatus }
}
