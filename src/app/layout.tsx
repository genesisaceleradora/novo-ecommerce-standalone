import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Topbar } from '@/components/Topbar'
import { siteConfig } from '@/lib/site'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'A definir | Ecommerce standalone',
    template: '%s | A definir',
  },
  description: siteConfig.description,
}

type RootLayoutProps = Readonly<{ children: ReactNode }>

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR">
      <body>
        <Topbar />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
