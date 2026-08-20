# Galanta Medical / Galanta Ortho

Base profissional mobile first e sem Base44 para Galanta Medical / Galanta Ortho. Especificações de produto, catálogo definitivo e regras comerciais permanecem como placeholders explícitos até serem fornecidos e aprovados.

## Stack e escopo atual

- Next.js App Router, TypeScript, Tailwind CSS e ESLint.
- O design system Clinical Tech Industrial da Galanta Medical já está aplicado; a migração funcional segue organizada em PRs separados.
- Catálogo, personalização, carrinho, checkout e admin legados funcionam somente com dados mockados e não representam a operação Galanta final.
- SEO, sitemap, robots e tracking são centralizados.
- Pagar.me, Supabase/Postgres e storage privado possuem apenas fundações arquiteturais; não há cobrança, banco ou upload real.

## Direção estratégica

A evolução para Galanta Medical / Galanta Ortho está organizada no [Plano Master](docs/20-PLANO-MASTER-GALANTA-MEDICAL.md). Os nomes são finais, as pendências não bloqueantes estão na [matriz de decisões](docs/21-MATRIZ-DE-DECISOES-GALANTA.md) e a fundação visual está pronta para a estrutura institucional da próxima fase.

Documentos centrais:

- [Brand Guide](docs/16-GALANTA-MEDICAL-BRAND-GUIDE.md)
- [Compliance e Copy](docs/17-GALANTA-ORTHO-COMPLIANCE-COPY.md)
- [Taxonomia de Produto](docs/18-GALANTA-ORTHO-PRODUCT-TAXONOMY.md)
- [Fluxo B2B](docs/19-GALANTA-ORTHO-B2B-FLOW.md)

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
| Site | `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_BRAND_NAME`, `NEXT_PUBLIC_SUPPORT_WHATSAPP`, `NEXT_PUBLIC_SUPPORT_EMAIL` | URL canônica, nome Galanta Medical e atendimento. Em produção, informe a URL HTTPS final, sem barra ao final. |
| Tracking | `NEXT_PUBLIC_META_PIXEL_ID`, `NEXT_PUBLIC_GA4_ID`, `NEXT_PUBLIC_GTM_ID` | O tracking permanece inativo quando os IDs estiverem vazios. |
| Pagar.me | `PAGARME_API_KEY`, `PAGARME_PUBLIC_KEY`, `PAGARME_WEBHOOK_SECRET`, `PAGARME_API_BASE_URL` | Reservadas para a integração futura; nunca expor a API key no cliente. |
| Banco | `SUPABASE_URL`, `SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`, `DATABASE_URL` | Reservadas; não são exigidas no build local. |
| Storage | `STORAGE_BUCKET_UPLOADS` | Reservada para bucket privado futuro. |
| Admin | `ADMIN_PASSWORD`, `ADMIN_EMAIL` | A senha protege o admin mockado no servidor. Em desenvolvimento, se `ADMIN_PASSWORD` estiver vazia, use `admin-local-dev-only` somente para testar localmente. Em produção, defina uma senha única e substitua esta camada por autenticação real antes do lançamento. |

## Fluxo atual da implementação legada

1. O visitante navega por home, categorias e produtos demonstrativos.
2. Produtos configurados exibem personalização no cliente; arquivos são apenas metadados locais e não são enviados.
3. O carrinho persiste no `localStorage`, pode ser editado pela gaveta lateral ou em `/carrinho`.
4. O checkout valida dados obrigatórios, cria uma confirmação mockada server-side e redireciona para `/obrigado`.
5. O admin em `/admin` usa sessão mockada, lista pedidos demonstrativos e mantém mudanças de status apenas no navegador.

Esse fluxo será substituído gradualmente por catálogo profissional, seleção técnica, formulário B2B, confirmação sem pagamento e admin de leads. Não use a implementação atual para pedidos ou dados reais.

## Docker e deploy em servidor próprio

Pré-requisitos: Docker Engine com Docker Compose. Para executar localmente, crie o arquivo de ambiente antes de subir o container:

Para o procedimento completo de publicação em Ubuntu, proxy reverso, SSL e atualização, consulte o [guia de deploy em servidor Docker](docs/15-DEPLOY-SERVIDOR-DOCKER.md).

```bash
cp .env.example .env.local
docker compose up --build
```

O app ficará disponível em [http://localhost:3000](http://localhost:3000). Para executar a imagem sem Compose:

```bash
docker build -t novo-ecommerce-standalone .
docker run --rm -p 3000:3000 --env-file .env.local novo-ecommerce-standalone
```

O `Dockerfile` faz um build multi-stage com Node.js 22 LTS e usa o output `standalone` do Next.js; a imagem final contém somente o servidor compilado e seus assets necessários. Nenhum `.env` entra na imagem: `docker-compose.yml` fornece as variáveis em runtime por `.env.local`, e um servidor deve fornecê-las por arquivo de ambiente seguro ou pelo seu gerenciador de secrets.

Para um deploy próprio:

1. Construa e publique a imagem no registro de containers escolhido, ou faça o build diretamente no servidor.
2. Defina as variáveis do grupo **Site** no ambiente do container. Em produção, `NEXT_PUBLIC_SITE_URL` deve usar o domínio final HTTPS, sem barra ao final.
3. Defina `ADMIN_PASSWORD` como secret do ambiente. As chaves futuras de Pagar.me, Supabase e Storage também devem permanecer somente no servidor, sem prefixo `NEXT_PUBLIC_`.
4. Execute o container com a porta interna `3000` publicada pelo proxy reverso HTTPS do servidor.
5. Valide `/`, `/categoria/personalizados`, `/produto/produto-personalizado-exemplo`, `/checkout`, `/admin`, `/robots.txt` e `/sitemap.xml`.
6. Só permita indexação quando domínio, marca, catálogo, páginas legais e conteúdo real estiverem prontos. Sem URL de produção configurada, `robots.txt` bloqueia rastreadores deliberadamente.

> Variáveis iniciadas por `NEXT_PUBLIC_` usadas em código de navegador são incorporadas durante `npm run build`. Para alterá-las em uma imagem de produção, faça o build da imagem com os valores públicos aprovados no ambiente de build ou gere uma nova imagem; nunca passe segredos como argumentos de build.

## Limitações e próximos passos

Este projeto não deve receber solicitações ou pedidos reais ainda. Faltam migração visual/funcional Galanta, produto e materiais aprovados, persistência, autenticação real, conteúdo jurídico, operação comercial e gates regulatórios. Pagar.me e storage continuam inativos. O Docker entrega apenas a aplicação; domínio HTTPS, proxy, secrets, monitoramento e backups ainda precisam de configuração. Consulte [docs/14-PENDENCIAS.md](docs/14-PENDENCIAS.md).

## Como usar com o Codex

1. Leia `AGENTS.md`, os documentos 00/01 e o Plano Master antes de desenvolver.
2. Use os documentos em `docs/` como fonte de verdade.
3. Mantenha commits e PRs pequenos, sem credenciais, dados de pacientes ou especificações/claims inventados.
