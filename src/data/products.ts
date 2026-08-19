import type { Product } from '@/types'

// Dados de exemplo baseados em seed/products.example.json. Produtos, preços e imagens são demonstrativos.
export const products: Product[] = [
  {
    id: 'prod-exemplo-personalizado',
    name: 'Produto Personalizado Exemplo',
    slug: 'produto-personalizado-exemplo',
    categorySlug: 'personalizados',
    badge: 'Exemplo',
    shortDescription: 'Produto placeholder para validar a estrutura de ecommerce.',
    longDescription: 'Este produto é apenas um exemplo temporário. Substituir pelo produto real quando for definido.',
    price: 19990,
    pixDiscountPercent: 5,
    installmentMax: 6,
    images: [
      { src: '/images/placeholders/produto-exemplo-1.jpg', alt: 'Produto personalizado exemplo — imagem placeholder', type: 'gallery' },
      { src: '/images/placeholders/produto-exemplo-2.jpg', alt: 'Detalhe do produto exemplo — imagem placeholder', type: 'detail' },
    ],
    personalization: {
      enabled: true,
      fields: { name: true, phrase: true, notes: true, imageUpload: true },
      requiredFields: ['name'],
      instructions: 'Envie os dados de personalização para simular o fluxo.',
    },
    productionTime: 'Produção média: 3 dias úteis (placeholder herdado da Eternize; revisar).',
    shippingInfo: 'Envio para todo o Brasil (placeholder; revisar regra comercial).',
    whatsIncluded: ['Produto personalizado (exemplo)', 'Embalagem (a definir)', 'Suporte de atendimento (a definir)'],
    benefits: ['Presente com significado', 'Produção cuidadosa', 'Compra segura'],
    faq: [{ question: 'Este produto é real?', answer: 'Ainda não. Este é um produto placeholder para desenvolvimento.' }],
    seoTitle: 'Produto personalizado exemplo | A definir',
    seoDescription: 'Produto placeholder para estrutura do novo ecommerce standalone.',
    active: true,
  },
  {
    id: 'prod-exemplo-datas-especiais',
    name: 'Produto para Data Especial Exemplo',
    slug: 'produto-data-especial-exemplo',
    categorySlug: 'datas-especiais',
    badge: 'Exemplo',
    shortDescription: 'Segundo produto mockado para validar categorias e produtos relacionados.',
    longDescription: 'Este é um produto demonstrativo, criado somente para validar a experiência de catálogo antes da definição do produto final.',
    price: 19990,
    pixDiscountPercent: 5,
    installmentMax: 6,
    images: [{ src: '/images/placeholders/produto-data-especial.jpg', alt: 'Produto para data especial exemplo — imagem placeholder', type: 'gallery' }],
    personalization: { enabled: false, fields: {} },
    productionTime: 'Prazo de produção a definir.',
    shippingInfo: 'Regra de envio a definir.',
    benefits: ['Produto demonstrativo', 'Conteúdo provisório', 'Estrutura reutilizável'],
    faq: [{ question: 'Qual é o preço final?', answer: 'O preço exibido é apenas um dado mockado de desenvolvimento.' }],
    seoTitle: 'Produto para data especial exemplo | A definir',
    seoDescription: 'Produto mockado para a estrutura do novo ecommerce standalone.',
    active: true,
  },
]

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug && product.active)
}

export function getRelatedProducts(product: Product) {
  return products.filter((item) => item.active && item.id !== product.id)
}
