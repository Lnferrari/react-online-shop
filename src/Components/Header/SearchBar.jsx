import React, { useContext } from 'react'
import {FaSearch} from 'react-icons/fa'
import axios from 'axios'
import SearchContext from '../../Contexts/search/SearchContext'
import { useHistory } from 'react-router-dom'

const SearchBar = () => {
  const {searchInput, setSearchInput, setProductList, relatedSearches, setRelatedSearches, API_KEY} = useContext(SearchContext)
  const bestsellers = JSON.parse(localStorage.getItem('bestsellers'))
  const history = useHistory()

  const handleChange = e => {
    setSearchInput(e.target.value)
  }

  const handleSubmit = async e => {
    e.preventDefault()
    console.log('searching...')
    if (searchInput !== ''){
      const apiResponse = await axios(`https://api.rainforestapi.com/request?api_key=${API_KEY}&type=search&amazon_domain=amazon.com&search_term=${searchInput}`)
      const apiResult = await apiResponse.data
      setProductList(apiResult.search_results)
      setRelatedSearches(apiResult.related_searches)
      // const options = {
      //   method: 'GET',
      //   url: 'https://tvb-amazon-data-scraper.p.rapidapi.com/search/MacBook%20Air',
      //   params: {api_key: 'a438be699e1c4f2b1e62ff649419355b'},
      //   headers: {
      //     'x-rapidapi-key': '9515fb6270mshf72d632d3de48a7p1c263djsnec4ad8df2195',
      //     'x-rapidapi-host': 'tvb-amazon-data-scraper.p.rapidapi.com'
      //   }
      // };
      // const apiRespone = await axios(options)
      // const apiResult = await apiRespone.data
      // console.log(apiResult)
      // setProductList(bestsellers)
      // setRelatedSearches(['possibility', 'possibility', 'possibility', 'possibility', 'possibility', 'possibility', ])
    }
    history.push(`/search/${searchInput}`)
  }

  return (
    <form className='SearchBar' onSubmit={handleSubmit}>
      <input type="text" value={searchInput} onChange={handleChange} placeholder='Search...'/>
      <button><FaSearch /></button>
    </form>
  )
}

export default SearchBar
