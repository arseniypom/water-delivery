import React from 'react'
import {LoaderComponent, Sorting, AppliedFilters, Sidebar, Catalog} from '../components';

import {useHttp} from '../hooks/http.hook'

function Showcase() {

  const [products, setProducts] = React.useState([])
  const {request, isLoading} = useHttp()
  console.log(isLoading);

  const fetchProducts = React.useCallback(async () => {
    try {
      const fetched = await request('/api/products', 'GET', null)
      setProducts(fetched)
    } catch (error) {}
  }, [request])

  React.useEffect(() => {
    fetchProducts()
  }, [fetchProducts])

  return (
    <main className="container showcase">
      <h1 className="showcase__header">Питьевая вода</h1>
      <Sorting />
      <AppliedFilters />
      <Sidebar />
      {
        isLoading ?
        <LoaderComponent classes={['loader-products']}/>
        : <Catalog products={products} />
      }
  </main>
  )
}

export default Showcase
