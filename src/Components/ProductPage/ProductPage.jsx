import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { RatingStar } from 'rating-star'
import { FaRegHeart, FaHeart, FaShoppingBag } from 'react-icons/fa'
import axios from 'axios'
import WishListContext from '../../Contexts/wishList/WishListContext'
import CartContext from '../../Contexts/cart/CartContext'
import SearchContext from '../../Contexts/search/SearchContext'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

const ProductPage = () => {
  const {productID} = useParams();
  // const [productInfo, setProductInfo] = useState()
  const {productList, setProductList, productInfo, setProductInfo, getProductInfo, MY_API_KEY, RAPIDAPI_KEY, PRODUCTS_API_KEY} = useContext(SearchContext)
  const {wishList, addToWishList, removeFromWishList} = useContext(WishListContext)
  const {addToCart} = useContext(CartContext)
  const localProduct = JSON.parse(localStorage.getItem('productPage'))
  console.log(localProduct)
  // const getProductInfo = async () => {
  //   const options = {
  //     url: `https://tvb-amazon-data-scraper.p.rapidapi.com/products/${productID}`,
  //     params: {api_key: MY_API_KEY},
  //     headers: {
  //       'x-rapidapi-key': RAPIDAPI_KEY,
  //       'x-rapidapi-host': 'tvb-amazon-data-scraper.p.rapidapi.com'
  //     }
  //   };
  //   try {
  //     const apiResponse = await axios(options)
  //     const apiResult = await apiResponse.data
  //     console.log()
  //     setProductInfo(apiResult)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // useEffect(()=>{
  //   getProductInfo(productID)
  // }, [productID])

  // const {name, product_information, full_description, pricing, images, product_category, average_rating, small_description, total_reviews, model, customization_options} = productInfo && productInfo

  const productImages = localProduct[0].images.map((img, i) => (
    <div key={i}>
      <img src={img} alt="product image" />
    </div>
  ))

  const productPageMarkUp = (
    <div className='product-wrapper'>
      <div className="product-header">
        <h2>{localProduct[0].title}</h2>
        <div className='rating'>
          <RatingStar id={productID} rating={localProduct[0].reviews.rating} colors={{ rear: '#bebebe', mask: '#b1310a'}} size={20} noBorder />
          <span>{localProduct[0].reviews.total_reviews} reviews</span>
        </div>
      </div>
      {/* <div className='product-category'>{localProduct[0].product_category}</div> */}
      <div className='product-container'>
        <div className="product-images">
          <Carousel autoPlay={true} showStatus={false}>
            {productImages}
          </Carousel>
        </div>
        <div className='product-info'>
          <div className="price">$ <span>{localProduct[0].pricing || '869'}</span>
          </div>
          <div className='inStock'>
            {
              localProduct[0].item_available
              ? (<>
                  <div className='available'></div>
                  In Stock
                </>)
              : (<>
                  <div className='unavailable'></div>
                  Currently unavailable
                </>)
            }
          </div>
          <div className='buttons'>
            <button className='basket' onClick={()=>addToCart(productID)}>
              <div>
                <FaShoppingBag size={18} />
              </div>
              Add to Basket
            </button>
            <button className='wish'>
              {
                wishList && wishList.includes(productID)
                ? <div onClick={()=>removeFromWishList(productID)}>
                    <FaHeart size={25} />
                  </div>
                : <div onClick={()=>addToWishList(productID)} >
                    <FaRegHeart size={25} />
                  </div>
              }
            </button>
          </div>
          <div className='aboutItem'>
            <h4>About this item</h4>
            <ul>
              {
                localProduct[0].feature_bullets.map((item, i) => (
                  <li key={i}>{item}</li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <section className='ProductPage'>
      {productPageMarkUp}
    </section>
  )
}

export default ProductPage
