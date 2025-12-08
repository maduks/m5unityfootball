'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import PageHeader from '@/components/PageHeader'
import { initAnimations } from '@/lib/animations'

export default function SuccessPage() {
  useEffect(() => {
    initAnimations()
  }, [])

  return (
    <>
      <PageHeader title="Registration" subtitle="Success" />
      <div className="page-contact-us">
        <div className="container">
          <div className="row section-row">
            <div className="col-lg-12">
              <div className="section-title section-title-center">
                <div className="section-bg-title wow fadeInUp">
                  <span>Success</span>
                </div>
                <h3 className="wow fadeInUp" data-wow-delay="0.2s">
                  Thank you!
                </h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">
                  Your registration was submitted successfully
                </h2>
                <p className="wow fadeInUp" data-wow-delay="0.4s">
                  We&apos;ve received your details and will review them shortly. You will be contacted if any follow-up is
                  needed. In the meantime, feel free to return home or submit another registration.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div
                className="contact-form dark-section"
                style={{
                  width: '100%',
                  margin: '0',
                  maxWidth: '100%',
                  borderRadius: '20px',
                  padding: '40px',
                }}
              >
                <div className="section-title">
                  <h2 className="text-anime-style-2" data-cursor="-opaque">
                    What&apos;s next?
                  </h2>
                </div>

                <div className="row">
                  <div className="col-md-4 mb-3">
                    <Link href="/" className="btn-default btn-highlighted" style={{ display: 'inline-block' }}>
                      <span>Go to Home</span>
                    </Link>
                  </div>
                  <div className="col-md-4 mb-3">
                    <Link href="/register/player" className="btn-default" style={{ display: 'inline-block' }}>
                      <span>Register Another Player</span>
                    </Link>
                  </div>
                  <div className="col-md-4 mb-3">
                    <Link href="/register/team" className="btn-default" style={{ display: 'inline-block' }}>
                      <span>Register Another Team</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

