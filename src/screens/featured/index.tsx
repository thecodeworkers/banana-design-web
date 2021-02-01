import React, { useState, useEffect } from 'react';
import './styles.scss';
import { FeaturedOne, DistortionOne, Ai } from '../../components/Svg';
import { changeBreadcrumb, setTheme } from '../../store/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { gsap, ScrollTrigger } from 'gsap/all';
import { propsType } from './types';

const texts: Array<any> = [
	{ class: '._textDescription1', duration: 0.3, delay: 0.1 },
	{ class: '._textDescription2', duration: 0.3, delay: 0.2 },
	{ class: '._textDescription3', duration: 0.3, delay: 0.3 },
	{ class: '._textDescription4', duration: 0.3, delay: 0.4 },
	{ class: '._text2', duration: 0.3, delay: 0.7 },
	{ class: '._text3', duration: 0.3, delay: 0.9 },
];

const Featured = (props: propsType) => {

	const { action, theme, imageDescription, date,	keywords, title, subtitle, description, descriptionTwo, descriptionThree, descriptionFour, number, image, transition } = props;
	const [show, setShow] = useState(false);
	const [flag, setFlag] = useState(false);

	gsap.registerPlugin(ScrollTrigger);
	const timeline = gsap.timeline();

	const imageChange = (param: string) => {
		param == 'in' ? setShow(true) : setShow(false);
		inAnimation();
	}

	const inAnimation = () => {
		const play = timeline.play();
		if (!show && !flag) {
			play
				.to(['._zeroOne', '._mineralsTitle', '._mineralsSubTitle', '._text2', '._text3'], { opacity: 0 }, 0);
			timeline.eventCallback("onComplete", () => setFlag(true));
			return
		}

		if (flag) {
			play
				.to(['._zeroOne', '._mineralsTitle', '._mineralsSubTitle'], { opacity: 1 }, 0.3);
				timeline.staggerTo('._textDescription1', 1, {backgroundColor: 'red'}, 0.010);
				timeline.staggerTo('._textDescription2', 1, {backgroundColor: 'red'}, 0.011);
				timeline.staggerTo('._textDescription3', 1, {backgroundColor: 'red'}, 0.12);
				timeline.staggerTo('._textDescription4', 1, {backgroundColor: 'red'}, 0.13);
			texts.forEach(res => { timeline.to(res.class, res.duration, { opacity: 1 }, res.delay) })
			timeline.eventCallback("onComplete", () => setFlag(false));
			return
		}
	}

	const enterSection = (tl: any) => {
		if(transition) {
			/* action.setTheme(true); */
			/* tl.to(['._principal', '._featuredTwoChild'], { backgroundColor: '#2C292A' }); */
			tl.staggerTo('._textDescriptionOne', 1, {opacity: 1}, 0.010);
			tl.staggerTo('._textDescriptionTwo', 1, {opacity: 1}, 0.011);
			tl.staggerTo('._textDescriptionThree', 1, {opacity: 1}, 0.12);
			tl.staggerTo('._textDescriptionFour', 1, {opacity: 1}, 0.13);
		/* 	setTimeout(() => {
				action.changeBreadcrumb({
					color: '#FFFFFF',
					text: 'Destacados',
				});
			}, 200); */
		}
	}

	const outSection = (tl: any) => {

		if(transition) {
			/* action.setTheme(false); */
			tl.to(['._textDescriptionOne'], { backgroundColor: '#FFFFFF' })

			/* setTimeout(() => {
				action.changeBreadcrumb({
					color: '#000000',
					text: 'Welcome',
				});
			}, 200); */
		}
	}

	const triggerAction = () => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: '._principal',
				start: '-=300',
				end: 'bottom',
				markers:true,
				onEnter: () => enterSection(tl),
				onEnterBack: () => tl.to(['._principal', '._featuredTwoChild'], { backgroundColor: '#2C292A' }),
				onLeaveBack: () => outSection(tl)
			}
		})
	}

	return (
		<div className='_main'>
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
