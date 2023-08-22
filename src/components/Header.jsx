/* eslint-disable react/prop-types */
import Filter from "./Filter"

const Header = ({ list }) => {
  return (
    <header>
      <h1>React Shop 🛒️</h1>
      <Filter list={list} />
    </header>
  )
}

export default Header