import React from 'react'

import { products } from '../db'

import ProductCard from './ProductCard'

function Catalog() {
  return (
    <div className="catalog">
      {products.map((product, i) => {
        return <ProductCard {...product} key={i} />
      })}
    </div>
  )
}

export default Catalog
