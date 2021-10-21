import React from 'react'
import classNames from 'classnames';

function OrderorderInfo({userData, orderInfo, setOrderInfo, isEmailCorrect, changeHandler, blurHandler}) {

  React.useEffect(() => {
    setOrderInfo((prev) => {
      return {
        ...prev,
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        phone: userData.phone,
      }
    })
  }, [userData])

  return (
    <div className="order-checkout__billing-info billing-info">
      <h2 className="billing-info__header">Платежная информация</h2>
      <div className="billing-info__body">
        <div className="input-group">
          <input value={orderInfo.firstName} onChange={changeHandler} onBlur={blurHandler} className="input-group__input" type="text" id="firstName" required />
          <label htmlFor="firstName" className="input-group__label input-group__label--filled">Ваше имя</label>
        </div>
        <div className="input-group">
          <input value={orderInfo.lastName} onChange={changeHandler} onBlur={blurHandler} className="input-group__input" type="text" id="lastName" required />
          <label htmlFor="lastName" className="input-group__label input-group__label--filled">Ваша фамилия</label>
        </div>
        <div className="input-group">
          <input value={orderInfo.email} onChange={changeHandler} onBlur={blurHandler} className={classNames("input-group__input", {"input-group__input--error": !isEmailCorrect})} type="text" id="email" required />
          <label htmlFor="email" className="input-group__label input-group__label--filled">Ваш e-mail</label>
        </div>
        <div className="input-group">
          <input value={orderInfo.phone} onChange={changeHandler} onBlur={blurHandler} className="input-group__input" type="text" id="phone" required />
          <label htmlFor="phone" className="input-group__label input-group__label--filled">Ваш телефон</label>
        </div>
        <div className="input-group">
          <input value={orderInfo.city} onChange={changeHandler} onBlur={blurHandler} className="input-group__input" type="text" id="city" required />
          <label htmlFor="city" className="input-group__label">Город</label>
        </div>
        <div className="input-group">
          <input value={orderInfo.address} onChange={changeHandler} onBlur={blurHandler} className="input-group__input" type="text" id="address" required />
          <label htmlFor="address" className="input-group__label">Адрес</label>
        </div>
        <div className="input-group">
          <input value={orderInfo.postalCode} onChange={changeHandler} onBlur={blurHandler} className="input-group__input" type="text" id="postalCode" required />
          <label htmlFor="postalCode" className="input-group__label">Почтовый индекс</label>
        </div>
      </div>
    </div>
  )
}

export default OrderorderInfo
