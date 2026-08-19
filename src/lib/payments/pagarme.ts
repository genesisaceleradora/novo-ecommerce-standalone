export type PagarmeConfiguration = {
  apiBaseUrl: string
  hasApiKey: boolean
  hasPublicKey: boolean
  hasWebhookSecret: boolean
}

/**
 * Server-only configuration boundary for the future Pagar.me V5 integration.
 * No request is made until the official checkout flow and credentials are configured.
 */
export function getPagarmeConfiguration(): PagarmeConfiguration {
  return {
    apiBaseUrl: process.env.PAGARME_API_BASE_URL ?? 'https://sdx-api.pagar.me/core/v5',
    hasApiKey: Boolean(process.env.PAGARME_API_KEY),
    hasPublicKey: Boolean(process.env.PAGARME_PUBLIC_KEY),
    hasWebhookSecret: Boolean(process.env.PAGARME_WEBHOOK_SECRET),
  }
}
