'use client'

import Link from 'next/link'
import Image from 'next/image'

const services = [
  {
    id: 1,
    title: 'Professional Training Grounds',
    image: '/images/service-1.jpg',
    description:
      'Our state-of-the-art indoor training arena controlled environment for year-round practice, grade advanced lighting, and modern equipment to enhance player performance and development.',
  },
  {
    id: 2,
    title: 'Indoor Training Arena',
    image: '/images/service-2.jpg',
    description:
      'Our state-of-the-art indoor training arena controlled environment for year-round practice, grade advanced lighting, and modern equipment to enhance player performance and development.',
    active: true,
  },
  {
    id: 3,
    title: 'Fitness & Conditioning Center',
    image: '/images/service-3.jpg',
    description:
      'Our state-of-the-art indoor training arena controlled environment for year-round practice, grade advanced lighting, and modern equipment to enhance player performance and development.',
  },
  {
    id: 4,
    title: 'Video Analysis Room',
    image: '/images/service-4.jpg',
    description:
      'Our state-of-the-art indoor training arena controlled environment for year-round practice, grade advanced lighting, and modern equipment to enhance player performance and development.',
  },
]

export default function OurServices() {
  return (
    <div className="our-services">
      <div className="container-fluid">
        <div className="row no-gutters service-list">
          {services.map((service) => (
            <div key={service.id} className="col-lg-3 col-md-6">
              <div className={`service-item ${service.active ? 'active' : ''}`}>
                <div className="service-image">
                  <Link href="/services" data-cursor-text="View">
                    <Image src={service.image} alt={service.title} width={400} height={300} />
                  </Link>
                </div>
                <div className="service-body">
                  <div className="service-body-title">
                    <h3>
                      <Link href="/services">{service.title}</Link>
                    </h3>
                  </div>
                  <div className="service-content-box">
                    <div className="service-content">
                      <p>{service.description}</p>
                    </div>
                    <div className="service-readmore-btn">
                      <Link href="/services">
                        <Image src="/images/arrow-accent.svg" alt="Arrow" width={30} height={30} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

