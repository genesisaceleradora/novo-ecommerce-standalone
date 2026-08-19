# 01 — PRD do Novo Ecommerce Standalone

## 1. Resumo

Criar um ecommerce standalone, sem Base44, usando Next.js, TypeScript e Tailwind, com arquitetura escalável para categorias, produtos, personalização, carrinho, checkout Pagar.me, tracking, SEO e painel administrativo simples.

## 2. Objetivo principal

Construir uma base de ecommerce que possa ser replicada para marcas, produtos personalizados, presentes, produtos 3D, colecionáveis, nichos sazonais ou produtos físicos premium.

## 3. Regras fixas

```txt
Nome do projeto: A definir
Produto principal: A definir
Domínio local: http://localhost:3000
Gateway: Pagar.me
Base44: Proibido
Checkout: Preparar arquitetura para Pagar.me
```

## 4. Público inicial provisório

Como o produto ainda não foi definido, considerar como público provisório:

- Pessoas buscando presentes personalizados.
- Pessoas buscando presentes criativos.
- Clientes que compram pela emoção.
- Pessoas que valorizam estética premium.
- Clientes de ecommerce via Meta Ads, Google e Instagram.
- Compradores para datas especiais.
- Compradores para presente de família, casal, pet, religião, signos, prosperidade ou outros nichos, se esses nichos forem mantidos.

## 5. Promessa provisória

```txt
Produtos personalizados criados para transformar momentos em presentes memoráveis.
```

Essa promessa deve ser substituída quando o produto final for definido.

## 6. Estrutura do MVP

O MVP deve conter:

- Home completa.
- Listagem de categorias.
- Página de categoria.
- Página de produto.
- Carrinho lateral.
- Checkout inicial.
- Página de obrigado.
- Formulário de personalização ativável por produto.
- Páginas institucionais.
- SEO básico.
- Tracking centralizado.
- Painel administrativo simples.

## 7. Páginas obrigatórias

```txt
/
/categoria/[slug]
/produto/[slug]
/carrinho
/checkout
/obrigado
/sobre
/faq
/contato
/politica-de-privacidade
/politica-de-troca
/termos-de-uso
/admin
```

## 8. Estrutura da Home

A home deve ter:

1. Topbar de benefícios.
2. Header.
3. Hero principal.
4. Categorias principais.
5. Produtos em destaque.
6. Como funciona.
7. Benefícios.
8. Prova social.
9. Sobre a marca.
10. FAQ.
11. CTA final.
12. Footer.

## 9. Topbar provisória

Usar os dados herdados da Eternize como placeholders até revisão:

```txt
4.9/5 — Avaliação média
+20.000 — Histórias iluminadas/produtos entregues
3 dias úteis — Produção média
100% — Feito no Brasil
6x — Sem juros
```

Observação: esses dados devem ser marcados como provisórios no código/data layer e revisados antes de produção.

## 10. Fluxo de compra

1. Cliente acessa a home ou categoria.
2. Cliente escolhe um produto.
3. Cliente personaliza, se aplicável.
4. Cliente adiciona ao carrinho.
5. Cliente revisa carrinho.
6. Cliente inicia checkout.
7. Cliente paga via Pagar.me.
8. Cliente cai na página de obrigado.
9. Pedido é salvo no banco.
10. Pedido aparece no admin.
11. Webhook atualiza status do pagamento.

## 11. Requisitos de conversão

- CTA visível no primeiro scroll.
- Botões grandes em mobile.
- Preço e parcelamento claros.
- Benefícios próximos do botão.
- WhatsApp de suporte.
- FAQ para objeções.
- Página rápida.
- Checkout simples.
- Imagens responsivas.

## 12. Requisitos de SEO

- Metadados em todas as páginas principais.
- URLs amigáveis.
- Sitemap.
- Robots.
- JSON-LD para produtos.
- Open Graph.
- Alt text.
- Performance mobile.

## 13. Requisitos de tracking

Eventos obrigatórios:

- PageView.
- ViewContent.
- AddToCart.
- InitiateCheckout.
- Purchase.
- Lead WhatsApp.
- Search.
- UploadStarted.
- UploadCompleted.

## 14. Requisitos de personalização

A personalização deve ser modular e ativável por produto.

Campos possíveis:

- Nome.
- Frase.
- Data.
- Observações.
- Upload de imagem.
- Upload de múltiplas imagens.
- Dedicatória.
- Aprovação de prévia, se aplicável.

## 15. Requisitos de admin

Admin MVP:

- Login simples por senha via env.
- Listagem de pedidos.
- Detalhes do pedido.
- Dados do cliente.
- Status do pedido.
- Arquivos enviados.
- Campo de rastreio.
- Alteração de status.

## 16. Não escopo do MVP

- Marketplace.
- Login completo de cliente.
- Painel avançado com permissões.
- CRM interno.
- Editor visual complexo.
- Integração com ERP.
- Automações avançadas de produção.
- Checkout com recursos além do necessário para vender.

## 17. Critério geral de sucesso

O MVP será considerado pronto quando o cliente conseguir:

1. Ver produto.
2. Personalizar, se necessário.
3. Adicionar ao carrinho.
4. Finalizar compra com Pagar.me ou fluxo preparado.
5. Receber página de obrigado.
6. O pedido aparecer no admin.
7. Os eventos principais de tracking dispararem sem duplicidade.
