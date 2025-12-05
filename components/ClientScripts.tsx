'use client'

import { useEffect } from 'react'
import Script from 'next/script'

export default function ClientScripts() {
  return (
    <>
      {/* Load jQuery first - before any jQuery plugins */}
      <Script
        src="/js/jquery-3.7.1.min.js"
        strategy="afterInteractive"
        onLoad={() => {
          // jQuery is now available
          if (typeof window !== 'undefined') {
            (window as any).jQuery = (window as any).$
          }
        }}
      />
      {/* Load jQuery-dependent scripts after jQuery */}
      <Script
        src="/js/bootstrap.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="/js/jquery.magnific-popup.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="/js/jquery.slicknav.js"
        strategy="afterInteractive"
      />
      {/* Load other scripts */}
      <Script
        src="/js/wow.min.js"
        strategy="afterInteractive"
      />
      {/* Initialize everything after all scripts are loaded */}
      <Script
        src="/js/init.js"
        strategy="afterInteractive"
      />
    </>
  )
}

