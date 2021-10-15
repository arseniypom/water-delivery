import React from 'react'
import {Link} from "react-router-dom"

import waveImg from '../images/water-wave.png'

function CartEmpty({onShopClick}) {
  return (
    <div className="cart-empty">
      <div className="cart-empty__text">
        <p>Пока в Вашей корзине пусто.</p>
        <p>Самое время перейти в <Link onClick={onShopClick} className="link--primary link--underlined" to="/">магазин</Link> и выбрать подходящие товары ;)</p>
      </div>
      <div className="cart-empty__img">
        <img src={waveImg} alt="wave" />
      </div>
    </div>
  )
}

export default CartEmpty
