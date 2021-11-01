import React from 'react'

import rubleIcon from '../images/ruble.svg'

function ProductCard({_id, onAddToCart, title, volume, quantityInPack, currentPrice, previousPrice, image}) {

  const productImage = `/images/${image}.jpg`

  const onClickAddToCart = () => {
    onAddToCart({
      id: _id,
      info: {
        title,
        volume,
        quantityInPack,
        currentPrice,
        previousPrice,
        image
      }
    })
  }

  return (
    <div className="product-card">
      {
        previousPrice &&
        <div className="product-card__discount">
          <p>{Math.floor((currentPrice-previousPrice)/previousPrice*100)}%</p>
        </div>
      }
      <div className="product-card__img">
        <img
          src={productImage}
          alt="product"
          onError={(e)=>{e.target.onerror = null; e.target.src="/images/water.jpg"}}
        />
      </div>
      <h4 className="product-card__title">{title}</h4>
      <p className="product-card__volume">Объем: {quantityInPack > 1 && quantityInPack + ' x'} {volume}л</p>
      <div className="product-card__bottom">
        <div className="product-card__price">
          <h3 className="product-card__price-current">
            {currentPrice}
            <img src={rubleIcon} alt="ruble" />
          </h3>
          <p className="product-card__price-previous text-muted">{previousPrice}</p>
        </div>
        <button onClick={onClickAddToCart} className="product-card__button button button--primary">В корзину<span className="product-card__button__amount"></span></button>
      </div>
    </div>
  )
}

export default ProductCard
