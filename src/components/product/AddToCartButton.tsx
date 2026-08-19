'use client'

import { Button } from '@/components/ui/Button'
import { useCart } from '@/hooks/useCart'
import type { Product } from '@/types'
import type { CartCustomization } from '@/components/cart/CartContext'

type AddToCartButtonProps = {
  product: Pick<Product, 'id' | 'name' | 'slug' | 'price' | 'images'>
  customization?: CartCustomization
  onBeforeAdd?: () => boolean
}

export function AddToCartButton({ product, customization, onBeforeAdd }: AddToCartButtonProps) {
  const { addProduct } = useCart()
  function handleAdd() {
    if (onBeforeAdd && !onBeforeAdd()) return
    addProduct(product, customization)
  }
  return <Button aria-label={`Adicionar ${product.name} ao carrinho`} className="mt-7 w-full" onClick={handleAdd}>Adicionar ao carrinho</Button>
}
