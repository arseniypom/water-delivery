import React from 'react'

import ProductCard from './ProductCard'

function Catalog({products, onAddToCart}) {

  return (
    <div className="catalog">
      {products.map((product) => {
        return <ProductCard {...product} onAddToCart={onAddToCart} key={product._id} />
      })}
    </div>
  )
}

export default Catalog
