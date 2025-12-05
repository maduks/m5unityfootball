'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isSticky, setIsSticky] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsSticky(scrollTop > 600)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Initialize SlickNav for mobile menu if available
    if (typeof window !== 'undefined' && (window as any).jQuery) {
      const $ = (window as any).jQuery
      if ($.fn.slicknav) {
        $('#menu').slicknav({
          label: '',
          prependTo: '.responsive-menu',
        })
      }
    }
  }, [])

  return (
    <header className={`main-header ${isSticky ? 'active' : ''}`}>
      <div className="header-sticky">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <Link className="navbar-brand" href="/">
              <Image src="/images/logo.svg" alt="Logo" width={150} height={50} />
            </Link>

            <div className={`collapse navbar-collapse main-menu ${isMenuOpen ? 'show' : ''}`}>
              <div className="nav-menu-wrapper">
                <ul className="navbar-nav mr-auto" id="menu">
                  <li className="nav-item">
                    <Link className="nav-link" href="/">Home</Link>
                  
                  </li>
                  <li className="nav-item">
                    <Link className={`nav-link ${pathname === '/about' ? 'active' : ''}`} href="/about">
                      About Us
                    </Link>
                  </li>
                  <li className="nav-item submenu">
                    <Link className="nav-link" href="#">Registration</Link>
                    <ul>
                      <li className="nav-item">
                        <Link className="nav-link" href="/register/player">Player Registration</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" href="/register/team">Team Registration</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item submenu">
                    <Link className="nav-link" href="#">Pages</Link>
                    <ul>
                      <li className="nav-item">
                        <Link className="nav-link" href="/image-gallery">Image Gallery</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" href="/video-gallery">Video Gallery</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" href="/faqs">FAQs</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link className={`nav-link ${pathname === '/contact' ? 'active' : ''}`} href="/contact">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="header-btn">
                <Link href="/contact" className="btn-default btn-highlighted">
                  get started
                </Link>
              </div>
            </div>
            <div className="navbar-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </nav>
        <div className="responsive-menu"></div>
      </div>
    </header>
  )
}

