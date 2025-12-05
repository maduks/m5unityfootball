'use client'

import Image from 'next/image'

const faqs = [
  {
    question: 'What are the eligibility criteria for players to participate in M5?',
    answer: 'To be eligible, a player must fill and submit the player\'s eligibility form at least two weeks before the competition commences. A player is only permitted to play in a team of either his mother or father\'s village of origin. Players must provide their NIN for digital verification. Violation of eligibility rules shall attract automatic disqualification and a 2-year ban from all M5 competitions.',
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

export default function OurFaqs() {
  return (
    <div className="our-faqs">
      <div className="container">
        <div className="row section-row">
          <div className="col-lg-12">
            <div className="section-title section-title-center">
              <div className="section-bg-title wow fadeInUp">
                <span>FAQs</span>
              </div>
              <h3 className="wow fadeInUp" data-wow-delay="0.2s">
                FAQs
              </h3>
              <h2 className="text-anime-style-2" data-cursor="-opaque">
                Everything you need to know <span>about M5 </span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="faqs-images">
              <div className="faqs-image-box-1">
                <div className="faq-contact-box wow fadeInUp" data-wow-delay="0.2s">
                  <div className="icon-box">
                    <Image src="/images/icon-phone-accent.svg" alt="Phone" width={30} height={30} />
                  </div>
                  <div className="faq-contact-box-content">
                    <h3>For Inquiries, Call</h3>
                    <p>
                      <a href="tel:987965698">+234 812 964 9240</a>
                    </p>
                  </div>
                </div>
                <div className="faqs-img">
                  <Image src="/images/image_four.jpeg" alt="FAQs" width={400} height={300} />
                </div>
              </div>
              <div className="faqs-image-box-2">
                <div className="faqs-img">
                  <Image src="/images/image_hgih.jpeg" alt="FAQs" width={400} height={300} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
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
  )
}
