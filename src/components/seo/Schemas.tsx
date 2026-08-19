import { absoluteUrl } from '@/lib/seo/metadata'
import { siteConfig } from '@/lib/site'
import type { Product } from '@/types'
import { JsonLd } from './JsonLd'

export function OrganizationSchema() {
  return <JsonLd data={{ '@context': 'https://schema.org', '@type': 'Organization', name: siteConfig.name, url: siteConfig.url, description: siteConfig.description }} />
}

type BreadcrumbSchemaProps = { items: Array<{ name: string; path: string }> }

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  return <JsonLd data={{ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: items.map((item, index) => ({ '@type': 'ListItem', position: index + 1, name: item.name, item: absoluteUrl(item.path) })) }} />
}

export function ProductSchema({ product }: { product: Product }) {
  return <JsonLd data={{
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.longDescription,
    image: product.images.map((image) => absoluteUrl(image.src)),
    brand: { '@type': 'Brand', name: siteConfig.name },
    offers: {
      '@type': 'Offer',
      url: absoluteUrl(`/produto/${product.slug}`),
      priceCurrency: 'BRL',
      price: (product.price / 100).toFixed(2),
      availability: 'https://schema.org/InStock',
      itemCondition: 'https://schema.org/NewCondition',
    },
  }} />
}
