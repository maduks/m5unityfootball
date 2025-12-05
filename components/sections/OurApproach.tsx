'use client'

import Image from 'next/image'

const approachItems = [
  {
    icon: '/images/icon-approach-item-1.svg',
    title: 'our mission',
    description: 'Our mission is to develop, confident players, promote teamwork.',
    list: ['Fan Support Benefits club.'],
    active: true,
  },
  {
    icon: '/images/icon-approach-item-2.svg',
    title: 'our vision',
    description: 'Our vision is to develop, confident players, promote teamwork.',
    list: ['Fan Support Benefits club.'],
  },
]

export default function OurApproach() {
  return (
    <div className="our-approach dark-section">
      <div className="container-fluid">
        <div className="row no-gutters">
          <div className="col-lg-6">
            <div className="our-approach-image">
              <Image src="/images/approach-image.jpg" alt="Approach" width={600} height={500} />
              <div className="video-play-button">
                <a href="https://www.youtube.com/watch?v=Y-x0efG1seA" className="popup-video" data-cursor-text="Play">
                  <i className="fa-solid fa-play"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="our-approach-content">
              <div className="section-title">
                <div className="section-bg-title wow fadeInUp">
                  <span>Approach</span>
                </div>
                <h3 className="wow fadeInUp" data-wow-delay="0.2s">
                  Our Approach
                </h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">
                  Driving the Future of Football with Passion and Purpose
                </h2>
                <p className="wow fadeInUp" data-wow-delay="0.4s">
                  We are committed to shaping the next generation of football through innovation, integrity, dedication
                  with a deep love for the game and a clear vision for its future.
                </p>
              </div>
              <div className="approach-item-box">
                {approachItems.map((item, index) => (
                  <div
                    key={index}
                    className={`approach-item ${item.active ? 'active' : ''} wow fadeInUp`}
                    data-wow-delay={`${0.6 + index * 0.2}s`}
                  >
                    <div className="approach-item-header">
                      <div className="icon-box">
                        <Image src={item.icon} alt={item.title} width={50} height={50} />
                      </div>
                      <div className="approach-item-title">
                        <h3>{item.title}</h3>
                      </div>
                    </div>
                    <div className="approach-item-content">
                      <p>{item.description}</p>
                      <ul>
                        {item.list.map((listItem, i) => (
                          <li key={i}>{listItem}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

