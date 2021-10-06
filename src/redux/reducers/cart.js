const initialState = {
  items: {},
  totalPrice: 0
}

const getTotalCartPrice = items => {
  return Object.values(items).reduce((acc, currItem) => {
    return acc + currItem.itemInfo.currentPrice * currItem.itemQuantity
  }, 0)
}

const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      let newItems;
      if (state.items[action.payload.id]) {
        newItems = {
          ...state.items,
          [action.payload.id]: {
            itemInfo: state.items[action.payload.id].itemInfo,
            itemQuantity: ++state.items[action.payload.id].itemQuantity
          }
        }
      } else {
        newItems = {
          ...state.items,
          [action.payload.id]: {
            itemInfo: action.payload.info,
            itemQuantity: 1
          }
        }
      }

      return {
        ...state,
        items: newItems,
        totalPrice: getTotalCartPrice(newItems),
      }
    }
    case 'CLEAR_CART': {
      return initialState
    }
    case 'REMOVE_CART_ITEM': {

    }
    case 'PLUS_CART_ITEM': {

    }
    case 'MINUS_CART_ITEM': {

    }
    default:
      return state;
  }
};

export default cart;