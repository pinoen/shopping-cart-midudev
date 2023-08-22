/* eslint-disable react/prop-types */
import Filter from "./Filter"

const Header = ({ list, setFilters }) => {
  return (
    <header>
      <h1>React Shop 🛒️</h1>
      <Filter list={list} setFilters={setFilters} />
    </header>
  )
}

export default Header