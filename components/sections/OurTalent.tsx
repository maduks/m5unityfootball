'use client'

import Image from 'next/image'

const talentItems = [
  {
    icon: '/images/icon-talent-1.svg',
    title: 'Stronger Together, Fierce Forever',
    description: 'Our club is dedicated to nurturing raw talent through expert coaching, discipline, and teamwork.',
  },
  {
    icon: '/images/icon-talent-2.svg',
    title: 'One Team, One Dream, One Drive',
    description: 'Our club is dedicated to nurturing raw talent through expert coaching, discipline, and teamwork.',
  },
  {
    icon: '/images/icon-talent-3.svg',
    title: 'United We Train, United We Win',
    description: 'Our club is dedicated to nurturing raw talent through expert coaching, discipline, and teamwork.',
  },
  {
    icon: '/images/icon-talent-4.svg',
    title: 'Pure Passion, True Teamwork, Bold Play',
    description: 'Our club is dedicated to nurturing raw talent through expert coaching, discipline, and teamwork.',
  },
]

export default function OurTalent() {
  return (
    <div className="our-talent">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="our-talent-content">
              <div className="section-title">
                <div className="section-bg-title wow fadeInUp">
                  <span>Beyond the game</span>
                </div>
                <h3 className="wow fadeInUp" data-wow-delay="0.2s">
                  Beyond the game
                </h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">
                  Training talent passion, <span>precision future</span>
                </h2>
                <p className="wow fadeInUp" data-wow-delay="0.4s">
                  Our club is dedicated to nurturing raw talent through expert coaching, discipline, and teamwork.
                  prepare every player not just for the game
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="talent-item-list">
              {talentItems.map((item, index) => (
                <div key={index} className="talent-item wow fadeInUp" data-wow-delay={`${index * 0.2}s`}>
                  <div className="icon-box">
                    <Image src={item.icon} alt={item.title} width={50} height={50} />
                  </div>
                  <div className="talent-item-content">
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
  )
}

