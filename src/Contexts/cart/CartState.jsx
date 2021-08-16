import React, { useReducer, useEffect } from 'react';
import CartReducer from './CartReducer';
import CartContext from './CartContext'

const CartState = ({children}) => {
  const initialState = localStorage.getItem('wishList') === null ? [] : JSON.parse(localStorage.getItem('wishList'))
  const [cart, dispatch] = useReducer(CartReducer, initialState)

  const addToCart = id => {
    dispatch({type: 'ADD_TO_CART', payload: id})
  }

  const decrementItemQuantity = id => {
    dispatch({type: 'DECREMENT_QUANTITY', payload: id})
  }

  const removeFromCart = id => {
    dispatch({type: 'REMOVE_FROM_CART', payload: id})
  }

  const clearCart = () => {
    dispatch({type: 'CLEAR_CART'})
  }

  const checkOut = () => {
    dispatch({type: 'CHECKOUT'})
  }

  useEffect(()=>{
    localStorage.setItem('localCart', JSON.stringify(cart))
  }, [cart])

  return (
    <CartContext.Provider value={{cart, addToCart, decrementItemQuantity, removeFromCart, clearCart, checkOut}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartState
