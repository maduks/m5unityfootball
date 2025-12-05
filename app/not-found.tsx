import Link from 'next/link'
import PageHeader from '@/components/PageHeader'
import ScrollingTicker from '@/components/ScrollingTicker'

export default function NotFound() {
  return (
    <>
      <PageHeader title="404" subtitle="Page Not Found" />
      <ScrollingTicker />
      <div className="container" style={{ padding: '100px 0', textAlign: 'center' }}>
        <h1>404 - Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <Link href="/" className="btn-default btn-highlighted" style={{ marginTop: '20px', display: 'inline-block' }}>
          Go Home
        </Link>
      </div>
    </>
  )
}



