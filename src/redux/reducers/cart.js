const initialState = {
  items: {},
  totalPrice: 0,
  itemsCount: 0
}

const getTotalPrice = arr => {
  return arr.reduce((acc, currItem) => acc + currItem.price, 0);
}

const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const currentCartItems = !state.items[action.payload.id]
      ? [action.payload]
      : [...state.items[action.payload.id].items, action.payload];
      const newItems = {
        ...state.items,
        [action.payload.id]: {
          items: currentCartItems,
          totalPrice: getTotalPrice(currentCartItems),
        }
      }
      const allCartItemsArray = [].concat.apply([], Object.values(newItems).map((obj) => obj.items));
      return {
        ...state,
        items: newItems,
        totalPrice: getTotalPrice(allCartItemsArray),
        itemsCount: allCartItemsArray.length,
      }
    }
    case 'CLEAR_CART': {
      return initialState
    }
    case 'REMOVE_CART_ITEM': {
      const newItems = {
        ...state.items
      }
      const deletedItemPrice = newItems[action.payload].totalPrice;
      const deletedItemCount = newItems[action.payload].items.length;
      delete newItems[action.payload];
      return {
        ...state,
        items: newItems,
        totalPrice: state.totalPrice - deletedItemPrice,
        itemsCount: state.itemsCount - deletedItemCount,
      }
    }
    case 'PLUS_CART_ITEM': {
      const newObjItems = [
        ...state.items[action.payload].items,
        state.items[action.payload].items[0]
      ]

      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newObjItems,
          totalPrice: getTotalPrice(newObjItems)
        }
      }
      const allCartItemsArray = [].concat.apply([], Object.values(newItems).map((obj) => obj.items));

      return {
        ...state,
        items: newItems,
        totalPrice: getTotalPrice(allCartItemsArray),
        itemsCount: allCartItemsArray.length
      }
    }
    case 'MINUS_CART_ITEM': {
      const oldObjItems = state.items[action.payload].items;
      const newObjItems = oldObjItems.length > 1 ? oldObjItems.slice(1) : oldObjItems;

      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newObjItems,
          totalPrice: getTotalPrice(newObjItems)
        }
      }
      const allCartItemsArray = [].concat.apply([], Object.values(newItems).map((obj) => obj.items));

      return {
        ...state,
        items: newItems,
        totalPrice: getTotalPrice(allCartItemsArray),
        itemsCount: allCartItemsArray.length
      }
    }
    default:
      return state;
  }
};

export default cart;