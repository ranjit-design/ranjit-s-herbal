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

  // Force scroll to top on every route change
  useEffect(() => {
    // We use a small timeout to ensure the scroll happens after Next.js completes the transition
    // and the new content is fully rendered.
    const handleScroll = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });
    };
    
    handleScroll();
    // Also trigger on a tiny delay for cases where content height might change
    const timeoutId = setTimeout(handleScroll, 10);
    
    return () => clearTimeout(timeoutId);
  }, [pathname]);

  useGSAP(() => {
    // Refresh ScrollTrigger on route change
    ScrollTrigger.refresh()

    const isMobile = window.innerWidth < 768
    const xMove = isMobile ? 40 : 150
    const yMove = isMobile ? 40 : 150
    const cornerMove = isMobile ? 60 : 200

    // Reveal from Bottom
    gsap.utils.toArray('.reveal-bottom').forEach((el) => {
      gsap.fromTo(el, 
        { y: yMove, opacity: 0, rotation: isMobile ? 1 : 2, force3D: true },
        {
          y: 0,
          opacity: 1,
          rotation: 0,
          duration: 3.0,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom-=50',
            end: 'bottom top',
            toggleActions: 'play none none none'
          }
        }
      )
    })

    // Reveal from Top
    gsap.utils.toArray('.reveal-top').forEach((el) => {
      gsap.fromTo(el, 
        { y: -yMove, opacity: 0, rotation: isMobile ? -1 : -2, force3D: true },
        {
          y: 0,
          opacity: 1,
          rotation: 0,
          duration: 3.0,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom-=50',
            end: 'bottom top',
            toggleActions: 'play none none none'
          }
        }
      )
    })

    // Reveal from Left
    gsap.utils.toArray('.reveal-left').forEach((el) => {
      gsap.fromTo(el, 
        { x: -xMove, opacity: 0, rotation: isMobile ? -2 : -5, force3D: true },
        {
          x: 0,
          opacity: 1,
          rotation: 0,
          duration: 3.0,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom-=50',
            end: 'bottom top',
            toggleActions: 'play none none none'
          }
        }
      )
    })

    // Reveal from Right
    gsap.utils.toArray('.reveal-right').forEach((el) => {
      gsap.fromTo(el, 
        { x: xMove, opacity: 0, rotation: isMobile ? 2 : 5, force3D: true },
        {
          x: 0,
          opacity: 1,
          rotation: 0,
          duration: 3.0,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom-=50',
            end: 'bottom top',
            toggleActions: 'play none none none'
          }
        }
      )
    })

    // Reveal from Top-Left Corner
    gsap.utils.toArray('.reveal-corner-tl').forEach((el) => {
      gsap.fromTo(el, 
        { 
          x: -cornerMove, 
          y: -cornerMove, 
          opacity: 0, 
          rotation: isMobile ? -5 : -15, 
          filter: isMobile ? 'brightness(1.5) contrast(1.1)' : 'brightness(3) contrast(1.5)',
          force3D: true 
        },
        {
          x: 0,
          y: 0,
          opacity: 1,
          rotation: 0,
          filter: 'brightness(1) contrast(1)',
          duration: 4.0,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom-=50',
            end: 'bottom top',
            toggleActions: 'play none none none'
          }
        }
      )
    })

    // Reveal from Top-Right Corner
    gsap.utils.toArray('.reveal-corner-tr').forEach((el) => {
      gsap.fromTo(el, 
        { 
          x: cornerMove, 
          y: -cornerMove, 
          opacity: 0, 
          rotation: isMobile ? 5 : 15, 
          filter: isMobile ? 'brightness(1.5) contrast(1.1)' : 'brightness(3) contrast(1.5)',
          force3D: true 
        },
        {
          x: 0,
          y: 0,
          opacity: 1,
          rotation: 0,
          filter: 'brightness(1) contrast(1)',
          duration: 4.0,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom-=50',
            end: 'bottom top',
            toggleActions: 'play none none none'
          }
        }
      )
    })

    // Reveal from Bottom-Left Corner
    gsap.utils.toArray('.reveal-corner-bl').forEach((el) => {
      gsap.fromTo(el, 
        { 
          x: -cornerMove, 
          y: cornerMove, 
          opacity: 0, 
          rotation: isMobile ? 5 : 15, 
          filter: isMobile ? 'brightness(1.5) contrast(1.1)' : 'brightness(3) contrast(1.5)',
          force3D: true 
        },
        {
          x: 0,
          y: 0,
          opacity: 1,
          rotation: 0,
          filter: 'brightness(1) contrast(1)',
          duration: 4.0,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom-=50',
            end: 'bottom top',
            toggleActions: 'play none none none'
          }
        }
      )
    })

    // Reveal from Bottom-Right Corner
    gsap.utils.toArray('.reveal-corner-br').forEach((el) => {
      gsap.fromTo(el, 
        { 
          x: cornerMove, 
          y: cornerMove, 
          opacity: 0, 
          rotation: isMobile ? -5 : -15, 
          filter: isMobile ? 'brightness(1.5) contrast(1.1)' : 'brightness(3) contrast(1.5)',
          force3D: true 
        },
        {
          x: 0,
          y: 0,
          opacity: 1,
          rotation: 0,
          filter: 'brightness(1) contrast(1)',
          duration: 4.0,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom-=50',
            end: 'bottom top',
            toggleActions: 'play none none none'
          }
        }
      )
    })

    // Parallax Effect for Backgrounds
    gsap.utils.toArray('.parallax-bg').forEach((bg) => {
      gsap.to(bg, {
        yPercent: isMobile ? 12 : 30,
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
            start: 'top bottom-=50',
            end: 'bottom top',
            toggleActions: 'play none none none'
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
