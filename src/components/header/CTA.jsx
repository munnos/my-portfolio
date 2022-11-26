import React from 'react';
import CV from '../../assets/CV.docx';


const CTA = () => {
  return (
    <div className="cta">
        <a href={CV} download className="btn">Download CV</a>
        <a href="#contact" className='btn btn-primary'>Contact me</a>
        <div className="me"> </div>
    </div>
  )
}

export default CTA