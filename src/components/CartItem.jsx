import React from 'react'

import rubleIcon from '../images/ruble.svg'
import crossIcon from '../images/cross.svg'
import addIcon from '../images/icons/add-icon.svg'
import removeIcon from '../images/icons/remove-icon.svg'

import waterSample from '../images/products/water.jpg'

function CartItem({name, image, quantityInPack, volume, currentPrice, previousPrice, itemQuantity}) {

  const productImage = image || waterSample

  return (
    <div className="cart-modal__product">
      <div className="cart-modal__product__column cart-modal__product__column-left">
        <div className="cart-modal__product__img">
          <img src={productImage} alt="product" />
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
          <p>{quantityInPack > 1 && quantityInPack + ' x'} {volume}л</p>
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
            <button className="cart-modal__product__amount__button button--minus">
              <img src={removeIcon} alt="cross" />
            </button>
            <span className="cart-modal__product__amount-current">{itemQuantity}</span>
            <button className="cart-modal__product__amount__button button--plus">
              <img src={addIcon} alt="cross" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem
