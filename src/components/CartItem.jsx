import React from 'react'

import rubleIcon from '../images/ruble.svg'
import crossIcon from '../images/cross.svg'

function CartItem({name, imageUrl, volume, currentPrice, previousPrice, amount}) {
  const [selectedAmount, setSelectedAmount] = React.useState(amount)
  const selectHandler = (e) => {
    setSelectedAmount(e.target.value)
  }

  return (
    <div className="cart-modal__product">
      <div className="cart-modal__product__column cart-modal__product__column-left">
        <div className="cart-modal__product__img">
          <img src={imageUrl} alt="product" />
        </div>
        <button className="cart-modal__product__remove">
          <img src={crossIcon} alt="cross" />
          Удалить
        </button>
      </div>
      <div className="cart-modal__product__column cart-modal__product__column-right">
        <h4 className="cart-modal__product__title">{name}</h4>
        <div className="cart-modal__product__volume">
          <p className="cart-modal__product__volume__text text-muted">Объем:</p>
          <p>{volume}</p>
        </div>
        <div className="cart-modal__product__bottom">
          <div className="cart-modal__product__price">
            <h3 className="cart-modal__product__price-current">
              {currentPrice}
              <img src={rubleIcon} alt="ruble" />
            </h3>
            <p className="cart-modal__product__price-previous text-muted">{previousPrice}</p>
          </div>
          <div className="cart-modal__product__amount">
            <select value={selectedAmount} onChange={selectHandler} className="cart-modal__product__amount__select" name="amount-select">
              <option value="1">1 шт.</option>
              <option value="2">2 шт.</option>
              <option value="3">3 шт.</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem
