import React from 'react'
import classNames from 'classnames'

import SidebarOption from './SidebarOption'

function Sidebar() {
  const [isExpanded, setExpanded] = React.useState(true)
  return (
    <div className="sidebar">
      <div onClick={() => setExpanded((prev) => !prev)} className="sidebar__header"><h2>Фильтры</h2><span></span></div>
      <div className={classNames("sidebar__content", {'sidebar__content--expanded':isExpanded})}>
        <SidebarOption header={'Объем'} childrenClass={'volumes'}>
          <li className="volumes__option volumes__option--active" name="0.5">0.5л</li>
          <li className="volumes__option" name="1">1л</li>
          <li className="volumes__option" name="5">5л</li>
          <li className="volumes__option" name="19">19л</li>
        </SidebarOption>
        <SidebarOption header={'Цена'} childrenClass={'price__inputs'}>
          <label>От<input type="text" className="price__input" placeholder="99" /></label>
          <label>До<input type="text" className="price__input" placeholder="890" /></label>
        </SidebarOption>
        <SidebarOption header={'Брэнды'} childrenClass={'brands'}>
          <li className="brands__option"><a className="link--primary">Святой источник</a></li>
          <li className="brands__option"><a className="link--primary">Аква минерале</a></li>
          <li className="brands__option"><a className="link--primary">Бонаква</a></li>
          <li className="brands__option"><a className="link--primary">Шишкин лес</a></li>
          <li className="brands__option"><a className="link--primary">Evian</a></li>
          <li className="brands__option"><a className="link--primary">VOSS</a></li>
        </SidebarOption>
        <div className="sidebar__buttons">
          <button className="button button--primary">Применить</button>
          <button className="button button--grey">Сбросить</button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
