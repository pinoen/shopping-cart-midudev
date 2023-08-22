import { useContext } from "react"
import { CartContext } from "../contexts/CartContext"

const useCart = () => {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a cart provider")
  }

  return context
}

export default useCart