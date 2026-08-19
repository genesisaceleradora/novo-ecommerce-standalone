# 05 — Produtos e Categorias

## 1. Status atual

```txt
Produto principal: A definir
Categorias finais: A definir
Preços finais: A definir
```

Enquanto não houver definição, usar dados mockados inspirados em produtos personalizados/premium, sem travar o projeto em um produto específico.

## 2. Categorias provisórias herdadas da estrutura Eternize

Essas categorias podem ser usadas como placeholders:

```txt
Personalizados
Pets
Casais
Família
Mães e Bebês
Religiosos
Signos
Lei da Atração
Datas Especiais
Corporativo
```

Se o novo produto não tiver relação com alguma categoria, remover depois.

## 3. Modelo de categoria

```ts
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
```

## 4. Modelo de produto

```ts
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
```

## 5. Modelo de imagem

```ts
export type ProductImage = {
  src: string
  alt: string
  width?: number
  height?: number
  type?: 'gallery' | 'hero' | 'detail' | 'mobile'
}
```

## 6. Modelo de personalização

```ts
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
```

## 7. Página de produto deve exibir

- Título.
- Galeria.
- Preço.
- Parcelamento.
- Pix, se aplicável.
- CTA comprar.
- CTA WhatsApp.
- Campos de personalização, se aplicável.
- Prazo de produção.
- Informações de envio.
- Benefícios.
- FAQ.
- Produtos relacionados.

## 8. Produtos mockados

Usar `seed/products.example.json` como base até que os produtos reais sejam definidos.

## 9. Regras importantes

- Não inventar dados de produto final.
- Não usar imagens definitivas sem confirmação.
- Não criar preço definitivo.
- Todo produto mockado deve deixar claro que é exemplo.
