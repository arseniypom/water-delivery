import React from 'react'

import rubleIcon from '../images/ruble.svg'

function ProductCard({name, imageUrl, volume, currentPrice, previousPrice}) {
  return (
    <div className="product-card">
      {
        previousPrice &&
        <div className="product-card__discount">
          <p>{Math.floor((currentPrice-previousPrice)/previousPrice*100)}%</p>
        </div>
      }
      <div className="product-card__img">
        <img src={imageUrl} alt="product" />
      </div>
      <h4 className="product-card__title">{name}</h4>
      <p className="product-card__volume">Объем: {volume}</p>
      <div className="product-card__bottom">
        <div className="product-card__price">
          <h3 className="product-card__price-current">
            {currentPrice}
            <img src={rubleIcon} alt="ruble" />
          </h3>
          <p className="product-card__price-previous text-muted">{previousPrice}</p>
        </div>
        <button className="product-card__button button button--primary">В корзину</button>
      </div>
    </div>
  )
}

export default ProductCard
