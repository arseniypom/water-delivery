import React from 'react'
import {Link} from "react-router-dom";
import classNames from 'classnames';

import { AuthContext } from '../context/AuthContext'
import { useHttp } from '../hooks/http.hook'

import phoneIcon from '../images/icons/phone-icon.svg';
import mailIcon from '../images/icons/mail-icon.svg';
import googleImg from '../images/google.png';
import vkImg from '../images/vk.png';

function Register() {
  const auth = React.useContext(AuthContext)
  const {request} = useHttp()
  const [errorMessage, setErrorMessage] = React.useState('')

  const [userInfo, setUserInfo] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    repeatPassword: ''
  })
  const [isEmailCorrect, setEmailCorrect] = React.useState(true)
  const [isPasswordCorrect, setPasswordCorect] = React.useState(false)

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
        case 'repeatPassword':
          if (userInfo.password === value) {
            setErrorMessage('')
            setPasswordCorect(true)
          } else {
            setErrorMessage('Пароли не совпадают')
          }
          break
      default:
        break;
    }
    setUserInfo((prevValue) => {
      return {
        ...prevValue,
        [id]: value
      }
    })
  }

  const blurHandler = (e) => {
    const {id, value} = e.target
    const label = document.querySelector(`[for=${id}]`)
    if (userInfo[id].length !== 0) {
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

  const registerHandler = async (e) => {
    e.preventDefault()
    try {
      const data = await request('/api/auth/register', 'POST', {...userInfo})
      if (data.token) {
        auth.login(data.token, data.userId)
      }
    } catch (error) {
      setErrorMessage(error.message)
    }
  }

  return (
      <form className="register-login register">
        <div className="register-login__header">
          <h1>Регистрация</h1>
          <p>Введите Ваши данные, чтобы зарегистрироваться</p>
        </div>
        <div className="register-login__form form">
          <div className="input-group">
            <input value={userInfo.name} onChange={changeHandler} onBlur={blurHandler} className="input-group__input" type="text" id="firstName" required />
            <label htmlFor="firstName" className="input-group__label">Ваше имя</label>
          </div>
          <div className="input-group">
            <input value={userInfo.lastName} onChange={changeHandler} onBlur={blurHandler} className="input-group__input" type="text" id="lastName" required />
            <label htmlFor="lastName" className="input-group__label">Ваша фамилия</label>
          </div>
          <div className="input-group">
            <input value={userInfo.email} onChange={changeHandler} onBlur={blurHandler} className={classNames("input-group__input", {"input-group__input--error": !isEmailCorrect})} type="text" id="email" required />
            <label htmlFor="email" className="input-group__label">Ваш e-mail</label>
            <img src={mailIcon} alt="email" className="input-group__icon" />
          </div>
          <div className="input-group">
            <input value={userInfo.phone} onChange={changeHandler} onBlur={blurHandler} className="input-group__input" type="text" id="phone" required />
            <label htmlFor="phone" className="input-group__label">Ваш телефон</label>
            <img src={phoneIcon} alt="phone" className="input-group__icon" />
          </div>
          <div className="input-group">
            <input value={userInfo.password} onChange={changeHandler} onBlur={blurHandler} className="input-group__input" type="password" id="password" required />
            <label htmlFor="password" className="input-group__label">Придумайте пароль</label>
          </div>
          <div className="input-group">
            <input value={userInfo.repeatPassword} onChange={changeHandler} onBlur={blurHandler} className="input-group__input" type="password" id="repeatPassword" required />
            <label htmlFor="repeatPassword" className="input-group__label">Повторите пароль</label>
          </div>
        </div>
        <button className="register-login__button button button--primary" onClick={registerHandler} disabled={!isEmailCorrect || !isPasswordCorrect}>Зарегистрироваться</button>
        <p className="form__error-message">{errorMessage}</p>
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
        <h4 className="text-muted">Есть аккаунт?
          <Link to="/auth" className="login-link link--primary">
            Войти
          </Link>
        </h4>
      </form>
  )
}

export default Register
