# 09 — Banco de Dados B2B

## 1. Status

Supabase/PostgreSQL continua como direção futura. O MVP documental e visual não depende de banco. `database/schema.sql` representa a fundação ecommerce anterior e não deve ser aplicado em produção sem migração para o domínio B2B.

## 2. Domínios futuros

```txt
catalog
organizations
professionals
technical_requests
consents
activities
technical_documents
samples/shipments
admin/auth
orders/payments (somente se autorizados)
```

## 3. Tabelas planejadas

```txt
product_lines
categories
products
product_variations
technical_documents
organizations
professional_contacts
technical_requests
technical_request_items
technical_request_events
consents
sample_shipments
admin_users
audit_logs
```

Tabelas futuras condicionais:

```txt
orders
order_items
payment_transactions
webhook_events
```

## 4. Organizações e profissionais

`organizations` representa clínica, hospital ou empresa. `professional_contacts` representa o contato profissional e pode possuir profissão e registro quando fornecidos.

Regras:

- CNPJ opcional na captação inicial;
- e-mail/telefone protegidos;
- registro profissional não vai para analytics;
- deduplicação e consentimento precisam de estratégia;
- não criar tabela de paciente no MVP.

## 5. Solicitação técnica

Campos conceituais:

```txt
id
organization_id
professional_contact_id
request_type
status
profile
estimated_volume
notes
utm_*
consent_id
created_at
updated_at
```

Notas não devem aceitar dados de pacientes; limites e sanitização são obrigatórios.

## 6. Itens

```txt
id
technical_request_id
product_id
product_name_snapshot
request_type
quantity_estimate
variation jsonb
created_at
```

Snapshot preserva contexto sem transformar a solicitação em pedido/preço.

## 7. Status

```txt
new_lead
awaiting_qualification
presentation_scheduled
samples_selected
samples_sent
professional_evaluation
proposal_sent
stock_planning
partnership_approved
lost
```

Histórico fica em `technical_request_events`, nunca sobrescrito sem auditoria.

## 8. Consentimentos

Registrar:

- finalidade;
- versão do texto;
- data/hora;
- origem;
- status/revogação;
- retenção aplicável.

Não armazenar consentimento como boolean isolado sem versão.

## 9. Documentos e storage

`technical_documents` registra produto, tipo, versão, status e visibilidade. Arquivos restritos usam storage privado e acesso auditável.

## 10. Segurança/LGPD

- RLS/políticas por papel;
- service role somente server-side;
- criptografia/segurança do provedor;
- mínimo privilégio;
- logs sem PII;
- retenção, exportação e exclusão;
- backup e restauração testados;
- dados fictícios até aprovação de produção.

## 11. Migração futura

Antes de alterar `database/schema.sql`:

1. aprovar o modelo B2B;
2. mapear tabelas legadas;
3. criar migração versionada, sem editar produção manualmente;
4. atualizar tipos TypeScript;
5. manter mocks como adapters;
6. testar rollback e dados fictícios;
7. só então conectar API/admin.
