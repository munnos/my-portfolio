import React from 'react'
import Me from '../../assets/Me.jpg';
import './home.css';

const Home = () => {
  return (<div className="homeContainer">
  <div className="home">
  <h5> Hello my name is</h5>
  <h1> Michael</h1>
  <h5 className="textLight">Fullstack Developer</h5>
  <img id="picofMe" src={Me} alt="me" />
  </div>
  </div>
  
    
  )
}

export default Home


