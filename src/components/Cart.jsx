import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';

import CartItem from './CartItem'
import rubleIcon from '../images/ruble.svg'
import crossIcon from '../images/cross.svg'

import { removeCartItem, plusCartItem, minusCartItem } from '../redux/actions/cart';

function Cart({active, setActive}) {
  const dispatch = useDispatch();
  const {cartItems, totalPrice} = useSelector((state) => {
    return {
      cartItems: state.cart.items,
      totalPrice: state.cart.totalPrice
    }
  })

  React.useEffect(() => {
    document.body.style.overflow = active ? 'hidden' : ''
  }, [active])

  const removeItemHandler = (id) => {
    dispatch(removeCartItem(id))
  }

  const plusItemHandler = (id) => {
    dispatch(plusCartItem(id))
  }

  const minusItemHandler = (id) => {
    dispatch(minusCartItem(id))
  }

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
            Object.entries(cartItems).map((itemEntries) => {
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
        <div className="cart-modal__bottom">
          <div className="cart-modal__subtotal">
            <p>Итог:</p>
            <h2>{totalPrice} <img src={rubleIcon} alt="ruble" /></h2>
          </div>
          <div className="cart-modal__buttons">
            <Link onClick={() => setActive(false)} to="/" className="button button--black">Продолжить покупки</Link>
            <Link onClick={() => setActive(false)} to="/checkout" className="button button--primary">Оформить заказ</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cart
