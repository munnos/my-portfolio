import React from 'react'
import './header.css'
import Me from './../../assets/Me.jpg';
import Nav from './Nav';



const Header = () => {
  return (
    <header>
      < Nav />
      <div className="containerHeader_container"></div>
      <h5> Hello my name is</h5>
      <h1> Michael</h1>
      <h5 className="textLight">Fullstack Developer</h5>
      

      <div className="me">
        <img src={Me} alt="me" />
      </div>
<a href="#contact" className='scrollDown'>Scroll Down</a>
    </header>
  )
}

export default Header