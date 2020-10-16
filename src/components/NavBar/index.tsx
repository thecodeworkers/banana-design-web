import React, { useState, useEffect, useRef } from 'react'
import { Logo, ToggleButton } from './../../assets/img';
import navBarProps from './interface';
import { gsapMenuStart} from '../../components/Menu/gsap';
import './styles.scss';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { unfoldMenu } from '../../store/actions';
import { gsap } from 'gsap/all';


const NavBar: React.FC<navBarProps> = ( props ) => {

	const { reference, action, toggle } = props;
	const [isDark, setIsDark] = useState( false );

	const defaultChangeColorsPoint = window.innerHeight * 0.7;
	const timeline = gsap.timeline();

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
		intToggle();
		gsapMenuStart();
		action.unfoldMenu(true)
	}

	useEffect(() => {
		if(toggle.toggle === 1) {
			gsap.timeline()
			.to(['#svg > g > path:nth-of-type(3)', '#svg > g > path:nth-of-type(2)', '#svg > g > path:nth-of-type(1)'], 0.5, {transform: 'scaleX(0)'})
		}

		if(toggle.toggle === 2) {
			gsap.timeline()
			.to('#svg > g > path:nth-of-type(1)', 0.7, {transform: 'scaleX(1)'})
			.to('#svg > g > path:nth-of-type(2)', 0.5, {transform: 'scaleX(1)'})
			.to('#svg > g > path:nth-of-type(3)', 0.3, {transform: 'scaleX(1)'})
		}

	}, [toggle.toggle])

	const outToggle = () => {
		gsap.timeline()
		.to('#svg > g > path:nth-of-type(3)', 0.7, {transform: 'scaleX(0)'})
		.to('#svg > g > path:nth-of-type(2)', 0.5, {transform: 'scaleX(0)'})
		.to('#svg > g > path:nth-of-type(1)', 0.3, {transform: 'scaleX(0)'})
		.eventCallback("onComplete", openMenu);
	}

	const intToggle = () => {
		gsap.timeline()
			.to(['#svg > g > path:nth-of-type(3)', '#svg > g > path:nth-of-type(2)', '#svg > g > path:nth-of-type(1)'], 0, {transform: 'scaleX(1)'}, 0.5)
	}

  return (
    <div className={`_navBar ${ isDark ? '_dark' : '_light'}`}>
      <Logo className="_navBarLogo"/>

			<div className="_navBarToggleWrapper" onClick={outToggle} >
	      <ToggleButton className="_navBarToggle" />
			</div>

    </div>
  )
}

const mapStateToProps = ({ menu, toggle }) => ({ menu, toggle });

const mapDispatchToProps = dispatch => {
	const actions = {
		unfoldMenu
	}

	return {
		action: bindActionCreators(actions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
