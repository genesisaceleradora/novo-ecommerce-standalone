import Image from 'next/image'
import { ProductStatusBadge } from '@/components/catalog/CatalogStatusBadge'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { getCatalogCategoryById } from '@/data/catalog'
import type { OrthoProduct } from '@/types/catalog'

type CatalogProductCardProps = { product: OrthoProduct }

export function CatalogProductCard({ product }: CatalogProductCardProps) {
  const category = getCatalogCategoryById(product.categoryId)
  const image = product.images[0]

  return (
    <Card className="group flex h-full flex-col overflow-hidden">
      <div className="relative aspect-[4/3] overflow-hidden border-b border-mist bg-graphite">
        {image && <Image alt={image.alt} className="object-cover transition duration-500 group-hover:scale-[1.02] motion-reduce:transform-none" fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" src={image.src} unoptimized />}
        <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-3 p-4"><ProductStatusBadge status={product.status} /><span className="rounded-full border border-mist/25 bg-galanta-black/80 px-3 py-1 font-technical text-[9px] font-semibold uppercase tracking-[0.12em] text-mist">Visual placeholder</span></div>
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="font-technical text-[10px] font-semibold uppercase tracking-[0.12em] text-cyan">{category?.name ?? 'Galanta Ortho'}</p>
        <h3 className="mt-3 font-display text-2xl font-semibold tracking-[-0.03em] text-slate">{product.name}</h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-steel">{product.shortDescription}</p>
        <div className="mt-6 flex flex-col gap-4 border-t border-mist pt-5 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-technical text-[10px] font-semibold uppercase tracking-[0.1em] text-steel">Sem preço · sem oferta</span>
          <Button className="min-h-11 px-4 text-xs" href={`/produto/${product.slug}`}>Consultar estrutura</Button>
        </div>
      </div>
    </Card>
  )
}
