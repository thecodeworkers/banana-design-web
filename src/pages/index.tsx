import React from "react"
import { Link } from "gatsby"
import {Menu, Product} from "../components"
import { Featured, Welcome } from '../screens';

const IndexPage = () => (

  // <Menu />

  <div>
    {/* <div style={{height: '100vh'}}></div> */}
      <Product /> 
      {/* <Menu /> */}
      <Welcome />
		  {/* <Featured /> */}
		<div style={{height: '100vh', backgroundColor:'green'}}></div>
  </div>

  
)

export default IndexPage

