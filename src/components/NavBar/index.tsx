import React from 'react'
import { logo } from './../../assets/img';
import './styles.scss';

const NavBar: React.FC<{}> = () => {
  return (
    <div className="_navBar">
      <img className="_navBarLogo" src={ logo } alt="Logo"/>
    </div>
  )
}

export default NavBar;