import { CatalogProductCard } from '@/components/catalog/CatalogProductCard'
import { ComplianceNotice } from '@/components/ui/ComplianceNotice'
import type { OrthoProduct } from '@/types/catalog'

type CatalogGridProps = {
  emptyDescription?: string
  products: readonly OrthoProduct[]
}

export function CatalogGrid({ emptyDescription = 'Nenhum produto estrutural está associado a esta categoria.', products }: CatalogGridProps) {
  if (products.length === 0) {
    return <ComplianceNotice title="Conteúdo ainda não publicado" tone="validation">{emptyDescription}</ComplianceNotice>
  }

  return <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">{products.map((product) => <CatalogProductCard key={product.id} product={product} />)}</div>
}
