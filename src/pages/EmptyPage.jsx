import React from 'react'
import {Link} from "react-router-dom"

import waveImg from '../images/water-wave.png'

function EmptyPage() {
  return (
    <div className="container empty-page">
      <div className="empty-page__text">
        <h2>Пока на этой странице пустно, но!</h2>
        <p>Совсем скоро она будет обновлена, а пока Вы можете перейти в <Link className="link--primary link--underlined" to="/">основной раздел</Link> и выбрать подходящие товары ;)</p>
      </div>
      <div className="empty-page__img">
        <img src={waveImg} alt="wave" />
      </div>
    </div>
  )
}

export default EmptyPage
