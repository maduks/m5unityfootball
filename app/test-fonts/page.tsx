'use client'

export default function TestFontsPage() {
  return (
    <div style={{ padding: '50px', fontSize: '48px', textAlign: 'center' }}>
      <h1>Font Awesome Test</h1>
      <div style={{ margin: '30px 0' }}>
        <div style={{ margin: '20px' }}>
          <i className="fa-solid fa-play" style={{ color: 'red', marginRight: '10px' }}></i>
          <span>Play Icon</span>
        </div>
        <div style={{ margin: '20px' }}>
          <i className="fa-solid fa-star" style={{ color: 'gold', marginRight: '10px' }}></i>
          <span>Star Icon</span>
        </div>
        <div style={{ margin: '20px' }}>
          <i className="fa-brands fa-instagram" style={{ color: 'purple', marginRight: '10px' }}></i>
          <span>Instagram Icon</span>
        </div>
        <div style={{ margin: '20px' }}>
          <i className="fa-brands fa-facebook-f" style={{ color: 'blue', marginRight: '10px' }}></i>
          <span>Facebook Icon</span>
        </div>
      </div>
      <div style={{ fontSize: '14px', marginTop: '40px', padding: '20px', background: '#f0f0f0', borderRadius: '8px' }}>
        <p><strong>Instructions:</strong></p>
        <p>1. Open DevTools → Network tab</p>
        <p>2. Filter by "woff2"</p>
        <p>3. Refresh page</p>
        <p>4. Check if you see requests to /webfonts/fa-solid-900.woff2 and fa-brands-400.woff2</p>
        <p>5. If you see icons above, fonts are working! ✅</p>
        <p>6. If you see squares or text, fonts are NOT loading ❌</p>
      </div>
    </div>
  )
}
