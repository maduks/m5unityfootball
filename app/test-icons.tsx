'use client'

export default function TestIcons() {
  return (
    <div style={{ padding: '50px', fontSize: '48px' }}>
      <h1>Font Awesome Icon Test</h1>
      <div style={{ margin: '20px 0' }}>
        <i className="fa-solid fa-play" style={{ marginRight: '20px', color: 'red' }}></i>
        <i className="fa-solid fa-star" style={{ marginRight: '20px', color: 'gold' }}></i>
        <i className="fa-brands fa-instagram" style={{ marginRight: '20px', color: 'purple' }}></i>
        <i className="fa-brands fa-facebook-f" style={{ marginRight: '20px', color: 'blue' }}></i>
      </div>
      <p style={{ fontSize: '14px' }}>If you see icons above, fonts are loading. If you see squares or text, fonts are NOT loading.</p>
    </div>
  )
}
