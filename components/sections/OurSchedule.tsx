'use client'

import Link from 'next/link'
import Image from 'next/image'

const schedules = [
  {
    dateIcon: '/images/eziohafc.jpeg',
    timeIcon: '/images/inyifc.jpeg',
    team1: 'EZIOHA FC',
    team2: 'INYI FC',
    location: '26TH DEC, Mgbowo Boys Field',
  },
  {
    dateIcon: '/images/ametafc.jpeg',
    timeIcon: '/images/alecharafc.jpeg',
    team1: 'AMETA FC',
    team2: 'ALECHARA FC',
    location: '27TH DEC, Mgbowo Boys Field',
  },
  {
    dateIcon: '/images/imeamafc.jpeg',
    timeIcon: '/images/eziohafc.jpeg',
    team1: 'IMEAMA FC',
    team2: 'EZIOHA FC',
    location: '28TH DEC, Mgbowo Boys Field',
  },
    {
    dateIcon: '/images/ohaire.jpeg',
    timeIcon: '/images/ametafc.jpeg',
    team1: 'OHAIRE FC',
    team2: 'AMETA FC',
    location: '29TH DEC, Mgbowo Boys Field',
  },

  {
    dateIcon: '/images/inyifc.jpeg',
    timeIcon: '/images/imeamafc.jpeg',
    team1: 'INYI FC',
    team2: 'IMEAMA FC',
    location: '30TH DEC, Mgbowo Boys Field',
  },

     {
    dateIcon: '/images/alecharafc.jpeg',
    timeIcon: '/images/ohaire.jpeg',
    team1: 'ALECHARA FC',
    team2: 'OHAIRE FC',
    location: '31ST DEC, Mgbowo Boys Field',
  },
]

export default function OurSchedule() {
  return (
    <div className="our-schedule dark-section parallaxie">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="our-schedule-content">
              <div className="section-title">
                <h3 className="wow fadeInUp">Fixtures & kick-off times</h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">
                  Get ready for the action — mark your calendars
                </h2>
                <p className="wow fadeInUp" data-wow-delay="0.2s">
                  Stay updated with the latest fixtures and kick-off times for all upcoming matches. Plan your game
                  nights with accurate schedules and venue details.
                </p>
              </div>
              <div className="schedule-btn wow fadeInUp" data-wow-delay="0.4s">
                <Link href="/register/player" className="btn-default btn-highlighted">
                  Register
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="match-schedule-list">
              {schedules.map((schedule, index) => (
                <div key={index} className="match-schedule-item wow fadeInUp" data-wow-delay={`${index * 0.2}s`}>
                  <div className="icon-box order-md-1 order-2">
                    <Image src={schedule.dateIcon} className="img-fluid" alt="Date" width={100} height={50} />
                  </div>
                  <div className="match-schedule-item-content order-md-2 order-3">
                    <div className="match-content-info">
                      <p>{schedule.team1}</p>
                      <Image src="/images/icon-vs.svg" alt="VS" width={30} height={30} />
                      <p>{schedule.team2}</p>
                    </div>
                    <div className="match-content-location">
                      <Image src="/images/icon-location.svg" alt="Location" width={20} height={20} />
                      <h3>{schedule.location}</h3>
                    </div>
                  </div>
                  <div className="icon-box order-md-3 order-2">
                    <Image src={schedule.timeIcon} className="img-fluid"  alt="Time" width={100} height={50} />
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

