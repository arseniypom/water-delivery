import React from 'react'

import ProductCard from './ProductCard'

function Catalog({products, onAddToCart, cartItems}) {

  const isProductInCart = React.useCallback(
    (productId, items) => {
      return Object.keys(items).some(itemId => itemId === productId)
    }
  )

  return (
    <div className="catalog">
      {products.map((product) => {
        return <ProductCard isInCart={isProductInCart(product._id, cartItems)} {...product} cartItems={cartItems} onAddToCart={onAddToCart} key={product._id} />
      })}
    </div>
  )
}

export default Catalog
