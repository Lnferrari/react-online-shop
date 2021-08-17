import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { RatingStar } from 'rating-star'
import { FaRegHeart, FaHeart } from 'react-icons/fa'
import WishListContext from '../../Contexts/wishList/WishListContext'
import CartContext from '../../Contexts/cart/CartContext'

const ProductCard = ({img, asin, title, rating, total_reviews, model, price, bestseller}) => {
  // const [hoveredProductId, setHoveredProductId] = useState()
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
      <Link to={`/product/${asin}`} className='LinkProductCard'>
        <div className='img-container'>
          <img src={img} alt={title} />
        </div>
        <div className='info-container'>
          <h3>{title}</h3>
          <div className='rating'>
            <RatingStar id={asin} rating={rating} colors={{ rear: '#bebebe', mask: '#b1310a'}} size={20} noBorder />
            <span>{total_reviews} reviews</span>
          </div>
          <div className='price'>
            {
              price.discount
              ? <>
                  <div className='current-price'>
                    $
                    <span>{price.current_price}</span>
                  </div>
                  <div className='before-price'>
                    $
                    <span>{price.before_price}</span>
                  </div>
                </>
              : <>
                  $
                  <span>{price}</span>
                </>
            }
          </div>
        </div>
      </Link>
      <button onClick={()=>addToCart(asin)}>Add to Basket</button>
    </div>
  )
}

export default ProductCard
