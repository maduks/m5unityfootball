'use client'

import Image from 'next/image'

const successItems = [
  {
    title: 'International Exposure Programs',
    description:
      'Fully equipped gym features strength, cardio, and agility equipment tailored the needs of footballers.',
  },
  {
    title: 'Player Progress Tracking App',
    description:
      'Fully equipped gym features strength, cardio, and agility equipment tailored the needs of footballers.',
  },
  {
    title: 'Video Analysis & Performance Review',
    description:
      'Fully equipped gym features strength, cardio, and agility equipment tailored the needs of footballers.',
  },
  {
    title: 'Coaching & Sports Psychology Support',
    description:
      'Fully equipped gym features strength, cardio, and agility equipment tailored the needs of footballers.',
  },
]

export default function ClubSuccess() {
  return (
    <div className="club-success dark-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="club-success-image">
              <Image src="/images/club-success-image.png" alt="Club Success" width={500} height={500} />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="club-success-content">
              <div className="section-title">
                <div className="section-bg-title wow fadeInUp">
                  <span>success</span>
                </div>
                <h3 className="wow fadeInUp" data-wow-delay="0.2s">
                  club success
                </h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">
                  Elite tools & training that drive player success
                </h2>
                <p className="wow fadeInUp" data-wow-delay="0.4s">
                  From high-quality training grounds and modern locker rooms to dedicated fitness centers and recovery
                  zones, our facilities support every aspect of a player&apos;s.
                </p>
              </div>
              <div className="club-success-list">
                {successItems.map((item, index) => (
                  <div
                    key={index}
                    className="club-success-item wow fadeInUp"
                    data-wow-delay={`${index % 2 === 0 ? '0.6' : '0.8'}s`}
                  >
                    <div className="icon-box">
                      <Image src="/images/icon-check.svg" alt="Check" width={30} height={30} />
                    </div>
                    <div className="club-success-item-content">
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
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

