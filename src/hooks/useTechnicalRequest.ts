'use client'

import { useContext } from 'react'
import { TechnicalRequestContext } from '@/components/technical-request/TechnicalRequestContext'

export function useTechnicalRequest() {
  const context = useContext(TechnicalRequestContext)
  if (!context) throw new Error('useTechnicalRequest deve ser usado dentro de TechnicalRequestProvider.')
  return context
}
