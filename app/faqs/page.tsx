'use client'

import { useEffect } from 'react'
import PageHeader from '@/components/PageHeader'
import ScrollingTicker from '@/components/ScrollingTicker'
import PageFaqs from '@/components/sections/PageFaqs'
import { initAnimations } from '@/lib/animations'

export default function FaqsPage() {
  useEffect(() => {
    initAnimations()
  }, [])

  return (
    <>
      <PageHeader title="frequently asked" subtitle="question" />
      <ScrollingTicker />
      <PageFaqs />
    </>
  )
}

