import React from 'react'
import {useRouteMatch, Link} from "react-router-dom";

import phoneIcon from '../images/icons/phone-icon.svg';
import googleImg from '../images/google.png';
import vkImg from '../images/vk.png';

function Login() {
  let match = useRouteMatch();

  return (
    <div className="register-login login">
      <h1 className="register-login__header">Вход</h1>
      <div className="register-login__form form">
        <div className="input-group">
          <input className="input-group__input" type="text" id="phone" required />
          <label for="phone" className="input-group__label">Номер телефона</label>
          <img src={phoneIcon} alt="phone" className="input-group__icon" />
        </div>
      </div>
      <button className="register-login__button button button--primary">Войти</button>
      <span className="register-login__line"></span>
      <h4 className="text-muted">Войти с помощью:</h4>
      <div className="register-login__alternative-signup">
        <button className="register-login__alternative-signup__button button register-login__alternative-signup__button-google">
          <img src={googleImg} alt="google signup" />
        </button>
        <button className="register-login__alternative-signup__button button register-login__alternative-signup__button-vk">
          <img src={vkImg} alt="vk signup" />
        </button>
      </div>
      <h4 className="text-muted">Впервые у нас?
        <Link to={`${match.url}/register`} className="register-link link--primary">
          Зарегистрироваться
        </Link>
      </h4>
    </div>
  )
}

export default Login
