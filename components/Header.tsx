'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isSticky, setIsSticky] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsSticky(scrollTop > 600)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`main-header ${isSticky ? 'active' : ''}`}>
      <div className="header-sticky">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <Link className="navbar-brand" href="/">
              <Image src="/images/m5logos.png" alt="Logo" width={100} height={100} />
            </Link>

            <div className="collapse navbar-collapse main-menu">
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

                   <li className="nav-item">
                    <Link className={`nav-link ${pathname === '/image-gallery' ? 'active' : ''}`} href="/image-gallery">
                     Photo Gallery
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className={`nav-link ${pathname === '/faqs' ? 'active' : ''}`} href="/faqs">
                      Faqs
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
                
                 
                </ul>
              </div>

              {/* <div className="header-btn">
                <Link href="/contact" className="btn-default btn-highlighted">
                  get started
                </Link>
              </div> */}
            </div>
            <div className="navbar-toggle"></div>
          </div>
        </nav>
        <div className="responsive-menu"></div>
      </div>
    </header>
  )
}

