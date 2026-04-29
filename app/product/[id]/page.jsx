'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { useCart } from '@/hooks/useCart'

// Mock Data matching the FavoriteProducts
const productsData = {
  1: { name: 'Herbal Extract', price: '30.00', image: '/images/Herbal.png', desc: 'A potent, all-natural herbal extract designed to boost your daily wellness and vitality.' },
  2: { name: 'Hair Growth Oil', price: '20.00', image: '/images/HairOil.png', desc: 'Revitalize your roots with our deeply nourishing, cold-pressed botanical hair growth oil. Infused with nature’s finest herbs to promote thick, healthy, and shiny hair.' },
  3: { name: 'Natural Shampoo', price: '25.00', image: '/images/Shampoo.png', desc: 'A gentle, sulfate-free shampoo formulated with pure herbal extracts to cleanse and strengthen your hair.' },
  4: { name: 'Herbal Toothpaste', price: '15.00', image: '/images/ToothPaste.png', desc: 'Fluoride-free herbal toothpaste with natural mint and clove for strong teeth and fresh breath.' },
  5: { name: 'Complete Care Kit', price: '85.00', image: '/images/group.png', desc: 'The ultimate herbal care collection for your daily holistic wellness routine.' },
  6: { name: 'Pure Mint Extract', price: '18.00', image: '/images/pudina.jpg', desc: 'Refreshing and pure mint extract, perfect for digestive health and aromatherapy.' },
  7: { name: 'Botanical Leaf Blend', price: '22.00', image: '/images/leaf.jpg', desc: 'A calming and restorative blend of hand-picked botanical leaves.' },
  8: { name: 'Floral Essence', price: '28.00', image: '/images/flower.jpg', desc: 'A delicate floral essence to uplift your mood and refresh your skin.' },
}

const keyIngredients = [
  { name: 'Organic Rosemary', benefit: 'Stimulates scalp circulation', image: '/images/leaf.jpg' },
  { name: 'Peppermint Oil', benefit: 'Cools and refreshes roots', image: '/images/pudina.jpg' },
  { name: 'Lavender Extract', benefit: 'Soothes and balances oils', image: '/images/flower.jpg' },
]

const reviews = [
  { id: 1, author: 'Ranjit', rating: 5, date: 'October 12, 2026', text: 'Absolutely love this product! My hair feels incredibly soft and I can already see new growth around my hairline.' },
  { id: 2, author: 'Prabesh.', rating: 5, date: 'September 28, 2026', text: 'Smells amazing, like a spa day in a bottle. It isn\'t greasy and absorbs perfectly. Highly recommend.' },
  { id: 3, author: 'Aadish', rating: 4, date: 'August 15, 2026', text: 'Great results so far. I’ve been using it for about a month and my hair definitely feels stronger.' },
]

export default function ProductPage() {
  const { id } = useParams()
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const [showToast, setShowToast] = useState(false)

  const product = productsData[id] || productsData[2] // Fallback to product 2 if not found

  const handleAddToCart = () => {
    addToCart({ id: parseInt(id) || 2, ...product, quantity })
    setShowToast(true)
    setTimeout(() => setShowToast(false), 3000)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumbs */}
      <div className="bg-[#F9FBEC] py-4 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm font-medium text-gray-500">
          <Link href="/" className="hover:text-[#1F4A22] transition">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/shop" className="hover:text-[#1F4A22] transition">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{product.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">

        {/* Top Section: Image & Buy Box */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-24">

          {/* Image Gallery */}
          <div className="space-y-6">
            <div className="relative aspect-square bg-[#F9FBEC] rounded-3xl border border-green-50 overflow-hidden shadow-sm flex items-center justify-center p-8 group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent pointer-events-none"></div>
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain p-12 drop-shadow-2xl group-hover:scale-105 transition-transform duration-700"
                priority
              />
            </div>
            {/* Thumbnails (Simulated) */}
            <div className="flex justify-center md:justify-start gap-4">
              {[1, 2, 3].map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`relative w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-[#F9FBEC] border-2 overflow-hidden flex items-center justify-center p-2 transition-all ${activeImage === idx ? 'border-[#1F4A22] shadow-md' : 'border-transparent hover:border-green-200 opacity-70 hover:opacity-100'}`}
                >
                  <Image src={product.image} alt="thumbnail" fill className="object-contain p-3 drop-shadow-md" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 text-green-700 text-xs font-bold uppercase tracking-wider rounded-full mb-6 w-fit">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              In Stock
            </div>
            
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#0A1A0B] mb-4 leading-tight">
              {product.name}
            </h1>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
              <div className="flex text-yellow-400">
                {[1, 2, 3, 4, 5].map(star => (
                  <svg key={star} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
              <span className="text-sm font-medium text-gray-500 underline cursor-pointer hover:text-gray-800 transition">({reviews.length} Customer Reviews)</span>
            </div>

            <p className="text-3xl text-[#1F4A22] font-extrabold mb-8">
              Rs. {product.price}
            </p>

            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              {product.desc}
            </p>

            <div className="space-y-6">
              {/* Quantity */}
              <div>
                <span className="block text-sm font-bold text-gray-900 mb-3">Quantity</span>
                <div className="inline-flex items-center bg-white border-2 border-gray-100 rounded-full p-1 shadow-sm">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 flex items-center justify-center rounded-full text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition text-xl"
                  >
                    -
                  </button>
                  <span className="w-12 text-center text-xl font-bold text-gray-900">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-12 h-12 flex items-center justify-center rounded-full text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition text-xl"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 relative w-full">
                {showToast && (
                  <div className="absolute -top-12 left-0 right-0 mx-auto w-fit bg-green-100 text-green-800 font-bold px-4 py-2 rounded-full shadow-lg border border-green-200 animate-in fade-in slide-in-from-bottom-2">
                    Added to cart successfully!
                  </div>
                )}
                <button 
                  onClick={handleAddToCart}
                  className="flex-1 bg-[#1F4A22] text-[#F0F4C8] py-4 px-8 rounded-full font-bold text-lg hover:bg-[#153417] transition-all shadow-xl shadow-green-900/20 active:scale-[0.98] flex items-center justify-center gap-3"
                >
                  Add to Cart
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
                </button>
                <button className="w-full sm:w-auto bg-[#F9FBEC] border-2 border-[#1F4A22] text-[#1F4A22] py-4 px-8 rounded-full font-bold text-lg hover:bg-[#1F4A22] hover:text-white transition-all active:scale-[0.98]">
                  Buy it Now
                </button>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-gray-100">
              <div className="flex flex-col items-center text-center gap-2">
                <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-green-700">🌱</div>
                <span className="text-xs font-bold text-gray-600 uppercase">100% Organic</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-green-700">🐰</div>
                <span className="text-xs font-bold text-gray-600 uppercase">Cruelty Free</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-green-700">♻️</div>
                <span className="text-xs font-bold text-gray-600 uppercase">Eco Friendly</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-green-700">🧪</div>
                <span className="text-xs font-bold text-gray-600 uppercase">Lab Tested</span>
              </div>
            </div>
          </div>
        </div>

        {/* Ingredients Section */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-[#0A1A0B] mb-4">Hero Ingredients</h2>
            <p className="text-gray-500 font-medium">Mother Nature's finest elements inside every bottle.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {keyIngredients.map((ingredient, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
                <div className="w-full h-48 bg-[#F9FBEC] rounded-2xl mb-6 relative overflow-hidden">
                  <Image src={ingredient.image} alt={ingredient.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-80" />
                </div>
                <h3 className="text-2xl font-bold text-[#1F4A22] mb-2">{ingredient.name}</h3>
                <p className="text-gray-600 font-medium">{ingredient.benefit}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Reviews Section */}
        <section className="bg-[#F9FBEC] rounded-[32px] p-8 md:p-16">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 border-b border-green-200/50 pb-8 gap-6 text-center md:text-left">
            <div>
              <h2 className="text-4xl font-extrabold text-[#0A1A0B] mb-4">Customer Reviews</h2>
              <div className="flex flex-col md:flex-row items-center gap-4">
                <div className="text-5xl font-black text-[#1F4A22]">4.8</div>
                <div className="flex flex-col items-center md:items-start">
                  <div className="flex text-yellow-500 mb-1">
                    {[1, 2, 3, 4, 5].map(star => (
                      <svg key={star} className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    ))}
                  </div>
                  <span className="text-sm font-bold text-gray-600">Based on {reviews.length} reviews</span>
                </div>
              </div>
            </div>
            <button className="w-full md:w-auto bg-white text-[#1F4A22] border-2 border-[#1F4A22] py-3 px-8 rounded-full font-bold hover:bg-[#1F4A22] hover:text-white transition-colors">
              Write a Review
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map(review => (
              <div key={review.id} className="bg-white rounded-3xl p-8 shadow-sm border border-gray-50 flex flex-col h-full">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400' : 'text-gray-200'}`} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-1">{review.author}</h3>
                <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold mb-4">{review.date} • Verified Buyer</p>
                <p className="text-gray-600 leading-relaxed flex-grow italic">"{review.text}"</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  )
}
