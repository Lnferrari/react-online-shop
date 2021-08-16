import React from 'react';
import SearchState from './Contexts/search/SearchState';
import SideBarState from './Contexts/sideBar/SideBarState';
import OnlineStore from './Components/index'
import WishListState from './Contexts/wishList/WishListState';
import CartState from './Contexts/cart/CartState'
import './scss/main.scss'


const App = () => {

  return (
    <React.Fragment>
      <CartState>
        <SearchState>
          <SideBarState>
            <WishListState>
              <OnlineStore />
            </WishListState>
          </SideBarState>
        </SearchState>
      </CartState>
    </React.Fragment>
  );
}

export default App;
