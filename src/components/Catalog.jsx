import React from 'react'

import ProductCard from './ProductCard'

function Catalog({products}) {

  return (
    <div className="catalog">
      {products.map((product) => {
        return <ProductCard {...product} key={product._id} />
      })}
    </div>
  )
}

export default Catalog
