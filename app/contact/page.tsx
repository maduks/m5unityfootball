'use client'

import { useEffect } from 'react'
import PageHeader from '@/components/PageHeader'
import ScrollingTicker from '@/components/ScrollingTicker'
import PageContactUs from '@/components/sections/PageContactUs'
import { initAnimations } from '@/lib/animations'

export default function ContactPage() {
  useEffect(() => {
    initAnimations()
  }, [])

  return (
    <>
      <PageHeader title="Contact" subtitle="us" />
      <ScrollingTicker />
      <PageContactUs />
    </>
  )
}

