import axios from 'axios'
import React, { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../../Contexts/cart/CartContext'
import { MdDeleteForever } from 'react-icons/md'
import { BiPlus, BiMinus} from 'react-icons/bi'

const Basket = () => {
  const [currentBasket, setCurrentBasket] = useState([])
  const {cart, addToCart, decrementItemQuantity, removeFromCart, checkOut} = useContext(CartContext)
  const localBasket = JSON.parse(localStorage.getItem('currentBasket'))

  const RAPIDAPI_KEY = process.env.REACT_APP_RAPIDAPI_KEY

  const getProductInfo = async () => {
    let basketData = []
    cart.map(async (item) => {
      const options = {
        url: 'https://amazon-product-price-data.p.rapidapi.com/product',
        params: {asins: item.asin, locale: 'US'},
        headers: {
          'x-rapidapi-key': RAPIDAPI_KEY,
          'x-rapidapi-host': 'amazon-product-price-data.p.rapidapi.com'
        }
      };
      try {
        const apiResponse = await axios(options)
        const apiResult = await apiResponse.data[0]
        basketData = [...basketData, {...apiResult, quantity: item.quantity}]
        setCurrentBasket(basketData)
      } catch (error) {
        console.log(error)
      }
    })
  }

  useEffect(() => {
    getProductInfo()
  }, [])

  const basketProductsMarkUp = currentBasket && currentBasket.map(item => (
      <div className='basketProduct' key={item.asin}>
        <div className='product-image'>
          <img src={item.image_url} alt="product image" />
        </div>
        <div className='product-info'>
          <div className="title">
            {item.product_name}
          </div>
          <div className="price">
            {
              item.quantity > 1 &&
              <span className='total'>
                $ {item.quantity * item.current_price}
              </span>
            }
            <span className='unitPrice'>
              <span>unit price: </span>
              $ {item.current_price}
            </span>
          </div>
          <div className='basket-buttons'>
            <div className='button-wrapper'>
              <button onClick={()=>removeFromCart(item.asin)}>
                <MdDeleteForever size={10}/>
              </button>
            </div>
            <div>
              <div className='button-wrapper'>
                <button onClick={()=>addToCart(item.asin)}>
                  <BiPlus size={10}/>
                </button>
              </div>
              <div className='button-wrapper'>
                <button onClick={()=>decrementItemQuantity(item.asin)}>
                  <BiMinus size={10}/>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  )

  const totalProducts = cart && cart.reduce((total, item) => {
    total += item.quantity
    return total
  }, 0)

  return (
    <section className='Basket'>
      <div className='basket-header'>
        <h1>Shopping Cart</h1>
        <div>
          <span>{totalProducts} </span>
          <span>Products</span>
        </div>
      </div>
      <div className='basket-content'>
        <div className='basket-products'>
          {basketProductsMarkUp}
        </div>
        <div className='basket-checkout'>
          <div className='row'>
            <h3>Summary</h3>
            <span>Vouchers can be added in the payment step</span>
          </div>
          <div className='row'>
            <div>
              <span>Subtotal</span>
              <span>$ 5000</span>
            </div>
            <div>
              <span>Delivery costs</span>
              <span>$ 35</span>
            </div>
            <div>
              <span>Discount</span>
              <span>$ 60</span>
            </div>
          </div>
          <div className='row'>
            <div>
              <h3>Total <span>$ 4975</span></h3>
            </div>
            <button className='checkout' onClick={()=> {alert('Thanks for shopping with us!'); checkOut()}}>
              <Link to='/'>Go to checkout</Link>
            </button>
            <button className='continueShopping'>
              <Link to='/'>continue shopping</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Basket
