'use client'

import { useEffect } from 'react'
import { trackEvent } from '@/lib/tracking/events'
import type { Product } from '@/types'

export function ProductViewTracking({ product }: { product: Pick<Product, 'id' | 'name' | 'price' | 'categorySlug'> }) {
  useEffect(() => { trackEvent('ViewContent', { content_id: product.id, content_name: product.name, content_category: product.categorySlug, value: product.price / 100, currency: 'BRL' }) }, [product])
  return null
}
