import React, { useState } from 'react';
import './styles.scss';
import { FeaturedOne } from '../../components/Svg';

const Featured = () => {

  const [show, setShow] = useState(false);

  const imageChange = (param: string) => {
    param == 'in' ? setShow(true) : setShow(false);
  }

  // const imageOut = () => {
  //   setShow(false);
  // }

  return (
    <div className='_main'>

      <div className='_featuredContent'>
        <div className='_leftFeaturedContent'>

          <div className='_leftDescription'>

            {
              show ?
                <div>
                  <p className='_loremText'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum asperiores,eveniet autem itaque quisquam consectetur,
                    corporis, rerum provident optio molestiae quae amet officia tempora reiciendis
                    fuga deserunt excepturi sequi vitae.
                  </p>
                </div> : null
            }

          </div>

        </div>

        <div className='_rightFeaturedContent'>

          <div onMouseEnter={() => imageChange('in')} onMouseLeave={() => imageChange('out')}>
            <FeaturedOne />
            <div className='_keywords'>
              <p className='_caseOfStudy'>Caso de estudio</p>
              <p className='_textDay'> Marzo 20'</p>
              <p className='_keywordText'> keyword1, keyword2</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Featured;