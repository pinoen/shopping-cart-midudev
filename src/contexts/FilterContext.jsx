/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const FilterContext = createContext()

export function FilterProvider({ children }) {
  const [filters, setFilters] = useState({
    maxPrice: 1500,
    category: 'All'
  })

  return (
    <FilterContext.Provider value={{ filters, setFilters }}>
      {children}
    </FilterContext.Provider>
  )
}
