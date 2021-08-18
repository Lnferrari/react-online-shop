import SearchState from "../search/SearchState"

const CartReducer = (state, action) => {
  const product = action.payload;
  switch (action.type) {
    case 'ADD_TO_CART':
      return state.find(item => item.asin === product)
        ? state.map(item => item.asin === product
          ? {
              ...item,
              quantity: item.quantity + 1
            }
          : item)
        : [...state, { asin: product, quantity: 1 }]
    case 'REMOVE_FROM_CART':
      return state.filter(item => item.asin !== product)
    case 'DECREMENT_QUANTITY':
      return state.find(item => item.asin === product)?.quantity === 1
        ? state.filter(item => item.asin !== product)
        : state.map(item => item.asin === product
          ? {
             ...item,
             quantity: item.quantity - 1
            }
          : item)
    case 'CLEAR_CART':
      return []
    case 'CHECKOUT':
      return []
    default:
      return state;
  }
}

export default CartReducer