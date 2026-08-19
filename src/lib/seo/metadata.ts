import type { Metadata } from 'next'
import { siteConfig } from '@/lib/site'

export function absoluteUrl(path = '/') {
  return new URL(path, siteConfig.url).toString()
}

type PageMetadataInput = { title: string; description: string; path: string }

export function createPageMetadata({ title, description, path }: PageMetadataInput): Metadata {
  const canonical = absoluteUrl(path)
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: { type: 'website', locale: 'pt_BR', url: canonical, siteName: siteConfig.name, title, description },
    twitter: { card: 'summary_large_image', title, description },
  }
}
