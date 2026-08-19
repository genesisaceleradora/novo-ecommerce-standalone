# Novo Ecommerce Standalone

Base de ecommerce premium, mobile first e sem Base44. Marca, produto, catálogo definitivo e regras comerciais continuam como placeholders explícitos até a próxima definição de negócio.

## Stack e escopo atual

- Next.js App Router, TypeScript, Tailwind CSS e ESLint.
- Catálogo, personalização, carrinho persistente, checkout e admin funcionam com dados mockados.
- SEO, sitemap, robots e tracking são centralizados.
- Pagar.me, Supabase/Postgres e storage privado possuem apenas fundações arquiteturais; não há cobrança, banco ou upload real.

## Instalação local

Pré-requisitos: Node.js 20.9 ou superior e npm ou pnpm.

```bash
npm install
cp .env.example .env.local
npm run dev
```

Com pnpm:

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Scripts

```bash
npm run dev    # desenvolvimento local
npm run lint   # ESLint
npm run build  # build de produção
npm run start  # inicia o build de produção
```

## Variáveis de ambiente

Copie `.env.example` para `.env.local`. Não envie `.env.local`, chaves ou tokens ao Git.

| Grupo | Variáveis | Uso atual |
| --- | --- | --- |
| Site | `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_BRAND_NAME`, `NEXT_PUBLIC_SUPPORT_WHATSAPP`, `NEXT_PUBLIC_SUPPORT_EMAIL` | URL canônica, placeholders de marca e atendimento. Em produção, informe a URL HTTPS final, sem barra ao final. |
| Tracking | `NEXT_PUBLIC_META_PIXEL_ID`, `NEXT_PUBLIC_GA4_ID`, `NEXT_PUBLIC_GTM_ID` | O tracking permanece inativo quando os IDs estiverem vazios. |
| Pagar.me | `PAGARME_API_KEY`, `PAGARME_PUBLIC_KEY`, `PAGARME_WEBHOOK_SECRET`, `PAGARME_API_BASE_URL` | Reservadas para a integração futura; nunca expor a API key no cliente. |
| Banco | `SUPABASE_URL`, `SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`, `DATABASE_URL` | Reservadas; não são exigidas no build local. |
| Storage | `STORAGE_BUCKET_UPLOADS` | Reservada para bucket privado futuro. |
| Admin | `ADMIN_PASSWORD`, `ADMIN_EMAIL` | A senha protege o admin mockado no servidor. Em desenvolvimento, se `ADMIN_PASSWORD` estiver vazia, use `admin-local-dev-only` somente para testar localmente. Em produção, defina uma senha única e substitua esta camada por autenticação real antes do lançamento. |

## Fluxo atual do MVP

1. O visitante navega por home, categorias e produtos demonstrativos.
2. Produtos configurados exibem personalização no cliente; arquivos são apenas metadados locais e não são enviados.
3. O carrinho persiste no `localStorage`, pode ser editado pela gaveta lateral ou em `/carrinho`.
4. O checkout valida dados obrigatórios, cria uma confirmação mockada server-side e redireciona para `/obrigado`.
5. O admin em `/admin` usa sessão mockada, lista pedidos demonstrativos e mantém mudanças de status apenas no navegador.

## Deploy na Vercel

1. Importe o repositório na Vercel e mantenha o preset Next.js detectado automaticamente.
2. Configure as variáveis do grupo **Site** para Preview e Production. Em Production, `NEXT_PUBLIC_SITE_URL` deve usar o domínio final HTTPS.
3. Configure somente no servidor as chaves futuras de Pagar.me, Supabase e Storage. Não use o prefixo `NEXT_PUBLIC_` para segredos.
4. Defina `ADMIN_PASSWORD` em Production. A senha de desenvolvimento não funciona em produção.
5. Faça o deploy e valide `/`, `/categoria/personalizados`, `/produto/produto-personalizado-exemplo`, `/checkout`, `/admin`, `/robots.txt` e `/sitemap.xml`.
6. Só permita indexação quando domínio, marca, catálogo, páginas legais e conteúdo real estiverem prontos. Sem URL de produção configurada, `robots.txt` bloqueia rastreadores deliberadamente.

## Limitações e próximos passos

Este projeto não deve receber pedidos reais ainda. Faltam integração Pagar.me com webhook assinado, persistência de pedidos em Supabase/Postgres, RLS, storage privado, autenticação administrativa real, conteúdo legal revisado, catálogo e identidade finais. Consulte [docs/14-PENDENCIAS.md](docs/14-PENDENCIAS.md) para a lista de produção.

## Como usar com o Codex

1. Leia `AGENTS.md` e `docs/00-CONTEXTO-DO-PROJETO.md` antes de desenvolver.
2. Use os documentos em `docs/` como fonte de verdade.
3. Mantenha commits e PRs pequenos, sem credenciais e sem assumir nome, produto ou preços definitivos.
