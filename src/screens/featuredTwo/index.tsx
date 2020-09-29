import React from 'react';
import './styles.scss';
import { FeaturedImageTwo } from '../../components/Svg';

const FeaturedTwo = () => {

  const imageChange = (value: string) => {
    console.log(value);
  }

  return (
    <div className='_principal'>
      <div className='_featuredTwoChild'>
        <div className='_leftDivFeatured'>
          <div onMouseEnter={() => imageChange('in')} onMouseLeave={() => imageChange('out')} className='_imageDad'>
            {
              true ? <FeaturedImageTwo /> : null
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