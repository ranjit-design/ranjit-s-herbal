import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#1F4A22] text-[#F0F4C8] py-14 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#1F4A22]/30 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#F2C83B]/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">

          {/* Brand & Newsletter */}
          <div className="md:col-span-12 lg:col-span-4 flex flex-col gap-6 text-center md:text-left items-center md:items-start reveal-corner-tl">
            <Link href="/" className="flex items-center gap-2 justify-center md:justify-start">
              <div className="w-10 h-10 bg-[#F2C83B] rounded-full flex items-center justify-center shadow-lg shadow-[#F2C83B]/20">
                <svg className="w-6 h-6 text-[#1F4A22]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-2xl font-extrabold text-[#F0F4C8] tracking-tight">Herbal Shop</span>
            </Link>
            <p className="text-[#F0F4C8]/70 text-sm leading-relaxed max-w-sm">
              Unlock your full potential with our all-natural blends. Elevate your energy, enhance mental clarity, and stay at your best always.
            </p>
            <div className="mt-2">
              <h4 className="text-sm font-semibold mb-3 text-[#F2C83B]">Subscribe to our newsletter</h4>
              <form className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/10 text-white placeholder:text-white/40 px-4 py-2.5 rounded-full flex-grow focus:outline-none focus:ring-2 focus:ring-[#F2C83B]/50 transition text-sm"
                />
                <button type="submit" className="bg-[#F2C83B] text-[#1F4A22] px-6 py-2.5 rounded-full font-bold hover:bg-[#FBE988] transition text-sm shadow-lg shadow-[#F2C83B]/20 whitespace-nowrap">
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 lg:col-span-2 lg:col-start-6 text-center md:text-left reveal-corner-tr">
            <h4 className="font-bold mb-6 text-lg text-[#F0F4C8] uppercase">Shop Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/shop" className="text-[#F0F4C8]/70 hover:text-[#F2C83B] transition block">All Products</Link></li>

              <li><Link href="/blog" className="text-[#F0F4C8]/70 hover:text-[#F2C83B] transition block">Blog & News</Link></li>
              <li><Link href="/about" className="text-[#F0F4C8]/70 hover:text-[#F2C83B] transition block">About Us</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className="md:col-span-4 lg:col-span-2 text-center md:text-left reveal-corner-bl">
            <h4 className="font-bold mb-6 text-lg text-[#F0F4C8] uppercase">Support</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/contact" className="text-[#F0F4C8]/70 hover:text-[#F2C83B] transition block">Contact Us</Link></li>
              <li><Link href="/shipping" className="text-[#F0F4C8]/70 hover:text-[#F2C83B] transition block">Shipping Policy</Link></li>
              <li><Link href="/returns" className="text-[#F0F4C8]/70 hover:text-[#F2C83B] transition block">Returns & Refunds</Link></li>
              <li><Link href="/faq" className="text-[#F0F4C8]/70 hover:text-[#F2C83B] transition block">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 lg:col-span-3 text-center md:text-left reveal-corner-br">
            <h4 className="font-bold mb-6 text-lg text-[#F0F4C8] uppercase">Get in Touch</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex flex-col items-center text-center gap-3 md:flex-row md:items-start md:text-left">
                <svg className="w-5 h-5 text-[#F2C83B] shrink-0 mt-0 md:mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-[#F0F4C8]/70">Dhapakhel-24, Lalitpur, Nepal</span>
              </li>
              <li className="flex flex-col items-center text-center gap-3 md:flex-row md:items-center md:text-left">
                <svg className="w-5 h-5 text-[#F2C83B] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:hello@herbalshop.com" className="text-[#F0F4C8]/70 hover:text-[#F2C83B] transition">hello@herbalshop.com</a>
              </li>
              <li className="flex flex-col items-center text-center gap-3 md:flex-row md:items-center md:text-left">
                <svg className="w-5 h-5 text-[#F2C83B] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-[#F0F4C8]/70">+977 9822651291</span>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-6 justify-center md:justify-start">
              {[
                { name: 'Instagram', href: 'https://www.instagram.com/ranjit_kanxa/', viewBox: '0 0 24 24', d: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z' },
                { name: 'Twitter', href: 'https://twitter.com/your-shop', viewBox: '0 0 24 24', d: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' },
                { name: 'Facebook', href: 'https://web.facebook.com/ranjit777777', viewBox: '0 0 24 24', d: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' }
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-[#F0F4C8] hover:bg-[#F2C83B] hover:text-[#1F4A22] transition-all duration-300"
                >
                  <svg className="w-4 h-4 fill-current" viewBox={social.viewBox}>
                    <path d={social.d} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-6 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#F0F4C8]/50">
          <p>&copy; {new Date().getFullYear()} Herbal Shop. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-[#F2C83B] transition">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#F2C83B] transition">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
