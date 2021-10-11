import * as actionType from '../constants/cartConstant'
import axios from 'axios'


export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/product/${id}`)

  dispatch({
    type: actionType.ADD_TO_CART,
    payload: {
      product: data._id,
      name: data.name,
      price: data.price,
      imageUrl: data.imageUrl,
      countInStock: data.countInStock,
      qty
    }
  })

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart = id => (dispatch, getState) => {
  dispatch({
    type: actionType.REMOVE_FROM_CART,
    payload: id
  })

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems))
}