import React from 'react';
import CV from '../../assets/CV.docx';
import './resume.css';


const Resume = () => {
  return (
    <div className="cta">
        <a href={CV} download className="resumeCards">Download CV</a>
        <a href="/contact" className='resumeCards'>Contact me</a>
        <div className="me"> </div>
    </div>
  )
}

export default Resume