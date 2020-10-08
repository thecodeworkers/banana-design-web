import React, { useEffect } from 'react';
import './styles.scss';
import { gsapStart } from './gsap';
import { connect } from 'react-redux';

const Welcome = (props) => {

	const { loader } = props;

  useEffect(() => {
		if(loader) gsapStart();
  }, [loader]);

  return (
    <div className='_principalContainer'>
      <div className='_container'>
        <section className='_concept'>
          <div className='_whiteBodyText' id='one'>Concepto + Propósito</div>
          <div className='_whiteBodyText' id='two'>Belleza + Función</div>
          <div className='_whiteBodyText' id='three'>Creación + Innovación</div>
        </section>
        <section className='_intermediate'>
          <div className='_target'>BRANDING, UI - UX, ANIMACIÓN & 3D, SOCIAL MEDIA</div>
          <div className='_targetRightContainer'>
            <div className='_targetRight' style={{paddingLeft: '15%'}}>Lorem ipsum serif avec iditium</div>
            <div className='_targetRight'>est. 17’</div>
          </div>
          <div className='_separator'></div>
        </section>
        <section className='_contact'>
          <div className='_contactText' style={{marginRight: '25%'}}>contact@bananadsg.com</div>
          <div className='_contactText'>+58 412 222 2222</div>
        </section>
        <section className='_description'>
          <div style={{padding: '20% 0 10% 15%'}}>
            BananaDesign es un studio creative enfocado en generar soluciones de diseño lorem ipsum dolor sit amet,
            con sectetuer adipiscing elit. Aenean ligula eget dolor pretium, dolor sit.
          </div>
        </section>
      </div>
    </div>
  );
}

const mapStateToProps = ({ loader }) => ({ loader });

export default connect(mapStateToProps, null)(Welcome);
