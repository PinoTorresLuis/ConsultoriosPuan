import React from 'react';
import { useState } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars, faXmark} from '@fortawesome/free-solid-svg-icons' 
import LogoTipo4 from '../../assets/logos/logotipo4.png';

const Nav = () => {

  const [show, setShow] = useState ();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <nav>
      <div class="container-navegador">
        <div class="navbar-nav">        
        <div class="imagen-logo">
         <a href="index.html"><img class="imgNav" src= {LogoTipo4}/></a> 
         <h1 class="titulo-navbar">DENTAL <b class="negrita-titulo">PUÁN</b></h1>    
        </div>
        <div> 
        <i id="btn-menu" onClick={handleShow}><FontAwesomeIcon className="fa-solid"  icon= {faBars}/></i>
        <i id="btn-close" onClick={handleClose}><FontAwesomeIcon className="fa-solid"  icon= {faXmark}/></i>
        </div>    
        <div class="menu-navbar collapse-navbar" id="MenuNavegacion" show={show}>
          <div class="container-nav">
              <li class="nav-item"><a class="nav-link-item" href="#inicio"> Inicio</a></li> 
              <li class="nav-item"><a class="nav-link-item" href="#tratamientos">Tratamientos</a></li>
              <li class="nav-item"><a class="nav-link-item" href="#galeria">Galeria</a></li>
              <li class="nav-item"><a class="nav-link-item" href="#pagos">Medios de Pago</a></li>
          </div>

          <div class="container-nav">
              <h5 class="titulo-navbar-item"><b class="horario">Horario de atención</b></h5>
              <li class="nav-item">Lúnes a viernes</li>
              <li class="nav-item">10:00 AM - 18:00 PM</li>  
          </div>

          <div class="container-nav">
            <h5 class="titulo-navbar-item">Llamanos</h5>
            <p class="nav-numero">01122592717</p> 
          </div>
        </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav