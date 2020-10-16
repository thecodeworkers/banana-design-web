import React, { useEffect } from 'react';
import './styles.scss';
import { gsapStart, gsapRetract, gsapExpand } from './gsap';
import { Arrow } from '../../components/Svg';
import { changeToggle } from '../../store/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const Welcome = (props) => {

	const { loader, menu, action } = props;

  useEffect(() => {
		if(loader.loader) gsapStart();
	}, [loader]);

	useEffect(() => {
		if(loader.loader) {
			if(menu.opened) gsapRetract();
			if(menu.opened == false) gsapExpand(toggleDispatch);
		}
	}, [menu]);

	const toggleDispatch = () => action.changeToggle(2)

	const scrollToNextSection = () => {
		var i = 10;
		var int = setInterval(function() {
			window.scrollTo(0, i);
			i +=10;
			if (i >= document.documentElement.clientHeight) clearInterval(int);
		}, 20);
	}

  return (
    <div className='_principalContainer'>
      <div className='_container'>
        <section className='_concept'>
          <div className='_whiteBodyText' id='one'>Concepto + Propósito</div>
          <div className='_whiteBodyText' id='two'>Belleza + Función</div>
          <div className='_whiteBodyText' id='three'>Creación + Innovación</div>
        </section>
				<ul className='_list'>
					<li className='_smallBodyText' id='text-1'>+Concepto</li>
					<li className='_smallBodyText' id='text-2'>+Propósito</li>
					<li className='_smallBodyText' id='text-3'>+Belleza</li>
					<li className='_smallBodyText' id='text-4'>+Función</li>
					<li className='_smallBodyText' id='text-5'>+Creación</li>
					<li className='_smallBodyText' id='text-6'>+Innovación</li>
				</ul>
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
					<p className='_moreInfo'>
						Somos un estudio creativo enfocado en ofrecer soluciones de diseño a nivel de Branding, Diseño Web,
						Modelado 3D y Social Media. Trabajamos con innovadores que buscan mejorar el mundo a través de sus ideas y servicios.
					</p>
        </section>
				<div className='_arrow' onClick={scrollToNextSection}>
					<Arrow />
				</div>
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

const mapStateToProps = ({ loader, menu }) => ({ loader, menu });

const mapDispatchToProps = dispatch => {
	const actions = {
		changeToggle
	}

	return {
		action: bindActionCreators(actions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
