# 04 — Rotas Galanta Medical

## 1. Rotas públicas alvo

```txt
/                              Home Galanta Medical
/galanta-ortho                 Visão da linha
/produtos                      Catálogo profissional
/produto/[slug]                Produto/modelo
/linha-standard                Modelo Standard
/linha-personal                Modelo Personal
/como-funciona                 Processo conceitual
/amostras-tecnicas             Programa/solicitação
/profissionais                 Conteúdo por profissional
/clinicas-e-hospitais          Conteúdo institucional B2B
/materiais-tecnicos            Hub de materiais aprovados
/regulatorio-e-seguranca       Status, segurança e contatos
/solicitacao                   Resumo da seleção
/solicitacao/dados             Dados profissionais
/solicitacao/confirmacao       Confirmação mockada
/faq                           FAQ profissional
/contato                       Contato comercial/técnico
/sobre                         Galanta Medical
/politica-de-privacidade       Política
/termos-de-uso                 Termos
```

## 2. Rotas dinâmicas futuras

```txt
/categoria/[slug]
/materiais-tecnicos/[slug]
```

Categoria pode continuar durante a migração, mas deve receber slugs Galanta.

## 3. Rotas administrativas

```txt
/admin
/admin/solicitacoes/[id]
```

Rotas legadas `/admin/pedidos/[id]` podem permanecer até a migração do admin, depois redirecionar.

## 4. API alvo do MVP

```txt
/api/solicitacoes/create
/api/admin/login
/api/admin/logout
```

Futuras:

```txt
/api/materials/[id]/download
/api/uploads/sign
/api/webhooks/pagarme
```

## 5. Rotas legadas

Quando os destinos novos estiverem prontos:

```txt
/carrinho  → /solicitacao
/checkout  → /solicitacao/dados
/obrigado  → /solicitacao/confirmacao
```

Não remover antes de validar links, tracking, sitemap e persistência.

## 6. Regras de URL

- português, minúsculo e sem acentos;
- slugs curtos e estáveis;
- sem IDs sensíveis;
- query apenas para filtros não indexáveis;
- canonical único;
- material restrito nunca exposto por URL pública previsível.

## 7. SEO e indexação

- sitemap contém apenas páginas ativas e aprovadas;
- admin, API, solicitação e materiais privados não entram no sitemap;
- rotas de confirmação usam `noindex`;
- redirects permanentes somente após estabilização;
- robots continua bloqueado até gate de produção.
