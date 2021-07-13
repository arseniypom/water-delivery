import React from 'react'

import cartIcon from '../images/icons/cart-icon.svg'
import userIcon from '../images/icons/user-icon.svg'

function Header({setCartActive}) {
  return (
    <header className="container header">
      <a className="header__logo" href="index.html">
        <h3>WaterDelivery</h3>
      </a>
      <div className="header__links">
        <a onClick={() => {setCartActive(true)}} className="header__link link--primary">
          <img src={cartIcon} alt="cart" />
        </a>
        <a className="header__link link--primary" href="login.html">
          <img src={userIcon} alt="sign in" />
        </a>
      </div>
    </header>
  )
}

export default Header
