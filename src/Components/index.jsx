import React, { useState, useEffect, useContext } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header/index'
import Home from './MainPage/Home';
import SideBarContext from './../Contexts/sideBar/SideBarContext';
import SearchContext from '../Contexts/search/SearchContext';
import CategoryPage from './MainPage/CategoryPage';
import ProductPage from './ProductPage/ProductPage'
import SearchedPage from './MainPage/SearchedPage';
import CheckOut from './MainPage/CheckOut';

// ==========================================================================================================================================
// it is not possible to continue using the API and therefore, I am using the same products on all pages (stored in localStorage only for testing purposes). 
// ==========================================================================================================================================

const Index = () => {
  const {isToggled} = useContext(SideBarContext)
  const {searchInput} = useContext(SearchContext)

  return (
    <React.Fragment>
      <Router>
        <Header />
        <Switch>
          <main className={isToggled ? 'inactive' : ''}>
            <Route path='/' exact component={Home} />
            <Route path='/search/:searchTerm' exact component={SearchedPage} />
            <Route path='/:categoryName' exact component={CategoryPage} />
            <Route path='/product/:productID' exact component={ProductPage} />
            <Route path='/basket/checkout' exact component={CheckOut} />
          </main>
        </Switch>
      </Router>
    </React.Fragment>
  )
}

export default Index
