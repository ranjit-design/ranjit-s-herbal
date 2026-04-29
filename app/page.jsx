import Image from 'next/image'
import Link from 'next/link'
import FavoriteProducts from '@/components/FavoriteProducts'
import TrustBadges from '@/components/TrustBadges'
import { blogPosts } from '@/data/blogData'

export default function Home() {
  const latestPosts = blogPosts.slice(0, 3)

  return (
    <div className="min-h-screen">
      {/* ... Hero Section ... */}
      <section className="relative bg-[#FDFCF4] overflow-hidden">
        {/* Glow and mix of green-yellow on the right */}
        <div className="absolute top-0 right-0 w-[60%] lg:w-[50%] h-full bg-gradient-to-l from-[#FCF1A6] to-transparent opacity-90"></div>
        {/* Decorative curved ellipse on the right */}
        <div className="absolute -top-[20%] -right-[15%] w-[800px] h-[800px] rounded-full bg-gradient-to-bl from-[#FBE988] to-[#FFFCD4] opacity-80 blur-[80px] pointer-events-none"></div>
        <div className="absolute -bottom-[20%] right-[10%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#F4E88F] to-[#FCF1A6] opacity-50 blur-[60px] pointer-events-none"></div>

        {/* Floating leaf decorations */}

        <div className="absolute bottom-20 right-20 w-30 h-30 opacity-60 rotate-45">
          <Image src="/images/pudina.jpg" alt="" fill sizes="120px" className="object-contain rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="text-gray-900 z-10 antialiased text-center md:text-left">
              <h1 className="text-3xl md:text-5xl lg:text-5xl font-semibold leading-tight md:leading-snug mb-2 text-[#0A1A0B]">
                Feel the <span className="font-extrabold tracking-tight">Natural Power</span>
              </h1>
              <h2 className="text-2xl md:text-5xl font-extrabold text-[#0A1A0B] mb-6 tracking-tight leading-tight">
                Elevate Your Energy<br className="hidden md:block" />and Focus
              </h2>
              <p className="text-base text-gray-800 mb-8 max-w-md font-medium leading-relaxed">
                Unlock your full potential with a natural blend designed to elevate energy,
                enhance mental clarity, and keep you at your best — anytime, anywhere.
              </p>
              <div className="flex justify-center md:justify-start mb-8">
                <Link
                  href="/shop"
                  className="inline-block bg-[#1F4A22] text-white px-10 py-3.5 rounded-full font-bold hover:bg-[#153417] transition shadow-xl text-sm tracking-wide"
                >
                  Buy Now
                </Link>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-2 justify-center md:justify-start">
                <div className="flex text-[#F2C83B]">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-gray-900 font-bold text-sm ml-1">47,281</span>
                <span className="text-gray-700 text-sm font-medium">Verified 5-star reviews</span>
              </div>
            </div>

            {/* Right Image - Products on platform */}
            <div className="relative flex justify-center items-center">
              {/* Platform/circle base */}
              <div className="absolute bottom-0 w-80 h-20 bg-green-700/30 rounded-full blur-xl"></div>
              <div className="relative z-10">
                <Image
                  src="/images/Herbal.png"
                  alt="Herbal Dropper Bottles"
                  width={500}
                  height={450}
                  className="w-80 md:w-96 h-auto object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustBadges />

      {/* Product Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-white to-green-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Our Products Benefits</h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Unlock your full potential with a natural blend designed to elevate mood, enhance mental clarity,
            and keep you at your best — anytime, anywhere.
          </p>

          <div className="relative max-w-5xl mx-auto">
            {/* Center Product Image - Desktop */}
            <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="relative">
                {/* Platform base */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-48 h-12 bg-green-600/20 rounded-full blur-lg"></div>
                <Image
                  src="/images/HairOil.png"
                  alt="Hair Oil Product"
                  width={220}
                  height={300}
                  className="w-48 h-auto object-contain drop-shadow-2xl"
                />
              </div>
            </div>

            {/* Mobile Product Image */}
            <div className="md:hidden flex justify-center mb-8">
              <Image
                src="/images/HairOil.png"
                alt="Hair Oil Product"
                width={180}
                height={250}
                className="w-40 h-auto object-contain drop-shadow-xl"
              />
            </div>

            {/* Benefits Grid - 4 corners around product */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 md:gap-y-24 gap-x-48">
              {/* Top Left - Balancing (positioned left of product) */}
              <div className="flex flex-col items-center text-center gap-4 md:flex-row-reverse md:items-start md:text-right md:pr-24">
                <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center shrink-0 border border-green-100">
                  <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                </div>
                <div className="pt-1">
                  <h3 className="font-bold text-lg text-gray-900">Balancing</h3>
                  <p className="text-gray-500 text-sm mt-1">Advanced solution to bring back a sense of relaxation and clarity</p>
                </div>
              </div>

              {/* Top Right - Fast-Acting (positioned right of product) */}
              <div className="flex flex-col items-center text-center gap-4 md:flex-row md:items-start md:pl-24 md:text-left">
                <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center shrink-0 border border-green-100">
                  <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="pt-1">
                  <h3 className="font-bold text-lg text-gray-900">Fast-Acting Results</h3>
                  <p className="text-gray-500 text-sm mt-1">Feel the benefits straight away, compared to powders or capsules</p>
                </div>
              </div>

              {/* Bottom Left - All-Natural (positioned left of product) */}
              <div className="flex flex-col items-center text-center gap-4 md:flex-row-reverse md:items-start md:text-right md:pr-24">
                <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center shrink-0 border border-green-100">
                  <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <div className="pt-1">
                  <h3 className="font-bold text-lg text-gray-900">All-Natural Formula</h3>
                  <p className="text-gray-500 text-sm mt-1">Made with the purest, strongest ingredients</p>
                </div>
              </div>

              {/* Bottom Right - Boost Energy (positioned right of product) */}
              <div className="flex flex-col items-center text-center gap-4 md:flex-row md:items-start md:pl-24 md:text-left">
                <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center shrink-0 border border-green-100">
                  <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div className="pt-1">
                  <h3 className="font-bold text-lg text-gray-900">Boost Energy</h3>
                  <p className="text-gray-500 text-sm mt-1">Unlock your full potential with a natural blend designed to elevate mood</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/shop"
              className="inline-block bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition"
            >
              Buy Now
            </Link>
          </div>
        </div>
      </section>

      {/* Pure and Simple Ingredients */}
      <section className="py-20 bg-gradient-to-b from-green-50/50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-3">Pure and Simple Ingredients</h2>
          <p className="text-center text-gray-500 mb-4 text-sm">
            Easy and effective ingredients to understand. 100% clean label.
          </p>
          <p className="text-center text-gray-400 text-xs mb-16 max-w-lg mx-auto">
            Secure most cutting-edge ingredients.
          </p>

          {/* Numbered timeline connector */}
          <div className="relative">
            <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gray-200 max-w-4xl mx-auto"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { num: '01', name: 'Filtered Water', img: '/images/flower.jpg' },
                { num: '02', name: 'Standardized Mitragyn Speciosa Extract', img: '/images/leaf.jpg' },
                { num: '03', name: 'Citric Acid', img: '/images/pudina.jpg' },
              ].map((item) => (
                <div key={item.num} className="relative">
                  {/* Number badge */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                    <span className="bg-green-600 text-white text-xs font-bold w-8 h-8 rounded-full flex items-center justify-center border-4 border-green-50">
                      {item.num}
                    </span>
                  </div>

                  <div className="bg-white rounded-2xl p-5 pt-8 shadow-sm border border-gray-100 text-center mt-4">
                    <div className="relative h-36 w-full mb-4 rounded-xl overflow-hidden bg-gray-50">
                      <Image
                        src={item.img}
                        alt={item.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                    <h3 className="font-medium text-gray-800 text-sm">{item.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/shop"
              className="inline-block bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition text-sm"
            >
              Pure and simple ingredients
            </Link>
          </div>
        </div>
      </section>

      <FavoriteProducts />

      {/* Latest Blog Section */}
      <section className="py-24 bg-[#FDFDF8]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 gap-4 text-center md:text-left">
            <div className="max-w-2xl">
              <span className="text-[#1F4A22] font-bold text-sm uppercase tracking-widest mb-3 block">Wellness Guide</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">Latest From Our Herbal Blog</h2>
            </div>
            <Link 
              href="/blog" 
              className="group flex items-center gap-2 text-[#1F4A22] font-bold transition-all hover:gap-3"
            >
              View All Posts
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`} className="group">
                <article className="bg-white rounded-2xl overflow-hidden border border-gray-50 shadow-sm group-hover:shadow-md transition-all duration-300 flex flex-col h-full">
                  <div className="relative aspect-video overflow-hidden bg-gray-50">
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
                  </div>
                  <div className="p-4 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 mb-2 text-[10px] text-gray-400 font-medium">
                      <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4 group-hover:text-[#1F4A22] transition-colors line-clamp-2 leading-tight">
                      {post.title}
                    </h3>
                    <span className="mt-auto text-[#1F4A22] font-bold text-xs flex items-center gap-1">
                      Read Article
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}


