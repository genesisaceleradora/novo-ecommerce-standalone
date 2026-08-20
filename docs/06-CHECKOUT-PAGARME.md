# 06 — Pagamento e Pagar.me

## 1. Decisão atual

Pagar.me continua sendo o gateway previsto caso a operação futura tenha venda online. O MVP Galanta Ortho não possui checkout, cobrança ou compra aberta.

```txt
Status: fundação técnica inativa
Ativação: bloqueada por decisão comercial e regulatória
```

## 2. Fluxo atual

O fluxo alvo do MVP é documentado em `19-GALANTA-ORTHO-B2B-FLOW.md`:

```txt
Seleção técnica → Dados profissionais → Confirmação → Qualificação
```

Nenhum preço, endereço de entrega, pagamento ou transação é necessário nessa etapa.

## 3. Código legado

Os arquivos atuais de checkout/Pagar.me permanecem apenas como fundação mockada até serem substituídos ou reutilizados conscientemente. Eles não devem ser conectados a credenciais, expostos no fluxo B2B ou tratados como pedido real.

## 4. Gate para avaliar pagamento

Antes de implementar:

- produto/modelo e status aplicável confirmados;
- venda online autorizada;
- público comprador definido;
- preço e política comercial definidos;
- modalidade B2B/B2C definida;
- documento e endereço necessários definidos;
- faturamento, frete e impostos definidos;
- políticas e termos revisados;
- responsável operacional definido.

## 5. Estratégia futura

Preferir link/checkout hospedado ou arquitetura equivalente segura conforme documentação oficial vigente. Nunca capturar dados de cartão diretamente sem uma arquitetura formalmente aprovada.

Fluxo possível:

```txt
Oportunidade aprovada
→ Pedido local validado
→ Pagamento/link Pagar.me
→ Redirecionamento
→ Webhook assinado
→ Status idempotente
→ Confirmação
```

## 6. Variáveis reservadas

```env
PAGARME_API_KEY=
PAGARME_PUBLIC_KEY=
PAGARME_WEBHOOK_SECRET=
PAGARME_API_BASE_URL=https://sdx-api.pagar.me/core/v5
```

Secrets apenas no servidor. Variáveis vazias não podem quebrar lint, build ou fluxo B2B.

## 7. Segurança futura

- consultar documentação oficial atual antes de implementar;
- validar assinatura/origem de webhook;
- idempotência por evento e pedido;
- nunca armazenar dados de cartão;
- não logar payloads sensíveis;
- recalcular valores no servidor;
- associar pagamento apenas a oportunidade/pedido autorizado;
- `Purchase` somente após confirmação real.

## 8. Aceite futuro

A integração só estará pronta quando pedido real, pagamento seguro, webhook, persistência, reconciliação, admin, erros, cancelamento/reembolso e tracking tiverem testes e aprovação operacional.
