import React from 'react';
import CV from '../../assets/CV.docx';
import './resume.css';


const Resume = () => {
  return (
    <div className="cta">
        <a href={CV} download className="resumeCards">Download CV</a>
        <a href="/contact" className='resumeCards'>Contact me</a>
    <div className="resumeCards">
      <li> Proficiencies:
        <ul>
            MongoDb
        </ul>
        <ul>
            Javascript
        </ul>
        <ul>
            React
        </ul>
        <ul>
            SQL
        </ul>
        <ul>
            CSS
        </ul>
        <ul>
            NodeJS
        </ul>
        <ul>
            More coming soon!
        </ul>
      </li>
    </div>
    </div>
  )
}

export default Resume