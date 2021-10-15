import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { LoaderComponent, OrderList, OrderBillingInfo } from '../components'
import { removeCartItem, plusCartItem, minusCartItem } from '../redux/actions/cart';

function OrderCheckout() {
  const dispatch = useDispatch();
  const {cartItems, totalPrice, userData, isProfileLoaded} = useSelector((state) => {
    return {
      cartItems: state.cart.items,
      totalPrice: state.cart.totalPrice,
      userData: state.profile.info,
      isProfileLoaded: state.profile.isLoaded
    }
  })

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
    <main className="container order-checkout">
      <h1 className="order-checkout__header">Оформление заказа</h1>
      <div className="order-checkout__body">
        <div className="order-checkout__body__left-column">
          {
            isProfileLoaded
              ? <OrderBillingInfo userData={userData}/>
              : <LoaderComponent classes={['']}/>
          }
        </div>
        <div className="order-checkout__body__right-column">
          <OrderList
            removeItemHandler={removeItemHandler}
            plusItemHandler={plusItemHandler}
            minusItemHandler={minusItemHandler}
            cartItems={cartItems}
            totalPrice={totalPrice}
          />
          {
            Object.entries(cartItems).length > 0 && <button className="button button--primary order-checkout__button">Перейти к оплате</button>
          }
        </div>
      </div>
    </main>
  )
}

export default OrderCheckout
