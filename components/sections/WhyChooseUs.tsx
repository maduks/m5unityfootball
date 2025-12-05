'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function WhyChooseUs() {
  return (
    <div className="why-choose-us">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="why-choose-image">
              <Image src="/images/why-choose-image.png" alt="Why Choose Us" width={500} height={500} />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="why-choose-content">
              <div className="section-title">
                <div className="section-bg-title wow fadeInUp">
                  <span>Why Join </span>
                </div>
                <h3 className="wow fadeInUp" data-wow-delay="0.2s">
                  Why Join M5
                </h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">
                  Join the Premier Unity Football <span>Competition in Mgbowo</span>
                </h2>
                <p className="wow fadeInUp" data-wow-delay="0.4s">
                  M5 Unity Football Cup Competition offers a unique platform that brings together players, teams, and 
                  communities in the spirit of unity, fair play, and excellence.
                </p>
              </div>
              <div className="why-choose-body">
                <div className="why-choose-item-list wow fadeInUp" data-wow-delay="0.6s">
                  <div className="why-choose-item">
                    <div className="icon-box">
                      <Image src="/images/icon-why-choose-1.svg" alt="Icon" width={50} height={50} />
                    </div>
                    <div className="why-choose-item-content">
                      <h3>Unity & Community Building</h3>
                    </div>
                  </div>
                  <div className="why-choose-item">
                    <div className="icon-box">
                      <Image src="/images/icon-why-choose-2.svg" alt="Icon" width={50} height={50} />
                    </div>
                    <div className="why-choose-item-content">
                      <h3>Fair & Transparent Competition</h3>
                    </div>
                  </div>
                </div>
                <div className="why-choose-list-circle">
                  <div className="why-choose-list wow fadeInUp" data-wow-delay="0.8s">
                    <ul>
                      <li>Strict eligibility rules ensuring fair play for all teams.</li>
                      <li>Professional organization with dedicated committees.</li>
                      <li>Talent recognition and exposure to international scouts.</li>
                      <li>Prize money and awards for all participating teams.</li>
                    </ul>
                  </div>
                  <div className="contact-us-circle">
                    <Link href="/register/player">
                      <Image src="/images/contact-us-circle.svg" alt="Contact" width={150} height={150} />
                      <div className="contact-circle-counter">
                        <h2>
                          <span className="counter">6yr</span>+
                        </h2>
                       
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{display:'none'}} className="col-lg-12">
            <div className="offer-boxes">
              <div className="offer-box-item wow fadeInUp">
                <div className="offer-image">
                  <Image src="/images/offer-image-1.jpg" alt="Offer" width={600} height={300} />
                </div>
                <div className="offer-item-content">
                  <h2>Annual Unity Football Cup Competition</h2>
                  <h3>Join 6 Teams from 5 Villages</h3>
                </div>
              </div>
              <div className="offer-box-item wow fadeInUp" data-wow-delay="0.2s">
                <div className="offer-image">
                  <Image src="/images/offer-image-2.jpg" alt="Offer" width={600} height={300} />
                </div>
                <div className="offer-item-content">
                  <h2>Talent Recognition & Awards Program</h2>
                  <h3>Best Player, Highest Scorer & More</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
