/* eslint-disable react/prop-types */
import { useContext } from "react"
import './Filter.css'
import { FilterContext } from "../contexts/FilterContext"

const Filter = ({ list }) => {
  const { filters, setFilters } = useContext(FilterContext)

  const categories = list.map(product => product.category)
  const uniqueCat = ["All"]

  for (let cat of categories) {
    if (!uniqueCat.includes(cat)) {
      uniqueCat.push(cat)
    }
  }

  const handlePrice = (e) => {
    setFilters(curr => {
      return {
        ...curr,
        maxPrice: e.target.value
      }
    })
  }

  const handleCategory = (e) => {
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
        <input type="range" min={0} max={2000} id="price" value={filters.maxPrice} onChange={handlePrice} />
        <strong>${filters.maxPrice}</strong>
      </div>

      <div>
        <label htmlFor="category">Categoria: </label>
        <select value={filters.category} onChange={handleCategory}>
          {uniqueCat.map(product => (
            <option value={product} key={product}>{product.toUpperCase()}</option>
          ))}
        </select>
      </div>


    </section>
  )
}

export default Filter