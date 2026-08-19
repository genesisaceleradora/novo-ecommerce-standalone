# 04 — Rotas do Ecommerce

## 1. Rotas públicas

```txt
/                              Home
/categoria/[slug]              Categoria/coleção
/produto/[slug]                Produto individual
/carrinho                      Página fallback do carrinho
/checkout                      Checkout
/obrigado                      Página de obrigado
/sobre                         Sobre a marca
/faq                           Perguntas frequentes
/contato                       Contato
/politica-de-privacidade       Política de privacidade
/politica-de-troca             Política de troca/devolução
/termos-de-uso                 Termos de uso
```

## 2. Rotas administrativas

```txt
/admin                         Dashboard/admin
/admin/pedidos                 Lista de pedidos
/admin/pedidos/[id]            Detalhe do pedido
/admin/produtos                Produtos
/admin/categorias              Categorias
```

No MVP, `/admin` pode conter tudo em uma estrutura simples, sem necessidade de dashboard avançado.

## 3. Rotas API/server

```txt
/api/checkout/create           Criar pedido/checkout
/api/checkout/webhook          Receber webhook Pagar.me
/api/uploads/sign              Gerar URL assinada para upload, se aplicável
/api/admin/login               Login admin simples, se necessário
```

## 4. Regras de URL

- URLs em português, simples e amigáveis.
- Slugs em minúsculo.
- Sem acentos nos slugs.
- Sem parâmetros desnecessários.

Exemplos:

```txt
/categoria/presentes-personalizados
/produto/produto-exemplo-personalizado
```

## 5. Rotas futuras possíveis

```txt
/busca?q=
/colecoes
/datas-especiais
/rastrear-pedido
/minha-conta
/login
```

Não implementar no MVP se não for necessário.
