import React, { useEffect, createRef, useState } from 'react';
import './style.scss';
import lottie from 'lottie-web';
import animation from '../../../assets/animations/BANANA_CREATIVE.json';
import { setLoader } from '../../store/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Props } from './type';

const Loader = ({ children, loader, action }: Props) => {

	const animationContainer: any = createRef();

	const [show, setShow ] = useState(false);
	const [loaderClass, setloaderClass ] = useState('_showLoader');

	useEffect(() => {
		const anim = lottie.loadAnimation({
			container: animationContainer.current,
			renderer: "svg",
			loop: false,
			autoplay: true,
			animationData: animation
		});

		anim.addEventListener('complete', () => showContent());
		return () => anim.destroy();
	}, []);

	const showContent = () => {
		setShow(true);
		setloaderClass('_hiddenLoader');
		action.setLoader(true);
	}

	return (
		<div>
			<div className={!show ? '_loading': '_hidden'}>
				<div className={!show ? '_lottie': '_hidden'}>
					<div className={`animation-container ${loaderClass}`} ref={animationContainer}></div>
				</div>
			</div>
			{children}
		</div>
	)
}

const mapStateToProps = ({ loader }) => ({ loader });

const mapDispatchToProps = dispatch => {
  const actions = {
    setLoader
  }

  return {
    action: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Loader);


