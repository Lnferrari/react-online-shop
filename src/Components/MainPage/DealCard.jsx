import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FaRegHeart, FaHeart } from 'react-icons/fa'
import { RatingStar } from 'rating-star'
import WishListContext from '../../Contexts/wishList/WishListContext'
import CartContext from '../../Contexts/cart/CartContext'

const DealCard = ({asin, img, title, rating, total_rating, price, freeShipping}) => {
  const {wishList, addToWishList, removeFromWishList} = useContext(WishListContext)
  const {addToCart} = useContext(CartContext)

  return (
    <div className='ProductCard' asin={asin}>
        <div className='wish'>
          {
            wishList && wishList.includes(asin)
            ? <FaHeart onClick={()=>removeFromWishList(asin)} size={25} />
            : <FaRegHeart onClick={()=>addToWishList(asin)} size={25} />
          }
        </div>
        <Link to={`/product/${asin}`}>
        <div className='img-container'>
          <img src={img} alt={title} />
        </div>
        <div className='info-container'>
          <h3>{title}</h3>
          <div className='rating'>
            <RatingStar id={asin} rating={rating} colors={{ rear: '#bebebe', mask: '#b1310a'}} size={18} noBorder />
            <span>{total_rating} ratings</span>
          </div>
          <div className='price'>
            $
            <span>{price}</span>
          </div>
          <div className='delivery-date'>
            Get it
            <span className='bold'></span>
          </div>
        </div>
    </Link>
        <button onClick={()=>addToCart(asin)}>Add to Basket</button>
      </div>
  )
}

export default DealCard
