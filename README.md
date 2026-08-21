# Galanta Medical / Galanta Ortho

Base profissional mobile first e sem Base44 para Galanta Medical / Galanta Ortho. Especificações de produto, catálogo definitivo e regras comerciais permanecem como placeholders explícitos até serem fornecidos e aprovados.

## Stack e escopo atual

- Next.js App Router, TypeScript, Tailwind CSS e ESLint.
- O design system Clinical Tech Industrial, a estrutura institucional e o catálogo técnico configurável da Galanta Medical já estão aplicados.
- O catálogo Galanta usa registros estruturais Standard + Personal sem preço, oferta ou especificação inventada; a seleção e a solicitação técnica B2B estão implementadas, enquanto o admin ainda aguarda a migração completa para pipeline de leads.
- SEO, sitemap, robots e tracking são centralizados.
- Pagar.me, Supabase/Postgres e storage privado possuem apenas fundações arquiteturais; não há cobrança, banco ou upload real.

## Direção estratégica

A evolução para Galanta Medical / Galanta Ortho está organizada no [Plano Master](docs/20-PLANO-MASTER-GALANTA-MEDICAL.md). Os nomes são finais, as pendências não bloqueantes estão na [matriz de decisões](docs/21-MATRIZ-DE-DECISOES-GALANTA.md), e o catálogo e o fluxo de solicitação técnica estão prontos para receber o pipeline de leads da próxima fase.

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

## Fluxo atual do MVP

A navegação pública apresenta a Galanta Medical, a linha Galanta Ortho e o catálogo técnico por meio de `/produtos`, `/categoria/[slug]` e `/produto/[slug]`. Os registros Standard e Personal exercitam tipos, variações, especificações, documentos e status de aprovação sem representar catálogo final, preço, oferta ou claim clínico aprovado.

O estado atual é:

1. O visitante consulta categorias e produtos Galanta com pendências explícitas.
2. Os controles de tamanho, lado ou configuração usam placeholders e podem ser adicionados à seleção técnica com tipo de interesse e quantidade de referência.
3. `/solicitacao` permite revisar a seleção; `/solicitacao/dados` valida dados profissionais no cliente e no servidor; `/solicitacao/confirmacao` exibe o protocolo demonstrativo da sessão.
4. A seleção usa `localStorage` com chave Galanta própria. Dados profissionais e confirmação permanecem somente em `sessionStorage`; nenhum payload é enviado a banco, CRM, e-mail ou WhatsApp.
5. `/carrinho`, `/checkout` e `/obrigado` redirecionam para as etapas equivalentes do fluxo B2B. Slugs B2C antigos continuam redirecionando para o catálogo estrutural.
6. O admin legado mostra apenas uma prévia transitória da última solicitação desta sessão; sua migração completa para pipeline de leads pertence à Fase 6.

O fluxo é demonstrativo. Não o utilize em produção para pedidos, pacientes ou dados reais.

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
5. Valide `/`, `/produtos`, `/categoria/linha-standard`, `/produto/galanta-ortho-standard-desenvolvimento`, `/solicitacao`, `/solicitacao/dados`, `/solicitacao/confirmacao`, `/admin`, `/robots.txt` e `/sitemap.xml`.
6. Só permita indexação quando domínio, marca, catálogo, páginas legais e conteúdo real estiverem prontos. Sem URL de produção configurada, `robots.txt` bloqueia rastreadores deliberadamente.

> Variáveis iniciadas por `NEXT_PUBLIC_` usadas em código de navegador são incorporadas durante `npm run build`. Para alterá-las em uma imagem de produção, faça o build da imagem com os valores públicos aprovados no ambiente de build ou gere uma nova imagem; nunca passe segredos como argumentos de build.

## Limitações e próximos passos

Este projeto não deve receber solicitações reais ainda. Faltam catálogo Galanta final aprovado, pipeline administrativo B2B, produto e materiais técnicos aprovados, persistência, autenticação real, conteúdo jurídico, operação comercial e gates regulatórios. Pagar.me e storage continuam inativos. O Docker entrega apenas a aplicação; domínio HTTPS, proxy, secrets, monitoramento e backups ainda precisam de configuração. Consulte [docs/14-PENDENCIAS.md](docs/14-PENDENCIAS.md).

## Como usar com o Codex

1. Leia `AGENTS.md`, os documentos 00/01 e o Plano Master antes de desenvolver.
2. Use os documentos em `docs/` como fonte de verdade.
3. Mantenha commits e PRs pequenos, sem credenciais, dados de pacientes ou especificações/claims inventados.
