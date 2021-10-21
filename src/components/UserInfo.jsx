import React from 'react'
import {Link} from "react-router-dom";

import {Orders} from '.'

function UserInfo({userData, ordersList}) {
  return (
    <div className="user-profile__main">
      <h2 className="user-profile__main__header">Здравствуйте, {userData.firstName} {userData.lastName}!</h2>
      <div className="user-profile__main__info">
        <h3>Ваш e-mail:</h3>
        <p>{userData.email}</p>
        <h3>Ваши заказы:</h3>
        {
          ordersList.length
            ? <Orders ordersList={ordersList}/>
            : <p>Перейдите <Link className="link--primary link--underlined" to="/">в магазин</Link>, чтобы сделать свой первый заказ</p>
        }
      </div>
    </div>
  )
}

export default UserInfo
