# 10 — Painel Administrativo

## 1. Objetivo

Criar painel simples para acompanhamento de pedidos e produção.

## 2. MVP

No MVP, o admin deve ter:

- Login simples por senha via env.
- Lista de pedidos.
- Detalhe do pedido.
- Alteração de status.
- Visualização de personalização.
- Links para arquivos enviados.
- Campo para código de rastreio.

## 3. Status de pedido

```txt
Novo pedido
Pagamento pendente
Pagamento aprovado
Aguardando personalização
Arquivos recebidos
Em revisão
Em produção
Pronto para envio
Enviado
Entregue
Cancelado
Reembolsado
```

## 4. Campos do pedido no admin

```txt
Número do pedido
Data
Cliente
Contato
Itens
Total
Status do pagamento
Status de produção
Personalização
Arquivos
UTMs
Código de rastreio
Observações internas
```

## 5. Não escopo inicial

- Permissões avançadas.
- Dashboard financeiro completo.
- Gestão de estoque avançada.
- Edição visual de páginas.
- CRM.
- Automação de WhatsApp.

## 6. Segurança

- Não expor admin publicamente sem senha.
- Senha via variável de ambiente.
- Nada de dados sensíveis em logs.
- Links de arquivos devem ser protegidos.
