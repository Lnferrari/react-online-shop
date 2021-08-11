import React, { useContext } from 'react'
import SideBarContext from '../../Contexts/sideBar/SideBarContext'
import {FaBars, FaTimes} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const SubNavbar = () => {
  const {isToggled, handleToggleSideBar} = useContext(SideBarContext)

  return (
    <div className='SubNavbar'>
      <div className='burgerMenu' onClick={handleToggleSideBar}>
        {isToggled ? <FaTimes size={20} /> : <FaBars size={20}/>}
        <span>All</span>
      </div>
      <div className="links-container">
        <Link to='/' className='link'>
          Today's Deals
        </Link>
        <Link to='/' className='link'>
          Customer Service
        </Link>
        <Link to='/' className='link'>
          Gift Cards
        </Link>
        <Link to='/' className='link'>
          Registry
        </Link>
        <Link to='/' className='link'>
          Sell
        </Link>
      </div>
      <div></div>
    </div>
  )
}

export default SubNavbar
