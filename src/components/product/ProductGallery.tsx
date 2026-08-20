import type { ProductImage } from '@/types'

type ProductGalleryProps = { images: ProductImage[]; productName: string }

export function ProductGallery({ images, productName }: ProductGalleryProps) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4">
      {images.map((image, index) => (
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-mist bg-graphite p-5" key={image.src}>
          <div aria-hidden="true" className="absolute inset-0 [background-image:linear-gradient(rgb(216_225_232_/_0.08)_1px,transparent_1px),linear-gradient(90deg,rgb(216_225_232_/_0.08)_1px,transparent_1px)] [background-size:28px_28px]" />
          <div aria-hidden="true" className="absolute left-[22%] top-[25%] size-28 rotate-12 rounded-[2rem] border border-cyan/35 sm:size-36" />
          <span className="relative rounded-full border border-mist/25 bg-galanta-black/70 px-3 py-1 font-technical text-[9px] font-semibold uppercase tracking-[0.12em] text-mist">Ativo visual pendente</span>
          <p className="absolute bottom-5 left-5 right-5 font-technical text-[10px] uppercase leading-5 tracking-[0.1em] text-mist/65">{productName} · área reservada {index + 1}</p>
          <span className="sr-only">{image.alt}</span>
        </div>
      ))}
    </div>
  )
}
