import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../../assets/logo.png'

const Logo = () => {
  return (
      <Link to='/' className='logo'>
          <img src={logo} alt="company logo" />
          online<br />store
      </Link>
  )
}

export default Logo
