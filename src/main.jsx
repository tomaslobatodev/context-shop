import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'
import { FiltersProvider } from './context/filter.context.jsx'
import ProductsProvider from './context/products.context.jsx'
import CartProvider from './context/cart.context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <CartProvider>
    <FiltersProvider>
      <ProductsProvider>
        <App />
      </ProductsProvider>
    </FiltersProvider>
  </CartProvider>
)
