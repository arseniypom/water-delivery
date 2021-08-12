import React from 'react'
import {Link} from 'react-router-dom';

import cartIcon from '../images/icons/cart-icon.svg'
import userIcon from '../images/icons/user-icon.svg'

function Header({setCartActive}) {
  return (
    <header className="container header">
      <Link to='/' className="header__logo">
        <h3>WaterDelivery</h3>
      </Link>
      <div className="header__links">
        <a onClick={() => {setCartActive(true)}} className="header__link link--primary">
          <img src={cartIcon} alt="cart" />
        </a>
        <Link to="/auth" className="header__link link--primary">
          <img src={userIcon} alt="sign in" />
        </Link>
      </div>
    </header>
  )
}

export default Header
