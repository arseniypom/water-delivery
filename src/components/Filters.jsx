import React from 'react'

function Filters() {
  return (
    <div className="applied-filters">
      <p className="text-muted applied-filters__text">Примененные фильтры:</p>
      <ul className="applied-filters__list">
        <li className="applied-filters__item">0.5л<span className="applied-filters__item__delete"></span></li>
        <li className="applied-filters__item">Святой источник<span className="applied-filters__item__delete"></span></li>
      </ul>
    </div>
  )
}

export default Filters
