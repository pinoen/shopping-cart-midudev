import { useContext } from "react"
import { FilterContext } from "../contexts/FilterContext"

const useFilters = () => {
  const { filters } = useContext(FilterContext)

  const filterList = (products) => {
    return products.filter(product => product.price <= filters.maxPrice && (filters.category === 'All' || product.category === filters.category))
  }

  return { filterList }
}

export default useFilters