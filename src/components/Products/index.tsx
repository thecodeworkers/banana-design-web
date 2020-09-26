import React from "react";
import './style.scss';
import {gsapStart} from './gsap';

const Product = () => {
  
  gsapStart();

  return(
    <div className={'_hola'} onMouseEnter={gsapStart}><h1>hola</h1></div>
  )

}


export default Product;