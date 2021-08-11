import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {FaUserCircle} from 'react-icons/fa'
import {Link} from 'react-router-dom'

const SideBar = () => {
  const [categories, setCategories] = useState([])
  const fetchData = async () => {
    const options = {
      method: 'GET',
      url: 'https://amazon24.p.rapidapi.com/api/category',
      params: {country: 'US'},
      headers: {
        'x-rapidapi-key': '9515fb6270mshf72d632d3de48a7p1c263djsnec4ad8df2195',
        'x-rapidapi-host': 'amazon24.p.rapidapi.com'
      }
    };

    const res = await axios(options);
    setCategories(res.data)
  }

  useEffect(()=>{
    fetchData()
  }, [])

  return (
    <div className='SideBar'>
      <div className='SideBar_user'>
        <FaUserCircle size={20} />
        <span>Hello, Sign in</span>
      </div>
      <div className="SideBar_categories">
        {categories.map(category => (
          <Link to={`/category/${category.id}`} className="SideBar_category" key={category.id}>
            {category.name}
          </Link>
        ))}
        {/* <div className="SideBar_category">
          <Link>Amazon Devices</Link>
        </div>
        <div className="SideBar_category">
          <Link>Apps & Games</Link>
        </div>
        <div className="SideBar_category">
          <Link>Beauty & Personal Care</Link>
        </div>
        <div className="SideBar_category">
          <Link>Books</Link>
        </div>
        <div className="SideBar_category">
          <Link>Cds & Vinyl</Link>
        </div>
        <div className="SideBar_category">
          <Link>Cell Phones & Accesories</Link>
        </div>
        <div className="SideBar_category">
          <Link>Amazon Explore</Link>
        </div>
        <div className="SideBar_category">
          <Link>Computers</Link>
        </div>
        <div className="SideBar_category">
          <Link>Courses</Link>
        </div>
        <div className="SideBar_category">
          <Link>Digital Music</Link>
        </div>
        <div className="SideBar_category">
          <Link>Electronics</Link>
        </div>
        <div className="SideBar_category">
          <Link>Garden & Outdoor</Link>
        </div>
        <div className="SideBar_category">
          <Link>Gift Cards</Link>
        </div>
        <div className="SideBar_category">
          <Link>Home & Kitchen</Link>
        </div>
        <div className="SideBar_category">
          <Link>Kindle Store</Link>
        </div>
        <div className="SideBar_category">
          <Link>Movies & TV</Link>
        </div>
        <div className="SideBar_category">
          <Link>Musical Instruments</Link>
        </div>
        <div className="SideBar_category">
          <Link>Office Products</Link>
        </div>
        <div className="SideBar_category">
          <Link>Pet Supplies</Link>
        </div>
        <div className="SideBar_category">
          <Link>Prime Video</Link>
        </div>
        <div className="SideBar_category">
          <Link>Smart Home</Link>
        </div>
        <div className="SideBar_category">
          <Link>Software</Link>
        </div>
        <div className="SideBar_category">
          <Link>Sports &  Outdoors</Link>
        </div>
        <div className="SideBar_category">
          <Link>Toys & Games</Link>
        </div>
        <div className="SideBar_category">
          <Link>Vehicles</Link>
        </div>
        <div className="SideBar_category">
          <Link>Video Games</Link>
        </div> */}
      </div>
    </div>
  )
}

export default SideBar
