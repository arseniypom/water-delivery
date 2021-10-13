import React from 'react'
import {Link} from "react-router-dom";

function Navigation() {
  return (
    <section className="categories">
      <ul className=" container categories__list">
        <li className="categories__option">
          <Link to="/" className="link--primary">Питьевая вода</Link>
        </li>
        <li className="categories__option">
          <Link className="link--primary" to="/equipment">Оборудование</Link>
        </li>
        <li className="categories__option">
          <Link className="link--primary" to="/service">Услуги</Link>
        </li>
        <li className="categories__option">
          <Link className="link--primary" to="/sale">Акции</Link>
        </li>
      </ul>
    </section>
  )
}

export default Navigation
