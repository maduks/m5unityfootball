'use client'

import Link from 'next/link'
import Image from 'next/image'

const teamMembers = [
  {
    image: '/images/team-1.jpg',
    name: 'Benjamin Carter',
    role: 'Head Coach',
    social: {
      instagram: '#',
      facebook: '#',
      twitter: '#',
    },
  },
  {
    image: '/images/team-2.jpg',
    name: 'William Parker',
    role: 'Assistant Coach',
    social: {
      instagram: '#',
      facebook: '#',
      twitter: '#',
    },
  },
  {
    image: '/images/team-3.jpg',
    name: 'Jonathan Reid',
    role: 'Fitness coach',
    social: {
      instagram: '#',
      facebook: '#',
      twitter: '#',
    },
  },
  {
    image: '/images/team-4.jpg',
    name: 'Samuel Bennett',
    role: 'Technical coach',
    social: {
      instagram: '#',
      facebook: '#',
      twitter: '#',
    },
  },
]

export default function OurTeam() {
  return (
    <div className="our-team">
      <div className="container">
        <div className="row section-row">
          <div className="col-lg-12">
            <div className="section-title section-title-center">
              <div className="section-bg-title wow fadeInUp">
                <span>team</span>
              </div>
              <h3 className="wow fadeInUp" data-wow-delay="0.2s">
                our team
              </h3>
              <h2 className="text-anime-style-2" data-cursor="-opaque">
                Meet the brilliant minds behind every victory
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-lg-3 col-md-6">
              <div className="team-item wow fadeInUp" data-wow-delay={`${index * 0.2}s`}>
                <div className="team-image">
                  <Link href="/team" data-cursor-text="View">
                    <Image src={member.image} alt={member.name} width={300} height={350} />
                  </Link>
                  <div className="team-social-icon">
                    <ul>
                      <li>
                        <a href={member.social.instagram} className="social-icon">
                          <i className="fa-brands fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href={member.social.facebook} className="social-icon">
                          <i className="fa-brands fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href={member.social.twitter} className="social-icon">
                          <i className="fa-brands fa-x-twitter"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team-content">
                  <h3>
                    <Link href="/team">{member.name}</Link>
                  </h3>
                  <p>{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

