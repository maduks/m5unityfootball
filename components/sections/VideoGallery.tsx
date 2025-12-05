'use client'

import Image from 'next/image'

const videoThumbnails = [
  '/images/gallery-3.jpg',
  '/images/gallery-5.jpg',
  '/images/gallery-2.jpg',
  '/images/gallery-1.jpg',
  '/images/gallery-4.jpg',
  '/images/gallery-9.jpg',
  '/images/gallery-6.jpg',
  '/images/gallery-8.jpg',
  '/images/gallery-7.jpg',
]

export default function VideoGallery() {
  return (
    <div className="page-video-gallery">
      <div className="container">
        <div className="row">
          {videoThumbnails.map((thumbnail, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="video-gallery-image wow fadeInUp" data-wow-delay={`${index * 0.2}s`}>
                <a href="https://www.youtube.com/watch?v=Y-x0efG1seA" className="popup-video" data-cursor-text="Play">
                  <Image src={thumbnail} alt={`Video ${index + 1}`} width={400} height={300} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

