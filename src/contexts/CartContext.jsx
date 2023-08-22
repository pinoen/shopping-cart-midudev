/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const CartContext = createContext()

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    // check if the product is already in the cart:
    const productInCartIndex = cart.findIndex(item => item.id === product.id)

    if (productInCartIndex >= 0) {
      const newCart = cart.slice()
      newCart[productInCartIndex].quantity += 1
      setCart(newCart)
    }

    // Product is not in the cart
    setCart(curr => [...curr, { ...product, quantity: 1 }])
  }

  const removeFromCart = (product) => {
    setCart(curr => curr.filter(item => item.id !== product.id))
  }

  const clearCart = () => setCart([])


  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}