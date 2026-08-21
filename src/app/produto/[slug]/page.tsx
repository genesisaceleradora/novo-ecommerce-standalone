import type { Metadata } from 'next'
import { notFound, redirect } from 'next/navigation'
import { ApprovalStatusBadge, ProductStatusBadge } from '@/components/catalog/CatalogStatusBadge'
import { CatalogGrid } from '@/components/catalog/CatalogGrid'
import { ProductGallery } from '@/components/catalog/ProductGallery'
import { TechnicalConfigurator } from '@/components/catalog/TechnicalConfigurator'
import { TechnicalDocuments } from '@/components/catalog/TechnicalDocuments'
import { TechnicalSpecifications } from '@/components/catalog/TechnicalSpecifications'
import { InstitutionalCta } from '@/components/institutional/InstitutionalCta'
import { FAQ } from '@/components/marketing/FAQ'
import { BreadcrumbSchema } from '@/components/seo/Schemas'
import { Badge } from '@/components/ui/Badge'
import { ComplianceNotice } from '@/components/ui/ComplianceNotice'
import { Container } from '@/components/ui/Container'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { catalogProducts, getCatalogCategoryById, getCatalogProductBySlug, getRelatedCatalogProducts, legacyProductAliases, requestTypeLabels } from '@/data/catalog'
import { createPageMetadata } from '@/lib/seo/metadata'

type ProductPageProps = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return [...catalogProducts.filter((product) => product.active).map(({ slug }) => ({ slug })), ...Object.keys(legacyProductAliases).map((slug) => ({ slug }))]
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const slug = (await params).slug
  const canonicalSlug = legacyProductAliases[slug] ?? slug
  const product = getCatalogProductBySlug(canonicalSlug)
  if (!product) return {}
  return { ...createPageMetadata({ title: product.seoTitle, description: product.seoDescription, path: `/produto/${product.slug}` }), robots: { index: false, follow: false } }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const slug = (await params).slug
  const alias = legacyProductAliases[slug]
  if (alias) redirect(`/produto/${alias}`)

  const product = getCatalogProductBySlug(slug)
  if (!product) notFound()
  const category = getCatalogCategoryById(product.categoryId)
  if (!category) notFound()
  const relatedProducts = getRelatedCatalogProducts(product)

  return <>
    <BreadcrumbSchema items={[{ name: 'Início', path: '/' }, { name: 'Produtos', path: '/produtos' }, { name: category.name, path: `/categoria/${category.slug}` }, { name: product.name, path: `/produto/${product.slug}` }]} />
    <Container className="py-10 md:py-16">
      <p className="font-technical text-[10px] font-semibold uppercase tracking-[0.12em] text-steel">Galanta Ortho / {category.name} / Estrutura de produto</p>
      <div className="mt-6 grid gap-10 lg:grid-cols-[1.04fr_0.96fr] lg:gap-14">
        <ProductGallery images={product.images} productName={product.name} />
        <div className="lg:pt-3">
          <div className="flex flex-wrap items-center gap-3"><ProductStatusBadge status={product.status} /><Badge variant={category.slug === 'linha-personal' ? 'personal' : 'standard'}>{category.name}</Badge></div>
          <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.06] tracking-[-0.045em] text-slate sm:text-5xl">{product.name}</h1>
          <p className="mt-5 text-base leading-7 text-steel">{product.shortDescription}</p>
          <ComplianceNotice className="mt-7" title="Informação de produto em desenvolvimento" tone="warning">{product.regulatoryNotice}</ComplianceNotice>

          <dl className="mt-7 divide-y divide-mist rounded-2xl border border-mist bg-white px-5">
            <div className="grid gap-2 py-4 sm:grid-cols-[0.8fr_1fr_auto] sm:items-center"><dt className="font-technical text-[10px] font-semibold uppercase tracking-[0.1em] text-steel">Finalidade pretendida</dt><dd className="text-sm font-medium text-slate">{product.intendedPurpose?.value ?? 'A confirmar'}</dd><dd>{product.intendedPurpose && <ApprovalStatusBadge status={product.intendedPurpose.status} />}</dd></div>
            <div className="grid gap-2 py-4 sm:grid-cols-[0.8fr_1fr_auto] sm:items-center"><dt className="font-technical text-[10px] font-semibold uppercase tracking-[0.1em] text-steel">Condição comercial</dt><dd className="text-sm font-medium text-slate">Preço e condição sob consulta</dd><dd><ApprovalStatusBadge status="pending" /></dd></div>
          </dl>

          <div className="mt-7"><TechnicalConfigurator productName={product.name} variations={product.variations} /></div>
        </div>
      </div>
    </Container>

    <section className="border-y border-mist bg-white py-16 md:py-24">
      <Container>
        <SectionTitle description="Cada campo possui status próprio. Informações restritas ou pendentes não são convertidas em instruções prováveis." eyebrow="Ficha estrutural" title="Especificações com nível de aprovação visível." />
        <div className="mt-10"><TechnicalSpecifications specifications={product.specifications} /></div>
      </Container>
    </section>

    <Container className="py-16 md:py-24">
      <div className="grid gap-12 lg:grid-cols-2">
        <div><SectionTitle description="Os tipos abaixo representam caminhos futuros de qualificação, não disponibilidade, proposta ou pedido." eyebrow="Interesses compatíveis" title="Próximos passos profissionais." /><div className="mt-7 flex flex-wrap gap-3">{product.requestTypes.map((requestType) => <Badge key={requestType} variant="validation">{requestTypeLabels[requestType]}</Badge>)}</div></div>
        <div><SectionTitle description="A associação ao produto indica público da plataforma, sem estabelecer indicação clínica individual." eyebrow="Público profissional" title="Contexto de avaliação." /><ul className="mt-7 grid gap-3 sm:grid-cols-2">{product.professionalAudience.map((audience) => <li className="rounded-lg border border-mist bg-sterile px-4 py-3 text-sm font-medium text-slate" key={audience}>{audience}</li>)}</ul></div>
      </div>
    </Container>

    <section className="border-y border-mist bg-white py-16 md:py-24">
      <Container>
        <SectionTitle description="Arquivos sem aprovação permanecem sem URL pública e sem ação de download." eyebrow="Documentos técnicos" title="Publicação condicionada a versão e aprovação." />
        <div className="mt-10"><TechnicalDocuments documents={product.documents} /></div>
      </Container>
    </section>

    <Container className="py-16 md:py-24">
      <SectionTitle description="Respostas limitadas ao estado atual da plataforma, sem recomendação individual." eyebrow="FAQ profissional" title="Antes de registrar interesse." />
      <div className="mt-8"><FAQ items={product.faq} /></div>
      <ComplianceNotice className="mt-10" title="Não envie dados de pacientes" tone="restricted">Não inclua nomes, documentos, fotografias, diagnósticos, prontuários ou qualquer informação identificável de pacientes no contato atual.</ComplianceNotice>
    </Container>

    {relatedProducts.length > 0 && <section className="border-y border-mist bg-white py-16 md:py-24"><Container><SectionTitle description="Registros relacionados preservam o mesmo nível de transparência e aprovação." eyebrow="Estrutura relacionada" title="Outras áreas do catálogo Galanta Ortho." /><div className="mt-10"><CatalogGrid products={relatedProducts} /></div></Container></section>}

    <InstitutionalCta description="Registre interesse profissional. A seleção técnica completa será conectada ao fluxo B2B na próxima fase." primaryAction={{ href: '/contato', label: 'Falar com a equipe Galanta' }} secondaryAction={{ href: '/produtos', label: 'Voltar ao catálogo' }} title="Avalie a estrutura sem iniciar compra ou pagamento." />
  </>
}
