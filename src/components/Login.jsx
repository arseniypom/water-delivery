import React from 'react'
import {useRouteMatch, Link} from "react-router-dom";
import classNames from 'classnames';

import { AuthContext } from '../context/AuthContext'
import { useHttp } from '../hooks/http.hook'

import mailIcon from '../images/icons/mail-icon.svg';
import googleImg from '../images/google.png';
import vkImg from '../images/vk.png';

function Login() {
  let match = useRouteMatch();
  const auth = React.useContext(AuthContext)
  const {request} = useHttp()
  const [errorMessage, setErrorMessage] = React.useState('')

  const [form, setForm] = React.useState({
    email: '',
    password: ''
  })
  const [isEmailCorrect, setEmailCorrect] = React.useState(true)

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase())
  }

  const changeHandler = (e) => {
    setForm({
      ...form,
      [e.target.id]:e.target.value
    })
  }

  const blurHandler = (e) => {
    const {id, value} = e.target
    const label = document.querySelector(`[for=${id}]`)
    if (form[id].length !== 0) {
      label.classList.add('input-group__label--filled')
    } else {
      label.classList.remove('input-group__label--filled')
    }

    if (id === 'email') {
      if (validateEmail(value)) {
        setEmailCorrect(true)
      } else {
        setEmailCorrect(false)
      }
    }
  }

  const loginHandler = async () => {
    // e.preventDefault()
    try {
      const data = await request('/api/auth/login', 'POST', {...form})
      auth.login(data.token, data.userId)
    } catch (error) {
      setErrorMessage(error.message)
    }
  }

  return (
    <div className="register-login login">
      <h1 className="register-login__header">Вход</h1>
      <div className="register-login__form form">
        <div className="input-group">
          <input onChange={changeHandler} onBlur={blurHandler} className={classNames("input-group__input", {"input-group__input--error": !isEmailCorrect})} type="text" id="email" required />
          <label htmlFor="email" className="input-group__label">Введите Ваш e-mail</label>
          <img src={mailIcon} alt="email" className="input-group__icon" />
        </div>
        <div className="input-group">
            <input value={form.password} onChange={changeHandler} onBlur={blurHandler} className="input-group__input" type="password" id="password" required />
            <label htmlFor="password" className="input-group__label">Введите пароль</label>
          </div>
      </div>
      <button onClick={loginHandler} className="register-login__button button button--primary" disabled={!isEmailCorrect || !form.password.length}>Войти</button>
      <p className="form__error-message">{errorMessage}</p>
      <p className="text-muted">Тестовая Учетная Запись: a1@mail.ru / 123456</p>
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
