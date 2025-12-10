'use client'

import { useEffect } from 'react'
import PageHeader from '@/components/PageHeader'
import ScrollingTicker from '@/components/ScrollingTicker'
import PhotoGallery from '@/components/sections/PhotoGallery'
import { initAnimations } from '@/lib/animations'

export default function ImageGalleryPage() {
  useEffect(() => {
    initAnimations()
  }, [])

  return (
    <>
      <PageHeader title="Our" subtitle="gallery" />
      {/* <ScrollingTicker /> */}
      <PhotoGallery />
    </>
  )
}

