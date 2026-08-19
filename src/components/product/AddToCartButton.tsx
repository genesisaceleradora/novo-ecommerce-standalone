'use client'

import { Button } from '@/components/ui/Button'
import { useCart } from '@/hooks/useCart'
import type { Product } from '@/types'

type AddToCartButtonProps = { product: Pick<Product, 'id' | 'name' | 'slug' | 'price' | 'images'> }

export function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addProduct } = useCart()
  return <Button aria-label={`Adicionar ${product.name} ao carrinho`} className="mt-7 w-full" onClick={() => addProduct(product)}>Adicionar ao carrinho</Button>
}
