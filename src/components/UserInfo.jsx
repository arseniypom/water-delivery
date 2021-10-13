import React from 'react'

function UserInfo({userData, orders}) {
  return (
    <div>
      <h2>Здравствуйте, {userData.firstName} {userData.lastName}</h2>
      <p>{userData.email}</p>
      <p>{orders}</p>
    </div>
  )
}

export default UserInfo
