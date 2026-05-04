import ProductCard from '@/components/ProductCard'

export default function ShopPage() {
  const products = [
    {
      id: 1,
      name: 'Organic Toothpaste',
      price: 12.99,
      image: '/images/ToothPaste.png',
      category: 'Toothpaste',
      rating: 5,
    },
    {
      id: 2,
      name: 'Herbal Hair Oil',
      price: 24.99,
      image: '/images/HairOil.png',
      category: 'Oils',
      rating: 4,
    },
    {
      id: 3,
      name: 'Natural Shampoo',
      price: 18.99,
      image: '/images/Shampoo.png',
      category: 'Shampoos',
      rating: 5,
    },
    {
      id: 4,
      name: 'Vitality Herbal Drops',
      price: 29.99,
      image: '/images/Herbal.png',
      category: 'Supplements',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen py-8 px-4 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center md:text-left reveal-left">Shop All Products</h1>
      
      {/* Filters */}
      <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8 reveal-right">
        <select className="border rounded-lg px-4 py-2">
          <option>All Categories</option>
          <option>Oils</option>
          <option>Shampoos</option>
          <option>Soaps</option>
          <option>Toothpaste</option>
        </select>
        <select className="border rounded-lg px-4 py-2">
          <option>Sort by</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Newest</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => {
          const revealClasses = ['reveal-left', 'reveal-top', 'reveal-right', 'reveal-bottom'];
          const revealClass = revealClasses[index % 4];
          return (
            <div key={product.id} className={revealClass}>
              <ProductCard product={product} />
            </div>
          );
        })}
      </div>
    </div>
  )
}
