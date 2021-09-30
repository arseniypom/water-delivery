const initialState = {
  volume: null,
  price: {lowest: 0, highest: 1000000}
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
      default:
          return state;
  }
};

export default filters;