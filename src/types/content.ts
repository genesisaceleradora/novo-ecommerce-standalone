export type ContentStatus = 'confirmed' | 'development' | 'validation' | 'pending' | 'restricted'

export type NavigationItem = {
  href: string
  label: string
}

export type NavigationGroup = {
  title: string
  items: readonly NavigationItem[]
}

export type ContentCard = {
  description: string
  href?: string
  label?: string
  status?: ContentStatus
  title: string
}

export type ProcessStep = {
  description: string
  title: string
}

export type FAQItem = {
  answer: string
  question: string
}

export type TechnicalMaterialSummary = {
  description: string
  kind: string
  status: ContentStatus
  title: string
}

export type RegulatoryTopic = {
  status: ContentStatus
  topic: string
  value: string
}
