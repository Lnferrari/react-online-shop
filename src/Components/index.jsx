import React, { useState, useEffect, useContext } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header/index'
import Home from './MainPage/Home';
import SideBar from './SideBar/SideBar';
import SideBarContext from './../Contexts/sideBar/SideBarContext';


const Index = () => {
  const {isToggled} = useContext(SideBarContext)

  return (
    <React.Fragment>
      <Router>
        <Header />
        {isToggled && <SideBar  />}
        <Switch>
          <main>
            <Route path='/' exact component={Home} />
            <Route />
            <Route />
          </main>
        </Switch>
      </Router>
    </React.Fragment>
  )
}

export default Index
