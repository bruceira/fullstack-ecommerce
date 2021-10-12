import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './product.css'
import { addToCart } from '../../redux/action/cartAction'
import { getProductDetails } from '../../redux/action/productAction'

function Product({ match, history }) {

  const [qty, setQty] = useState(1)
  const dispatch = useDispatch()

  const productDetails = useSelector(state => state.getProductDetails)

  const { loading, error, product } = productDetails

  useEffect(() => {
    if (product && match.params.id !== product._id) {
      dispatch(getProductDetails(match.params.id))
    }
  }, [match, dispatch, product])

  const addToCarthandler = () => {
    dispatch(addToCart(product._id, qty))
    history.push("/cart")
  }
  return (
    <div className="productscreen">
      {loading ? (<h2>Loading....</h2>) : error ? (<h2>{error}</h2>) :
        (<>
          <div className="productscreen__left">
            <div className="left__image">
              <img src={product.imageUrl} alt={product.name} />
            </div>

            <div className="left__info">
              <p className="lft__name">{product.name}</p>
              <p>${product.price}</p>
              <p>{product.description}</p>
            </div>
          </div>
          <div className='productscreen__right'>
            <div className="right__info">
              <p>price:<span>{product.price}</span></p>
              <p>status:<span>{product.countInStock > 0 ? "In Stock" : "out of Stock "}</span></p>
              <p>Qty:
          <select value={qty} onChange={e => setQty(e.target.value)}>
                  {[...Array(product.countInStock).keys()].map(x => (<option key={x + 1} value={x + 1}>{x + 1}</option>))}

                </select>

              </p>
              <p>
                <button type="button" onClick={addToCarthandler}> Add to cart</button>
              </p>
            </div>

          </div>
        </>)
      }
    </div>
  )
}

export default Product
