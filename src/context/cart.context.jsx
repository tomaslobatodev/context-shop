import { createContext, useState } from 'react'
import PropTypes from 'prop-types';

export const CartContext = createContext()

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    const productInCart = cart.findIndex((inCart) => inCart.id === product.id)

    if (productInCart !== -1) {
      return
    }

    setCart([...cart, product])
  }

  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id)
    setCart(newCart)
  }

  const clearCart = (product) => {
    setCart([])
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}

CartProvider.propTypes = {
  children: PropTypes.node,
};
