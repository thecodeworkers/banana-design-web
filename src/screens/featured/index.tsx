import React, { useState, useEffect } from 'react';
import './styles.scss';
import { FeaturedOne, DistortionOne, Ai } from '../../components/Svg';
import { changeBreadcrumb, setTheme } from '../../store/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { gsap, ScrollTrigger } from 'gsap/all';
import { propsType } from './types';

const texts: Array<any> = [
	{ class: '._textDescription1', duration: 0.6, delay: 0.5 },
	{ class: '._textDescription2', duration: 0.6, delay: 0.6 },
	{ class: '._textDescription3', duration: 0.6, delay: 0.7 },
	{ class: '._textDescription4', duration: 0.6, delay: 0.8 },
	{ class: '._zeroOne', duration: 0.3, delay: 0.7 },
	{ class: '._mineralsTitle', duration: 0.3, delay: 0.9 },
	{ class: '._mineralsSubTitle', duration: 0.3, delay: 0.9 },
];

const Featured = (props: propsType) => {

	const { imageDescription, date,	keywords, title, subtitle, description, descriptionTwo, descriptionThree, descriptionFour, number, image, id } = props;

	gsap.registerPlugin(ScrollTrigger);

	useEffect(() => {
		triggerAction();
	}, []);

	const inAnimation = (param) => {
		let timeline = gsap.timeline();

		if(param) {
			timeline.play()
			texts.forEach(res => { timeline.to(res.class, 0.1, { opacity: 0 }, 0.1) })
		}

		if (!param) {
			timeline.play()
				.to(['._zeroOne', '._mineralsTitle', '._mineralsSubTitle'], { opacity: 1 }, 0.5);
			texts.forEach(res => { timeline.to(res.class, res?.duration, { opacity: 1 }, res?.delay) })
		}
	}

	const enterBackSection = () =>	inAnimation(false);
	const outSection = () => inAnimation(true);
	const enterSection = () => inAnimation(false);
	const outBackSection = () => inAnimation(true);

	const triggerAction = () => {
		let tl = gsap.timeline({
			scrollTrigger: {
				trigger: `#${id}`,
				start: '-=300',
				end: 'bottom',
				onEnter: () => enterSection(),
				onEnterBack: () => enterBackSection(),
				onLeaveBack: () => outBackSection(),
				onLeave: () => outSection()
			}
		})
	}

	return (
		<div className='_main' id={id}>
			<div className='_featuredContent'>
				<div className='_leftFeaturedContent'>
					<div className='_leftDescription'>
						<div>
							<p className='_zeroOne'> { number } </p>
							<p className='_mineralsTitle'> { title } </p>
							<p className='_mineralsSubTitle'> { subtitle } </p>
							<div className='_loremText'>
								<p className='_textDescription1'> { description } </p>
								<p className='_textDescription2'> { descriptionTwo } </p>
								<p className='_textDescription3'> { descriptionThree } </p>
								<p className='_textDescription4'> { descriptionFour } </p>
							</div>
						</div>
					</div>
				</div>

				<div className='_rightFeaturedContent'>

					<div className='_featuredTools'>
						<p className='_toolsText'> tools </p>
						<div className='_toolsParent'>
							<Ai />
						</div>

						<div className='_toolsParent'>
							<Ai />
						</div>
					</div>
					<div className='_imgParent'>
						{
							true ? image : <DistortionOne />
						}

						<div className='_keywords'>
							<p className='_caseOfStudy'> { imageDescription } </p>
							<p className='_textDay'> { date } </p>
							<p className='_keywordText'> { keywords } </p>
						</div>
					</div>

					<div>
					</div>
				</div>
			</div>

		</div>
	)
}

const mapStateToProps = ({ breadcrumb, theme }) => ({ breadcrumb, theme });

const mapDispatchToProps = dispatch => {
	const actions = {
		changeBreadcrumb,
		setTheme
	}

	return {
		action: bindActionCreators(actions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Featured);


// onMouseEnter={() => imageChange('in')} onMouseLeave={() => imageChange('out')}
{/* <div className='_loremText'>
	<p className='_text1'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum asperiores</p>
	<p className='_text2'>corporis, rerum provident optio molestiae quae amet officia tempora reiciendis</p>
	<p className='_text3'>fuga deserunt excepturi sequi vitae tempora reiciendis officia.</p>
</div> */}
