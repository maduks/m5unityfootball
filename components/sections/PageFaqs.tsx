'use client'

import Link from 'next/link'
import Image from 'next/image'

const faqs = [
  {
    question: 'What are the eligibility criteria for players to participate in M5?',
    answer: 'To be eligible, a player must fill and submit the player\'s eligibility form at least two weeks before the competition commences. A player is only permitted to play in a team of either his mother or father\'s village of origin. Players must provide their bank account details for verification of their identity. Violation of eligibility rules shall attract automatic disqualification and a 2-year ban from all M5 competitions.',
  },
  {
    question: 'What is the competition format for M5 Unity Football Cup?',
    answer: 'The six participating teams are divided into two groups of three teams each. After group stage matches, the first and second placed teams from each group qualify for the semi-finals. The two teams that win the semi-finals play in the final match, while the losing teams play for third place. The two teams that placed last in each group are eliminated at the group stage.',
    open: true,
  },
  {
    question: 'What are the penalties for match abandonment or lateness?',
    answer: 'Match abandonment is highly prohibited and attracts severe penalties. Any team that abandons a match or refuses to start shall be disqualified for two years. If a team fails to show up 30 minutes late from the scheduled kick-off time, walk-over formalities shall be conducted, awarding 3 goals and 3 points to their opponents. If a team fails to turn up on two different occasions, they shall be banned for 2 years and pay a fine of ₦400,000.',
  },
  {
    question: 'What individual awards are presented at M5 competition?',
    answer: 'M5 presents several individual awards including: Best Player of the Tournament (selected by Technical Committee from finalists), Highest Goal Scorer, Best Goalkeeper (lowest goals conceded), Best Young Player, Best Coach (coach of the winning team), and Best Behaved Team (least card offences). All award winners are selected by the seven-member Technical Committee based on performance statistics and conduct.',
  },
]

const registrationLinks = [
  {
    id: 'player-registration',
    title: 'Player Registration',
    link: '/register/player',
    description: 'Register as a player to participate in the M5 Unity Football Cup competition. Fill out the eligibility form and provide your bank account details for verification.',
  },
  {
    id: 'team-registration',
    title: 'Team Registration',
    link: '/register/team',
    description: 'Register your team for the M5 Unity Football Cup. Every team must pay a non-refundable registration fee of ₦10,000 before the competition commences.',
  },
]

export default function PageFaqs() {
  return (
    <div className="page-faqs">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="page-single-sidebar">
              <div className="page-category-list wow fadeInUp">
                <h4 style={{ 
                  color: 'var(--white-color)', 
                  marginBottom: '20px',
                  fontSize: '18px',
                  fontFamily: 'var(--font-bebas-neue)'
                }}>
                  Registration Links
                </h4>
                <ul>
                  {registrationLinks.map((link) => (
                    <li key={link.id}>
                      <Link href={link.link} style={{ 
                        display: 'block',
                        padding: '15px',
                        marginBottom: '10px',
                        background: 'rgba(255,255,255,0.1)',
                        borderRadius: '8px',
                        border: '1px solid rgba(255,255,255,0.2)',
                        transition: 'all 0.3s ease',
                        textDecoration: 'none',
                        color: 'var(--white-color)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(255,255,255,0.15)'
                        e.currentTarget.style.transform = 'translateX(5px)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(255,255,255,0.1)'
                        e.currentTarget.style.transform = 'translateX(0)'
                      }}
                      >
                        <strong style={{ 
                          display: 'block',
                          marginBottom: '5px',
                          color: 'var(--accent-color)',
                          fontFamily: 'var(--font-bebas-neue)'
                        }}>{link.title}</strong>
                        <small style={{ 
                          fontSize: '12px',
                          color: 'rgba(255,255,255,0.8)'
                        }}>{link.description}</small>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="sidebar-cta-box wow fadeInUp" data-wow-delay="0.25s">
                {/* <div className="sidebar-cta-logo">
                  <Image src="/images/logo.svg" alt="Logo" width={150} height={50} />
                </div> */}
                <div className="sidebar-cta-contact">
                  <div className="sidebar-cta-contact-item">
                    <p>For Inquiries, Call</p>
                    <h3>
                      <a href="tel:+2348129649240">+234 812 964 9240</a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="page-faqs-catagery">
              <div className="page-single-faqs">
                <div className="section-title">
                  <h2 className="text-anime-style-2" data-cursor="-opaque">
                    Frequently Asked <span>Questions</span>
                  </h2>
                </div>
                <div className="faq-accordion" id="faqaccordion">
                  {faqs.map((faq, index) => (
                    <div key={index} className="accordion-item wow fadeInUp" data-wow-delay={`${index * 0.2}s`}>
                      <h2 className="accordion-header" id={`heading${index + 1}`}>
                        <button
                          className={`accordion-button ${faq.open ? '' : 'collapsed'}`}
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#collapse${index + 1}`}
                          aria-expanded={faq.open}
                          aria-controls={`collapse${index + 1}`}
                        >
                          {index + 1}. {faq.question}
                        </button>
                      </h2>
                      <div
                        id={`collapse${index + 1}`}
                        className={`accordion-collapse collapse ${faq.open ? 'show' : ''}`}
                        aria-labelledby={`heading${index + 1}`}
                        data-bs-parent="#faqaccordion"
                      >
                        <div className="accordion-body">
                          <p>{faq.answer}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

