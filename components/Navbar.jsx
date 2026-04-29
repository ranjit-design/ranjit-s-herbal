'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { useCart } from '@/hooks/useCart'
import Image from 'next/image'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [suggestions, setSuggestions] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  
  const { cartCount } = useCart()
  const searchRef = useRef(null)

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/shop', label: 'Shop' },

    { href: '/blog', label: 'Blog' },
    { href: '/about', label: 'About' },
  ]

  // Handle Search Suggestions fetching
  useEffect(() => {
    if (searchQuery.trim().length <= 1) {
      setSuggestions([])
      return
    }

    setIsLoading(true)
    const timeoutId = setTimeout(() => {
      fetch(`/api/products?search=${encodeURIComponent(searchQuery)}`)
        .then((res) => {
          if (!res.ok) throw new Error('API fetch error')
          return res.json()
        })
        .then((data) => {
          // ensure data is an array just in case
          setSuggestions(Array.isArray(data) ? data.slice(0, 5) : [])
        })
        .catch(err => console.error('Search failed:', err))
        .finally(() => setIsLoading(false))
    }, 150) // 150ms debounce

    return () => clearTimeout(timeoutId)
  }, [searchQuery])

  // Close search overlay if clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      // Don't close if clicking the search toggle button or inside the search overlay
      if (searchRef.current && !searchRef.current.contains(event.target) && !event.target.closest('[aria-label="Toggle Search"]')) {
        setIsSearchOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [searchRef])

  // Focus input when search opens
  const inputRef = useRef(null)
  useEffect(() => {
    if (isSearchOpen && inputRef.current) {
      setTimeout(() => inputRef.current.focus(), 100)
    }
  }, [isSearchOpen])

  // Close search when user hits "Escape"
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') setIsSearchOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <nav className="bg-gradient-to-r from-[#F0F4C8] via-[#F0F4C8] to-[#E6F0AB] sticky top-0 z-50 relative overflow-visible shadow-sm">
      {/* Yellow accent overlay */}
      <div className="absolute top-0 right-0 w-[40%] h-full bg-gradient-to-l from-[#E4F84B]/20 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-20">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2" onClick={() => setIsSearchOpen(false)}>
            <div className="w-8 h-8 bg-green-700 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-2xl font-bold text-gray-900">Herbal Shop</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-green-800 text-md font-medium transition"
                onClick={() => setIsSearchOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Icons & Shop Now */}
          <div className="flex items-center gap-3">
            {/* Search Icon */}
            <button 
              onClick={() => {
                setIsSearchOpen(!isSearchOpen)
                setSearchQuery('')
              }}
              className={`p-2 transition-colors duration-200 rounded-full ${isSearchOpen ? 'bg-green-100 text-green-900 shadow-inner' : 'text-gray-800 hover:text-green-800 hover:bg-white/50'}`}
              aria-label="Toggle Search"
            >
              {isSearchOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              )}
            </button>

            {/* Contact Icon */}
            <Link href="/contact" className="text-gray-800 hover:text-green-800 hover:bg-white/50 p-2 rounded-full font-bold transition-colors" aria-label="Contact Us">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </Link>

            {/* Cart Icon */}
            <Link href="/cart" className="relative text-gray-800 hover:text-green-800 hover:bg-white/50 p-2 rounded-full transition-colors" onClick={() => setIsSearchOpen(false)}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-green-700 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center text-[10px]">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Login Link */}
            <Link 
              href="/login" 
              className="hidden md:block text-[#1F4A22] font-bold text-sm hover:text-green-800 transition mr-2"
              onClick={() => setIsSearchOpen(false)}
            >
              Login
            </Link>

            {/* Shop Now Button */}
            <Link
              href="/shop"
              className="hidden md:block bg-[#1F4A22] text-[#F0F4C8] px-5 py-2.5 rounded-full text-sm font-bold hover:bg-[#153417] transition shadow-md hover:shadow-lg ml-2"
              onClick={() => setIsSearchOpen(false)}
            >
              Shop Now
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-800 p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100 py-6' : 'max-h-0 opacity-0 py-0'} border-t border-gray-200/50`}>
          <div className="flex flex-col gap-2">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-4 px-4 text-center text-gray-800 hover:text-green-800 font-bold text-lg rounded-xl hover:bg-white/50 transition-all duration-300 transform active:scale-95"
                style={{ transitionDelay: `${index * 50}ms` }}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-6 px-2 flex flex-col gap-3">
              <Link
                href="/login"
                className="block border-2 border-[#1F4A22] text-[#1F4A22] px-5 py-4 rounded-2xl text-center font-extrabold active:scale-[0.98] transition-transform"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
              <Link
                href="/shop"
                className="block bg-[#1F4A22] text-[#F0F4C8] px-5 py-4 rounded-2xl text-center font-extrabold shadow-lg shadow-green-900/20 active:scale-[0.98] transition-transform"
                onClick={() => setIsOpen(false)}
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Search Overlay Dropdown */}
      <div
        ref={searchRef}
        className={`absolute top-full left-0 w-full bg-white shadow-2xl transition-all duration-300 ease-in-out transform ${isSearchOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
        style={{ zIndex: 100 }}
      >
          <div className="max-w-4xl mx-auto p-6 bg-white border-x border-b border-gray-100">

          <div className="relative">
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input 
              ref={inputRef}
              type="text" 
              placeholder="Search for pure herbal blends, wellness products..."
              className="w-full bg-gray-100 border-2 border-transparent focus:bg-white focus:border-green-500 outline-none rounded-2xl py-4 pl-14 pr-6 text-lg font-medium text-gray-800 transition-all shadow-inner placeholder-gray-400"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {isLoading && (
              <div className="absolute right-4 top-1/2 -translate-y-1/2">
                <svg className="animate-spin h-5 w-5 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              </div>
            )}
          </div>

          {/* Quick Suggestions & Results */}
          <div className="mt-8">
             {suggestions.length > 0 ? (
               <div className="animate-in fade-in slide-in-from-top-4 duration-300">
                 <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest px-2 mb-4">Results</h4>
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                   {suggestions.map((product) => (
                      <Link 
                        key={product.id} 
                        href={`/shop`} 
                        onClick={() => setIsSearchOpen(false)}
                        className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-green-400 hover:bg-white transition-all transform hover:-translate-y-1 group shadow-sm"
                      >
                         <div className="relative w-16 h-16 bg-white rounded-xl overflow-hidden shadow-sm shrink-0 border border-gray-50 group-hover:shadow-md transition-shadow">
                           {/* Fallback to placeholders if product has no image field directly */}
                           <Image 
                             src={product.image || '/images/Herbal.png'} 
                             alt={product.name} 
                             fill
                             sizes="64px"
                             className="object-cover group-hover:scale-110 transition-transform duration-300" 
                           />
                         </div>
                         <div>
                            <h5 className="font-bold text-gray-900 group-hover:text-[#1F4A22] transition-colors">{product.name}</h5>
                            <p className="text-sm text-gray-500 font-medium mt-1 uppercase tracking-tight">Rs. {product.price}</p>
                         </div>
                      </Link>
                   ))}
                 </div>
               </div>
             ) : searchQuery.length > 1 && !isLoading ? (
               <div className="text-center py-12 text-gray-500 animate-in fade-in duration-300">
                  <div className="text-4xl mb-3">🌿</div>
                  <p className="font-medium">No herbal matches found for "{searchQuery}".</p>
               </div>
             ) : (
               <div className="animate-in fade-in duration-500">
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest px-2 mb-4">Popular Searches</h4>
                  <div className="flex flex-wrap gap-2 px-2">
                    {['Energy Boost', 'Relaxation Drops', 'Organic Shampoo', 'Matcha', 'Herbal Extracts'].map(term => (
                      <button 
                        key={term}
                        onClick={() => setSearchQuery(term)}
                        className="px-4 py-2 bg-gray-50 hover:bg-[#F2C83B]/20 hover:text-[#1F4A22] text-gray-600 font-medium rounded-full text-sm transition-colors border border-gray-100 hover:border-[#F2C83B]/30"
                      >
                        {term}
                      </button>
                    ))}
                  </div>
               </div>
             )}
          </div>
        </div>
      </div>
      
      {/* Background Overlay Dimmer */}
      {isSearchOpen && (
        <div 
           className="fixed inset-0 bg-gray-900/40 backdrop-blur-sm z-[40] transition-opacity top-20"
           aria-hidden="true"
        ></div>
      )}
    </nav>
  )
}
