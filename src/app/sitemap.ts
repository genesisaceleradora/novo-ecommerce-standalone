import type { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/site'

const publicPaths = [
  '/',
  '/galanta-ortho',
  '/produtos',
  '/linha-standard',
  '/linha-personal',
  '/como-funciona',
  '/amostras-tecnicas',
  '/profissionais',
  '/clinicas-e-hospitais',
  '/materiais-tecnicos',
  '/regulatorio-e-seguranca',
  '/sobre',
  '/faq',
  '/contato',
  '/politica-de-privacidade',
  '/termos-de-uso',
] as const

export default function sitemap(): MetadataRoute.Sitemap {
  return publicPaths.map((path) => ({
    url: new URL(path, siteConfig.url).toString(),
    changeFrequency: path === '/' ? 'weekly' as const : 'monthly' as const,
    priority: path === '/' ? 1 : 0.6,
  }))
}
