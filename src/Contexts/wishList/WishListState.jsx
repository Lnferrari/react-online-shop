import React, { useEffect, useState, useReducer } from 'react'
import WishListContext from './WishListContext'
import WishListReducer from './WishListReducer'

const WishListState = ({children}) => {
  const initialState = localStorage.getItem('wishList') === null ? [] : JSON.parse(localStorage.getItem('wishList'))
  const [wishList, dispatch] = useReducer(WishListReducer)

  const addToWishList = product => ({
    type: 'ADD_TO_WISHLIST',
    payload: product
  })

  const removeFromWishLIst = product => ({
    type: 'REMOVE_FROM_WISHLIST',
    payload: product
  })

  const clearWishList = () => ({
    type: 'CLEAR_WISHLIST'
  })

  useEffect(()=>{
    localStorage.setItem('localWishList', JSON.stringify(wishList))
  }, [wishList])

  return (
    <WishListContext.Provider value={{ wishList, addToWishList, removeFromWishLIst, clearWishList}}>
      {children}
    </WishListContext.Provider>
  )
}

export default WishListState
