/* eslint-disable react/prop-types */
import { useState } from "react"
import './Filter.css'

const Filter = ({ list, setFilters }) => {
  const [price, setPrice] = useState(0)
  const [category, setCategory] = useState('All')

  const categories = list.map(product => product.category)
  const uniqueCat = ["All"]

  for (let cat of categories) {
    if (!uniqueCat.includes(cat)) {
      uniqueCat.push(cat)
    }
  }

  const handlePrice = (e) => {
    setPrice(e.target.value)
    setFilters(curr => {
      return {
        ...curr,
        maxPrice: e.target.value
      }
    })
  }

  const handleCategory = (e) => {
    setCategory(e.target.value)
    setFilters(curr => {
      return {
        ...curr,
        category: e.target.value
      }
    })
  }

  return (
    <section className="filters">
      <div>
        <label htmlFor="price">Precio hasta: </label>
        <input type="range" min={0} max={2000} id="price" value={price} onChange={handlePrice} />
        <strong>${price}</strong>
      </div>

      <div>
        <label htmlFor="category">Categoria: </label>
        <select value={category} onChange={handleCategory}>
          {uniqueCat.map(product => (
            <option value={product} key={product}>{product.toUpperCase()}</option>
          ))}
        </select>
      </div>


    </section>
  )
}

export default Filter