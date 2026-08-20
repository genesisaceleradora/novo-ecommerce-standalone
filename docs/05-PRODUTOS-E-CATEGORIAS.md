# 05 — Produtos e Categorias Galanta Ortho

## 1. Estado atual

```txt
Fase 4: concluída em 20/08/2026
Domínio tipado: implementado em src/types/catalog.ts
Dados estruturais: implementados em src/data/catalog.ts
Catálogo final aprovado: pendente
```

```txt
Marca: Galanta Medical — final
Linha: Galanta Ortho — final
Produto/modelo: a confirmar
Especificações: a confirmar
Preço: sob consulta
Catálogo final: a confirmar
```

Pendências não bloqueiam a arquitetura. O catálogo mockado deve representar estrutura, não oferta.

## 2. Categorias alvo

```txt
Linha Standard
Linha Personal
Amostras Técnicas
Materiais Técnicos
```

Futura: acessórios e reposição.

## 3. Modelo de categoria

```ts
type Category = {
  id: string
  lineSlug: string
  name: string
  slug: string
  description: string
  professionalAudience: string[]
  requestTypes: TechnicalRequestType[]
  seoTitle: string
  seoDescription: string
  status: 'placeholder' | 'active' | 'archived'
  order: number
}
```

## 4. Modelo de produto alvo

```ts
type Product = {
  id: string
  lineSlug: string
  categorySlug: string
  name: string
  slug: string
  modelCode?: string
  status: 'placeholder' | 'development' | 'technical_evaluation' | 'commercial'
  shortDescription: string
  intendedPurpose?: ApprovedContent
  professionalAudience: string[]
  specifications: TechnicalSpecification[]
  variations: ProductVariation[]
  requestTypes: TechnicalRequestType[]
  documents: TechnicalDocument[]
  images: ProductImage[]
  regulatoryNotice: string
  price?: number
  seoTitle: string
  seoDescription: string
  active: boolean
}
```

Preço permanece opcional e não deve aparecer enquanto o produto não estiver comercial.

## 5. Conteúdo aprovado

```ts
type ApprovedContent = {
  value: string
  status: 'confirmed' | 'provisional' | 'pending' | 'restricted'
  source?: string
  approvedAt?: string
  approvedBy?: string
}
```

## 6. Imagens

```ts
type ProductImage = {
  src: string
  alt: string
  width?: number
  height?: number
  type?: 'gallery' | 'hero' | 'detail' | 'technical'
  status: 'placeholder' | 'approved'
}
```

Não usar imagens geradas ou de terceiros como se fossem produto/evidência Galanta.

## 7. Configuração técnica

Variações podem suportar tamanho, lado, modelo e versão. Valores finais só entram após confirmação. Personalização afetiva de nome, frase, data, foto e música será removida deste domínio.

## 8. Produto mockado seguro

```txt
Produto Galanta Ortho — especificação a confirmar
Status: Em desenvolvimento
Linha: Standard ou Personal
Finalidade: Informação técnica em validação
Preço: Sob consulta
CTA: Registrar interesse técnico
```

## 9. Página de produto

- linha/status;
- nome/modelo;
- aviso de desenvolvimento;
- resumo aprovado;
- imagens/placeholder;
- configuração disponível;
- CTA técnico;
- finalidade;
- especificações;
- cuidados/protocolo quando aprovados;
- documentos;
- aviso regulatório;
- FAQ;
- relacionados.

## 10. Regras

- não vender a paciente final;
- não inventar preço, estoque ou prazo;
- não exibir avaliações fictícias;
- não publicar claim ou protocolo pendente;
- status deve ser visível;
- campos vazios usam placeholder ou são ocultados;
- schema acompanha o mesmo nível de aprovação da página.

Consultar `18-GALANTA-ORTHO-PRODUCT-TAXONOMY.md` para a modelagem completa.

## 11. Implementação estrutural

- `/produtos` apresenta categorias e registros estruturais;
- `/categoria/[slug]` suporta Standard, Personal, Amostras Técnicas e Materiais Técnicos;
- `/produto/[slug]` apresenta status, galeria placeholder, variações demonstrativas, especificações, documentos, avisos, FAQ e relacionados;
- slugs antigos redirecionam para os registros Galanta correspondentes;
- o novo catálogo não importa preço, personalização afetiva ou estado do carrinho legado;
- produtos e categorias pendentes permanecem fora do sitemap e com indexação bloqueada;
- nenhum `Offer` é gerado enquanto não existir venda real.
