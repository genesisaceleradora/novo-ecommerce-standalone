import type { Product } from '@/types'

// Estrutura legada mantida somente para preservar os fluxos até as Fases 4 e 5.
export const products: Product[] = [
  {
    id: 'prod-exemplo-personalizado',
    name: 'Produto Galanta Ortho — especificação a confirmar',
    slug: 'produto-personalizado-exemplo',
    categorySlug: 'personalizados',
    badge: 'Informação em validação',
    shortDescription: 'Produto estrutural usado apenas para validar a aplicação enquanto o catálogo técnico é definido.',
    longDescription: 'Produto/modelo e especificações a confirmar. Esta página não constitui indicação clínica, instrução de uso ou oferta comercial.',
    price: 19990,
    pixDiscountPercent: 5,
    installmentMax: 6,
    images: [
      { src: '/images/placeholders/produto-exemplo-1.jpg', alt: 'Área reservada para futuro ativo aprovado — placeholder', type: 'gallery' },
      { src: '/images/placeholders/produto-exemplo-2.jpg', alt: 'Segunda área reservada para futuro ativo aprovado — placeholder', type: 'detail' },
    ],
    personalization: {
      enabled: true,
      fields: { name: true, phrase: true, date: true, notes: true, imageUpload: true, multipleImageUpload: true, musicLink: true },
      requiredFields: ['name'],
      instructions: 'Configuração mockada preservada somente para teste técnico do fluxo legado.',
    },
    productionTime: 'Prazo operacional a confirmar.',
    shippingInfo: 'Condição de disponibilização e envio a confirmar.',
    whatsIncluded: ['Produto/modelo: a confirmar', 'Documentação técnica: a confirmar', 'Atendimento profissional: canal a confirmar'],
    benefits: ['Estrutura configurável', 'Conteúdo provisório', 'Avaliação profissional prevista'],
    faq: [{ question: 'As especificações estão aprovadas?', answer: 'Não. Os dados técnicos e regulatórios permanecem em validação.' }],
    seoTitle: 'Produto em validação | Galanta Medical',
    seoDescription: 'Estrutura temporária de produto para desenvolvimento do portal Galanta Medical.',
    active: true,
  },
  {
    id: 'prod-exemplo-datas-especiais',
    name: 'Produto Galanta Ortho — modelo a confirmar',
    slug: 'produto-data-especial-exemplo',
    categorySlug: 'datas-especiais',
    badge: 'Especificação a confirmar',
    shortDescription: 'Segundo produto estrutural para validar categorias e conteúdos relacionados.',
    longDescription: 'Conteúdo demonstrativo para desenvolvimento. Não representa indicação clínica, instrução ou oferta comercial.',
    price: 19990,
    pixDiscountPercent: 5,
    installmentMax: 6,
    images: [{ src: '/images/placeholders/produto-data-especial.jpg', alt: 'Área reservada para futuro ativo aprovado — placeholder', type: 'gallery' }],
    personalization: { enabled: false, fields: {} },
    productionTime: 'Prazo de produção a definir.',
    shippingInfo: 'Regra de envio a definir.',
    benefits: ['Produto demonstrativo', 'Informação em validação', 'Estrutura reutilizável'],
    faq: [{ question: 'Existe condição comercial definida?', answer: 'Não. Preço, disponibilidade e regras comerciais permanecem sob consulta.' }],
    seoTitle: 'Produto em validação | Galanta Medical',
    seoDescription: 'Estrutura temporária de produto para desenvolvimento do portal Galanta Medical.',
    active: true,
  },
]

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug && product.active)
}

export function getRelatedProducts(product: Product) {
  return products.filter((item) => item.active && item.id !== product.id)
}
