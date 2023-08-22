import { useState } from "react"
import Header from "./components/Header"
import Products from "./components/Products"
import list from './mocks/products.json'

function App() {
  const [filters, setFilters] = useState({
    maxPrice: 2000,
    category: 'All'
  })

  const filterList = (products) => {
    return products.filter(product => product.price <= filters.maxPrice && (filters.category === 'All' || product.category === filters.category))
  }

  const filteredProducts = filterList(list.products)

  return (
    <>
      <Header list={filteredProducts} setFilters={setFilters} />
      <Products list={filteredProducts} />
    </>
  )
}

export default App
