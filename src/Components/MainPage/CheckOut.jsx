import axios from 'axios'
import React, { useState, useContext, useEffect } from 'react'
import CartContext from '../../Contexts/cart/CartContext'

const CheckOut = () => {
  const [currentBasket, setCurrentBasket] = useState([])
  const {cart, addToCart, decrementItemQuantity, removeFromCart, clearCart, checkOut} = useContext(CartContext)

  const API_KEY = process.env.REACT_APP_API_KEY_DETAILS
  const RAPIDAPI_KEY = process.env.REACT_APP_RAPIDAPI_KEY

  const getProductInfo = async () => {
    let basketData = []
    cart.map(async (item) => {
      const options = {
        url: `https://tvb-amazon-data-scraper.p.rapidapi.com/products/${item}`,
        params: {api_key: API_KEY},
        headers: {
          'x-rapidapi-key': RAPIDAPI_KEY,
          'x-rapidapi-host': 'tvb-amazon-data-scraper.p.rapidapi.com'
        }
      };
      try {
        const apiResponse = await axios(options)
        const apiResult = await apiResponse.data
        basketData = [...basketData, apiResult]
        setCurrentBasket(basketData)
      } catch (error) {
        console.log(error)
      }
    })
  }

  useEffect(() => {
    getProductInfo()
  }, [cart])

  const basketProductsMarkUp = currentBasket.map(item => (
    <div className='basketProduct'>

    </div>
  ))


  return (
    <section className='CheckOut'>
      <h1>Shopping Cart</h1>
      <span>{cart.length} Products</span>
    </section>
  )
}

export default CheckOut
