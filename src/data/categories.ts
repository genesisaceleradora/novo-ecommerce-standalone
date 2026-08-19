import type { Category } from '@/types'

// Dados de exemplo baseados em seed/categories.example.json. Substituir antes da publicação.
export const categories: Category[] = [
  {
    id: 'cat-personalizados',
    name: 'Personalizados',
    slug: 'personalizados',
    eyebrow: 'Coleção personalizada',
    description: 'Produtos criados para transformar momentos em presentes com significado.',
    shortDescription: 'Presentes com personalização e emoção.',
    heroImage: '/images/placeholders/category-personalizados-desktop.jpg',
    mobileHeroImage: '/images/placeholders/category-personalizados-mobile.jpg',
    seoTitle: 'Presentes personalizados | A definir',
    seoDescription: 'Produtos personalizados criados para emocionar e eternizar momentos especiais.',
    active: true,
    order: 1,
  },
  {
    id: 'cat-datas-especiais',
    name: 'Datas Especiais',
    slug: 'datas-especiais',
    eyebrow: 'Momentos especiais',
    description: 'Produtos para surpreender em datas importantes.',
    shortDescription: 'Presentes para datas que merecem memória.',
    heroImage: '/images/placeholders/category-datas-desktop.jpg',
    mobileHeroImage: '/images/placeholders/category-datas-mobile.jpg',
    seoTitle: 'Presentes para datas especiais | A definir',
    seoDescription: 'Produtos premium e emocionais para presentear em datas especiais.',
    active: true,
    order: 2,
  },
]

export function getCategoryBySlug(slug: string) {
  return categories.find((category) => category.slug === slug && category.active)
}
