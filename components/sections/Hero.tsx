'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {

  return (
    <div className="hero dark-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="hero-content">
              <div className="section-title">
                <h3 className="wow fadeInUp">Mgbowo Unity Football Cup</h3>
                <h1 style={{textTransform:'uppercase'}} className="text-anime-style-2" data-cursor="-opaque">
                  UNITING <span style={{color:'white'}}>MGBOWOLESE</span> THROUGH <span>FOOTBALL</span>
                </h1>
              </div>
              <div className="hero-content-list wow fadeInUp" data-wow-delay="0.2s">
                <ul>
                  <li>6 Teams from 5 Villages + Ohaire United FC</li>
                  <li>Annual Competition Since 2018</li>
                </ul>
              </div>
              <div className="hero-content-body wow fadeInUp" data-wow-delay="0.4s">
                <p>
                  Founded by Dr. Princeton Akachukwu Steve Akachukwu (Kpakpando 1 of Mgbowolese), M5 uses football as a 
                  tool for peace, unity, and harmonious relationships amongst the five villages of Mgbowo.
                </p>
              </div>
              <div className="hero-btn wow fadeInUp" data-wow-delay="0.6s">
                <Link href="/register/player" className="btn-default btn-highlighted">
                  Register as Player
                </Link>
                <Link href="/register/team" className="btn-default btn-highlighted btn-transparent">
                  Register Team
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="hero-image">
              <Image src="/images/hero-image.png" alt="Hero" width={600} height={600} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

