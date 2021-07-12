import React from 'react'

import waveImg from '../images/water-wave.png';
import phoneIcon from '../images/icons/phone-icon.svg';
import mailIcon from '../images/icons/mail-icon.svg';
import googleImg from '../images/google.png';
import vkImg from '../images/vk.png';

function Register() {
  return (
    <section className="container register-login-container">
      <div className="register-login register">
        <div className="register-login__header">
          <h1>Регистрация</h1>
          <p>Введите Ваши данные, чтобы зарегистрироваться</p>
        </div>
        <div className="register-login__form form">
          {/* <!-- <label className="form__group">
            Имя
            <input type="text" required />
          </label> --> */}
          <div className="input-group">
            <input className="input-group__input" type="text" id="name" required />
            <label for="name" className="input-group__label">Ваше имя</label>
          </div>
          <div className="input-group">
            <input className="input-group__input" type="text" id="surname" required />
            <label for="surname" className="input-group__label">Ваша фамилия</label>
          </div>
          <div className="input-group">
            <input className="input-group__input" type="text" id="email" required />
            <label for="email" className="input-group__label">Ваш e-mail</label>
            <img src={mailIcon} alt="email" className="input-group__icon" />
          </div>
          <div className="input-group">
            <input className="input-group__input" type="text" id="phone" required />
            <label for="phone" className="input-group__label">Ваш телефон</label>
            <img src={phoneIcon} alt="phone" className="input-group__icon" />
          </div>
        </div>
        <button className="register-login__button button button--primary">Зарегистрироваться</button>
        <span className="register-login__line"></span>
        <h4 className="text-muted">Войти с помощью:</h4>
        <div className="register-login__alternative-signup">
          <button className="register-login__alternative-signup__button button register-login__alternative-signup__button-google">
            <img src={vkImg} alt="vk signup" />
          </button>
          <button className="register-login__alternative-signup__button button register-login__alternative-signup__button-vk">
            <img src={googleImg} alt="google signup" />
          </button>
        </div>
      </div>
      <div className="register-login-container__img">
        <img src={waveImg} alt="wave" />
      </div>
    </section>
  )
}

export default Register
