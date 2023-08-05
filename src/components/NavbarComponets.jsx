import React,{useState} from 'react';
import  './NavbarComponets.css';

function Narbar(){
  const [isOpen,setIsOpen]=useState(false)
    return(
       <nav className='navbar'>
          <div className="nav_logo">FILMFOLIO</div>
          <div className={`nav_items ${ isOpen && "open"}`}>
            <a href="#">Inicio</a>
            <a href="#">bio</a>
            <a href="#">acerca</a>
            <a href="#">entre otros</a>
          </div>
          <div className={`nav_toggle ${isOpen && "open"}`} onClick={()=>setIsOpen(!isOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          </nav>
    )
}

export default Narbar