import React, {useState} from 'react'
import Navbar from './Navbar'
import SubNavbar from './SubNavbar'
import SideBar from '../SideBar/SideBar'

const Header = () => {

  return (
    <header>
      <Navbar />
      <SubNavbar />
      <SideBar />
    </header>
  )
}

export default Header
