'use client'

import Image from 'next/image'

export default function ScrollingTicker() {
  const tickerItems = [
    'Highlights',
    'Football',
    'Actions',
    'buy theme',
    'explore now',
    'purchese now',
    'limited time deal',
    'buy theme',
    'explore now',
    'purchese now',
    'limited time deal',
    'buy theme',
  ]

  return (
    <div className="our-scrolling-ticker">
      <div className="scrolling-ticker-box">
        <div className="scrolling-content">
          {tickerItems.map((item, index) => (
            <span key={index}>
              {/* <Image src="/images/icon-football.svg" alt="" width={20} height={20} /> */}
              {item}
            </span>
          ))}
        </div>
        <div className="scrolling-content">
          {tickerItems.map((item, index) => (
            <span key={`duplicate-${index}`}>
              <Image src="/images/icon-football.svg" alt="" width={20} height={20} />
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

