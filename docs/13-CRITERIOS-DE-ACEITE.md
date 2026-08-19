# 13 — Critérios de Aceite

## 1. Geral

- Projeto roda localmente.
- Build funciona.
- Layout é responsivo.
- Header e footer aparecem corretamente.
- Home carrega sem erros.
- Não há Base44.
- Não há dados sensíveis hardcoded.

## 2. Home

- Hero aparece em desktop e mobile.
- Categorias aparecem.
- Produtos em destaque aparecem.
- Seção como funciona aparece.
- FAQ aparece.
- CTA funciona.

## 3. Categoria

- URL `/categoria/[slug]` funciona.
- Exibe banner, descrição e produtos.
- Trata categoria inexistente.

## 4. Produto

- URL `/produto/[slug]` funciona.
- Exibe galeria, preço, CTA, informações e FAQ.
- Personalização aparece somente quando ativada.

## 5. Carrinho

- Adiciona item.
- Remove item.
- Altera quantidade.
- Mantém estado no localStorage.
- Exibe subtotal.

## 6. Checkout

- Exibe itens do carrinho.
- Coleta dados do cliente.
- Coleta endereço.
- Prepara payload para Pagar.me.
- Não expõe secret key no client.

## 7. Pagar.me

- Camada de pagamento isolada.
- API route server-side.
- Webhook route criada.
- Eventos idempotentes previstos.

## 8. Tracking

- Scripts não duplicados.
- Eventos centralizados.
- Purchase não dispara antes de confirmação.

## 9. SEO

- Metadados existem.
- Sitemap e robots existem.
- Product schema preparado.

## 10. Admin

- Protegido por senha.
- Lista pedidos.
- Exibe detalhes.
- Permite alteração de status no MVP.
