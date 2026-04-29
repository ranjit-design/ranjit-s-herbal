'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { blogPosts } from '@/data/blogData'

const categories = [
  'All Posts',
  'Health Benefits',
  'Recipes',
  'Education',
  'Seasonal',
  'Tutorials'
]

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All Posts')

  const filteredPosts = activeCategory === 'All Posts'
    ? blogPosts
    : blogPosts.filter(post => post.category === activeCategory)

  return (
    <div className="min-h-screen bg-[#FDFDF8]">
      {/* Header Section */}
      <header className="pt-16 pb-12 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-[#111827] mb-4">
          Herbal Wellness Blog
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Explore expert tips, recipes, and wellness guides to enhance your herbal journey
        </p>
      </header>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border-2 ${
                activeCategory === category
                  ? 'bg-[#A8D1B7] border-[#A8D1B7] text-[#1F4A22] shadow-md transform scale-105'
                  : 'bg-white border-[#FDE68A] text-gray-700 hover:border-[#FBBF24] hover:shadow-sm'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Posts Grid */}
      <main className="max-w-7xl mx-auto px-4 pb-20">
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-50 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full"
              >
                {/* Image Container */}
                <Link href={`/blog/${post.id}`} className="block relative aspect-video overflow-hidden bg-gray-50">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-2 left-2">
                    <span className="bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded-full text-[10px] font-bold text-[#1F4A22] shadow-sm uppercase tracking-wider">
                      {post.category}
                    </span>
                  </div>
                </Link>

                {/* Content */}
                <div className="p-4 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 mb-2 text-[10px] font-medium text-gray-400">
                    <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <Link href={`/blog/${post.id}`}>
                    <h2 className="text-lg font-bold text-gray-900 mb-4 group-hover:text-[#1F4A22] transition-colors leading-snug line-clamp-2">
                      {post.title}
                    </h2>
                  </Link>

                  <div className="mt-auto pt-3 border-t border-gray-50 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                       <div className="w-6 h-6 rounded-full bg-[#FDE68A] flex items-center justify-center text-[10px] font-bold text-[#1F4A22]">
                          {post.author.charAt(0)}
                       </div>
                       <span className="text-xs font-semibold text-gray-600">{post.author}</span>
                    </div>
                    <Link
                      href={`/blog/${post.id}`}
                      className="text-[#1F4A22] font-bold text-xs flex items-center gap-1 group/link"
                    >
                      Read
                      <svg className="w-3 h-3 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-gray-200">
            <div className="text-6xl mb-4">🌿</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">No posts found</h3>
            <p className="text-gray-500">Try selecting a different category or check back later.</p>
            <button 
              onClick={() => setActiveCategory('All Posts')}
              className="mt-6 text-[#1F4A22] font-bold hover:underline"
            >
              Show all posts
            </button>
          </div>
        )}
      </main>
    </div>
  )
}
