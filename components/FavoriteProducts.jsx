'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const products = [
  {
    id: 1,
    name: 'Herbal Extract',
    price: '30.00',
    image: '/images/Herbal.png',
    categories: ['All products', 'Best Sellers']
  },
  {
    id: 2,
    name: 'Hair Growth Oil',
    price: '20.00',
    image: '/images/HairOil.png',
    categories: ['All products', 'New Arrivals']
  },
  {
    id: 3,
    name: 'Natural Shampoo',
    price: '25.00',
    image: '/images/Shampoo.png',
    categories: ['All products', 'Best Sellers']
  },
  {
    id: 4,
    name: 'Herbal Toothpaste',
    price: '15.00',
    image: '/images/ToothPaste.png',
    categories: ['All products', 'Sales']
  },
  {
    id: 5,
    name: 'Complete Care Kit',
    price: '85.00',
    image: '/images/group.png',
    categories: ['All products', 'New Arrivals']
  },
  {
    id: 6,
    name: 'Pure Mint Extract',
    price: '18.00',
    image: '/images/pudina.jpg',
    categories: ['All products', 'Sales']
  },
  {
    id: 7,
    name: 'Botanical Leaf Blend',
    price: '22.00',
    image: '/images/leaf.jpg',
    categories: ['All products', 'Best Sellers']
  },
  {
    id: 8,
    name: 'Floral Essence',
    price: '28.00',
    image: '/images/flower.jpg',
    categories: ['All products', 'New Arrivals']
  }
];

const tabs = ['All products', 'New Arrivals', 'Sales', 'Best Sellers'];

export default function FavoriteProducts() {
  const [activeTab, setActiveTab] = useState('All products');
  const [isFading, setIsFading] = useState(false);

  const handleTabChange = (tab) => {
    setIsFading(true);
    setTimeout(() => {
      setActiveTab(tab);
      setIsFading(false);
    }, 300);
  };

  const filteredProducts = products.filter(product =>
    product.categories.includes(activeTab)
  );

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-serif">
            Our Favorite Products
          </h2>
          <p className="text-gray-500 mb-8 text-sm md:text-base px-4">
            Take home one of our favorites - easy to use and hard not to love.
          </p>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-10 text-sm font-medium">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={`transition-all duration-300 pb-1 px-2 border-b-2 ${activeTab === tab
                    ? 'text-gray-900 border-gray-900'
                    : 'text-gray-400 border-transparent hover:text-gray-600'
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8 md:gap-y-16 transition-opacity duration-300 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
          {filteredProducts.map((product) => (
            <Link href={`/product/${product.id}`} key={product.id} className="relative group cursor-pointer pt-12 block">

              {/* Card Background */}
              <div className="absolute bottom-0 left-0 right-0 top-16 bg-[#F8F9F8] rounded-2xl z-0 transition-colors duration-300 group-hover:bg-[#F2F4F2]"></div>

              {/* Product Image */}
              <div className="relative z-10 h-48 w-full flex justify-center px-6 mt-4">
                <div className="relative w-44 h-42 md:w-52 md:h-50 rounded-full bg-green-50 border-2 border-green-100 overflow-hidden shadow-lg">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-4 drop-shadow-xl transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-6 text-center">
                <h3 className="text-gray-900 font-bold text-lg mb-1">{product.name}</h3>
                <p className="text-gray-500 text-sm mb-6">
                  Starts at <span className="font-semibold text-gray-900">Rs. {product.price}</span>
                </p>

                {/* Add to Cart Button (Now acts as View Product Link) */}
                <div className="md:opacity-0 md:group-hover:opacity-100 md:translate-y-4 md:group-hover:translate-y-0 transition-all duration-300">
                  <div className="w-full bg-[#1F4A22] text-white py-3 px-4 rounded-full font-semibold text-sm flex items-center justify-center gap-2 hover:bg-[#153417] transition-colors shadow-lg active:scale-95 transition-transform">
                    View Product
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>

            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
