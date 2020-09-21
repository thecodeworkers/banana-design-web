import React from 'react'
import { logo } from './../../assets/img';

const NavBar: React.FC<{}> = () => {
  return (
    <div className="navigation">
      <img src={ logo } alt="Logo"/>
    </div>
  )
}

export default NavBar;