'use client'

import { useEffect } from 'react'
import PageHeader from '@/components/PageHeader'
import ScrollingTicker from '@/components/ScrollingTicker'
import AboutUs from '@/components/sections/AboutUs'
import OurApproach from '@/components/sections/OurApproach'
import OurTalent from '@/components/sections/OurTalent'
import OurFeatures from '@/components/sections/OurFeatures'
import CompetitionOperations from '@/components/sections/CompetitionOperations'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import OurSchedule from '@/components/sections/OurSchedule'
import OurExperience from '@/components/sections/OurExperience'
import ClubSuccess from '@/components/sections/ClubSuccess'
import OurTeam from '@/components/sections/OurTeam'
import CTABox from '@/components/sections/CTABox'
import OurFaqs from '@/components/sections/OurFaqs'
import { initAnimations } from '@/lib/animations'

export default function AboutPage() {
  useEffect(() => {
    initAnimations()
  }, [])

  return (
    <>
      <PageHeader title="About" subtitle="us" />
      {/* <ScrollingTicker /> */}
      <AboutUs />
      <OurFeatures />
      {/* <OurApproach /> */}
      <OurTalent />
      
      {/* <CompetitionOperations /> */}
      {/* <WhyChooseUs /> */}
      {/* <OurSchedule /> */}
      {/* <OurExperience /> */}
      {/* <ClubSuccess /> */}
      {/* <OurTeam /> */}
      <OurFaqs />
    </>
  )
}

