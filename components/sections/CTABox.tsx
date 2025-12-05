'use client'

import Image from 'next/image'

export default function CTABox() {
  return (
    <div className="cta-box dark-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="cta-box-content">
              <div className="section-title">
                <div className="section-bg-title wow fadeInUp">
                  <span>Contact</span>
                </div>
                <h3 className="wow fadeInUp" data-wow-delay="0.2s">
                  Get in Touch
                </h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">
                  Every goal every tackle every moment counts.
                </h2>
                <p className="wow fadeInUp" data-wow-delay="0.4s">
                  From high-quality training grounds and modern locker rooms to dedicated fitness centers and recovery
                  zones, our facilities support.
                </p>
              </div>
              <div className="cta-box-form wow fadeInUp" data-wow-delay="0.6s">
                <form id="cta-box" action="#" method="POST">
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter your email"
                      required
                    />
                    <button type="submit" className="btn-default">
                      submit now
                    </button>
                  </div>
                </form>
              </div>
              <div className="cta-box-list wow fadeInUp" data-wow-delay="0.8s">
                <ul>
                  <li>Special events offers</li>
                  <li>high quality training</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="cta-box-image">
              <Image src="/images/cta-box-image.png" alt="CTA" width={600} height={400} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

