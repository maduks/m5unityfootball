'use client'

import { useEffect } from 'react'

export default function DebugFonts() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Check if fonts are loaded
      const checkFonts = async () => {
        try {
          await document.fonts.ready
          const fonts = Array.from(document.fonts)
          console.log('Loaded fonts:', fonts.map(f => f.family))
          
          const faFonts = fonts.filter(f => 
            f.family.includes('Font Awesome') || 
            f.family.includes('FontAwesome')
          )
          console.log('Font Awesome fonts:', faFonts.map(f => f.family))
          
          // Test if webfonts are accessible
          const testFont = async (url: string) => {
            try {
              const response = await fetch(url, { method: 'HEAD' })
              console.log(`${url}: ${response.status === 200 ? '✓ Accessible' : '✗ Not accessible'}`)
            } catch (e) {
              console.error(`${url}: ✗ Error`, e)
            }
          }
          
          await testFont('/webfonts/fa-solid-900.woff2')
          await testFont('/webfonts/fa-brands-400.woff2')
        } catch (e) {
          console.error('Font check error:', e)
        }
      }
      
      setTimeout(checkFonts, 1000)
    }
  }, [])

  return (
    <div style={{ padding: '50px' }}>
      <h1>Font Debug Page</h1>
      <p>Check browser console for font loading information</p>
      <div style={{ fontSize: '48px', margin: '20px 0' }}>
        <i className="fa-solid fa-play"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-brands fa-instagram"></i>
      </div>
    </div>
  )
}
