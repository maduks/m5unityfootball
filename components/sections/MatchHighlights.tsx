'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'

const highlights = [
  {
    image: '/images/match-highlight-image-1.jpg',
    title: 'Epic Showdown! Thunder FC vs United - All the Goal & Drama!',
    duration: '5:27 mins',
  },
  {
    image: '/images/match-highlight-image-2.jpg',
    title: 'Leo Storm\'s Hat-Trick! Thunder FC vs Blaze United Highlights',
    duration: '5:27 mins',
  },
  {
    image: '/images/match-highlight-image-3.jpg',
    title: 'United Strikes Back: Drama Unfolds Against Thunder',
    duration: '5:27 mins',
  },
  {
    image: '/images/match-highlight-image-4.jpg',
    title: 'Tension, Technique, and Triumph - Full Match Story',
    duration: '5:27 mins',
  },
  {
    image: '/images/match-highlight-image-5.jpg',
    title: 'Blaze Ignites Late Comeback - A Match to Remember',
    duration: '5:27 mins',
  },
]

export default function MatchHighlights() {
  return (
    <div className="match-highlights">
      <div className="container">
        <div className="row section-row">
          <div className="col-lg-6 col-md-10">
            <div className="section-title">
              <div className="section-bg-title wow fadeInUp">
                <span>highlights</span>
              </div>
              <h3 className="wow fadeInUp" data-wow-delay="0.2s">
                Key moments uncovered
              </h3>
              <h2 className="text-anime-style-2" data-cursor="-opaque">
                Goals, wins & wows this week&apos;s highlights
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="match-highlight-slider">
              <Swiper
                modules={[Navigation, Autoplay]}
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                autoplay={{ delay: 5000 }}
                navigation={{
                  nextEl: '.match-highlight-btn-next',
                  prevEl: '.match-highlight-btn-prev',
                }}
                breakpoints={{
                  768: { slidesPerView: 3 },
                  991: { slidesPerView: 4 },
                }}
              >
                {highlights.map((highlight, index) => (
                  <SwiperSlide key={index}>
                    <div className="match-highlight-item">
                      <div className="match-highlight-item-image">
                        <Image src={highlight.image} alt={highlight.title} width={300} height={200} />
                      </div>
                      <div className="match-highlight-item-body">
                        <div className="match-highlight-item-content">
                          <h3>{highlight.title}</h3>
                        </div>
                        <div className="match-highlight-video-btn">
                          <a
                            href="https://www.youtube.com/watch?v=Y-x0efG1seA"
                            className="popup-video"
                            data-cursor-text="Play"
                          >
                            <i className="fa-solid fa-play"></i>
                          </a>
                          <p>{highlight.duration}</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="match-highlight-btn">
                <div className="match-highlight-btn-prev"></div>
                <div className="match-highlight-btn-next"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

