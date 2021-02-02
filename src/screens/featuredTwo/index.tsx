import React, { useState, useEffect, FC} from 'react';
import './styles.scss';
import { DistortionTwo, FeaturedImageTwo, Ai } from '../../components/Svg';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { gsap, ScrollTrigger } from 'gsap/all';
import { changeBreadcrumb, setTheme } from '../../store/actions';
import { bigCursor, smallCursor } from '../../utils/cursor';
import { propsType } from './types';

const FeaturedTwo: FC<propsType> = ({ imageDescription, date,	keywords, title, subtitle, description, descriptionTwo, descriptionThree, descriptionFour, number, image, action, transition = false, id}) => {

	const texts: Array<any> = [
		{ class: '._textDescriptionOne', duration: 0.6, delay: 0.5 },
		{ class: '._textDescriptionTwo', duration: 0.6, delay: 0.6 },
		{ class: '._textDescriptionThree', duration: 0.6, delay: 0.7 },
		{ class: '._textDescriptionFour', duration: 0.6, delay: 0.8 },
		{ class: '._mineralsTwoTitle', duration: 0.3, delay: 0.9 },
		{ class: '._mineralsTwoSubTitle', duration: 0.3, delay: 0.9  },
		{ class: '._zeroTwo', duration: 0.3, delay: 0.9  }
	];

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
				.to(['._zeroTwo', '._mineralsTwoTitle', '._mineralsTwoSubTitle'], { opacity: 1 }, 0.5);
			texts.forEach(res => { timeline.to(res.class, res?.duration, { opacity: 1 }, res?.delay) })
		}
	}

	const enterSection = (tl: any) => {
		inAnimation(false);
		if(transition) {
			action.setTheme(true);
			tl.to(['._principal', '._featuredTwoChild'], { backgroundColor: '#2C292A' });
			setTimeout(() => {
				action.changeBreadcrumb({
					color: '#FFFFFF',
					text: 'Destacados',
				});
			}, 200);
		}
	}

	const outBackSection = (tl: any) => {
		inAnimation(true);
		if(transition) {
			action.setTheme(false);
			tl.to(['._principal', '._featuredTwoChild'], { backgroundColor: '#FFFFFF' })

			setTimeout(() => {
				action.changeBreadcrumb({
					color: '#000000',
					text: 'Welcome',
				});
			}, 200);
		}
	}

	const enterBackSection = (tl: any) => {
		tl.to(['._principal', '._featuredTwoChild'], { backgroundColor: '#2C292A' })
		inAnimation(false);
	}

	const outSection = () => {
		inAnimation(true);
	};

	const triggerAction = () => {
		let tl = gsap.timeline({
			scrollTrigger: {
				trigger: `#${id}`,
				start: '-=300',
				end: 'bottom',
				onEnter: () => enterSection(tl),
				onEnterBack: () => enterBackSection(tl),
				onLeaveBack: () => outBackSection(tl),
				onLeave: () => outSection()
			}
		})
	}

	return (
		<div className='_principal' id={id}>
			<div className='_featuredTwoChild'>
				<div className='_leftDivFeatured'>
					<div className='_featuredToolsTwo'>
						<p> tools </p>
						<div className='_toolsParentTwo'>
							<Ai />
						</div>

						<div className='_toolsParentTwo'>
							<Ai />
						</div>
					</div>
					<div className='_imageDad'>
						{
							true ? image : <DistortionTwo />
						}

						<div className='_keywordsTwo'>
							<p className='_caseOfStudyTwo'> { imageDescription } </p>
							<p className='_textDayTwo'> { date } </p>
							<p className='_keywordTextTwo'> { keywords } </p>
						</div>
						<div>
						</div>
					</div>
				</div>

				<div className='_rightDivContent'>
					<div className='_rightTextContent'>
						<div>
							<p className='_zeroTwo'> { number } </p>
							<p className='_mineralsTwoTitle'> { title }</p>
							<div className='_loremTextTwo'>
								<p className='_textDescriptionOne'> { description } </p>
								<p className='_textDescriptionTwo'> { descriptionTwo } </p>
								<p className='_textDescriptionThree'> { descriptionThree } </p>
								<p className='_textDescriptionFour'> { descriptionFour } </p>
							</div>
						</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedTwo);
