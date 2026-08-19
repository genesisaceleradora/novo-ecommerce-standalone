import type { ProductImage } from '@/types'

type ProductGalleryProps = { images: ProductImage[]; productName: string }

export function ProductGallery({ images, productName }: ProductGalleryProps) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4">
      {images.map((image, index) => (
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[radial-gradient(circle_at_72%_26%,rgba(214,179,106,0.62),transparent_22%),linear-gradient(135deg,#e9dfd0,#b8a995)] p-5" key={image.src}>
          <span className="rounded-full bg-cream/80 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-gold-dark">Imagem demonstrativa</span>
          <p className="absolute bottom-5 left-5 right-5 font-display text-xl italic text-navy/75">{productName} · vista {index + 1}</p>
          <span className="sr-only">{image.alt}</span>
        </div>
      ))}
    </div>
  )
}
