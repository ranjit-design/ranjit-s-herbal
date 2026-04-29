import { NextResponse } from 'next/server'
import products from '@/data/products.json'

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const category = searchParams.get('category')
  const search = searchParams.get('search')

  let filteredProducts = products

  if (category) {
    filteredProducts = filteredProducts.filter(
      (p) => p.category.toLowerCase() === category.toLowerCase()
    )
  }

  if (search) {
    const searchTerms = search.toLowerCase().split(/\s+/).filter(Boolean);
    filteredProducts = filteredProducts.filter(
      (p) => {
        const name = p.name ? p.name.toLowerCase() : '';
        const desc = p.description ? p.description.toLowerCase() : '';
        const cat = p.category ? p.category.toLowerCase() : '';
        const combined = `${name} ${desc} ${cat}`;
        
        // Check if every word in the search query exists somewhere in the product info
        return searchTerms.every(term => combined.includes(term));
      }
    )
  }

  return NextResponse.json(filteredProducts)
}

export async function POST(request) {
  const body = await request.json()
  
  // In a real app, this would save to a database
  const newProduct = {
    id: Date.now().toString(),
    ...body,
    createdAt: new Date().toISOString(),
  }

  return NextResponse.json(newProduct, { status: 201 })
}
