import React, { useState } from 'react';
import './styles.scss';
import { DistortionTwo, FeaturedImageTwo } from '../../components/Svg';
import { gsap } from 'gsap/all';

const FeaturedTwo = () => {

  const [show, setShow ] = useState(false);

  const texts: Array<any> = [
    { class: '._textOne', duration: 0.3, delay: 0.5 },
    { class: '._textTwo', duration: 0.3, delay: 0.7 },
    { class: '._textThree', duration: 0.3, delay: 0.9 },
  ]

  const timeline = gsap.timeline();

  const imageChange = (param: string) => {
    inAnimation();
    param == 'in' ? setShow(true) : setShow(false);
  }

  const inAnimation = () => { 
    const play = timeline.play();
    if (!show) {
      play
        .to(['._zeroTwo', '._mineralsTwoTitle', '._mineralsTwoSubTitle'], { opacity: 1 }, 0.3);
      texts.forEach(res => { timeline.to(res.class, res.duration, { opacity: 1 }, res.delay)})
      return
    }
    play
      .to(['._zeroTwo', '._mineralsTwoTitle', '._mineralsTwoSubTitle'], { opacity: 0 }, 0);
    texts.forEach(res => { timeline.to(res.class, { opacity: 0 }, 0);})
  }

  return (
    <div className='_principal'>
      <div className='_featuredTwoChild'>
        <div className='_leftDivFeatured'>
          <div onMouseEnter={() => imageChange('in')} onMouseLeave={() => imageChange('out')} className='_imageDad'>
            {
              !show ? <FeaturedImageTwo /> : <DistortionTwo />
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
              <p className='_loremTextTwo'>
                <p className='_textOne'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum asperiores</p>
                <p className='_textTwo'>corporis, rerum provident optio molestiae quae amet officia tempora reiciendis</p>
                <p className='_textThree'>fuga deserunt excepturi sequi vitae tempora reiciendis officia.</p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedTwo;