import React from 'react';
import SideBarState from './Contexts/sideBar/SideBarState';
import OnlineStore from './Components/index'
import './scss/main.scss'


const App = () => {

  return (
    <React.Fragment>
      <SideBarState>
        <OnlineStore />
      </SideBarState>
    </React.Fragment>
  );
}

export default App;
