import React from 'react'
import { Link } from 'react-router-dom'
import './cartItem.css'

const CartItem = ({ item }) => {
  return (
    <div className="cartitem">
      <div className="cartitem__image">
        <img src={item.imageUrl} alt={item.name} />
      </div>
      <Link to={`/product/${item.product}`} className="cartitem__name">
        <p>{item.name}</p>
      </Link>
      <p className="">${item.price}</p>
      <select value={item.qty} onChange={() => console.log("Somethiing")} className="cartitem__select">
        {[...Array(item.countInStock).keys()].map(x => (<option key={x + 1} value={x + 1}>{x + 1}</option>))}

      </select>

      <button className="cartitem__deleteBtn">
        <i class="fas fa-trash-alt"></i>
      </button>
    </div>
  )
}

export default CartItem
