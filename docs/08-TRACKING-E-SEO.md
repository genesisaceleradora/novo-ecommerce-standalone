# 08 — Tracking e SEO

## 1. Objetivo

O ecommerce deve nascer preparado para tráfego pago, mensuração, SEO e remarketing, evitando duplicidade de pixels e scripts.

## 2. Tracking centralizado

Criar arquivos:

```txt
/src/lib/tracking/meta.ts
/src/lib/tracking/ga4.ts
/src/lib/tracking/gtm.ts
/src/lib/tracking/utm.ts
/src/components/TrackingProvider.tsx
```

## 3. Eventos obrigatórios

```txt
PageView
ViewContent
AddToCart
InitiateCheckout
Purchase
Lead WhatsApp
Search
UploadStarted
UploadCompleted
```

## 4. Regras do Meta Pixel

- Carregar apenas uma vez.
- Não duplicar scripts.
- Disparar eventos por função centralizada.
- `Purchase` apenas após pagamento confirmado.
- Passar value e currency quando aplicável.

## 5. Regras GA4/GTM

- Preparar envio de eventos equivalentes.
- Capturar UTMs.
- Preservar UTMs no checkout.
- Associar pedido com origem da campanha.

## 6. UTM

Capturar e persistir:

```txt
utm_source
utm_medium
utm_campaign
utm_content
utm_term
fbclid
gclid
```

## 7. SEO técnico

Obrigatório:

- Title.
- Meta description.
- Canonical.
- Open Graph.
- Twitter Card.
- Robots.txt.
- Sitemap.xml.
- Schema Product.
- Schema Organization.
- Schema Breadcrumb.

## 8. Canonical local

Enquanto não houver domínio definitivo:

```txt
http://localhost:3000
```

## 9. URLs

- Slugs em português sem acentos.
- URLs curtas.
- Não usar query para páginas indexáveis.

## 10. Schema de produto

Quando produtos reais existirem, adicionar:

```txt
name
description
image
offers.price
offers.priceCurrency = BRL
availability
brand
aggregateRating, somente se houver dados reais
```

## 11. Conteúdo SEO

Cada categoria deve ter:

- H1 único.
- Texto introdutório.
- Produtos.
- FAQ.
- Meta title.
- Meta description.

## 12. Performance

- Imagens otimizadas.
- Lazy loading.
- Menos JS possível.
- Mobile first.
- Lighthouse como referência.
