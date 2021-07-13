import React from 'react'

import rubleIcon from '../images/ruble.svg'
import crossIcon from '../images/cross.svg'
import productImg from '../images/products/saint-spring.jpg'

function Cart({active, setActive}) {
  return (
    <section onClick={() => setActive(false)} className={active ? "cart-modal cart-modal--active" : "cart-modal"}>
      <div onClick={(e) => e.stopPropagation()} className="cart-modal__window">
        <div className="cart-modal__top">
          <h2>Корзина</h2>
          <button onClick={() => setActive(false)} className="cart-modal__top__close" name="cart-close">
            <p>Закрыть</p><img src={crossIcon} alt="cross" />
          </button>
        </div>
        <div className="cart-modal__products">
          <div className="cart-modal__product">
            <div className="cart-modal__product__column cart-modal__product__column-left">
              <div className="cart-modal__product__img">
                <img src={productImg} alt="product" />
              </div>
              <button className="cart-modal__product__remove">
                <img src={crossIcon} alt="cross" />
                Удалить
              </button>
            </div>
            <div className="cart-modal__product__column cart-modal__product__column-right">
              <h4 className="cart-modal__product__title">Святой источник</h4>
              <div className="cart-modal__product__volume">
                <p className="cart-modal__product__volume__text text-muted">Объем:</p>
                <p>12x0.75л</p>
              </div>
              <div className="cart-modal__product__bottom">
                <div className="cart-modal__product__price">
                  <h3 className="cart-modal__product__price-current">
                    599
                    <img src={rubleIcon} alt="ruble" />
                  </h3>
                  <p className="cart-modal__product__price-previous text-muted">700</p>
                </div>
                <div className="cart-modal__product__amount">
                  <select className="cart-modal__product__amount__select" name="amount-select">
                    <option value="1" selected>1 шт.</option>
                    <option value="2">2 шт.</option>
                    <option value="3">3 шт.</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="cart-modal__product">
            <div className="cart-modal__product__column cart-modal__product__column-left">
              <div className="cart-modal__product__img">
                <img src={productImg} alt="product" />
              </div>
              <button className="cart-modal__product__remove">
                <img src={crossIcon} alt="cross" />
                Удалить
              </button>
            </div>
            <div className="cart-modal__product__column cart-modal__product__column-right">
              <h4 className="cart-modal__product__title">Святой источник</h4>
              <div className="cart-modal__product__volume">
                <p className="cart-modal__product__volume__text text-muted">Объем:</p>
                <p>12x0.75л</p>
              </div>
              <div className="cart-modal__product__bottom">
                <div className="cart-modal__product__price">
                  <h3 className="cart-modal__product__price-current">
                    599
                    <img src={rubleIcon} alt="ruble" />
                  </h3>
                  <p className="cart-modal__product__price-previous text-muted">700</p>
                </div>
                <div className="cart-modal__product__amount">
                  <select className="cart-modal__product__amount__select" name="amount-select">
                    <option value="1" selected>1 шт.</option>
                    <option value="2">2 шт.</option>
                    <option value="3">3 шт.</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cart-modal__bottom">
          <div className="cart-modal__subtotal">
            <p>Итог:</p>
            <h2>3800 <img src={rubleIcon} alt="ruble" /></h2>
          </div>
          <div className="cart-modal__buttons">
            <button className="button button--black">Продолжить покупки</button>
            <button className="button button--primary">Оформить заказ</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cart
