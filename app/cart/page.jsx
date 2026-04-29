'use client'

import { useCart } from '@/hooks/useCart'
import Link from 'next/link'
import Image from 'next/image'

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, total } = useCart()

  return (
    <div className="min-h-screen bg-[#F9FBEC] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#1F4A22] mb-4">Your Shopping Cart</h1>
          <p className="text-gray-500 font-medium">Review your herbal wellness selections before checkout.</p>
        </div>

        {cart.length === 0 ? (
          <div className="bg-white rounded-[32px] p-16 text-center shadow-lg shadow-green-900/5 max-w-3xl mx-auto border border-gray-100">
            <div className="w-32 h-32 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8">
              <svg className="w-16 h-16 text-[#3A6B35]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
            </div>
            <h2 className="text-2xl font-bold text-[#1F4A22] mb-4">Your cart is feeling a little light</h2>
            <p className="text-gray-500 mb-8 max-w-md mx-auto">It looks like you haven't added any natural remedies to your cart yet. Discover our best sellers to get started.</p>
            <Link 
              href="/shop" 
              className="inline-block bg-[#1F4A22] text-[#F0F4C8] py-4 px-10 rounded-full font-bold text-lg hover:bg-[#153417] transition-all shadow-xl shadow-green-900/20 active:scale-[0.98]"
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
            
            {/* Cart Items List */}
            <div className="space-y-6">
              <div className="bg-white rounded-[32px] p-8 shadow-xl shadow-green-900/5 border border-gray-100">
                <h2 className="text-2xl font-bold text-[#1F4A22] mb-6 text-center md:text-left">Cart Items</h2>
                <div className="space-y-6">
                  {cart.map((item) => (
                    <div key={item.id} className="flex flex-col items-center gap-6 pb-8 border-b border-gray-100 last:border-0 last:pb-0">
                      
                      {/* Product Image */}
                      <div className="relative w-48 h-48 sm:w-56 sm:h-56 shrink-0 group-hover:scale-105 transition-transform duration-500">
                        {item.image ? (
                          <Image 
                            src={item.image} 
                            alt={item.name} 
                            fill 
                            className="object-contain p-2 drop-shadow-xl"
                          />
                        ) : (
                          <div className="w-full h-full bg-gray-100 rounded-2xl" />
                        )}
                      </div>

                      {/* Product Details - Centered Below Image */}
                      <div className="flex flex-col items-center text-center w-full">
                        <Link href={`/product/${item.id}`} className="text-2xl font-bold text-gray-900 hover:text-[#1F4A22] transition-colors mb-2 line-clamp-2">
                          {item.name}
                        </Link>
                        
                        <div className="flex items-center gap-3 mb-6">
                          <p className="text-gray-400 font-medium line-through">Rs. {Number(item.price * 1.2).toFixed(2)}</p>
                          <p className="text-xl font-extrabold text-[#1F4A22]">Rs. {Number(item.price).toFixed(2)}</p>
                        </div>

                        {/* Controls & Total */}
                        <div className="flex flex-col items-center gap-6 w-full max-w-xs">
                          <div className="flex items-center justify-between w-full">
                            <span className="text-sm font-bold text-gray-400 uppercase">Quantity</span>
                            <div className="inline-flex items-center bg-[#F9FBEC] border border-gray-200 rounded-full p-1 shadow-inner">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="w-10 h-10 flex items-center justify-center rounded-full text-gray-600 hover:bg-white hover:shadow-sm transition-all text-xl font-medium"
                              >
                                -
                              </button>
                              <span className="w-12 text-center font-bold text-gray-900 text-lg">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="w-10 h-10 flex items-center justify-center rounded-full text-gray-600 hover:bg-white hover:shadow-sm transition-all text-xl font-medium"
                              >
                                +
                              </button>
                            </div>
                          </div>

                          <div className="flex items-center justify-between w-full border-t border-gray-100 pt-4">
                            <span className="text-sm font-bold text-gray-400 uppercase">Total</span>
                            <span className="text-2xl font-black text-[#1F4A22]">
                              Rs. {(item.price * item.quantity).toFixed(2)}
                            </span>
                          </div>

                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-sm text-red-400 hover:text-red-600 font-bold flex items-center gap-1 transition-colors mt-2"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                            Remove Item
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Order Summary Sidebar */}
            <div>
              <div className="bg-white rounded-[32px] p-8 shadow-xl shadow-green-900/5 border border-gray-100 sticky top-24">
                <h2 className="text-2xl font-bold text-[#1F4A22] mb-6 text-center md:text-left">Order Summary</h2>
                
                <div className="space-y-4 mb-6 text-gray-600">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Subtotal ({cart.length} items)</span>
                    <span className="font-bold text-gray-900">Rs. {total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium flex items-center gap-1">Shipping <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></span>
                    <span className="font-bold text-green-600">Free</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-sm">Estimated Taxes</span>
                    <span className="font-bold text-gray-900 text-sm">Calculated at checkout</span>
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-6 mb-8">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-lg font-bold text-gray-900">Total</span>
                    <span className="text-3xl font-extrabold text-[#1F4A22]">Rs. {total.toFixed(2)}</span>
                  </div>
                  <p className="text-xs text-right text-gray-400">USD inclusive of all taxes</p>
                </div>

                <Link
                  href="/checkout"
                  className="w-full bg-[#F2C83B] text-[#1F4A22] py-4 rounded-full font-extrabold text-lg flex items-center justify-center gap-2 hover:bg-[#FBE988] transition-all shadow-lg shadow-[#F2C83B]/20 active:scale-[0.98]"
                >
                  Proceed to Checkout
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>

                {/* Trust Indicators */}
                <div className="mt-8 flex items-center justify-center gap-4 text-gray-400">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  <div className="text-xs font-medium">
                    <p>Secure Checkout</p>
                    <p>256-bit SSL Encryption</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  )
}
