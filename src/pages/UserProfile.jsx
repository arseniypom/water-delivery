import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { LoaderComponent, UserInfo } from '../components';
import { AuthContext } from '../context/AuthContext'
import { useHttp } from '../hooks/http.hook'

function UserProfile() {
  const auth = React.useContext(AuthContext)
  const {request, error, responseStatus} = useHttp()

  const [ordersList, setOrdersList] = React.useState([])

  const dispatch = useDispatch();
  const {info, orderIds, isLoaded} = useSelector((state) => {
    return {
      info: state.profile.info,
      orderIds: state.profile.orders,
      isLoaded: state.profile.isLoaded
    }
  })

  const logoutHandler = () => {
    auth.logout()
  }

  const fetchOrdersList = async () => {
    try {
      const orders = await request('/api/order/list', 'GET', null, {
        Authorization: `Bearer ${auth.token}`
      })
      setOrdersList(orders)
    } catch (e) {
      console.log(e)
    }
  }

  React.useEffect(() => {
    fetchOrdersList()
  }, [])

  React.useEffect(() => {
    responseStatus === 401 && logoutHandler()
  }, [responseStatus])
  
  return (
    <main className="container user-profile">
      <div className="user-profile__header">
        <h1>Личный кабинет</h1>
        <button onClick={logoutHandler} className="button button--red header__button">Выйти</button>
      </div>
      {
        error
          ? <p className="text-danger">Возникла внутренняя ошибка, пожалуйста, попробуйте выйти и зайти снова. Если не помогло, обратитесь в <a className="link--underlined" href="mailto:arseniy.pomazkov@gmail.com">Поддержку</a></p>
          : isLoaded
            ? <UserInfo userData={info} ordersList={ordersList}/>
            : <LoaderComponent classes={['loader-profile']}/>
      }
    </main>
  )
}

export default UserProfile