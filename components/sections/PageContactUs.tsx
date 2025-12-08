'use client'

import Image from 'next/image'

export default function PageContactUs() {
  return (
    <div className="page-contact-us">
      <div className="container">
        <div className="row section-row">
          <div className="col-lg-12">
            <div className="section-title section-title-center">
              <div className="section-bg-title wow fadeInUp">
                <span>contact us</span>
              </div>
              <h3 className="wow fadeInUp" data-wow-delay="0.2s">
                contact us
              </h3>
              <h2 className="text-anime-style-2" data-cursor="-opaque">
                Let&apos;s connect and passionately <span>kick things off</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="contact-us-image">
              <Image src="/images/contact-us-image.jpg" alt="Contact" width={500} height={400} />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="contact-info-list">
              <div className="contact-info-item wow fadeInUp">
                <div className="icon-box">
                  <Image src="/images/icon-phone-white.svg" alt="Phone" width={30} height={30} />
                </div>
                <div className="contact-info-content">
                  <h3>For Inquiries, Call</h3>
                  <p>
                    <a href="tel:+2348129649240">+234 812 964 9240</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="conatct-us-form">
              <div className="google-map order-lg-1 order-2">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96737.10562045308!2d-74.08535042841811!3d40.739265258395164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1703158537552!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="contact-form dark-section order-lg-1 order-1">
                <div className="section-title">
                  <h2 className="text-anime-style-2" data-cursor="-opaque">
                    send us message
                  </h2>
                </div>
                <form id="contactForm" action="#" method="POST" className="wow fadeInUp" data-wow-delay="0.2s">
                  <div className="row">
                    <div className="form-group col-md-6 mb-4">
                      <input
                        type="text"
                        name="fname"
                        className="form-control"
                        id="fname"
                        placeholder="First Name"
                        required
                      />
                    </div>
                    <div className="form-group col-md-6 mb-4">
                      <input
                        type="text"
                        name="lname"
                        className="form-control"
                        id="lname"
                        placeholder="Last Name"
                        required
                      />
                    </div>
                    <div className="form-group col-md-6 mb-4">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        id="email"
                        placeholder="Email Address"
                        required
                      />
                    </div>
                    <div className="form-group col-md-6 mb-4">
                      <input
                        type="text"
                        name="phone"
                        className="form-control"
                        id="phone"
                        placeholder="Phone No."
                        required
                      />
                    </div>
                    <div className="form-group col-md-12 mb-5">
                      <textarea
                        name="message"
                        className="form-control"
                        id="message"
                        rows={4}
                        placeholder="Write Message..."
                      ></textarea>
                    </div>
                    <div className="col-lg-12">
                      <div className="contact-form-btn">
                        <button type="submit" className="btn-default btn-highlighted">
                          <span>submit now</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

