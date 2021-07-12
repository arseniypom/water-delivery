import React from 'react'

import vossImg from '../images/products/voss.jpg'
import saintSpringImg from '../images/products/saint-spring.jpg'
import sampleImg from '../images/products/sample.jpg'
import rubleIcon from '../images/ruble.svg'

function Catalog() {
  return (
    <div className="catalog">
      <div className="product-card">
        <div className="product-card__discount">
          <p>- 14%</p>
        </div>
        <div className="product-card__img">
          <img src={saintSpringImg} alt="product" />
        </div>
        <h4 className="product-card__title">Святой источник</h4>
        <p className="product-card__volume">Объем: 12x0.75л</p>
        <div className="product-card__bottom">
          <div className="product-card__price">
            <h3 className="product-card__price-current">
              599
              <img src={rubleIcon} alt="ruble" />
            </h3>
            <p className="product-card__price-previous text-muted">700</p>
          </div>
          <button className="product-card__button button button--primary">В корзину</button>
        </div>
      </div>
      <div className="product-card">
        <div className="product-card__discount">
          <p>- 20%</p>
        </div>
        <div className="product-card__img">
          <img src={vossImg} alt="product" />
        </div>
        <h4 className="product-card__title">VOSS</h4>
        <p className="product-card__volume">Объем: 24x0.5л</p>
        <div className="product-card__bottom">
          <div className="product-card__price">
            <h3 className="product-card__price-current">
              2999
              <img src={rubleIcon} alt="ruble" />
            </h3>
            <p className="product-card__price-previous text-muted">3750</p>
          </div>
          <button className="product-card__button button button--primary">В корзину</button>
        </div>
      </div>
      <div className="product-card">
        <div className="product-card__discount">
          <p></p>
        </div>
        <div className="product-card__img">
          <img src={sampleImg} alt="product" />
        </div>
        <h4 className="product-card__title">Sample water</h4>
        <p className="product-card__volume">Объем: 19л</p>
        <div className="product-card__bottom">
          <div className="product-card__price">
            <h3 className="product-card__price-current">
              849
              <img src={rubleIcon} alt="ruble" />
            </h3>
            <p className="product-card__price-previous text-muted"></p>
          </div>
          <button className="product-card__button button button--primary">В корзину</button>
        </div>
      </div>
      <div className="product-card">
        <div className="product-card__discount">
          <p>- 14%</p>
        </div>
        <div className="product-card__img">
          <img src={saintSpringImg} alt="product" />
        </div>
        <h4 className="product-card__title">Святой источник</h4>
        <p className="product-card__volume">Объем: 12x0.75л</p>
        <div className="product-card__bottom">
          <div className="product-card__price">
            <h3 className="product-card__price-current">
              599
              <img src={rubleIcon} alt="ruble" />
            </h3>
            <p className="product-card__price-previous text-muted">700</p>
          </div>
          <button className="product-card__button button button--primary">В корзину</button>
        </div>
      </div>
      <div className="product-card">
        <div className="product-card__discount">
          <p>- 14%</p>
        </div>
        <div className="product-card__img">
          <img src={saintSpringImg} alt="product" />
        </div>
        <h4 className="product-card__title">Святой источник</h4>
        <p className="product-card__volume">Объем: 12x0.75л</p>
        <div className="product-card__bottom">
          <div className="product-card__price">
            <h3 className="product-card__price-current">
              599
              <img src={rubleIcon} alt="ruble" />
            </h3>
            <p className="product-card__price-previous text-muted">700</p>
          </div>
          <button className="product-card__button button button--primary">В корзину</button>
        </div>
      </div>
      <div className="product-card">
        <div className="product-card__discount">
          <p>- 14%</p>
        </div>
        <div className="product-card__img">
          <img src={saintSpringImg} alt="product" />
        </div>
        <h4 className="product-card__title">Святой источник</h4>
        <p className="product-card__volume">Объем: 12x0.75л</p>
        <div className="product-card__bottom">
          <div className="product-card__price">
            <h3 className="product-card__price-current">
              599
              <img src={rubleIcon} alt="ruble" />
            </h3>
            <p className="product-card__price-previous text-muted">700</p>
          </div>
          <button className="product-card__button button button--primary">В корзину</button>
        </div>
      </div>
      <div className="product-card">
        <div className="product-card__discount">
          <p>- 14%</p>
        </div>
        <div className="product-card__img">
          <img src={saintSpringImg} alt="product" />
        </div>
        <h4 className="product-card__title">Святой источник</h4>
        <p className="product-card__volume">Объем: 12x0.75л</p>
        <div className="product-card__bottom">
          <div className="product-card__price">
            <h3 className="product-card__price-current">
              599
              <img src={rubleIcon} alt="ruble" />
            </h3>
            <p className="product-card__price-previous text-muted">700</p>
          </div>
          <button className="product-card__button button button--primary">В корзину</button>
        </div>
      </div>
    </div>
  )
}

export default Catalog
