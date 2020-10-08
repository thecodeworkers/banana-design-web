import React, { useState } from 'react';
import './styles.scss';
import { DistortionTwo, FeaturedImageTwo } from '../../components/Svg';
import { bigCursor, smallCursor } from '../../utils/cursor';
import { gsap } from 'gsap/all';

const FeaturedTwo = () => {

  const [show, setShow ] = useState(false);
	const [flag, setFlag] = useState(false);

  const texts: Array<any> = [
    { class: '._textOne', duration: 0.3, delay: 0.5 },
    { class: '._textTwo', duration: 0.3, delay: 0.7 },
    { class: '._textThree', duration: 0.3, delay: 0.9 },
  ]

  const timeline = gsap.timeline();

  const imageChange = (param: string) => {
		param == 'in' ? setShow(true) : setShow(false);
		inAnimation();
  }

  const inAnimation = () => {
    const play = timeline.play();
    if (!show && !flag) {
      play
        .to(['._zeroTwo', '._mineralsTwoTitle', '._mineralsTwoSubTitle'], { opacity: 1 }, 0.3);
			texts.forEach(res => { timeline.to(res.class, res.duration, { opacity: 1 }, res.delay)})
			timeline.eventCallback("onComplete", () => setFlag(true));
      return
		}

		if(flag) {
			play
			.to(['._zeroTwo', '._mineralsTwoTitle', '._mineralsTwoSubTitle', '._textOne', '._textTwo', '._textThree'], { opacity: 0 }, 0);
			timeline.eventCallback("onComplete", () => setFlag(false));
		}

  }

  return (

    <div className='_principal'>
      <div className='_featuredTwoChild'>
        <div className='_leftDivFeatured'>
          <div onMouseOver={() => imageChange('in')} onMouseOut={() => imageChange('out')} className='_imageDad'>
            {
              true ? <FeaturedImageTwo /> : <DistortionTwo />
            }

            <div className='_keywordsTwo'>
              <p className='_caseOfStudyTwo'>Diseño de empaque</p>
              <p className='_textDayTwo'> Marzo 20'</p>
              <p className='_keywordTextTwo'> keyword1, keyword2</p>
            </div>
            <div>
            </div>
          </div>
        </div>

        <div className='_rightDivContent'>
          <div className='_rightTextContent'>
            <div>
              <p className='_zeroTwo'> 02 -</p>
              <p className='_mineralsTwoTitle'>STAY UP</p>
              <div className='_loremTextTwo'>
                <p className='_textOne'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum asperiores</p>
                <p className='_textTwo'>corporis, rerum provident optio molestiae quae amet officia tempora reiciendis</p>
                <p className='_textThree'>fuga deserunt excepturi sequi vitae tempora reiciendis officia.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedTwo;
