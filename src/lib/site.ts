const defaultSiteUrl = 'http://localhost:3000'
const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim()

export const siteConfig = {
  name: process.env.NEXT_PUBLIC_BRAND_NAME?.trim() || 'A definir',
  url: (configuredSiteUrl || defaultSiteUrl).replace(/\/$/, ''),
  description: 'Ecommerce standalone premium — marca e produto a definir.',
  supportWhatsApp: process.env.NEXT_PUBLIC_SUPPORT_WHATSAPP?.trim(),
  supportEmail: process.env.NEXT_PUBLIC_SUPPORT_EMAIL?.trim(),
  hasProductionUrl: Boolean(configuredSiteUrl && !configuredSiteUrl.includes('localhost')),
} as const
