import React from 'react'
import './product.css'

function Product({ imageUrl, name, price, description, productId }) {
  return (
    <div className="productscreen">

      <div className="productscreen__left">
        <div className="left__image">
          <img src={imageUrl} alt={name} />
        </div>

        <div className="left__info">
          <p className="lft__name">{name}</p>
          <p>$554</p>
          <p>{description}</p>
        </div>
      </div>
      <div className='productscreen__right'>
        <div className="right__info">
          <p>price:<span>{price}</span></p>
          <p>status:<span>in stock</span></p>
          <p>Qty:
          <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>

          </p>
          <p>
            <button type="button"> Add to cart</button>
          </p>
        </div>

      </div>

    </div>
  )
}

export default Product
