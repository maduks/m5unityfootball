'use client'

import Image from 'next/image'

export default function WhatWeDo() {
  return (
    <div className="what-we-do">
      <div className="container">
        <div className="row section-row">
          <div className="col-lg-12">
            <div className="section-title section-title-center">
              <div className="section-bg-title wow fadeInUp">
                <span>What we do</span>
              </div>
              <h3 className="wow fadeInUp" data-wow-delay="0.2s">
              Organizing
              </h3>
              <h2 className="text-anime-style-2" data-cursor="-opaque">
                Annual Football Competition <span>for Unity & Excellence</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="what-we-do-list">
              <div className="what-do-list-item wow fadeInUp">
                <div className="icon-box">
                  <Image src="/images/icon-what-we-do-1.svg" alt="Icon" width={50} height={50} />
                </div>
                <div className="what-do-item-content">
                  <h3>Annual Unity Football Cup Competition</h3>
                  <ul>
                    <li>Organizing competitive matches between six teams</li>
                    <li>Group stage, semi-finals, and final matches</li>
                  </ul>
                </div>
              </div>
              <div className="what-do-list-item wow fadeInUp" data-wow-delay="0.2s">
                <div className="icon-box">
                  <Image src="/images/icon-what-we-do-2.svg" alt="Icon" width={50} height={50} />
                </div>
                <div className="what-do-item-content">
                  <h3>Player Registration & Management</h3>
                  <ul>
                    <li>Managing player registration and eligibility</li>
                    <li>Ensuring fair play and rule compliance</li>
                  </ul>
                </div>
              </div>
              <div className="what-do-list-item wow fadeInUp" data-wow-delay="0.4s">
                <div className="icon-box">
                  <Image src="/images/icon-what-we-do-3.svg" alt="Icon" width={50} height={50} />
                </div>
                <div className="what-do-item-content">
                  <h3>Awards & Recognition</h3>
                  <ul>
                    <li>Recognizing outstanding players and teams</li>
                    <li>Presenting awards and prize money</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
