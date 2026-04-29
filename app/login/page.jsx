'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Login attempt with:', email)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-6 font-sans">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left Side: Welcome Content */}
        <div className="text-center md:text-left flex flex-col items-center md:items-start space-y-4">
          <div className="space-y-0">
            <h3 className="script-font text-3xl md:text-4xl text-[#3A6B35] italic">Welcome to</h3>
            <h1 className="script-font text-7xl md:text-8xl text-[#1F4A22] leading-tight">Herbal Shop</h1>
            <p className="text-lg md:text-xl text-gray-700 font-medium tracking-wide mt-2">
              Natural Remedies for a Healthy Life
            </p>
          </div>

          <div className="relative w-full max-w-[500px] aspect-square mt-8">
            <Image
              src="/images/Herbal.png"
              alt="Herbal Products"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Right Side: Login Form */}
        <div className="w-full max-w-md mx-auto">
          <div className="mb-10 text-center md:text-left">
            <h2 className="text-3xl font-bold text-[#1F4A22] inline-block border-b-4 border-[#3A6B35] pb-2">
              Login to Your Account
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
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
                  placeholder="Enter your email"
                  className="block w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#3A6B35] focus:border-transparent outline-none transition-all"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="password">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <input
                  id="password"
                  type="password"
                  placeholder="•••••"
                  className="block w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#3A6B35] focus:border-transparent outline-none transition-all"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="text-right mt-2">
                <a href="#" className="text-sm font-medium text-gray-600 hover:text-[#1F4A22] transition">
                  Forgot Password?
                </a>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#3A6B35] to-[#1F4A22] text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transform transition hover:-translate-y-1 active:scale-95"
            >
              Login
            </button>
          </form>

          <div className="mt-8 text-center pt-6 border-t border-gray-100">
            <p className="text-gray-600 font-medium">
              Don't have an account?{' '}
              <Link href="/register" className="text-[#1F4A22] font-bold hover:underline">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
