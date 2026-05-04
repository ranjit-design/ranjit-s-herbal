'use client'
import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { usePathname } from 'next/navigation'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function PageWrapper({ children }) {
  const pathname = usePathname()

  useEffect(() => {
    // Refresh ScrollTrigger on route change
    ScrollTrigger.refresh()

    const isMobile = window.innerWidth < 768
    const xMove = isMobile ? 60 : 150
    const yMove = isMobile ? 60 : 150
    const cornerMove = isMobile ? 80 : 200

    // Reveal from Bottom
    gsap.utils.toArray('.reveal-bottom').forEach((el) => {
      gsap.fromTo(el, 
        { y: yMove, opacity: 0, rotation: isMobile ? 1 : 2 },
        {
          y: 0,
          opacity: 1,
          rotation: 0,
          duration: 3.0,
          ease: 'power4.out',
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
        { y: -yMove, opacity: 0, rotation: isMobile ? -1 : -2 },
        {
          y: 0,
          opacity: 1,
          rotation: 0,
          duration: 3.0,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 95%',
            end: 'bottom 5%',
            toggleActions: 'play reverse play reverse'
          }
        }
      )
    })

    // Reveal from Left
    gsap.utils.toArray('.reveal-left').forEach((el) => {
      gsap.fromTo(el, 
        { x: -xMove, opacity: 0, rotation: isMobile ? -2 : -5 },
        {
          x: 0,
          opacity: 1,
          rotation: 0,
          duration: 3.0,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 95%',
            end: 'bottom 5%',
            toggleActions: 'play reverse play reverse'
          }
        }
      )
    })

    // Reveal from Right
    gsap.utils.toArray('.reveal-right').forEach((el) => {
      gsap.fromTo(el, 
        { x: xMove, opacity: 0, rotation: isMobile ? 2 : 5 },
        {
          x: 0,
          opacity: 1,
          rotation: 0,
          duration: 3.0,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 95%',
            end: 'bottom 5%',
            toggleActions: 'play reverse play reverse'
          }
        }
      )
    })

    // Reveal from Top-Left Corner (Diagonal)
    gsap.utils.toArray('.reveal-corner-tl').forEach((el) => {
      gsap.fromTo(el, 
        { x: -cornerMove, y: -cornerMove, opacity: 0, rotation: isMobile ? -5 : -15, filter: 'brightness(3) contrast(1.5)' },
        {
          x: 0,
          y: 0,
          opacity: 1,
          rotation: 0,
          filter: 'brightness(1) contrast(1)',
          duration: 4.0,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 95%',
            end: 'bottom 5%',
            toggleActions: 'play reverse play reverse'
          }
        }
      )
    })

    // Reveal from Top-Right Corner (Diagonal)
    gsap.utils.toArray('.reveal-corner-tr').forEach((el) => {
      gsap.fromTo(el, 
        { x: cornerMove, y: -cornerMove, opacity: 0, rotation: isMobile ? 5 : 15, filter: 'brightness(3) contrast(1.5)' },
        {
          x: 0,
          y: 0,
          opacity: 1,
          rotation: 0,
          filter: 'brightness(1) contrast(1)',
          duration: 4.0,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 95%',
            end: 'bottom 5%',
            toggleActions: 'play reverse play reverse'
          }
        }
      )
    })

    // Reveal from Bottom-Left Corner (Diagonal)
    gsap.utils.toArray('.reveal-corner-bl').forEach((el) => {
      gsap.fromTo(el, 
        { x: -cornerMove, y: cornerMove, opacity: 0, rotation: isMobile ? 5 : 15, filter: 'brightness(3) contrast(1.5)' },
        {
          x: 0,
          y: 0,
          opacity: 1,
          rotation: 0,
          filter: 'brightness(1) contrast(1)',
          duration: 4.0,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 95%',
            end: 'bottom 5%',
            toggleActions: 'play reverse play reverse'
          }
        }
      )
    })

    // Reveal from Bottom-Right Corner (Diagonal)
    gsap.utils.toArray('.reveal-corner-br').forEach((el) => {
      gsap.fromTo(el, 
        { x: cornerMove, y: cornerMove, opacity: 0, rotation: isMobile ? -5 : -15, filter: 'brightness(3) contrast(1.5)' },
        {
          x: 0,
          y: 0,
          opacity: 1,
          rotation: 0,
          filter: 'brightness(1) contrast(1)',
          duration: 4.0,
          ease: 'power3.out',
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
        yPercent: isMobile ? 15 : 30,
        ease: 'none',
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
        { y: isMobile ? 40 : 100, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 2.5,
          stagger: isMobile ? 0.3 : 0.5,
          ease: 'back.out(1.2)',
          scrollTrigger: {
            trigger: container,
            start: 'top 95%',
            end: 'bottom 5%',
            toggleActions: 'play reverse play reverse'
          }
        }
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [pathname])

  return <>{children}</>
}
