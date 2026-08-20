# 15 — Deploy em servidor próprio com Docker

Este guia explica como publicar o ecommerce em um servidor Linux próprio usando Docker e Docker Compose. Ele não configura Pagar.me, Supabase/Postgres ou storage real: essas integrações permanecem pendências de produção.

Use valores de produção somente quando marca, domínio, catálogo, páginas legais e regras comerciais estiverem definidos. Nos exemplos, substitua `seu-dominio.example.com` pelo domínio real e nunca use esse valor literalmente.

## Arquitetura recomendada

```txt
Internet (HTTPS)
        |
        v
Nginx ou Traefik (portas 80/443, SSL)
        |
        v
Container Next.js (porta 3000 interna)
```

O container do app executa o build standalone do Next.js na porta `3000`. Um proxy reverso é responsável pelo domínio, HTTPS e encaminhamento das requisições. Não exponha a porta `3000` diretamente à internet em produção; permita o acesso a ela somente pelo proxy, pela rede Docker ou pelo próprio servidor.

## 1. Pré-requisitos

Prepare um servidor Ubuntu LTS atualizado com:

- acesso SSH por chave e um usuário com `sudo`;
- Docker Engine e o plugin Docker Compose;
- Git;
- um domínio com registro DNS `A` apontando para o IP público do servidor;
- portas `80` e `443` liberadas no firewall e no provedor de infraestrutura;
- Nginx ou Traefik para atuar como proxy reverso.

Instale as ferramentas básicas e confira as versões:

```bash
sudo apt update
sudo apt install -y ca-certificates curl git

docker --version
docker compose version
git --version
```

Instale Docker Engine e Docker Compose conforme o [guia oficial do Docker](https://docs.docker.com/engine/install/ubuntu/). Depois, confirme que o usuário de deploy pode executar `docker` sem uma sessão root permanente (por exemplo, pertencendo ao grupo `docker`, quando essa for a política do servidor).

Se usar UFW, mantenha SSH liberado antes de ativar o firewall e exponha apenas o necessário:

```bash
sudo ufw allow OpenSSH
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw enable
sudo ufw status
```

## 2. Apontar o domínio

No provedor DNS, crie um registro `A` para o domínio e, se necessário, para `www`, apontando para o IP do servidor. Aguarde a propagação antes de emitir o certificado SSL.

O domínio final deve estar disponível em HTTPS antes de configurar `NEXT_PUBLIC_SITE_URL`. Enquanto domínio, conteúdo e páginas legais não estiverem prontos, mantenha a indexação bloqueada: o `robots.txt` atual faz isso deliberadamente sem uma URL pública configurada.

## 3. Clonar o repositório

Escolha uma pasta de aplicações e clone a branch de produção (`main`):

```bash
sudo mkdir -p /srv/ecommerce
sudo chown "$USER":"$USER" /srv/ecommerce
cd /srv/ecommerce

git clone https://github.com/genesisaceleradora/novo-ecommerce-standalone.git
cd novo-ecommerce-standalone
git checkout main
```

Para repositórios privados, use uma chave de deploy ou outra credencial Git com acesso mínimo. Não use token em comandos que possam ser gravados no histórico do shell.

## 4. Criar e proteger o ambiente

O arquivo `.env.local` não é versionado e não entra na imagem Docker. Crie-o a partir do exemplo e limite sua leitura ao usuário de deploy:

```bash
cp .env.example .env.local
chmod 600 .env.local
```

Edite esse arquivo diretamente no servidor por um editor seguro, sem colar segredos em chats, tickets, logs ou commits:

```bash
nano .env.local
```

### Variáveis obrigatórias em produção

| Variável | Exemplo/uso |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | URL canônica HTTPS, por exemplo `https://seu-dominio.example.com`, sem barra final. |
| `ADMIN_PASSWORD` | Senha forte, única e armazenada somente no ambiente do servidor. Sem ela, o admin mockado não autentica em produção. |

### Variáveis opcionais no MVP

| Grupo | Variáveis | Uso atual |
| --- | --- | --- |
| Marca e suporte | `NEXT_PUBLIC_BRAND_NAME`, `NEXT_PUBLIC_SUPPORT_WHATSAPP`, `NEXT_PUBLIC_SUPPORT_EMAIL` | Placeholders de marca e canais de suporte. |
| Tracking | `NEXT_PUBLIC_META_PIXEL_ID`, `NEXT_PUBLIC_GA4_ID`, `NEXT_PUBLIC_GTM_ID` | Tracking fica inativo quando estiver vazio. |
| Pagar.me | `PAGARME_API_KEY`, `PAGARME_PUBLIC_KEY`, `PAGARME_WEBHOOK_SECRET`, `PAGARME_API_BASE_URL` | Reservadas para integração futura; não há pagamento real no MVP. |
| Banco e storage | `SUPABASE_URL`, `SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`, `DATABASE_URL`, `STORAGE_BUCKET_UPLOADS` | Reservadas para banco e storage privado futuros. |
| Admin | `ADMIN_EMAIL` | Placeholder de contato administrativo. |

Nunca use o prefixo `NEXT_PUBLIC_` para segredos. Valores com esse prefixo podem ser enviados ao navegador. Como o Next.js incorpora variáveis públicas usadas no cliente durante o build, uma mudança dessas variáveis deve ser acompanhada de um novo build da imagem em um ambiente controlado; não passe segredos como argumentos de build.

## 5. Construir e iniciar

Com `.env.local` criado, execute:

```bash
docker compose up --build -d
docker compose ps
```

O Compose constrói a imagem multi-stage, inicia o serviço `app` e publica a porta `3000`. Antes de colocar um proxy na frente do app, valide localmente no servidor:

```bash
curl -I http://localhost:3000/
curl -I http://localhost:3000/robots.txt
curl -I http://localhost:3000/sitemap.xml
```

Uma resposta `200` confirma que o processo está atendendo. Se a porta `3000` precisar permanecer acessível somente pelo próprio servidor, restrinja-a no firewall ou adapte o mapeamento de portas do Compose para `127.0.0.1:3000:3000` antes do lançamento.

## 6. Logs, status e parada

Para acompanhar logs continuamente:

```bash
docker compose logs -f
```

Para consultar apenas as últimas linhas:

```bash
docker compose logs --tail=100
```

Para parar e remover os containers e a rede do Compose:

```bash
docker compose down
```

Esses comandos não removem o repositório nem o arquivo `.env.local`. Evite comandos de limpeza de volumes ou imagens sem entender seu impacto em outros serviços do servidor.

## 7. Proxy reverso e SSL

### Opção A — Nginx + Certbot

Nginx é uma opção simples quando este servidor hospeda um número pequeno de aplicações. Instale Nginx e Certbot:

```bash
sudo apt install -y nginx certbot python3-certbot-nginx
```

Crie um arquivo em `/etc/nginx/sites-available/ecommerce` com a configuração abaixo, substituindo o domínio:

```nginx
server {
  listen 80;
  listen [::]:80;
  server_name seu-dominio.example.com www.seu-dominio.example.com;

  location / {
    proxy_pass http://127.0.0.1:3000;
    proxy_http_version 1.1;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
  }
}
```

Ative e valide a configuração, depois emita o certificado:

```bash
sudo ln -s /etc/nginx/sites-available/ecommerce /etc/nginx/sites-enabled/ecommerce
sudo nginx -t
sudo systemctl reload nginx
sudo certbot --nginx -d seu-dominio.example.com -d www.seu-dominio.example.com
```

O Certbot configura a renovação automática; confirme-a com `sudo certbot renew --dry-run`. Após o SSL, valide `https://seu-dominio.example.com` e configure `NEXT_PUBLIC_SITE_URL` com essa mesma URL.

### Opção B — Traefik

Traefik é uma boa alternativa quando vários containers precisam de roteamento automático e certificados. Execute Traefik como proxy de borda nas portas `80` e `443`, use uma rede Docker compartilhada e adicione ao serviço `app` as labels de domínio, router HTTPS e serviço apontando para a porta interna `3000`.

Mantenha certificados e credenciais do provedor DNS fora do repositório. Consulte a documentação oficial do Traefik para o resolvedor ACME/Let's Encrypt compatível com sua infraestrutura. Não execute Nginx e Traefik ao mesmo tempo nas mesmas portas.

## 8. Atualizar produção

Antes de atualizar, acompanhe o PR e confirme que os testes passaram. No servidor:

```bash
cd /srv/ecommerce/novo-ecommerce-standalone
git pull origin main
docker compose up --build -d
docker compose ps
```

Confira os logs e as rotas principais depois de cada atualização:

```bash
docker compose logs --tail=100
curl -I https://seu-dominio.example.com/
curl -I https://seu-dominio.example.com/produto/produto-personalizado-exemplo
curl -I https://seu-dominio.example.com/checkout
```

Em caso de falha, preserve os logs e retorne ao commit conhecido pelo Git antes de reconstruir. Não remova `.env.local` durante esse processo.

## 9. Checklist de segurança e operação

- Nunca faça commit de `.env.local`, tokens, senhas ou chaves.
- Use uma `ADMIN_PASSWORD` longa, única e guardada em um gerenciador de segredos; o login atual é mockado e deve ser substituído antes de operar dados reais.
- Confirme que `NEXT_PUBLIC_SITE_URL` corresponde exatamente ao domínio HTTPS final.
- Mantenha `robots.txt` bloqueando crawlers até que domínio, conteúdo, catálogo e páginas legais estejam revisados.
- Mantenha as portas públicas limitadas a `80` e `443`; deixe SSH protegido por chaves, firewall e controles de acesso.
- Antes de aceitar pagamentos ou dados reais, conclua Pagar.me seguro, webhook assinado, banco persistente, storage privado, LGPD e revisão de segurança.
- Quando Supabase/Postgres real entrar em operação, defina backups automáticos, testes de restauração, retenção, monitoramento e rotina para exclusão de arquivos pessoais.
- Configure monitoramento, alertas e renovação de certificado antes do lançamento.

Consulte também [14-PENDENCIAS.md](./14-PENDENCIAS.md) para os itens ainda necessários à produção real.
