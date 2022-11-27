import React from 'react'
import './about.css'


const About = () => {
  return (
    <section id='about'>
      <h2>About Me</h2>
      <div className="containeraboutContainer">
      

          <div className="aboutContent"></div>
          <div className="aboutCards">
          <article className="aboutCard">
            <h5> Strong legal professional seeking first role in web development</h5>
          </article>

          <div className="aboutContent"></div>
          <div className="aboutCards">
          <article className="aboutCard">
            <h5> Ipsom doriefeafa</h5>
          </article>

          <div className="aboutContent"></div>
          <div className="aboutCards">
          <article className="aboutCard">
            <h5> Ipsom doriefeafa</h5>
          </article>
          </div>

          <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Quod qui ipsa dolorem ab nemo vel corrupti. Dolores itaque libero expedita. Animi quos libero nesciunt obcaecati laudantium. Autem deserunt aut unde.</p>

            <a href="#contact" className='btnPrimary'> Contact Me! </a>

        </div>
        </div>
        </div>



      </section>
    
  )
}

export default About