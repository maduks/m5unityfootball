'use client'

import Image from 'next/image'

const galleryImages = [
  '/images/gallery-1.jpg',
  '/images/gallery-3.jpg',
  '/images/gallery-4.jpg',
  '/images/gallery-6.jpg',
  '/images/gallery-7.jpg',
  '/images/gallery-9.jpg',
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

