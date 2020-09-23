import React, { useState, useEffect } from 'react'
import { Logo, ToggleButton } from './../../assets/img';
import './styles.scss';

const NavBar: React.FC<{}> = () => {
   
  const [isDark, setIsDark] = useState( false );

  const changeColors = () => {

    if ( window.scrollY > window.innerHeight * 0.85 ) {
      setIsDark( true );
    } else {
      setIsDark( false );
    }
  }

  useEffect(() => {

    window.addEventListener( 'scroll', changeColors );

    return () => {
      window.removeEventListener( 'scroll', changeColors );
    } 
  }, [])

  return (
    <div className={`_navBar ${ isDark ? '_dark' : '_light'}`}>
      <Logo className="_navBarLogo" width={"160"}/>
      <ToggleButton className="_navBarToggle" />
    </div>
  )
}

export default NavBar;