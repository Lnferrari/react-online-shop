import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { RatingStar } from 'rating-star'
import { FaRegHeart, FaHeart } from 'react-icons/fa'
import WishListContext from '../../Contexts/wishList/WishListContext'
import CartContext from '../../Contexts/cart/CartContext'

const ProductCard = ({img, asin, title, rank, rating, total_rating, delivery, price}) => {
  // const [hoveredProductId, setHoveredProductId] = useState()
  const {wishList, addToWishList, removeFromWishList} = useContext(WishListContext)
  const {addToCart} = useContext(CartContext)

  return (
    <div className='ProductCard' asin={asin} rank={rank} >
      <div className='wish'>
        {
          wishList && wishList.includes(asin)
          ? <FaHeart onClick={()=>removeFromWishList(asin)} size={25} />
          : <FaRegHeart onClick={()=>addToWishList(asin)} size={25} />
        }
      </div>
      <Link to={`/product/${asin}`} className='LinkProductCard'>
        <div className='img-container'>
          <img src={img} alt={title} />
        </div>
        <div className='info-container'>
          <h3>{title}</h3>
          <div className='rating'>
            <RatingStar id={asin} rating={rating} colors={{ rear: '#bebebe', mask: '#b1310a'}} size={20} noBorder />
            <span>{total_rating} ratings</span>
          </div>
          <div className='price'>
            $
            <span>{price}</span>
          </div>
          {
            delivery &&
            <div className='delivery-date'>
              Get it
              <span className='bold'>{delivery}</span>
            </div>
          }
        </div>
      </Link>
      <button onClick={()=>addToCart(asin)}>Add to Basket</button>
    </div>
  )
}

export default ProductCard
