import React from 'react'
import './product.css'

function Product() {
  return (
    <div className="productscreen">

      <div className="productscreen__left">
        <div className="left__image">
          <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80" alt="pramage" />
        </div>

        <div className="left__info">
          <p className="lft__name">Prod 1</p>
          <p>$554</p>
          <p>dexcr  :saf;hd;gaf9yne w;8ypqnmre7y nip er yi7nep8umewr7ynp7yiweyhw e</p>
        </div>
      </div>
      <div className='productscreen__right'>
        <div className="right__info">
          <p>price:<span>$54890</span></p>
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
