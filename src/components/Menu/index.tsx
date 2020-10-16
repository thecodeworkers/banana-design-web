import React, { useEffect } from "react";
import { ToggleButton } from './../../assets/img';
import { gsapMenuStart, gsapMenuEnd } from './gsap'
import './style.scss';

import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import { unfoldMenu, changeToggle } from '../../store/actions';

const Menu = (props) => {

	const { menu, action } = props;

	useEffect(() => {
		if (menu.opened) gsapMenuStart();
	}, [menu]);

	const closeMenu = () => {
		gsapMenuEnd();
		action.unfoldMenu(false);
		action.changeToggle(1);
	}

	return (
		<div >
			<div className={'_sectionBlack'}>

				<div className='_mainDivContainer'>
					<div className={'_blackHeader'}>
						<div className={'_blackHeaderHover'}></div>
						<div >
							<p className={'_addressText'}>Centro de Artes Integradas,</p>
							<p className={'_addressText'}>Montaña Creativa</p>
							<p className={'_addressText'}>Módulo 5 / Oficina 53</p>
							<p className={'_addressText'}>Caracas 1073</p>
						</div>

						<div className={'_icon'} onClick={closeMenu}>
							<ToggleButton fill={'#fff'} />
						</div>
					</div>

					<div className={'_blackBody'}>
						<span className={'vertical'}> <p data-hover="Estudio" className={'_blackBodyText'}>Estudio</p> </span>
						<span className={'vertical'}> <p data-hover="Creativos" className={'_blackBodyText'}>Creativos</p> </span>
						<span className={'vertical'}> <p data-hover="Folio" className={'_blackBodyText'}>Folio</p> </span>

					</div>
					<div className={'_blackBodyFooter'} >

						<div style={{ display: 'block', marginLeft: 'auto', position: 'relative' }}>
							<div className={'_blackBodyFooterHover'}></div>
							<ul style={{ width: '100%', listStyle: 'none', position: 'relative' }}>
								<li><a className={'_blackBodyFooterText'} >Proyectos Destacados</a></li>
								<li><a className={'_blackBodyFooterText'} >Marcas Asociadas</a></li>
								<li> <a className={'_blackBodyFooterText'} >Classroom</a></li>
							</ul>
						</div>
					</div>

					<div className={'_blackFooter'}>
						<div className='_blackFooterLine'> </div>
						<div className={'_blackFooterContainer'}>
							<div className={'_blackFooterHover'}>	</div>
							<div className={'_lh'} >
								<p className={'_blackFooterText'}>Contacto:</p>
								<p className={'_blackFooterText _mt '}>contact@bananadsg.com</p>
								<p className={'_blackFooterText '}>+58 412 222 2222</p>
							</div>
							<div className={'_lh'} >
								<p className={'_blackFooterText '}>Buscas trabajar con nosotros?</p>
								<p className={'_blackFooterText _mb'}>Escríbenos a:</p>
								<p className={'_blackFooterText _mt'}>work@bananadsg.com</p>
							</div >
							<div className={'_lh'} >
								<p className={'_blackFooterText '}>No te pierdas de nada,</p>
								<p className={'_blackFooterText _mb '}>síguenos en:</p>
								<p className={'_blackFooterText _mt'}>@bananadesign_</p>
							</div>
						</div>
					</div>
				</div>

				<div className={'_breadCrumbContainerOne'}>
					<p className='_breadCrumbtextOne'>Menu</p>
				</div>
			</div>
		</div>
	)
}

const mapStateToProps = ({ menu }) => ({ menu });

const mapDispatchToProps = dispatch => {
	const actions = {
		unfoldMenu,
		changeToggle
	}

	return {
		action: bindActionCreators(actions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
