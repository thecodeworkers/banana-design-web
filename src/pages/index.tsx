import React from "react"
import { Link } from "gatsby"
import { NavBar } from './../components';

const IndexPage = () => (
  <div>
    <NavBar />
    <h1>Banana</h1>
    
    <div style={{ height: '100vh', backgroundColor: '#ffffff' }}></div>
    <div style={{ height: '100vh', backgroundColor: '#111111', marginTop: '1px' }}></div>
    <div style={{ height: '100vh', backgroundColor: '#111111', marginTop: '1px' }}></div>
  </div>
)

export default IndexPage

