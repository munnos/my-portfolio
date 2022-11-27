import React from 'react'
import './about.css'


const About = () => {
  return (
    <section class='about'>
      <h1 id="aboutmeHeader">About Me</h1>
      <div className="containeraboutContainer">
      

          <div className="aboutContent">
          <article className="aboutCards">
            <h5> Strong legal professional seeking first role in web development</h5>
            
          </article>
          </div>

          <div className="aboutContent">
          <article className="aboutCards">
            <h5> Ipsom doriefeafa</h5>
          </article>
          </div>

          <div className="aboutContent">
          <article className="aboutCards">
            <a href="/contact" className='btnPrimary'> Contact Me! </a>
            </article>
          </div>
        </div>
        
        
  



      </section>
    
  )
}

export default About