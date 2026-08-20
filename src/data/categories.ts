import type { Category } from '@/types'

// Estrutura legada mantida somente para preservar as rotas até a migração da Fase 4.
export const categories: Category[] = [
  {
    id: 'cat-personalizados',
    name: 'Categoria demonstrativa Personal',
    slug: 'personalizados',
    eyebrow: 'Estrutura legada em migração',
    description: 'Categoria mockada preservada para validar a rota até a implementação do catálogo Galanta Ortho.',
    shortDescription: 'Conteúdo demonstrativo sujeito à migração técnica.',
    heroImage: '/images/placeholders/category-personalizados-desktop.jpg',
    mobileHeroImage: '/images/placeholders/category-personalizados-mobile.jpg',
    seoTitle: 'Categoria demonstrativa | Galanta Medical',
    seoDescription: 'Estrutura temporária de categoria em migração para o catálogo Galanta Ortho.',
    active: true,
    order: 1,
  },
  {
    id: 'cat-datas-especiais',
    name: 'Categoria demonstrativa Standard',
    slug: 'datas-especiais',
    eyebrow: 'Estrutura legada em migração',
    description: 'Segunda categoria mockada preservada para testes de navegação e produtos relacionados.',
    shortDescription: 'Conteúdo demonstrativo sujeito à migração técnica.',
    heroImage: '/images/placeholders/category-datas-desktop.jpg',
    mobileHeroImage: '/images/placeholders/category-datas-mobile.jpg',
    seoTitle: 'Categoria demonstrativa | Galanta Medical',
    seoDescription: 'Estrutura temporária de categoria em migração para o catálogo Galanta Ortho.',
    active: true,
    order: 2,
  },
]

export function getCategoryBySlug(slug: string) {
  return categories.find((category) => category.slug === slug && category.active)
}
