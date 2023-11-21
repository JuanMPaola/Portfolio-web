import React from 'react';
import { Link } from 'react-scroll';
import style from "./slidenav.module.css";
function SlideNav () {
  return (
    <div className={style.container}>
{/* 
        <p> About </p>
        <p> Projects</p>
        <p> Contacts </p> */}
        <Link to='about' spy={true} smooth={true} offset={0} duration={500}>About</Link>
        <Link to='projects'spy={true} smooth={true} offset={0} duration={500}>Projects</Link>
        <Link to='contact' spy={true} smooth={true} offset={0} duration={500}>Contacts</Link>
    </div> 
    
  );
}

export default SlideNav ;