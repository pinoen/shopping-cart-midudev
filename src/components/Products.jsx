/* eslint-disable react/prop-types */
import './Products.css'
import { AddToCartIcon } from './Icons'

const Products = ({ list }) => {
  return (
    <main className='products'>
      <ul>
        {list.products.map(product => (
          <li key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <div>
              <strong>{product.title}</strong><span> - ${product.price}</span>
            </div>
            <div>
              <button><AddToCartIcon /></button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default Products