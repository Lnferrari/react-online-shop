import React, {useState} from 'react'
import SideBarContext from './SideBarContext'

const SideBarState = props => {
  const [isToggled, setIsToggled] = useState(false)

  const handleToggleSideBar = () => {
    setIsToggled(!isToggled)
  }

  return (
    <SideBarContext.Provider value={{isToggled, handleToggleSideBar}}>
      {props.children}
    </SideBarContext.Provider>
  )
}

export default SideBarState
