import React, { useState, useEffect, useRef } from 'react'
import { Logo, ToggleButton } from './../../assets/img';
import navBarProps from './interface';
import { gsapMenuStart } from '../../components/Menu/gsap';
import './styles.scss';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { unfoldMenu } from '../../store/actions';
import { gsap } from 'gsap/all';
import { navigate } from 'gatsby';


const NavBar: React.FC<navBarProps> = (props) => {

	const { reference, action, toggle, theme, colorChange } = props;
	const [isDark, setIsDark] = useState(false);
	const timeline = gsap.timeline();

	const openMenu = () => {
		intToggle();
		gsapMenuStart();
		action.unfoldMenu(true);
	}

	useEffect(() => {
		if (toggle.toggle === 1) {
			gsap.timeline()
				.to(['#svg > g > path:nth-of-type(3)', '#svg > g > path:nth-of-type(2)', '#svg > g > path:nth-of-type(1)'], 0.3, { transform: 'scaleX(0)' })
		}

		if (toggle.toggle === 2) {
			gsap.timeline()
				.to('#svg > g > path:nth-of-type(1)', 0.3, { transform: 'scaleX(1)' })
				.to('#svg > g > path:nth-of-type(2)', 0.2, { transform: 'scaleX(1)' })
				.to('#svg > g > path:nth-of-type(3)', 0.1, { transform: 'scaleX(1)' })
		}

	}, [toggle.toggle])

	const outToggle = () => {
		gsap.timeline()
			.to('#svg > g > path:nth-of-type(3)', 0.5, { transform: 'scaleX(0)' })
			.to('#svg > g > path:nth-of-type(2)', 0.3, { transform: 'scaleX(0)' })
			.to('#svg > g > path:nth-of-type(1)', 0.1, { transform: 'scaleX(0)' })
			.eventCallback("onComplete", openMenu);
	}

	const intToggle = () => {
		gsap.timeline()
			.to(['#svg > g > path:nth-of-type(3)', '#svg > g > path:nth-of-type(2)', '#svg > g > path:nth-of-type(1)'], 0, { transform: 'scaleX(1)' }, 0.5)
	}

	return (
		<div className={`_navBar ${theme.theme && colorChange ? '_dark' : '_light'}`}>

			<div className='_logoParent' onClick={ () => navigate('/') }>

				{
					!theme.theme
					?	<Logo firstColor='#161616' secondColor='#231f20'/>
					: <Logo firstColor={colorChange ? '#FFFFFF' : null} secondColor={colorChange ? '#FFFFFF' : null}/>
				}

			</div>

			<div className="_navBarToggleWrapper" onClick={outToggle} >
				<ToggleButton className="_navBarToggle" />
			</div>

		</div>
	)
}

const mapStateToProps = ({ menu, toggle, theme }) => ({ menu, toggle, theme });

const mapDispatchToProps = dispatch => {
	const actions = {
		unfoldMenu
	}

	return {
		action: bindActionCreators(actions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
