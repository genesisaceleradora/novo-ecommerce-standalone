# Banco de dados

Esta pasta contém a fundação PostgreSQL para a futura integração com Supabase. O checkout atual continua inteiramente mockado: aplicar o schema não conecta automaticamente o site ao banco.

## Aplicação futura no Supabase

1. Crie um projeto Supabase separado para cada ambiente.
2. Revise o arquivo `schema.sql` em uma migração versionada e aplique-o pelo Supabase CLI ou SQL Editor em um ambiente de desenvolvimento primeiro.
3. Crie um bucket privado chamado `order-uploads`; não habilite acesso público.
4. Defina políticas RLS antes de expor qualquer tabela ou endpoint. Operações de pedido, pagamento e arquivo devem ficar em código server-side com a service role, nunca no navegador.
5. Quando a integração existir, configure apenas no servidor `SUPABASE_URL` e `SUPABASE_SERVICE_ROLE_KEY`. Nenhuma variável é obrigatória para o build local atual.

O schema usa `pgcrypto` para UUIDs e cria tipos de status de pedidos, pagamentos, cupons e administradores. Em produção, a migração deve ser revisada com o modelo de autenticação administrativo definitivo.

## Tabelas

- `categories`, `products` e `product_images`: catálogo migrável dos mocks atuais.
- `customers`: dados de contato e documento do cliente.
- `orders` e `order_items`: pedido, valores em centavos, snapshots do item e personalização em JSONB.
- `personalization_files`: metadados dos uploads privados vinculados a pedido e item.
- `coupons` e `shipping_methods`: regras comerciais futuras.
- `payment_transactions`: referências e estado do Pagar.me, sem dados de cartão.
- `admin_users`: base mínima para uma futura área administrativa.
- `webhook_events`: registro idempotente de eventos externos do Pagar.me.

Todos os registros possuem `created_at` e `updated_at`; o schema mantém o último automaticamente por trigger.

## Fluxo de pedido esperado

1. O carrinho e o checkout validam os dados no servidor.
2. A aplicação cria ou reutiliza um cliente e grava `orders` com seus `order_items` e o snapshot de personalização.
3. Depois de existir um `order_id`, cada arquivo é colocado no bucket privado `order-uploads` no caminho `orders/{order_id}/uploads/{arquivo}`. Seu metadado é salvo em `personalization_files` com `order_id` e `order_item_id`.
4. O servidor cria a cobrança ou checkout hospedado no Pagar.me e registra somente referências e status em `payment_transactions`.
5. Webhooks validados do Pagar.me são registrados uma única vez em `webhook_events` e atualizam pedido e pagamento de forma idempotente.

## Privacidade e LGPD

Endereço, documento, telefone, personalizações e arquivos podem conter dados pessoais. Não os registre em logs, analytics ou URLs. O bucket de uploads deve permanecer privado; exibições administrativas devem usar URLs assinadas de curta duração e controles de acesso. Retenha somente o necessário, defina prazos de exclusão e implemente políticas de acesso, exportação e remoção de dados antes do lançamento. Este schema não cria políticas de Storage ou RLS porque elas dependem do projeto Supabase e do modelo de autenticação que ainda serão definidos.
