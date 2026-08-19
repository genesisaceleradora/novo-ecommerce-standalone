# Prompt Codex — Task 5: Checkout Pagar.me

Prepare a arquitetura de checkout com Pagar.me.

Leia:

- `docs/06-CHECKOUT-PAGARME.md`
- documentação oficial Pagar.me V5 antes de implementar endpoints reais.

Entregáveis:

- Página `/checkout`.
- Formulário de cliente.
- Formulário de endereço.
- Resumo do pedido.
- `/src/lib/payments/pagarme.ts`.
- `/src/app/api/checkout/create/route.ts`.
- `/src/app/api/checkout/webhook/route.ts`.
- Tipos de payload.
- Tratamento inicial de erros.

Regras:

- Secret key somente server-side.
- Não capturar cartão manualmente nesta task.
- Deixar preparado para link de pagamento/checkout Pagar.me.
- Webhook deve ser idempotente.
- `Purchase` não dispara aqui, somente após confirmação futura.
