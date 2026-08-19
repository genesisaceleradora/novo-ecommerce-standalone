import type { Metadata } from 'next'
import { Suspense, type ReactNode } from 'react'
import { CartDrawer } from '@/components/cart/CartDrawer'
import { CartProvider } from '@/components/cart/CartProvider'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { Topbar } from '@/components/layout/Topbar'
import { OrganizationSchema } from '@/components/seo/Schemas'
import { TrackingProvider } from '@/components/TrackingProvider'
import { createPageMetadata } from '@/lib/seo/metadata'
import { siteConfig } from '@/lib/site'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Ecommerce standalone`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  ...createPageMetadata({ title: `${siteConfig.name} | Ecommerce standalone`, description: siteConfig.description, path: '/' }),
}

type RootLayoutProps = Readonly<{ children: ReactNode }>

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR">
      <body>
        <OrganizationSchema />
        <CartProvider>
          <Topbar />
          <Header />
          <main>{children}</main>
          <Footer />
          <CartDrawer />
        </CartProvider>
        <Suspense fallback={null}><TrackingProvider /></Suspense>
      </body>
    </html>
  )
}
