import axios from 'axios';

export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload,
})

export const fetchProducts = (volume, price, sortBy, sortOrder) => (dispatch) => {
  dispatch(setLoaded(false))
  axios.get(`/api/products?${volume !== null ? `volume=${volume}` : ''}${price.lowest ? `&minPrice=${price.lowest}` : ''}${price.highest ? `&maxPrice=${price.highest}` : ''}&sortBy=${sortBy}${sortOrder !== null ? `&order=${sortOrder}` : ''}`).then(({data}) => {
    dispatch(setLoaded(true))
    dispatch(setProducts(data))
  })
}

export const setProducts = (items) => ({
  type: 'SET_PRODUCTS',
  payload: items
});
