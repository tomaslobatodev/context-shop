import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../context/cart.context'

export default function ProductList({ products }) {
  const [filteredProducts, setFilteredProducts] = useState([])
  const { addToCart } = useContext(CartContext)

  useEffect(() => {
    setFilteredProducts(products)
  }, [products])

  return (
    <ul className="list">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} />
            <div>
              <h3>{product.title}</h3>
              <button onClick={() => addToCart(product)} disabled={product.inCart}>{product.inCart ? 'In Cart' : 'Add to cart'}</button>
            </div>
          </li>
        ))
      ) : (
        <h1>No products available</h1>
      )}
    </ul>
  )
}
