import React from 'react'
import './header.css'
import CTA from './CTA';
import Me from '../../assets/Placeholder.jpg';



const Header = () => {
  return (
    <header>
      <div className="container header_container"></div>
      <h5> Hello my name is</h5>
      <h1> Michael</h1>
      <h5 className="text light">Fullstack Developer</h5>
      <CTA />

      <div className="me">
        <img src={Me} alt="me" />
      </div>
<a href="#contact" className='scroll_down'>Scroll Down</a>
    </header>
  )
}

export default Header