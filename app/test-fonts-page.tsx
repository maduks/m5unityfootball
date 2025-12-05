'use client'

export default function TestFontsPage() {
  return (
    <div style={{ padding: '50px', fontSize: '48px' }}>
      <h1>Font Test Page</h1>
      <div style={{ margin: '20px 0' }}>
        <i className="fa-solid fa-play" style={{ marginRight: '20px' }}></i>
        <i className="fa-solid fa-star" style={{ marginRight: '20px' }}></i>
        <i className="fa-brands fa-instagram" style={{ marginRight: '20px' }}></i>
        <i className="fa-brands fa-facebook-f" style={{ marginRight: '20px' }}></i>
      </div>
      <p>If you see icons above, fonts are loading. If you see squares or nothing, fonts are not loading.</p>
      <div style={{ marginTop: '30px', fontSize: '14px' }}>
        <p>Check DevTools → Network → Filter by "woff2" to see if fonts are being requested.</p>
      </div>
    </div>
  )
}
