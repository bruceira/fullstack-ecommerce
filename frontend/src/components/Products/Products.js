import React from 'react'
import { Link } from 'react-router-dom'
import './product.css'

function Products() {
  return (
    <div className="product">

      <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80" alt="pradimage" />

      <div className="product__info">
        <p className="info__name">pro 1</p>
        <p className="info__description">lorremmmmmmmmmmmmmmsaFOPAJFGOSFG O[VMNROumabWVT9P UE[BWVAT9E[QBVTM98UEMQBWVT M98U[M,EMW.VT</p>
        <p className="info__price">FBU 20000</p>


        <Link to={`product/${1111}`} className="info__button">view</Link>
        <p>Prod list</p>
      </div>
    </div>
  )
}

export default Products
