import React, { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import SearchContext from '../../Contexts/search/SearchContext'
import ProductCard from '../ProductCard/PruductCard'
import { useState } from 'react'

const CategoryPage = () => {
  const {categoryName} = useParams()
  const bestsellers = JSON.parse(localStorage.getItem('bestsellers'))
  const [categoryProducts, setCategoryProducts] = useState([])
  const {productList, productInfo, setProductInfo, MY_API_KEY, RAPIDAPI_KEY, PRODUCTS_API_KEY} = useContext(SearchContext)

  // const getCategoryProducts = async () => {
  //   const options = {
  //     url: 'https://amazon24.p.rapidapi.com/api/product',
  //     params: {categoryID: categoryName, country: 'US'},
  //     headers: {
  //       'x-rapidapi-key': PRODUCTS_API_KEY,
  //       'x-rapidapi-host': 'amazon24.p.rapidapi.com'
  //     }
  //   };
  //   const apiResponse = await axios(options)
  //   const apiResult = await apiResponse.data.docs
  //   apiResult.map(item => {

  //   })
  //   console.log(apiResult)
  //   setCategoryProducts(apiResult)
  // }

  const getProductData = async () => {
    let newData = []
    bestsellers.map(async item => {
      const options = {
        url: `https://tvb-amazon-data-scraper.p.rapidapi.com/products/${item.asin}`,
        params: {api_key: MY_API_KEY},
        headers: {
          'x-rapidapi-key': RAPIDAPI_KEY,
          'x-rapidapi-host': 'tvb-amazon-data-scraper.p.rapidapi.com'
        }
      };
      try {
        const apiResponse = await axios(options)
        const apiResult = await apiResponse.data
        newData = [apiResult, ...newData]
        setProductInfo(newData)
      } catch (error) {
        console.log(error)
      }
    })
  }

  // useEffect(() => {
  //   getCategoryProducts()
  // }, [])
  
  return (
    <section className='Category'>
      <h1>Category: {categoryName}</h1>
      {
        productInfo && productInfo.map(item => (
          <ProductCard key={item.product_information.ASIN} asin={item.product_information.ASIN} img={item.images[0]} title={item.name} rating={item.average_rating} total_reviews={item.total_reviews} model={item.model} price={item.pricing.slice(1)} />
        ))
      }
    </section>
  )
}

export default CategoryPage
