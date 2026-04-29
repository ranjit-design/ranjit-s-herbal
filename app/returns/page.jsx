import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Returns & Refunds - Herbal Shop',
  description: 'Read our hassle-free returns and refunds policy. We guarantee satisfaction with every herbal product.',
};

export default function ReturnsPolicyPage() {
  return (
    <div className="bg-white min-h-screen py-16 md:py-24 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-[#F0F4C8] rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-[#E4F84B] rounded-full blur-3xl opacity-20 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="text-[#3A6B35] font-bold tracking-widest uppercase text-sm mb-2 block">Our Guarantee</span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#1F4A22] mb-6">
            Returns & Refunds
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">
            We stand behind the purity and quality of our herbal blends. If you are not entirely satisfied with your purchase, we're here to help.
          </p>
        </div>

        {/* Content Section */}
        <div className="bg-[#F9FBEC]/80 backdrop-blur-xl border border-[#F0F4C8] rounded-[32px] p-8 md:p-14 shadow-xl">
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Returns Box */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-md transition-shadow">
              <div className="absolute top-0 right-0 w-24 h-24 bg-green-50 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
              <h2 className="text-2xl font-bold text-[#1F4A22] mb-4">Returns</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                You have <span className="font-bold text-gray-900">30 calendar days</span> to return an item from the date you received it.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-600 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Item must be unused and in the same condition.
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-600 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Item must be in the original packaging.
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-600 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Needs receipt or proof of purchase.
                </li>
              </ul>
            </div>

            {/* Refunds Box */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-md transition-shadow">
              <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-50 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
              <h2 className="text-2xl font-bold text-[#1F4A22] mb-4">Refunds</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Once we receive your item, we will inspect it and notify you that we have received your returned item.
              </p>
              <p className="text-gray-600 leading-relaxed">
                If your return is approved, we will initiate a refund to your credit card (or original method of payment). You will receive the credit within a certain amount of days, depending on your card issuer's policies.
              </p>
            </div>
          </div>

          <div className="space-y-12">
            
            {/* Step-by-step */}
            <div>
              <h2 className="text-3xl font-bold text-[#1F4A22] mb-8 text-center">How to Return an Item</h2>
              <div className="grid md:grid-cols-3 gap-6 relative">
                {/* Connecting Line */}
                <div className="hidden md:block absolute top-8 left-[16.66%] right-[16.66%] h-0.5 bg-green-200 z-0"></div>
                
                {/* Step 1 */}
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-[#1F4A22] text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 shadow-lg ring-4 ring-white">1</div>
                  <h3 className="font-bold text-xl text-gray-900 mb-2">Contact Us</h3>
                  <p className="text-gray-600 text-sm">Email support@herbalshop.com with your order number.</p>
                </div>
                
                {/* Step 2 */}
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-[#1F4A22] text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 shadow-lg ring-4 ring-white">2</div>
                  <h3 className="font-bold text-xl text-gray-900 mb-2">Pack the Item</h3>
                  <p className="text-gray-600 text-sm">Securely pack the item in its original packaging.</p>
                </div>

                {/* Step 3 */}
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-[#1F4A22] text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 shadow-lg ring-4 ring-white">3</div>
                  <h3 className="font-bold text-xl text-gray-900 mb-2">Ship it Back</h3>
                  <p className="text-gray-600 text-sm">Send the package using our provided prepaid return label.</p>
                </div>
              </div>
            </div>

            {/* Exceptions */}
            <div className="bg-white p-8 rounded-2xl border-l-4 border-[#F2C83B]">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Exceptions / Non-returnable items</h3>
              <p className="text-gray-600">
                Certain types of items cannot be returned, like perishable goods (such as specific fresh herbal ingredients) or custom products (such as special orders or personalized blends). Please get in touch if you have questions or concerns about your specific item.
              </p>
            </div>

          </div>

          <div className="mt-16 text-center">
            <Link 
              href="/contact" 
              className="inline-block bg-white text-[#1F4A22] border-2 border-[#1F4A22] hover:bg-[#1F4A22] hover:text-white font-bold py-4 px-10 rounded-full transition-all duration-300"
            >
              Start a Return
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
