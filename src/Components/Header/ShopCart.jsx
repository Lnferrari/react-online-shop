import React, { useContext } from 'react'
import {FaShoppingBag} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import CartContext from '../../Contexts/cart/CartContext'

const ShopCart = () => {
  const {cart} = useContext(CartContext)
  
  return (
    <Link to='/basket/checkout' className='Cart'>
      <FaShoppingBag size={36} />
      <span>{cart.length}</span>
    </Link>
  )
}

export default ShopCart
