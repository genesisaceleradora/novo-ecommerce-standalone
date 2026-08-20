const defaultSiteUrl = 'http://localhost:3000'
const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim()

export const siteConfig = {
  name: process.env.NEXT_PUBLIC_BRAND_NAME?.trim() || 'Galanta Medical',
  initialLine: 'Galanta Ortho',
  url: (configuredSiteUrl || defaultSiteUrl).replace(/\/$/, ''),
  description: 'Tecnologia, engenharia e manufatura digital aplicada à saúde. Portal profissional Galanta Medical.',
  supportWhatsApp: process.env.NEXT_PUBLIC_SUPPORT_WHATSAPP?.trim(),
  supportEmail: process.env.NEXT_PUBLIC_SUPPORT_EMAIL?.trim(),
} as const
