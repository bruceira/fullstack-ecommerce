import React from 'react'
import { useEffect } from 'react'
import Products from '../../Products/Products'
import './home.css'
import { useSelector, useDispatch } from 'react-redux'
import { getProducts as listProducts } from '../../redux/action/productAction'

function Home() {

  const dispatch = useDispatch()
  const getProducts = useSelector((state) => state.getProducts)
  const { product, loading, error } = getProducts


  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])
  return (
    <div className="homescreen">
      <h2 className="homescreen__title">Latest Products</h2>

      <div className="homescreen__products">

        {loading ? (<h2>Loading....</h2>) : error ? (<h2>{error}</h2>) : (product.map((product) => <Products
          productId={product._id}
          key={product._id}
          name={product.name}
          price={product.price}
          description={product.description}
          imageUrl={product.imageUrl}

        />))}

      </div>
    </div>
  )
}

export default Home
