export type ApprovalStatus = 'confirmed' | 'provisional' | 'pending' | 'restricted'

export type ApprovedContent = {
  value: string
  status: ApprovalStatus
  source?: string
  approvedAt?: string
  approvedBy?: string
}

export type TechnicalRequestType =
  | 'technical_presentation'
  | 'technical_sample'
  | 'stock_planning'
  | 'personal_project'
  | 'commercial_contact'

export type ProductLine = {
  id: string
  name: 'Galanta Ortho'
  slug: 'galanta-ortho'
  description: string
  status: 'development' | 'evaluation' | 'active' | 'archived'
}

export type ProductCategory = {
  id: string
  lineId: string
  name: string
  slug: string
  description: string
  shortDescription: string
  audience: readonly string[]
  requestTypes: readonly TechnicalRequestType[]
  seoTitle: string
  seoDescription: string
  status: 'placeholder' | 'active' | 'archived'
  active: boolean
  order: number
}

export type ProductImage = {
  src: string
  alt: string
  width?: number
  height?: number
  type?: 'gallery' | 'hero' | 'detail' | 'technical'
  status: 'placeholder' | 'approved'
}

export type ProductVariationOption = {
  id: string
  label: string
  value: string
  status: ApprovalStatus
}

export type ProductVariation = {
  id: string
  kind: 'size' | 'side' | 'model' | 'version' | 'configuration'
  label: string
  status: ApprovalStatus
  required: boolean
  options: readonly ProductVariationOption[]
}

export type TechnicalSpecification = {
  id: string
  label: string
  content: ApprovedContent
  group: 'product' | 'adaptation' | 'care' | 'regulatory'
}

export type TechnicalDocument = {
  id: string
  title: string
  kind: 'datasheet' | 'protocol' | 'safety' | 'regulatory' | 'guide'
  version: string
  status: 'draft' | 'approved' | 'retired'
  publishedAt?: string
  storagePath?: string
  publicUrl?: string
}

export type OrthoProduct = {
  id: string
  lineId: string
  categoryId: string
  name: string
  slug: string
  modelCode?: string
  status: 'placeholder' | 'development' | 'technical_evaluation' | 'commercial'
  shortDescription: string
  intendedPurpose?: ApprovedContent
  professionalAudience: readonly string[]
  specifications: readonly TechnicalSpecification[]
  variations: readonly ProductVariation[]
  documents: readonly TechnicalDocument[]
  images: readonly ProductImage[]
  requestTypes: readonly TechnicalRequestType[]
  regulatoryNotice: string
  faq: readonly { question: string; answer: string }[]
  seoTitle: string
  seoDescription: string
  price?: number
  active: boolean
}
