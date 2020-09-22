import React from 'react'
import { Logo, ToggleButton } from './../../assets/img';
import './styles.scss';

const NavBar: React.FC<{}> = () => {
  return (
    <div className="_navBar">
      <Logo width={"160"}/>

      <ToggleButton className="_navBarToggle" />
    </div>
  )
}

export default NavBar;