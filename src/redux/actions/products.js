import axios from 'axios';

export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload,
})

export const fetchProducts = (volume, price, sortBy, sortOrder) => (dispatch) => {
  dispatch(setLoaded(false))
  axios.get(`/api/products?${volume !== null ? `volume=${volume}` : ''}&minPrice=${price[0]}&maxPrice=${price[1]}&sortBy=${sortBy}&${sortOrder !== null ? `order=${sortOrder}` : ''}`).then(({data}) => {
    dispatch(setProducts(data))
  })
}

export const setProducts = (items) => ({
  type: 'SET_PRODUCTS',
  payload: items
});
