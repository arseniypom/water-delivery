import React from 'react'

function Sidebar() {
  return (
    <div class="sidebar">
      <h2 class="sidebar__header">Фильтры</h2>
      <div class="sidebar__option dropdown dropdown--active">
        <div class="dropdown__trigger">
          <h3>Объем</h3>
          <div class="dropdown__arrow">
            <span></span>
          </div>
        </div>
        <ul class="volumes dropdown__content">
          <li class="volumes__option volumes__option--active" name="0.5">0.5л</li>
          <li class="volumes__option" name="1">1л</li>
          <li class="volumes__option" name="5">5л</li>
          <li class="volumes__option" name="19">19л</li>
        </ul>
      </div>
      <div class="sidebar__option dropdown dropdown--active">
        <div class="dropdown__trigger">
          <h3>Цена</h3>
          <div class="dropdown__arrow">
            <span></span>
          </div>
        </div>
        <div class="price__inputs dropdown__content">
          <label>От<input type="text" class="price__input" placeholder="99" /></label>
          <label>До<input type="text" class="price__input" placeholder="890" /></label>
        </div>
      </div>
      <div class="sidebar__option dropdown dropdown--active">
        <div class="dropdown__trigger">
          <h3>Брэнды</h3>
          <div class="dropdown__arrow">
            <span></span>
          </div>
        </div>
        <ul class="brands dropdown__content">
          <li class="brands__option"><a class="link--primary">Святой источник</a></li>
          <li class="brands__option"><a class="link--primary">Аква минерале</a></li>
          <li class="brands__option"><a class="link--primary">Бонаква</a></li>
          <li class="brands__option"><a class="link--primary">Шишкин лес</a></li>
          <li class="brands__option"><a class="link--primary">Evian</a></li>
          <li class="brands__option"><a class="link--primary">VOSS</a></li>
        </ul>
      </div>
      <div class="sidebar__buttons">
        <button class="button button--primary">Применить</button>
        <button class="button button--grey">Сбросить</button>
      </div>
    </div>
  )
}

export default Sidebar
