'use client'

import Link from 'next/link'
import Image from 'next/image'

const schedules = [
  {
    dateIcon: '/images/icon-schedule-1.svg',
    timeIcon: '/images/icon-schedule-2.svg',
    team1: 'Team A',
    team2: 'Team B',
    location: 'Boys Secondary School Mgowo Football Field',
  },
  {
    dateIcon: '/images/icon-schedule-3.svg',
    timeIcon: '/images/icon-schedule-4.svg',
    team1: 'Team C',
    team2: 'Team D',
    location: 'Girls Secondary School Mgowo Football Field',
  },
  // {
  //   dateIcon: '/images/icon-schedule-5.svg',
  //   timeIcon: '/images/icon-schedule-6.svg',
  //   team1: 'Team E',
  //   team2: 'Team F',
  //   location: 'Olympiastadion STADIUM',
  // },
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
                <Link href="/contact" className="btn-default btn-highlighted">
                  contact us
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="match-schedule-list">
              {schedules.map((schedule, index) => (
                <div key={index} className="match-schedule-item wow fadeInUp" data-wow-delay={`${index * 0.2}s`}>
                  <div className="icon-box order-md-1 order-2">
                    <Image src={schedule.dateIcon} alt="Date" width={50} height={50} />
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
                    <Image src={schedule.timeIcon} alt="Time" width={50} height={50} />
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

