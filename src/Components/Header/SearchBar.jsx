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
