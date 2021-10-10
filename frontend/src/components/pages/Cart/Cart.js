import React from 'react'
import './cart.css'
import CartItem from './CartItem/CartItem'

function Cart() {
  return (
    <div className="cartscreen">
      <div className="cartscreen__left">
        <h2>Shopping Cart</h2>
        <CartItem />
      </div>
      <div className="cartscreen__right">
        <div className="cartscreen__info">
          <p>sabstotal (0) items</p>
          <p>$3525</p>
        </div>
        <div><button>Proceed to check</button></div>
      </div>
    </div>
  )
}

export default Cart
