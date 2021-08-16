import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { RatingStar } from 'rating-star'
import { FaRegHeart, FaHeart } from 'react-icons/fa'
import axios from 'axios'
import WishListContext from '../../Contexts/wishList/WishListContext'
import CartContext from '../../Contexts/cart/CartContext'

const ProductPage = () => {
  const {productID} = useParams();
  
  const [productInfo, setProductInfo] = useState()
  const {wishList, addToWishList, removeFromWishList} = useContext(WishListContext)
  const {cart, addToCart} = useContext(CartContext)

  const API_KEY = process.env.REACT_APP_API_KEY_DETAILS
  const RAPIDAPI_KEY = process.env.REACT_APP_RAPIDAPI_KEY

  const getProductInfo = async () => {
    // const apiResponse = await axios(`https://api.rainforestapi.com/request?api_key=${API_KEY}&type=product&amazon_domain=amazon.com&asin=${item.asin}`)
    // console.log(apiResponse)
    // const productData = await apiResponse.data.product
    // setProductInfo(newData)
    const options = {
      url: `https://tvb-amazon-data-scraper.p.rapidapi.com/products/${productID}`,
      params: {api_key: API_KEY},
      headers: {
        'x-rapidapi-key': RAPIDAPI_KEY,
        'x-rapidapi-host': 'tvb-amazon-data-scraper.p.rapidapi.com'
      }
    };
    try {
      const apiResponse = await axios(options)
      const apiResult = await apiResponse.data
      setProductInfo(apiResult)
    } catch (error) {
      console.log(error)
    }
  }

  const addToWishListHandler = id => {
    addToWishList(id)
  }

  const removeFromWishListHandler = id => {
    removeFromWishList(id)
  }

  const addToCartHandler = id => {
    addToCart(id)
  }




  useEffect(()=>{
    getProductInfo()
  }, [productID])

  return (
    <section className='ProductPage'>
      <div className="header">
        <h2>Product title</h2>
        <div className='rating'>
          <RatingStar id={1} rating={4} colors={{ rear: '#bebebe', mask: '#b1310a'}} size={20} noBorder />
          <span>{5000} ratings</span>
        </div>
      </div>
      <div className='pruduct-container'>
        <div className='product-images'>
          <div className='main-image'>
            <img src="" alt="" />
          </div>
          <div className='other-images'>

          </div>
        </div>
        <div className='product-info'>
          <div className="price"></div>
          <div className='buttons'>
            <button onClick={()=>addToCartHandler(productID)}>Add to Basket</button>
            {
              wishList && wishList.includes(productID)
              ? <button>
                  <FaHeart onClick={()=>removeFromWishListHandler(productID)} />
                </button>
              : <button>
                  <FaRegHeart onClick={()=>addToWishListHandler(productID)} />
                </button>
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductPage
