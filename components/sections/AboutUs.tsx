'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function AboutUs() {
  return (
    <div className="about-us">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            {/* About Us Content Start */}
            <div className="about-us-content">
              {/* Section Title Start */}
              <div className="section-title">
                <div className="section-bg-title wow fadeInUp">
                  <span>about us</span>
                </div>
                <h3 className="wow fadeInUp" data-wow-delay="0.2s">
                  About M5 Competition
                </h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">
                  Uniting Mgbowolese through <span>the beautiful game</span>
                </h2>
                <p className="wow fadeInUp" data-wow-delay="0.4s">
                  The Mgbowo Unity Football Cup Competition (M5) was founded in 2018 by Dr. Princeton Akachukwu Steve 
                  Akachukwu (Kpakpando 1 of Mgbowolese) with a vision to use football as a veritable tool for peace, 
                  unity, and harmonious relationships amongst the five villages of Mgbowo.
                </p>
                <p className="wow fadeInUp" data-wow-delay="0.5s" style={{ marginTop: '20px' }}>
                  This annual competition brings together six teams representing Amata, Alachara, Ezioha, Inyi, Imama, 
                  and Ohaire United FC, creating a platform where football dreams take shape and champions are made daily.
                </p>
              </div>
              {/* Section Title End */}

              {/* About Us Body Start */}
              <div className="about-us-body" style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                {/* About Us List Start */}
                <div className="about-us-list wow fadeInUp" data-wow-delay="0.6s" style={{ width: '100%' }}>
                  <h4 style={{ marginBottom: '15px', fontSize: '20px', fontFamily: 'var(--font-bebas-neue)' }}>
                    Our Vision
                  </h4>
                  <ul>
                    <li>To unite Mgbowolese through football</li>
                    <li>To produce Mgbowo players for international football</li>
                    <li>To serve as a stepping stone towards establishing a functional football club</li>
                    <li>To discover talented players in Mgbowo</li>
                    <li>To project the image of Mgbowo Community positively to the outside world</li>
                  </ul>
                </div>
                {/* About Us List End */}

                {/* Competition Details Start */}
                <div  className="about-us-details wow fadeInUp" data-wow-delay="0.8s" style={{ width: '100%',display:'none' }}>
                  <div className="row">
                    <div className="col-md-6">
                      <div style={{ marginBottom: '20px' }}>
                        <h4 style={{ fontSize: '18px', fontFamily: 'var(--font-bebas-neue)', marginBottom: '10px' }}>
                          Competition Format
                        </h4>
                        <p style={{ fontSize: '14px', lineHeight: '1.8' }}>
                          Six teams divided into two groups of three. Group stage matches lead to semi-finals, 
                          with the top two teams from each group advancing. The final determines the champion, 
                          while semi-final losers compete for third place.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div style={{ marginBottom: '20px' }}>
                        <h4 style={{ fontSize: '18px', fontFamily: 'var(--font-bebas-neue)', marginBottom: '10px' }}>
                          Competition Venue
                        </h4>
                        <p style={{ fontSize: '14px', lineHeight: '1.8' }}>
                          The officially recognized venue is the football pitch of Boys&apos; Secondary School, Mgbowo, 
                          where all matches are played in a spirit of unity and fair play.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Competition Details End */}

              
              </div>
              {/* About Us Body End */}
            </div>
            {/* About Us Content End */}
          </div>

          <div className="col-lg-6">
            {/* About Image Box Start */}
            <div className="about-image-box">
              {/* About Us Images Start */}
              <div className="about-us-images">
                <figure className="image-anime ">
                  <img src="/images/chairman.JPG" alt="About Us" />
                </figure>
              </div>
              {/* About Us Images End */}

            
            </div>
            {/* About Image Box End */}
          </div>
        </div>
      </div>
    </div>
  )
}
