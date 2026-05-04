import Link from 'next/link'
import ProductCard from './ProductCard'

const suggestions = {
  stress: [
    { id: '1', name: 'Ashwagandha Oil', price: 24.99, category: 'Oils', rating: 5 },
    { id: '2', name: 'Lavender Calming Serum', price: 19.99, category: 'Oils', rating: 4 },
  ],
  sleep: [
    { id: '3', name: 'Chamomile Night Cream', price: 29.99, category: 'Creams', rating: 5 },
    { id: '4', name: 'Valerian Root Oil', price: 22.99, category: 'Oils', rating: 4 },
  ],
  skin: [
    { id: '5', name: 'Neem Face Wash', price: 15.99, category: 'Cleansers', rating: 5 },
    { id: '6', name: 'Turmeric Brightening Soap', price: 8.99, category: 'Soaps', rating: 4 },
  ],
  hair: [
    { id: '7', name: 'Amla Hair Oil', price: 18.99, category: 'Oils', rating: 5 },
    { id: '8', name: 'Herbal Shampoo', price: 16.99, category: 'Shampoos', rating: 4 },
  ],
  digestion: [
    { id: '9', name: 'Ginger Digestive Tea', price: 12.99, category: 'Teas', rating: 5 },
    { id: '10', name: 'Fennel Seed Extract', price: 14.99, category: 'Extracts', rating: 4 },
  ],
  immunity: [
    { id: '11', name: 'Tulsi Immunity Drops', price: 21.99, category: 'Supplements', rating: 5 },
    { id: '12', name: 'Giloy Extract', price: 19.99, category: 'Extracts', rating: 4 },
  ],
}

export default function HerbalSuggestion({ problem, onReset }) {
  const problemNames = {
    stress: 'Stress & Anxiety',
    sleep: 'Sleep Issues',
    skin: 'Skin Problems',
    hair: 'Hair Care',
    digestion: 'Digestion',
    immunity: 'Immunity',
  }

  const recommendedProducts = suggestions[problem] || []

  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">
          Recommended for {problemNames[problem]}
        </h2>
        <p className="text-gray-600 mb-6">
          Based on your selection, here are our top herbal solutions
        </p>
        <button
          onClick={onReset}
          className="text-green-600 hover:underline"
        >
          ← Choose a different concern
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 reveal-stagger">
        {recommendedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="text-center">
        <Link
          href="/shop"
          className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition"
        >
          View All Products
        </Link>
      </div>
    </div>
  )
}
