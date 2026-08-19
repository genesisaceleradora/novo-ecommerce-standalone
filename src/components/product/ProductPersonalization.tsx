'use client'

import { useState } from 'react'
import type { CartCustomization } from '@/components/cart/CartContext'
import type { Product } from '@/types'
import { AddToCartButton } from './AddToCartButton'
import { PersonalizationForm } from './PersonalizationForm'

type ProductPersonalizationProps = { product: Pick<Product, 'id' | 'name' | 'slug' | 'price' | 'images' | 'personalization'> }

function missingRequiredFields(customization: CartCustomization, requiredFields: string[] = []) {
  return requiredFields.filter((field) => {
    if (field === 'uploadedFiles') return !customization.uploadedFiles?.length
    const fieldValue = customization[field as keyof CartCustomization]
    return typeof fieldValue !== 'string' || fieldValue.trim().length === 0
  })
}

export function ProductPersonalization({ product }: ProductPersonalizationProps) {
  const [customization, setCustomization] = useState<CartCustomization>({})
  const [errors, setErrors] = useState<string[]>([])
  const enabled = product.personalization.enabled

  function validate() {
    const missingFields = missingRequiredFields(customization, product.personalization.requiredFields)
    if (missingFields.length === 0) {
      setErrors([])
      return true
    }
    setErrors([`Preencha os campos obrigatórios: ${missingFields.join(', ')}.`])
    return false
  }

  return (
    <>
      {enabled && <PersonalizationForm config={product.personalization} errors={errors} onChange={setCustomization} value={customization} />}
      <AddToCartButton customization={enabled ? customization : undefined} onBeforeAdd={enabled ? validate : undefined} product={product} />
    </>
  )
}
