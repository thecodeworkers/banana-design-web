import React from 'react'
import { logo, toggleButton } from './../../assets/img';
import './styles.scss';

const NavBar: React.FC<{}> = () => {
  return (
    <div className="_navBar">
      <img className="_navBarLogo" src={ logo } alt="Logo"/>

      <img className="_navBarToggle" src={ toggleButton } />
    </div>
  )
}

export default NavBar;