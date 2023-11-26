import { Github, ShoppingCart } from 'lucide-react'
import CartProvider from '../context/cart.context'
import ProductList from './ProductList'
import { useContext, useState } from 'react'
import { ProductsContext } from '../context/products.context'
import { FiltersContext } from '../context/filter.context'
import Cart from './Cart'

export default function Home() {
  const [cartOpen, setCartOpen] = useState(false)
  const { products } = useContext(ProductsContext)
  const { filter, setFilter } = useContext(FiltersContext)

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(filter.toLowerCase())
  )
  return (
    <main>
      <header action="">
        <input
          type="text"
          placeholder="Filter products"
          onChange={(ev) => {
            setFilter(ev.target.value)
          }}
          value={filter}
        />

        <div>
          <a href="https://github.com/tomaslobatodev">
            <Github />
          </a>
          <button onClick={() => setCartOpen(true)}>
            <ShoppingCart />
          </button>
        </div>
      </header>
      <CartProvider>
        <ProductList products={filteredProducts} />
        {cartOpen && <Cart setCartOpen={ setCartOpen } />}
      </CartProvider>
    </main>
  )
}
