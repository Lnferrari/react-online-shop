import React, { useContext } from 'react'
import {FaSearch} from 'react-icons/fa'
import axios from 'axios'
import SearchContext from '../../Contexts/search/SearchContext'
import { useHistory } from 'react-router-dom'

const SearchBar = () => {
  const {searchInput, setSearchInput, setProductList, MY_API_KEY, MY_API_KEY_2, RAPIDAPI_KEY} = useContext(SearchContext)
  const history = useHistory()

  const handleChange = e => {
    setSearchInput(e.target.value)
  }

  const handleSubmit = async e => {
    e.preventDefault()
    console.log('searching...')
    if (searchInput !== ''){
      const options = {
        url: `https://amazon-data-scraper-in-json.p.rapidapi.com/search/${searchInput}`,
        params: {api_key: MY_API_KEY_2},
        headers: {
          'x-rapidapi-key': RAPIDAPI_KEY,
          'x-rapidapi-host': 'amazon-data-scraper-in-json.p.rapidapi.com'
        }
      };
      const apiRespone = await axios(options)
      console.log(apiRespone)
      const apiResult = await apiRespone.data.results
      setProductList(apiResult)
      localStorage.setItem('searchedTerm', JSON.stringify(apiResult))
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
