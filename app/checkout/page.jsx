'use client'

import { useState } from 'react'
import { useCart } from '@/hooks/useCart'
import Link from 'next/link'
import Image from 'next/image'

export default function CheckoutPage() {
  const { cart, total } = useCart()
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    phone: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle checkout logic
  }

  return (
    <div className="min-h-screen bg-[#F9FBEC] py-12 md:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#1F4A22] mb-4">Secure Checkout</h1>
          <p className="text-gray-500 font-medium">Please enter your details below to complete your order.</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-[32px] p-8 md:p-12 shadow-xl shadow-green-900/5 border border-gray-100">

          {/* Section 1: Contact & Shipping */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-[#1F4A22] mb-6 flex items-center justify-center md:justify-start gap-3 border-b border-gray-100 pb-4 text-center md:text-left">
              <span className="w-8 h-8 bg-green-100 text-green-700 rounded-full flex items-center justify-center text-sm">1</span>
              Shipping Information
            </h2>

            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">First Name</label>
                  <input
                    type="text"
                    required
                    className="w-full border border-gray-200 bg-gray-50/50 p-4 rounded-xl focus:outline-none focus:border-[#1F4A22] focus:ring-1 focus:ring-[#1F4A22] focus:bg-white transition-all"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Last Name</label>
                  <input
                    type="text"
                    required
                    className="w-full border border-gray-200 bg-gray-50/50 p-4 rounded-xl focus:outline-none focus:border-[#1F4A22] focus:ring-1 focus:ring-[#1F4A22] focus:bg-white transition-all"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Email Address</label>
                <input
                  type="email"
                  required
                  className="w-full border border-gray-200 bg-gray-50/50 p-4 rounded-xl focus:outline-none focus:border-[#1F4A22] focus:ring-1 focus:ring-[#1F4A22] focus:bg-white transition-all"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Full Address</label>
                <input
                  type="text"
                  required
                  className="w-full border border-gray-200 bg-gray-50/50 p-4 rounded-xl focus:outline-none focus:border-[#1F4A22] focus:ring-1 focus:ring-[#1F4A22] focus:bg-white transition-all"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">City</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Kathmandu"
                    className="w-full border border-gray-200 bg-gray-50/50 p-4 rounded-xl focus:outline-none focus:border-[#1F4A22] focus:ring-1 focus:ring-[#1F4A22] focus:bg-white transition-all"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Phone Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="+977"
                    className="w-full border border-gray-200 bg-gray-50/50 p-4 rounded-xl focus:outline-none focus:border-[#1F4A22] focus:ring-1 focus:ring-[#1F4A22] focus:bg-white transition-all"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Order Summary Integrated */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-[#1F4A22] mb-6 flex items-center justify-center md:justify-start gap-3 border-b border-gray-100 pb-4 text-center md:text-left">
              <span className="w-8 h-8 bg-green-100 text-green-700 rounded-full flex items-center justify-center text-sm">2</span>
              Review Order
            </h2>

            <div className="bg-[#F9FBEC] rounded-2xl p-6 border border-green-50 mb-8">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center justify-between py-3 border-b border-green-100/50 last:border-0 last:pb-0 first:pt-0">
                  <div className="flex items-center gap-4">
                    <span className="font-bold text-gray-900">{item.quantity}x</span>
                    <span className="font-medium text-gray-700">{item.name}</span>
                  </div>
                  <span className="font-bold text-[#1F4A22]">Rs. {(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}

              {cart.length === 0 && (
                <p className="text-sm text-gray-500 text-center py-2">Your cart is empty.</p>
              )}
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between items-center text-gray-600">
                <span>Subtotal</span>
                <span className="font-medium">Rs. {total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center text-gray-600">
                <span>Shipping</span>
                <span className="font-medium text-green-600">Free</span>
              </div>
            </div>

            <div className="flex justify-between items-center border-t border-gray-200 pt-6">
              <span className="text-xl font-bold text-gray-900">Total Due</span>
              <span className="text-3xl font-extrabold text-[#1F4A22]">Rs. {total.toFixed(2)}</span>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={cart.length === 0}
            className="w-full bg-[#1F4A22] text-[#F0F4C8] py-5 rounded-2xl font-extrabold text-xl hover:bg-[#153417] transition-all shadow-xl shadow-green-900/20 active:scale-[0.98] flex justify-center items-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Confirm & Pay
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </button>

          <div className="mt-6 text-center text-xs text-gray-400 font-medium flex items-center justify-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
            Guaranteed secure and encrypted checkout
          </div>
        </form>

      </div>
    </div>
  )
}
