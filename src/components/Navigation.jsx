import React from 'react'

function Navigation() {
  return (
    <section className="categories">
      <ul className=" container categories__list">
        <li className="categories__option">
          <a className="link--primary" href="/">Питьевая вода</a>
        </li>
        <li className="categories__option">
          <a className="link--primary" href="/equipment">Оборудование</a>
        </li>
        <li className="categories__option">
          <a className="link--primary" href="/service">Услуги</a>
        </li>
        <li className="categories__option">
          <a className="link--primary" href="/sale">Акции</a>
        </li>
      </ul>
    </section>
  )
}

export default Navigation
