import { useContext } from 'react'
import { CartContext } from '../context/cart.context'
import '../styles/Cart.css'
import { Trash2, X } from 'lucide-react'

export default function Cart({ setCartOpen }) {
  const { cart, clearCart } = useContext(CartContext)

  return (
    <aside className="cart">
      <div>
        <h1>Your cart</h1>
        <button className="remove-btn" onClick={() => setCartOpen(false)}>
          <X />
        </button>
      </div>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <img src={item.image} alt={item.image} />
            <div>
              <h4>{item.title}</h4>
            </div>
            <button className="remove-btn">
              <Trash2 />
            </button>
          </li>
        ))}
      </ul>
      {cart.length > 0 ? <button className="checkout" onClick={clearCart}>Checkout</button> : <h2>No items in your cart</h2>}
    </aside>
  )
}