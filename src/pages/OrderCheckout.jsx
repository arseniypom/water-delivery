import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { AuthContext } from '../context/AuthContext'
import { useHttp } from '../hooks/http.hook'
import { LoaderComponent, OrderList, OrderBillingInfo } from '../components'
import { removeCartItem, plusCartItem, minusCartItem, clearCart } from '../redux/actions/cart'
import { addOrder } from '../redux/actions/profile'

function OrderCheckout() {
  const history = useHistory()
  const auth = React.useContext(AuthContext)
  const {request} = useHttp()
  const dispatch = useDispatch();

  const {cartItems, totalPrice, userData, isProfileLoaded} = useSelector((state) => {
    return {
      cartItems: state.cart.items,
      totalPrice: state.cart.totalPrice,
      userData: state.profile.info,
      isProfileLoaded: state.profile.isLoaded
    }
  })

  const [orderInfo, setOrderInfo] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    address: '',
    postalCode: '',
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

  // Form inputs' handlers
  const [isEmailCorrect, setEmailCorrect] = React.useState(true)
  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase())
  }
  const changeHandler = (e) => {
    const {id, value} = e.target
    switch (id) {
      case 'email':
        if (validateEmail(value)) {
          setEmailCorrect(true)
        }
        break;
      
        case 'phone':
          break
      default:
        break;
    }
    setOrderInfo((prevValue) => {
      return {
        ...prevValue,
        [id]: value
      }
    })
  }
  const blurHandler = (e) => {
    const {id, value} = e.target
    const label = document.querySelector(`[for=${id}]`)
    if (orderInfo[id].length !== 0) {
      label.classList.add('input-group__label--filled')
    } else {
      label.classList.remove('input-group__label--filled')
    }

    if (id === 'email') {
      validateEmail(value) ? setEmailCorrect(true) : setEmailCorrect(false)
    }
  }

  const checkoutHandler = async () => {
    try {
      Object.values(orderInfo).forEach(string => {
        if(!string.length) {
          alert('Необходимо заполнить все поля в разделе "Платежная информация"')
          throw new Error('Unable to proceed to payment due to empty inputs')
        }
      })

      const newOrder = await request('/api/order/checkout', 'POST', {products: cartItems, orderInfo, totalSum: totalPrice, date: Date.now()}, {
        Authorization: `Bearer ${auth.token}`
      })

      console.log('SUCCESS!')
      dispatch(addOrder(newOrder))
      dispatch(clearCart())
      
      history.push('/auth')
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <main className="container order-checkout">
      <h1 className="order-checkout__header">Оформление заказа</h1>
      <div className="order-checkout__body">
        <div className="order-checkout__body__left-column">
          {
            isProfileLoaded
              ? <OrderBillingInfo
                userData={userData}
                orderInfo={orderInfo}
                setOrderInfo={setOrderInfo}
                isEmailCorrect={isEmailCorrect}
                changeHandler={changeHandler}
                blurHandler={blurHandler}
              />
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
            Object.entries(cartItems).length > 0 && <button onClick={checkoutHandler} className="button button--primary order-checkout__button">Перейти к оплате</button>
          }
        </div>
      </div>
    </main>
  )
}

export default OrderCheckout
