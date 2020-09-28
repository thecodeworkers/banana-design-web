import React, { useState, useEffect, useRef } from 'react'
import { Logo, ToggleButton } from './../../assets/img';
import navBarProps from './interface';
import './styles.scss';


const NavBar: React.FC<navBarProps> = ({ reference }) => {
   
  const [isDark, setIsDark] = useState( false );

  const defaultChangeColorsPoint = window.innerHeight * 0.7;
    
  
  const changeColors = () => {

    const changeColorsPoint = reference 
      ? reference.current.clientHeight
      : defaultChangeColorsPoint;

    if ( window.scrollY > changeColorsPoint ) {
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
      <Logo className="_navBarLogo"/>
      <ToggleButton className="_navBarToggle" />
    </div>
  )
}

export default NavBar;