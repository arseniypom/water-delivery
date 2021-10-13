import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { LoaderComponent, UserInfo } from '../components';
import { fetchProfileData } from '../redux/actions/profile'
import { AuthContext } from '../context/AuthContext'

function UserProfile() {
  const auth = React.useContext(AuthContext)

  const dispatch = useDispatch();
  const {info, orders, isLoaded} = useSelector((state) => {
    return {
      info: state.profile.info,
      orders: state.profile.orders,
      isLoaded: state.profile.isLoaded
    }
  })

  const logoutHandler = () => {
    auth.logout()
  }
  
  return (
    <main className="container">
      <h1>Личный кабинет</h1>
      <button onClick={logoutHandler} className="button button--red header__button">Выйти</button>

      {
        isLoaded
        ? <UserInfo userData={info} orders={orders} />
        : <LoaderComponent classes={['loader-profile']}/>
      }
    </main>
  )
}

export default UserProfile