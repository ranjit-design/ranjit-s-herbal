import Link from 'next/link'
import Image from 'next/image'

export default function CategoryCard({ title, image, href }) {
  return (
    <Link href={href || `/shop?category=${title?.toLowerCase()}`}>
      <div className="group relative overflow-hidden rounded-xl aspect-square bg-gray-100 hover:shadow-lg transition">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-green-100 to-green-200">
            <span className="text-6xl">🌿</span>
          </div>
        )}
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        
        {/* Title */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-white text-xl font-bold">{title || 'Category'}</h3>
          <p className="text-white/80 text-sm mt-1">Shop Now →</p>
        </div>
      </div>
    </Link>
  )
}
