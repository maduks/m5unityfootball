'use client'

import Link from 'next/link'

interface PageHeaderProps {
  title: string
  subtitle: string
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="page-header">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="page-header-box">
              <h1 className="text-anime-style-2" data-cursor="-opaque">
                {title.toUpperCase()} <span>{subtitle.toUpperCase()}</span>
              </h1>
              <nav className="wow fadeInUp">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {title} {subtitle}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

