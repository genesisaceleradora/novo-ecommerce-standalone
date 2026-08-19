export type PagarmeWebhookResult = {
  accepted: boolean
  reason: string
}

/**
 * Placeholder for future signature validation, idempotency and order updates.
 * Payloads are deliberately not persisted or logged in this foundation.
 */
export function preparePagarmeWebhook(): PagarmeWebhookResult {
  return { accepted: false, reason: 'Webhook Pagar.me ainda não configurado.' }
}
