const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '/api'

export async function fetchProducts(params = {}) {
  const queryString = new URLSearchParams(params).toString()
  const url = `${API_BASE_URL}/products${queryString ? `?${queryString}` : ''}`
  
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error('Failed to fetch products')
  }
  return response.json()
}

export async function fetchProductById(id) {
  const response = await fetch(`${API_BASE_URL}/products/${id}`)
  if (!response.ok) {
    throw new Error('Failed to fetch product')
  }
  return response.json()
}

export async function createProduct(productData) {
  const response = await fetch(`${API_BASE_URL}/products`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(productData),
  })
  
  if (!response.ok) {
    throw new Error('Failed to create product')
  }
  return response.json()
}

export async function submitOrder(orderData) {
  const response = await fetch(`${API_BASE_URL}/orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(orderData),
  })
  
  if (!response.ok) {
    throw new Error('Failed to submit order')
  }
  return response.json()
}
