# 12 — Roadmap de Tasks para Codex

## Status

O scaffold ecommerce anterior está concluído. As próximas tasks executam a migração Galanta em PRs pequenos, seguindo `20-PLANO-MASTER-GALANTA-MEDICAL.md`.

Os arquivos existentes em `/prompts/01-SCAFFOLD.md` até `/prompts/07-ADMIN.md` e os exemplos atuais em `/seed` são históricos do scaffold B2C. Não devem ser reutilizados nas novas fases sem reescrita explícita para os documentos 16–21.

## Task 1 — Fundação documental

```txt
Branch: docs/galanta-medical-foundation
```

- criar docs 16–21;
- normalizar docs legados;
- definir precedência e placeholders;
- não alterar aplicação.

## Task 2 — Design system

Status: concluída em 20/08/2026.

```txt
Branch: feat/galanta-medical-design-system
```

- tokens Clinical Tech Industrial;
- Sora, Inter e IBM Plex Mono;
- componentes base;
- header/footer/topbar;
- acessibilidade;
- sem trocar catálogo/fluxo.

## Task 3 — Site institucional

Status: concluída em 20/08/2026.

```txt
Branch: feat/galanta-medical-site-foundation
```

- home;
- navegação;
- shell das páginas profissionais;
- copy estrutural segura;
- sem catálogo final.

## Task 4 — Catálogo Galanta Ortho

Status: concluída em 20/08/2026.

```txt
Branch: feat/galanta-ortho-catalog
```

- tipos de linha/produto/variação/documento;
- mocks seguros;
- páginas e cards;
- sem preço/Offer.

## Task 5 — Solicitação técnica

```txt
Branch: feat/galanta-b2b-technical-request
```

- provider/estado;
- resumo;
- formulário profissional;
- API e confirmação mockadas;
- migração das rotas legadas;
- sem pagamento/dados de paciente.

## Task 6 — Admin de leads

```txt
Branch: feat/galanta-admin-lead-pipeline
```

- dashboard/lista/detalhe;
- status B2B;
- mocks e persistência local;
- remover faturamento fictício.

## Task 7 — Conteúdo e autoridade

```txt
Branch: feat/galanta-ortho-authority-content
```

- páginas completas;
- FAQ;
- materiais;
- regulatório/segurança;
- revisão de compliance.

## Task 8 — SEO e tracking

```txt
Branch: feat/galanta-b2b-seo-tracking
```

- metadata/sitemap/schema;
- eventos de lead;
- remover Purchase/Offer;
- zero PII.

## Task 9 — Aceite do MVP

```txt
Branch: chore/galanta-b2b-mvp-readiness
```

- auditoria de legado;
- acessibilidade/responsividade;
- lint/build/Docker;
- testes de rotas/fluxos;
- docs e pendências.

## Tasks futuras condicionais

- banco e autenticação real;
- CRM/notificações;
- storage privado;
- rastreabilidade;
- Pagar.me/pedidos somente após autorização.

## Regras gerais

- ler docs 00, 01, 16–21 e documento específico;
- não misturar fases;
- preservar mocks até substituição validada;
- não inventar produto/claim;
- não coletar dados de paciente;
- atualizar docs quando comportamento mudar;
- lint e build em todos os PRs;
- Docker quando runtime/configuração mudar;
- commits semânticos e PRs pequenos.
