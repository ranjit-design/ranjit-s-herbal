import './globals.css'
import { Outfit, Playfair_Display, Dancing_Script } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { CartProvider } from '@/context/CartContext'
import { AuthProvider } from '@/context/AuthContext'
import PageWrapper from '@/components/PageWrapper'

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })
const dancingScript = Dancing_Script({ subsets: ['latin'], variable: '--font-dancing' })

export const metadata = {
  title: {
    default: 'Herbal Shop - Natural Wellness Products',
    template: '%s | Herbal Shop'
  },
  description: 'Discover premium, all-natural herbal products designed to elevate your energy, enhance mental clarity, and promote holistic wellness.',
  keywords: ['herbal products', 'natural wellness', 'organic oils', 'ayurvedic skincare', 'herbal supplements'],
  authors: [{ name: 'Herbal Shop Team' }],
  openGraph: {
    title: 'Herbal Shop - Natural Wellness Products',
    description: 'Discover premium, all-natural herbal products for holistic wellness.',
    url: 'https://herbal-shop.vercel.app',
    siteName: 'Herbal Shop',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${playfair.variable} ${dancingScript.variable} font-sans`}>
        <AuthProvider>
          <CartProvider>
            <Navbar />
            <PageWrapper>
              <main>{children}</main>
            </PageWrapper>
            <Footer />
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
