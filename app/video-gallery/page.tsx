'use client'

import { useEffect } from 'react'
import PageHeader from '@/components/PageHeader'
import ScrollingTicker from '@/components/ScrollingTicker'
import VideoGallery from '@/components/sections/VideoGallery'
import { initAnimations } from '@/lib/animations'

export default function VideoGalleryPage() {
  useEffect(() => {
    initAnimations()
  }, [])

  return (
    <>
      <PageHeader title="Our" subtitle="video" />
      <ScrollingTicker />
      <VideoGallery />
    </>
  )
}

