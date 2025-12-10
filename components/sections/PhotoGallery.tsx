'use client'

import Image from 'next/image'

const galleryImages = [
  '/images/image_13.jpeg',
  '/images/image_14.jpeg',
  '/images/image_cup.jpeg',
  '/images/image_eight.jpeg',
  '/images/image_female_participation.jpeg',
  '/images/image_one.jpeg',
  '/images/image_seven.jpeg',
  '/images/image_team_one.jpeg',
  '/images/image_team_two.jpeg',
]

export default function PhotoGallery() {
  return (
    <div className="page-gallery">
      <div className="container">
        <div className="row gallery-items page-gallery-box">
          {galleryImages.map((image, index) => (
            <div key={index} className="col-lg-4 col-6">
              <div className="photo-gallery wow fadeInUp" data-wow-delay={`${index * 0.2}s`}>
                <a href={image} data-cursor-text="View">
                  <Image src={image} alt={`Gallery ${index + 1}`} width={400} height={300} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

