import React from 'react';
import './nav.css';
import '../../index.css';
import { TiHome } from 'react-icons/ti';
import { MdOutlineMessage} from 'react-icons/md';
import {TbUserCircle} from 'react-icons/tb';
import {GrDocumentPdf} from 'react-icons/gr';
import {TfiBook} from 'react-icons/tfi';
import {useState} from 'react';


const Nav = () => {
  const [activeNav, setactiveNav] = useState('/')
  return (
  <nav>
<a href="/" onClick={() => setactiveNav('/')} className={activeNav === '/' ? 'active' : ''}><TiHome /></a>
<a href="/about" onClick={() => setactiveNav('/about')} className={activeNav === '/about' ? 'active' : ''}><TbUserCircle /></a>
<a href="/contact" onClick={() => setactiveNav('/contact')} className={activeNav === '/contact' ? 'active' : ''}><MdOutlineMessage /></a>
<a href="/portfolio" onClick={() => setactiveNav('/portfolio')} className={activeNav === '/portfolio' ? 'active' : ''}><TfiBook /></a>
<a href="/resume" onClick={() => setactiveNav('/resume')} className={activeNav === '/resume' ? 'active' : ''}><GrDocumentPdf /></a>
</nav>
  )
}

export default Nav