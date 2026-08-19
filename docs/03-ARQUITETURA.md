# 03 — Arquitetura Técnica

## 1. Stack

```txt
Framework: Next.js
Linguagem: TypeScript
Estilo: Tailwind CSS
Rotas: App Router
Banco sugerido: Supabase/PostgreSQL
Storage sugerido: Supabase Storage, S3 ou Cloudflare R2
Pagamento: Pagar.me
Deploy futuro: Vercel
```

## 2. Estrutura esperada

```txt
/src
  /app
    /(site)
    /admin
    /api
  /components
  /data
  /hooks
  /lib
    /payments
    /tracking
    /seo
    /utils
    /storage
  /server
  /styles
  /types
```

## 3. Organização por responsabilidade

### `/app`

Rotas e páginas.

### `/components`

Componentes reutilizáveis de interface.

### `/data`

Dados mockados iniciais. Deve ser fácil migrar para banco.

### `/lib/payments`

Integração com Pagar.me.

### `/lib/tracking`

Meta Pixel, GA4, GTM e UTMs.

### `/lib/seo`

Metadados, schema, sitemap helpers.

### `/server`

Funções server-side, serviços e validações.

### `/types`

Tipos globais.

## 4. Princípios

- Dados sensíveis somente em server-side.
- Nada de keys privadas no client.
- Tracking centralizado.
- Checkout desacoplado.
- Produtos e categorias com modelo claro.
- Personalização modular.
- Upload seguro.
- Mobile first.

## 5. Camadas sugeridas

```txt
UI Components → Feature Components → Page Routes → Server Actions/API → External Services
```

## 6. Estado do carrinho

No MVP:

- Zustand ou React Context.
- Persistência em localStorage.
- Carrinho lateral.
- Dados de personalização dentro do item.

Depois:

- Sincronização com banco para pedidos iniciados.

## 7. Validações

Usar validação com Zod ou equivalente para:

- Formulários de checkout.
- Personalização.
- Uploads.
- Dados de pedido.
- Webhooks.

## 8. Segurança

- Não expor imagens pessoais publicamente.
- Não expor API keys.
- Validar webhooks.
- Sanitizar inputs de usuário.
- Proteger admin.
- Evitar logs com dados sensíveis.

## 9. Performance

- Usar next/image.
- Lazy loading em imagens não críticas.
- Otimizar banners.
- Evitar bibliotecas pesadas sem necessidade.
- Bundle limpo.
- Lighthouse mobile como referência.

## 10. Padrão de dados mockados

Até existir banco, usar arquivos em `/src/data`:

```txt
categories.ts
products.ts
reviews.ts
faqs.ts
benefits.ts
```

Esses dados devem seguir os tipos definidos em `/src/types`.
