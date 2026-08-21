# 14 — Pendências para Produção Real

## Marca e ativos

- [x] Confirmar Galanta Medical como marca final.
- [x] Confirmar Galanta Ortho como linha inicial final.
- [ ] Receber logo e manual visual aprovados.
- [ ] Receber renders/fotografias com origem, licença e aprovação.
- [ ] Definir domínio final e canais oficiais.

## Produto e regulatório

- [ ] Definir produto/modelo inicial e finalidade pretendida.
- [ ] Confirmar materiais, tamanhos, lados, versões e variações.
- [ ] Confirmar protocolo, cuidados, limpeza e armazenamento.
- [ ] Confirmar situação, classificação e requisitos regulatórios aplicáveis.
- [ ] Definir o que constitui amostra e seu uso permitido.
- [ ] Aprovar claims, disclaimers, rótulos, instruções e materiais.
- [ ] Estruturar qualidade, rastreabilidade, tecnovigilância e contato técnico.

## Comercial e atendimento

- [ ] Definir apresentação, amostra, proposta e planejamento de estoque.
- [ ] Definir preço, tabela B2B, faturamento, frete e impostos quando aplicável.
- [ ] Definir responsável por leads, SLA e canais.
- [ ] Definir critérios de qualificação e perda.
- [ ] Decidir se haverá venda online e quem poderá comprar.

## Conteúdo e jurídico

- [ ] Aprovar copy institucional e técnica.
- [ ] Produzir materiais técnicos versionados.
- [ ] Revisar política de privacidade, termos e consentimentos.
- [ ] Definir retenção, exclusão e direitos LGPD.
- [ ] Proibir e monitorar entrada de dados de pacientes no fluxo comercial.

## Plataforma e dados

- [x] Migrar o catálogo estrutural legado para o domínio Galanta.
- [x] Migrar carrinho/checkout para solicitação técnica.
- [ ] Migrar admin de pedidos para leads.
- [ ] Atualizar `database/schema.sql` para o domínio B2B antes de aplicá-lo.
- [ ] Conectar Supabase/Postgres com RLS, migrações e backup.
- [ ] Implementar autenticação real, papéis, auditoria e rate limiting.
- [ ] Integrar CRM/notificações quando a operação estiver definida.

## Storage e documentos

- [ ] Definir necessidade de arquivos privados.
- [ ] Configurar bucket privado, autorização, URLs assinadas e retenção.
- [ ] Implementar versão/aprovação de materiais técnicos.
- [ ] Nunca criar upload de paciente sem escopo, base legal e segurança aprovados.

## Pagamento futuro

- [ ] Decidir se Pagar.me será necessário.
- [ ] Consultar documentação oficial vigente.
- [ ] Criar pedido server-side e validar valores.
- [ ] Implementar webhook assinado e idempotente.
- [ ] Implementar reconciliação, erros, cancelamento e reembolso.
- [ ] Disparar Purchase somente após pagamento confirmado.

## SEO, tracking e lançamento

- [ ] Configurar domínio HTTPS e `NEXT_PUBLIC_SITE_URL`.
- [ ] Aprovar metadata, sitemap, schema e conteúdo indexável.
- [ ] Liberar robots somente após gate de lançamento.
- [ ] Configurar tracking/consentimento sem PII.
- [ ] Validar campanhas e páginas sob o mesmo compliance.
- [ ] Configurar monitoramento, alertas e analytics operacionais.

## Infraestrutura Docker

- [ ] Provisionar servidor e registry.
- [ ] Configurar proxy reverso, SSL, firewall e health checks.
- [ ] Configurar secrets fora da imagem.
- [ ] Definir CI/CD, rollback, logs e observabilidade.
- [ ] Testar backup e restauração quando banco entrar.

## Qualidade

- [ ] Testes automatizados dos fluxos críticos.
- [ ] Auditoria completa de acessibilidade.
- [ ] Revisão de segurança e privacidade.
- [ ] Teste com profissionais representativos.
- [ ] Aprovação técnica/regulatória final antes de publicação clínica/comercial.
