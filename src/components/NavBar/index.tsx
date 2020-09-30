import React, { useState, useEffect, useRef } from 'react'
import { Logo, ToggleButton } from './../../assets/img';
import navBarProps from './interface';
import { gsapMenuStart } from '../../components/Menu/gsap';
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
    <div onClick={gsapMenuStart} className={`_navBar ${ isDark ? '_dark' : '_light'}`}>
      <Logo className="_navBarLogo"/>

<div className="_navBarToggle" >
<ToggleButton/>
</div>

    </div>
  )
}

export default NavBar;
