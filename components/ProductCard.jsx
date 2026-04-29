import Link from 'next/link'
import Image from 'next/image'

export default function ProductCard({ product }) {
  const { id, name, price, image, category, rating } = product || {}

  return (
    <div className="border rounded-xl overflow-hidden hover:shadow-lg transition group">
      <Link href={`/product/${id || '#'}`}>
        <div className="relative aspect-[4/3] bg-gray-100">
          {image ? (
              <Image
                src={image}
                alt={name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={true}
                className="object-contain p-4 group-hover:scale-105 transition"
              />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              No Image
            </div>
          )}
        </div>
      </Link>

      <div className="p-4 text-center md:text-left">
        <span className="text-xs text-green-600 font-semibold uppercase">
          {category || 'Category'}
        </span>
        <Link href={`/product/${id || '#'}`}>
          <h3 className="font-semibold text-lg mt-1 hover:text-green-600 transition">
            {name || 'Product Name'}
          </h3>
        </Link>

        <div className="flex items-center gap-1 mt-1 justify-center md:justify-start">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-4 h-4 ${i < (rating || 0) ? 'text-yellow-400' : 'text-gray-300'
                }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>

        <div className="flex flex-col items-center gap-2 mt-3 md:flex-row md:justify-between md:items-center">
          <span className="text-xl font-bold text-[#1F4A22]">
            Rs. {price || '0.00'}
          </span>
          <Link href={`/product/${id || '#'}`} className="bg-[#1F4A22] text-white px-4 py-2 rounded-lg hover:bg-[#153417] transition text-sm font-semibold shadow-md active:scale-95 flex items-center gap-2">
            View Product
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </div>
    </div>
  )
}
