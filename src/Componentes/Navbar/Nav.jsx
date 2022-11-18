import React from 'react';
import { useState } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars, faXmark} from '@fortawesome/free-solid-svg-icons' 
import LogoTipo4 from '../../assets/logos/logotipo4.png';

const Nav = () => {
  const [show, setShow] = useState (false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // window.addEventListener("scroll", function(){
  //   let showNav = document.querySelector(".navbar-nav");
  //   showNav.classList.toggle("container_show_nav",window.scrollY> 500 && window.scrollY < 2000);
  // })

  return (
    <nav>
      <div className="container-navegador">
        <div className="navbar-nav">        
        <div className="imagen-logo">
         <a href="index.html"><img className="imgNav" src= {LogoTipo4}/></a> 
         <h1 className="titulo-navbar">DENTAL <b className="negrita-titulo">PUÁN</b></h1>    
        </div>
        <div className='icon_hamburguesa'> 
        { show === false ?
        <i onClick={handleShow}><FontAwesomeIcon className="fa-solid"  icon= {faBars}/></i>
        :
        <i onClick={handleClose}><FontAwesomeIcon className="fa-solid"  icon= {faXmark}/></i>
        }
        </div>    
        <div className={show === false ? "menu-navbar" : "collapse-navbar"}>
          <div className="container-nav">
              <li className="nav-item"><a className="nav-link-item" href="#tratamientos">Tratamientos</a></li>
              <li className="nav-item"><a className="nav-link-item" href="#galeria">Galeria</a></li>
              <li className="nav-item"><a className="nav-link-item" href="#pagos">Medios de Pago</a></li>
          </div>

          <div className="container-nav">
              <h5 className="titulo-navbar-item"><b className="horario">Horario de atención</b></h5>
              <li className="nav-item">Lúnes a viernes</li>
              <li className="nav-item">10:00 AM - 18:00 PM</li>  
          </div>

          <div className="container-nav">
            <h5 className="titulo-navbar-item">Llamanos</h5>
            <p className="nav-numero">01122592717</p> 
          </div>
        </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav