import React, { useEffect, useState } from 'react';
import './styles.scss';
import { gsapStart, gsapRetract, gsapExpand } from './gsap';
import { Arrow } from '../../components/Svg';
import { useTranslation } from 'react-i18next';
import { withTrans } from '../../i18n/withTrans';
import { connect } from 'react-redux';

const Welcome = (props) => {

	const { i18n } = useTranslation();
	const [language, setLanguage] = useState('en');
	const { loader, menu, t} = props;

	useEffect(() => {
		if (loader.loader) gsapStart();
	}, [loader]);

	useEffect(() => {
		if (loader.loader) {
			if (menu.opened) gsapRetract();
			if (menu.opened == false) gsapExpand();
		}
	}, [menu]);

	const scrollToNextSection = () => {
		var i = 10;
		var int = setInterval(function () {
			window.scrollTo(0, i);
			i += 10;
			if (i >= document.documentElement.clientHeight) clearInterval(int);
		}, 20);
	}

	const changeLang = (event: any) => {
		const lang = event.target.value;
		i18n.changeLanguage(lang);
		lang == 'es' ? setLanguage('en') : setLanguage('es');
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
						<div className='_targetRight' style={{ paddingLeft: '15%' }}>Lorem ipsum serif avec iditium</div>
						<div className='_targetRight'>est. 17’</div>
					</div>
					<div className='_separator'></div>
				</section>
				<section className='_contact'>
					<button onClick={changeLang} value={language} >{language.toUpperCase()}</button>
						<p>{t("language")}</p>
					<div className='_contactText' style={{ marginRight: '25%' }}>contact@bananadsg.com</div>
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
					<div style={{ padding: '20% 0 10% 15%' }}>
						BananaDesign es un studio creative enfocado en generar soluciones de diseño lorem ipsum dolor sit amet,
						con sectetuer adipiscing elit. Aenean ligula eget dolor pretium, dolor sit.
          </div>
				</section>
			</div>
		</div>
	);
}

const mapStateToProps = ({ loader, menu }) => ({ loader, menu });

export default connect(mapStateToProps, null)(withTrans(Welcome));
