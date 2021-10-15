import React from 'react'
import classNames from 'classnames';

function OrderBillingInfo({userData}) {
  console.log(userData);
  const [billingInfo, setBillingInfo] = React.useState({
    firstName: userData.firstName,
    lastName: userData.lastName,
    email: userData.email,
    phone: userData.phone,
    city: '',
    address: '',
    postalCode: '',
  })

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
    setBillingInfo((prevValue) => {
      return {
        ...prevValue,
        [id]: value
      }
    })
  }

  const blurHandler = (e) => {
    const {id, value} = e.target
    const label = document.querySelector(`[for=${id}]`)
    if (billingInfo[id].length !== 0) {
      label.classList.add('input-group__label--filled')
    } else {
      label.classList.remove('input-group__label--filled')
    }

    if (id === 'email') {
      validateEmail(value) ? setEmailCorrect(true) : setEmailCorrect(false)
    }
  }

  return (
    <div className="order-checkout__billing-info billing-info">
      <h2 className="billing-info__header">Платежная информация</h2>
      <div className="billing-info__body">
        <div className="input-group">
          <input value={billingInfo.firstName} onChange={changeHandler} onBlur={blurHandler} className="input-group__input" type="text" id="firstName" required />
          <label htmlFor="firstName" className="input-group__label input-group__label--filled">Ваше имя</label>
        </div>
        <div className="input-group">
          <input value={billingInfo.lastName} onChange={changeHandler} onBlur={blurHandler} className="input-group__input" type="text" id="lastName" required />
          <label htmlFor="lastName" className="input-group__label input-group__label--filled">Ваша фамилия</label>
        </div>
        <div className="input-group">
          <input value={billingInfo.email} onChange={changeHandler} onBlur={blurHandler} className={classNames("input-group__input", {"input-group__input--error": !isEmailCorrect})} type="text" id="email" required />
          <label htmlFor="email" className="input-group__label input-group__label--filled">Ваш e-mail</label>
        </div>
        <div className="input-group">
          <input value={billingInfo.phone} onChange={changeHandler} onBlur={blurHandler} className="input-group__input" type="text" id="phone" required />
          <label htmlFor="phone" className="input-group__label input-group__label--filled">Ваш телефон</label>
        </div>
        <div className="input-group">
          <input value={billingInfo.city} onChange={changeHandler} onBlur={blurHandler} className="input-group__input" type="text" id="city" required />
          <label htmlFor="city" className="input-group__label">Город</label>
        </div>
        <div className="input-group">
          <input value={billingInfo.address} onChange={changeHandler} onBlur={blurHandler} className="input-group__input" type="text" id="address" required />
          <label htmlFor="address" className="input-group__label">Адрес</label>
        </div>
        <div className="input-group">
          <input value={billingInfo.postalCode} onChange={changeHandler} onBlur={blurHandler} className="input-group__input" type="text" id="postalCode" required />
          <label htmlFor="postalCode" className="input-group__label">Почтовый индекс</label>
        </div>
      </div>
    </div>
  )
}

export default OrderBillingInfo
