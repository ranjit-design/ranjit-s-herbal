'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { usePathname } from 'next/navigation'
import { useGSAP } from '@gsap/react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function PageWrapper({ children }) {
  const pathname = usePathname()
  const mainRef = useRef(null)

  useGSAP(() => {
    // Refresh ScrollTrigger on route change
    ScrollTrigger.refresh()

    const isMobile = window.innerWidth < 768
    const yMove = isMobile ? 40 : 150
    const cornerMove = isMobile ? 50 : 200

    // Reveal from Bottom
    gsap.utils.toArray('.reveal-bottom').forEach((el) => {
      gsap.fromTo(el, 
        { y: yMove, opacity: 0, rotation: isMobile ? 0 : 2, force3D: true },
        {
          y: 0,
          opacity: 1,
          rotation: 0,
          duration: 3.0,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 95%',
            end: 'bottom 5%',
            toggleActions: 'play reverse play reverse'
          }
        }
      )
    })

    // Reveal from Top
    gsap.utils.toArray('.reveal-top').forEach((el) => {
      gsap.fromTo(el, 
        { y: -yMove, opacity: 0, rotation: isMobile ? 0 : -2, force3D: true },
        {
          y: 0,
          opacity: 1,
          rotation: 0,
          duration: 3.0,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 95%',
            end: 'bottom 5%',
            toggleActions: 'play reverse play reverse'
          }
        }
      )
    })

    // Reveal from Left (Vertical on Mobile)
    gsap.utils.toArray('.reveal-left').forEach((el) => {
      gsap.fromTo(el, 
        { x: isMobile ? 0 : -150, y: isMobile ? yMove : 0, opacity: 0, rotation: isMobile ? 0 : -5, force3D: true },
        {
          x: 0,
          y: 0,
          opacity: 1,
          rotation: 0,
          duration: 3.0,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 95%',
            end: 'bottom 5%',
            toggleActions: 'play reverse play reverse'
          }
        }
      )
    })

    // Reveal from Right (Vertical on Mobile)
    gsap.utils.toArray('.reveal-right').forEach((el) => {
      gsap.fromTo(el, 
        { x: isMobile ? 0 : 150, y: isMobile ? yMove : 0, opacity: 0, rotation: isMobile ? 0 : 5, force3D: true },
        {
          x: 0,
          y: 0,
          opacity: 1,
          rotation: 0,
          duration: 3.0,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 95%',
            end: 'bottom 5%',
            toggleActions: 'play reverse play reverse'
          }
        }
      )
    })

    // Reveal from Top-Left Corner (Softened on Mobile)
    gsap.utils.toArray('.reveal-corner-tl').forEach((el) => {
      gsap.fromTo(el, 
        { 
          x: isMobile ? -20 : -cornerMove, 
          y: isMobile ? -20 : -cornerMove, 
          opacity: 0, 
          rotation: isMobile ? 0 : -15, 
          filter: isMobile ? 'none' : 'brightness(3) contrast(1.5)',
          force3D: true 
        },
        {
          x: 0,
          y: 0,
          opacity: 1,
          rotation: 0,
          filter: isMobile ? 'none' : 'brightness(1) contrast(1)',
          duration: 4.0,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 95%',
            end: 'bottom 5%',
            toggleActions: 'play reverse play reverse'
          }
        }
      )
    })

    // Reveal from Top-Right Corner (Softened on Mobile)
    gsap.utils.toArray('.reveal-corner-tr').forEach((el) => {
      gsap.fromTo(el, 
        { 
          x: isMobile ? 20 : cornerMove, 
          y: isMobile ? -20 : -cornerMove, 
          opacity: 0, 
          rotation: isMobile ? 0 : 15, 
          filter: isMobile ? 'none' : 'brightness(3) contrast(1.5)',
          force3D: true 
        },
        {
          x: 0,
          y: 0,
          opacity: 1,
          rotation: 0,
          filter: isMobile ? 'none' : 'brightness(1) contrast(1)',
          duration: 4.0,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 95%',
            end: 'bottom 5%',
            toggleActions: 'play reverse play reverse'
          }
        }
      )
    })

    // Reveal from Bottom-Left Corner (Softened on Mobile)
    gsap.utils.toArray('.reveal-corner-bl').forEach((el) => {
      gsap.fromTo(el, 
        { 
          x: isMobile ? -20 : -cornerMove, 
          y: isMobile ? 20 : cornerMove, 
          opacity: 0, 
          rotation: isMobile ? 0 : 15, 
          filter: isMobile ? 'none' : 'brightness(3) contrast(1.5)',
          force3D: true 
        },
        {
          x: 0,
          y: 0,
          opacity: 1,
          rotation: 0,
          filter: isMobile ? 'none' : 'brightness(1) contrast(1)',
          duration: 4.0,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 95%',
            end: 'bottom 5%',
            toggleActions: 'play reverse play reverse'
          }
        }
      )
    })

    // Reveal from Bottom-Right Corner (Softened on Mobile)
    gsap.utils.toArray('.reveal-corner-br').forEach((el) => {
      gsap.fromTo(el, 
        { 
          x: isMobile ? 20 : cornerMove, 
          y: isMobile ? 20 : cornerMove, 
          opacity: 0, 
          rotation: isMobile ? 0 : -15, 
          filter: isMobile ? 'none' : 'brightness(3) contrast(1.5)',
          force3D: true 
        },
        {
          x: 0,
          y: 0,
          opacity: 1,
          rotation: 0,
          filter: isMobile ? 'none' : 'brightness(1) contrast(1)',
          duration: 4.0,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 95%',
            end: 'bottom 5%',
            toggleActions: 'play reverse play reverse'
          }
        }
      )
    })

    // Parallax Effect for Backgrounds
    gsap.utils.toArray('.parallax-bg').forEach((bg) => {
      gsap.to(bg, {
        yPercent: isMobile ? 10 : 30,
        ease: 'none',
        force3D: true,
        scrollTrigger: {
          trigger: bg,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      })
    })

    // Staggered Reveal
    gsap.utils.toArray('.reveal-stagger').forEach((container) => {
      const children = container.children
      gsap.fromTo(children, 
        { y: isMobile ? 30 : 100, opacity: 0, scale: 0.98, force3D: true },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 2.5,
          stagger: isMobile ? 0.2 : 0.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: container,
            start: 'top 95%',
            end: 'bottom 5%',
            toggleActions: 'play reverse play reverse'
          }
        }
      )
    })
  }, { scope: mainRef, dependencies: [pathname] })

  return (
    <div ref={mainRef} className="overflow-x-hidden relative w-full">
      {children}
    </div>
  )
}
