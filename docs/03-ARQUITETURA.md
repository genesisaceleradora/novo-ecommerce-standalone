# 03 — Arquitetura Técnica Galanta

## 1. Stack

```txt
Framework: Next.js App Router
Linguagem: TypeScript
UI: React + Tailwind CSS
Deploy: Docker standalone em servidor próprio
Banco futuro: Supabase/PostgreSQL
Storage futuro: privado (Supabase, S3 ou R2)
Pagamento futuro: Pagar.me, condicionado ao modelo comercial
```

## 2. Camadas

```txt
UI → Features → Rotas → API/Server → Domínio → Integrações externas
```

Domínios:

```txt
brand
catalog
technical-request
professional-lead
content/compliance
tracking/seo
admin
payments (inativo)
database/storage (placeholders)
```

## 3. Estrutura

```txt
/src/app
/src/components
/src/data
/src/hooks
/src/lib
  /admin
  /database
  /payments
  /seo
  /tracking
/src/server
/src/styles
/src/types
/database
/docs
```

Não reestruturar tudo de uma vez. A migração deve aproveitar os módulos existentes e separar novos domínios quando necessário.

## 4. Estado da solicitação

No MVP:

- Context/Provider único;
- persistência em `localStorage` versionada;
- nova chave para não importar carrinho B2C;
- itens com produto, tipo de solicitação e configuração;
- dados profissionais não persistidos indefinidamente;
- sem duplicação entre drawer, página e formulário.

Depois:

- persistência server-side;
- idempotência;
- consentimento e auditoria;
- integração CRM.

## 5. Dados mockados

Manter tipos explícitos e dados em `/src/data`. Todo mock deve indicar `placeholder`, `development` ou equivalente e ser migrável para banco.

## 6. Server-side

- validar formulários também no servidor;
- não confiar em dados/preços do client;
- não logar payload completo;
- secrets apenas no servidor;
- APIs retornam erros seguros;
- integrações externas isoladas.

## 7. Segurança e privacidade

- não coletar dados de pacientes no MVP;
- não aceitar upload clínico;
- storage futuro privado, com URLs assinadas;
- admin real exigirá autenticação, papéis e rate limiting;
- formulários públicos precisam de proteção contra abuso;
- consentimentos precisam de versão e data.

## 8. Validação

Preferir schemas centralizados para:

- item de solicitação;
- formulário profissional;
- enums e status;
- API mockada;
- banco futuro;
- webhooks futuros.

Uma biblioteca de schema pode ser adicionada quando a implementação do fluxo B2B começar; não adicionar dependência sem uso real.

## 9. SEO e tracking

- providers e helpers centralizados;
- eventos tipados;
- zero PII em analytics;
- metadata deriva do conteúdo aprovado;
- Offer/Purchase permanecem inativos;
- UTMs preservadas separadamente dos dados sensíveis.

## 10. Performance

- Server Components por padrão;
- Client Components apenas onde necessário;
- `next/image`;
- fontes via `next/font`;
- lazy loading não crítico;
- bundle e Lighthouse mobile monitorados;
- standalone Next.js para Docker.

## 11. Compatibilidade durante a migração

Até as novas rotas estarem prontas, carrinho, checkout e admin legados continuam apenas como implementação mockada. Novos módulos devem migrar por etapa e manter build verde. Redirecionamentos entram somente após o destino estar validado.

## 12. Integrações futuras

Pagar.me, banco, storage, e-mail, WhatsApp e CRM não podem virar dependências obrigatórias do build. Cada integração exige contrato tipado, ambiente separado, idempotência, observabilidade e documentação própria.
