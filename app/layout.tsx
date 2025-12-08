import type { Metadata } from 'next'
import { Bebas_Neue } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Preloader from '@/components/Preloader'
import ClientScripts from '@/components/ClientScripts'
import ScriptLoader from '@/components/ScriptLoader'
import Script from 'next/script'

const bebasNeue = Bebas_Neue({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-bebas-neue',
})

export const metadata: Metadata = {
  title: 'M5 Unity Football Cup - Mgbowo Unity Football Cup Competition',
  description: 'Uniting Mgbowolese through the beautiful game. Annual football competition since 2018, bringing together 6 teams from 5 villages of Mgbowo community.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" type="image/x-icon" href="/images/favicon.png" />
        {/* Preload local webfonts for faster loading */}
        <link
          rel="preload"
          href="/webfonts/fa-brands-400.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/webfonts/fa-solid-900.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      {/* Expose the Bebas Neue variable without forcing it on all text */}
      <body className={bebasNeue.variable}>
        <ScriptLoader />
        <Preloader />
        <Header />
        <main>{children}</main>
        <Footer />
        <ClientScripts />
      </body>
    </html>
  )
}
