import React from 'react';
import { Link } from "react-router-dom";
import './nav.css';
import '../../index.css';
import { TiHome } from 'react-icons/ti';
import { MdOutlineMessage} from 'react-icons/md';
import {TbUserCircle} from 'react-icons/tb';
import {AiOutlineFileWord} from 'react-icons/ai';
import {TfiBook} from 'react-icons/tfi';
import {useState} from 'react';


const Nav = () => {
  const [activeNav, setactiveNav] = useState('/about')
  return (
  <nav>
<Link to="/" onClick={() => setactiveNav('/')} className={activeNav === '/' ? 'active' : ''}><TiHome /></Link>
<Link to="/about" onClick={() => setactiveNav('/about')} className={activeNav === '/about' ? 'active' : ''}><TbUserCircle /></Link>
<Link to="/contact" onClick={() => setactiveNav('/contact')} className={activeNav === '/contact' ? 'active' : ''}><MdOutlineMessage /></Link>
<Link to="/portfolio" onClick={() => setactiveNav('/portfolio')} className={activeNav === '/portfolio' ? 'active' : ''}><TfiBook /></Link>
<Link to="/cv" onClick={() => setactiveNav('/cv')} className={activeNav === '/cv' ? 'active' : ''}><AiOutlineFileWord /></Link>
</nav>
  )
}

export default Nav