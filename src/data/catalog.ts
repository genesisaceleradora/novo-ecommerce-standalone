import type {
  ApprovalStatus,
  OrthoProduct,
  ProductCategory,
  ProductLine,
  TechnicalRequestType,
} from '@/types/catalog'

export const galantaOrthoLine: ProductLine = {
  id: 'line-galanta-ortho',
  name: 'Galanta Ortho',
  slug: 'galanta-ortho',
  description: 'Linha inicial Galanta Medical para estruturar soluções Standard e Personal voltadas à avaliação profissional.',
  status: 'development',
}

export const catalogCategories: readonly ProductCategory[] = [
  {
    id: 'category-standard',
    lineId: galantaOrthoLine.id,
    name: 'Linha Standard',
    slug: 'linha-standard',
    description: 'Estrutura planejada para modelos padronizados e futuras configurações de tamanho, lado e versão.',
    shortDescription: 'Modelos e configurações finais permanecem a confirmar.',
    audience: ['Profissionais de saúde', 'Clínicas', 'Hospitais', 'Pontos de atendimento'],
    requestTypes: ['technical_presentation', 'technical_sample', 'stock_planning', 'commercial_contact'],
    seoTitle: 'Catálogo Linha Standard | Galanta Ortho',
    seoDescription: 'Estrutura de catálogo profissional da Linha Standard Galanta Ortho, com especificações ainda em validação.',
    status: 'placeholder',
    active: true,
    order: 1,
  },
  {
    id: 'category-personal',
    lineId: galantaOrthoLine.id,
    name: 'Linha Personal',
    slug: 'linha-personal',
    description: 'Estrutura para soluções Personal em casos selecionados, condicionada a requisitos e avaliação profissional.',
    shortDescription: 'Critérios, informações necessárias e processo técnico permanecem em validação.',
    audience: ['Profissionais de saúde', 'Clínicas', 'Hospitais'],
    requestTypes: ['technical_presentation', 'personal_project', 'commercial_contact'],
    seoTitle: 'Catálogo Linha Personal | Galanta Ortho',
    seoDescription: 'Estrutura de catálogo profissional da Linha Personal Galanta Ortho, sem indicação ou oferta comercial.',
    status: 'placeholder',
    active: true,
    order: 2,
  },
  {
    id: 'category-technical-samples',
    lineId: galantaOrthoLine.id,
    name: 'Amostras Técnicas',
    slug: 'amostras-tecnicas',
    description: 'Área estrutural para futura avaliação profissional de amostras, sujeita a regras e disponibilidade ainda não definidas.',
    shortDescription: 'Nenhuma amostra ou autorização de uso está confirmada nesta fase.',
    audience: ['Profissionais de saúde', 'Clínicas', 'Hospitais', 'Pontos de atendimento'],
    requestTypes: ['technical_presentation', 'technical_sample', 'commercial_contact'],
    seoTitle: 'Amostras Técnicas | Galanta Ortho',
    seoDescription: 'Estrutura demonstrativa para interesse em amostras técnicas Galanta Ortho, sem disponibilidade ou uso confirmado.',
    status: 'placeholder',
    active: true,
    order: 3,
  },
  {
    id: 'category-technical-materials',
    lineId: galantaOrthoLine.id,
    name: 'Materiais Técnicos',
    slug: 'materiais-tecnicos',
    description: 'Estrutura para documentos técnicos versionados e aprovados relacionados à linha Galanta Ortho.',
    shortDescription: 'Documentos públicos serão disponibilizados somente após aprovação aplicável.',
    audience: ['Profissionais de saúde', 'Clínicas', 'Hospitais', 'Pontos de atendimento'],
    requestTypes: ['technical_presentation', 'commercial_contact'],
    seoTitle: 'Materiais Técnicos | Galanta Ortho',
    seoDescription: 'Estrutura de materiais técnicos Galanta Ortho, com publicação condicionada à aprovação aplicável.',
    status: 'placeholder',
    active: true,
    order: 4,
  },
]

const pendingSpecifications = [
  { id: 'material', label: 'Material', content: { value: 'A confirmar', status: 'pending' as const }, group: 'product' as const },
  { id: 'adaptation', label: 'Método de adaptação', content: { value: 'Informação técnica em validação', status: 'restricted' as const }, group: 'adaptation' as const },
  { id: 'protocol', label: 'Parâmetros do protocolo', content: { value: 'Não publicados', status: 'restricted' as const }, group: 'adaptation' as const },
  { id: 'care', label: 'Cuidados e conservação', content: { value: 'A confirmar', status: 'pending' as const }, group: 'care' as const },
  { id: 'cleaning', label: 'Limpeza', content: { value: 'A confirmar', status: 'pending' as const }, group: 'care' as const },
  { id: 'storage', label: 'Armazenamento', content: { value: 'A confirmar', status: 'pending' as const }, group: 'care' as const },
  { id: 'traceability', label: 'Rastreabilidade', content: { value: 'Estrutura futura', status: 'provisional' as const }, group: 'regulatory' as const },
  { id: 'regulatory', label: 'Situação regulatória', content: { value: 'Informação em validação', status: 'pending' as const }, group: 'regulatory' as const },
] as const

export const catalogProducts: readonly OrthoProduct[] = [
  {
    id: 'ortho-standard-development',
    lineId: galantaOrthoLine.id,
    categoryId: 'category-standard',
    name: 'Produto Galanta Ortho Standard — especificação a confirmar',
    slug: 'galanta-ortho-standard-desenvolvimento',
    status: 'development',
    shortDescription: 'Registro estrutural para validar o catálogo Standard enquanto modelo e especificações permanecem pendentes.',
    intendedPurpose: { value: 'Finalidade pretendida em validação', status: 'pending' },
    professionalAudience: ['Profissionais de saúde', 'Clínicas', 'Hospitais', 'Pontos de atendimento'],
    specifications: [
      { id: 'standard-size', label: 'Tamanhos', content: { value: 'Opções finais a confirmar', status: 'pending' }, group: 'product' },
      { id: 'standard-side', label: 'Lados', content: { value: 'Opções finais a confirmar', status: 'pending' }, group: 'product' },
      ...pendingSpecifications,
    ],
    variations: [
      {
        id: 'standard-size-structure',
        kind: 'size',
        label: 'Tamanho — demonstração estrutural',
        status: 'pending',
        required: true,
        options: [
          { id: 'size-placeholder-a', label: 'Placeholder A', value: 'placeholder-a', status: 'pending' },
          { id: 'size-placeholder-b', label: 'Placeholder B', value: 'placeholder-b', status: 'pending' },
        ],
      },
      {
        id: 'standard-side-structure',
        kind: 'side',
        label: 'Lado — demonstração estrutural',
        status: 'pending',
        required: true,
        options: [
          { id: 'side-placeholder-a', label: 'Placeholder A', value: 'placeholder-a', status: 'pending' },
          { id: 'side-placeholder-b', label: 'Placeholder B', value: 'placeholder-b', status: 'pending' },
        ],
      },
    ],
    documents: [
      { id: 'standard-datasheet-draft', title: 'Ficha técnica — conteúdo a confirmar', kind: 'datasheet', version: 'Não publicada', status: 'draft' },
      { id: 'standard-protocol-draft', title: 'Protocolo — conteúdo em validação', kind: 'protocol', version: 'Não publicada', status: 'draft' },
    ],
    images: [
      { src: '/images/placeholders/galanta-ortho-standard.svg', alt: 'Composição geométrica identificada como placeholder visual da futura Linha Standard', type: 'hero', status: 'placeholder' },
      { src: '/images/placeholders/galanta-ortho-detail.svg', alt: 'Composição técnica abstrata identificada como placeholder de detalhe', type: 'detail', status: 'placeholder' },
    ],
    requestTypes: ['technical_presentation', 'technical_sample', 'stock_planning', 'commercial_contact'],
    regulatoryNotice: 'Produto/modelo e especificações a confirmar. Esta página não constitui indicação clínica, instrução de uso ou oferta comercial.',
    faq: [
      { question: 'Os tamanhos e lados exibidos são opções finais?', answer: 'Não. Os controles demonstram apenas a capacidade técnica da interface. As opções comerciais permanecem a confirmar.' },
      { question: 'Existe preço ou disponibilidade?', answer: 'Não. Preço, estoque, prazo e condição comercial não estão definidos nesta fase.' },
    ],
    seoTitle: 'Produto Standard em desenvolvimento | Galanta Ortho',
    seoDescription: 'Estrutura demonstrativa de produto Standard Galanta Ortho, com modelo, finalidade e especificações ainda em validação.',
    active: true,
  },
  {
    id: 'ortho-personal-development',
    lineId: galantaOrthoLine.id,
    categoryId: 'category-personal',
    name: 'Produto Galanta Ortho Personal — especificação a confirmar',
    slug: 'galanta-ortho-personal-desenvolvimento',
    status: 'development',
    shortDescription: 'Registro estrutural para validar o catálogo Personal sem antecipar elegibilidade, finalidade ou requisitos técnicos.',
    intendedPurpose: { value: 'Finalidade pretendida em validação', status: 'pending' },
    professionalAudience: ['Profissionais de saúde', 'Clínicas', 'Hospitais'],
    specifications: [
      { id: 'personal-model', label: 'Modelo', content: { value: 'A confirmar', status: 'pending' }, group: 'product' },
      { id: 'personal-requirements', label: 'Requisitos técnicos', content: { value: 'Informação em validação', status: 'restricted' }, group: 'product' },
      ...pendingSpecifications,
    ],
    variations: [
      {
        id: 'personal-configuration-structure',
        kind: 'configuration',
        label: 'Configuração — demonstração estrutural',
        status: 'pending',
        required: true,
        options: [
          { id: 'personal-placeholder-a', label: 'Placeholder A', value: 'placeholder-a', status: 'pending' },
          { id: 'personal-placeholder-b', label: 'Placeholder B', value: 'placeholder-b', status: 'pending' },
        ],
      },
    ],
    documents: [
      { id: 'personal-guide-draft', title: 'Guia de requisitos — conteúdo a confirmar', kind: 'guide', version: 'Não publicada', status: 'draft' },
      { id: 'personal-safety-draft', title: 'Informações de segurança — em validação', kind: 'safety', version: 'Não publicada', status: 'draft' },
    ],
    images: [
      { src: '/images/placeholders/galanta-ortho-personal.svg', alt: 'Composição geométrica identificada como placeholder visual da futura Linha Personal', type: 'hero', status: 'placeholder' },
      { src: '/images/placeholders/galanta-ortho-detail.svg', alt: 'Composição técnica abstrata identificada como placeholder de detalhe', type: 'detail', status: 'placeholder' },
    ],
    requestTypes: ['technical_presentation', 'personal_project', 'commercial_contact'],
    regulatoryNotice: 'Produto/modelo e requisitos a confirmar. Esta página não solicita dados clínicos e não constitui indicação, instrução de uso ou oferta comercial.',
    faq: [
      { question: 'Quais informações serão necessárias?', answer: 'Os requisitos ainda estão em validação. O MVP não solicita nomes, documentos, fotografias ou informações identificáveis de pacientes.' },
      { question: 'A opção Personal está disponível para uso?', answer: 'Disponibilidade, finalidade, elegibilidade e uso permitido permanecem a confirmar pela equipe responsável.' },
    ],
    seoTitle: 'Produto Personal em desenvolvimento | Galanta Ortho',
    seoDescription: 'Estrutura demonstrativa de produto Personal Galanta Ortho, sem indicação, requisitos clínicos ou oferta comercial.',
    active: true,
  },
]

export const approvalStatusLabels: Record<ApprovalStatus, string> = {
  confirmed: 'Confirmado',
  provisional: 'Provisório',
  pending: 'A confirmar',
  restricted: 'Não publicado',
}

export const requestTypeLabels: Record<TechnicalRequestType, string> = {
  technical_presentation: 'Apresentação técnica',
  technical_sample: 'Avaliação de amostra',
  stock_planning: 'Planejamento de estoque',
  personal_project: 'Projeto Personal',
  commercial_contact: 'Contato comercial',
}

export const legacyProductAliases: Readonly<Record<string, string>> = {
  'produto-personalizado-exemplo': 'galanta-ortho-personal-desenvolvimento',
  'produto-data-especial-exemplo': 'galanta-ortho-standard-desenvolvimento',
}

export const legacyCategoryAliases: Readonly<Record<string, string>> = {
  personalizados: 'linha-personal',
  'datas-especiais': 'linha-standard',
}

export function getCatalogCategoryBySlug(slug: string) {
  return catalogCategories.find((category) => category.slug === slug && category.active)
}

export function getCatalogCategoryById(id: string) {
  return catalogCategories.find((category) => category.id === id && category.active)
}

export function getCatalogProductBySlug(slug: string) {
  return catalogProducts.find((product) => product.slug === slug && product.active)
}

export function getCatalogProductsByCategory(categoryId: string) {
  return catalogProducts.filter((product) => product.active && product.categoryId === categoryId)
}

export function getRelatedCatalogProducts(product: OrthoProduct) {
  return catalogProducts.filter((candidate) => candidate.active && candidate.id !== product.id)
}
