import React from 'react'

import { products } from '../db'
import {useHttp} from '../hooks/http.hook'
import ProductCard from './ProductCard'

function Catalog() {
  const [products, setProducts] = React.useState([])
  const {request} = useHttp()

  const fetchProducts = React.useCallback(async () => {
    try {
      const fetched = await request('/api/products', 'GET', null)
      setProducts(fetched)
    } catch (error) {}
  }, [])

  React.useEffect(() => {
    fetchProducts()
  }, [fetchProducts])


  return (
    <div className="catalog">
      {products.map((product) => {
        return <ProductCard {...product} key={product._id} />
      })}
    </div>
  )
}

export default Catalog
