import React from 'react'

import CartItem from './CartItem'
import rubleIcon from '../images/ruble.svg'

import { CartEmpty } from '.'

function OrderList({removeItemHandler, plusItemHandler, minusItemHandler, cartItems, totalPrice}) {

  const cartItemsArray = Object.entries(cartItems)
  return (
    <div className="order-checkout__list order-list">
      <h2 className="order-list__header">Ваш заказ:</h2>
      {
        cartItemsArray.length
        ? <>
            <div className="cart-modal__products">
              {
                cartItemsArray.map((itemEntries) => {
                  return <CartItem
                    removeItemHandler={removeItemHandler}
                    plusItemHandler={plusItemHandler}
                    minusItemHandler={minusItemHandler}
                    {...itemEntries[1].itemInfo}
                    itemQuantity={itemEntries[1].itemQuantity}
                    id={itemEntries[0]}
                    key={itemEntries[0]}
                  />
                })
              }
            </div>
            <div className="order-list__bottom">
              <div className="order-list__subtotal">
                <div className="order-list__subtotal__item">
                  <p>Подытог</p>
                  <p>{totalPrice} <img src={rubleIcon} alt="ruble" /></p>
                </div>
                <div className="order-list__subtotal__item">
                  <p>Стоимость доставки</p>
                  <p>Бесплатно</p>
                </div>
              </div>
              <div className="order-list__total">
                <h3>Итог</h3>
                <h3>{totalPrice} <img src={rubleIcon} alt="ruble" /></h3>
              </div>
            </div>
        </>
        : <CartEmpty />
      }
      
    </div>
  )
}

export default OrderList
