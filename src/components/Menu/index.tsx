import React from "react"
import './style.scss';
import {gsapStart} from './gsap'

const Menu = () => {
  
  gsapStart();

  return(
  <div className={'_menuContainer'}>
    <div className={'_sectionWhite'}>
    <div className={'_whiteBody'}>
    <p className={'_whiteBodyText'} onMouseEnter={gsapStart}>+Concepto</p>
    <p className={'_whiteBodyText'}>+Propósito</p>
    <p className={'_whiteBodyText'}>+Belleza</p>
    <p className={'_whiteBodyText'}>+Función</p>
    <p className={'_whiteBodyText'}>+Creación</p>
    <p className={'_whiteBodyText'}>+Innovación</p>
    <div className={'_whiteBodyFooter'}>
   <p className={'_whiteFooterLineText'}>BRANDING, UI - UX, ANIMACIÓN & 3D, SOCIAL MEDIA</p>
   <div className={'_whiteFooterLine'}></div>
   </div>
   </div>
   
    <div className={'_whiteFooter'}>
  
   <div className={'_whiteFooterText'}>
  <p>Somos un estudio creativo enfocado en ofrecer soluciones </p>
  <p>de diseño a nivel de Branding, Diseño Web, Modelado 3D</p>
  <p>y Social Media. Trabajamos con innovadores que buscan</p>
  <p>mejorar el mundo a través de sus ideas y servicios.</p>
   </div>
    
  </div>  
    </div>
   
    <div className={'_sectionBlack'}>
   
      <div className={'_blackHeader'}>
        <div className={'_addressContainer'}>
          <p className={'_addressText'}>Centro de Artes Integradas,</p>
          <p className={'_addressText'}>Montaña Creativa</p>
          <p className={'_addressText'}>Módulo 5 / Oficina 53</p>
          <p className={'_addressText'}>Caracas 1073</p>
        </div>
        <div className='_iconContainer'>
          <p className={'_addressText'}>menu</p>
        </div>

      </div>

      <div className={'_blackBody'}>
        <p className={'_blackBodyText'}>Estudio</p>
        <p className={'_blackBodyText'}>Creativos</p>
        <p className={'_blackBodyText'}>Folio</p>
      </div>
      <div className={'_blackBodyFooter'}>
        <p className={'_blackBodyFooterText'}>Proyectos Destacados</p>
        <p className={'_blackBodyFooterText'}>Marcas Asociadas</p>
        <p className={'_blackBodyFooterText _mb-60'}>Classroom</p>
      </div>

      <div className={'_blackFooter'}>
        <div className='_blackFooterLine'></div>
        <div className={'_blackFooterContainer'}>
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
    <div className={'_blackLateral'}>
    <p className={'_textYellowUnivers'}>Menú</p>
        </div>
  </div>
  )}

export default Menu

