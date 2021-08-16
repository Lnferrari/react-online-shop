import React, { useEffect, useState, useReducer } from 'react'
import WishListContext from './WishListContext'
import WishListReducer from './WishListReducer'

const WishListState = ({children}) => {
  const initialState = localStorage.getItem('wishList') === null ? [] : JSON.parse(localStorage.getItem('wishList'))
  const [wishList, dispatch] = useReducer(WishListReducer, initialState)

  const addToWishList = id => {
    console.log(id);
    dispatch({
    type: 'ADD_TO_WISHLIST',
    payload: id
  })}

  const removeFromWishList = id => {
    dispatch({
      type: 'REMOVE_FROM_WISHLIST',
      payload: id
    })
  }

  const clearWishList = () => ({
    type: 'CLEAR_WISHLIST'
  })

  useEffect(()=>{
    localStorage.setItem('localWishList', JSON.stringify(wishList))
  }, [wishList])

  return (
    <WishListContext.Provider value={{ wishList, dispatch, addToWishList, removeFromWishList, clearWishList}}>
      {children}
    </WishListContext.Provider>
  )
}

export default WishListState
