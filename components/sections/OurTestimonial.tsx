'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const testimonials = [
  {
    rating: 5,
    content:
      'Football is more than just a game—it\'s a global passion, a shared language, and a story that connects millions. At Footclub, we\'ve built a platform that celebrates every match, every goal, and every fan. Our readers come to us not just for news, but for thoughtful analysis, in-depth coverage, and a sense of belonging to a worldwide football community.',
    author: 'Micle jhon smith',
    role: 'Sports Physiotherapist',
    image: '/images/author-1.jpg',
  },
  {
    rating: 5,
    content:
      'Football is more than just a game—it\'s a global passion, a shared language, and a story that connects millions. At Footclub, we\'ve built a platform that celebrates every match, every goal, and every fan. Our readers come to us not just for news, but for thoughtful analysis, in-depth coverage, and a sense of belonging to a worldwide football community.',
    author: 'David James Miller',
    role: 'Physiotherapist',
    image: '/images/author-2.jpg',
  },
  {
    rating: 5,
    content:
      'Football is more than just a game—it\'s a global passion, a shared language, and a story that connects millions. At Footclub, we\'ve built a platform that celebrates every match, every goal, and every fan. Our readers come to us not just for news, but for thoughtful analysis, in-depth coverage, and a sense of belonging to a worldwide football community.',
    author: 'Robert Alan Turner',
    role: 'Physiotherapist',
    image: '/images/author-3.jpg',
  },
]

export default function OurTestimonial() {
  return (
    <div className="our-testimonial">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="our-testimonials-content">
              <div className="section-title">
                <div className="section-bg-title wow fadeInUp">
                  <span>testimonials</span>
                </div>
                <h3 className="wow fadeInUp" data-wow-delay="0.2s">
                  What our fans are saying
                </h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">
                  The best football blog see what our followers think
                </h2>
              </div>
              <div className="testimonial-slider">
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  slidesPerView={1}
                  spaceBetween={80}
                  loop={true}
                  autoplay={{ delay: 5000 }}
                  pagination={{ clickable: true, el: '.testimonial-pagination' }}
                  navigation={{
                    nextEl: '.testimonial-btn-next',
                    prevEl: '.testimonial-btn-prev',
                  }}
                >
                  {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index}>
                      <div className="testimonial-item">
                        <div className="testimonial-rating">
                          {Array.from({ length: testimonial.rating }).map((_, i) => (
                            <i key={i} className="fa-solid fa-star"></i>
                          ))}
                        </div>
                        <div className="testimonial-content">
                          <p>{testimonial.content}</p>
                        </div>
                        <div className="testimonial-author">
                          <div className="author-image">
                            <Image src={testimonial.image} alt={testimonial.author} width={80} height={80} />
                          </div>
                          <div className="author-content">
                            <h3>{testimonial.author}</h3>
                            <p>{testimonial.role}</p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="testimonial-pagination"></div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="testimonial-image-box">
              <div className="testimonial-image">
                <Image src="/images/testimonial-image.jpg" alt="Testimonial" width={500} height={400} />
              </div>
              <div className="testimonial-counter-boxes">
                <div className="testimonial-counter-item">
                  <h3>Coaches</h3>
                  <h2>
                    <span className="counter">100</span>+
                  </h2>
                  <p>Responsibility for team</p>
                </div>
                <div className="testimonial-counter-item">
                  <h3>match wins</h3>
                  <h2>
                    <span className="counter">90</span>%
                  </h2>
                  <p>Coach with wins match</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

