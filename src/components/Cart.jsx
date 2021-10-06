import React from 'react'
import { useSelector } from 'react-redux';

import {cart} from '../db'

import CartItem from './CartItem'
import rubleIcon from '../images/ruble.svg'
import crossIcon from '../images/cross.svg'


function Cart({active, setActive}) {
  const {cartItems, totalPrice} = useSelector((state) => {
    return {
      cartItems: state.cart.items,
      totalPrice: state.cart.totalPrice
    }
  })

  React.useEffect(() => {
    document.body.style.overflow = active ? 'hidden' : ''
  }, [active])

  return (
    <section onClick={() => setActive(false)} className={active ? "cart-modal cart-modal--active" : "cart-modal"}>
      <div onClick={(e) => e.stopPropagation()} className="cart-modal__window">
        <div className="cart-modal__top">
          <h2>Корзина</h2>
          <button onClick={() => setActive(false)} className="cart-modal__top__close" name="cart-close">
            <p>Закрыть</p><img src={crossIcon} alt="cross" />
          </button>
        </div>
        <div className="cart-modal__products">
          {
            Object.values(cartItems).map((item, i) => {
              return <CartItem {...item.itemInfo} itemQuantity={item.itemQuantity}  key={i} />
            })
          }
        </div>
        <div className="cart-modal__bottom">
          <div className="cart-modal__subtotal">
            <p>Итог:</p>
            <h2>{totalPrice} <img src={rubleIcon} alt="ruble" /></h2>
          </div>
          <div className="cart-modal__buttons">
            <button onClick={() => setActive(false)} className="button button--black">Продолжить покупки</button>
            <button className="button button--primary">Оформить заказ</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cart
