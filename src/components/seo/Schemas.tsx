import { absoluteUrl } from '@/lib/seo/metadata'
import { siteConfig } from '@/lib/site'
import { JsonLd } from './JsonLd'

export function OrganizationSchema() {
  return <JsonLd data={{ '@context': 'https://schema.org', '@type': 'Organization', name: siteConfig.name, url: siteConfig.url, description: siteConfig.description }} />
}

type BreadcrumbSchemaProps = { items: Array<{ name: string; path: string }> }

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  return <JsonLd data={{ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: items.map((item, index) => ({ '@type': 'ListItem', position: index + 1, name: item.name, item: absoluteUrl(item.path) })) }} />
}
