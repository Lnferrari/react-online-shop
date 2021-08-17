import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { RatingStar } from 'rating-star'
import { FaRegHeart, FaHeart } from 'react-icons/fa'
import SearchContext from '../../Contexts/search/SearchContext'
import WishListContext from '../../Contexts/wishList/WishListContext'
import CartContext from '../../Contexts/cart/CartContext'

const ProductCard = ({img, asin, title, rank, rating, total_rating, delivery, price}) => {
  const [hoveredProductId, setHoveredProductId] = useState()
  const {productList, productInfo, setProductInfo} = useContext(SearchContext)
  const {wishList, addToWishList, removeFromWishList} = useContext(WishListContext)
  const {cart, addToCart} = useContext(CartContext)

  // const getProductInfo = async () => {
  //   let newData = []
  //   productList.map(async(item) => {
  //     const apiResponse = await axios(`https://api.rainforestapi.com/request?api_key=${API_KEY}&type=product&amazon_domain=amazon.com&asin=${item.asin}`)
  //     console.log(apiResponse)
  //     const productData = await apiResponse.data.product
  //     newData = [...newData, productData]
  //     setProductInfo(newData)
  //   })
  // }


  // const handleMouseOver = e => {
  //   setHoveredProductId(Number(e.target.id))
  //   console.log(e.target.id)
  // }

  // const handleMouseOut = () => {
  //   setHoveredProductId(null)
  // }

  // <ProductCard key={item.asin} asin={item.asin} img={item.image} title={item.title} rank={item.rank} rating={item.rating} total_rating={item.ratings_total} category={item.current_category.id} price={item.price.value} />

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
