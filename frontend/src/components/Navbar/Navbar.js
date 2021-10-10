import React from 'react'
import style from './navbar.module.css'
import { Link } from "react-router-dom"

function Navbar({ click }) {
  return (
    <div className={style.navbar}>
      <div className={style.navbar__logo}>
        <h2>Logo</h2>
      </div>


      <ul className={style.navbar__links}>
        <li>
          <Link to="/cart" className={style.cart__link}>
            <i className="fas fa-shopping-cart"></i>
            cart
            <span className={style.cartlogo__badge}>0</span>
          </Link></li>
        <li>
          <Link to="/">shop</Link>
        </li>
      </ul>

      <div className={style.hamburger__menu} onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Navbar
