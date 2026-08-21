import Image from 'next/image'
import { Badge } from '@/components/ui/Badge'
import type { ProductImage } from '@/types/catalog'

type ProductGalleryProps = { images: readonly ProductImage[]; productName: string }

export function ProductGallery({ images, productName }: ProductGalleryProps) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4">
      {images.map((image, index) => (
        <figure className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-mist bg-graphite first:col-span-2 first:aspect-[4/3]" key={`${image.src}-${index}`}>
          <Image alt={image.alt} className="object-cover" fill priority={index === 0} sizes={index === 0 ? '(min-width: 1024px) 50vw, 100vw' : '(min-width: 1024px) 25vw, 50vw'} src={image.src} unoptimized />
          <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-gradient-to-t from-galanta-black via-galanta-black/75 to-transparent px-4 pb-4 pt-12">
            <span className="font-technical text-[9px] uppercase leading-4 tracking-[0.1em] text-mist/80">{productName} · área reservada {index + 1}</span>
            <Badge variant={image.status === 'approved' ? 'success' : 'technical'}>{image.status === 'approved' ? 'Aprovado' : 'Placeholder'}</Badge>
          </figcaption>
        </figure>
      ))}
    </div>
  )
}
