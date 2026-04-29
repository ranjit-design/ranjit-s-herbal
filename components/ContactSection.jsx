'use client'

import React from 'react';
import Image from 'next/image';

export default function ContactSection() {
  return (
    <section className="relative w-full py-24 bg-white overflow-hidden">
      {/* Decorative background blobs to keep it consistent with the overall theme */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-[#FCF1A6]/20 to-transparent rounded-full blur-[80px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-gradient-to-tr from-green-200/30 to-transparent rounded-full blur-[80px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-stretch">

          {/* Left Side: Information & Image */}
          <div className="w-full md:w-5/12 rounded-t-[2.5rem] md:rounded-l-[2.5rem] md:rounded-tr-none p-10 md:p-14 relative overflow-hidden z-10 flex flex-col justify-center">

            {/* Background elements for left card */}
            <div className="absolute top-[-10%] left-[-10%] w-64 h-64 opacity-40 blur-[60px] rounded-full pointer-events-none"></div>

            <div className="relative z-10 flex flex-col items-center text-center">
              {/* Image with Float Animation */}
              <div className="relative w-48 h-48 md:w-60 md:h-60 mb-10 w-full flex justify-center items-center">
                <div className="absolute bottom-4 w-32 h-6 bg-green-900/10 rounded-full blur-md"></div>
                  <Image
                    src="/images/Shampoo.png"
                    alt="Herbal Shampoo"
                    width={200}
                    height={250}
                    style={{ width: "auto", height: "auto" }}
                    className="object-contain drop-shadow-xl animate-float z-10 relative"
                  />
              </div>

              <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A1A0B] mb-4 mt-8 tracking-tight">
                Let's Talk Wellness
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed max-w-sm">
                Have questions about our ingredients, routine, or finding the perfect product? Our dedicated herbal experts are here to help.
              </p>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="w-full md:w-7/12 bg-white p-10 md:p-16 z-20 md:my-8 border border-green-50 relative">

            {/* Subtle glow behind form */}
            <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-[#FCF1A6]/10 rounded-bl-full pointer-events-none blur-[40px]"></div>

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-extrabold text-[#0A1A0B] mb-2 items-center text-center">Send us a message</h3>
              <p className="text-gray-500 mb-8 font-medium items-center text-center">We'll get back to you within 24 hours.</p>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* First Name */}
                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-gray-700">First Name</label>
                    <input
                      type="text"
                      className="w-full border border-gray-200 bg-gray-50/50 rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#1F4A22] focus:ring-2 focus:ring-[#1F4A22]/20 transition-all font-medium text-gray-900 placeholder-gray-400"
                    />
                  </div>
                  {/* Last Name */}
                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-gray-700">Last Name</label>
                    <input
                      type="text"
                      className="w-full border border-gray-200 bg-gray-50/50 rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#1F4A22] focus:ring-2 focus:ring-[#1F4A22]/20 transition-all font-medium text-gray-900 placeholder-gray-400"
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-gray-700">Email Address</label>
                  <input
                    type="email"
                    className="w-full border border-gray-200 bg-gray-50/50 rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#1F4A22] focus:ring-2 focus:ring-[#1F4A22]/20 transition-all font-medium text-gray-900 placeholder-gray-400"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-gray-700">Message</label>
                  <textarea
                    className="w-full border border-gray-200 bg-gray-50/50 rounded-xl px-4 py-3.5 h-32 resize-none focus:outline-none focus:border-[#1F4A22] focus:ring-2 focus:ring-[#1F4A22]/20 transition-all font-medium text-gray-900 placeholder-gray-400"
                    placeholder="How can we help you today?"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#1F4A22] text-white font-extrabold py-4 rounded-xl transition-all duration-300 shadow-xl shadow-green-900/20 hover:shadow-green-900/40 hover:-translate-y-1 mt-4 text-sm uppercase tracking-widest hover:bg-[#153417]"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
