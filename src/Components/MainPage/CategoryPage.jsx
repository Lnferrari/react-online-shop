import React, { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import SearchContext from '../../Contexts/search/SearchContext'
import ProductCard from '../ProductCard/PruductCard'

const CategoryPage = () => {
  const {categoryName} = useParams()
  const bestsellers = JSON.parse(localStorage.getItem('bestsellers'))
  const {productList, productInfo, setProductInfo} = useContext(SearchContext)
  

  const API_KEY = process.env.REACT_APP_API_KEY_DETAILS
  const RAPIDAPI_KEY = process.env.REACT_APP_RAPIDAPI_KEY

  const getProductData = async () => {
    let newData = []
    bestsellers.map(async item => {
      const options = {
        url: `https://tvb-amazon-data-scraper.p.rapidapi.com/products/${item.asin}`,
        params: {api_key: API_KEY},
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
  //   getProductData()
  // }, [bestsellers])
  
  return (
    <section className='Category'>
      <h1>Category: {categoryName}</h1>
      {
        bestsellers && bestsellers.map(item => (
          <ProductCard key={item.asin} asin={item.asin} img={item.image} title={item.title} rank={item.rank} rating={item.rating} total_rating={item.ratings_total} category={item.current_category.id} price={item.price.value} />
        ))
      }
    </section>
  )
}

export default CategoryPage
