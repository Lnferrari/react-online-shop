import React, {useState} from 'react'
import {FaShoppingBag} from 'react-icons/fa'

const ShopCart = () => {
  const [cart, setCart] = useState([])
  
  return (
    <div className='Cart'>
      <FaShoppingBag size={40} />
      <span>{cart.length}</span>
    </div>
  )
}

export default ShopCart
