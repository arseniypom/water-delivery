const initialState = {
  sortBy: 'default',
  sortOrder: null
}

const sorting = (state = initialState, action) => {
  switch (action.type) {
      case 'SET_SORT_BY_DEFAULT':
        return {
            ...state,
            sortBy: 'default',
            sortOrder: null
        }
      case 'SET_SORT_BY_PRICE_ASC':
          return {
              ...state,
              sortBy: 'price',
              sortOrder: 'asc'
          }
      case 'SET_SORT_BY_PRICE_DESC':
        return {
            ...state,
            sortBy: 'price',
            sortOrder: 'desc'
        }
      default:
          return state;
  }
};

export default sorting;