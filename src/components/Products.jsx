/* eslint-disable react/prop-types */
import './Products.css'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons'
import useCart from '../hooks/useCart'

const Products = ({ list }) => {
  const { addToCart, cart, removeFromCart } = useCart()

  const checkProductInCart = (product) => {
    return cart.some(item => item.id === product.id)
  }

  return (
    <main className='products'>
      <ul>
        {list.slice(0, 10).map(product => {

          const isProductInCart = checkProductInCart(product)

          return (
            <li key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <div>
                <strong>{product.title}</strong><span> - ${product.price}</span>
              </div>
              <div>
                <button style={{ backgroundColor: isProductInCart ? 'red' : 'steelblue' }} onClick={isProductInCart ? () => removeFromCart(product) : () => addToCart(product)}>{isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}</button>
              </div>
            </li>
          )
        })}
      </ul>
    </main>
  )
}

export default Products