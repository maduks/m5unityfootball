'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Preloader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 600)

    return () => clearTimeout(timer)
  }, [])

  if (!loading) return null

  return (
    <div className="preloader" style={{ display: loading ? 'flex' : 'none' }}>
      <div className="loading-container">
        <div className="loading"></div>
        <div id="loading-icon">
          <Image src="/images/loader.svg" alt="Loading" width={66} height={66} />
        </div>
      </div>
    </div>
  )
}

