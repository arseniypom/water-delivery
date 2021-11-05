import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Select from 'react-select'

import {LoaderComponent, AppliedFilters, Sidebar, Catalog} from '../components';

import { fetchProducts } from '../redux/actions/products';
import { setVolume, setPrice, resetFilters } from '../redux/actions/filters';
import { setSortByDefault, setSortByPriceAsc, setSortByPriceDesc } from '../redux/actions/sorting';
import { addToCart, clearCart, removeCartItem, plusCartItem, minusCartItem } from '../redux/actions/cart';

const options = [
  { value: 'default', label: 'По умолчанию' },
  { value: 'price-asc', label: 'Цена: по возрастанию' },
  { value: 'price-desc', label: 'Цена: по убыванию' }
]

function Showcase() {

  const dispatch = useDispatch();
  const {productItems, isLoaded, currentVolume, currentPrice, currentSortBy, currentSortOrder, cartItems} = useSelector((state) => {
    return {
      productItems: state.products.items,
      isLoaded: state.products.isLoaded,
      currentVolume: state.filters.volume,
      currentPrice: state.filters.price,
      currentSortBy: state.sorting.sortBy,
      currentSortOrder: state.sorting.sortOrder,
      cartItems: state.cart.items,
    }
  })

  // Фетчинг продуктов
  React.useEffect(() => {
    dispatch(fetchProducts(currentVolume, currentPrice, currentSortBy, currentSortOrder))
  } , [dispatch, currentVolume, currentPrice, currentSortBy, currentSortOrder]);

  // Обработчик сортировки
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
  }, [dispatch])

  // Обработчик фильтрации по объему
  const onSelectVolume = (volume) => {
    dispatch(setVolume(volume))
  }

  // Обработчик фильтрации по цене
  const onChangePrice = (price) => {
    dispatch(setPrice(price))
  }

  // Обработчик добавления в корзину
  const onAddToCart = (product) => {
    dispatch(addToCart(product))
  }

  // Сброс фильтров
  const onResetFilters = () => {
    dispatch(resetFilters())
  }

  // Конфигурация react-select
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

  const getCurrentSelectValue = () => {
    return options.find((option) => {
      return option.value === `${currentSortBy}${currentSortOrder ? '-' + currentSortOrder : ''}`
    })
  }

  return (
    <main className="container showcase">
      <h1 className="showcase__header">Питьевая вода</h1>
      <Select
        onChange={onSelectSortBy}
        defaultValue={getCurrentSelectValue()}
        options={options}
        isSearchable={false}
        styles={customStyles}
        theme={colorTheme}
      />
      {/* <AppliedFilters /> */}
      <Sidebar
        onSelectVolume={onSelectVolume}
        onChangePrice={onChangePrice}
        onResetFilters={onResetFilters}
      />
      {
        isLoaded
        ? <Catalog products={productItems} cartItems={cartItems} onAddToCart={onAddToCart} />
        : <LoaderComponent classes={['loader-products']}/>
      }
  </main>
  )
}

export default Showcase
