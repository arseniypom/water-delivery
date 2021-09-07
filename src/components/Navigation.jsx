import React from 'react'

function Navigation() {
  return (
    <section className="categories">
      <ul className=" container categories__list">
        <li className="categories__option">
          <a className="link--primary" href="">Питьевая вода</a>
        </li>
        <li className="categories__option">
          <a className="link--primary" href="">Оборудование</a>
        </li>
        <li className="categories__option">
          <a className="link--primary" href="">Услуги</a>
        </li>
        <li className="categories__option">
          <a className="link--primary" href="">Акции</a>
        </li>
      </ul>
    </section>
  )
}

export default Navigation
