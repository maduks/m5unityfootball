'use client'

import Link from 'next/link'
import Image from 'next/image'

const blogPosts = [
  {
    image: '/images/post-1.jpg',
    title: 'Master Your Game 5 Proven Drills to Sharpen Your First Touch and Ball Control',
    link: '/blog/1',
  },
  {
    image: '/images/post-2.jpg',
    title: 'A Derby to Remember How Our U16 Team Clinched a Thrilling 3-2 Victory Over Local Rivals',
    link: '/blog/2',
  },
  {
    image: '/images/post-3.jpg',
    title: 'Fuel Like a Pro The Impact of Nutrition on Football Performance and Recovery',
    link: '/blog/3',
  },
]

export default function OurBlog() {
  return (
    <div className="our-blog">
      <div className="container">
        <div className="row section-row">
          <div className="col-lg-12">
            <div className="section-title section-title-center">
              <div className="section-bg-title wow fadeInUp">
                <span>Blogs</span>
              </div>
              <h3 className="wow fadeInUp" data-wow-delay="0.2s">
                latest blog
              </h3>
              <h2 className="text-anime-style-2" data-cursor="-opaque">
                Kick off with our latest football stories and catch every goal
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          {blogPosts.map((post, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="post-item wow fadeInUp" data-wow-delay={`${index * 0.2}s`}>
                <div className="post-featured-image">
                  <Link href={post.link} data-cursor-text="View">
                    <Image src={post.image} alt={post.title} width={400} height={250} />
                  </Link>
                </div>
                <div className="post-item-body">
                  <div className="post-item-content">
                    <h2>
                      <Link href={post.link}>{post.title}</Link>
                    </h2>
                  </div>
                  <div className="post-item-btn">
                    <Link href={post.link} className="readmore-btn">
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

