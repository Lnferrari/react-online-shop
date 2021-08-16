import React, { useState } from 'react'
import SearchContext from './SearchContext'

const SearchState = props => {
  const [searchInput, setSearchInput] = useState('')
  const [productList, setProductList] = useState([])
  const [productInfo, setProductInfo] = useState([])
  const [relatedSearches, setRelatedSearches] = useState([])

  const API_KEY = process.env.REACT_APP_API_KEY;

  return (
    <SearchContext.Provider value={{searchInput, setSearchInput, productList, setProductList, productInfo, setProductInfo, relatedSearches, setRelatedSearches, API_KEY }}>
      {props.children}
    </SearchContext.Provider>
  )
}

export default SearchState
