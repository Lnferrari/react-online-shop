import React, {useState} from 'react'
import {FaSearch} from 'react-icons/fa'

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState('')

  const handleInputChange = e => {
    const search = e.target.value;
    setSearchInput(search)
  }

  const handleSubmit = e => {
    e.preventDefault()

    setSearchInput('')
  }

  return (
    <form className='SearchBar' onSubmit={handleSubmit}>
      <input type="text" onChange={handleInputChange} placeholder='Search...'/>
      <button><FaSearch /></button>
    </form>
  )
}

export default SearchBar
