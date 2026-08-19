import type { MetadataRoute } from 'next'
import { categories } from '@/data/categories'
import { products } from '@/data/products'
import { siteConfig } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteConfig.url, changeFrequency: 'weekly', priority: 1 },
    ...categories.filter((category) => category.active).map((category) => ({ url: `${siteConfig.url}/categoria/${category.slug}`, changeFrequency: 'weekly' as const, priority: 0.8 })),
    ...products.filter((product) => product.active).map((product) => ({ url: `${siteConfig.url}/produto/${product.slug}`, changeFrequency: 'weekly' as const, priority: 0.7 })),
  ]
}
