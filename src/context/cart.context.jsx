import { createContext, useContext, useState } from 'react'
import { ProductsContext } from './products.context'

export const CartContext = createContext()

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([])
  const { products, setProducts } = useContext(ProductsContext)

  const addToCart = (product) => {
    const productInCart = cart.findIndex((inCart) => inCart.id === product.id)

    if (productInCart !== -1) {
      return
    }

    const newCart = [...cart, { ...product, inCart: true }]
    setCart(newCart)

    const updatedProducts = products.map((prod) =>
      prod.id === product.id ? { ...prod, inCart: true } : prod
    )
    setProducts(updatedProducts)
  }


  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id)
    setCart(newCart)

    const updatedProducts = products.map((prod) =>
      prod.id === id ? { ...prod, inCart: false } : prod
    )
    setProducts(updatedProducts)
  }

  const clearCart = () => {
    setCart([])
  }

  return (
    <CartContext.Provider
      value={{ cart, addToCart, clearCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  )
}
