import Header from "./components/Header"
import Products from "./components/Products"
import { products } from './mocks/products.json'
import useFilters from "./hooks/useFilters"
import { Footer } from "./components/Footer"
import Cart from "./components/Cart"
import { CartProvider } from "./contexts/CartContext"

function App() {
  const { filterList } = useFilters()

  const filteredProducts = filterList(products)

  return (
    <CartProvider>
      <Header list={filteredProducts} />
      <Cart />
      <Products list={filteredProducts} />
      <Footer />
    </CartProvider>
  )
}

export default App
