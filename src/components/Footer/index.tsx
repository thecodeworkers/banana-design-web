import React from "react";
import './style.scss';
import { Logo } from './../../assets/img';

const Footer = () => {

	return (
		<div className="_footerContainer">
			<div className="_footerContent">
			<div >
					<Logo className="_footerLogo" />
				</div>

				<div className="_sectionsContainer">

					<div className="_sectionLeftContainer">

						<p>PORTFOLIO</p>
						<p>ABOUT US</p>
						<p>RECAP</p>
						<p>RAW</p>
					</div>

					<div className="_sectionsRightContainer">
						<p style={{marginBottom:4}}>Proyectos destacados</p>
						<p style={{marginBottom:4}} >Marcas Asociadas</p>
						<p style={{marginBottom:4}} >Classroom</p>
					</div>
				</div>

				<div className='_footerLine'> </div>

				<div className="_footerTextContainer">
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
	)
}

export default Footer;
