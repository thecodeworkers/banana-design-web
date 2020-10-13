import React, { useState, useEffect, useRef } from 'react'
import { Logo, ToggleButton } from './../../assets/img';
import navBarProps from './interface';
import { gsapMenuStart} from '../../components/Menu/gsap';
import './styles.scss';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { unfoldMenu } from '../../store/actions';


const NavBar: React.FC<navBarProps> = ( props ) => {

	const { reference, action } = props;

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

	const openMenu = () => {
		gsapMenuStart();
		action.unfoldMenu(true)
	}

  return (
    <div className={`_navBar ${ isDark ? '_dark' : '_light'}`}>
      <Logo className="_navBarLogo"/>

			<div className="_navBarToggleWrapper" onClick={openMenu} >
	      <ToggleButton className="_navBarToggle"/>
			</div>

    </div>
  )
}

const mapStateToProps = ({ menu }) => ({ menu });

const mapDispatchToProps = dispatch => {
	const actions = {
		unfoldMenu
	}

	return {
		action: bindActionCreators(actions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
