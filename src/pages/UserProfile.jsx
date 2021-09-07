import React from 'react'

import { AuthContext } from '../context/AuthContext'

function UserProfile() {
  const auth = React.useContext(AuthContext)

  const logoutHandler = () => {
    auth.logout()
  }
  
  return (
    <main className="container">
      <h1>Личный кабинет</h1>
      <button onClick={logoutHandler} className="button button--red header__button">Выйти</button>
    </main>
  )
}

export default UserProfile