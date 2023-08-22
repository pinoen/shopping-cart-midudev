/* eslint-disable no-unused-vars */
import { useId } from "react"
import { ClearCartIcon, RemoveFromCartIcon, CartIcon } from "./Icons"
import './Cart.css'
import useCart from "../hooks/useCart"
import CartItem from "./CartItem"

const Cart = () => {
  const { cart, clearCart, addToCart } = useCart()
  const cartCheckboxId = useId()

  return (
    <>
      <label htmlFor={cartCheckboxId} className="cart-button"><CartIcon /></label>
      <input id={cartCheckboxId} type="checkbox" hidden />

      <aside className="cart">
        <ul>
          {cart.map(item => (
            <CartItem key={item.id} item={item} addItem={() => addToCart(item)} />
          ))}
        </ul>

        <button onClick={clearCart}><ClearCartIcon /></button>
      </aside>
    </>
  )
}

export default Cart