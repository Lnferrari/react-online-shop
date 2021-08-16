const WishListReducer = (state, action) => {
  const product = action.payload;

  switch(action.type){
    case 'ADD_TO_WISHLIST':
      return [product, ...state]
    case 'REMOVE_FROM_WISHLIST':
      return state.filter(item => item !== product)
    case 'CLEAR_WISHLIST':
      return []
    default:
      return state
  }
}

export default WishListReducer
