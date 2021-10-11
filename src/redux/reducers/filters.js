const initialState = {
  volume: null,
  price: {lowest: '', highest: ''}
}

const filters = (state = initialState, action) => {
  switch (action.type) {
      case 'SET_VOLUME':
          return {
              ...state,
              volume: action.payload
          }
      case 'SET_PRICE':
          return {
              ...state,
              price: action.payload
          }
      case 'RESET_FILTERS':
          return initialState
      default:
          return state;
  }
};

export default filters;