import React from 'react'

import waterSample from '../images/products/water.jpg'
import rubleIcon from '../images/ruble.svg'

function ProductCard({title, volume, currentPrice, previousPrice, image}) {

  const productImage = image || waterSample

  return (
    <div className="product-card">
      {
        previousPrice &&
        <div className="product-card__discount">
          <p>{Math.floor((currentPrice-previousPrice)/previousPrice*100)}%</p>
        </div>
      }
      <div className="product-card__img">
        <img src={productImage} alt="product" />
      </div>
      <h4 className="product-card__title">{title}</h4>
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
