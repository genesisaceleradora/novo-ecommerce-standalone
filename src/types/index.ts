export type FAQItem = {
  question: string
  answer: string
}

export type ProductImage = {
  src: string
  alt: string
  width?: number
  height?: number
  type?: 'gallery' | 'hero' | 'detail' | 'mobile'
}

export type PersonalizationConfig = {
  enabled: boolean
  fields: {
    name?: boolean
    phrase?: boolean
    date?: boolean
    notes?: boolean
    imageUpload?: boolean
    multipleImageUpload?: boolean
    musicLink?: boolean
    dedication?: boolean
  }
  requiredFields?: string[]
  instructions?: string
}

export type Category = {
  id: string
  name: string
  slug: string
  eyebrow?: string
  description: string
  shortDescription?: string
  heroImage?: string
  mobileHeroImage?: string
  seoTitle: string
  seoDescription: string
  active: boolean
  order: number
}

export type Product = {
  id: string
  name: string
  slug: string
  categorySlug: string
  badge?: string
  shortDescription: string
  longDescription: string
  price: number
  compareAtPrice?: number
  pixDiscountPercent?: number
  installmentMax: number
  images: ProductImage[]
  personalization: PersonalizationConfig
  productionTime: string
  shippingInfo: string
  whatsIncluded?: string[]
  benefits?: string[]
  faq?: FAQItem[]
  seoTitle: string
  seoDescription: string
  active: boolean
}
