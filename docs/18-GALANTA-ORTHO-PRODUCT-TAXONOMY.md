# 18 — Taxonomia de Produto Galanta Ortho

## 1. Objetivo

Definir uma estrutura configurável de catálogo que permita desenvolver a plataforma antes das fichas finais, sem inventar produtos ou claims.

## 2. Hierarquia

```txt
Galanta Medical
└── Galanta Ortho
    ├── Linha Standard
    ├── Linha Personal
    ├── Amostras Técnicas
    └── Materiais Técnicos
```

Acessórios e reposição permanecem como categoria futura.

## 3. Entidades

### Linha

```ts
type ProductLine = {
  id: string
  name: 'Galanta Ortho'
  slug: 'galanta-ortho'
  description: string
  status: 'development' | 'evaluation' | 'active' | 'archived'
}
```

### Categoria

```ts
type ProductCategory = {
  id: string
  lineId: string
  name: string
  slug: string
  description: string
  audience: string[]
  requestTypes: TechnicalRequestType[]
  active: boolean
  order: number
}
```

### Produto

Modelo conceitual futuro:

```ts
type OrthoProduct = {
  id: string
  lineId: string
  categoryId: string
  name: string
  slug: string
  modelCode?: string
  status: 'placeholder' | 'development' | 'technical_evaluation' | 'commercial'
  shortDescription: string
  intendedPurpose?: ApprovedContent
  professionalAudience: string[]
  specifications: TechnicalSpecification[]
  variations: ProductVariation[]
  documents: TechnicalDocument[]
  requestTypes: TechnicalRequestType[]
  regulatoryNotice: string
  seoTitle: string
  seoDescription: string
  active: boolean
}
```

Os tipos acima foram implementados em `src/types/catalog.ts` na Fase 4. Informações técnicas pendentes continuam representadas por conteúdo tipado com status explícito.

## 4. Variações

Estrutura preparada para:

- tamanho;
- lado;
- modelo;
- versão;
- configuração Standard/Personal;
- status de disponibilidade.

Valores como `PP`, `P`, `M`, `G`, `GG`, direito, esquerdo ou bilateral só serão catálogo final quando confirmados. Até lá, demonstrar a capacidade do sistema sem apresentar as opções como oferta real.

## 5. Especificações técnicas

Campos configuráveis:

```txt
Finalidade pretendida
Público profissional
Material
Tamanhos
Lado
Método de adaptação
Parâmetros do protocolo
Cuidados
Limpeza
Armazenamento
Rastreabilidade
Status regulatório
```

Cada campo deve suportar:

```txt
value
status: confirmed | provisional | pending | restricted
source
approvedAt
approvedBy
```

## 6. Documentos técnicos

```ts
type TechnicalDocument = {
  id: string
  title: string
  kind: 'datasheet' | 'protocol' | 'safety' | 'regulatory' | 'guide'
  version: string
  status: 'draft' | 'approved' | 'retired'
  publishedAt?: string
  storagePath?: string
  publicUrl?: string
}
```

Somente documentos aprovados podem ter URL pública. Materiais restritos devem usar storage privado e autorização.

## 7. Tipos de solicitação

```ts
type TechnicalRequestType =
  | 'technical_presentation'
  | 'technical_sample'
  | 'stock_planning'
  | 'personal_project'
  | 'commercial_contact'
```

Produto e categoria definem quais tipos estão disponíveis.

## 8. Catálogo inicial de desenvolvimento

Enquanto o produto exato estiver pendente:

```txt
Nome: Produto Galanta Ortho — especificação a confirmar
Linha: Galanta Ortho
Categoria: Linha Standard ou Linha Personal
Status: Em desenvolvimento
Preço: Sob consulta
Finalidade: Em validação
CTA: Registrar interesse técnico
```

Este registro existe para validar interface e arquitetura, não para publicação comercial.

## 9. Página de produto

Ordem recomendada:

1. linha, status e aviso;
2. nome/modelo;
3. resumo aprovado;
4. galeria ou placeholder;
5. configuração disponível;
6. CTA de solicitação;
7. finalidade pretendida;
8. especificações;
9. adaptação e cuidados;
10. documentos;
11. compliance;
12. FAQ profissional;
13. itens relacionados.

Seções sem conteúdo aprovado devem exibir `A confirmar` ou ser ocultadas sem quebrar o layout.

## 10. Cards e listagem

Cards devem mostrar linha, nome, status, resumo e CTA. Não devem mostrar preço, parcelamento, avaliação, estoque ou benefício sem confirmação.

Filtros futuros:

- linha;
- categoria;
- tamanho;
- lado;
- status;
- tipo de solicitação.

## 11. Migração do legado

Status estrutural: concluída em 20/08/2026. O catálogo público usa um domínio Galanta independente; carrinho, checkout e admin permanecem desacoplados até as fases próprias.

- categorias de presentes foram removidas do catálogo público e seus slugs redirecionam;
- personalização afetiva foi substituída por configuração técnica nas páginas públicas de produto;
- `price` é opcional no domínio Galanta e não está preenchido nos mocks;
- `variations`, especificações e documentos possuem contratos próprios;
- carrinho será convertido em seleção para solicitação;
- dados persistidos no `localStorage` devem usar uma nova versão/chave para não importar itens legados.
