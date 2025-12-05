'use client'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export function initAnimations() {
  if (typeof window === 'undefined') return

  // Initialize WOW.js
  if (typeof window !== 'undefined' && (window as any).WOW) {
    new (window as any).WOW().init()
  }

  // Initialize Magnific Popup - wait for jQuery
  const initPopup = () => {
    if (typeof window !== 'undefined' && (window as any).jQuery) {
      const $ = (window as any).jQuery
      if ($.fn.magnificPopup) {
        $('.popup-video').magnificPopup({
          type: 'iframe',
          mainClass: 'mfp-fade',
          removalDelay: 160,
          preloader: false,
          fixedContentPos: true,
        })
        $('.gallery-items').magnificPopup({
          delegate: 'a',
          type: 'image',
          closeOnContentClick: false,
          closeBtnInside: false,
          mainClass: 'mfp-with-zoom',
          image: {
            verticalFit: true,
          },
          gallery: {
            enabled: true,
          },
          zoom: {
            enabled: true,
            duration: 300,
            opener: function (element: any) {
              return element.find('img')
            },
          },
        })
      }
    } else {
      // Retry after a short delay if jQuery isn't ready
      setTimeout(initPopup, 100)
    }
  }

  // Wait a bit for scripts to load
  setTimeout(initPopup, 200)

  // Text animation style 2
  const textAnimeElements = document.querySelectorAll('.text-anime-style-2')
  textAnimeElements.forEach((element) => {
    const text = element.textContent || ''
    const chars = text.split('')
    element.innerHTML = chars
      .map((char, i) => {
        if (char === ' ') return ' '
        return `<span style="opacity: 0; transform: translateX(20px);">${char}</span>`
      })
      .join('')

    const spans = element.querySelectorAll('span')
    gsap.to(spans, {
      opacity: 1,
      x: 0,
      duration: 1,
      stagger: 0.03,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
      },
    })
  })

  // Image reveal animation
  const revealElements = document.querySelectorAll('.reveal')
  revealElements.forEach((container) => {
    const image = container.querySelector('img')
    if (!image) return

    gsap.set(container, { autoAlpha: 1 })
    gsap.from(container, {
      xPercent: -100,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: container,
        toggleActions: 'play none none none',
      },
    })
    gsap.from(image, {
      xPercent: 100,
      scale: 1,
      duration: 1,
      delay: -1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: container,
        toggleActions: 'play none none none',
      },
    })
  })

  // Counter animation
  const counters = document.querySelectorAll('.counter')
  counters.forEach((counter) => {
    const target = parseInt(counter.textContent || '0')
    let current = 0
    const increment = target / 100
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        counter.textContent = target.toString()
        clearInterval(timer)
      } else {
        counter.textContent = Math.floor(current).toString()
      }
    }, 30)

    ScrollTrigger.create({
      trigger: counter,
      start: 'top 80%',
      onEnter: () => {
        // Counter already started above
      },
    })
  })
}

