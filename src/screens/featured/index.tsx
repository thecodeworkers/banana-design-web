import React, { useState, useEffect} from 'react';
import './styles.scss';
import { FeaturedOne, DistortionOne } from '../../components/Svg';
import { saveTest } from '../../store/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { gsap, ScrollTrigger } from 'gsap/all';

const Featured = (props: any) => {
  const [show, setShow] = useState(false);

  gsap.registerPlugin(ScrollTrigger);
  const timeline = gsap.timeline();

  const texts: Array<any> = [
    { class: '._text1', duration: 0.3, delay: 0.5 },
    { class: '._text2', duration: 0.3, delay: 0.7 },
    { class: '._text3', duration: 0.3, delay: 0.9 },
  ]

  const imageChange = (param: string) => {
		param == 'in' ? setShow(true) : setShow(false);
		inAnimation();
  }

  useEffect(() => {
    triggerAction();
  }, [])

  const inAnimation = () => {
    const play = timeline.play();
    if (!show) {
      play
        .to(['._zeroOne', '._mineralsTitle', '._mineralsSubTitle'], { opacity: 1 }, 0.3);
      texts.forEach(res => { timeline.to(res.class, res.duration, { opacity: 1 }, res.delay)})
      return
    }
    play
      .to(['._zeroOne', '._mineralsTitle', '._mineralsSubTitle'], { opacity: 0 }, 0);
    texts.forEach(res => { timeline.to(res.class, { opacity: 0 }, 0);})
  }

  const triggerAction = () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '._main',
        start: '-=350',
        end: 'bottom',
        onEnter: () => tl.to('._main', {backgroundColor: '#2C292A'}),
        onEnterBack: () => tl.to('._main', {backgroundColor: '#2C292A'}),
        onLeaveBack: () =>  tl.to('._main', {backgroundColor: '#FFFFFF'}),
      }
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
                <p className='_text1'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum asperiores</p>
                <p className='_text2'>corporis, rerum provident optio molestiae quae amet officia tempora reiciendis</p>
                <p className='_text3'>fuga deserunt excepturi sequi vitae tempora reiciendis officia.</p>
              </p>
            </div>
          </div>
        </div>

        <div className='_rightFeaturedContent'>

          <div onMouseEnter={() => imageChange('in')} onMouseLeave={() => imageChange('out')} className='_imgParent'>
            {
              true ? <FeaturedOne /> : <DistortionOne />
            }

            <div className='_keywords'>
              <p className='_caseOfStudy'>Caso de estudio</p>
              <p className='_textDay'> Marzo 20'</p>
              <p className='_keywordText'> keyword1, keyword2</p>
            </div>
          </div>

          {/* <div className='test'>
            <p>Destacados</p>
          </div> */}
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


