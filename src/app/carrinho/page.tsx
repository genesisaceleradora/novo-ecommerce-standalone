import type { Metadata } from 'next'
import { CartPageContent } from '@/components/cart/CartPageContent'
import { createPageMetadata } from '@/lib/seo/metadata'

export const metadata: Metadata = createPageMetadata({ title: 'Carrinho', description: 'Resumo demonstrativo dos itens selecionados.', path: '/carrinho' })

export default function CartPage() {
  return <CartPageContent />
}
