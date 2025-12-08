'use client'

import Link from 'next/link'
import Image from 'next/image'
import ScrollingTicker from './ScrollingTicker'

export default function Footer() {
  return (
    <footer className="main-footer">
      {/* <ScrollingTicker /> */}
      <div className="footer-box dark-section">
        <div className="container">
          <div className="row">
        

            <div className="col-lg-4">
              <div className="about-footer">
                <div className="footer-logo">
                  <Image src="/images/footer-logo.svg" alt="Logo" width={150} height={50} />
                </div>
                <div className="about-footer-content">
                  <p>
                    Mgbowo Unity Football Cup Competition (M5) - . 
                    Founded in 2018 to foster peace, unity, and harmonious relationships amongst the five villages 
                    of Mgbowo.
                  </p>
                </div>
                <div className="footer-social-links">
                  <h3>Follow Us On:</h3>
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-pinterest-p"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-x-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-3">
              <div className="footer-links footer-menu">
                <h3>quick links</h3>
                <ul>
                  <li>
                    <Link href="/">home</Link>
                  </li>
                  <li>
                    <Link href="/about">about us</Link>
                  </li>
                  <li>
                    <Link href="/register/player">Player Registration</Link>
                  </li>
                  <li>
                    <Link href="/register/team">Team Registration</Link>
                  </li>
                  <li>
                    <Link href="/faqs">FAQs</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-4">
              <div className="footer-links">
                <h3>Competition</h3>
                <ul>
                  <li>
                    <Link href="/about">About M5</Link>
                  </li>
                  <li>
                    <Link href="/image-gallery">Image Gallery</Link>
                  </li>
                  <li>
                    <Link href="/video-gallery">Video Gallery</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-5">
              <div className="footer-links footer-contact-details">
                <h3>Club Information</h3>
                <div className="footer-contact-item">
                  <div className="icon-box">
                    <Image src="/images/icon-location-white.svg" alt="Location" width={20} height={20} />
                  </div>
                  <div className="footer-contact-item-content">
                    <h3>Competition Venue</h3>
                    <p>Boys&apos; Secondary School, Mgbowo Football Pitch</p>
                  </div>
                </div>
                <div className="footer-contact-item">
                  <div className="icon-box">
                    <Image src="/images/icon-phone-white.svg" alt="Phone" width={20} height={20} />
                  </div>
                  <div className="footer-contact-item-content">
                    <h3>Contact</h3>
                    <p>
                      <a href="/contact">Central Organizing Committee</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-copyright">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="footer-copyright-text">
                  <p>Copyright © 2025 Mgbowo Unity Football Cup Competition (M5). All Rights Reserved.</p>
                  <p style={{ fontSize: '12px', marginTop: '5px', opacity: 0.8 }}>
                    Founded by Dr. Princeton Akachukwu Steve Akachukwu (Kpakpando 1 of Mgbowolese)
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="footer-privacy-policy">
                  <ul>
                    <li>
                      <a href="#">terms & condition</a>
                    </li>
                    <li>
                      <a href="#">privacy policy</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

