import React, { useContext } from 'react'
import {FaHeart} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import WishListContext from '../../Contexts/wishList/WishListContext'

const WishList = () => {
  const {wishList} = useContext(WishListContext)

  return (
    <Link to='/myaccount/wishlist' className='WishList'>
      <FaHeart size={36} />
      <span>{wishList.length}</span>
    </Link>
  )
}

export default WishList
