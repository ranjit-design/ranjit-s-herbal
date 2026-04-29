import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Shipping Policy - Herbal Shop',
  description: 'Learn about our fast and secure shipping process for all your herbal wellness products.',
};

export default function ShippingPolicyPage() {
  return (
    <div className="bg-[#F9FBEC] min-h-screen py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#1F4A22] mb-6">
            Shipping Policy
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">
            We are committed to delivering the healing power of nature straight to your doorstep safely, securely, and as quickly as possible.
          </p>
        </div>

        {/* Content Section */}
        <div className="bg-white rounded-[32px] p-8 md:p-14 shadow-2xl shadow-green-900/5">
          <div className="space-y-12">
            
            {/* Section 1 */}
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="bg-green-50 p-4 rounded-full shrink-0">
                <svg className="w-8 h-8 text-[#3A6B35]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#1F4A22] mb-3">Processing Time</h2>
                <p className="text-gray-600 leading-relaxed">
                  Every order is carefully hand-packed with love. Please allow <span className="font-semibold text-gray-900">1 to 2 business days</span> for your order to be processed before it ships out. Orders placed after 12:00 PM (EST) on Fridays will be processed the following Monday.
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="bg-green-50 p-4 rounded-full shrink-0">
                <svg className="w-8 h-8 text-[#3A6B35]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#1F4A22] mb-3">Shipping Rates & Estimates</h2>
                <div className="overflow-x-auto mt-4">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b-2 border-gray-100">
                        <th className="py-3 px-4 font-bold text-gray-800">Shipping Method</th>
                        <th className="py-3 px-4 font-bold text-gray-800">Estimated Delivery</th>
                        <th className="py-3 px-4 font-bold text-gray-800 text-right">Price</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-600">
                      <tr className="border-b border-gray-50 hover:bg-gray-50/50 transition">
                        <td className="py-4 px-4 font-medium">Standard Shipping</td>
                        <td className="py-4 px-4">3-5 Business Days</td>
                        <td className="py-4 px-4 text-right">Rs. 50.00</td>
                      </tr>
                      <tr className="border-b border-gray-50 hover:bg-gray-50/50 transition">
                        <td className="py-4 px-4 font-medium">Express Shipping</td>
                        <td className="py-4 px-4">1-2 Business Days</td>
                        <td className="py-4 px-4 text-right">Rs. 150.00</td>
                      </tr>
                      <tr className="hover:bg-gray-50/50 transition">
                        <td className="py-4 px-4 font-medium text-[#1F4A22]">Free Shipping</td>
                        <td className="py-4 px-4">3-5 Business Days</td>
                        <td className="py-4 px-4 text-right font-bold text-green-600">Orders over Rs. 500</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="bg-green-50 p-4 rounded-full shrink-0">
                <svg className="w-8 h-8 text-[#3A6B35]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#1F4A22] mb-3">International Shipping</h2>
                <p className="text-gray-600 leading-relaxed">
                  We currently offer international shipping to select countries. Shipping charges for your order will be calculated and displayed at checkout. Please note that your order may be subject to import duties and taxes, which are incurred once a shipment reaches your destination country. Herbal Shop is not responsible for these charges.
                </p>
              </div>
            </div>

            {/* Section 4 */}
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="bg-green-50 p-4 rounded-full shrink-0">
                <svg className="w-8 h-8 text-[#3A6B35]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#1F4A22] mb-3">How do I check the status of my order?</h2>
                <p className="text-gray-600 leading-relaxed">
                  When your order has shipped, you will receive an email notification from us which will include a tracking number you can use to check its status. Please allow 48 hours for the tracking information to become available. If you haven't received your order within 7 days of receiving your shipping confirmation email, please contact us.
                </p>
              </div>
            </div>

          </div>

          <div className="mt-12 pt-8 border-t border-gray-100 text-center">
            <p className="text-gray-500 mb-6">Have more questions about shipping?</p>
            <Link 
              href="/contact" 
              className="inline-block bg-[#1F4A22] hover:bg-[#153417] text-[#F0F4C8] font-bold py-4 px-10 rounded-full transition-transform active:scale-95 shadow-lg shadow-green-900/20"
            >
              Contact Support
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
