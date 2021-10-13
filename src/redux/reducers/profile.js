const initialState = {
  info: {
    firstName: '',
    lastName: '',
    email: ''
  },
  orders: [],
  isLoaded: false
}

const profile = (state = initialState, action) => {
  switch (action.type) {
      case 'SET_PROFILE_DATA':
          return {
              ...state,
              info: {
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                email: action.payload.email
              },
              orders: action.payload.orders
          }
      case 'RESET_PROFILE_DATA':
          return initialState
      case 'SET_LOADED':
        return {
            ...state,
            isLoaded: action.payload,
        }
      default:
          return state;
  }
}

export default profile