import React from 'react'

function Sorting() {
  return (
    <div className="sorting">
      <div className="sorting__wrapper">
        <p className="sorting__text">Сортировка</p>
        <span className="sorting__divide-line"></span>
        <select className="sorting__select" name="sorting-select">
          <option value="default" selected>По умолчанию</option>
          <option value="price-ascending">Цена: по возрастанию</option>
          <option value="price-descending">Цена: по убыванию</option>
        </select>
      </div>
    </div>
  )
}

export default Sorting
