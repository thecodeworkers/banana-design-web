import React from "react"
import './style.scss';

const Menu = () => (
  <div className={'_menuContainer'}>
    <div className={'_sectionWhite'}>
      <p>blanco</p>
    </div>
    <div className={'_sectionBlack'}>
      <div className={'_blackHeader'}>
        <div className={'_addressContainer'}>
          <p className={'_addressText'}>Centro de Artes Integradas,</p>
          <p className={'_addressText'}>Montaña Creativa</p>
          <p className={'_addressText'}>Módulo 5 / Oficina 53</p>
          <p className={'_addressText'}>Caracas 1073</p>
        </div>
        <div>
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
        <p className={'_blackBodyFooterText'}>Classroom</p>
      </div>

      <div className={'_blackFooter'}>
        <div className='_blackFooterLine'></div>
        <div className={'_blackFooterContainer'}>
        <div className={'_lh'} >
            <p className={'_blackFooterText'}>Contacto</p>
            <p className={'_blackFooterText _mb-0'}>contact@bananadsg.com</p>
            <p className={'_blackFooterText _mt-0'}>+58 412 222 2222</p>
          </div>
          <div className={'_lh'} >
            <p className={'_blackFooterText _mb-0'}>Buscas trabajar con nosotros?</p>
            <p className={'_blackFooterText _mt-0'}>Escríbenos a:</p>
            <p className={'_blackFooterText'}>work@bananadsg.com</p>
          </div >
          <div className={'_lh'} >
            <p className={'_blackFooterText _mb-0'}>No te pierdas de nada,</p>
            <p className={'_blackFooterText _mt-0 '}>síguenos en:</p>
            <p className={'_blackFooterText'}>@bananadesign_</p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Menu

