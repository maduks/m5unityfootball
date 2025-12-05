'use client'

import Link from 'next/link'
import Image from 'next/image'

const faqCategories = [
  {
    id: 'faq1',
    title: 'Club joining process',
    faqs: [
      { question: 'How can I join the club?', answer: 'match dates can change due to weather conditions...', open: true },
      { question: 'What age groups are accepted?', answer: 'match dates can change due to weather conditions...' },
      { question: 'Is there a trial before joining?', answer: 'match dates can change due to weather conditions...' },
      { question: 'What documents are required for registration?', answer: 'match dates can change due to weather conditions...' },
    ],
  },
  {
    id: 'faq2',
    title: 'Training facility access',
    faqs: [
      { question: 'How do I get access to the training facilities?', answer: 'match dates can change due to weather conditions...', open: true },
      { question: 'Are the training facilities open year-round?', answer: 'match dates can change due to weather conditions...' },
      { question: 'Can family members visit the training sessions?', answer: 'match dates can change due to weather conditions...' },
      { question: 'What training facilities are available for club members?', answer: 'match dates can change due to weather conditions...' },
    ],
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
                <ul>
                  {faqCategories.map((category) => (
                    <li key={category.id}>
                      <a href={`#${category.id}`}>{category.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="sidebar-cta-box wow fadeInUp" data-wow-delay="0.25s">
                <div className="sidebar-cta-logo">
                  <Image src="/images/logo.svg" alt="Logo" width={150} height={50} />
                </div>
                <div className="sidebar-cta-contact">
                  <div className="sidebar-cta-contact-item">
                    <p>Toll Free no</p>
                    <h3>
                      <a href="tel:+91123456789">+(91) - 123 456 789</a>
                    </h3>
                  </div>
                  <div className="sidebar-cta-contact-item">
                    <p>E - mail now</p>
                    <h3>
                      <a href="mailto:info@domainname.com">info@domainname.com</a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="page-faqs-catagery">
              {faqCategories.map((category, catIndex) => (
                <div key={category.id} className="page-single-faqs" id={category.id}>
                  <div className="section-title">
                    <h2 className="text-anime-style-2" data-cursor="-opaque">
                      {category.title} <span>process</span>
                    </h2>
                  </div>
                  <div className="faq-accordion" id={`accordion${catIndex}`}>
                    {category.faqs.map((faq, index) => (
                      <div key={index} className="accordion-item wow fadeInUp" data-wow-delay={`${index * 0.2}s`}>
                        <h2 className="accordion-header" id={`heading${catIndex}${index}`}>
                          <button
                            className={`accordion-button ${faq.open ? '' : 'collapsed'}`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#collapse${catIndex}${index}`}
                            aria-expanded={faq.open}
                          >
                            {index + 1}. {faq.question}
                          </button>
                        </h2>
                        <div
                          id={`collapse${catIndex}${index}`}
                          className={`accordion-collapse collapse ${faq.open ? 'show' : ''}`}
                          aria-labelledby={`heading${catIndex}${index}`}
                          data-bs-parent={`#accordion${catIndex}`}
                        >
                          <div className="accordion-body">
                            <p>{faq.answer}</p>
                          </div>
                        </div>
                      </div>
                    ))}
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

