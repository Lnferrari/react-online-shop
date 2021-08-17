import React, {useContext} from 'react'
import axios from 'axios';
import {FaUserCircle} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import SideBarContext from '../../Contexts/sideBar/SideBarContext';
import SearchContext from '../../Contexts/search/SearchContext';
import { useEffect } from 'react';

const SideBar = () => {
  const {isToggled} = useContext(SideBarContext)
  const {API_KEY} = useContext(SearchContext)
  const storedCategories = JSON.parse(localStorage.getItem('categories3'))

  const getCategories = async () => {
    const options = {
      url: 'https://amazon-product4.p.rapidapi.com/category/list',
      params: {country: 'US'},
      headers: {
        'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
        'x-rapidapi-host': 'amazon-product4.p.rapidapi.com'
      }
    };
    const apiResponse = await axios(options)
    let apiData = await apiResponse.data
    apiData = Object.keys(apiData).map(key => apiData[key])
    console.log(apiData)
    localStorage.setItem('categories3', JSON.stringify(apiData))
  };

  // useEffect(()=>{
  //   getCategories()
  // }, [])

  return (
    <div className={isToggled ? 'SideBar active' : 'SideBar'}>
      <div className='SideBar_user'>
        <FaUserCircle size={20} />
        <span>Hello, Sign in</span>
      </div>
      <div className="SideBar_categories">
        {storedCategories && storedCategories.map(category => (
          <Link to={`/category/${category.category}`} className="SideBar_category" key={category.category}>
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SideBar
