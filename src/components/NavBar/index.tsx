import React, { useState, useEffect, useRef } from 'react'
import { Logo, ToggleButton } from './../../assets/img';
import navBarProps from './interface';
import { gsapStart, gsapEnd } from '../../components/Menu/gsap';
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

	const	[open, SetOpen] = useState(true)
	const activeMenu= () => {
		if (open === true){
		console.log("true");
		/*  */
		SetOpen(false)
		gsapStart()
		}
		if (open === false){
			console.log("false");
			gsapEnd()
		 SetOpen(true)
		}
			}

  return (
    <div className={`_navBar ${ isDark ? '_dark' : '_light'}`}>
      <Logo className="_navBarLogo"/>

			<ToggleButton className="_navBarToggle" fill={open === true ? '#162935' : '#fff' }/>
    </div>
  )
}

export default NavBar;
