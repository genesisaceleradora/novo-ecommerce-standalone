# 10 — Admin de Leads Galanta

## 1. Objetivo

Adaptar o painel mockado para acompanhar solicitações profissionais e oportunidades, sem transformá-lo em CRM completo.

## 2. MVP

- login mockado por senha de ambiente;
- dashboard de leads;
- listagem de solicitações;
- detalhe;
- alteração local de status;
- itens/configurações selecionados;
- UTMs;
- consentimentos;
- histórico mockado;
- observações internas fictícias.

## 3. Indicadores

```txt
Leads técnicos totais
Aguardando qualificação
Apresentações agendadas
Amostras em avaliação
Propostas em aberto
```

Não mostrar faturamento, receita, pagamento ou estoque real no MVP.

## 4. Status

```txt
Novo lead técnico
Aguardando qualificação
Apresentação agendada
Amostras selecionadas
Amostras enviadas
Em avaliação profissional
Proposta enviada
Estoque em planejamento
Parceria aprovada
Perdido
```

## 5. Detalhe

- identificador/data;
- contato profissional;
- profissão e registro quando fornecidos;
- instituição e CNPJ quando fornecido;
- cidade/estado;
- interesse e perfil;
- itens e variações;
- volume estimado;
- UTMs;
- consentimento;
- histórico;
- aviso de ambiente mockado.

Nunca exibir dados de pacientes porque não devem ser coletados.

## 6. Segurança

- `ADMIN_PASSWORD` apenas server-side;
- fallback local somente em desenvolvimento;
- produção sem senha configurada deve negar login;
- cookie httpOnly, secure em produção e política adequada;
- sem secrets no client;
- sem PII em logs;
- rate limiting e autenticação real são gates de produção.

## 7. Persistência mockada

Mudanças locais podem usar `localStorage` com dados fictícios. A interface deve deixar claro que não há persistência compartilhada, auditoria ou operação real.

## 8. Evolução futura

- autenticação real e papéis;
- dados do banco;
- responsável/SLA;
- filtros e busca;
- atividades e auditoria;
- CRM/notificações;
- envio/rastreabilidade de amostras;
- propostas/pedidos somente quando aprovados.

## 9. Não escopo

- CRM avançado;
- automações de WhatsApp/e-mail;
- edição de conteúdo;
- financeiro;
- gestão clínica;
- prontuário/pacientes;
- estoque avançado.
