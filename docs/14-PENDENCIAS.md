# 14 — Pendências para produção real

## Estratégia e marca

- [ ] Nome do projeto e domínio final.
- [ ] Produto principal, oferta, público prioritário e categorias reais.
- [ ] Posicionamento, logo, paleta, tipografia, tom e manual visual finais.
- [ ] Fotos oficiais, descrições, especificações, embalagem e regras de personalização.

## Comercial e conteúdo

- [ ] Preços, margem, desconto Pix, parcelamento, frete, prazo de produção e políticas comerciais reais.
- [ ] Revisar todos os placeholders herdados da referência provisória, inclusive métricas e copy da topbar.
- [ ] Redigir e revisar juridicamente política de privacidade, termos de uso e trocas/devoluções.
- [ ] Definir WhatsApp, e-mail de suporte e fluxos de atendimento.

## Pagamento, pedidos e operação

- [ ] Criar conta Pagar.me, credenciais por ambiente e checkout/cobrança conforme documentação oficial.
- [ ] Validar assinatura de webhook, persistir eventos de forma idempotente e atualizar pagamento/pedido no servidor.
- [ ] Aplicar `database/schema.sql` via migrações no Supabase/Postgres e conectar a camada server-side.
- [ ] Substituir pedidos, catálogo e admin mockados por dados persistidos; validar preço e estoque no servidor.
- [ ] Criar bucket privado de uploads, RLS/políticas de acesso, URLs assinadas curtas e rotina de exclusão de arquivos.
- [ ] Implementar cálculo de frete, cupom, rastreio e notificações transacionais reais.

## Segurança e LGPD

- [ ] Trocar o login mockado do admin por autenticação real, papéis, auditoria e rate limiting.
- [ ] Nunca registrar documento, endereço, personalização ou arquivos em logs, analytics ou URLs.
- [ ] Definir retenção, exclusão, exportação e atendimento aos direitos LGPD.
- [ ] Fazer revisão de segurança antes de aceitar pagamento ou dados reais de clientes.

## Marketing, SEO e deploy

- [ ] Provisionar servidor/container registry, proxy reverso HTTPS, certificados, firewall, health checks, monitoramento, alertas e backups para o deploy Docker.
- [ ] Configurar domínio HTTPS e `NEXT_PUBLIC_SITE_URL` no ambiente do container; confirmar canonical, sitemap e robots de produção.
- [ ] Definir gestão segura de variáveis no servidor e rotação de segredos; nunca incluir `.env` ou chaves na imagem Docker.
- [ ] Só liberar indexação depois de conteúdo, domínio e páginas legais revisados.
- [ ] Configurar e validar Meta Pixel, GA4, GTM, UTMs padrão e consentimento de cookies conforme necessidade jurídica.
- [ ] Substituir metadata, Open Graph, JSON-LD, imagens e copy provisórios pelos dados reais da marca/produto.
- [ ] Criar monitoramento de erros, alertas de pagamento/webhook e rotina de backup antes do lançamento.

## Melhorias após o MVP

- [ ] Testes automatizados de fluxos críticos e testes de acessibilidade mais completos.
- [ ] Área do cliente, CRM, integrações de ERP, estoque avançado e automações de produção/WhatsApp, se fizerem sentido.
- [ ] Painel administrativo com filtros, edição de rastreio, permissões e operação baseada em dados reais.
