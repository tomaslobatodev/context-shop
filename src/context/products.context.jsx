import { createContext, useEffect, useState } from 'react'

export const ProductsContext = createContext()

export default function ProductsProvider({ children }) {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        fetch('https://fakestoreapi.com/products', { mode: "cors" })
          .then((res) => res.json())
          .then((json) => setProducts(json))
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    }
    fetchData()
  }, [])

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  )
}
