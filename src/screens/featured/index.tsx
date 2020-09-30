import React, { useState, useEffect} from 'react';
import './styles.scss';
import { FeaturedOne, DistortionOne } from '../../components/Svg';
import { saveTest } from '../../store/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { TimelineMax, gsap, ScrollTrigger} from 'gsap/all';

const Featured = (props: any) => {
  const [show, setShow] = useState(false);
  gsap.registerPlugin(ScrollTrigger);
  const timeline = new TimelineMax();

  const texts: Array<any> = [
    { class: '._text1', duration: 0.3, delay: 0.5 },
    { class: '._text2', duration: 0.3, delay: 0.7 },
    { class: '._text3', duration: 0.3, delay: 0.9 },
  ]

  
  gsap.to('._main', { scrollTrigger: { trigger: '._main', onEnter: () => console.log('enter trigger'), markers: true} , backgroundColor: 'blue' })

  const imageChange = (param: string) => {
    inAnimation();
    param == 'in' ? setShow(true) : setShow(false);
  }

  const inAnimation = () => { 
    const play = timeline.play();

    if (!show) {
      play
        .to(['._zeroOne', '._mineralsTitle', '._mineralsSubTitle'], { opacity: 1 }, 0.3);
      texts.map(res => { timeline.to(res.class, res.duration, { opacity: 1 }, res.delay)})
      return
    }
    play
      .to(['._zeroOne', '._mineralsTitle', '._mineralsSubTitle'], { opacity: 0 }, 0);
    texts.map(res => {
      timeline.to(res.class, { opacity: 0 }, 0);
    })
  }
  
 

  return (
    <div className='_main'>
      <div className='_featuredContent'>
        <div className='_leftFeaturedContent'>

          <div className='_leftDescription'>
            <div>
              <p className='_zeroOne'> 01 -</p>
              <p className='_mineralsTitle'>Banana</p>
              <p className='_mineralsSubTitle'>Minerals</p>
              <p className='_loremText'>
                <p className='_text1'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum asperiores,eveniet autem itaque quisquam consectetur</p>
                <p className='_text2'>corporis, rerum provident optio molestiae quae amet officia tempora reiciendis</p>
                <p className='_text3'>fuga deserunt excepturi sequi vitae.</p>
              </p>
            </div>
          </div>

        </div>

        <div className='_rightFeaturedContent'>

          <div onMouseEnter={() => imageChange('in')} onMouseLeave={() => imageChange('out')}>
            {
              !show ? <FeaturedOne /> : <DistortionOne />
            }

            <div className='_keywords'>
              <p className='_caseOfStudy'>Caso de estudio</p>
              <p className='_textDay'> Marzo 20'</p>
              <p className='_keywordText'> keyword1, keyword2</p>
            </div>
          </div>

          <div className='test'>
            <p>Destacados</p>
          </div>
          <div>
          </div>
        </div>
      </div>

    </div>
  )
}

const mapStateToProps = ({ test }) => ({ test });

const mapDispatchToProps = dispatch => {
  const actions = {
    saveTest
  }

  return {
    action: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Featured);


