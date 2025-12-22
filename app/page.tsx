'use client'

import { useEffect } from 'react'
import ScrollingTicker from '@/components/ScrollingTicker'
import Hero from '@/components/sections/Hero'
import AboutUs from '@/components/sections/AboutUs'
import OurServices from '@/components/sections/OurServices'
import WhatWeDo from '@/components/sections/WhatWeDo'
import OurFeatures from '@/components/sections/OurFeatures'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import OurSchedule from '@/components/sections/OurSchedule'
import MatchHighlights from '@/components/sections/MatchHighlights'
import ClubSuccess from '@/components/sections/ClubSuccess'
import OurTestimonial from '@/components/sections/OurTestimonial'
import CTABox from '@/components/sections/CTABox'
import OurFaqs from '@/components/sections/OurFaqs'
import TeamRosters from '@/components/sections/TeamRosters'
import { initAnimations } from '@/lib/animations'

export default function Home() {
  useEffect(() => {
    initAnimations()
  }, [])

  return (
    <>
      <Hero />
      {/* <ScrollingTicker /> */}
      {/* <AboutUs /> */}
      <WhatWeDo />
      <OurFeatures />
      {/* <WhyChooseUs /> */}
      {/* <OurServices /> */}
      <OurFaqs />

      <OurSchedule />
      <MatchHighlights />

      <TeamRosters />

      {/* <ClubSuccess />
      <OurTestimonial />
      <CTABox /> */}
    </>
  )
}

