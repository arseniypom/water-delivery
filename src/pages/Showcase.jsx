import React from 'react'
import {Sorting, AppliedFilters, Sidebar, Catalog} from '../components';

function Showcase() {
  return (
    <main className="container showcase">
      <h1 className="showcase__header">Питьевая вода</h1>
      <Sorting />
      <AppliedFilters />
      <Sidebar />
      <Catalog />
  </main>
  )
}

export default Showcase
