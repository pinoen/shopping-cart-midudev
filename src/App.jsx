import Header from "./components/Header"
import Products from "./components/Products"
import { products } from './mocks/products.json'
import useFilters from "./hooks/useFilters"
import { Footer } from "./components/Footer"

function App() {
  const { filterList } = useFilters()

  const filteredProducts = filterList(products)

  return (
    <>
      <Header list={filteredProducts} />
      <Products list={filteredProducts} />
      <Footer />
    </>
  )
}

export default App
