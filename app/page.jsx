'use client'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import FavoriteProducts from '@/components/FavoriteProducts'
import TrustBadges from '@/components/TrustBadges'
import { blogPosts } from '@/data/blogData'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Home() {
  const latestPosts = blogPosts.slice(0, 3)
  const heroRef = useRef(null)
  const trustRef = useRef(null)
  const benefitsRef = useRef(null)
  const ingredientsRef = useRef(null)
  const favRef = useRef(null)
  const blogRef = useRef(null)
  const mainRef = useRef(null)

  useGSAP(() => {
    // Hero Section Animation (on scroll/load)
    const heroTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.hero-content',
        start: 'top 90%',
        end: 'bottom 10%',
        toggleActions: 'play none none none'
      }
    })
    heroTl.from('.hero-content > *', {
      y: 100,
      opacity: 0,
      scale: 0.9,
      duration: 3.5,
      stagger: 0.5,
      ease: 'power4.out'
    })
    .from('.hero-badge', {
      scale: 0,
      rotation: -45,
      opacity: 0,
      duration: 1,
      ease: 'back.out(2)'
    }, '-=1')

    // Trust Badges Animation
    gsap.from('.trust-badge-item', {
      scrollTrigger: {
        trigger: trustRef.current,
        start: 'top 90%',
        end: 'bottom 10%',
        toggleActions: 'play none none none'
      },
      y: 20,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power2.out'
    })

    // Responsive values for manual animations
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
    const benefitsX = isMobile ? 80 : 200

    // Benefits Section Animations
    const benefitsTl = gsap.timeline({
      scrollTrigger: {
        trigger: benefitsRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none none',
      }
    })

    benefitsTl.from('.benefits-header', {
      y: 100,
      opacity: 0,
      duration: 3.0,
      ease: 'power4.out'
    })
    .from('.benefit-item-left', {
      x: -benefitsX,
      rotation: -5,
      opacity: 0,
      duration: 3.5,
      stagger: 0.6,
      ease: 'power3.out'
    }, '-=3.0')
    .from('.benefit-item-right', {
      x: benefitsX,
      rotation: 5,
      opacity: 0,
      duration: 3.5,
      stagger: 0.6,
      ease: 'power3.out'
    }, '-=3.5')
    .from('.benefits-btn', {
      y: 50,
      scale: 0,
      opacity: 0,
      duration: 2.0,
      ease: 'back.out(1.7)'
    }, '-=1.0')

    // Ingredients Section Animations
    const ingredientsTl = gsap.timeline({
      scrollTrigger: {
        trigger: ingredientsRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none none',
      }
    })

    ingredientsTl.from('.ingredients-header', {
      scale: 0.9,
      opacity: 0,
      duration: 1.5,
      ease: 'power3.out'
    })
    .from('.ingredient-card', {
      y: 150,
      rotation: (i) => i % 2 === 0 ? 10 : -10,
      opacity: 0,
      duration: 1.2,
      stagger: 0.4,
      ease: 'power2.out'
    }, '-=1')
    .from('.ingredients-btn', {
      scale: 0,
      opacity: 0,
      duration: 0.8,
      ease: 'back.out(2)'
    }, '-=0.4')

    // Navbar Animation (on load)
    gsap.from('nav', {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      delay: 0.5
    })

  }) 

  return (
    <div className="min-h-screen" ref={mainRef}>
      {/* ... Hero Section ... */}
      {/* Hero Section - Full Page Background */}
      <section ref={heroRef} className="relative min-h-[95vh] flex items-center overflow-hidden bg-white">
        {/* Background Image - Glowing and Light */}
        <div className="absolute inset-0 z-0 parallax-bg">
          <Image 
            src="/images/hero-bg.png" 
            alt="Herbal Wellness Background" 
            fill 
            className="object-cover brightness-125 contrast-110 saturate-[1.2]"
            priority
          />
          {/* Light, Glowing Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/20 to-white/60"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_white_100%)] opacity-40"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10 w-full py-24 flex flex-col items-center justify-center text-center">
          {/* Content with High-Visibility Dark Colors */}
          <div className="hero-content max-w-5xl">
            <h1 className="text-3xl md:text-6xl lg:text-8xl font-semibold leading-tight mb-6 text-[#0A1A0B] reveal-corner-tl">
              Feel the <span className="font-extrabold tracking-tight text-[#1F4A22] drop-shadow-[0_0_15px_rgba(31,74,34,0.3)]">Natural Power</span>
            </h1>
            <h2 className="text-2xl md:text-5xl font-extrabold text-[#0A1A0B]/90 mb-8 tracking-tight leading-tight reveal-corner-tr">
              Elevate Your Energy and Focus
            </h2>
            <p className="text-lg md:text-2xl text-[#0A1A0B]/80 mb-12 max-w-3xl mx-auto font-bold leading-relaxed reveal-corner-bl">
              Unlock your full potential with a natural blend designed to elevate energy,
              enhance mental clarity, and keep you at your best — anytime, anywhere.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 reveal-corner-br">
              <Link
                href="/shop"
                className="w-full sm:w-auto inline-block bg-[#1F4A22] text-white px-14 py-5 rounded-full font-black hover:bg-[#153417] transition shadow-2xl shadow-[#1F4A22]/30 transform hover:-translate-y-1 text-sm uppercase tracking-[0.2em]"
              >
                Explore Shop
              </Link>
              <Link
                href="/about"
                className="w-full sm:w-auto inline-block bg-white/60 backdrop-blur-md text-[#1F4A22] border border-[#1F4A22]/20 px-14 py-5 rounded-full font-bold hover:bg-white transition shadow-xl text-sm uppercase tracking-[0.2em]"
              >
                Learn More
              </Link>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-6 justify-center pt-8 reveal-corner-br border-t border-[#1F4A22]/10">
              <div className="flex text-[#F2C83B]">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[#0A1A0B] font-black text-xl">47,281+</span>
                <span className="text-[#0A1A0B]/60 text-sm font-bold uppercase tracking-widest">Happy Customers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div ref={trustRef}>
        <TrustBadges />
      </div>

      {/* Product Benefits Section */}
      <section ref={benefitsRef} className="py-20 bg-gradient-to-b from-white to-green-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="benefits-header">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Our Products Benefits</h2>
            <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
              Unlock your full potential with a natural blend designed to elevate mood, enhance mental clarity,
              and keep you at your best — anytime, anywhere.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Center Product Image - Desktop */}
            <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 benefits-image reveal-corner-tl">
              <div className="relative">
                {/* Platform base */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-48 h-12 bg-green-600/20 rounded-full blur-lg"></div>
                <Image
                  src="/images/HairOil.png"
                  alt="Hair Oil Product"
                  width={220}
                  height={300}
                  className="w-48 h-auto object-contain drop-shadow-2xl"
                />
              </div>
            </div>

            {/* Mobile Product Image */}
            <div className="md:hidden flex justify-center mb-8 benefits-image reveal-corner-tl">
              <Image
                src="/images/HairOil.png"
                alt="Hair Oil Product"
                width={180}
                height={250}
                className="w-40 h-auto object-contain drop-shadow-xl"
              />
            </div>

            {/* Benefits Grid - 4 corners around product */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 md:gap-y-24 gap-x-48">
              {/* Top Left - Balancing (positioned left of product) */}
              <div className="benefit-item-left flex flex-col items-center text-center gap-4 md:flex-row-reverse md:items-start md:text-right md:pr-24">
                <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center shrink-0 border border-green-100">
                  <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                </div>
                <div className="pt-1">
                  <h3 className="font-bold text-lg text-gray-900">Balancing</h3>
                  <p className="text-gray-500 text-sm mt-1">Advanced solution to bring back a sense of relaxation and clarity</p>
                </div>
              </div>

              {/* Top Right - Fast-Acting (positioned right of product) */}
              <div className="benefit-item-right flex flex-col items-center text-center gap-4 md:flex-row md:items-start md:pl-24 md:text-left">
                <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center shrink-0 border border-green-100">
                  <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="pt-1">
                  <h3 className="font-bold text-lg text-gray-900">Fast-Acting Results</h3>
                  <p className="text-gray-500 text-sm mt-1">Feel the benefits straight away, compared to powders or capsules</p>
                </div>
              </div>

              {/* Bottom Left - All-Natural (positioned left of product) */}
              <div className="benefit-item-left flex flex-col items-center text-center gap-4 md:flex-row-reverse md:items-start md:text-right md:pr-24">
                <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center shrink-0 border border-green-100">
                  <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <div className="pt-1">
                  <h3 className="font-bold text-lg text-gray-900">All-Natural Formula</h3>
                  <p className="text-gray-500 text-sm mt-1">Made with the purest, strongest ingredients</p>
                </div>
              </div>

              {/* Bottom Right - Boost Energy (positioned right of product) */}
              <div className="benefit-item-right flex flex-col items-center text-center gap-4 md:flex-row md:items-start md:pl-24 md:text-left">
                <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center shrink-0 border border-green-100">
                  <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div className="pt-1">
                  <h3 className="font-bold text-lg text-gray-900">Boost Energy</h3>
                  <p className="text-gray-500 text-sm mt-1">Unlock your full potential with a natural blend designed to elevate mood</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12 benefits-btn">
            <Link
              href="/shop"
              className="inline-block bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition"
            >
              Buy Now
            </Link>
          </div>
        </div>
      </section>

      {/* Pure and Simple Ingredients */}
      <section ref={ingredientsRef} className="py-20 bg-gradient-to-b from-green-50/50 to-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <div className="ingredients-header">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-3">Pure and Simple Ingredients</h2>
            <p className="text-center text-gray-500 mb-4 text-sm">
              Easy and effective ingredients to understand. 100% clean label.
            </p>
            <p className="text-center text-gray-400 text-xs mb-16 max-w-lg mx-auto">
              Secure most cutting-edge ingredients.
            </p>
          </div>

          {/* Numbered timeline connector */}
          <div className="relative">
            <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gray-200 max-w-4xl mx-auto"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { num: '01', name: 'Filtered Water', img: '/images/flower.jpg' },
                { num: '02', name: 'Standardized Mitragyn Speciosa Extract', img: '/images/leaf.jpg' },
                { num: '03', name: 'Citric Acid', img: '/images/pudina.jpg' },
              ].map((item) => (
                <div key={item.num} className="relative ingredient-card">
                  {/* Number badge */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                    <span className="bg-green-600 text-white text-xs font-bold w-8 h-8 rounded-full flex items-center justify-center border-4 border-green-50">
                      {item.num}
                    </span>
                  </div>

                  <div className="bg-white rounded-2xl p-5 pt-8 shadow-sm border border-gray-100 text-center mt-4">
                    <div className="relative h-36 w-full mb-4 rounded-xl overflow-hidden bg-gray-50">
                      <Image
                        src={item.img}
                        alt={item.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                    <h3 className="font-medium text-gray-800 text-sm">{item.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12 ingredients-btn">
            <Link
              href="/shop"
              className="inline-block bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition text-sm"
            >
              Pure and simple ingredients
            </Link>
          </div>
        </div>
      </section>

      <div ref={favRef}>
        <FavoriteProducts />
      </div>

      {/* Latest Blog Section */}
      <section ref={blogRef} className="py-24 bg-[#FDFDF8] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 gap-4 text-center md:text-left blog-header">
            <div className="max-w-2xl">
              <span className="text-[#1F4A22] font-bold text-sm uppercase tracking-widest mb-3 block">Wellness Guide</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">Latest From Our Herbal Blog</h2>
            </div>
            <Link 
              href="/blog" 
              className="group flex items-center gap-2 text-[#1F4A22] font-bold transition-all hover:gap-3"
            >
              View All Posts
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestPosts.map((post) => {
              return (
                <Link key={post.id} href={`/blog/${post.id}`} className="group block">
                <article className="bg-white rounded-2xl overflow-hidden border border-gray-50 shadow-sm group-hover:shadow-md transition-all duration-300 flex flex-col h-full">
                  <div className="relative aspect-video overflow-hidden bg-gray-50">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-2 left-2">
                      <span className="bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded-full text-[10px] font-bold text-[#1F4A22] shadow-sm uppercase tracking-wider">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-4 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 mb-2 text-[10px] text-gray-400 font-medium">
                      <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4 group-hover:text-[#1F4A22] transition-colors line-clamp-2 leading-tight">
                      {post.title}
                    </h3>
                    <span className="mt-auto text-[#1F4A22] font-bold text-xs flex items-center gap-1">
                      Read Article
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </article>
              </Link>
            )})}
          </div>
        </div>
      </section>
    </div>
  )
}


