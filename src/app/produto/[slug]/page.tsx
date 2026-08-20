import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { FAQ } from '@/components/marketing/FAQ'
import { ProductCard } from '@/components/product/ProductCard'
import { ProductGallery } from '@/components/product/ProductGallery'
import { Badge } from '@/components/ui/Badge'
import { ProductPersonalization } from '@/components/product/ProductPersonalization'
import { BreadcrumbSchema, ProductSchema } from '@/components/seo/Schemas'
import { ProductViewTracking } from '@/components/tracking/ProductViewTracking'
import { Container } from '@/components/ui/Container'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { getRelatedProducts, getProductBySlug, products } from '@/data/products'
import { formatPriceInBRL } from '@/lib/formatters'
import { createPageMetadata } from '@/lib/seo/metadata'

type ProductPageProps = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return products.filter((product) => product.active).map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = getProductBySlug((await params).slug)
  if (!product) return {}
  return createPageMetadata({ title: product.seoTitle, description: product.seoDescription, path: `/produto/${product.slug}` })
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = getProductBySlug((await params).slug)
  if (!product) notFound()
  const relatedProducts = getRelatedProducts(product)
  const installmentValue = formatPriceInBRL(Math.round(product.price / product.installmentMax))

  return (
    <Container className="py-10 md:py-16">
      <ProductSchema product={product} />
      <BreadcrumbSchema items={[{ name: 'Início', path: '/' }, { name: 'Catálogo', path: `/categoria/${product.categorySlug}` }, { name: product.name, path: `/produto/${product.slug}` }]} />
      <ProductViewTracking product={product} />
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-steel">Catálogo demonstrativo / {product.categorySlug}</p>
      <div className="mt-5 grid gap-10 lg:grid-cols-2 lg:gap-14">
        <ProductGallery images={product.images} productName={product.name} />
        <div className="lg:pt-4">
          {product.badge && <Badge>{product.badge}</Badge>}
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-slate sm:text-5xl">{product.name}</h1>
          <p className="mt-4 text-base leading-7 text-steel">{product.shortDescription}</p>
          <div className="mt-7 border-y border-mist py-5">
            <p className="font-display text-3xl font-semibold text-slate">{formatPriceInBRL(product.price)}</p>
            <p className="mt-1 text-sm text-steel">Em até {product.installmentMax}x de {installmentValue} sem juros <span className="text-xs">(valores demonstrativos)</span></p>
            {product.pixDiscountPercent && <p className="mt-2 text-sm font-semibold text-cyan">{product.pixDiscountPercent}% de desconto no Pix (placeholder)</p>}
          </div>
          <ProductPersonalization product={product} />
          <p className="mt-3 text-center text-xs text-steel">Carrinho persistente no navegador. Checkout será implementado em uma próxima etapa.</p>
          <dl className="mt-8 space-y-4 border-t border-mist pt-6 text-sm">
            <div><dt className="font-semibold text-slate">Produção</dt><dd className="mt-1 text-steel">{product.productionTime}</dd></div>
            <div><dt className="font-semibold text-slate">Envio</dt><dd className="mt-1 text-steel">{product.shippingInfo}</dd></div>
            {product.personalization.enabled && <div><dt className="font-semibold text-slate">Personalização</dt><dd className="mt-1 text-steel">{product.personalization.instructions ?? 'Disponível para este produto demonstrativo.'}</dd></div>}
          </dl>
        </div>
      </div>

      <section className="mt-16 border-t border-mist pt-16 md:mt-24 md:pt-24">
        <SectionTitle eyebrow="Detalhes técnicos" title="Feito para ganhar significado." />
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl bg-sterile p-6"><h2 className="font-display text-2xl font-semibold text-slate">Sobre este exemplo</h2><p className="mt-3 text-sm leading-6 text-steel">{product.longDescription}</p></div>
          <div className="rounded-2xl bg-sterile p-6"><h2 className="font-display text-2xl font-semibold text-slate">O que está incluído</h2><ul className="mt-3 space-y-2 text-sm leading-6 text-steel">{(product.whatsIncluded ?? product.benefits ?? ['Informações a definir']).map((item) => <li key={item}>— {item}</li>)}</ul></div>
        </div>
      </section>

      <section className="mt-16 md:mt-24"><SectionTitle eyebrow="Dúvidas" title="Antes de escolher." /><div className="mt-8">{product.faq && <FAQ items={product.faq} />}</div></section>

      <section className="mt-16 md:mt-24"><SectionTitle eyebrow="Você também pode gostar" title="Outros exemplos do catálogo." /><div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{relatedProducts.map((item) => <ProductCard badge={item.badge} description={item.shortDescription} href={`/produto/${item.slug}`} key={item.id} name={item.name} price={item.price} />)}</div></section>
    </Container>
  )
}
