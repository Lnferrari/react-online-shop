import React, {useContext} from 'react'
import axios from 'axios';
import {FaUserCircle} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import SideBarContext from '../../Contexts/sideBar/SideBarContext';
import SearchContext from '../../Contexts/search/SearchContext';

const SideBar = () => {
  const {isToggled} = useContext(SideBarContext)
  const {API_KEY} = useContext(SearchContext)
  const storedCategories = JSON.parse(localStorage.getItem('categories2'))

  const getCategories = async () => {
    const apiResponse = await axios(`https://api.rainforestapi.com/categories?api_key=${API_KEY}&amazon_domain=amazon.com&type=bestsellers&bestsellers_type=bestsellers`)
    const apiData = await apiResponse.data.categories
    console.log(apiData)
    localStorage.setItem('categories2', JSON.stringify(apiData))
  };

  return (
    <div className={isToggled ? 'SideBar active' : 'SideBar'}>
      <div className='SideBar_user'>
        <FaUserCircle size={20} />
        <span>Hello, Sign in</span>
      </div>
      <div className="SideBar_categories">
        {storedCategories && storedCategories.map(category => (
          <Link to={`/${category.name}`} className="SideBar_category" key={category.id} id={category.id}>
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SideBar
