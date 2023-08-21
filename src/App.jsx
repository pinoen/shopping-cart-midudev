import Products from "./components/Products"
import list from './mocks/products.json'

function App() {
  return (
    <div>
      <Products list={list} />
    </div>
  )
}

export default App
