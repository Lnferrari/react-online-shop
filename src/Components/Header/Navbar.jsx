import React from 'react'
import Logo from './Logo'
import SearchBar from './SearchBar'
import ShopCart from './ShopCart'

const Navbar = () => {
  return (
    <nav className='Navbar'>
      <Logo />
      <SearchBar />
      <div className='nav_options'>
        <div className='navbar_option'>
          <span className='navbar_option_firstLine'>
            Hello
          </span>
          <span className='navbar_option_secondLine'>
            Sign In
          </span>
        </div>
        <div className='navbar_option'>
          <span className='navbar_option_firstLine'>
            Returns
          </span>
          <span className='navbar_option_secondLine'>
            & Orders
          </span>
        </div>
        <ShopCart />
      </div>
    </nav>
  )
}

export default Navbar
