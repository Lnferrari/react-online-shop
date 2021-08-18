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
      {
        bestseller &&
        <span className='bestseller-label'>
          Best Seller
        </span>
      }
      <div className='wish'>
        {
          wishList && wishList.includes(asin)
          ? <FaHeart onClick={()=>removeFromWishList(asin)} size={25} />
          : <FaRegHeart onClick={()=>addToWishList(asin)} size={25} />
        }
      </div>
      <div className='wrapper'>
        <div className='img-container'>
          <Link to={`/product/${asin}`}>
            <img src={img} alt={title} />
          </Link>
        </div>
        <div className='info-container'>
          <h3>{title}</h3>
          <div className='rating'>
            <RatingStar id={asin} rating={rating} colors={{ rear: '#bebebe', mask: '#b1310a'}} size={20} noBorder />
            <span>
              {
                total_reviews
                ? total_reviews + ' reviews'
                : rating
              }
            </span>
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
          <button onClick={()=>addToCart(asin)}>
            Add to Basket
          </button>
        </div>      
      </div>
    </div>
  )
}

export default ProductCard
