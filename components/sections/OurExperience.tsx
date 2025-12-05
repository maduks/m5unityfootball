'use client'

import Image from 'next/image'

const experienceItems = [
  {
    icon: '/images/icon-experience-1.svg',
    title: 'International Exposure Programs',
    description: 'Fully equipped gym features strength, cardio, and agility equipment tailored the needs of footballers.',
    list: [
      'Fan Support and Membership Benefits',
      'Profesional coach expertise & mentorship',
      'Customized training plan for skill enhance',
    ],
  },
  {
    icon: '/images/icon-experience-2.svg',
    title: 'Worldwide Football Exchange',
    description: 'Fully equipped gym features strength, cardio, and agility equipment tailored the needs of footballers.',
    list: [
      'Fan Support and Membership Benefits',
      'Profesional coach expertise & mentorship',
      'Customized training plan for skill nhance',
    ],
  },
]

export default function OurExperience() {
  return (
    <div className="our-experience">
      <div className="container">
        <div className="row section-row">
          <div className="col-lg-12">
            <div className="section-title section-title-center">
              <div className="section-bg-title wow fadeInUp">
                <span>experience</span>
              </div>
              <h3 className="wow fadeInUp" data-wow-delay="0.2s">
                Guided by experience
              </h3>
              <h2 className="text-anime-style-2" data-cursor="-opaque">
                Meet the brilliant minds behind every victory
              </h2>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-4 col-md-6 order-1">
            <div className="experience-item">
              <div className="icon-box wow fadeInUp">
                <Image src={experienceItems[0].icon} alt={experienceItems[0].title} width={60} height={60} />
              </div>
              <div className="experience-item-content wow fadeInUp" data-wow-delay="0.2s">
                <h3>{experienceItems[0].title}</h3>
                <p>{experienceItems[0].description}</p>
              </div>
              <div className="experience-item-list wow fadeInUp" data-wow-delay="0.4s">
                <ul>
                  {experienceItems[0].list.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4 order-lg-2 order-md-3 order-2">
            <div className="experience-image">
              <Image src="/images/experience-image.png" alt="Experience" width={400} height={400} />
            </div>
          </div>
          <div className="col-lg-4 col-md-6 order-lg-3 order-md-2 order-3">
            <div className="experience-item">
              <div className="icon-box wow fadeInUp">
                <Image src={experienceItems[1].icon} alt={experienceItems[1].title} width={60} height={60} />
              </div>
              <div className="experience-item-content wow fadeInUp" data-wow-delay="0.2s">
                <h3>{experienceItems[1].title}</h3>
                <p>{experienceItems[1].description}</p>
              </div>
              <div className="experience-item-list wow fadeInUp" data-wow-delay="0.4s">
                <ul>
                  {experienceItems[1].list.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

