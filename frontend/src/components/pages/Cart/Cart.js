import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './cart.css'
import CartItem from './CartItem/CartItem'


function Cart() {
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart)
  const { cartItems } = cart
  return (
    <div className="cartscreen">
      <div className="cartscreen__left">
        <h2>Shopping Cart</h2>

        {
          cartItems.length === 0 ? (<div>
            your cart is empty <Link to="/">go back</Link>
          </div>) : cartItems.map(item => (<CartItem />))
        }
        <CartItem />
      </div>
      <div className="cartscreen__right">
        <div className="cartscreen__info">
          <p>substotal (0) items</p>
          <p>$3525</p>
        </div>
        <div><button>Proceed to check</button></div>
      </div>
    </div>
  )
}

export default Cart
