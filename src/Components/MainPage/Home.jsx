import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ProductCard from '../ProductCard/PruductCard'
import DealCard from './DealCard'
import {FaRegStar, FaRegHeart, FaHeart} from 'react-icons/fa'

const Home = () => {
  const storedCategories = JSON.parse(localStorage.getItem('categories'))
  const bestsellers = JSON.parse(localStorage.getItem('bestsellers'))
  const [dealOfTheDay, setDealOfTheDay] = useState([])
  const [infoDeals, setInfoDeals] = useState([])

  const API_KEY = process.env.REACT_APP_API_KEY
  
  const API_URL = process.env.REACT_APP_API_URL

  const fetchDeals = async (type, catID) => {
    // const apiResponse = await axios(`https://api.rainforestapi.com/request?api_key=${API_KEY}&type=deals&amazon_domain=amazon.com&deal_types=best_deal`)
    const apiResponse = await axios(`https://api.rainforestapi.com/request?api_key=${API_KEY}&type=deals&amazon_domain=amazon.com&deal_types=deal_of_the_day`)
    const apiResult = await apiResponse.data.deals_results
    setDealOfTheDay(apiResult)
  }

  const getProductInfo = async () => {
    let newData = []
    dealOfTheDay.map(async(item) => {
      const apiResponse = await axios(`https://api.rainforestapi.com/request?api_key=${API_KEY}&type=product&amazon_domain=amazon.com&asin=${item.asin}`)
      console.log(apiResponse)
      const productData = await apiResponse.data.product
      newData = [...newData, productData]
      setInfoDeals(newData)
    })
  }


  // useEffect(()=>{
  //   getProductInfo()
  // }, [dealOfTheDay])
  
  // const dealsMarkUp = productsData && productsData.map(item => (
  //   <DealCard key={item.asin} asin={item.asin} img={item.image} title={item.title} rating={item.rating} total_rating={item.ratings_total} price={{ dealPrice: item.deal_price_lower.value, listPrice: item.list_price_lower.value }} freeShipping={item.free_shipping} />
  // ))

  // useEffect(() => {
  //   fetchBestSellers()
  //   // console.log(bestSellers)
  // }, [])

  return (
    <section className='Home'>
      {/* {
        dealsMarkUp &&
        (<div className='deal-row'>
          <h2>Deals of the Day</h2>
          <div className='deal-products'>
            {dealsMarkUp}
          </div>
        </div>)
      } */}
      {
        bestsellers.map(item => (
          <ProductCard key={item.asin} asin={item.asin} img={item.image} title={item.title}
          rank={item.rank} rating={item.rating} total_rating={item.ratings_total}
          category={item.current_category.id} price={item.price.value} />
        ))
      }
    </section>
  )
}

export default Home
