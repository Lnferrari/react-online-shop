import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../../assets/logo.png'

const Logo = () => {
  return (
      <Link to='/react-online-shop' className='logo'>
          <img src={logo} alt="company logo" />
          mercado<br />libre
      </Link>
  )
}

export default Logo
