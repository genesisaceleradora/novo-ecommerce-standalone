'use client'

import Script from 'next/script'
import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { trackEvent } from '@/lib/tracking/events'
import { captureUTMs } from '@/lib/tracking/utm'

const metaPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID
const ga4Id = process.env.NEXT_PUBLIC_GA4_ID

export function TrackingProvider() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    captureUTMs(searchParams)
    trackEvent('PageView', { page_path: pathname })
  }, [pathname, searchParams])

  return <>
    {metaPixelId && <Script id="meta-pixel" strategy="afterInteractive">{`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${metaPixelId}');`}</Script>}
    {ga4Id && <><Script src={`https://www.googletagmanager.com/gtag/js?id=${ga4Id}`} strategy="afterInteractive" /><Script id="ga4" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}window.gtag=gtag;gtag('js',new Date());gtag('config','${ga4Id}',{send_page_view:false});`}</Script></>}
  </>
}
