import type { Metadata } from 'next'
import { IBM_Plex_Mono, Inter, Sora } from 'next/font/google'
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

const sora = Sora({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-sora',
})

const inter = Inter({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-inter',
})

const ibmPlexMono = IBM_Plex_Mono({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-ibm-plex-mono',
  weight: ['400', '500', '600'],
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Tecnologia aplicada à saúde`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  ...createPageMetadata({ title: `${siteConfig.name} | Tecnologia aplicada à saúde`, description: siteConfig.description, path: '/' }),
}

type RootLayoutProps = Readonly<{ children: ReactNode }>

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html className={`${sora.variable} ${inter.variable} ${ibmPlexMono.variable}`} lang="pt-BR">
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
