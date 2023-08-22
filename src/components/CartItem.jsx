/* eslint-disable react/prop-types */
const CartItem = ({ item, addItem }) => {
  return (
    <li>
      <img src={item.thumbnail} alt={item.title} />
      <div>
        <strong>{item.title}</strong> $ {item.price}
      </div>

      <footer>
        <small>
          Qty: {item.quantity}
        </small>
        <button onClick={addItem}>+</button>
      </footer>
    </li>
  )
}

export default CartItem