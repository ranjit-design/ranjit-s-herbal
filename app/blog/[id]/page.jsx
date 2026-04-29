'use client'

import { use } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { blogPosts } from '@/data/blogData'
import { notFound } from 'next/navigation'

export default function BlogPostDetail({ params }) {
  const { id } = use(params)
  const post = blogPosts.find((p) => p.id === parseInt(id))

  if (!post) {
    return notFound()
  }

  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 3)

  return (
    <article className="min-h-screen bg-[#FDFDF8] pt-12 pb-24">
      {/* Hero Header */}
      <div className="max-w-5xl mx-auto px-4 mb-12">
        <div className="relative h-[40vh] md:h-[50vh] w-full overflow-hidden rounded-[2.5rem] shadow-2xl">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full p-8 md:p-12">
            <span className="inline-block bg-[#FDE68A] text-[#1F4A22] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight drop-shadow-lg">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-white/90 text-sm font-medium">
              <span className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-[#A8D1B7] flex items-center justify-center text-[10px] font-bold text-[#1F4A22]">
                  {post.author.charAt(0)}
                </div>
                {post.author}
              </span>
              <span>•</span>
              <time>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-8">
          <div className="bg-white p-8 md:p-16 rounded-[2.5rem] shadow-sm border border-green-50/50">
            <div 
              className="blog-content text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            <div className="mt-16 pt-8 border-t border-gray-100 flex flex-wrap gap-4 items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Spread the word:</span>
                <div className="flex gap-2">
                  {['Twitter', 'Facebook', 'Pinterest'].map(platform => (
                    <button key={platform} className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-[#1F4A22] hover:text-white transition-all transform hover:-translate-y-1">
                      <span className="sr-only">{platform}</span>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.411 2.865 8.139 6.839 9.465.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.341-3.369-1.341-.454-1.152-1.11-1.459-1.11-1.459-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.136 22 16.411 22 12c0-5.523-4.477-10-10-10z" />
                      </svg>
                    </button>
                  ))}
                </div>
              </div>
              <Link 
                href="/blog"
                className="text-[#1F4A22] font-bold text-sm flex items-center gap-2 group/back"
              >
                <svg className="w-4 h-4 transition-transform group-hover/back:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to all posts
              </Link>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-4 space-y-10">
          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <section className="bg-white p-8 rounded-[2rem] shadow-sm border border-green-50/50">
              <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-[#A8D1B7] rounded-full"></span>
                More for you
              </h3>
              <div className="space-y-6">
                {relatedPosts.map(rp => (
                  <Link key={rp.id} href={`/blog/${rp.id}`} className="group flex gap-4 items-center">
                    <div className="relative w-20 h-20 shrink-0 rounded-2xl overflow-hidden">
                      <Image src={rp.image} alt={rp.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 group-hover:text-[#1F4A22] transition-colors line-clamp-2 text-sm leading-snug mb-1">
                        {rp.title}
                      </h4>
                      <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">{rp.category}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Newsletter */}
          <section className="bg-gradient-to-br from-[#1F4A22] to-[#153417] p-8 rounded-[2rem] shadow-xl text-white relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
             <div className="relative z-10 text-center">
               <div className="w-12 h-12 bg-[#FDE68A] rounded-2xl flex items-center justify-center mx-auto mb-4 rotate-12">
                 <svg className="w-6 h-6 text-[#1F4A22]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                 </svg>
               </div>
               <h3 className="text-xl font-bold mb-2">Weekly Herbal Tips</h3>
               <p className="text-white/70 text-xs mb-6 px-4">Join 5,000+ herbalists receiving our latest guides.</p>
               <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                 <input 
                   type="email" 
                   placeholder="Your email address" 
                   className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#FDE68A] transition-all placeholder:text-white/30"
                 />
                 <button className="w-full bg-[#FDE68A] text-[#1F4A22] font-extrabold py-3 rounded-xl hover:bg-white transition-colors shadow-lg active:scale-95 transform">
                   Join Now
                 </button>
               </form>
             </div>
          </section>
        </aside>
      </div>

      <style jsx global>{`
        .blog-content h3 {
          font-size: 1.75rem;
          font-weight: 800;
          color: #111827;
          margin-top: 3rem;
          margin-bottom: 1.25rem;
          letter-spacing: -0.025em;
        }
        .blog-content p {
          margin-bottom: 1.5rem;
          font-size: 1.125rem;
          line-height: 1.8;
          color: #374151;
        }
        .blog-content ul {
          list-style-type: none;
          padding: 0;
          margin-bottom: 2rem;
          background: #F9FAFB;
          padding: 2rem;
          border-radius: 1.5rem;
          border-left: 4px solid #A8D1B7;
        }
        .blog-content li {
          margin-bottom: 0.75rem;
          padding-left: 1.5rem;
          position: relative;
          font-weight: 500;
        }
        .blog-content li::before {
          content: "🌿";
          position: absolute;
          left: 0;
          font-size: 0.875rem;
        }
        .blog-content img {
          transition: transform 0.5s ease;
        }
        .blog-content img:hover {
          transform: scale(1.02);
        }
      `}</style>
    </article>
  )
}
