import { useContext } from 'react'
import { CartContext } from '../context/cart.context'
import '../styles/Cart.css'
import { Trash, Trash2, X } from 'lucide-react'

export default function Cart({ setCartOpen }) {
  const { cart, clearCart } = useContext(CartContext)

  console.log(cart)

  return (
    <aside className="cart">
      <div>
        <h1>Cart</h1>
        <button className="remove-btn" onClick={() => setCartOpen(false)}>
          <X />
        </button>
      </div>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <img src={item.image} alt={item.image} />
            <div>
              <h3>{item.title}</h3>
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
