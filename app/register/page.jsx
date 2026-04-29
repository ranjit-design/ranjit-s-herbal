'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!")
      return
    }
    console.log('Registering with:', formData)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-6 font-sans">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left Side: Welcome Content */}
        <div className="text-center md:text-left flex flex-col items-center md:items-start space-y-4">
          <div className="space-y-0">
            <h3 className="script-font text-2xl md:text-3xl text-[#3A6B35] italic">Join the</h3>
            <h1 className="script-font text-6xl md:text-7xl text-[#1F4A22] leading-tight">Herbal Shop</h1>
            <p className="text-base md:text-lg text-gray-700 font-medium tracking-wide mt-2">
              Start your journey with premium natural products
            </p>
          </div>
          
          <div className="relative w-full max-w-[500px] aspect-square mt-8">
            <Image 
              src="/images/Shampoo.png" 
              alt="Herbal Shampoo" 
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Right Side: Register Form */}
        <div className="w-full max-w-md mx-auto">
          <div className="mb-10 text-center md:text-left">
            <h2 className="text-3xl font-bold text-[#1F4A22] inline-block border-b-4 border-[#3A6B35] pb-2">
              Create an Account
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="fullName">
                Full Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <input
                  id="fullName"
                  type="text"
                  className="block w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#3A6B35] focus:border-transparent outline-none transition-all"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="email">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <input
                  id="email"
                  type="email"
                  className="block w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#3A6B35] focus:border-transparent outline-none transition-all"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="•••••"
                  className="block w-full px-4 py-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#3A6B35] focus:border-transparent outline-none transition-all"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="confirmPassword">
                  Confirm
                </label>
                <input
                  id="confirmPassword"
                  type="password"
                  placeholder="•••••"
                  className="block w-full px-4 py-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#3A6B35] focus:border-transparent outline-none transition-all"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="flex items-start mt-2">
              <input
                id="agreeTerms"
                type="checkbox"
                className="mt-1 h-4 w-4 text-[#3A6B35] border-gray-300 rounded focus:ring-[#3A6B35]"
                checked={formData.agreeTerms}
                onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
                required
              />
              <label htmlFor="agreeTerms" className="ml-2 block text-sm text-gray-600">
                I agree to the <a href="#" className="text-[#1F4A22] font-bold hover:underline">Terms of Service</a> and <a href="#" className="text-[#1F4A22] font-bold hover:underline">Privacy Policy</a>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#3A6B35] to-[#1F4A22] text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transform transition hover:-translate-y-1 active:scale-95 mt-4"
            >
              Sign Up
            </button>
          </form>

          <div className="mt-8 text-center pt-6 border-t border-gray-100">
            <p className="text-gray-600 font-medium">
              Already have an account?{' '}
              <Link href="/login" className="text-[#1F4A22] font-bold hover:underline">
                Login here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
