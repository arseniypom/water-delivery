import { combineReducers } from 'redux';

import filtersReducer from './filters';
import sortingReducer from './sorting';
import productsReducer from './products';
import cartReducer from './cart';

const rootReducer = combineReducers({
  filters: filtersReducer,
  sorting: sortingReducer,
  products: productsReducer,
  cart: cartReducer,
});

export default rootReducer;