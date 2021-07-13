import React from 'react'
import {Sorting, Filters, Sidebar, Catalog} from '../components';

function Showcase() {
  return (
    <main className="container showcase">
      <h1 className="showcase__header">Питьевая вода</h1>
      <Sorting />
      <Filters />
      <Sidebar />
      <Catalog />
  </main>
  )
}

export default Showcase
