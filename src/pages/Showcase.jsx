import React from 'react'
import {Sorting, Filters, Sidebar, Catalog} from '../components';

function Showcase() {
  return (
    <main class="container showcase">
      <h1 class="showcase__header">Питьевая вода</h1>
      <Sorting />
      <Filters />
      <Sidebar />
      <Catalog />
  </main>
  )
}

export default Showcase
