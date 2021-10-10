import React from 'react'
import Products from '../../Products/Products'
import './home.css'

function Home() {
  return (
    <div className="homescreen">
      <h2 className="homescreen__title">Latest Products</h2>

      <div className="homescreen__products">
        <Products />
        <Products />
        <Products />
        <Products />
        <Products />
        <Products />
      </div>
    </div>
  )
}

export default Home
