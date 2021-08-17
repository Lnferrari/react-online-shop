import React, { useState } from 'react'
import axios from 'axios'
import SearchContext from './SearchContext'

const SearchState = props => {
  const [searchInput, setSearchInput] = useState('')
  const [productList, setProductList] = useState([])
  const [productInfo, setProductInfo] = useState([])

  const MY_API_KEY = process.env.REACT_APP_API_KEY_DETAILS;
  const RAPIDAPI_KEY = process.env.REACT_APP_RAPIDAPI_KEY;
  const PRODUCTS_API_KEY = process.env.REACT_APP_CATEGORYPRODUCTS_KEY

  const getProductInfo = async (asin) => {
    const options = {
      url: `https://amazon23.p.rapidapi.com/product-details`,
      params: {asin: asin, country: 'US'},
      headers: {
        'x-rapidapi-key': PRODUCTS_API_KEY,
        'x-rapidapi-host': 'amazon23.p.rapidapi.com'
      }
    };
    try {
      const apiResponse = await axios(options)
      const apiResult = await apiResponse.data.result[0]
      console.log(apiResult)
      // setProductInfo(apiResult)
      localStorage.setItem('productPage', JSON.stringify(apiResult))
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <SearchContext.Provider value={{ searchInput, setSearchInput, productList, setProductList, productInfo, setProductInfo, getProductInfo, MY_API_KEY, RAPIDAPI_KEY, PRODUCTS_API_KEY }}>
      {props.children}
    </SearchContext.Provider>
  )
}

export default SearchState
