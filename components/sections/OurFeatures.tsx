'use client'

import Link from 'next/link'
import Image from 'next/image'

const features = [
  {
    icon: '/images/icon-feature-1.svg',
    title: 'Fostering Unity & Peace',
    description: 'Promoting sustainable unity and peaceful co-existence amongst the five villages of Mgbowo through the beautiful game of football.',
  },
  {
    icon: '/images/icon-feature-2.svg',
    title: 'International Player Development',
    description: 'Producing Mgbowo players who can compete on the international stage, serving as a stepping stone for talented players.',
  },
  {
    icon: '/images/icon-feature-3.svg',
    title: 'Talent Discovery Platform',
    description: 'Discovering talented players through competitive matches, with live streaming to expose players to European scouts.',
  },
  {
    icon: '/images/icon-feature-4.svg',
    title: 'Community Image Projection',
    description: 'Projecting the image of Mgbowo Community positively to the outside world through organized football competition.',
  },
]

export default function OurFeatures() {
  return (
    <div className="our-features dark-section">
      <div className="container-fluid">
        <div className="row no-gutters">
          <div className="col-lg-6">
            <div className="feature-image-content">
              <div className="section-title">
                <h3 className="wow fadeInUp">our features</h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">
                  Building unity through <span>competitive football</span>
                </h2>
                <p className="wow fadeInUp" data-wow-delay="0.2s">
                  M5 Unity Football Cup Competition brings together six teams from five villages, creating a platform for 
                  unity, talent development, and community growth through organized football.
                </p>
              </div>
              <div className="feature-btn wow fadeInUp" data-wow-delay="0.4s">
                <Link href="/about" className="btn-default">
                  Read More 
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="feature-list">
              {features.map((feature, index) => (
                <div key={index} className="feature-list-item wow fadeInUp" data-wow-delay={`${index * 0.2}s`}>
                  <div className="icon-box">
                    <Image src={feature.icon} alt={feature.title} width={50} height={50} />
                  </div>
                  <div className="feature-item-content">
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
