import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Select from 'react-select'

import {LoaderComponent, Sorting, AppliedFilters, Sidebar, Catalog} from '../components';

import { fetchProducts } from '../redux/actions/products';
import { setVolume, setPrice } from '../redux/actions/filters';
import { setSortByDefault, setSortByPriceAsc, setSortByPriceDesc } from '../redux/actions/sorting';

const options = [
  { value: 'default', label: 'По умолчанию' },
  { value: 'price-asc', label: 'Цена: по возрастанию' },
  { value: 'price-desc', label: 'Цена: по убыванию' }
]

function Showcase() {
  const [products, setProducts] = React.useState([])

  const dispatch = useDispatch();
  const {productItems, isLoaded, currentVolume, currentPrice, currentSortBy, currentSortOrder} = useSelector((state) => {
    return {
      productItems: state.products.items,
      isLoaded: state.products.isLoaded,
      currentVolume: state.filters.volume,
      currentPrice: state.filters.price,
      currentSortBy: state.sorting.sortBy,
      currentSortOrder: state.sorting.sortOrder,
    }
  })


  React.useEffect(async () => {
    dispatch(fetchProducts(currentVolume, currentPrice, currentSortBy, currentSortOrder))
  } , [currentVolume, currentPrice, currentSortBy, currentSortOrder]);

  const onSelectSortBy = React.useCallback((sortOption) => {
    const {value} = sortOption
    switch (value) {
      case 'default':
        dispatch(setSortByDefault())
        break;
      case 'price-asc':
        dispatch(setSortByPriceAsc())
        break;
      case 'price-desc':
        dispatch(setSortByPriceDesc())
        break;
    
      default:
        break;
    }
  }, [])


  const colorTheme = (theme) => {
    return {
      ...theme,
      colors: {
        ...theme.colors,
        primary25: 'rgba(0, 124, 187, 0.3)',
        primary: '#007CBB'
      }
    }
  }

  const customStyles = {
    control: (provided) => ({
      ...provided,
      borderRadius: '12px',
      width: 250,
      marginBottom: 16
    }),
    menu: (provided) => ({
      ...provided,
      width: 250,
    }),
  }

  return (
    <main className="container showcase">
      <h1 className="showcase__header">Питьевая вода</h1>
      <Select
        onChange={onSelectSortBy}
        defaultValue={options[0]}
        options={options}
        isSearchable={false}
        styles={customStyles}
        theme={colorTheme}
      />
      <AppliedFilters />
      <Sidebar />
      {
        isLoaded
        ? <Catalog products={productItems} />
        : <LoaderComponent classes={['loader-products']}/>
      }
  </main>
  )
}

export default Showcase
