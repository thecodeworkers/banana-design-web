import React, { useState, useEffect, FC} from 'react';
import './styles.scss';
import { DistortionTwo, FeaturedImageTwo, Ai } from '../../components/Svg';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { gsap, ScrollTrigger } from 'gsap/all';
import { changeBreadcrumb, setTheme } from '../../store/actions';
import { bigCursor, smallCursor } from '../../utils/cursor';
import { propsType } from './types';

const FeaturedTwo: FC<propsType> = ({ imageDescription, date,	keywords, title, subtitle, description, number, image, action, transition = false}) => {

	const [show, setShow] = useState(false);
	const [flag, setFlag] = useState(false);

	const texts: Array<any> = [
		{ class: '._textOne', duration: 0.3, delay: 0.5 },
		{ class: '._textTwo', duration: 0.3, delay: 0.7 },
		{ class: '._textThree', duration: 0.3, delay: 0.9 },
	];

	useEffect(() => {
		triggerAction();
	}, []);

	const timeline = gsap.timeline();

	const imageChange = (param: string) => {
		param == 'in' ? setShow(true) : setShow(false);
		inAnimation();
	}

	const inAnimation = () => {
		const play = timeline.play();
		if (!show && !flag) {
			play
				.to(['._zeroTwo', '._mineralsTwoTitle', '._mineralsTwoSubTitle', '._textOne', '._textTwo', '._textThree'], { opacity: 0 }, 0);
			timeline.eventCallback("onComplete", () => setFlag(true));
			return
		}

		if (flag) {
			play
				.to(['._zeroTwo', '._mineralsTwoTitle', '._mineralsTwoSubTitle'], { opacity: 1 }, 0.3);
			texts.forEach(res => { timeline.to(res.class, res.duration, { opacity: 1 }, res.delay) })
			timeline.eventCallback("onComplete", () => setFlag(false));
		}
	}

	const enterSection = (tl: any) => {
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

	const outSection = (tl: any) => {

		if(transition) {
			action.setTheme(false);
			tl.to(['._principal', '._featuredTwoChild'], { backgroundColor: '#FFFFFF' })

			setTimeout(() => {
				action.changeBreadcrumb({
					color: '#0853DC',
					text: 'Welcome',
				});
			}, 200);
		}
	}

	const triggerAction = () => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: '._principal',
				start: '-=300',
				end: 'bottom',
				onEnter: () => enterSection(tl),
				onEnterBack: () => tl.to(['._principal', '._featuredTwoChild'], { backgroundColor: '#2C292A' }),
				onLeaveBack: () => outSection(tl)
			}
		})
	}

	return (
		<div className='_principal'>
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
								<p className='_textOne'> { description } </p>
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


// onMouseOver={() => imageChange('in')} onMouseOut={() => imageChange('out')}
{/* <div className='_loremTextTwo'>
	<p className='_textOne'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum asperiores</p>
	<p className='_textTwo'>corporis, rerum provident optio molestiae quae amet officia tempora reiciendis</p>
	<p className='_textThree'>fuga deserunt excepturi sequi vitae tempora reiciendis officia.</p>
</div> */}
