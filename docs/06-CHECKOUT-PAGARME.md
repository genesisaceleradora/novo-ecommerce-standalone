# 06 — Checkout Pagar.me

## 1. Decisão

O gateway de pagamento será Pagar.me.

## 2. Estratégia recomendada para MVP

Começar com uma arquitetura preparada para Pagar.me, usando checkout com redirecionamento/link de pagamento quando fizer sentido para reduzir complexidade inicial.

A documentação oficial do Pagar.me indica que o Checkout pode funcionar por criação de Link de Pagamento via API, retornando uma URL para redirecionar o comprador ao pagamento.

## 3. Referências oficiais

Consultar antes de implementar:

```txt
https://docs.pagar.me/
https://docs.pagar.me/docs/llms
https://docs.pagar.me/docs/checkout-use
https://docs.pagar.me/reference/checkout-link
https://docs.pagar.me/docs/webhooks
```

Observação: a documentação oficial menciona versão V5. Confirmar sempre a versão correta no momento da implementação.

## 4. Fluxo do checkout

```txt
Cliente → Carrinho → Checkout interno → Criar pedido local → Criar pagamento/link Pagar.me → Redirecionar/confirmar → Webhook atualiza status → Página de obrigado
```

## 5. Dados mínimos do checkout

Cliente:

```txt
Nome
E-mail
Telefone/WhatsApp
CPF/CNPJ, se exigido pelo gateway
```

Endereço:

```txt
CEP
Rua
Número
Complemento
Bairro
Cidade
Estado
```

Pedido:

```txt
Itens
Quantidade
Preço unitário
Subtotal
Frete
Desconto
Total
Personalizações
Arquivos enviados
```

Pagamento:

```txt
Método
Status
Transaction ID
Charge ID
Order ID Pagar.me
Payment link URL, se aplicável
```

## 6. Variáveis de ambiente

```env
PAGARME_API_KEY=
PAGARME_PUBLIC_KEY=
PAGARME_WEBHOOK_SECRET=
PAGARME_API_BASE_URL=https://sdx-api.pagar.me/core/v5
```

## 7. Arquivos esperados

```txt
/src/lib/payments/pagarme.ts
/src/server/checkout/create-order.ts
/src/server/checkout/create-pagarme-payment.ts
/src/server/checkout/handle-pagarme-webhook.ts
/src/app/api/checkout/create/route.ts
/src/app/api/checkout/webhook/route.ts
```

## 8. Webhooks

O Pagar.me envia webhooks/notificações por HTTP POST quando eventos acontecem, como atualizações de cobranças, pedidos ou assinaturas.

A aplicação deve:

- Receber o webhook.
- Validar origem/assinatura conforme documentação oficial.
- Registrar o payload bruto com segurança.
- Atualizar status do pedido.
- Evitar duplicidade por idempotência.

## 9. Status internos

Mapear status externos do Pagar.me para status internos:

```txt
Pagamento pendente
Pagamento aprovado
Pagamento recusado
Pedido cancelado
Pedido reembolsado
```

## 10. Idempotência

Toda atualização de pagamento deve ser idempotente.

Nunca criar pedido duplicado por múltiplos webhooks.

## 11. Segurança

- Secret key apenas no servidor.
- Não gravar dados de cartão em banco.
- Não expor payloads com dados sensíveis no client.
- Validar webhooks.
- Não logar dados sensíveis.

## 12. Aceite da integração

A integração estará pronta quando:

- Pedido local é criado.
- Pagamento/link Pagar.me é gerado.
- Cliente consegue avançar no fluxo.
- Webhook atualiza status.
- Pedido aparece no admin.
- Purchase só dispara quando pagamento for confirmado.
