import React, { useReducer, useEffect } from 'react';
import CartReducer from './CartReducer';
import CartContext from './CartContext'

const CartState = ({children}) => {
  const initialState = localStorage.getItem('wishList') === null ? [] : JSON.parse(localStorage.getItem('wishList'))
  const [cart, dispatch] = useReducer(CartReducer, initialState)

  const addToCart = product => ({
    type: 'ADD_TO_CART',
    payload: product
  })

  const decrementItemQuantity = product => ({
    type: 'DECREMENT_QUANTITY',
    payload: product
  })

  const removeFromCart = product => ({
    type: 'REMOVE_FROM_CART',
    payload: product
  })

  const clearCart = () => ({
    type: 'CLEAR_CART'
  })

  const checkOut = () => ({
    type: 'CHECKOUT'
  })

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
